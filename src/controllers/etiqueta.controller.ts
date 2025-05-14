import { Request, Response } from 'express';
import * as etiquetaRepository from '../repositories/etiqueta.repository';
import { capitalizeWords } from '../utils/string.utils'; // para formatar a saída
import { prisma } from '../server';

/* controller para criar uma nova etiqueta.
acessível apenas por administradores (verificado na rota). */
export const createEtiquetaController = async (req: Request, res: Response) => {
  const { nome } = req.body as etiquetaRepository.CreateEtiquetaData;

  if (!nome) {
    res.status(400).json({ message: 'o campo nome é obrigatório para criar uma etiqueta.' });
    return;
  }

  try {
    const novaEtiqueta = await etiquetaRepository.createEtiqueta({ nome });
    const etiquetaFormatada = {
        ...novaEtiqueta,
        nome: capitalizeWords(novaEtiqueta.nome),
    };
    res.status(201).json(etiquetaFormatada);
  } catch (error: any) {
    console.error("erro ao criar etiqueta:", error);
    if (error.message?.includes("já existe")) {
        res.status(409).json({ message: error.message });
    } else {
        res.status(500).json({ message: 'erro interno ao criar etiqueta.' });
    }
  }
};

/* controller para listar todas as etiquetas, permite filtros por nome.
acessível publicamente. */
export const listarEtiquetasController = async (req: Request, res: Response) => {
  try {
    const { nome } = req.query;
    
    const where: any = {};
    
    // Filtro opcional pelo nome da etiqueta
    if (typeof nome === 'string' && nome.trim() !== '') {
      where.nome = {
        contains: nome,
        mode: 'insensitive' // Case insensitive
      };
    }
    
    const etiquetas = await prisma.etiqueta.findMany({
      where,
      include: {
        _count: { select: { receitas: true } }
      },
      orderBy: {
        nome: 'asc',
      },
    });
    
    res.status(200).json({
      success: true,
      data: etiquetas,
    });
  } catch (error: any) {
    console.error('Erro ao listar etiquetas:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao listar etiquetas',
      error: error.message,
    });
  }
};

/* controller para buscar uma etiqueta específica pelo id.
acessível publicamente. */
export const getEtiquetaByIdController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    res.status(400).json({ message: 'ID da etiqueta inválido.' });
    return;
  }

  try {
    const etiqueta = await etiquetaRepository.findEtiquetaPorId(id);
    if (etiqueta) {
      const etiquetaFormatada = {
        ...etiqueta,
        nome: capitalizeWords(etiqueta.nome),
      };
      res.status(200).json(etiquetaFormatada);
    } else {
      res.status(404).json({ message: 'etiqueta não encontrada.' });
    }
  } catch (error) {
    console.error(`erro ao buscar etiqueta ${id}:`, error);
    res.status(500).json({ message: 'erro interno ao buscar etiqueta.' });
  }
};

/* controller para atualizar uma etiqueta existente.
acessível apenas por administradores (verificado na rota). */
export const updateEtiquetaController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const dadosAtualizacao = req.body as etiquetaRepository.UpdateEtiquetaData;

  if (isNaN(id)) {
    res.status(400).json({ message: 'ID da etiqueta inválido.' });
    return;
  }
  if (!dadosAtualizacao.nome) {
     res.status(400).json({ message: 'o campo nome é obrigatório para atualização.' });
     return;
  }

  try {
    const etiquetaAtualizada = await etiquetaRepository.updateEtiqueta(id, dadosAtualizacao);
    if (etiquetaAtualizada) {
      const etiquetaFormatada = {
        ...etiquetaAtualizada,
        nome: capitalizeWords(etiquetaAtualizada.nome),
      };
      res.status(200).json(etiquetaFormatada);
    } else {
      res.status(404).json({ message: 'etiqueta não encontrada para atualização.' });
    }
  } catch (error: any) {
    console.error(`erro ao atualizar etiqueta ${id}:`, error);
     if (error.message?.includes("já existe") || error.message?.includes("já pode estar em uso")) {
        res.status(409).json({ message: error.message });
    } else {
        res.status(500).json({ message: 'erro interno ao atualizar etiqueta.' });
    }
  }
};

/* controller para deletar uma etiqueta.
acessível apenas por administradores (verificado na rota). */
export const deleteEtiquetaController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    res.status(400).json({ message: 'ID da etiqueta inválido.' });
    return;
  }

  try {
    const etiquetaDeletada = await etiquetaRepository.deleteEtiqueta(id);
    if (etiquetaDeletada) {
      res.status(204).send(); // sucesso, sem conteúdo
    } else {
      res.status(404).json({ message: 'etiqueta não encontrada para deleção.' });
    }
  } catch (error: any) {
    console.error(`erro ao deletar etiqueta ${id}:`, error);
    if (error.message?.includes("está sendo usada em receitas")) {
        res.status(400).json({ message: error.message });
    } else {
        res.status(500).json({ message: 'erro interno ao deletar etiqueta.' });
    }
  }
};

/* controller para buscar receitas por etiqueta.
acessível publicamente. */
export const getReceitasPorEtiquetaController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const etiqueta = await prisma.etiqueta.findUnique({
      where: { id: parseInt(id) },
      include: {
        receitas: {
          include: {
            receita: {
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
        },
      },
    });
    
    if (!etiqueta) {
      res.status(404).json({
        success: false,
        message: 'Etiqueta não encontrada',
      });
      return;
    }
    
    // Transformar a estrutura para retornar uma lista de receitas
    const receitas = etiqueta.receitas.map(item => item.receita);
    
    res.status(200).json({
      success: true,
      etiqueta: {
        id: etiqueta.id,
        nome: etiqueta.nome,
      },
      receitas: receitas,
    });
  } catch (error: any) {
    console.error('Erro ao buscar receitas por etiqueta:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar receitas por etiqueta',
      error: error.message,
    });
  }
};