/**
 * @openapi
 * components:
 *   schemas:
 *     ReceitaCreateInput:
 *       type: object
 *       required:
 *         - titulo
 *         - descricao
 *         - tempoPreparo
 *         - dificuldade
 *         - rendimento
 *         - categoriaId
 *       properties:
 *         titulo:
 *           type: string
 *           description: 'Título da receita. Será armazenado em minúsculas.'
 *           example: 'Bolo de Chocolate'
 *         descricao:
 *           type: string
 *           description: 'Descrição e modo de preparo da receita. Será armazenado em minúsculas.'
 *           example: 'Um delicioso bolo de chocolate fácil de fazer.'
 *         tempoPreparo:
 *           type: string
 *           description: 'Tempo estimado de preparo. Será armazenado em minúsculas.'
 *           example: '45 minutos'
 *         dificuldade:
 *           type: string
 *           enum: [FACIL, MEDIO, DIFICIL]
 *           description: 'Nível de dificuldade da receita.'
 *           example: 'MEDIO'
 *         rendimento:
 *           type: integer
 *           format: int32
 *           description: 'Quantidade de porções que a receita rende.'
 *           example: 8
 *         imagemUrl:
 *           type: string
 *           format: uri
 *           nullable: true
 *           description: 'URL da imagem da receita.'
 *           example: 'https://example.com/images/bolo-chocolate.jpg'
 *         categoriaId:
 *           type: integer
 *           format: int32
 *           description: 'ID da categoria à qual a receita pertence.'
 *           example: 1
 *         etiquetas:
 *           type: array
 *           description: 'Lista de etiquetas associadas à receita.'
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 format: int32
 *                 description: 'ID da etiqueta.'
 *                 example: 2
 *         ingredientes:
 *           type: array
 *           description: 'Lista de ingredientes para a receita com suas quantidades.'
 *           items:
 *             type: object
 *             required:
 *               - quantidade
 *               - unidade
 *             properties:
 *               ingredienteId:
 *                 type: integer
 *                 format: int32
 *                 description: 'ID do ingrediente (opcional se nomeIngrediente for fornecido).'
 *                 example: 5
 *               nomeIngrediente:
 *                 type: string
 *                 description: 'Nome do novo ingrediente (opcional se ingredienteId for fornecido).'
 *                 example: 'Farinha de trigo'
 *               categoriaIngrediente:
 *                 type: string
 *                 nullable: true
 *                 description: 'Categoria do ingrediente (opcional).'
 *                 example: 'Secos'
 *               quantidade:
 *                 type: number
 *                 format: float
 *                 description: 'Quantidade do ingrediente.'
 *                 example: 2
 *               unidade:
 *                 type: string
 *                 description: 'Unidade de medida do ingrediente.'
 *                 example: 'xícaras'
 *
 *     ReceitaUpdateInput:
 *       type: object
 *       properties:
 *         titulo:
 *           type: string
 *           description: 'Novo título da receita. Será armazenado em minúsculas.'
 *           example: 'Bolo de Chocolate Especial'
 *         descricao:
 *           type: string
 *           description: 'Nova descrição e modo de preparo. Será armazenado em minúsculas.'
 *           example: 'Um delicioso bolo de chocolate com cobertura especial.'
 *         tempoPreparo:
 *           type: string
 *           description: 'Novo tempo estimado de preparo. Será armazenado em minúsculas.'
 *           example: '60 minutos'
 *         dificuldade:
 *           type: string
 *           enum: [FACIL, MEDIO, DIFICIL]
 *           description: 'Novo nível de dificuldade da receita.'
 *           example: 'MEDIO'
 *         rendimento:
 *           type: integer
 *           format: int32
 *           description: 'Nova quantidade de porções.'
 *           example: 10
 *         imagemUrl:
 *           type: string
 *           format: uri
 *           nullable: true
 *           description: 'Nova URL da imagem da receita.'
 *           example: 'https://example.com/images/bolo-chocolate-especial.jpg'
 *         categoriaId:
 *           type: integer
 *           format: int32
 *           description: 'Novo ID da categoria.'
 *           example: 2
 *         etiquetas:
 *           type: array
 *           description: 'Nova lista de etiquetas associadas (substitui as anteriores).'
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 format: int32
 *                 description: 'ID da etiqueta.'
 *                 example: 3
 *         ingredientes:
 *           type: array
 *           description: 'Nova lista de ingredientes (substitui os anteriores).'
 *           items:
 *             type: object
 *             required:
 *               - quantidade
 *               - unidade
 *             properties:
 *               ingredienteId:
 *                 type: integer
 *                 format: int32
 *                 example: 5
 *               nomeIngrediente:
 *                 type: string
 *                 example: 'Farinha de trigo'
 *               categoriaIngrediente:
 *                 type: string
 *                 nullable: true
 *                 example: 'Secos'
 *               quantidade:
 *                 type: number
 *                 format: float
 *                 example: 2
 *               unidade:
 *                 type: string
 *                 example: 'xícaras'
 *
 *     ReceitaOutput:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int32
 *           description: 'Identificador único da receita.'
 *           example: 1
 *         titulo:
 *           type: string
 *           description: 'Título da receita.'
 *           example: 'bolo de chocolate'
 *         descricao:
 *           type: string
 *           description: 'Descrição e modo de preparo.'
 *           example: 'um delicioso bolo de chocolate fácil de fazer.'
 *         tempoPreparo:
 *           type: string
 *           description: 'Tempo estimado de preparo.'
 *           example: '45 minutos'
 *         dificuldade:
 *           type: string
 *           enum: [FACIL, MEDIO, DIFICIL]
 *           description: 'Nível de dificuldade da receita.'
 *           example: 'MEDIO'
 *         rendimento:
 *           type: integer
 *           format: int32
 *           description: 'Quantidade de porções que a receita rende.'
 *           example: 8
 *         imagemUrl:
 *           type: string
 *           format: uri
 *           nullable: true
 *           description: 'URL da imagem da receita.'
 *           example: 'https://example.com/images/bolo-chocolate.jpg'
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: 'Data e hora de criação da receita.'
 *           example: '2024-05-20T15:30:00Z'
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: 'Data e hora da última atualização da receita.'
 *           example: '2024-05-21T10:15:00Z'
 *         autor:
 *           $ref: '#/components/schemas/UsuarioOutputSimple'
 *         categoria:
 *           $ref: '#/components/schemas/CategoriaOutput'
 *         etiquetas:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               etiqueta:
 *                 $ref: '#/components/schemas/EtiquetaOutput'
 *         ingredientes:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/ItemReceitaIngredienteOutput'
 *         comentarios:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/ComentarioOutput'
 *         _count:
 *           type: object
 *           properties:
 *             comentarios:
 *               type: integer
 *               format: int32
 *               description: 'Número de comentários na receita.'
 *               example: 5
 *             favoritadoPor:
 *               type: integer
 *               format: int32
 *               description: 'Número de usuários que favoritaram a receita.'
 *               example: 12
 *
 *     ItemReceitaIngredienteOutput:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int32
 *           description: 'ID do item da receita.'
 *           example: 1
 *         receitaId:
 *           type: integer
 *           format: int32
 *           description: 'ID da receita.'
 *           example: 1
 *         ingredienteId:
 *           type: integer
 *           format: int32
 *           description: 'ID do ingrediente.'
 *           example: 5
 *         quantidade:
 *           type: number
 *           format: float
 *           description: 'Quantidade do ingrediente.'
 *           example: 2
 *         unidade:
 *           type: string
 *           description: 'Unidade de medida.'
 *           example: 'xícaras'
 *         ingrediente:
 *           $ref: '#/components/schemas/IngredienteOutput'
 */
