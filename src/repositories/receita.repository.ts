import { prisma } from '../server';
import {
  Receita,
  Prisma,
  DificuldadeReceita,
} from '../../generated/prisma/client';
import { toLower } from '../utils/string.utils';
import { findOrCreateIngrediente, FindOrCreateIngredientePayload } from './ingrediente.repository';

// interfaces de dados
export interface CreateReceitaData {
  titulo: string;
  descricao: string;
  tempoPreparo: string;
  dificuldade: DificuldadeReceita;
  rendimento: number;
  imagemUrl?: string;
  autorId: number;
  categoriaId: number;
  etiquetas?: { id: number }[];
  ingredientes?: {
    ingredienteId?: number;
    nomeIngrediente?: string;
    categoriaIngrediente?: string;
    quantidade: number;
    unidade: string;
  }[];
}

export interface UpdateReceitaData {
  titulo?: string;
  descricao?: string;
  tempoPreparo?: string;
  dificuldade?: DificuldadeReceita;
  rendimento?: number;
  imagemUrl?: string;
  categoriaId?: number; // id da categoria para conectar
  etiquetas?: { id: number }[];
  ingredientes?: {
    ingredienteId?: number;
    nomeIngrediente?: string;
    categoriaIngrediente?: string;
    quantidade: number;
    unidade: string;
  }[];
}

// funções do repositório

export const createReceita = async (data: CreateReceitaData): Promise<Receita> => {
  const {
    titulo,
    descricao,
    tempoPreparo,
    dificuldade,
    rendimento,
    imagemUrl,
    autorId,
    categoriaId,
    etiquetas,
    ingredientes,
  } = data;

  return prisma.$transaction(async (tx) => {
    // cria a receita base
    const novaReceita = await tx.receita.create({
      data: {
        titulo: toLower(titulo)!,
        descricao: toLower(descricao)!,
        tempoPreparo: toLower(tempoPreparo)!,
        dificuldade,
        rendimento,
        imagemUrl: imagemUrl || null,
        autor: { connect: { id: autorId } },
        categoria: { connect: { id: categoriaId } },
        etiquetas: etiquetas && etiquetas.length > 0
          ? {
              create: etiquetas.map(etiqueta => ({
                etiqueta: { connect: { id: etiqueta.id } },
              })),
            }
          : undefined,
      },
    });

    // processa e cria/conecta os ingredientes
    if (ingredientes && ingredientes.length > 0) {
      const itensParaCriarNaReceita = [];
      for (const itemIngrediente of ingredientes) {
        const payloadIngrediente: FindOrCreateIngredientePayload = {
            id: itemIngrediente.ingredienteId,
            nome: itemIngrediente.nomeIngrediente,
            categoriaIngrediente: itemIngrediente.categoriaIngrediente,
        };
        const ingredienteDb = await findOrCreateIngrediente(payloadIngrediente, tx);
        itensParaCriarNaReceita.push({
          receitaId: novaReceita.id,
          ingredienteId: ingredienteDb.id,
          quantidade: itemIngrediente.quantidade,
          unidade: toLower(itemIngrediente.unidade)!,
        });
      }
      if (itensParaCriarNaReceita.length > 0) {
        await tx.itemReceitaIngrediente.createMany({
          data: itensParaCriarNaReceita,
        });
      }
    }

    // busca e retorna a receita completa
    const receitaCompleta = await tx.receita.findUnique({
      where: { id: novaReceita.id },
      include: {
        autor: { select: { id: true, nome: true, email: true } },
        categoria: true,
        etiquetas: { include: { etiqueta: true } },
        ingredientes: { include: { ingrediente: true } },
        comentarios: { include: { autor: { select: { id: true, nome: true } } } },
        _count: { select: { favoritadoPor: true } },
      }
    });
    if (!receitaCompleta) throw new Error("falha ao buscar a receita completa após a criação.");
    return receitaCompleta;
  });
};

export const listarTodasReceitas = async (
  filtros?: {
    categoriaId?: number;
    autorId?: number;
    etiquetaNome?: string;
    titulo?: string;
    dificuldade?: DificuldadeReceita;
  }
): Promise<Receita[]> => {
  const where: Prisma.ReceitaWhereInput = {};

  if (filtros?.categoriaId) where.categoriaId = filtros.categoriaId;
  if (filtros?.autorId) where.autorId = filtros.autorId;
  if (filtros?.titulo) {
    const tituloLower = toLower(filtros.titulo);
    if (tituloLower) {
        where.titulo = { contains: tituloLower, mode: 'insensitive' };
    }
  }
  if (filtros?.dificuldade) where.dificuldade = filtros.dificuldade;
  if (filtros?.etiquetaNome) {
    const etiquetaNomeLower = toLower(filtros.etiquetaNome);
    if (etiquetaNomeLower) {
        where.etiquetas = {
          some: { etiqueta: { nome: { equals: etiquetaNomeLower, mode: 'insensitive' } } },
        };
    }
  }

  return prisma.receita.findMany({
    where,
    include: {
      autor: { select: { id: true, nome: true, email: true } },
      categoria: true,
      etiquetas: { select: { etiqueta: { select: { id: true, nome: true } } } },
      _count: { select: { comentarios: true, favoritadoPor: true } },
    },
    orderBy: { createdAt: 'desc' },
  });
};

export const findReceitaPorId = async (id: number): Promise<Receita | null> => {
  return prisma.receita.findUnique({
    where: { id },
    include: {
      autor: { select: { id: true, nome: true, email: true } },
      categoria: true,
      etiquetas: { include: { etiqueta: true } },
      ingredientes: { include: { ingrediente: true }, orderBy: { id: 'asc' } },
      comentarios: { include: { autor: { select: { id: true, nome: true } } }, orderBy: { createdAt: 'desc' } },
      favoritadoPor: { select: { usuarioId: true, usuario: { select: { id: true, nome: true } } }, take: 5 },
      _count: { select: { favoritadoPor: true } },
    },
  });
};

/* atualiza receita existente, delegando findorcreate de ingredientes.
corrige a forma de atualizar a relação de categoria. */
export const updateReceita = async (
  id: number,
  data: UpdateReceitaData
): Promise<Receita | null> => {
  const {
    titulo,
    descricao,
    tempoPreparo,
    dificuldade,
    rendimento,
    imagemUrl,
    categoriaId,
    etiquetas,
    ingredientes,
  } = data;

  return prisma.$transaction(async (tx) => {
    // prepara e atualiza os dados básicos da receita
    const dadosUpdateReceita: Prisma.ReceitaUpdateInput = {};
    if (titulo !== undefined) dadosUpdateReceita.titulo = toLower(titulo);
    if (descricao !== undefined) dadosUpdateReceita.descricao = toLower(descricao);
    if (tempoPreparo !== undefined) dadosUpdateReceita.tempoPreparo = toLower(tempoPreparo);
    if (dificuldade !== undefined) dadosUpdateReceita.dificuldade = dificuldade;
    if (rendimento !== undefined) dadosUpdateReceita.rendimento = rendimento;
    if (imagemUrl !== undefined) dadosUpdateReceita.imagemUrl = imagemUrl;

    // correção para atualizar a categoria:
    if (categoriaId !== undefined) {
      // para mudar a categoria, você precisa conectar à nova categoria
      dadosUpdateReceita.categoria = {
        connect: { id: categoriaId }
      };
    }

    await tx.receita.update({ where: { id }, data: dadosUpdateReceita });

    // atualiza etiquetas (abordagem de substituição)
    if (etiquetas !== undefined) {
      await tx.receitaEtiqueta.deleteMany({ where: { receitaId: id } });
      if (etiquetas.length > 0) {
        await tx.receitaEtiqueta.createMany({
          data: etiquetas.map(et => ({ receitaId: id, etiquetaId: et.id })),
        });
      }
    }

    // atualiza ingredientes (abordagem de substituição com findorcreate)
    if (ingredientes !== undefined) {
      await tx.itemReceitaIngrediente.deleteMany({ where: { receitaId: id } });
      if (ingredientes.length > 0) {
        const itensParaCriarNaReceita = [];
        for (const itemIngrediente of ingredientes) {
          const payloadIngrediente: FindOrCreateIngredientePayload = {
            id: itemIngrediente.ingredienteId,
            nome: itemIngrediente.nomeIngrediente,
            categoriaIngrediente: itemIngrediente.categoriaIngrediente,
          };
          const ingredienteDb = await findOrCreateIngrediente(payloadIngrediente, tx);

          itensParaCriarNaReceita.push({
            receitaId: id,
            ingredienteId: ingredienteDb.id,
            quantidade: itemIngrediente.quantidade,
            unidade: toLower(itemIngrediente.unidade)!,
          });
        }
        if (itensParaCriarNaReceita.length > 0) {
          await tx.itemReceitaIngrediente.createMany({ data: itensParaCriarNaReceita });
        }
      }
    }

    const receitaCompleta = await tx.receita.findUnique({
      where: { id },
      include: {
        autor: { select: { id: true, nome: true, email: true } },
        categoria: true,
        etiquetas: { include: { etiqueta: true } },
        ingredientes: { include: { ingrediente: true } },
        comentarios: { include: { autor: { select: { id: true, nome: true } } } },
        _count: { select: { favoritadoPor: true } },
      }
    });
    if (!receitaCompleta) throw new Error("falha ao buscar a receita completa após a atualização.");
    return receitaCompleta;
  });
};

export const deleteReceita = async (id: number): Promise<Receita | null> => {
  try {
    return await prisma.receita.delete({ where: { id } });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      return null;
    }
    throw error;
  }
};