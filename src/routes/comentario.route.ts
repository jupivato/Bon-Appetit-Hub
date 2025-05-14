import { Router } from 'express';
import {
  // createComentarioController, // esta é usada em receita.route.ts
  // listarComentariosPorReceitaController, // esta é usada em receita.route.ts
  updateComentarioController,
  deleteComentarioController,
} from '../controllers/comentario.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

// este roteador será para as rotas que operam diretamente em um comentário pelo seu id
const router = Router({ mergeParams: true });
// mergeparams é útil para rotas aninhadas, mas não estritamente necessário aqui
// se este router for usado diretamente com app.use('/comentarios', router)

/* put /comentarios/:comentarioid -> atualizar um comentário existente.
requer autenticação. o controller verifica se é o autor ou admin. */
router.put(
  '/:comentarioId',
  authMiddleware,
  updateComentarioController
);

/* delete /comentarios/:comentarioid -> deletar um comentário existente.
requer autenticação. o controller verifica se é o autor ou admin. */
router.delete(
  '/:comentarioId',
  authMiddleware,
  deleteComentarioController
);

export default router;