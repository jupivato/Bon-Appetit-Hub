import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '../generated/prisma/client';

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

// middlewares globais
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rota de health check
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'UP', timestamp: new Date().toISOString() });
});

// Rotas públicas (sem autenticação necessária)

app.use('/auth', authRoutes);
app.use('/usuarios', usuarioRoutes);
app.use('/receitas', receitaRoutes);
app.use('/ingredientes', ingredienteRoutes);
app.use('/categorias', categoriaRoutes);
app.use('/etiquetas', etiquetaRoutes);
app.use('/comentarios', comentarioRoutes);
app.use('/minha-lista-compras', listaComprasRoutes);
app.use('/minhas-favoritas', receitaFavoritaRoutes); // adiciona as rotas de receita favorita

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Erro não tratado:', err.stack);
  const statusCode = (err as any).statusCode || 500;
  const message = err.message || 'Erro interno do servidor.';
  res.status(statusCode).json({
    success: false,
    message: message,
  });
});


// inicialização do servidor
app.listen(PORT, () => {
  console.log(`BonAppetitHub Server rodando na porta ${PORT}`);
  console.log(`API disponível em http://localhost:${PORT}/api`);
});