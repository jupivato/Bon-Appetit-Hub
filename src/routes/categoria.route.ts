import { Router } from 'express';
import {
  listarCategoriasController,
  getCategoriaByIdController,
  createCategoriaController,
  updateCategoriaController,
  deleteCategoriaController,
  getReceitasPorCategoriaController,
} from '../controllers/categoria.controller';
import { authMiddleware, authorizeRoles } from '../middlewares/auth.middleware';
import { Role } from '../../generated/prisma/client';

const router = Router();

/**
 * @openapi
 * tags:
 *   name: Categorias
 *   description: Operações relacionadas às categorias de receitas
 */

/**
 * @openapi
 * /categorias:
 *   get:
 *     tags:
 *       - Categorias
 *     summary: Lista todas as categorias
 *     description: Retorna uma lista de todas as categorias disponíveis no sistema
 *     parameters:
 *       - name: nome
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *         description: Filtra por nome da categoria (busca parcial, case insensitive)
 *     responses:
 *       '200':
 *         description: Lista de categorias
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
 *                     $ref: '#/components/schemas/CategoriaOutput'
 *       '500':
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *     security: []
 */
router.get('/', listarCategoriasController);

/**
 * @openapi
 * /categorias/{id}:
 *   get:
 *     tags:
 *       - Categorias
 *     summary: Busca uma categoria pelo ID
 *     description: Retorna os detalhes de uma categoria específica
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da categoria
 *     responses:
 *       '200':
 *         description: Detalhes da categoria
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CategoriaOutput'
 *       '404':
 *         description: Categoria não encontrada
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
router.get('/:id', getCategoriaByIdController);

/**
 * @openapi
 * /categorias/{id}/receitas:
 *   get:
 *     tags:
 *       - Categorias
 *     summary: Lista receitas de uma categoria
 *     description: Retorna todas as receitas pertencentes a uma categoria específica
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da categoria
 *     responses:
 *       '200':
 *         description: Lista de receitas da categoria
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     nome:
 *                       type: string
 *                       example: "sobremesas"
 *                     receitas:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/ReceitaOutput'
 *       '404':
 *         description: Categoria não encontrada
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
router.get('/:id/receitas', getReceitasPorCategoriaController);

/**
 * @openapi
 * /categorias:
 *   post:
 *     tags:
 *       - Categorias
 *     summary: Cria uma nova categoria
 *     description: Adiciona uma nova categoria ao sistema. Acesso restrito a administradores.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CategoriaCreateInput'
 *     responses:
 *       '201':
 *         description: Categoria criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CategoriaOutput'
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
 *         description: Conflito - categoria com este nome já existe
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
  createCategoriaController
);

/**
 * @openapi
 * /categorias/{id}:
 *   put:
 *     tags:
 *       - Categorias
 *     summary: Atualiza uma categoria
 *     description: Atualiza os dados de uma categoria existente. Acesso restrito a administradores.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da categoria a ser atualizada
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CategoriaUpdateInput'
 *     responses:
 *       '200':
 *         description: Categoria atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CategoriaOutput'
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
 *         description: Categoria não encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '409':
 *         description: Conflito - outra categoria com este nome já existe
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
  updateCategoriaController
);

/**
 * @openapi
 * /categorias/{id}:
 *   delete:
 *     tags:
 *       - Categorias
 *     summary: Exclui uma categoria
 *     description: Remove uma categoria do sistema. Acesso restrito a administradores.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da categoria a ser excluída
 *     responses:
 *       '204':
 *         description: Categoria excluída com sucesso (sem conteúdo)
 *       '400':
 *         description: Requisição inválida (ex. categoria está sendo usada em receitas)
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
 *         description: Categoria não encontrada
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
  deleteCategoriaController
);

export default router;