import { prisma } from '../server'; // importa a instância do prisma do server.ts
import { Usuario, Role, Prisma } from '../../generated/prisma/client';

export interface UpdateUsuarioData {
  nome?: string;
  role?: Role;
}

/* busca todos os usuários no banco de dados.
exclui o campo 'senha' do retorno. */
export const listarTodosUsuarios = async (): Promise<Omit<Usuario, 'senha'>[]> => {
  return prisma.usuario.findMany({
    select: {
      id: true,
      nome: true,
      email: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
    orderBy: {
      nome: 'asc',
    },
  });
};

/* busca um usuário específico pelo seu id, exclui o campo 'senha'.
retorna null se o usuário não for encontrado. */
export const findUsuarioPorId = async (id: number): Promise<Omit<Usuario, 'senha'> | null> => {
  return prisma.usuario.findUnique({
    where: { id },
    select: {
      id: true,
      nome: true,
      email: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

// atualiza os dados de um usuário existente.
export const updateUsuario = async (id: number, data: UpdateUsuarioData): Promise<Omit<Usuario, 'senha'>> => {
  // prepara o objeto de dados apenas com os campos permitidos/fornecidos
  const dadosParaAtualizar: Prisma.UsuarioUpdateInput = {};
  if (data.nome !== undefined) {
    dadosParaAtualizar.nome = data.nome;
  }
  if (data.role !== undefined) {
    dadosParaAtualizar.role = data.role;
  }

  if (Object.keys(dadosParaAtualizar).length === 0) {
      throw new Error('Nenhum dado válido fornecido para atualização.');
  }


  try {
    const usuarioAtualizado = await prisma.usuario.update({
      where: { id },
      data: dadosParaAtualizar,
      select: {
        id: true,
        nome: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return usuarioAtualizado;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      // lança um erro específico para "não encontrado" que o controller pode pegar
      const notFoundError = new Error(`Usuário com ID ${id} não encontrado para atualização.`) as any;
      notFoundError.statusCode = 404; // adiciona um status code para o controller usar
      throw notFoundError;
    }
    // relança outros erros do prisma ou erros inesperados
    throw error;
  }
};

// deleta um usuário do banco de dados pelo id.
export const deleteUsuario = async (id: number): Promise<Omit<Usuario, 'senha'>> => {
  try {
    const usuarioDeletado = await prisma.usuario.delete({
      where: { id },
      select: { // retorna os dados do usuário deletado (sem senha)
        id: true,
        nome: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      }
    });
    return usuarioDeletado;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      // lança um erro específico para "não encontrado"
      const notFoundError = new Error(`Usuário com ID ${id} não encontrado para deleção.`) as any;
      notFoundError.statusCode = 404;
      throw notFoundError;
    }
    // relança outros erros
    throw error;
  }
};