// src/schemas/usuario.schema.ts

/**
 * @openapi
 * components:
 *   schemas:
 *     UsuarioCreateInput:
 *       type: object
 *       required:
 *         - nome
 *         - email
 *         - senha
 *       properties:
 *         nome:
 *           type: string
 *           description: 'Nome completo do usuário. Será armazenado em minúsculas.'
 *           example: 'João da Silva'
 *         email:
 *           type: string
 *           format: email
 *           description: 'Email do usuário (único no sistema).'
 *           example: 'joao@exemplo.com'
 *         senha:
 *           type: string
 *           format: password
 *           description: 'Senha do usuário. Será armazenada com hash.'
 *           minLength: 6
 *           example: 'senha123'
 *         avatarUrl:
 *           type: string
 *           format: uri
 *           nullable: true
 *           description: 'URL para avatar/foto do usuário (opcional).'
 *           example: 'https://example.com/images/avatar.jpg'
 *
 *     UsuarioUpdateInput:
 *       type: object
 *       properties:
 *         nome:
 *           type: string
 *           description: 'Novo nome do usuário. Será armazenado em minúsculas.'
 *           example: 'João Carlos da Silva'
 *         email:
 *           type: string
 *           format: email
 *           description: 'Novo email do usuário.'
 *           example: 'joaocarlos@exemplo.com'
 *         senhaAtual:
 *           type: string
 *           format: password
 *           description: 'Senha atual (necessária para validar mudanças de senha ou email).'
 *           example: 'senha123'
 *         novaSenha:
 *           type: string
 *           format: password
 *           description: 'Nova senha desejada.'
 *           minLength: 6
 *           example: 'novaSenha456'
 *         avatarUrl:
 *           type: string
 *           format: uri
 *           nullable: true
 *           description: 'Nova URL para avatar/foto.'
 *           example: 'https://example.com/images/novo-avatar.jpg'
 *
 *     UsuarioOutput:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int32
 *           description: 'Identificador único do usuário.'
 *           example: 1
 *         nome:
 *           type: string
 *           description: 'Nome do usuário.'
 *           example: 'joão da silva'
 *         email:
 *           type: string
 *           format: email
 *           description: 'Email do usuário.'
 *           example: 'joao@exemplo.com'
 *         avatarUrl:
 *           type: string
 *           format: uri
 *           nullable: true
 *           description: 'URL do avatar/foto do usuário.'
 *           example: 'https://example.com/images/avatar.jpg'
 *         role:
 *           type: string
 *           enum: [COMUM, ADMINISTRADOR]
 *           description: 'Papel/função do usuário no sistema.'
 *           example: 'COMUM'
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: 'Data e hora de criação da conta.'
 *           example: '2023-01-15T10:30:00Z'
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: 'Data e hora da última atualização do perfil.'
 *           example: '2023-02-20T14:45:00Z'
 *
 *     UsuarioOutputSimple:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int32
 *           description: 'Identificador único do usuário.'
 *           example: 1
 *         nome:
 *           type: string
 *           description: 'Nome do usuário.'
 *           example: 'joão da silva'
 *         avatarUrl:
 *           type: string
 *           format: uri
 *           nullable: true
 *           description: 'URL do avatar/foto do usuário.'
 *           example: 'https://example.com/images/avatar.jpg'
 */
