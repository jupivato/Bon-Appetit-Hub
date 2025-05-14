import { Request, Response } from 'express';
import * as receitaRepository from '../repositories/receita.repository';
import { AuthenticatedRequest } from '../middlewares/auth.middleware'; // para aceder a req.usuario
import { Role, DificuldadeReceita } from '../../generated/prisma/client';
import { prisma } from '../server';

/* controller para criar uma nova receita.
apenas usuários autenticados podem criar receitas. */
export const createReceitaController = async (req: Request, res: Response): Promise<void> => {
  const authReq = req as AuthenticatedRequest;
  const autorId = authReq.usuario?.id;

  // verifica se o usuário está autenticado (o middleware authmiddleware já deve ter feito isso)
  if (!autorId) {
    res.status(401).json({ message: 'Não autorizado. É necessário estar logado para criar uma receita.' });
    return;
  }

  // extrai os dados do corpo da requisição
  const {
    titulo,
    descricao,
    tempoPreparo,
    dificuldade,
    rendimento,
    imagemUrl,
    categoriaId,
    etiquetas, // espera-se um array de { id: number }
    ingredientes, // espera-se um array de { ingredienteid: number, quantidade: number, unidade: string }
  } = req.body as receitaRepository.CreateReceitaData;

  // validação básica de entrada (substituir por zod em um projeto real)
  if (!titulo || !descricao || !tempoPreparo || !dificuldade || !rendimento || !categoriaId) {
    res.status(400).json({ message: 'Campos obrigatórios (titulo, descricao, tempoPreparo, dificuldade, rendimento, categoriaId) não fornecidos.' });
    return;
  }
  if (!Object.values(DificuldadeReceita).includes(dificuldade)) {
    res.status(400).json({ message: `Valor de dificuldade inválido. Valores permitidos: ${Object.values(DificuldadeReceita).join(', ')}`});
    return;
  }

  try {
    const novaReceita = await receitaRepository.createReceita({
      titulo,
      descricao,
      tempoPreparo,
      dificuldade,
      rendimento,
      imagemUrl,
      autorId, // id do usuário logado
      categoriaId,
      etiquetas,
      ingredientes,
    });
    res.status(201).json(novaReceita); // 201 created
  } catch (error: any) {
    console.error("Erro ao criar receita:", error);
    // verifica se é um erro conhecido do prisma (ex: categoriaid ou etiquetaid não existe)
    if (error.code === 'P2003' || error.code === 'P2025') { // foreign key constraint failed or record not found
        res.status(400).json({ message: `Erro ao criar receita: ${error.meta?.cause || error.message}` });
    } else {
        res.status(500).json({ message: 'Erro interno ao criar receita.' });
    }
  }
};

/* controller para listar todas as receitas.
permite filtros opcionais. */
export const listarReceitasController = async (req: Request, res: Response) => {
  try {
    const {
      categoriaId: categoriaIdQuery, // Renomeado para evitar conflito de nome
      etiquetaId: etiquetaIdQuery,   // Renomeado para evitar conflito de nome
      titulo: tituloQuery,           // Renomeado para evitar conflito de nome
      ingredientes: ingredientesQueryParam, // Mantido para clareza da origem
    } = req.query;

    // Construir o objeto de filtro para condições diretas no 'where'
    const baseWhere: any = {};

    if (typeof tituloQuery === 'string' && tituloQuery.trim() !== '') {
      baseWhere.titulo = {
        contains: tituloQuery,
        mode: 'insensitive', // Case insensitive
      };
    }

    if (typeof categoriaIdQuery === 'string') {
      const parsedCategoriaId = parseInt(categoriaIdQuery, 10);
      if (!isNaN(parsedCategoriaId) && parsedCategoriaId > 0) {
        baseWhere.categoriaId = parsedCategoriaId;
      }
    }

    // Construir array para condições AND mais complexas (etiquetas, ingredientes)
    const andConditions: any[] = [];

    if (typeof etiquetaIdQuery === 'string') {
      const parsedEtiquetaId = parseInt(etiquetaIdQuery, 10);
      if (!isNaN(parsedEtiquetaId) && parsedEtiquetaId > 0) {
        andConditions.push({
          etiquetas: {
            some: {
              etiquetaId: parsedEtiquetaId,
            },
          },
        });
      }
    }

    // Nova lógica para filtrar por ingredientes ("APENAS os ingredientes listados")
    if (typeof ingredientesQueryParam === 'string') {
      const parsedIngredientesIds = ingredientesQueryParam
        .split(',')
        .map(idStr => parseInt(idStr.trim(), 10))
        .filter(id => !isNaN(id) && id > 0); // Filtra IDs válidos (números > 0)

      if (parsedIngredientesIds.length > 0) {
        // Se o usuário forneceu uma lista válida de IDs de ingredientes:
        // 1. TODOS os ingredientes da receita DEVEM estar na lista do filtro.
        andConditions.push({
          ingredientes: {
            every: {
              ingredienteId: {
                in: parsedIngredientesIds,
              },
            },
          },
        });
        // 2. A receita DEVE TER PELO MENOS UM ingrediente.
        andConditions.push({
          ingredientes: {
            some: {}, // Garante que a relação 'ingredientes' não seja vazia.
          },
        });
      } else {
        // O parâmetro 'ingredientes' foi fornecido, mas resultou em uma lista vazia ou inválida.
        // Nenhuma receita será retornada devido a este filtro de ingredientes inválido.
        console.warn(
          'Filtro de ingredientes fornecido, mas resultou em lista de IDs vazia ou inválida. Nenhuma receita será retornada devido a este filtro.'
        );
        andConditions.push({ id: -1 }); // Adiciona uma condição impossível para não retornar receitas
      }
    }

    // Montar o 'where' final para o Prisma
    let finalWhere: any = { ...baseWhere }; // Começa com os filtros base
    if (andConditions.length > 0) {
      // Se existem condições AND, adiciona-as.
      // Se baseWhere já tem chaves, todas as andConditions são adicionadas a um array AND.
      // Se baseWhere estava vazio, andConditions se torna o único conteúdo do AND.
      finalWhere.AND = [...(finalWhere.AND || []), ...andConditions];
    }
    // Se finalWhere.AND ficou apenas com as andConditions e baseWhere estava vazio,
    // e finalWhere.AND tem apenas um elemento que é {id: -1}, está ok.
    // Se baseWhere tem algo e andConditions também, fica como: {titulo: ..., categoriaId: ..., AND: [...]}

    // Buscar receitas com os filtros fornecidos
    const receitas = await prisma.receita.findMany({
      where: finalWhere, // 'where' agora contém toda a lógica de filtro combinada
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
        ingredientes: {
          include: {
            ingrediente: true,
          },
        },
        _count: {
          select: {
            comentarios: true,
            favoritadoPor: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.status(200).json({
      success: true,
      data: receitas,
    });
  } catch (error: any) {
    console.error('Erro ao listar receitas:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao listar receitas',
      error: error.message,
    });
  }
};

/* controller para buscar uma receita específica pelo id. */
export const getReceitaByIdController = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const parsedId = parseInt(id, 10);

    if (isNaN(parsedId)) {
        res.status(400).json({ success: false, message: 'ID da receita inválido.' });
        return;
    }
    
    const receita = await prisma.receita.findUnique({
      where: { id: parsedId },
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
        ingredientes: {
          include: {
            ingrediente: true,
          },
        },
        comentarios: {
          include: {
            autor: {
              select: {
                id: true,
                nome: true,
              },
            },
          },
          orderBy: {
            createdAt: 'desc',
          },
        },
        _count: {
          select: {
            comentarios: true,
            favoritadoPor: true,
          },
        },
      },
    });
    
    if (!receita) {
      res.status(404).json({
        success: false,
        message: 'Receita não encontrada',
      });
      return;
    }
    
    res.status(200).json({
      success: true,
      data: receita,
    });
  } catch (error: any) {
    console.error(`Erro ao buscar receita:`, error);
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar receita',
      error: error.message,
    });
  }
};

/* controller para atualizar uma receita existente.
apenas o autor da receita ou um administrador podem atualizar. */
export const updateReceitaController = async (req: Request, res: Response): Promise<void> => {
  const authReq = req as AuthenticatedRequest;
  const receitaId = parseInt(req.params.id, 10);
  const usuarioLogado = authReq.usuario;
  const dadosAtualizacao = req.body as receitaRepository.UpdateReceitaData;

  if (isNaN(receitaId)) {
    res.status(400).json({ message: 'ID da receita inválido.' });
    return;
  }

  if (!usuarioLogado) {
    res.status(401).json({ message: 'Não autorizado.' });
    return;
  }

  // validação de entrada
  if (!dadosAtualizacao || Object.keys(dadosAtualizacao).length === 0) {
     res.status(400).json({ message: 'Nenhum dado fornecido para atualização.' });
     return;
  }
  if (dadosAtualizacao.dificuldade !== undefined && !Object.values(DificuldadeReceita).includes(dadosAtualizacao.dificuldade)) {
    res.status(400).json({ message: `Valor de dificuldade inválido. Valores permitidos: ${Object.values(DificuldadeReceita).join(', ')}`});
    return;
  }

  try {
    // verifica se a receita existe e quem é o autor
    const receitaExistente = await receitaRepository.findReceitaPorId(receitaId);
    if (!receitaExistente) {
      res.status(404).json({ message: 'Receita não encontrada.' });
      return;
    }

    // verificação de permissão: é o autor ou é um admin?
    if (receitaExistente.autorId !== usuarioLogado.id && usuarioLogado.role !== Role.ADMINISTRADOR) {
      res.status(403).json({ message: 'Acesso negado. Você não tem permissão para editar esta receita.' });
      return;
    }

    const receitaAtualizada = await receitaRepository.updateReceita(receitaId, dadosAtualizacao);
    if (receitaAtualizada) {
        res.status(200).json(receitaAtualizada);
    } else {
        // isso pode acontecer se o updatereceita retornar null por algum motivo (ex: falha na transação não capturada)
        // ou se o findreceitaporid dentro do update falhar após a atualização.
        res.status(404).json({ message: 'Receita não encontrada após tentativa de atualização ou falha na operação.' });
    }

  } catch (error: any) {
    console.error(`Erro ao atualizar receita ${receitaId}:`, error);
    if (error.code === 'P2003' || error.code === 'P2025') {
        res.status(400).json({ message: `Erro ao atualizar receita: ${error.meta?.cause || error.message}` });
    } else {
        res.status(500).json({ message: 'Erro interno ao atualizar receita.' });
    }
  }
};

/* controller para deletar uma receita.
apenas o autor da receita ou um administrador podem deletar. */
export const deleteReceitaController = async (req: Request, res: Response): Promise<void> => {
  const authReq = req as AuthenticatedRequest;
  const receitaId = parseInt(req.params.id, 10);
  const usuarioLogado = authReq.usuario;

  if (isNaN(receitaId)) {
    res.status(400).json({ message: 'ID da receita inválido.' });
    return;
  }

  if (!usuarioLogado) {
    res.status(401).json({ message: 'Não autorizado.' });
    return;
  }

  try {
    // verifica se a receita existe e quem é o autor
    const receitaExistente = await receitaRepository.findReceitaPorId(receitaId);
    if (!receitaExistente) {
      res.status(404).json({ message: 'Receita não encontrada.' });
      return;
    }

    // verificação de permissão: é o autor ou é um admin?
    if (receitaExistente.autorId !== usuarioLogado.id && usuarioLogado.role !== Role.ADMINISTRADOR) {
      res.status(403).json({ message: 'Acesso negado. Você não tem permissão para deletar esta receita.' });
      return;
    }

    const receitaDeletada = await receitaRepository.deleteReceita(receitaId);
    if (receitaDeletada) {
      res.status(204).send(); // 204 no content
    } else {
      // se deletereceita retornar null (ex: não encontrou para deletar, já tratado pelo findreceitaporid acima)
      res.status(404).json({ message: 'Receita não encontrada para deleção.' });
    }
  } catch (error) {
    console.error(`Erro ao deletar receita ${receitaId}:`, error);
    res.status(500).json({ message: 'Erro interno ao deletar receita.' });
  }
};