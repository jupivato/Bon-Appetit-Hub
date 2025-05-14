import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import argon2 from 'argon2';
import * as authRepository from '../repositories/auth.repository';
// role não é mais necessário para a validação de 'role' no registo, mas pode ser usado no tokenpayload
import { Role } from '../../generated/prisma/client';

// configuração segura das variáveis jwt
const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_key_deve_ser_longa_e_segura';

let expiresInOption: string | number = '1h'; // fallback padrão
if (process.env.JWT_EXPIRES_IN) {
    const envValue = process.env.JWT_EXPIRES_IN;
    if (/^\d+$/.test(envValue)) { // verifica se é uma string contendo apenas dígitos
        expiresInOption = parseInt(envValue, 10);
    } else {
        expiresInOption = envValue; // assume que é uma string de tempo válida (ex: "1h")
    }
}
// console.log(`[AUTH] Configuração JWT: Usando expiresIn: ${expiresInOption}`);
// console.log(`[AUTH] JWT_SECRET sendo usado (parcialmente): ${JWT_SECRET ? JWT_SECRET.substring(0, 5) + '...' : 'NÃO DEFINIDO'}`);


// controladores

// lida com a requisição de login do utilizador.
export const loginController = async (req: Request, res: Response): Promise<void> => {
    const { email, senha } = req.body; // para login, o frontend envia 'senha'

    if (!email || !senha) {
        res.status(400).json({ message: 'email e senha são obrigatórios.' });
        return;
    }

    try {
        const usuario = await authRepository.findUsuarioByEmailRepository(email);
        if (!usuario) {
            res.status(401).json({ message: 'email ou senha inválidos.' });
            return;
        }

        const senhaValida = await argon2.verify(usuario.senha, senha); // aqui 'senha' é a senha plana do req.body
        if (!senhaValida) {
            res.status(401).json({ message: 'email ou senha inválidos.' });
            return;
        }

        const tokenPayload = {
            id: usuario.id,
            email: usuario.email,
            role: usuario.role,
        };

        const token = jwt.sign(
            tokenPayload,
            JWT_SECRET,
            { expiresIn: expiresInOption}
        );

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { senha: _, ...usuarioSemSenha } = usuario;

        res.status(200).json({
            success: true,
            message: 'login realizado com sucesso!',
            token: token,
            usuario: usuarioSemSenha,
        });
        return;

    } catch (error) {
        console.error("erro inesperado no loginController:", error);
        res.status(500).json({ message: 'erro interno do servidor ao tentar fazer login.' });
        return;
    }
};

/* lida com o registo de novo utilizador, atribuindo role 'comum' por padrão.
o campo 'role' do corpo da requisição é ignorado. */
export const registrarController = async (req: Request, res: Response): Promise<void> => {
    // assumindo que o frontend envia um campo chamado 'senha' para o registo:
    const { nome, email, senha: senhaPlanaDoRequest } = req.body; // pega 'senha' do request e chama de 'senhaPlanaDoRequest'

    if (!nome || !email || !senhaPlanaDoRequest) { // verifica a variável correta
        res.status(400).json({ message: 'nome, email e senha são obrigatórios para registo.' });
        return;
    }

    try {
        const emailExistente = await authRepository.findUsuarioByEmailRepository(email);
        if (emailExistente) {
            res.status(409).json({ message: 'este email já está cadastrado.' });
            return;
        }

        const novoUsuario = await authRepository.createUsuarioRepository({
            nome,
            email,
            senhaPlana: senhaPlanaDoRequest, // passa a senha recebida para o campo 'senhaPlana' do repositório
        });

        res.status(201).json({
            success: true,
            message: 'utilizador registado com sucesso!',
            data: novoUsuario,
        });
        return;

    } catch (error: any) {
        console.error("erro inesperado no registrarController:", error);
        if (error.message?.includes("já existe") || error.message?.includes("já está cadastrado")) {
            res.status(409).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'erro interno do servidor ao tentar registar utilizador.' });
        }
        return;
    }
};