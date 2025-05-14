import { prisma } from '../server';
import { Categoria, Prisma } from '../../generated/prisma/client';
import { toLower } from '../utils/string.utils';

export interface CreateCategoriaData {
  nome: string;
}

export interface UpdateCategoriaData {
  nome?: string;
}

/* cria uma nova categoria.
salva o nome em lowercase. */
export const createCategoria = async (data: CreateCategoriaData): Promise<Categoria> => {
  const nomeLower = toLower(data.nome)!;

  // verifica se já existe uma categoria com este nome (case-insensitive)
  const categoriaExistente = await prisma.categoria.findUnique({
    where: { nome: nomeLower },
  });

  if (categoriaExistente) {
    throw new Error(`categoria com o nome "${data.nome}" já existe.`);
  }

  return prisma.categoria.create({
    data: {
      nome: nomeLower,
    },
  });
};

/* lista todas as categorias.
permite filtrar por nome. */
export const listarTodasCategorias = async (filtros?: { nome?: string }): Promise<Categoria[]> => {
  const where: Prisma.CategoriaWhereInput = {};
  if (filtros?.nome) {
    const nomeFiltrar = toLower(filtros.nome);
    if (typeof nomeFiltrar === 'string') { // garante que nomefiltrar é string
      where.nome = { contains: nomeFiltrar, mode: 'insensitive' };
    }
  }
  return prisma.categoria.findMany({
    where,
    orderBy: { nome: 'asc' },
    include: { _count: { select: { receitas: true } } }
  });
};

/* busca uma categoria específica pelo seu id. */
export const findCategoriaPorId = async (id: number): Promise<Categoria | null> => {
  return prisma.categoria.findUnique({
    where: { id },
    include: { _count: { select: { receitas: true } } }
  });
};

/* busca uma categoria pelo nome (exato, após conversão para lowercase). */
export const findCategoriaPorNome = async (nome: string): Promise<Categoria | null> => {
    return prisma.categoria.findUnique({
        where: { nome: toLower(nome)! }
    });
}

/* atualiza uma categoria existente.
salva o nome em lowercase. */
export const updateCategoria = async (id: number, data: UpdateCategoriaData): Promise<Categoria | null> => {
  const dadosParaAtualizar: Prisma.CategoriaUpdateInput = {};

  if (data.nome !== undefined) {
    const nomeLower = toLower(data.nome)!;
    // verifica se o novo nome já existe em outra categoria
    const existenteComNovoNome = await prisma.categoria.findUnique({
      where: { nome: nomeLower },
    });
    if (existenteComNovoNome && existenteComNovoNome.id !== id) {
      throw new Error(`outra categoria já existe com o nome "${data.nome}".`);
    }
    dadosParaAtualizar.nome = nomeLower;
  }

  if (Object.keys(dadosParaAtualizar).length === 0) {
    // nenhum dado para atualizar, retorna a categoria existente
    return prisma.categoria.findUnique({ where: { id } });
  }

  try {
    return await prisma.categoria.update({
      where: { id },
      data: dadosParaAtualizar,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') { // não encontrado para atualizar
        return null;
      }
      // p2002: falha na constraint unique (se o nome já existir e não foi pego pela verificação acima)
      if (error.code === 'P2002') {
          throw new Error(`falha ao atualizar categoria: o nome fornecido já pode estar em uso.`);
      }
    }
    throw error;
  }
};

/* deleta uma categoria. */
export const deleteCategoria = async (id: number): Promise<Categoria | null> => {
  try {
    return await prisma.categoria.delete({
      where: { id },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') { // não encontrado para deletar
        return null;
      }
      if (error.code === 'P2003') {
        throw new Error(`não é possível deletar a categoria pois ela está sendo usada em receitas.`);
      }
    }
    throw error;
  }
};