import { Router } from 'express';
import {
  getMinhasReceitasFavoritasController,
  // o togglefavoritocontroller é usado em receita.route.ts para a ação de favoritar/desfavoritar
} from '../controllers/receitafavorita.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

/* aplica o middleware de autenticação a todas as rotas neste ficheiro,
pois apenas utilizadores logados podem ver as suas receitas favoritas. */
router.use(authMiddleware);

// get / (o prefixo, ex: /minhas-favoritas, será definido no server.ts)
// esta rota chama o controller para listar as receitas favoritas do utilizador logado.
router.get(
  '/', // este é o caminho relativo ao prefixo que será usado no server.ts
  getMinhasReceitasFavoritasController
);

export default router;