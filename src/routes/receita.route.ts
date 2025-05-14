import { Router } from 'express';
import {
  createReceitaController,
  listarReceitasController,
  getReceitaByIdController,
  updateReceitaController,
  deleteReceitaController,
  buscaAvancadaReceitasController
} from '../controllers/receita.controller';
import {
  createComentarioController,
  listarComentariosPorReceitaController
} from '../controllers/comentario.controller';
import { toggleFavoritoController } from '../controllers/receitafavorita.controller';
import { authMiddleware, authorizeRoles } from '../middlewares/auth.middleware';
import { Role } from '../../generated/prisma/client';

const router = Router();

/**
 * @openapi
 * tags:
 *   name: Receitas
 *   description: Operações relacionadas a receitas culinárias
 */

/**
 * @openapi
 * /receitas/busca:
 *   get:
 *     tags:
 *       - Receitas
 *     summary: Busca avançada de receitas
 *     description: Endpoint dedicado para busca e filtragem avançada de receitas
 *     parameters:
 *       - name: q
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *         description: 'Termo de busca geral (busca no título e descrição)'
 *       - name: titulo
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *         description: 'Filtra por título (busca parcial, case insensitive)'
 *       - name: categoriaId
 *         in: query
 *         required: false
 *         schema:
 *           type: integer
 *         description: 'Filtra por ID da categoria'
 *       - name: etiquetaId
 *         in: query
 *         required: false
 *         schema:
 *           type: integer
 *         description: 'Filtra por ID da etiqueta'
 *       - name: ingredientes
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *         description: 'Lista de IDs de ingredientes separados por vírgula (ex: "1,2,3"). Retorna receitas onde TODOS os ingredientes da receita estão na lista fornecida.'
 *       - name: autorId
 *         in: query
 *         required: false
 *         schema:
 *           type: integer
 *         description: 'Filtra por ID do autor da receita'
 *       - name: dificuldade
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *           enum: [FACIL, MEDIO, DIFICIL]
 *         description: 'Filtra por nível de dificuldade da receita'
 *       - name: orderBy
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *           enum: [recent, popular, title]
 *         description: 'Ordenação dos resultados: recent (mais recentes), popular (mais favoritadas), title (por título)'
 *     responses:
 *       '200':
 *         description: Lista de receitas encontradas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 total:
 *                   type: integer
 *                   description: 'Total de receitas encontradas'
 *                   example: 15
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ReceitaOutput'
 *       '500':
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *     security: [] # Rota pública
 */
router.get('/busca', buscaAvancadaReceitasController);

/**
 * @openapi
 * /receitas:
 *   get:
 *     tags:
 *       - Receitas
 *     summary: Lista todas as receitas
 *     description: Retorna uma lista de receitas com suporte a vários filtros.
 *     parameters:
 *       - name: titulo
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *         description: Filtra por título (busca parcial, case insensitive)
 *       - name: categoriaId
 *         in: query
 *         required: false
 *         schema:
 *           type: integer
 *         description: Filtra por ID da categoria
 *       - name: etiquetaId
 *         in: query
 *         required: false
 *         schema:
 *           type: integer
 *         description: Filtra por ID da etiqueta
 *       - name: ingredientes
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *         description: Lista de IDs de ingredientes separados por vírgula (ex. "1,2,3")
 *       - name: autorId
 *         in: query
 *         required: false
 *         schema:
 *           type: integer
 *         description: Filtra por ID do autor da receita
 *       - name: dificuldade
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *           enum: [FACIL, MEDIO, DIFICIL]
 *         description: Filtra por nível de dificuldade da receita
 *     responses:
 *       '200':
 *         description: Lista de receitas encontradas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ReceitaOutput'
 *       '500':
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *     security: [] # Rota pública
 */
router.get('/', listarReceitasController);

/**
 * @openapi
 * /receitas/{id}:
 *   get:
 *     tags:
 *       - Receitas
 *     summary: Busca uma receita pelo ID
 *     description: Retorna os detalhes completos de uma receita específica
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da receita a buscar
 *     responses:
 *       '200':
 *         description: Detalhes da receita
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/ReceitaOutput'
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
 *     security: [] # Rota pública
 */
router.get('/:id', getReceitaByIdController);

/**
 * @openapi
 * /receitas:
 *   post:
 *     tags:
 *       - Receitas
 *     summary: Cria uma nova receita
 *     description: Adiciona uma nova receita ao sistema. Requer autenticação.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ReceitaCreateInput'
 *     responses:
 *       '201':
 *         description: Receita criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReceitaOutput'
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
 *       '500':
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post('/', authMiddleware, createReceitaController);

/**
 * @openapi
 * /receitas/{id}:
 *   put:
 *     tags:
 *       - Receitas
 *     summary: Atualiza uma receita
 *     description: Atualiza os dados de uma receita existente. Apenas o autor ou administradores podem realizar esta operação.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da receita a ser atualizada
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ReceitaUpdateInput'
 *     responses:
 *       '200':
 *         description: Receita atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReceitaOutput'
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
 *       '403':
 *         description: Proibido - usuário não tem permissão
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
router.put('/:id', authMiddleware, updateReceitaController);

/**
 * @openapi
 * /receitas/{id}:
 *   delete:
 *     tags:
 *       - Receitas
 *     summary: Exclui uma receita
 *     description: Remove uma receita do sistema. Apenas o autor ou administradores podem realizar esta operação.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da receita a ser excluída
 *     responses:
 *       '204':
 *         description: Receita excluída com sucesso (sem conteúdo)
 *       '401':
 *         description: Não autorizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '403':
 *         description: Proibido - usuário não tem permissão
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
router.delete('/:id', authMiddleware, deleteReceitaController);

/**
 * @openapi
 * /receitas/{receitaId}/favoritar:
 *   post:
 *     tags:
 *       - Receitas
 *       - Favoritos
 *     summary: Favorita/desfavorita uma receita
 *     description: Adiciona ou remove uma receita dos favoritos do usuário autenticado.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: receitaId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da receita a ser favoritada/desfavoritada
 *     responses:
 *       '200':
 *         description: Operação realizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ToggleFavoritoResponse'
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
router.post('/:receitaId/favoritar', authMiddleware, toggleFavoritoController);

/**
 * @openapi
 * /receitas/{receitaId}/comentarios:
 *   post:
 *     tags:
 *       - Receitas
 *       - Comentários
 *     summary: Adiciona um comentário a uma receita
 *     description: Cria um novo comentário para uma receita específica. Requer autenticação.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: receitaId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da receita a ser comentada
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ComentarioCreateInput'
 *     responses:
 *       '201':
 *         description: Comentário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ComentarioOutput'
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
router.post('/:receitaId/comentarios', authMiddleware, createComentarioController);

/**
 * @openapi
 * /receitas/{receitaId}/comentarios:
 *   get:
 *     tags:
 *       - Receitas
 *       - Comentários
 *     summary: Lista comentários de uma receita
 *     description: Retorna todos os comentários de uma receita específica
 *     parameters:
 *       - name: receitaId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da receita
 *     responses:
 *       '200':
 *         description: Lista de comentários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ComentarioOutput'
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
 *     security: [] # Rota pública
 */
router.get('/:receitaId/comentarios', listarComentariosPorReceitaController);

export default router;