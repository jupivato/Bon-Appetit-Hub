/**
 * @openapi
 * components:
 *   schemas:
 *     CategoriaCreateInput:
 *       type: object
 *       required:
 *         - nome
 *       properties:
 *         nome:
 *           type: string
 *           description: 'Nome da categoria. Será armazenado em minúsculas.'
 *           example: 'Sobremesas'
 *
 *     CategoriaUpdateInput:
 *       type: object
 *       required:
 *         - nome
 *       properties:
 *         nome:
 *           type: string
 *           description: 'Novo nome para a categoria. Será armazenado em minúsculas.'
 *           example: 'Doces e Sobremesas'
 *
 *     CategoriaOutput:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int32
 *           description: 'Identificador único da categoria.'
 *           example: 1
 *         nome:
 *           type: string
 *           description: 'Nome da categoria (armazenado em minúsculas).'
 *           example: 'sobremesas'
 *         receitasCount:
 *           type: integer
 *           format: int32
 *           description: 'Número de receitas nesta categoria.'
 *           example: 15
 *           readOnly: true
 */