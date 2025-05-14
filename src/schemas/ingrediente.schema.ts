/**
 * @openapi
 * components:
 *   schemas:
 *     IngredienteCreateInput:
 *       type: object
 *       required:
 *         - nome
 *       properties:
 *         nome:
 *           type: string
 *           description: 'Nome do ingrediente. Será armazenado em minúsculas.'
 *           example: 'Farinha de Trigo'
 *         imagemUrl:
 *           type: string
 *           format: uri
 *           nullable: true
 *           description: 'URL para uma imagem do ingrediente (opcional).'
 *           example: 'https://example.com/images/farinha.jpg'
 *         categoriaIngrediente:
 *           type: string
 *           nullable: true
 *           description: 'Categoria do ingrediente (ex: Laticínio, Grão, Tempero).'
 *           example: 'Cereais'
 *
 *     IngredienteUpdateInput:
 *       type: object
 *       properties:
 *         nome:
 *           type: string
 *           description: 'Novo nome do ingrediente. Será armazenado em minúsculas.'
 *           example: 'Farinha de Trigo Integral'
 *         imagemUrl:
 *           type: string
 *           format: uri
 *           nullable: true
 *           description: 'Nova URL para imagem do ingrediente.'
 *           example: 'https://example.com/images/farinha-integral.jpg'
 *         categoriaIngrediente:
 *           type: string
 *           nullable: true
 *           description: 'Nova categoria do ingrediente.'
 *           example: 'Cereais Integrais'
 *
 *     IngredienteOutput:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int32
 *           description: 'Identificador único do ingrediente.'
 *           example: 1
 *         nome:
 *           type: string
 *           description: 'Nome do ingrediente (armazenado em minúsculas).'
 *           example: 'farinha de trigo'
 *         imagemUrl:
 *           type: string
 *           format: uri
 *           nullable: true
 *           description: 'URL da imagem do ingrediente.'
 *           example: 'https://example.com/images/farinha.jpg'
 *         categoriaIngrediente:
 *           type: string
 *           nullable: true
 *           description: 'Categoria do ingrediente.'
 *           example: 'cereais'
 */