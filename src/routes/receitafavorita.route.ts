import { Router } from 'express';
import {
  getMinhasReceitasFavoritasController,
} from '../controllers/receitafavorita.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

/**
 * @openapi
 * tags:
 *   name: Favoritos
 *   description: Operações relacionadas às receitas favoritas do usuário
 */

router.use(authMiddleware);

/**
 * @openapi
 * /minhas-favoritas:
 *   get:
 *     tags:
 *       - Favoritos
 *     summary: Lista as receitas favoritas do usuário
 *     description: Retorna todas as receitas que o usuário autenticado adicionou aos favoritos
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Lista de receitas favoritas
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MinhasFavoritasOutput'
 *       '401':
 *         description: Não autorizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '500':
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get('/', getMinhasReceitasFavoritasController);

export default router;