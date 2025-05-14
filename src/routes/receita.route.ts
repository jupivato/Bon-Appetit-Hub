import { Router } from 'express';
import {
  createReceitaController,
  listarReceitasController,
  getReceitaByIdController,
  updateReceitaController,
  deleteReceitaController,
} from '../controllers/receita.controller'; // importa os controllers de receita
import {
  createComentarioController, // importa o controller para criar comentários
  listarComentariosPorReceitaController // importa o controller para listar comentários
} from '../controllers/comentario.controller'; // importa os controllers de comentário
// importa o controller para favoritar/desfavoritar
import { toggleFavoritoController } from '../controllers/receitafavorita.controller';
import { authMiddleware, authorizeRoles } from '../middlewares/auth.middleware'; // importa o middleware de autenticação
import { Role } from '../../generated/prisma/client'; // importa os roles do prisma

const router = Router(); // cria uma nova instância do roteador do express

// rotas principais para receitas

// GET /receitas - listar receitas com suporte a filtros (categoria, etiqueta, título e ingredientes)
// Parâmetros query:
// - categoriaId: ID da categoria para filtrar
// - etiquetaId: ID da etiqueta para filtrar
// - titulo: texto para buscar no título das receitas
// - ingredientes: lista de IDs de ingredientes separados por vírgula (ex: 1,2,3)
// Esta rota pode ser pública.
router.get('/', listarReceitasController);

// GET /receitas/:id - obter receita específica
// esta rota pode ser pública.
router.get('/:id', getReceitaByIdController);

// POST /receitas - criar receita (precisa estar autenticado como COMUM ou ADMINISTRADOR)
router.post('/', authMiddleware, createReceitaController);

// PUT /receitas/:id - atualizar receita (precisa ser o autor ou ADMINISTRADOR)
router.put('/:id', authMiddleware, updateReceitaController);

// DELETE /receitas/:id - excluir receita (precisa ser o autor ou ADMINISTRADOR)
router.delete('/:id', authMiddleware, deleteReceitaController);

// rota para favoritar/desfavoritar uma receita
// POST /receitas/:receitaid/favoritar
router.post('/:receitaId/favoritar', authMiddleware, toggleFavoritoController);

// rotas aninhadas para comentários de uma receita específica

// POST /receitas/:receitaid/comentarios -> criar um novo comentário para a receita :receitaid
// requer autenticação.
router.post('/:receitaId/comentarios', authMiddleware, createComentarioController);

// GET /receitas/:receitaid/comentarios -> listar todos os comentários para a receita :receitaid
// rota pública.
router.get('/:receitaId/comentarios', listarComentariosPorReceitaController);

export default router;