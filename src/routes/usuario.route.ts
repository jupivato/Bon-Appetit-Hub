// src/routes/usuario.route.ts
import { Router } from 'express';
import {
  listarUsuariosController,
  getUsuarioByIdController,
  updateUsuarioController,
  deleteUsuarioController,
} from '../controllers/usuario.controller';
import { authMiddleware, authorizeRoles } from '../middlewares/auth.middleware'; 
import { Role } from '../../generated/prisma/client'; 
const router = Router();

/**
 * @openapi
 * tags:
 *   name: Usuários
 *   description: Operações relacionadas a usuários do sistema. Requer autenticação para todas as rotas.
 */

/**
 * @openapi
 * /usuarios:
 *   get:
 *     tags:
 *       - Usuários
 *     summary: Lista todos os usuários
 *     description: Retorna uma lista de todos os usuários cadastrados. Acesso restrito a administradores.
 *     security:
 *       - bearerAuth: [] # Indica que esta rota requer o token JWT
 *     responses:
 *       '200':
 *         description: Lista de usuários retornada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/UsuarioOutput'
 *       '401':
 *         description: Não autorizado (token JWT ausente, inválido).
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '403':
 *         description: Proibido (usuário não tem permissão de administrador).
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get(
  '/',
  authMiddleware,
  authorizeRoles(Role.ADMINISTRADOR), // Garanta que 'ADMINISTRADOR' é o valor correto do seu enum Role
  listarUsuariosController
);

/**
 * @openapi
 * /usuarios/{idUsuario}:
 *   get:
 *     tags:
 *       - Usuários
 *     summary: Busca um usuário pelo ID
 *     description: Retorna os detalhes de um usuário específico. Acesso permitido para administradores ou o próprio usuário.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: idUsuario
 *         in: path
 *         required: true
 *         description: ID do usuário a ser buscado.
 *         schema:
 *           type: string
 *           format: uuid # Ou o formato do seu ID
 *           example: 'a1b2c3d4-e89b-12d3-a456-426614174000'
 *     responses:
 *       '200':
 *         description: Detalhes do usuário retornados com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UsuarioOutput'
 *       '401':
 *         description: Não autorizado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '403':
 *         description: Proibido (usuário tentando acessar dados de outro usuário sem ser admin).
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '404':
 *         description: Usuário não encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get(
  '/:id', // O parâmetro aqui é :id, então vou usar idUsuario no Swagger para clareza
  authMiddleware,
  getUsuarioByIdController
);

/**
 * @openapi
 * /usuarios/{idUsuario}:
 *   put:
 *     tags:
 *       - Usuários
 *     summary: Atualiza um usuário existente
 *     description: Atualiza os dados de um usuário específico. Acesso permitido para administradores ou o próprio usuário (com restrições).
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: idUsuario
 *         in: path
 *         required: true
 *         description: ID do usuário a ser atualizado.
 *         schema:
 *           type: string
 *           format: uuid # Ou o formato do seu ID
 *           example: 'a1b2c3d4-e89b-12d3-a456-426614174000'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UsuarioUpdateInput'
 *     responses:
 *       '200':
 *         description: Usuário atualizado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UsuarioOutput'
 *       '400':
 *         description: Dados de entrada inválidos.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '401':
 *         description: Não autorizado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '403':
 *         description: Proibido.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '404':
 *         description: Usuário não encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.put(
  '/:id', // O parâmetro aqui é :id
  authMiddleware,
  updateUsuarioController
);

/**
 * @openapi
 * /usuarios/{idUsuario}:
 *   delete:
 *     tags:
 *       - Usuários
 *     summary: Deleta um usuário
 *     description: Remove um usuário do sistema. Acesso permitido para administradores ou o próprio usuário.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: idUsuario
 *         in: path
 *         required: true
 *         description: ID do usuário a ser deletado.
 *         schema:
 *           type: string
 *           format: uuid # Ou o formato do seu ID
 *           example: 'a1b2c3d4-e89b-12d3-a456-426614174000'
 *     responses:
 *       '204':
 *         description: Usuário deletado com sucesso (Sem conteúdo).
 *       '401':
 *         description: Não autorizado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '403':
 *         description: Proibido.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '404':
 *         description: Usuário não encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.delete(
  '/:id', // O parâmetro aqui é :id
  authMiddleware,
  deleteUsuarioController
);

export default router;