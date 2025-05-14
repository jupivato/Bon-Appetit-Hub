import { Router } from 'express';
import {
  getMinhaListaComprasController,
  addItemMinhaListaComprasController,
  marcarItemCompradoERemoverController,
  addReceitaToListaComprasController,
} from '../controllers/listacompras.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

/**
 * @openapi
 * tags:
 *   name: Lista de Compras
 *   description: Operações relacionadas à lista de compras do usuário
 */

router.use(authMiddleware);

/**
 * @openapi
 * /minha-lista-compras:
 *   get:
 *     tags:
 *       - Lista de Compras
 *     summary: Obtém a lista de compras do usuário
 *     description: Retorna todos os itens da lista de compras do usuário autenticado
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Lista de compras do usuário
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ListaComprasOutput'
 *       '401':
 *         description: Não autorizado
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
router.get('/', getMinhaListaComprasController);

/**
 * @openapi
 * /minha-lista-compras/itens:
 *   post:
 *     tags:
 *       - Lista de Compras
 *     summary: Adiciona um item à lista de compras
 *     description: Adiciona um novo ingrediente à lista de compras do usuário autenticado
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ItemListaComprasCreateInput'
 *     responses:
 *       '201':
 *         description: Item adicionado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ItemListaComprasOutput'
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
 *       '404':
 *         description: Ingrediente não encontrado
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
router.post('/itens', addItemMinhaListaComprasController);

/**
 * @openapi
 * /minha-lista-compras/itens/{itemId}:
 *   delete:
 *     tags:
 *       - Lista de Compras
 *     summary: Remove um item da lista de compras
 *     description: Remove um item da lista de compras do usuário autenticado (marcar como comprado)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: itemId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do item a ser removido
 *     responses:
 *       '200':
 *         description: Item removido com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: 'Item removido da lista de compras'
 *       '401':
 *         description: Não autorizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '404':
 *         description: Item não encontrado
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
router.delete('/itens/:itemId', marcarItemCompradoERemoverController);

/**
 * @openapi
 * /minha-lista-compras/adicionar-receita/{receitaId}:
 *   post:
 *     tags:
 *       - Lista de Compras
 *     summary: Adiciona ingredientes de uma receita à lista
 *     description: Adiciona todos os ingredientes de uma receita específica à lista de compras do usuário
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: receitaId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da receita cujos ingredientes serão adicionados
 *     responses:
 *       '200':
 *         description: Ingredientes adicionados com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: 'Ingredientes da receita adicionados à lista de compras'
 *                 itensAdicionados:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ItemListaComprasOutput'
 *       '401':
 *         description: Não autorizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '404':
 *         description: Receita não encontrada
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
router.post('/adicionar-receita/:receitaId', addReceitaToListaComprasController);

export default router;