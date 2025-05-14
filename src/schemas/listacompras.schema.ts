/**
 * @openapi
 * components:
 *   schemas:
 *     ItemListaComprasCreateInput:
 *       type: object
 *       required:
 *         - ingredienteId
 *       properties:
 *         ingredienteId:
 *           type: integer
 *           format: int32
 *           description: 'ID do ingrediente a ser adicionado à lista de compras.'
 *           example: 5
 *         quantidade:
 *           type: number
 *           format: float
 *           nullable: true
 *           description: 'Quantidade do ingrediente (opcional).'
 *           example: 2
 *         unidade:
 *           type: string
 *           nullable: true
 *           description: 'Unidade de medida (opcional).'
 *           example: 'kg'
 *
 *     AdicionarReceitaListaComprasInput:
 *       type: object
 *       required:
 *         - receitaId
 *       properties:
 *         receitaId:
 *           type: integer
 *           format: int32
 *           description: 'ID da receita cujos ingredientes serão adicionados à lista.'
 *           example: 3
 *
 *     ItemListaComprasOutput:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int32
 *           description: 'Identificador único do item da lista de compras.'
 *           example: 1
 *         usuarioId:
 *           type: integer
 *           format: int32
 *           description: 'ID do usuário dono da lista.'
 *           example: 2
 *         ingredienteId:
 *           type: integer
 *           format: int32
 *           description: 'ID do ingrediente.'
 *           example: 5
 *         quantidade:
 *           type: number
 *           format: float
 *           nullable: true
 *           description: 'Quantidade do ingrediente.'
 *           example: 2
 *         unidade:
 *           type: string
 *           nullable: true
 *           description: 'Unidade de medida.'
 *           example: 'kg'
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: 'Data e hora de adição do item à lista.'
 *           example: '2024-05-22T11:30:00Z'
 *         ingrediente:
 *           $ref: '#/components/schemas/IngredienteOutput'
 *
 *     ListaComprasOutput:
 *       type: array
 *       items:
 *         $ref: '#/components/schemas/ItemListaComprasOutput'
 */
