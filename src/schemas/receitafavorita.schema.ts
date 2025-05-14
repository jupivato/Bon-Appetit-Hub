/**
 * @openapi
 * components:
 *   schemas:
 *     ReceitaFavoritaOutput:
 *       type: object
 *       properties:
 *         usuarioId:
 *           type: integer
 *           format: int32
 *           description: 'ID do usuário que favoritou a receita.'
 *           example: 2
 *         receitaId:
 *           type: integer
 *           format: int32
 *           description: 'ID da receita favoritada.'
 *           example: 5
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: 'Data e hora em que a receita foi favoritada.'
 *           example: '2024-05-22T14:20:00Z'
 *         receita:
 *           $ref: '#/components/schemas/ReceitaOutput'
 *
 *     ToggleFavoritoResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           description: 'Indica se a operação foi bem-sucedida.'
 *           example: true
 *         message:
 *           type: string
 *           description: 'Mensagem descritiva sobre a operação realizada.'
 *           example: 'Receita adicionada aos favoritos com sucesso.'
 *         isFavorito:
 *           type: boolean
 *           description: 'Indica se a receita está favoritada após a operação.'
 *           example: true
 *
 *     MinhasFavoritasOutput:
 *       type: array
 *       items:
 *         $ref: '#/components/schemas/ReceitaFavoritaOutput'
 */
