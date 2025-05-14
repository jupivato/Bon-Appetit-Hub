import { prisma } from '../server';
import { Etiqueta, Prisma } from '../../generated/prisma/client';
import { toLower } from '../utils/string.utils'; // importa a função utilitária

export interface CreateEtiquetaData {
  nome: string;
}

export interface UpdateEtiquetaData {
  nome?: string;
}

/* cria uma nova etiqueta, salva o nome em lowercase.
param data: dados. returns: etiqueta. throws: erro se nome duplicado (case-insensitive). */
export const createEtiqueta = async (data: CreateEtiquetaData): Promise<Etiqueta> => {
  const nomeLower = toLower(data.nome)!;

  // verifica se já existe uma etiqueta com este nome
  const etiquetaExistente = await prisma.etiqueta.findUnique({
    where: { nome: nomeLower },
  });

  if (etiquetaExistente) {
    throw new Error(`etiqueta com o nome "${data.nome}" já existe.`);
  }

  return prisma.etiqueta.create({
    data: {
      nome: nomeLower,
    },
  });
};

/* lista todas as etiquetas, permite filtrar por nome.
param filtros: opcionais (ex: por nome). returns: lista de etiquetas. */
export const listarTodasEtiquetas = async (filtros?: { nome?: string }): Promise<Etiqueta[]> => {
  const where: Prisma.EtiquetaWhereInput = {};
  if (filtros?.nome) {
    const nomeFiltrar = toLower(filtros.nome);
    if (typeof nomeFiltrar === 'string') {
      where.nome = { contains: nomeFiltrar, mode: 'insensitive' };
    }
  }
  return prisma.etiqueta.findMany({
    where,
    orderBy: { nome: 'asc' },
    // include: { _count: { select: { receitas: true } } }
  });
};

/* busca uma etiqueta específica pelo seu id.
param id: id da etiqueta. returns: etiqueta encontrada ou null. */
export const findEtiquetaPorId = async (id: number): Promise<Etiqueta | null> => {
  return prisma.etiqueta.findUnique({
    where: { id },
    // include: { _count: { select: { receitas: true } } } // opcional
  });
};

/* busca uma etiqueta pelo nome (exato, após conversão para lowercase).
param nome: nome da etiqueta. returns: etiqueta encontrada ou null. */
export const findEtiquetaPorNome = async (nome: string): Promise<Etiqueta | null> => {
    return prisma.etiqueta.findUnique({
        where: { nome: toLower(nome)! }
    });
}

/* atualiza uma etiqueta existente, salva o nome em lowercase.
params: id, data. returns: etiqueta atualizada/null. throws: erro nome duplicado. */
export const updateEtiqueta = async (id: number, data: UpdateEtiquetaData): Promise<Etiqueta | null> => {
  const dadosParaAtualizar: Prisma.EtiquetaUpdateInput = {};

  if (data.nome !== undefined) {
    const nomeLower = toLower(data.nome)!;
    // verifica se o novo nome já existe em outra etiqueta
    const existenteComNovoNome = await prisma.etiqueta.findUnique({
      where: { nome: nomeLower },
    });
    if (existenteComNovoNome && existenteComNovoNome.id !== id) {
      throw new Error(`outra etiqueta já existe com o nome "${data.nome}".`);
    }
    dadosParaAtualizar.nome = nomeLower;
  }

  if (Object.keys(dadosParaAtualizar).length === 0) {
    return prisma.etiqueta.findUnique({ where: { id } });
  }

  try {
    return await prisma.etiqueta.update({
      where: { id },
      data: dadosParaAtualizar,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') { // não encontrado para atualizar
        return null;
      }
      if (error.code === 'P2002') { // falha na constraint unique
          throw new Error(`falha ao atualizar etiqueta: o nome fornecido já pode estar em uso.`);
      }
    }
    throw error;
  }
};

/* deleta uma etiqueta.
param id: id da etiqueta. returns: etiqueta deletada/null. throws: erro se em uso. */
export const deleteEtiqueta = async (id: number): Promise<Etiqueta | null> => {
  try {
    return await prisma.etiqueta.delete({
      where: { id },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') { // não encontrado para deletar
        return null;
      }
      // p2003: foreign key constraint failed (etiqueta está em uso na tabela receitaetiqueta)
      if (error.code === 'P2003') {
        throw new Error(`não é possível deletar a etiqueta pois ela está sendo usada em receitas.`);
      }
    }
    throw error;
  }
};