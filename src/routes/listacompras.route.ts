import { Router } from 'express';
import {
  getMinhaListaComprasController,
  addItemMinhaListaComprasController,
  marcarItemCompradoERemoverController, // nome da função atualizado no controller
  addReceitaToListaComprasController,
} from '../controllers/listacompras.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router(); // cria uma nova instância do roteador do express

// todas as rotas abaixo requerem que o utilizador esteja autenticado
router.use(authMiddleware); // aplica o middleware de autenticação a todas as rotas neste ficheiro

// rotas para a lista de compras do utilizador logado

// get /minha-lista-compras -> obter a lista de compras do utilizador
router.get(
  '/', // o caminho base para este router será definido no server.ts (ex: /minha-lista-compras)
  getMinhaListaComprasController
);

// post /minha-lista-compras/itens -> adicionar um novo ingrediente à lista
router.post(
  '/itens',
  addItemMinhaListaComprasController
);

// delete /minha-lista-compras/itens/:itemid -> "marcar como comprado" (remover) um item da lista
// usamos delete aqui porque a ação principal é remover o item da lista visível
router.delete(
  '/itens/:itemId', // :itemid é o id do itemlistacompras
  marcarItemCompradoERemoverController
);

// post /minha-lista-compras/adicionar-receita/:receitaid -> adicionar todos os ingredientes de uma receita à lista
router.post(
  '/adicionar-receita/:receitaId', // :receitaid é o id da receita
  addReceitaToListaComprasController
);

export default router;