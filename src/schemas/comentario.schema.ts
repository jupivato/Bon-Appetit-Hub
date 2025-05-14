/**
 * @openapi
 * components:
 *   schemas:
 *     ComentarioCreateInput:
 *       type: object
 *       required:
 *         - texto
 *       properties:
 *         texto:
 *           type: string
 *           description: 'Texto do comentário. Será armazenado em minúsculas.'
 *           example: 'Adorei essa receita! Ficou muito saborosa e fácil de fazer.'
 *
 *     ComentarioUpdateInput:
 *       type: object
 *       required:
 *         - texto
 *       properties:
 *         texto:
 *           type: string
 *           description: 'Novo texto do comentário. Será armazenado em minúsculas.'
 *           example: 'Amei essa receita! Ficou realmente deliciosa e vou fazer novamente.'
 *
 *     ComentarioOutput:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int32
 *           description: 'Identificador único do comentário.'
 *           example: 1
 *         texto:
 *           type: string
 *           description: 'Texto do comentário.'
 *           example: 'adorei essa receita! ficou muito saborosa e fácil de fazer.'
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: 'Data e hora de criação do comentário.'
 *           example: '2024-05-20T16:45:00Z'
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: 'Data e hora da última atualização do comentário.'
 *           example: '2024-05-20T16:45:00Z'
 *         autorId:
 *           type: integer
 *           format: int32
 *           description: 'ID do autor do comentário.'
 *           example: 5
 *         receitaId:
 *           type: integer
 *           format: int32
 *           description: 'ID da receita comentada.'
 *           example: 3
 *         autor:
 *           $ref: '#/components/schemas/UsuarioOutputSimple'
 */
