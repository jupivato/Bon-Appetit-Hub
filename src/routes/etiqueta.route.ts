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

// GET /etiquetas - listar todas as etiquetas
router.get('/', listarEtiquetasController);

// GET /etiquetas/:id - obter etiqueta específica
router.get('/:id', getEtiquetaByIdController);

// GET /etiquetas/:id/receitas - obter todas as receitas com uma etiqueta
router.get('/:id/receitas', getReceitasPorEtiquetaController);

// POST /etiquetas - criar etiqueta (apenas ADMINISTRADOR)
router.post(
  '/',
  authMiddleware,
  authorizeRoles(Role.ADMINISTRADOR),
  createEtiquetaController
);

// PUT /etiquetas/:id - atualizar etiqueta (apenas ADMINISTRADOR)
router.put(
  '/:id',
  authMiddleware,
  authorizeRoles(Role.ADMINISTRADOR),
  updateEtiquetaController
);

// DELETE /etiquetas/:id - excluir etiqueta (apenas ADMINISTRADOR)
router.delete(
  '/:id',
  authMiddleware,
  authorizeRoles(Role.ADMINISTRADOR),
  deleteEtiquetaController
);

export default router;