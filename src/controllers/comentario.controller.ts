import { Request, Response } from 'express';
import * as comentarioRepository from '../repositories/comentario.repository';
import { AuthenticatedRequest } from '../middlewares/auth.middleware';
import { Role, Prisma } from '../../generated/prisma/client'; // importa o prisma para tipos
import { capitalizeFirstLetter, capitalizeWords } from '../utils/string.utils';
import { prisma } from '../server';

// define um tipo mais preciso para comentario que inclui o autor (com nome)
type ComentarioComAutor = Prisma.ComentarioGetPayload<{
  include: {
    autor: {
      select: {
        id: true;
        nome: true;
        // email: true;
      }
    }
  }
}>;

// tipo para comentario com autor (apenas id e nome), similar ao usado em findcomentariosporreceitaid
type ComentarioComAutorResumido = Prisma.ComentarioGetPayload<{
    include: {
        autor: {
            select: { id: true, nome: true }
        }
    }
}>;


/* controller para criar um novo comentário em uma receita.
o autor é o usuário logado. o receitaid vem da url. */
export const createComentarioController = async (req: Request, res: Response): Promise<void> => {
  const authReq = req as AuthenticatedRequest;
  const autorId = authReq.usuario?.id;
  const receitaId = parseInt(req.params.receitaId, 10);
  const { texto } = req.body as { texto: string };

  if (!autorId) {
    res.status(401).json({ message: 'não autorizado. é necessário estar logado para comentar.' });
    return;
  }
  if (isNaN(receitaId)) {
    res.status(400).json({ message: 'ID da receita inválido na URL.' });
    return;
  }
  if (!texto || typeof texto !== 'string' || texto.trim() === '') {
    res.status(400).json({ message: 'o campo texto é obrigatório e não pode ser vazio.' });
    return;
  }

  try {
    const receitaExistente = await prisma.receita.findUnique({ where: { id: receitaId } });
    if (!receitaExistente) {
      res.status(404).json({ message: 'receita não encontrada para comentar.' });
      return;
    }

    // agora novocomentario terá o tipo comentariocomautor (ou similar, dependendo do include exato no repo)
    const novoComentario = await comentarioRepository.createComentario({
      texto,
      autorId,
      receitaId,
    }) as ComentarioComAutor; // fazemos um cast para o tipo esperado com autor

    const comentarioFormatado = {
        ...novoComentario,
        texto: capitalizeFirstLetter(novoComentario.texto),
        // agora novocomentario.autor deve ser reconhecido pelo typescript
        autor: novoComentario.autor ? {
            ...novoComentario.autor,
            nome: capitalizeWords(novoComentario.autor.nome),
        } : null,
    };
    res.status(201).json(comentarioFormatado);
    return;
  } catch (error: any) {
    console.error("erro ao criar comentário:", error);
    if (error.code === 'P2003') {
        res.status(400).json({ message: 'erro ao criar comentário: autor inválido ou receita não encontrada.' });
    } else {
        res.status(500).json({ message: 'erro interno ao criar comentário.' });
    }
    return;
  }
};

/* controller para listar todos os comentários de uma receita específica.
acessível publicamente. o receitaid vem da url. */
export const listarComentariosPorReceitaController = async (req: Request, res: Response): Promise<void> => {
  const receitaId = parseInt(req.params.receitaId, 10);

  if (isNaN(receitaId)) {
    res.status(400).json({ message: 'ID da receita inválido na URL.' });
    return;
  }

  try {
    const comentarios = await comentarioRepository.findComentariosPorReceitaId(receitaId) as ComentarioComAutorResumido[];
    const comentariosFormatados = comentarios.map(com => ({
        ...com,
        texto: capitalizeFirstLetter(com.texto),
        autor: com.autor ? { // com.autor agora é reconhecido
            ...com.autor,
            nome: capitalizeWords(com.autor.nome),
        } : null,
    }));
    res.status(200).json(comentariosFormatados);
    return;
  } catch (error) {
    console.error(`erro ao listar comentários para receita ${receitaId}:`, error);
    res.status(500).json({ message: 'erro interno ao buscar comentários.' });
    return;
  }
};

/* controller para atualizar um comentário existente (autor ou admin).
o comentarioid vem da url. */
export const updateComentarioController = async (req: Request, res: Response): Promise<void> => {
  const authReq = req as AuthenticatedRequest;
  const comentarioId = parseInt(req.params.comentarioId, 10);
  const usuarioLogado = authReq.usuario;
  const { texto } = req.body as { texto?: string };

  if (isNaN(comentarioId)) {
    res.status(400).json({ message: 'ID do comentário inválido na URL.' });
    return;
  }
  if (!usuarioLogado) {
    res.status(401).json({ message: 'não autorizado.' });
    return;
  }
  if (texto !== undefined && (typeof texto !== 'string' || texto.trim() === '')) {
    res.status(400).json({ message: 'o campo texto, se fornecido, não pode ser vazio.' });
    return;
  }
  if (texto === undefined) {
    res.status(400).json({ message: 'nenhum dado fornecido para atualização (texto é esperado).' });
    return;
  }

  try {
    const comentarioExistente = await comentarioRepository.findComentarioPorId(comentarioId) as ComentarioComAutorResumido | null;
    if (!comentarioExistente) {
      res.status(404).json({ message: 'comentário não encontrado.' });
      return;
    }

    if (comentarioExistente.autorId !== usuarioLogado.id && usuarioLogado.role !== Role.ADMINISTRADOR) {
      res.status(403).json({ message: 'acesso negado. você não tem permissão para editar este comentário.' });
      return;
    }

    const comentarioAtualizado = await comentarioRepository.updateComentario(comentarioId, { texto }) as ComentarioComAutorResumido | null;
    if (comentarioAtualizado) {
        const comentarioFormatado = {
            ...comentarioAtualizado,
            texto: capitalizeFirstLetter(comentarioAtualizado.texto),
            autor: comentarioAtualizado.autor ? { // comentarioatualizado.autor agora é reconhecido
                ...comentarioAtualizado.autor,
                nome: capitalizeWords(comentarioAtualizado.autor.nome),
            } : null,
        };
      res.status(200).json(comentarioFormatado);
    } else {
      res.status(404).json({ message: 'comentário não encontrado para atualização (após verificação inicial).' });
    }
    return;
  } catch (error) {
    console.error(`erro ao atualizar comentário ${comentarioId}:`, error);
    res.status(500).json({ message: 'erro interno ao atualizar comentário.' });
    return;
  }
};

/* controller para deletar um comentário (autor ou admin).
o comentarioid vem da url. */
export const deleteComentarioController = async (req: Request, res: Response): Promise<void> => {
  const authReq = req as AuthenticatedRequest;
  const comentarioId = parseInt(req.params.comentarioId, 10);
  const usuarioLogado = authReq.usuario;

  if (isNaN(comentarioId)) {
    res.status(400).json({ message: 'ID do comentário inválido na URL.' });
    return;
  }
  if (!usuarioLogado) {
    res.status(401).json({ message: 'não autorizado.' });
    return;
  }

  try {
    // findcomentarioporid no repo já inclui o autor
    const comentarioExistente = await comentarioRepository.findComentarioPorId(comentarioId) as ComentarioComAutorResumido | null;
    if (!comentarioExistente) {
      res.status(404).json({ message: 'comentário não encontrado.' });
      return;
    }

    if (comentarioExistente.autorId !== usuarioLogado.id && usuarioLogado.role !== Role.ADMINISTRADOR) {
      res.status(403).json({ message: 'acesso negado. você não tem permissão para deletar este comentário.' });
      return;
    }

    const comentarioDeletado = await comentarioRepository.deleteComentario(comentarioId);
    if (comentarioDeletado) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'comentário não encontrado para deleção (após verificação inicial).' });
    }
    return;
  } catch (error) {
    console.error(`erro ao deletar comentário ${comentarioId}:`, error);
    res.status(500).json({ message: 'erro interno ao deletar comentário.' });
    return;
  }
};