import { Request, Response } from 'express';
import * as receitaFavoritaRepository from '../repositories/receitafavorita.repository';
import { AuthenticatedRequest } from '../middlewares/auth.middleware';
import { capitalizeWords, capitalizeFirstLetter } from '../utils/string.utils'; // para formatar saída
import { prisma } from '../server'; // para verificar se a receita existe

/* controller para um utilizador favoritar ou desfavoritar uma receita.
alterna o estado de favorito da receita. */
export const toggleFavoritoController = async (req: Request, res: Response): Promise<void> => {
  const authReq = req as AuthenticatedRequest;
  const usuarioId = authReq.usuario?.id;
  const receitaId = parseInt(req.params.receitaId, 10);

  if (!usuarioId) {
    res.status(401).json({ message: 'não autorizado. é necessário estar logado.' });
    return;
  }
  if (isNaN(receitaId)) {
    res.status(400).json({ message: 'ID da receita inválido na URL.' });
    return;
  }

  try {
    // opcional: verificar se a receita realmente existe antes de tentar favoritar
    const receitaExiste = await prisma.receita.findUnique({ where: { id: receitaId } });
    if (!receitaExiste) {
      res.status(404).json({ message: 'receita não encontrada.' });
      return;
    }

    const jaFavorita = await receitaFavoritaRepository.verificarSeReceitaEFavorita(usuarioId, receitaId);

    if (jaFavorita) {
      // se já é favorita, desfavorita
      await receitaFavoritaRepository.desfavoritarReceita(usuarioId, receitaId);
      res.status(200).json({ message: 'receita desfavoritada com sucesso.', favoritada: false });
    } else {
      // se não é favorita, favorita
      const favoritaAdicionada = await receitaFavoritaRepository.favoritarReceita(usuarioId, receitaId);
      const receitaFormatada = { // formata os dados parciais da receita retornados
          id: favoritaAdicionada.receita.id,
          titulo: capitalizeWords(favoritaAdicionada.receita.titulo),
          imagemUrl: favoritaAdicionada.receita.imagemUrl
      };
      res.status(201).json({
        message: 'receita favoritada com sucesso.',
        favoritada: true,
        receita: receitaFormatada // retorna alguns dados da receita favoritada
      });
    }
    return;
  } catch (error: any) {
    console.error(`erro ao favoritar/desfavoritar receita ${receitaId} para utilizador ${usuarioId}:`, error);
    if (error.message?.includes("não encontrado")) {
        res.status(404).json({ message: error.message });
    } else {
        res.status(500).json({ message: 'erro interno ao processar favorito.' });
    }
    return;
  }
};

/* controller para listar as receitas favoritas do utilizador logado. */
export const getMinhasReceitasFavoritasController = async (req: Request, res: Response): Promise<void> => {
  const authReq = req as AuthenticatedRequest;
  const usuarioId = authReq.usuario?.id;

  if (!usuarioId) {
    res.status(401).json({ message: 'não autorizado. é necessário estar logado.' });
    return;
  }

  try {
    const receitasFavoritas = await receitaFavoritaRepository.listarReceitasFavoritasPorUsuario(usuarioId);
    // a formatação da receita já é feita no repositório, então podemos retornar diretamente
    res.status(200).json(receitasFavoritas);
    return;
  } catch (error) {
    console.error(`erro ao listar receitas favoritas para utilizador ${usuarioId}:`, error);
    res.status(500).json({ message: 'erro interno ao buscar receitas favoritas.' });
    return;
  }
};