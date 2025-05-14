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

// GET /categorias - listar todas as categorias
router.get('/', listarCategoriasController);

// GET /categorias/:id - obter categoria específica
router.get('/:id', getCategoriaByIdController);

// GET /categorias/:id/receitas - obter todas as receitas de uma categoria
router.get('/:id/receitas', getReceitasPorCategoriaController);

// POST /categorias - criar categoria (apenas ADMINISTRADOR)
router.post(
  '/',
  authMiddleware,
  authorizeRoles(Role.ADMINISTRADOR),
  createCategoriaController
);

// PUT /categorias/:id - atualizar categoria (apenas ADMINISTRADOR)
router.put(
  '/:id',
  authMiddleware,
  authorizeRoles(Role.ADMINISTRADOR),
  updateCategoriaController
);

// DELETE /categorias/:id - excluir categoria (apenas ADMINISTRADOR)
router.delete(
  '/:id',
  authMiddleware,
  authorizeRoles(Role.ADMINISTRADOR),
  deleteCategoriaController
);

export default router;