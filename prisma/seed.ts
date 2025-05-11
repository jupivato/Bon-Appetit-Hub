import { PrismaClient } from '../generated/prisma/client'; // Ajuste fino no caminho

// import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  console.log(`Iniciando o processo de seed...`);

  console.log('Limpando dados existentes (se houver)...');
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
  console.log('Dados existentes limpos.');


  // --- Criar Usuários ---
  const usuarioAdmin = await prisma.usuario.create({
    data: {
      nome: "Chef Admin",
      email: "admin@bonappetithub.com",
      senha: "admin_hashed_password", // Lembre-se de usar hash de senhas em produção!
      role: "ADMINISTRADOR",
    },
  });
  console.log(`Criado usuário admin: ${usuarioAdmin.nome} (ID: ${usuarioAdmin.id})`);

  const usuarioComumJulia = await prisma.usuario.create({
    data: {
      nome: "Julia Pivato Cozinheira",
      email: "julia.pivato@bonappetithub.com",
      senha: "julia_hashed_password", // Lembre-se de usar hash!
      role: "COMUM",
    },
  });
  console.log(`Criado usuário comum: ${usuarioComumJulia.nome} (ID: ${usuarioComumJulia.id})`);

  // --- Criar Lista de Compras para Julia ---
  const listaComprasJulia = await prisma.listaCompras.create({
    data: {
      usuarioId: usuarioComumJulia.id,
    },
  });
  console.log(`Criada lista de compras para ${usuarioComumJulia.nome} (ID: ${listaComprasJulia.id})`);

  // --- Criar Categorias ---
  const categoriaSobremesa = await prisma.categoria.create({
    data: { nome: "Sobremesa" },
  });
  const categoriaPratoPrincipal = await prisma.categoria.create({
    data: { nome: "Prato Principal" },
  });
  const categoriaSalada = await prisma.categoria.create({
    data: { nome: "Salada" },
  });
  console.log(`Criada categoria: ${categoriaSobremesa.nome}, ${categoriaPratoPrincipal.nome}, ${categoriaSalada.nome}`);

  // --- Criar Etiquetas ---
  const etiquetaChocolate = await prisma.etiqueta.create({ data: { nome: "Chocolate" } });
  const etiquetaFacil = await prisma.etiqueta.create({ data: { nome: "Fácil de Fazer" } });
  const etiquetaVegano = await prisma.etiqueta.create({ data: { nome: "Vegano" } });
  const etiquetaRapido = await prisma.etiqueta.create({ data: { nome: "Rápido" } });
  console.log(`Criadas etiquetas: ${etiquetaChocolate.nome}, ${etiquetaFacil.nome}, ${etiquetaVegano.nome}, ${etiquetaRapido.nome}`);

  // --- Criar Ingredientes ---
  const ingChocolatePo = await prisma.ingrediente.create({ data: { nome: "Chocolate em Pó 70%", categoriaIngrediente: "Confeitaria" }});
  const ingFarinhaTrigo = await prisma.ingrediente.create({ data: { nome: "Farinha de Trigo", categoriaIngrediente: "Grãos e Farináceos" }});
  const ingOvo = await prisma.ingrediente.create({ data: { nome: "Ovo de Galinha", categoriaIngrediente: "Proteína Animal" }});
  const ingLeite = await prisma.ingrediente.create({ data: { nome: "Leite Integral", categoriaIngrediente: "Laticínios" }});
  const ingAcucar = await prisma.ingrediente.create({ data: { nome: "Açúcar Refinado", categoriaIngrediente: "Adoçantes" }});
  const ingAlface = await prisma.ingrediente.create({ data: { nome: "Alface Crespa", categoriaIngrediente: "Verdura" }});
  const ingTomate = await prisma.ingrediente.create({ data: { nome: "Tomate Italiano", categoriaIngrediente: "Fruta/Legume" }});

  console.log(`Criados ingredientes: ${ingChocolatePo.nome}, ${ingFarinhaTrigo.nome}, etc.`);

  // --- Adicionar Itens na Lista de Compras de Julia ---
  await prisma.itemListaCompras.create({
    data: {
      quantidade: 200,
      unidade: "gramas",
      ingredienteId: ingChocolatePo.id,
      listaComprasId: listaComprasJulia.id,
      comprado: false,
    },
  });
  await prisma.itemListaCompras.create({
    data: {
      quantidade: 1,
      unidade: "kg",
      ingredienteId: ingFarinhaTrigo.id,
      listaComprasId: listaComprasJulia.id,
      comprado: true,
    },
  });
  console.log(`Adicionados itens à lista de compras de ${usuarioComumJulia.nome}`);

  // --- Criar Receita: Bolo de Chocolate ---
  const receitaBoloChocolate = await prisma.receita.create({
    data: {
      titulo: "Bolo de Chocolate Fofinho da Vovó",
      descricao: "Um clássico bolo de chocolate caseiro, simples, fofinho e delicioso, perfeito para o café da tarde ou qualquer ocasião especial.",
      tempoPreparo: "1 hora e 15 minutos",
      dificuldade: "FACIL",
      rendimento: 10, // porções
      autorId: usuarioComumJulia.id,
      categoriaId: categoriaSobremesa.id,
      imagemUrl: "https://exemplo.com/imagem_bolo_chocolate.jpg",
      etiquetas: { // conectando a etiquetas existentes através da tabela de junção
        create: [
          { etiquetaId: etiquetaChocolate.id }, 
          { etiquetaId: etiquetaFacil.id },
        ],
      },
      ingredientes: { // Criando os itens da receita
        create: [
          { ingredienteId: ingFarinhaTrigo.id, quantidade: 2, unidade: "xícaras" },
          { ingredienteId: ingOvo.id, quantidade: 3, unidade: "unidades" },
          { ingredienteId: ingChocolatePo.id, quantidade: 1, unidade: "xícara" },
          { ingredienteId: ingLeite.id, quantidade: 1, unidade: "xícara" },
          { ingredienteId: ingAcucar.id, quantidade: 1.5, unidade: "xícaras" },
        ],
      },
    },
  });
  console.log(`Criada receita: "${receitaBoloChocolate.titulo}" por ${usuarioComumJulia.nome}`);

  // --- Criar Comentário para o Bolo de Chocolate ---
  await prisma.comentario.create({
    data: {
      texto: "Que receita maravilhosa! Fiz no final de semana e toda a família amou. Super fofinho!",
      autorId: usuarioComumJulia.id, // Julia comentando
      receitaId: receitaBoloChocolate.id,
    },
  });
  console.log(`Criado comentário para a receita "${receitaBoloChocolate.titulo}"`);

  // --- Julia Favoritando o Bolo de Chocolate ---
  await prisma.receitaFavorita.create({
    data: {
      usuarioId: usuarioComumJulia.id,
      receitaId: receitaBoloChocolate.id,
    },
  });
  console.log(`${usuarioComumJulia.nome} favoritou a receita "${receitaBoloChocolate.titulo}"`);

  // --- Criar Receita: Salada Simples (exemplo adicional) ---
  const receitaSalada = await prisma.receita.create({
    data: {
      titulo: "Salada Refrescante de Verão",
      descricao: "Uma salada leve, colorida e muito fácil de preparar.",
      tempoPreparo: "15 minutos",
      dificuldade: "FACIL",
      rendimento: 2,
      autorId: usuarioComumJulia.id,
      categoriaId: categoriaSalada.id,
      etiquetas: {
        create: [
          { etiquetaId: etiquetaFacil.id },
          { etiquetaId: etiquetaRapido.id },
        ],
      },
      ingredientes: {
        create: [
          { ingredienteId: ingAlface.id, quantidade: 1, unidade: "pé" },
          { ingredienteId: ingTomate.id, quantidade: 2, unidade: "unidades" },
        ],
      },
    },
  });
  console.log(`Criada receita: "${receitaSalada.titulo}" por ${usuarioComumJulia.nome}`);


  console.log(`Seed finalizado com sucesso!`);
}

main()
  .catch(async (e) => {
    console.error("Erro durante o processo de seed:", e);
    await prisma.$disconnect(); 
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect(); 
  });