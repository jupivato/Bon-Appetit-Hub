import { Router } from 'express';
import {
  updateComentarioController,
  deleteComentarioController,
} from '../controllers/comentario.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router({ mergeParams: true });

/**
 * @openapi
 * tags:
 *   name: Comentários
 *   description: Operações relacionadas a comentários em receitas
 */

/**
 * @openapi
 * /comentarios/{comentarioId}:
 *   put:
 *     tags:
 *       - Comentários
 *     summary: Atualiza um comentário
 *     description: Atualiza o texto de um comentário existente. Apenas o autor do comentário ou administradores podem realizar esta operação.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: comentarioId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do comentário a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ComentarioUpdateInput'
 *     responses:
 *       '200':
 *         description: Comentário atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ComentarioOutput'
 *       '400':
 *         description: Dados inválidos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '401':
 *         description: Não autorizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '403':
 *         description: Proibido - usuário não tem permissão
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '404':
 *         description: Comentário não encontrado
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
router.put('/:comentarioId', authMiddleware, updateComentarioController);

/**
 * @openapi
 * /comentarios/{comentarioId}:
 *   delete:
 *     tags:
 *       - Comentários
 *     summary: Exclui um comentário
 *     description: Remove um comentário do sistema. Apenas o autor do comentário ou administradores podem realizar esta operação.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: comentarioId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do comentário a ser excluído
 *     responses:
 *       '204':
 *         description: Comentário excluído com sucesso (sem conteúdo)
 *       '401':
 *         description: Não autorizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '403':
 *         description: Proibido - usuário não tem permissão
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '404':
 *         description: Comentário não encontrado
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
router.delete('/:comentarioId', authMiddleware, deleteComentarioController);

export default router;