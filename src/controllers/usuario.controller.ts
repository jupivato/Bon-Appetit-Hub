import { Request, Response } from 'express';
import * as usuarioRepository from '../repositories/usuario.repository';
import { AuthenticatedRequest } from '../middlewares/auth.middleware'; // para acessar req.usuario
import { Role } from '../../generated/prisma/client';

/* controller para listar todos os usuários.
acessível apenas por administrador (verificação feita na rota). */
export const listarUsuariosController = async (req: Request, res: Response): Promise<void> => {
  try {
    const usuarios = await usuarioRepository.listarTodosUsuarios();
    res.status(200).json(usuarios); // retorna a lista de usuários (sem senha)
  } catch (error) {
    console.error("Erro ao listar usuários:", error);
    res.status(500).json({ message: 'Erro interno ao buscar usuários.' });
  }
};

/* controller para buscar um usuário por id.
admin busca qualquer um, comum busca a si mesmo. */
export const getUsuarioByIdController = async (req: Request, res: Response): Promise<void> => {
  // usamos 'as authenticatedrequest' pois essa rota é protegida pelo authmiddleware
  const authReq = req as AuthenticatedRequest;
  const idParam = parseInt(req.params.id, 10);
  const usuarioLogado = authReq.usuario; // dados do token (id, role, etc.)

  // validação do id
  if (isNaN(idParam)) {
    res.status(400).json({ message: 'ID de usuário inválido.' });
    return;
  }

  // verificação de permissão
  if (!usuarioLogado || (usuarioLogado.role !== Role.ADMINISTRADOR && usuarioLogado.id !== idParam)) {
    res.status(403).json({ message: 'Acesso negado.' }); // forbidden
    return;
  }

  try {
    const usuario = await usuarioRepository.findUsuarioPorId(idParam);
    if (usuario) {
      res.status(200).json(usuario);
    } else {
      res.status(404).json({ message: 'Usuário não encontrado.' }); // not found
    }
  } catch (error) {
    console.error(`Erro ao buscar usuário ${idParam}:`, error);
    res.status(500).json({ message: 'Erro interno ao buscar usuário.' });
  }
};

/* controller para atualizar usuário.
admin atualiza qualquer um (incl. role), comum só próprio nome. */
export const updateUsuarioController = async (req: Request, res: Response): Promise<void> => {
  const authReq = req as AuthenticatedRequest;
  const idParam = parseInt(req.params.id, 10);
  const usuarioLogado = authReq.usuario;
  const dadosParaAtualizar = req.body as usuarioRepository.UpdateUsuarioData;

  // validação do id
  if (isNaN(idParam)) {
    res.status(400).json({ message: 'ID de usuário inválido.' });
    return;
  }

  // validação de entrada
  if (!dadosParaAtualizar || Object.keys(dadosParaAtualizar).length === 0) {
     res.status(400).json({ message: 'Nenhum dado fornecido para atualização.' });
     return;
  }
  if (dadosParaAtualizar.nome !== undefined && typeof dadosParaAtualizar.nome !== 'string') {
     res.status(400).json({ message: 'O campo nome deve ser uma string.' });
     return;
  }
    if (dadosParaAtualizar.role !== undefined && !Object.values(Role).includes(dadosParaAtualizar.role)) {
     res.status(400).json({ message: `Role inválida. Roles permitidas: ${Object.values(Role).join(', ')}` });
     return;
  }

  // verificação de permissão
  if (!usuarioLogado) {
     res.status(401).json({ message: 'Não autenticado.' }); // should be caught by authmiddleware, but good practice
     return;
  }

  // lógica de permissão
  let podeAtualizar = false;
  const dadosPermitidos: usuarioRepository.UpdateUsuarioData = {};

  if (usuarioLogado.role === Role.ADMINISTRADOR) {
      // admin pode tentar atualizar nome e role de qualquer um
      podeAtualizar = true;
      if (dadosParaAtualizar.nome !== undefined) dadosPermitidos.nome = dadosParaAtualizar.nome;
      if (dadosParaAtualizar.role !== undefined) dadosPermitidos.role = dadosParaAtualizar.role;
  } else if (usuarioLogado.id === idParam) {
      // usuário comum só pode atualizar seu próprio nome
      podeAtualizar = true;
      if (dadosParaAtualizar.nome !== undefined) dadosPermitidos.nome = dadosParaAtualizar.nome;
      if (dadosParaAtualizar.role !== undefined) {
          // impede usuário comum de tentar mudar a própria role (ou a de outros)
          res.status(403).json({ message: 'Você não tem permissão para alterar a role.' });
          return;
      }
  }

  if (!podeAtualizar) {
      res.status(403).json({ message: 'Acesso negado para atualizar este usuário.' });
      return;
  }

  if (Object.keys(dadosPermitidos).length === 0) {
      // o usuário tentou atualizar campos que não podia ou não enviou dados válidos
        res.status(400).json({ message: 'Nenhum dado válido ou permitido fornecido para atualização.' });
        return;
  }

  try {
    // chama o repositório apenas com os dados permitidos
    const usuarioAtualizado = await usuarioRepository.updateUsuario(idParam, dadosPermitidos);
    res.status(200).json(usuarioAtualizado);
  } catch (error: any) {
     console.error(`Erro ao atualizar usuário ${idParam}:`, error);
     // usa o statuscode do erro lançado pelo repository (ex: 404) ou padrão 500
     const statusCode = error.statusCode || 500;
     res.status(statusCode).json({ message: error.message || 'Erro interno ao atualizar usuário.' });
  }
};

/* controller para deletar usuário.
admin deleta qualquer um (exceto si), comum só a si mesmo. */
export const deleteUsuarioController = async (req: Request, res: Response): Promise<void> => {
  const authReq = req as AuthenticatedRequest;
  const idParam = parseInt(req.params.id, 10);
  const usuarioLogado = authReq.usuario;

  // validação do id
  if (isNaN(idParam)) {
    res.status(400).json({ message: 'ID de usuário inválido.' });
    return;
  }

  // verificação de permissão
  if (!usuarioLogado) {
      res.status(401).json({ message: 'Não autenticado.' });
      return;
  }

  // regra: admin não pode deletar a si mesmo (exemplo de regra adicional)
  if (usuarioLogado.role === Role.ADMINISTRADOR && usuarioLogado.id === idParam) {
      res.status(403).json({ message: 'Administradores não podem deletar a própria conta.' });
      return;
  }

  // regra: usuário só pode deletar a si mesmo ou precisa ser admin
  if (usuarioLogado.role !== Role.ADMINISTRADOR && usuarioLogado.id !== idParam) {
    res.status(403).json({ message: 'Acesso negado para deletar este usuário.' });
    return;
  }

  try {
    await usuarioRepository.deleteUsuario(idParam);
    res.status(204).send(); // no content - sucesso na deleção sem corpo
  } catch (error: any) {
    console.error(`Erro ao deletar usuário ${idParam}:`, error);
    const statusCode = error.statusCode || 500; // usa status code do erro (ex: 404)
    res.status(statusCode).json({ message: error.message || 'Erro interno ao deletar usuário.' });
  }
};