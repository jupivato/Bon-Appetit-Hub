import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '../generated/prisma/client'; // Ajuste o caminho se necessário

// Importações para o Swagger
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import authRoutes from './routes/auth.route';
import usuarioRoutes from './routes/usuario.route';
import receitaRoutes from './routes/receita.route';
import ingredienteRoutes from './routes/ingrediente.route';
import categoriaRoutes from './routes/categoria.route';
import etiquetaRoutes from './routes/etiqueta.route';
import comentarioRoutes from './routes/comentario.route';
import listaComprasRoutes from './routes/listacompras.route';
import receitaFavoritaRoutes from './routes/receitafavorita.route';

dotenv.config();

// instância do prisma client
export const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'], // para ver logs do prisma
});

const app: Application = express();
const PORT = process.env.PORT || 3000; // do .env ou padrão 3000

// Middlewares globais
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração do Swagger
const swaggerOptions: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Bon Appetit Hub API',
      version: '1.0.0',
      description: 'API para gerenciar receitas, usuários, e mais no Bon Appetit Hub.',
      contact: { // Opcional: adicione suas informações de contato
        name: 'Equipe Bon Appetit Hub', // Nome da sua equipe ou seu nome
        // url: 'https://seu-projeto.com', // URL do seu projeto, se houver
        // email: 'contato@bonappetithub.com', // Email de contato
      },
    },
    servers: [
      {
        url: `http://localhost:${PORT}`, // URL base da sua API
        description: 'Servidor de Desenvolvimento Local',
      },
      // { // Exemplo para servidor de produção
      //   url: 'https://api.bonappetithub.com',
      //   description: 'Servidor de Produção',
      // }
    ],
    components: {
      securitySchemes: {
        bearerAuth: { // Nome do esquema de segurança para JWT
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'Insira o token JWT no formato: Bearer {token}',
        },
      },
      schemas: {
        // Os schemas específicos (UsuarioCreateInput, UsuarioOutput, LoginInput, ReceitaInput etc.)
        // serão carregados automaticamente a partir dos ficheiros .ts
        // dentro da pasta './src/schemas/' devido à configuração 'apis' abaixo.

        // Schema para respostas de erro genéricas (pode ser mantido aqui ou movido para um src/schemas/common.schema.ts)
        ErrorResponse: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: false,
              description: 'Indica se a operação foi bem-sucedida.'
            },
            message: {
              type: 'string',
              example: 'Ocorreu um erro ao processar a requisição.',
              description: 'Mensagem descritiva do erro.'
            },
            // details: { // Opcional, para erros de validação, por exemplo
            //   type: 'object',
            //   additionalProperties: true,
            //   example: { field: "email", issue: "Formato inválido" }
            // }
          },
          required: ['success', 'message'],
        },
      },
    },
    security: [ // Define a segurança global (pode ser sobrescrita por rota)
      {
        bearerAuth: [], // Aplica o 'bearerAuth' globalmente.
                        // Para rotas públicas como login/registro, especifique `security: []` na anotação da rota.
      },
    ],
  },
  // Caminho para os ficheiros que contêm as anotações OpenAPI (JSDoc)
  apis: ['./src/routes/**/*.ts', './src/schemas/**/*.ts'], // Lê de rotas e da pasta de schemas
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Rota para a documentação Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rota de health check
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'UP', timestamp: new Date().toISOString() });
});

// Rotas da API
// Considere prefixar suas rotas com /api/v1 para versionamento, se desejar.
// Ex: app.use('/api/v1/auth', authRoutes);
// Se fizer isso, lembre-se de ajustar a `url` em `swaggerOptions.servers`.
app.use('/auth', authRoutes);
app.use('/usuarios', usuarioRoutes);
app.use('/receitas', receitaRoutes);
app.use('/ingredientes', ingredienteRoutes);
app.use('/categorias', categoriaRoutes);
app.use('/etiquetas', etiquetaRoutes);
app.use('/comentarios', comentarioRoutes);
app.use('/minha-lista-compras', listaComprasRoutes);
app.use('/minhas-favoritas', receitaFavoritaRoutes);

// Middleware de tratamento de erros global (deve ser o último middleware)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Erro não tratado:', err.stack);
  const statusCode = (err as any).statusCode || 500;
  const message = err.message || 'Erro interno do servidor.';
  res.status(statusCode).json({
    success: false,
    message: message,
  });
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`BonAppetitHub Server rodando na porta ${PORT}`);
  console.log(`Documentação Swagger UI disponível em http://localhost:${PORT}/api-docs`);
});
