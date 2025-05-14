import { prisma } from '../server';
import {
  ListaCompras,
  ItemListaCompras,
  Prisma,
  Ingrediente,
} from '../../generated/prisma/client';
import { findOrCreateIngrediente, FindOrCreateIngredientePayload } from './ingrediente.repository';

// interface para adicionar um item (ingrediente) à lista de compras
export interface AddIngredienteToListaData {
  ingredienteId?: number;     // id do ingrediente se já conhecido
  nomeIngrediente?: string;   // nome do ingrediente para encontrar ou criar
  categoriaIngrediente?: string; // categoria se um novo ingrediente for criado
}

// não precisamos de uma interface para "update" se "comprar" significa remover,
// e o campo 'comprado' não existe mais no itemlistacompras.

/* encontra ou cria a lista de compras para um utilizador (uma por utilizador).
params: usuarioid, tx (cliente de transação prisma opcional). returns: lista de compras. */
export const findOrCreateListaComprasParaUsuario = async (
  usuarioId: number,
  tx?: Prisma.TransactionClient // permite operar dentro de uma transação prisma
): Promise<ListaCompras> => {
  const prismaClient = tx || prisma;
  let lista = await prismaClient.listaCompras.findUnique({
    where: { usuarioId },
  });

  if (!lista) {
    // console.log(`repositório listacompras: criando nova lista para utilizador id: ${usuarioId}`);
    lista = await prismaClient.listaCompras.create({
      data: {
        usuario: { connect: { id: usuarioId } },
      },
    });
  } else {
    // console.log(`repositório listacompras: lista encontrada para utilizador id: ${usuarioId}`);
  }
  return lista;
};

/* obtém a lista de compras ativa (itens atuais, pois "comprado" = removido).
param usuarioid: id do utilizador. returns: lista com itens ou null. */
export const getListaComprasComItens = async (usuarioId: number): Promise<(ListaCompras & { itens: (ItemListaCompras & { ingrediente: Ingrediente })[] }) | null> => {
  // console.log(`repositório listacompras: buscando lista para utilizador id: ${usuarioId}`);
  return prisma.listaCompras.findUnique({
    where: { usuarioId },
    include: {
      itens: { // por padrão, todos os itens existentes (que não foram "comprados e removidos")
        include: {
          ingrediente: true, // inclui os detalhes do ingrediente para cada item
        },
        orderBy: {
          ingrediente: { nome: 'asc' }
        }
      },
    },
  });
};

/* adiciona ingrediente à lista (cria ingrediente no sistema se novo).
params: usuarioid, data. returns: itemlista criado ou existente. */
export const addItemToListaCompras = async (
  usuarioId: number,
  data: AddIngredienteToListaData
): Promise<ItemListaCompras> => {
  return prisma.$transaction(async (tx) => {
    // 1. garante que a lista de compras existe para o utilizador
    const listaCompras = await findOrCreateListaComprasParaUsuario(usuarioId, tx);

    // 2. encontra ou cria o ingrediente no sistema
    const payloadIngrediente: FindOrCreateIngredientePayload = {
        id: data.ingredienteId,
        nome: data.nomeIngrediente,
        categoriaIngrediente: data.categoriaIngrediente,
    };
    // validação para garantir que temos como identificar o ingrediente
    if (!payloadIngrediente.id && !payloadIngrediente.nome) {
        throw new Error("é necessário fornecer 'ingredienteId' ou 'nomeIngrediente'.");
    }
    const ingrediente = await findOrCreateIngrediente(payloadIngrediente, tx);

    // 3. verifica se este ingrediente já está na lista de compras do utilizador
    const itemExistente = await tx.itemListaCompras.findFirst({
      where: {
        listaComprasId: listaCompras.id,
        ingredienteId: ingrediente.id,
      }
    });

    if (itemExistente) {
      // se o ingrediente já existe na lista, simplesmente o retorna
      console.log(`repositório listacompras: ingrediente id: ${ingrediente.id} já existe na lista de compras id: ${listaCompras.id}.`);
      return tx.itemListaCompras.findUniqueOrThrow({ // usa finduniqueorthrow para garantir que o item é retornado
          where: { id: itemExistente.id },
          include: { ingrediente: true }
      });
    }

    // 4. se não existe, cria o novo item na lista de compras
    // console.log(`repositório listacompras: adicionando ingrediente id: ${ingrediente.id} à lista id: ${listaCompras.id}`);
    return tx.itemListaCompras.create({
      data: {
        listaCompras: { connect: { id: listaCompras.id } },
        ingrediente: { connect: { id: ingrediente.id } },
        // 'comprado' não existe mais no schema itemlistacompras
      },
      include: { ingrediente: true } // retorna o item com detalhes do ingrediente
    });
  });
};

/* marca item como "comprado" (removendo-o da lista).
param itemid: id do item. returns: item deletado ou null. */
export const removerItemDaListaPorCompra = async (itemId: number): Promise<ItemListaCompras | null> => {
  try {
    // console.log(`repositório listacompras: removendo item id: ${itemId} (marcado como comprado).`);
    const itemDeletado = await prisma.itemListaCompras.delete({
      where: { id: itemId },
    });
    return itemDeletado;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      // p2025: "an operation failed because it depends on one or more records that were required but not found."
      // significa que o item com o id fornecido não foi encontrado para deletar.
      console.warn(`repositório listacompras: item id: ${itemId} não encontrado para remoção.`);
      return null;
    }
    throw error; // relança outros erros
  }
};

/* adiciona ingredientes de uma receita à lista de compras (cria se não existir).
params: usuarioid, receitaid. returns: lista de compras atualizada com itens. */
export const adicionarIngredientesDeReceitaNaLista = async (
    usuarioId: number,
    receitaId: number
): Promise<ListaCompras & { itens: (ItemListaCompras & { ingrediente: Ingrediente })[] }> => {
    return prisma.$transaction(async (tx) => {
        // 1. encontra a receita e os seus ingredientes
        const receita = await tx.receita.findUnique({
            where: { id: receitaId },
            include: {
                ingredientes: { // itemreceitaingrediente
                    include: {
                        ingrediente: true // ingrediente
                    }
                }
            }
        });

        if (!receita) {
            throw new Error(`receita com ID ${receitaId} não encontrada.`);
        }

        // 2. garante que a lista de compras existe para o utilizador
        const listaCompras = await findOrCreateListaComprasParaUsuario(usuarioId, tx);

        if (!receita.ingredientes || receita.ingredientes.length === 0) {
            // não faz nada se a receita não tiver ingredientes, mas retorna a lista atual
            const listaAtual = await getListaComprasComItens(usuarioId);
            return listaAtual || { ...listaCompras, itens: [] }; // retorna a lista (pode estar vazia)
        }

        // 3. para cada ingrediente da receita, adiciona-o à lista de compras se ainda não estiver lá.
        for (const itemReceita of receita.ingredientes) {
            const ingredienteDaReceita = itemReceita.ingrediente;

            // verifica se este ingrediente já está na lista de compras
            const itemExistenteNaLista = await tx.itemListaCompras.findFirst({
                where: {
                    listaComprasId: listaCompras.id,
                    ingredienteId: ingredienteDaReceita.id,
                }
            });

            if (!itemExistenteNaLista) {
                // se não existe, cria um novo item na lista
                // console.log(`repositório listacompras: adicionando ingrediente id: ${ingredienteDaReceita.id} da receita à lista id: ${listaCompras.id}`);
                await tx.itemListaCompras.create({
                    data: {
                        listaComprasId: listaCompras.id,
                        ingredienteId: ingredienteDaReceita.id,
                        // 'comprado' não existe mais no schema itemlistacompras
                    }
                });
            }
            // se o item já existe na lista, não fazemos nada.
        }

        // 4. retorna a lista de compras atualizada com todos os itens
        const listaAtualizada = await getListaComprasComItens(usuarioId);
        if (!listaAtualizada) {
            // isto não deveria acontecer se findorcreatelistacomprasparausuario funcionou
            throw new Error("não foi possível obter a lista de compras atualizada.");
        }
        return listaAtualizada;
    });
};