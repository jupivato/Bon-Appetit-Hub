import { Request, Response } from 'express';
import * as listaComprasRepository from '../repositories/listacompras.repository';
import { AuthenticatedRequest } from '../middlewares/auth.middleware';
import { capitalizeWords } from '../utils/string.utils'; // para formatar a saída
import { Prisma } from '../../generated/prisma/client'; // para tipos de payload
import { prisma } from '../server'; // para verificações de posse, se necessário

// tipo para um item da lista de compras que inclui o seu ingrediente
// como 'comprado' foi removido do model itemlistacompras, ele não aparece aqui
type ItemComIngrediente = Prisma.ItemListaComprasGetPayload<{
  include: { ingrediente: true }
}>;

// tipo para a lista de compras completa que inclui os itens com os seus ingredientes
type ListaComprasComItensDetalhados = Prisma.ListaComprasGetPayload<{
  include: {
    itens: {
      include: { ingrediente: true }
    }
  }
}>;

// tipo auxiliar para formatar os itens da lista de compras na resposta
// removemos 'comprado' e 'unidade'
type ItemListaFormatado = {
  id: number; // id do itemlistacompras
  ingredienteId: number;
  ingrediente?: {
    id: number;
    nome: string;
    imagemUrl: string | null;
    categoriaIngrediente: string | null;
  } | null;
};

/* controller para obter a lista de compras do utilizador logado.
se a lista não existir, uma nova é criada e retornada (geralmente vazia). */
export const getMinhaListaComprasController = async (req: Request, res: Response): Promise<void> => {
  const authReq = req as AuthenticatedRequest;
  const usuarioId = authReq.usuario?.id;

  if (!usuarioId) {
    res.status(401).json({ message: 'não autorizado. utilizador não identificado.' });
    return;
  }

  try {
    let lista = await listaComprasRepository.getListaComprasComItens(usuarioId) as ListaComprasComItensDetalhados | null;

    // garante que a lista exista para o utilizador
    if (!lista) {
      await listaComprasRepository.findOrCreateListaComprasParaUsuario(usuarioId);
      lista = await listaComprasRepository.getListaComprasComItens(usuarioId) as ListaComprasComItensDetalhados | null;
    }

    if (lista) {
      const itensFormatados: ItemListaFormatado[] = lista.itens.map((item: ItemComIngrediente) => ({
        id: item.id,
        ingredienteId: item.ingredienteId,
        ingrediente: item.ingrediente ? {
          id: item.ingrediente.id,
          nome: capitalizeWords(item.ingrediente.nome),
          imagemUrl: item.ingrediente.imagemUrl,
          categoriaIngrediente: item.ingrediente.categoriaIngrediente ? capitalizeWords(item.ingrediente.categoriaIngrediente) : null,
        } : null,
      }));
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { itens, ...listaBase } = lista; // remove 'itens' originais
      res.status(200).json({ ...listaBase, itens: itensFormatados });
    } else {
      // isto não deveria acontecer se findorcreatelistacomprasparausuario funcionar
      res.status(404).json({ message: 'lista de compras não encontrada e não pôde ser criada.' });
    }
    return; // garante retorno void
  } catch (error) {
    console.error("erro ao obter lista de compras:", error);
    res.status(500).json({ message: 'erro interno ao buscar lista de compras.' });
    return; // garante retorno void
  }
};

/* controller para adicionar um ingrediente à lista de compras do utilizador logado. */
export const addItemMinhaListaComprasController = async (req: Request, res: Response): Promise<void> => {
  const authReq = req as AuthenticatedRequest;
  const usuarioId = authReq.usuario?.id;
  const itemData = req.body as listaComprasRepository.AddIngredienteToListaData;

  if (!usuarioId) {
    res.status(401).json({ message: 'não autorizado.' });
    return;
  }

  if (!itemData.ingredienteId && !itemData.nomeIngrediente) {
    res.status(400).json({ message: "dados incompletos para adicionar item. é necessário 'ingredienteId' ou 'nomeIngrediente'." });
    return;
  }

  try {
    const novoItem = await listaComprasRepository.addItemToListaCompras(usuarioId, itemData) as ItemComIngrediente; // cast para o tipo com ingrediente
    const itemFormatado: ItemListaFormatado = {
        id: novoItem.id,
        ingredienteId: novoItem.ingredienteId,
        ingrediente: novoItem.ingrediente ? {
            id: novoItem.ingrediente.id,
            nome: capitalizeWords(novoItem.ingrediente.nome),
            imagemUrl: novoItem.ingrediente.imagemUrl,
            categoriaIngrediente: novoItem.ingrediente.categoriaIngrediente ? capitalizeWords(novoItem.ingrediente.categoriaIngrediente) : null,
        } : null,
    };
    res.status(201).json(itemFormatado);
    return; // garante retorno void
  } catch (error: any) {
    console.error("erro ao adicionar item à lista de compras:", error);
    if (error.message?.includes("é necessário fornecer")) {
        res.status(400).json({ message: error.message });
    } else {
        res.status(500).json({ message: 'erro interno ao adicionar item à lista.' });
    }
    return; // garante retorno void
  }
};

/* controller para "marcar como comprado" um item, o que significa removê-lo da lista.
o itemid vem da url. */
export const marcarItemCompradoERemoverController = async (req: Request, res: Response): Promise<void> => {
  const authReq = req as AuthenticatedRequest;
  const usuarioId = authReq.usuario?.id; // para verificar posse
  const itemId = parseInt(req.params.itemId, 10);

  if (isNaN(itemId)) {
    res.status(400).json({ message: 'ID do item inválido.' });
    return;
  }
  if (!usuarioId) {
    res.status(401).json({ message: 'não autorizado.' });
    return;
  }

  try {
    // verifica se o item pertence à lista do utilizador logado antes de remover
    const itemExistente = await prisma.itemListaCompras.findFirst({
        where: { id: itemId, listaCompras: { usuarioId: usuarioId } }
    });
    if (!itemExistente) {
        res.status(404).json({ message: 'item não encontrado na sua lista de compras ou não autorizado.' });
        return;
    }

    const itemDeletado = await listaComprasRepository.removerItemDaListaPorCompra(itemId);
    if (itemDeletado) {
      res.status(204).send(); // sucesso, sem conteúdo, pois o item foi removido
    } else {
      // o repositório retorna null se p2025 (não encontrado), mas já verificamos acima
      res.status(404).json({ message: 'item não encontrado para remoção.' });
    }
    return; // garante retorno void
  } catch (error) {
    console.error(`erro ao marcar item ${itemId} como comprado e remover:`, error);
    res.status(500).json({ message: 'erro interno ao processar item da lista.' });
    return; // garante retorno void
  }
};

/* controller para adicionar todos os ingredientes de uma receita à lista de compras do utilizador logado.
o receitaid vem da url. */
export const addReceitaToListaComprasController = async (req: Request, res: Response): Promise<void> => {
    const authReq = req as AuthenticatedRequest;
    const usuarioId = authReq.usuario?.id;
    const receitaId = parseInt(req.params.receitaId, 10);

    if (!usuarioId) {
        res.status(401).json({ message: 'não autorizado.' });
        return;
    }
    if (isNaN(receitaId)) {
        res.status(400).json({ message: 'ID da receita inválido.' });
        return;
    }

    try {
        const listaAtualizada = await listaComprasRepository.adicionarIngredientesDeReceitaNaLista(usuarioId, receitaId) as ListaComprasComItensDetalhados;

        const itensFormatados: ItemListaFormatado[] = listaAtualizada.itens.map((item: ItemComIngrediente) => ({
            id: item.id,
            ingredienteId: item.ingredienteId,
            ingrediente: item.ingrediente ? {
                id: item.ingrediente.id,
                nome: capitalizeWords(item.ingrediente.nome),
                imagemUrl: item.ingrediente.imagemUrl,
                categoriaIngrediente: item.ingrediente.categoriaIngrediente ? capitalizeWords(item.ingrediente.categoriaIngrediente) : null,
            } : null,
        }));
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { itens, ...listaBase } = listaAtualizada;
        res.status(200).json({ ...listaBase, itens: itensFormatados });
        return; // garante retorno void
    } catch (error: any) {
        console.error(`erro ao adicionar ingredientes da receita ${receitaId} à lista de compras:`, error);
        if (error.message?.includes("não encontrada")) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'erro interno ao adicionar receita à lista de compras.' });
        }
        return; // garante retorno void
    }
};