import { prisma } from '../server';
import { ReceitaFavorita, Prisma, Receita, Usuario } from '../../generated/prisma/client';
import { capitalizeWords, capitalizeFirstLetter } from '../utils/string.utils'; // para formatar saída de receitas

/* verifica se uma receita já foi favoritada por um utilizador.
params: usuarioid, receitaid, tx (cliente transação prisma opcional). returns: boolean. */
export const verificarSeReceitaEFavorita = async (
  usuarioId: number,
  receitaId: number,
  tx?: Prisma.TransactionClient
): Promise<boolean> => {
  const prismaClient = tx || prisma;
  const favorita = await prismaClient.receitaFavorita.findUnique({
    where: {
      usuarioId_receitaId: { // nome do índice único @@id([usuarioid, receitaid])
        usuarioId,
        receitaId,
      },
    },
  });
  return !!favorita; // converte para boolean (true se existir, false se null)
};

/* adiciona receita às favoritas (não faz nada se já favoritada).
params: usuarioid, receitaid. returns: registo receitafavorita. throws: erro se receita/utilizador não existe. */
export const favoritarReceita = async (
  usuarioId: number,
  receitaId: number
): Promise<ReceitaFavorita & { receita: Partial<Receita> }> => { // retorna também dados parciais da receita
  return prisma.$transaction(async (tx) => {
    // verifica se a receita e o utilizador existem
    const [utilizador, receita] = await Promise.all([
        tx.usuario.findUnique({ where: { id: usuarioId } }),
        tx.receita.findUnique({ where: { id: receitaId } })
    ]);

    if (!utilizador) {
        throw new Error(`utilizador com ID ${usuarioId} não encontrado.`);
    }
    if (!receita) {
        throw new Error(`receita com ID ${receitaId} não encontrada.`);
    }

    const jaFavorita = await verificarSeReceitaEFavorita(usuarioId, receitaId, tx);

    if (jaFavorita) {
      // se já é favorita, apenas retorna a entrada existente
      const favoritaExistente = await tx.receitaFavorita.findUniqueOrThrow({
        where: { usuarioId_receitaId: { usuarioId, receitaId } },
        include: { receita: { select: { id: true, titulo: true, imagemUrl: true } } } // inclui alguns dados da receita
      });
      console.log(`receita id: ${receitaId} já estava favoritada pelo utilizador id: ${usuarioId}.`);
      return favoritaExistente;
    }

    // se não é favorita, cria a nova entrada
    console.log(`favoritando receita id: ${receitaId} para o utilizador id: ${usuarioId}.`);
    return tx.receitaFavorita.create({
      data: {
        usuario: { connect: { id: usuarioId } },
        receita: { connect: { id: receitaId } },
      },
      include: { receita: { select: { id: true, titulo: true, imagemUrl: true } } }
    });
  });
};

/* remove receita das favoritas (não faz nada se não favoritada).
params: usuarioid, receitaid. returns: boolean (true se desfavoritou). */
export const desfavoritarReceita = async (
  usuarioId: number,
  receitaId: number
): Promise<boolean> => {
  try {
    await prisma.receitaFavorita.delete({
      where: {
        usuarioId_receitaId: { // nome do índice único
          usuarioId,
          receitaId,
        },
      },
    });
    console.log(`receita id: ${receitaId} desfavoritada pelo utilizador id: ${usuarioId}.`);
    return true; // indica que foi desfavoritada
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      // p2025: "an operation failed because it depends on one or more records that were required but not found."
      // significa que a entrada receitafavorita não existia para ser deletada.
      console.warn(`tentativa de desfavoritar receita id: ${receitaId} pelo utilizador id: ${usuarioId}, mas não estava favoritada.`);
      return false; // não estava na lista para ser desfavoritada
    }
    throw error; // relança outros erros
  }
};

/* lista todas as receitas favoritas de um utilizador específico.
param usuarioid: id do utilizador. returns: lista de objetos receita favoritados. */
export const listarReceitasFavoritasPorUsuario = async (usuarioId: number): Promise<Partial<Receita>[]> => {
  const favoritas = await prisma.receitaFavorita.findMany({
    where: { usuarioId },
    include: {
      receita: { // inclui os detalhes completos da receita
        include: {
            autor: { select: { id: true, nome: true } },
            categoria: { select: { id: true, nome: true } },
            _count: {select: {favoritadoPor: true, comentarios: true}}
        }
      },
    },
    orderBy: {
      favoritedAt: 'desc', // mais recentes primeiro
    },
  });

  // mapeia para retornar apenas os objetos receita, formatados
  return favoritas.map(fav => {
    const receitaFormatada = {
        ...fav.receita,
        titulo: capitalizeWords(fav.receita.titulo),
        descricao: fav.receita.descricao ? capitalizeFirstLetter(fav.receita.descricao) : null,
        categoria: fav.receita.categoria ? {
            ...fav.receita.categoria,
            nome: capitalizeWords(fav.receita.categoria.nome)
        } : null,
        autor: fav.receita.autor ? {
            ...fav.receita.autor,
            nome: capitalizeWords(fav.receita.autor.nome)
        } : null,
    };
    // delete (receitaFormatada as any).autorId; // exemplo se não quiser expor autorid
    return receitaFormatada as Partial<Receita>; // faz um cast para partial<receita>
  });
};