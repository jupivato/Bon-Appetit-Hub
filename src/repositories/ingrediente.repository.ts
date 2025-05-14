import { Ingrediente, Prisma } from '../../generated/prisma/client';
import { prisma } from '../server';
import { toLower } from '../utils/string.utils';

// interface para dados necessários para encontrar ou criar ingrediente
export interface FindOrCreateIngredientePayload {
  id?: number;
  nome?: string;
  categoriaIngrediente?: string;
}

// função para encontrar ingrediente por id/nome ou criar um novo
export const findOrCreateIngrediente = async (
  payload: FindOrCreateIngredientePayload,
  tx?: Prisma.TransactionClient
): Promise<Ingrediente> => {
  const prismaClient = tx || prisma;

  // tentar encontrar por id primeiro se fornecido
  if (payload.id) {
    const ingrediente = await prismaClient.ingrediente.findUnique({
      where: { id: payload.id }
    });

    if (ingrediente) {
      return ingrediente;
    }
  }

  // se não encontrou por id ou id não foi fornecido, procura por nome
  if (payload.nome) {
    const nomeLower = toLower(payload.nome);

    if (!nomeLower) {
      throw new Error('Nome do ingrediente é obrigatório quando id não for fornecido');
    }

    // procura por nome
    let ingrediente = await prismaClient.ingrediente.findFirst({
      where: {
        nome: {
          equals: nomeLower,
          mode: 'insensitive'
        }
      }
    });

    // se não encontrou, cria um novo
    if (!ingrediente) {
      ingrediente = await prismaClient.ingrediente.create({
        data: {
          nome: nomeLower,
          categoriaIngrediente: payload.categoriaIngrediente ? toLower(payload.categoriaIngrediente) : null
        }
      });
    }

    return ingrediente;
  }

  throw new Error('É necessário fornecer id ou nome para encontrar ou criar ingrediente');
};

// lista todos os ingredientes
export const listarIngredientes = async (): Promise<Ingrediente[]> => {
  return prisma.ingrediente.findMany({
    orderBy: {
      nome: 'asc'
    }
  });
};

// busca ingrediente por id
export const findIngredientePorId = async (id: number): Promise<Ingrediente | null> => {
  return prisma.ingrediente.findUnique({
    where: { id }
  });
};

// para manter compatibilidade com código existente
export const listarTodosIngredientes = async (filtros?: { nome?: string; categoria?: string }): Promise<Ingrediente[]> => {
  const where: Prisma.IngredienteWhereInput = {};

  if (filtros?.nome) {
    const nomeFiltrar = toLower(filtros.nome);
    if (typeof nomeFiltrar === 'string') {
      where.nome = { contains: nomeFiltrar, mode: 'insensitive' };
    }
  }

  if (filtros?.categoria) {
    const categoriaFiltrar = toLower(filtros.categoria);
    if (typeof categoriaFiltrar === 'string') {
      where.categoriaIngrediente = { contains: categoriaFiltrar, mode: 'insensitive' };
    }
  }

  return prisma.ingrediente.findMany({
    where,
    orderBy: { nome: 'asc' },
  });
};

// interface e função adicional para garantir compatibilidade
export interface CreateIngredienteData {
  nome: string;
  imagemUrl?: string;
  categoriaIngrediente?: string;
}

export interface UpdateIngredienteData {
  nome?: string;
  imagemUrl?: string;
  categoriaIngrediente?: string;
}

export const createIngrediente = async (data: CreateIngredienteData): Promise<Ingrediente> => {
  const nomeLower = toLower(data.nome)!;

  // verifica se já existe ingrediente com este nome
  const ingredienteExistente = await prisma.ingrediente.findFirst({
    where: {
      nome: {
        equals: nomeLower,
        mode: 'insensitive'
      }
    }
  });

  if (ingredienteExistente) {
    throw new Error(`Ingrediente com nome "${data.nome}" já existe.`);
  }

  return prisma.ingrediente.create({
    data: {
      nome: nomeLower,
      imagemUrl: data.imagemUrl,
      categoriaIngrediente: data.categoriaIngrediente ? toLower(data.categoriaIngrediente) : null
    }
  });
};

export const updateIngrediente = async (id: number, data: UpdateIngredienteData): Promise<Ingrediente | null> => {
  const updateData: Prisma.IngredienteUpdateInput = {};

  if (data.nome !== undefined) {
    updateData.nome = toLower(data.nome);
  }
  if (data.imagemUrl !== undefined) {
    updateData.imagemUrl = data.imagemUrl;
  }
  if (data.categoriaIngrediente !== undefined) {
    updateData.categoriaIngrediente = toLower(data.categoriaIngrediente);
  }

  try {
    return await prisma.ingrediente.update({
      where: { id },
      data: updateData
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      return null;
    }
    throw error;
  }
};

export const deleteIngrediente = async (id: number): Promise<Ingrediente | null> => {
  try {
    return await prisma.ingrediente.delete({
      where: { id }
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        return null;
      }
      if (error.code === 'P2003') {
        throw new Error("Não é possível deletar o ingrediente pois está sendo usado em receitas.");
      }
    }
    throw error;
  }
};