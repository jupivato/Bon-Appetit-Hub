import { prisma } from '../server';
import { Comentario, Prisma, Usuario } from '../../generated/prisma/client';
import { toLower } from '../utils/string.utils';

// interface para os dados de criação de um comentário
export interface CreateComentarioData {
  texto: string;
  autorId: number; // ID do usuário que está comentando
  receitaId: number; // ID da receita que está sendo comentada
}

// interface para os dados de atualização de um comentário
export interface UpdateComentarioData {
  texto?: string;
}

/*
cria um novo comentário para uma receita.
salva o texto em lowercase.
 */
export const createComentario = async (data: CreateComentarioData): Promise<Comentario> => {
  const textoLower = toLower(data.texto)!;

  return prisma.comentario.create({
    data: {
      texto: textoLower,
      autor: { connect: { id: data.autorId } },
      receita: { connect: { id: data.receitaId } },
    },
    include: { // inclui o autor para retornar na resposta
        autor: {
            select: { id: true, nome: true, email: true }
        }
    }
  });
};

/*
lista todos os comentários de uma receita específica.
 */
export const findComentariosPorReceitaId = async (receitaId: number): Promise<Comentario[]> => {
  return prisma.comentario.findMany({
    where: { receitaId },
    include: {
      autor: { // inclui dados básicos do autor do comentário
        select: {
          id: true,
          nome: true,
          // não incluir email aqui para privacidade, a menos que necessário
        },
      },
    },
    orderBy: {
      createdAt: 'asc', // ou 'desc' para os mais recentes primeiro
    },
  });
};

/**
busca um comentário específico pelo seu ID.
 */
export const findComentarioPorId = async (id: number): Promise<Comentario | null> => {
  return prisma.comentario.findUnique({
    where: { id },
    include: {
        autor: { select: { id: true, nome: true }}
    }
  });
};

/*
atualiza um comentário existente.
salva o texto em lowercase.
 */
export const updateComentario = async (id: number, data: UpdateComentarioData): Promise<Comentario | null> => {
  const dadosParaAtualizar: Prisma.ComentarioUpdateInput = {};

  if (data.texto !== undefined) {
    dadosParaAtualizar.texto = toLower(data.texto);
  }

  if (Object.keys(dadosParaAtualizar).length === 0) {
    // nenhum dado para atualizar, retorna o comentário existente
    return prisma.comentario.findUnique({ where: { id }, include: { autor: {select: {id: true, nome: true}}} });
  }

  try {
    return await prisma.comentario.update({
      where: { id },
      data: dadosParaAtualizar,
      include: {
        autor: {select: {id: true, nome: true}}
      }
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') { // não encontrado para atualizar
      return null;
    }
    throw error;
  }
};

/*
 * deleta um comentário.
 */
export const deleteComentario = async (id: number): Promise<Comentario | null> => {
  try {
    return await prisma.comentario.delete({
      where: { id },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') { // não encontrado para deletar
      return null;
    }
    throw error;
  }
};
