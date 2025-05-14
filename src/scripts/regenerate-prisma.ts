import { exec } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util';

const execAsync = promisify(exec);
const rimrafAsync = promisify(fs.rm);

async function regeneratePrisma() {
  try {
    // caminho para o diretório de saída do cliente prisma
    const prismaClientPath = path.resolve(__dirname, '../../generated/prisma/client');

    console.log('Removendo diretório do cliente Prisma gerado...');
    await rimrafAsync(prismaClientPath, { recursive: true, force: true }).catch(() => {
      console.log('Diretório não existe ou não pôde ser removido. Continuando...');
    });

    console.log('Gerando novo cliente Prisma...');
    await execAsync('npx prisma generate');

    console.log('Cliente Prisma regenerado com sucesso!');
  } catch (error) {
    console.error('Erro ao regenerar o cliente Prisma:', error);
    process.exit(1);
  }
}

regeneratePrisma();