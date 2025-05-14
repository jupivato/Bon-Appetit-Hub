import { prisma } from '../server';
import { Usuario, Role } from '../../generated/prisma/client'; // role é importado para usar role.comum
import argon2 from 'argon2';
import { toLower } from '../utils/string.utils'; // assumindo que tolower está em utils

// a interface para criar um utilizador não precisa mais do campo 'role'
// pois será sempre 'comum' através deste método de registo público.
export interface CreateUsuarioDataRepository {
  nome: string;
  email: string;
  senhaPlana: string; // senha antes do hash
  // role?: Role; // campo 'role' removido da interface de entrada
}

export const findUsuarioByEmailRepository = async (email: string): Promise<Usuario | null> => {
  // busca o email já em lowercase, pois é salvo assim
  return prisma.usuario.findUnique({ where: { email: toLower(email)! } });
};

/* cria um novo utilizador, a role será sempre 'comum'.
param data: nome, email, senhaplana. returns: utilizador criado (sem senha). */
export const createUsuarioRepository = async (
  data: CreateUsuarioDataRepository // agora não espera mais 'role' nos dados de entrada
): Promise<Omit<Usuario, 'senha'>> => {
  const senhaHash = await argon2.hash(data.senhaPlana);

  const nomeLower = toLower(data.nome)!;
  const emailLower = toLower(data.email)!;

  const novoUsuario = await prisma.usuario.create({
    data: {
      nome: nomeLower,
      email: emailLower, // email sempre em minúsculas
      senha: senhaHash,
      role: Role.COMUM, // força a role para comum, independentemente da entrada
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { senha, ...usuarioSemSenha } = novoUsuario;
  return usuarioSemSenha;
};