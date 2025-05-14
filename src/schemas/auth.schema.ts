/**
 * @openapi
 * components:
 *   schemas:
 *     LoginInput:
 *       type: object
 *       required:
 *         - email
 *         - senha
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: 'E-mail do usuário para login.'
 *           example: 'usuario@example.com'
 *         senha:
 *           type: string
 *           format: password
 *           description: 'Senha do usuário.'
 *           example: 'senha123'
 *
 *     LoginResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           description: 'Indica se o login foi bem-sucedido.'
 *           example: true
 *         token:
 *           type: string
 *           description: 'Token JWT para autenticação nas rotas protegidas.'
 *           example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
 *         usuario:
 *           $ref: '#/components/schemas/UsuarioOutput'
 */
