// src/routes/auth.route.ts
import { Router } from 'express';
import { loginController, registrarController } from '../controllers/auth.controller'; // Certifique-se que os controllers estão corretos

const router = Router();

/**
 * @openapi
 * tags:
 *   name: Autenticação
 *   description: Endpoints relacionados à autenticação de usuários, como login e registro.
 */

/**
 * @openapi
 * /auth/login:
 *   post:
 *     tags:
 *       - Autenticação
 *     summary: Realiza o login do usuário
 *     description: Autentica um usuário com e-mail e senha e retorna um token JWT e os dados do usuário.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginInput' # Definido em src/schemas/auth.schema.ts
 *     responses:
 *       '200':
 *         description: Login bem-sucedido. Retorna o token JWT e os dados do usuário.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse' # Definido em src/schemas/auth.schema.ts
 *       '400':
 *         description: 'Requisição inválida (ex: e-mail ou senha ausentes).' 
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse' # Schema de erro genérico
 *       '401':
 *         description: 'Não autorizado (credenciais inválidas).' 
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *     security: [] # IMPORTANTE: Indica que esta rota NÃO requer autenticação JWT (sobrescreve a segurança global)
 */
router.post('/login', loginController);

/**
 * @openapi
 * /auth/registrar:
 *   post:
 *     tags:
 *       - Autenticação
 *     summary: Registra um novo usuário
 *     description: Cria uma nova conta de usuário no sistema.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UsuarioCreateInput' # Definido em src/schemas/usuario.schema.ts
 *     responses:
 *       '201':
 *         description: Usuário registrado com sucesso. Retorna os dados do usuário criado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UsuarioOutput' # Definido em src/schemas/usuario.schema.ts
 *       '400':
 *         description: 'Requisição inválida (ex: dados obrigatórios ausentes ou formato inválido).' 
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '409':
 *         description: 'Conflito (ex: e-mail já cadastrado).' 
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *     security: [] # IMPORTANTE: Indica que esta rota NÃO requer autenticação JWT
 */
router.post('/registrar', registrarController);

export default router;
