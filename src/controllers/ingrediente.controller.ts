import { Request, Response } from 'express';
import * as ingredienteRepository from '../repositories/ingrediente.repository';
import { AuthenticatedRequest } from '../middlewares/auth.middleware'; // para tipo de req.usuario
import { Role } from '../../generated/prisma/client';
import { capitalizeWords, capitalizeFirstLetter } from '../utils/string.utils'; // para formatar a saída
import { prisma } from '../server';

/* controller para criar um novo ingrediente.
acessível apenas por administradores. */
export const createIngredienteController = async (req: Request, res: Response): Promise<void> => {
  // a permissão de admin já deve ser verificada pelo middleware na rota
  const { nome, imagemUrl, categoriaIngrediente } = req.body as ingredienteRepository.CreateIngredienteData;

  if (!nome) {
    res.status(400).json({ message: 'o campo nome é obrigatório para criar um ingrediente.' });
    return;
  }

  try {
    const novoIngrediente = await ingredienteRepository.createIngrediente({
      nome,
      imagemUrl,
      categoriaIngrediente,
    });
    // formata para exibição
    const ingredienteFormatado = {
        ...novoIngrediente,
        nome: capitalizeWords(novoIngrediente.nome),
        categoriaIngrediente: novoIngrediente.categoriaIngrediente ? capitalizeWords(novoIngrediente.categoriaIngrediente) : null
    };
    res.status(201).json(ingredienteFormatado);
  } catch (error: any) {
    console.error("erro ao criar ingrediente:", error);
    if (error.message?.includes("já existe")) {
        res.status(409).json({ message: error.message });
    } else {
        res.status(500).json({ message: 'erro interno ao criar ingrediente.' });
    }
  }
};

/* controller para listar todos os ingredientes (filtros por nome e categoria).
acessível publicamente. */
export const listarIngredientesController = async (req: Request, res: Response): Promise<void> => {
  try {
    const { nome } = req.query;
    
    const where: any = {};
    
    // Filtro opcional pelo nome do ingrediente
    if (nome) {
      where.nome = {
        contains: nome as string,
        mode: 'insensitive' // Case insensitive
      };
    }
    
    const ingredientes = await prisma.ingrediente.findMany({
      where,
      orderBy: {
        nome: 'asc',
      },
    });
    
    res.status(200).json({
      success: true,
      data: ingredientes,
    });
  } catch (error: any) {
    console.error('Erro ao listar ingredientes:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao listar ingredientes',
      error: error.message,
    });
  }
};

/* controller para buscar um ingrediente específico pelo id.
acessível publicamente. */
export const getIngredienteByIdController = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    res.status(400).json({ message: 'ID do ingrediente inválido.' });
    return;
  }

  try {
    const ingrediente = await ingredienteRepository.findIngredientePorId(id);
    if (ingrediente) {
      // formata para exibição
      const ingredienteFormatado = {
        ...ingrediente,
        nome: capitalizeWords(ingrediente.nome),
        categoriaIngrediente: ingrediente.categoriaIngrediente ? capitalizeWords(ingrediente.categoriaIngrediente) : null
      };
      res.status(200).json(ingredienteFormatado);
    } else {
      res.status(404).json({ message: 'ingrediente não encontrado.' });
    }
  } catch (error) {
    console.error(`erro ao buscar ingrediente ${id}:`, error);
    res.status(500).json({ message: 'erro interno ao buscar ingrediente.' });
  }
};

/* controller para atualizar um ingrediente existente.
acessível apenas por administradores. */
export const updateIngredienteController = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id, 10);
  const dadosAtualizacao = req.body as ingredienteRepository.UpdateIngredienteData;

  if (isNaN(id)) {
    res.status(400).json({ message: 'ID do ingrediente inválido.' });
    return;
  }
  if (!dadosAtualizacao || Object.keys(dadosAtualizacao).length === 0) {
     res.status(400).json({ message: 'nenhum dado fornecido para atualização.' });
     return;
  }

  try {
    const ingredienteAtualizado = await ingredienteRepository.updateIngrediente(id, dadosAtualizacao);
    if (ingredienteAtualizado) {
      // formata para exibição
      const ingredienteFormatado = {
        ...ingredienteAtualizado,
        nome: capitalizeWords(ingredienteAtualizado.nome),
        categoriaIngrediente: ingredienteAtualizado.categoriaIngrediente ? capitalizeWords(ingredienteAtualizado.categoriaIngrediente) : null
      };
      res.status(200).json(ingredienteFormatado);
    } else {
      res.status(404).json({ message: 'ingrediente não encontrado para atualização.' });
    }
  } catch (error: any) {
    console.error(`erro ao atualizar ingrediente ${id}:`, error);
     if (error.message?.includes("já existe") || error.message?.includes("já pode estar em uso")) {
        res.status(409).json({ message: error.message });
    } else {
        res.status(500).json({ message: 'erro interno ao atualizar ingrediente.' });
    }
  }
};

/* controller para deletar um ingrediente.
acessível apenas por administradores. */
export const deleteIngredienteController = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    res.status(400).json({ message: 'ID do ingrediente inválido.' });
    return;
  }

  try {
    const ingredienteDeletado = await ingredienteRepository.deleteIngrediente(id);
    if (ingredienteDeletado) {
      res.status(204).send(); // sucesso, sem conteúdo
    } else {
      res.status(404).json({ message: 'ingrediente não encontrado para deleção.' });
    }
  } catch (error: any) {
    console.error(`erro ao deletar ingrediente ${id}:`, error);
    if (error.message?.includes("está sendo usado em receitas")) {
        res.status(400).json({ message: error.message }); // bad request ou conflict (409)
    } else {
        res.status(500).json({ message: 'erro interno ao deletar ingrediente.' });
    }
  }
};