// src/routes/ingrediente.route.ts
import { Router } from 'express';
import {
  createIngredienteController,
  listarIngredientesController,
  getIngredienteByIdController,
  updateIngredienteController,
  deleteIngredienteController,
} from '../controllers/ingrediente.controller'; // importa os handlers do controller
import { authMiddleware, authorizeRoles } from '../middlewares/auth.middleware'; // importa os middlewares de autenticação e autorização
import { Role } from '../../generated/prisma/client'; // importa o enum Role para verificação de permissão

const router = Router(); // cria uma nova instância do roteador do express

// --- rotas para ingredientes ---

// POST /ingredientes -> criar um novo ingrediente
router.post(
  '/', // o caminho base para esta rota (ex: /api/ingredientes/)
  authMiddleware, // primeiro, verifica se o token jwt é válido e anexa o usuário à requisição
  authorizeRoles(Role.ADMINISTRADOR), // depois, verifica se o usuário logado tem a role 'ADMINISTRADOR'
  createIngredienteController // se ambos os middlewares passarem, chama o controller para criar o ingrediente
);

// GET /ingredientes -> listar todos os ingredientes (com filtros opcionais via query params)
// esta rota é pública, não requer autenticação nem roles específicas.
router.get(
  '/',
  listarIngredientesController
);

// GET /ingredientes/:id -> buscar um ingrediente específico pelo ID
// esta rota também é pública.
router.get(
  '/:id', // o ':id' indica um parâmetro de rota que será o ID do ingrediente
  getIngredienteByIdController
);

// PUT /ingredientes/:id -> atualizar um ingrediente existente
// requer autenticação e role de administrador.
router.put(
  '/:id',
  authMiddleware,
  authorizeRoles(Role.ADMINISTRADOR),
  updateIngredienteController
);

// DELETE /ingredientes/:id -> deletar um ingrediente existente
// requer autenticação e role de administrador.
router.delete(
  '/:id',
  authMiddleware,
  authorizeRoles(Role.ADMINISTRADOR),
  deleteIngredienteController
);

export default router; // exporta o roteador para ser usado no arquivo principal do servidor (server.ts)
