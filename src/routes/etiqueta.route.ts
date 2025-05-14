import { Router } from 'express';
import {
  listarEtiquetasController,
  getEtiquetaByIdController,
  createEtiquetaController,
  updateEtiquetaController,
  deleteEtiquetaController,
  getReceitasPorEtiquetaController,
} from '../controllers/etiqueta.controller';
import { authMiddleware, authorizeRoles } from '../middlewares/auth.middleware';
import { Role } from '../../generated/prisma/client';

const router = Router();

/**
 * @openapi
 * tags:
 *   name: Etiquetas
 *   description: Operações relacionadas às etiquetas (tags) de receitas
 */

/**
 * @openapi
 * /etiquetas:
 *   get:
 *     tags:
 *       - Etiquetas
 *     summary: Lista todas as etiquetas
 *     description: Retorna uma lista de todas as etiquetas disponíveis no sistema
 *     parameters:
 *       - name: nome
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *         description: Filtra por nome da etiqueta (busca parcial, case insensitive)
 *     responses:
 *       '200':
 *         description: Lista de etiquetas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/EtiquetaOutput'
 *       '500':
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *     security: []
 */
router.get('/', listarEtiquetasController);

/**
 * @openapi
 * /etiquetas/{id}:
 *   get:
 *     tags:
 *       - Etiquetas
 *     summary: Busca uma etiqueta pelo ID
 *     description: Retorna os detalhes de uma etiqueta específica
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da etiqueta
 *     responses:
 *       '200':
 *         description: Detalhes da etiqueta
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EtiquetaOutput'
 *       '404':
 *         description: Etiqueta não encontrada
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
 *     security: []
 */
router.get('/:id', getEtiquetaByIdController);

/**
 * @openapi
 * /etiquetas/{id}/receitas:
 *   get:
 *     tags:
 *       - Etiquetas
 *     summary: Lista receitas de uma etiqueta
 *     description: Retorna todas as receitas que possuem uma etiqueta específica
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da etiqueta
 *     responses:
 *       '200':
 *         description: Lista de receitas da etiqueta
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 etiqueta:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     nome:
 *                       type: string
 *                       example: "vegetariano"
 *                 receitas:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ReceitaOutput'
 *       '404':
 *         description: Etiqueta não encontrada
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
 *     security: []
 */
router.get('/:id/receitas', getReceitasPorEtiquetaController);

/**
 * @openapi
 * /etiquetas:
 *   post:
 *     tags:
 *       - Etiquetas
 *     summary: Cria uma nova etiqueta
 *     description: Adiciona uma nova etiqueta ao sistema. Acesso restrito a administradores.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EtiquetaCreateInput'
 *     responses:
 *       '201':
 *         description: Etiqueta criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EtiquetaOutput'
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
 *       '409':
 *         description: Conflito - etiqueta com este nome já existe
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
router.post(
  '/',
  authMiddleware,
  authorizeRoles(Role.ADMINISTRADOR),
  createEtiquetaController
);

/**
 * @openapi
 * /etiquetas/{id}:
 *   put:
 *     tags:
 *       - Etiquetas
 *     summary: Atualiza uma etiqueta
 *     description: Atualiza os dados de uma etiqueta existente. Acesso restrito a administradores.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da etiqueta a ser atualizada
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EtiquetaUpdateInput'
 *     responses:
 *       '200':
 *         description: Etiqueta atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EtiquetaOutput'
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
 *         description: Etiqueta não encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '409':
 *         description: Conflito - outra etiqueta com este nome já existe
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
router.put(
  '/:id',
  authMiddleware,
  authorizeRoles(Role.ADMINISTRADOR),
  updateEtiquetaController
);

/**
 * @openapi
 * /etiquetas/{id}:
 *   delete:
 *     tags:
 *       - Etiquetas
 *     summary: Exclui uma etiqueta
 *     description: Remove uma etiqueta do sistema. Acesso restrito a administradores.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da etiqueta a ser excluída
 *     responses:
 *       '204':
 *         description: Etiqueta excluída com sucesso (sem conteúdo)
 *       '400':
 *         description: Requisição inválida (ex. etiqueta está sendo usada em receitas)
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
 *         description: Etiqueta não encontrada
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
router.delete(
  '/:id',
  authMiddleware,
  authorizeRoles(Role.ADMINISTRADOR),
  deleteEtiquetaController
);

export default router;