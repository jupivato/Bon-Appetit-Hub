import { Router } from 'express';
import {
  listarUsuariosController,
  getUsuarioByIdController,
  updateUsuarioController,
  deleteUsuarioController,
} from '../controllers/usuario.controller';
import { authMiddleware, authorizeRoles } from '../middlewares/auth.middleware'; // middleware de autenticação e autorização
import { Role } from '../../generated/prisma/client';

const router = Router();

// rotas para usuários

// get /usuarios -> listar todos os usuários (somente admin)
// authmiddleware: verifica se o token jwt é válido
// authorizeroles(role.administrador): verifica se o usuário tem a role admin
// listarusuarioscontroller: executa a lógica do controller
router.get(
    '/',
    authMiddleware,
    authorizeRoles(Role.ADMINISTRADOR),
    listarUsuariosController
);

// get /usuarios/:id -> obter um usuário pelo id (admin ou o próprio usuário)
// authmiddleware: verifica token
// getusuariobyidcontroller: controller contém a lógica para verificar se é admin ou o próprio usuário
router.get(
    '/:id',
    authMiddleware,
    getUsuarioByIdController
);

// put /usuarios/:id -> atualizar um usuário (admin ou o próprio usuário)
// authmiddleware: verifica token
// updateusuariocontroller: controller contém a lógica de permissão (quem atualiza o quê)
router.put(
    '/:id',
    authMiddleware,
    updateUsuarioController
);

// delete /usuarios/:id -> deletar um usuário (admin ou o próprio usuário)
// authmiddleware: verifica token
// deleteusuariocontroller: controller contém a lógica de permissão
router.delete(
    '/:id',
    authMiddleware,
    deleteUsuarioController
);

export default router;