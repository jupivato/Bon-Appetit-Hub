/**
 * @openapi
 * components:
 *   schemas:
 *     EtiquetaCreateInput:
 *       type: object
 *       required:
 *         - nome
 *       properties:
 *         nome:
 *           type: string
 *           description: 'Nome da etiqueta. Será armazenado em minúsculas.'
 *           example: 'Vegetariano'
 *
 *     EtiquetaUpdateInput:
 *       type: object
 *       required:
 *         - nome
 *       properties:
 *         nome:
 *           type: string
 *           description: 'Novo nome para a etiqueta. Será armazenado em minúsculas.'
 *           example: 'Vegano'
 *
 *     EtiquetaOutput:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int32
 *           description: 'Identificador único da etiqueta.'
 *           example: 1
 *         nome:
 *           type: string
 *           description: 'Nome da etiqueta (armazenado em minúsculas).'
 *           example: 'vegetariano'
 *         receitasCount:
 *           type: integer
 *           format: int32
 *           description: 'Número de receitas associadas a esta etiqueta.'
 *           example: 8
 *           readOnly: true
 */
