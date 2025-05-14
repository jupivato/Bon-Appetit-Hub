// src/routes/ingrediente.route.ts
import { Router } from 'express';
import {
  createIngredienteController,
  listarIngredientesController,
  getIngredienteByIdController,
  updateIngredienteController,
  deleteIngredienteController,
} from '../controllers/ingrediente.controller';
import { authMiddleware, authorizeRoles } from '../middlewares/auth.middleware';
import { Role } from '../../generated/prisma/client';

const router = Router();

/**
 * @openapi
 * tags:
 *   name: Ingredientes
 *   description: Operações relacionadas a ingredientes de receitas.
 */

/**
 * @openapi
 * /ingredientes:
 *   post:
 *     tags:
 *       - Ingredientes
 *     summary: Cria um novo ingrediente
 *     description: Adiciona um novo ingrediente ao sistema. Acesso restrito a administradores.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/IngredienteCreateInput'
 *     responses:
 *       '201':
 *         description: Ingrediente criado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/IngredienteOutput'
 *       '400':
 *         description: 'Dados de entrada inválidos (ex: nome ausente ou formato de URL inválido).'
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '401':
 *         description: 'Não autorizado (token JWT ausente ou inválido).'
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '403':
 *         description: 'Proibido (usuário não é administrador).'
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '409':
 *         description: 'Conflito (ingrediente com este nome já existe).'
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post(
  '/',
  authMiddleware,
  authorizeRoles(Role.ADMINISTRADOR),
  createIngredienteController
);

/**
 * @openapi
 * /ingredientes:
 *   get:
 *     tags:
 *       - Ingredientes
 *     summary: Lista todos os ingredientes
 *     description: Retorna uma lista de todos os ingredientes, opcionalmente filtrados por nome e/ou categoria.
 *     parameters:
 *       - name: nome
 *         in: query
 *         required: false
 *         description: Nome ou parte do nome do ingrediente para filtrar (case-insensitive).
 *         schema:
 *           type: string
 *           example: 'farinha'
 *       - name: categoria
 *         in: query
 *         required: false
 *         description: Categoria ou parte da categoria do ingrediente para filtrar (case-insensitive).
 *         schema:
 *           type: string
 *           example: 'grãos'
 *     responses:
 *       '200':
 *         description: Lista de ingredientes retornada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/IngredienteOutput'
 *       '500':
 *         description: 'Erro interno do servidor.'
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *     security: []
 */
router.get(
  '/',
  listarIngredientesController
);

/**
 * @openapi
 * /ingredientes/{idIngrediente}:
 *   get:
 *     tags:
 *       - Ingredientes
 *     summary: Busca um ingrediente pelo ID
 *     description: Retorna os detalhes de um ingrediente específico.
 *     parameters:
 *       - name: idIngrediente
 *         in: path
 *         required: true
 *         description: ID do ingrediente a ser buscado.
 *         schema:
 *           type: integer
 *           format: int32
 *           example: 1
 *     responses:
 *       '200':
 *         description: Detalhes do ingrediente retornados com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/IngredienteOutput'
 *       '404':
 *         description: 'Ingrediente não encontrado.'
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *     security: []
 */
router.get(
  '/:id',
  getIngredienteByIdController
);

/**
 * @openapi
 * /ingredientes/{idIngrediente}:
 *   put:
 *     tags:
 *       - Ingredientes
 *     summary: Atualiza um ingrediente existente
 *     description: Atualiza os dados de um ingrediente específico. Acesso restrito a administradores.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: idIngrediente
 *         in: path
 *         required: true
 *         description: ID do ingrediente a ser atualizado.
 *         schema:
 *           type: integer
 *           format: int32
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/IngredienteUpdateInput'
 *     responses:
 *       '200':
 *         description: Ingrediente atualizado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/IngredienteOutput'
 *       '400':
 *         description: 'Dados de entrada inválidos.'
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '401':
 *         description: 'Não autorizado.'
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '403':
 *         description: 'Proibido.'
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '404':
 *         description: 'Ingrediente não encontrado.'
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '409':
 *         description: 'Conflito (outro ingrediente já existe com o nome fornecido).'
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.put(
  '/:id',
  authMiddleware,
  authorizeRoles(Role.ADMINISTRADOR),
  updateIngredienteController
);

/**
 * @openapi
 * /ingredientes/{idIngrediente}:
 *   delete:
 *     tags:
 *       - Ingredientes
 *     summary: Exclui um ingrediente
 *     description: Remove um ingrediente do sistema. Acesso restrito a administradores.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: idIngrediente
 *         in: path
 *         required: true
 *         description: ID do ingrediente a ser excluído.
 *         schema:
 *           type: integer
 *           format: int32
 *           example: 1
 *     responses:
 *       '204':
 *         description: Ingrediente excluído com sucesso (Sem conteúdo).
 *       '400':
 *         description: 'Requisição inválida (ex: ingrediente está sendo usado em receitas).'
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '401':
 *         description: 'Não autorizado.'
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '403':
 *         description: 'Proibido.'
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '404':
 *         description: 'Ingrediente não encontrado.'
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.delete(
  '/:id',
  authMiddleware,
  authorizeRoles(Role.ADMINISTRADOR),
  deleteIngredienteController
);

export default router;
