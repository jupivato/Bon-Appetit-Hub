import { Request, Response } from 'express';
import * as categoriaRepository from '../repositories/categoria.repository';
import { capitalizeWords } from '../utils/string.utils';
import { prisma } from '../server';

/* controller para criar uma nova categoria.
acessível apenas por administradores (verificado na rota). */
export const createCategoriaController = async (req: Request, res: Response) => {
  const { nome } = req.body as categoriaRepository.CreateCategoriaData;

  if (!nome) {
    res.status(400).json({ message: 'o campo nome é obrigatório para criar uma categoria.' });
    return;
  }

  try {
    const novaCategoria = await categoriaRepository.createCategoria({ nome });
    // formata para exibição
    const categoriaFormatada = {
        ...novaCategoria,
        nome: capitalizeWords(novaCategoria.nome),
    };
    res.status(201).json(categoriaFormatada);
  } catch (error: any) {
    console.error("erro ao criar categoria:", error);
    if (error.message?.includes("já existe")) {
        res.status(409).json({ message: error.message }); // 409 conflict
    } else {
        res.status(500).json({ message: 'erro interno ao criar categoria.' });
    }
  }
};

/* controller para listar todas as categorias, permite filtros por nome.
acessível publicamente. */
export const listarCategoriasController = async (req: Request, res: Response) => {
  try {
    const categorias = await prisma.categoria.findMany({
      orderBy: {
        nome: 'asc',
      },
    });
    
    res.status(200).json({
      success: true,
      data: categorias,
    });
  } catch (error: any) {
    console.error('Erro ao listar categorias:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao listar categorias',
      error: error.message,
    });
  }
};

/* controller para buscar uma categoria específica pelo id.
acessível publicamente. */
export const getCategoriaByIdController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    res.status(400).json({ message: 'ID da categoria inválido.' });
    return;
  }

  try {
    const categoria = await categoriaRepository.findCategoriaPorId(id);
    if (categoria) {
      // formata para exibição
      const categoriaFormatada = {
        ...categoria,
        nome: capitalizeWords(categoria.nome),
      };
      res.status(200).json(categoriaFormatada);
    } else {
      res.status(404).json({ message: 'categoria não encontrada.' });
    }
  } catch (error) {
    console.error(`erro ao buscar categoria ${id}:`, error);
    res.status(500).json({ message: 'erro interno ao buscar categoria.' });
  }
};

/* controller para atualizar uma categoria existente.
acessível apenas por administradores (verificado na rota). */
export const updateCategoriaController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const dadosAtualizacao = req.body as categoriaRepository.UpdateCategoriaData;

  if (isNaN(id)) {
    res.status(400).json({ message: 'ID da categoria inválido.' });
    return;
  }
  if (!dadosAtualizacao.nome) {
     res.status(400).json({ message: 'o campo nome é obrigatório para atualização.' });
     return;
  }

  try {
    const categoriaAtualizada = await categoriaRepository.updateCategoria(id, dadosAtualizacao);
    if (categoriaAtualizada) {
      // formata para exibição
      const categoriaFormatada = {
        ...categoriaAtualizada,
        nome: capitalizeWords(categoriaAtualizada.nome),
      };
      res.status(200).json(categoriaFormatada);
    } else {
      res.status(404).json({ message: 'categoria não encontrada para atualização.' });
    }
  } catch (error: any) {
    console.error(`erro ao atualizar categoria ${id}:`, error);
     if (error.message?.includes("já existe") || error.message?.includes("já pode estar em uso")) {
        res.status(409).json({ message: error.message });
    } else {
        res.status(500).json({ message: 'erro interno ao atualizar categoria.' });
    }
  }
};

/* controller para deletar uma categoria.
acessível apenas por administradores (verificado na rota). */
export const deleteCategoriaController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    res.status(400).json({ message: 'ID da categoria inválido.' });
    return;
  }

  try {
    const categoriaDeletada = await categoriaRepository.deleteCategoria(id);
    if (categoriaDeletada) {
      res.status(204).send(); // sucesso, sem conteúdo
    } else {
      res.status(404).json({ message: 'categoria não encontrada para deleção.' });
    }
  } catch (error: any) {
    console.error(`erro ao deletar categoria ${id}:`, error);
    if (error.message?.includes("está sendo usada em receitas")) {
        res.status(400).json({ message: error.message });
    } else {
        res.status(500).json({ message: 'erro interno ao deletar categoria.' });
    }
  }
};

/* controller para buscar receitas por categoria.
acessível publicamente. */
export const getReceitasPorCategoriaController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const categoria = await prisma.categoria.findUnique({
      where: { id: parseInt(id) },
      include: {
        receitas: {
          include: {
            autor: {
              select: {
                id: true,
                nome: true,
                email: true,
                role: true,
              },
            },
            categoria: true,
            etiquetas: {
              include: {
                etiqueta: true,
              },
            },
            _count: {
              select: {
                comentarios: true,
                favoritadoPor: true,
              },
            },
          },
        },
      },
    });
    
    if (!categoria) {
      res.status(404).json({
        success: false,
        message: 'Categoria não encontrada',
      });
      return;
    }
    
    res.status(200).json({
      success: true,
      data: categoria,
    });
  } catch (error: any) {
    console.error('Erro ao buscar receitas por categoria:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar receitas por categoria',
      error: error.message,
    });
  }
};