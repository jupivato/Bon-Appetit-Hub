import { PrismaClient, Role, DificuldadeReceita } from '../generated/prisma/client';
import argon2 from 'argon2';

const prisma = new PrismaClient();

// função utilitária para converter para lowercase e remover espaços
const toLower = (str: string | null | undefined): string | null | undefined => {
  return str ? str.toLowerCase().trim() : str;
};

async function main() {
  console.log(`iniciando o processo de seed...`);

  console.log('limpando dados existentes (se houver)...');
  // a ordem de deleção é importante por causa das chaves estrangeiras
  await prisma.itemListaCompras.deleteMany({});
  await prisma.listaCompras.deleteMany({});
  await prisma.itemReceitaIngrediente.deleteMany({});
  await prisma.receitaFavorita.deleteMany({});
  await prisma.comentario.deleteMany({});
  await prisma.receitaEtiqueta.deleteMany({});
  await prisma.receita.deleteMany({});
  await prisma.etiqueta.deleteMany({});
  await prisma.categoria.deleteMany({});
  await prisma.ingrediente.deleteMany({});
  await prisma.usuario.deleteMany({});
  console.log('dados existentes limpos.');

  // definição e hashing de senhas
  const senhaAdminPlana = "senha_admin_segura_123";
  const senhaJuliaPlana = "senha_julia_segura_456";

  console.log('gerando hashes de senha...');
  const hashSenhaAdmin = await argon2.hash(senhaAdminPlana);
  const hashSenhaJulia = await argon2.hash(senhaJuliaPlana);
  console.log('hashes de senha gerados.');

  // criar usuários
  const usuarioAdmin = await prisma.usuario.create({
    data: {
      nome: toLower("Chef Admin")!,
      email: toLower("admin@bonappetithub.com")!,
      senha: hashSenhaAdmin,
      role: Role.ADMINISTRADOR, // usa o enum Role
    },
  });
  console.log(`criado usuário admin: ${usuarioAdmin.nome} (ID: ${usuarioAdmin.id})`);

  const usuarioComumJulia = await prisma.usuario.create({
    data: {
      nome: toLower("Julia Pivato Cozinheira")!,
      email: toLower("julia.pivato@bonappetithub.com")!,
      senha: hashSenhaJulia,
      role: Role.COMUM, // usa o enum Role
    },
  });
  console.log(`criado usuário comum: ${usuarioComumJulia.nome} (ID: ${usuarioComumJulia.id})`);

  // criar lista de compras para julia
  const listaComprasJulia = await prisma.listaCompras.create({
    data: {
      usuarioId: usuarioComumJulia.id,
    },
  });
  console.log(`criada lista de compras para ${usuarioComumJulia.nome} (ID: ${listaComprasJulia.id})`);

  // criar categorias
  const categoriaSobremesa = await prisma.categoria.create({
    data: { nome: toLower("Sobremesa")! },
  });
  const categoriaPratoPrincipal = await prisma.categoria.create({
    data: { nome: toLower("Prato Principal")! },
  });
  const categoriaSalada = await prisma.categoria.create({
    data: { nome: toLower("Salada")! },
  });
  console.log(`criada categoria: ${categoriaSobremesa.nome}, ${categoriaPratoPrincipal.nome}, ${categoriaSalada.nome}`);

  // criar etiquetas
  const etiquetaFacil = await prisma.etiqueta.create({ data: { nome: toLower("Fácil de Fazer")! } });
  const etiquetaVegano = await prisma.etiqueta.create({ data: { nome: toLower("Vegano")! } });
  const etiquetaRapido = await prisma.etiqueta.create({ data: { nome: toLower("Rápido")! } });
  console.log(`criadas etiquetas: ${etiquetaFacil.nome}, ${etiquetaVegano.nome}, ${etiquetaRapido.nome}`);

  // criar ingredientes
  const ingChocolatePo = await prisma.ingrediente.create({ data: { nome: toLower("Chocolate em Pó 70%")!, categoriaIngrediente: toLower("Confeitaria") }});
  const ingFarinhaTrigo = await prisma.ingrediente.create({ data: { nome: toLower("Farinha de Trigo")!, categoriaIngrediente: toLower("Grãos e Farináceos") }});
  const ingOvo = await prisma.ingrediente.create({ data: { nome: toLower("Ovo de Galinha")!, categoriaIngrediente: toLower("Proteína Animal") }});
  const ingLeite = await prisma.ingrediente.create({ data: { nome: toLower("Leite Integral")!, categoriaIngrediente: toLower("Laticínios") }});
  const ingAcucar = await prisma.ingrediente.create({ data: { nome: toLower("Açúcar Refinado")!, categoriaIngrediente: toLower("Adoçantes") }});
  const ingAlface = await prisma.ingrediente.create({ data: { nome: toLower("Alface Crespa")!, categoriaIngrediente: toLower("Verdura") }});
  const ingTomate = await prisma.ingrediente.create({ data: { nome: toLower("Tomate Italiano")!, categoriaIngrediente: toLower("Fruta/Legume") }});
  const ingCenoura = await prisma.ingrediente.create({ data: { nome: toLower("Cenoura")!, categoriaIngrediente: toLower("Legume") }});
  const ingOleo = await prisma.ingrediente.create({ data: { nome: toLower("Óleo de Soja")!, categoriaIngrediente: toLower("Óleos e Gorduras") }});
  const ingFermento = await prisma.ingrediente.create({ data: { nome: toLower("Fermento em Pó Químico")!, categoriaIngrediente: toLower("Confeitaria") }});


  console.log(`criados ingredientes: ${ingChocolatePo.nome}, ${ingFarinhaTrigo.nome}, etc.`);

  // adicionar itens na lista de compras de julia
  await prisma.itemListaCompras.create({
    data: {
      listaComprasId: listaComprasJulia.id,
      ingredienteId: ingChocolatePo.id,
    },
  });
  
  await prisma.itemListaCompras.create({
    data: {
      listaComprasId: listaComprasJulia.id,
      ingredienteId: ingFarinhaTrigo.id,
    },
  });
  console.log(`adicionados itens à lista de compras de ${usuarioComumJulia.nome}`);

  // criar receita: bolo de chocolate
  const receitaBoloChocolate = await prisma.receita.create({
    data: {
      titulo: toLower("Bolo de Chocolate Fofinho da Vovó")!,
      descricao: toLower("Um clássico bolo de chocolate caseiro, simples, fofinho e delicioso, perfeito para o café da tarde ou qualquer ocasião especial.")!,
      tempoPreparo: toLower("1 hora e 15 minutos")!,
      dificuldade: DificuldadeReceita.FACIL, // usa o enum
      rendimento: 10,
      autorId: usuarioComumJulia.id,
      categoriaId: categoriaSobremesa.id,
      imagemUrl: "https://placehold.co/600x400/a98a6e/ffffff?text=Bolo+de+Chocolate",
      etiquetas: {
        create: [
          { etiquetaId: etiquetaFacil.id },
        ],
      },
      ingredientes: {
        create: [
          { ingredienteId: ingFarinhaTrigo.id, quantidade: 2, unidade: toLower("xícaras")! },
          { ingredienteId: ingOvo.id, quantidade: 3, unidade: toLower("unidades")! },
          { ingredienteId: ingChocolatePo.id, quantidade: 1, unidade: toLower("xícara")! },
          { ingredienteId: ingLeite.id, quantidade: 1, unidade: toLower("xícara")! },
          { ingredienteId: ingAcucar.id, quantidade: 1.5, unidade: toLower("xícaras")! },
          { ingredienteId: ingOleo.id, quantidade: 0.5, unidade: toLower("xícara")! },
          { ingredienteId: ingFermento.id, quantidade: 1, unidade: toLower("colher de sopa")! },
        ],
      },
    },
  });
  console.log(`receita criada: "${receitaBoloChocolate.titulo}" por ${usuarioComumJulia.nome}`);

  // criar comentário para o bolo de chocolate
  await prisma.comentario.create({
    data: {
      texto: toLower("Que receita maravilhosa! Fiz no final de semana e toda a família amou. Super fofinho!")!,
      autorId: usuarioComumJulia.id,
      receitaId: receitaBoloChocolate.id,
    },
  });
  console.log(`criado comentário para a receita "${receitaBoloChocolate.titulo}"`);

  // julia favoritando o bolo de chocolate
  await prisma.receitaFavorita.create({
    data: {
      usuarioId: usuarioComumJulia.id,
      receitaId: receitaBoloChocolate.id,
    },
  });
  console.log(`${usuarioComumJulia.nome} favoritou a receita "${receitaBoloChocolate.titulo}"`);

  // criar receita: salada simples (exemplo adicional)
  const receitaSalada = await prisma.receita.create({
    data: {
      titulo: toLower("Salada Refrescante de Verão")!,
      descricao: toLower("Uma salada leve, colorida e muito fácil de preparar.")!,
      tempoPreparo: toLower("15 minutos")!,
      dificuldade: DificuldadeReceita.FACIL, // usa o enum
      rendimento: 2,
      autorId: usuarioComumJulia.id,
      categoriaId: categoriaSalada.id,
      imagemUrl: "https://placehold.co/600x400/90ee90/ffffff?text=Salada+Refrescante",
      etiquetas: {
        create: [
          { etiquetaId: etiquetaFacil.id },
          { etiquetaId: etiquetaRapido.id },
        ],
      },
      ingredientes: {
        create: [
          { ingredienteId: ingAlface.id, quantidade: 1, unidade: toLower("maço")! },
          { ingredienteId: ingTomate.id, quantidade: 2, unidade: toLower("unidades")! },
          { ingredienteId: ingCenoura.id, quantidade: 1, unidade: toLower("unidade média ralada")! },
        ],
      },
    },
  });
  console.log(`criada receita: "${receitaSalada.titulo}" por ${usuarioComumJulia.nome}`);

  console.log(`seed finalizado com sucesso!`);
}

main()
  .catch(async (e) => {
    console.error("erro durante o processo de seed:", e);
    await prisma.$disconnect();
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });