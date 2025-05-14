import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { Role } from '../../generated/prisma/client'; // para tipar a role no payload

const JWT_SECRET = process.env.JWT_SECRET || 'pblc12_fallback_secret_nao_usar';

export interface AuthenticatedRequest extends Request {
  usuario?: {
    id: number;
    email: string;
    role: Role;
    iat?: number; // timestamp de emissão (opcional)
    exp?: number; // timestamp de expiração (opcional)
  };
}

export const authMiddleware = (
  req: AuthenticatedRequest, // usa a interface para tipar o req
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ message: 'Token ausente ou mal formatado.' });
    return;
  }

  const token = authHeader.split(' ')[1];
  console.log('[AUTH MIDDLEWARE] Token RECEBIDO para verificação:', token);
  try {
    console.log('[AUTH MIDDLEWARE] Segredo usado para verificar:', process.env.JWT_SECRET || 'fallback_do_middleware');
    const decoded = jwt.verify(token, JWT_SECRET) as AuthenticatedRequest['usuario']; // faz o cast para o tipo esperado

    // anexa ao request para uso posterior nos controllers
    req.usuario = decoded;

    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
        res.status(401).json({ message: 'Token expirado.' });
    } else if (error instanceof jwt.JsonWebTokenError) {
        res.status(401).json({ message: 'Token inválido.' });
    } else {
        res.status(401).json({ message: 'Falha na autenticação do token.' });
    }
    return;
  }
};

// middleware de autorização por role (opcional, mas útil)
export const authorizeRoles = (...rolesPermitidas: Role[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const usuarioRole = req.usuario?.role; // acessa a role via req.usuario

    if (!usuarioRole || !rolesPermitidas.includes(usuarioRole)) {
      res.status(403).json({ message: 'Acesso negado: Você não tem permissão para este recurso.' });
      return;
    }
    next();
  };
};