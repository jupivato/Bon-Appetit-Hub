// src/test-domain.ts
import {
  // Removi Usuario da importação direta pois usaremos Administrador e Comum
  Administrador,
  Comum,
  Ingrediente,
  Categoria,
  Etiqueta,
  Comentario,
  Receita,
  ItemListaIngredientes,
  ItemListaCompra
} from './entities'; // Ajustado o caminho para o módulo entities

console.log("--- Testando Classes de Domínio BonAppetitHub ---");

// Criando Usuários
const adminUser = new Administrador(1, "Admin Chef", "admin@bonappetit.com", "senhaAdmin");
const commonUser1 = new Comum(2, "Julia Cozinheira", "julia@email.com", "senha123");
const commonUser2 = new Comum(3, "Marcos Gourmet", "marcos@email.com", "senha456");

console.log("\n--- Usuários Criados ---");
// Linha 13 (aproximadamente, após os console.logs)
console.log(adminUser.obterPerfil());
console.log(commonUser1.obterPerfil());
adminUser.excluirUsuario(3);

// Criando Ingredientes
const farinha = new Ingrediente(101, "Farinha de Trigo", undefined, "Grãos e Cereais");
const ovo = new Ingrediente(102, "Ovo", undefined, "Proteínas");
const chocolate = new Ingrediente(103, "Chocolate em Pó", undefined, "Doces");
const leite = new Ingrediente(104, "Leite Integral", undefined, "Laticínios");

console.log("\n--- Ingredientes Criados ---");
console.log(farinha);

// Criando Categoria e Etiquetas
const categoriaSobremesa = new Categoria(201, "Sobremesa");
const etiquetaChocolate = new Etiqueta(301, "Amantes de Chocolate");
const etiquetaFacil = new Etiqueta(302, "Fácil de Fazer");

console.log("\n--- Categoria e Etiquetas Criadas ---");
console.log(categoriaSobremesa);
console.log(etiquetaChocolate);

// Criando uma Receita
const boloDeChocolate = new Receita(
  401,
  "Bolo de Chocolate Fofinho",
  "Um bolo de chocolate simples e delicioso, perfeito para o café da tarde.",
  "1 hora",
  "Fácil",
  8,
  commonUser1, // Autor da receita (deve ser um objeto Comum)
  categoriaSobremesa, // Categoria da receita (opcional no construtor, mas passando aqui)
  "url_da_imagem_do_bolo.jpg" // imagemUrl opcional
);

console.log("\n--- Receita Criada ---");
console.log(`Receita: ${boloDeChocolate.titulo}, Autor: ${boloDeChocolate.autor.nome}`);

// Adicionando Ingredientes à Receita
boloDeChocolate.adicionarIngrediente(new ItemListaIngredientes(farinha, 2, "xícaras"));
boloDeChocolate.adicionarIngrediente(new ItemListaIngredientes(ovo, 3, "unidades"));
boloDeChocolate.adicionarIngrediente(new ItemListaIngredientes(chocolate, 1, "xícara"));
boloDeChocolate.adicionarIngrediente(new ItemListaIngredientes(leite, 1, "xícara"));

console.log("\n--- Ingredientes da Receita ---");
boloDeChocolate.ingredientes.forEach(item => {
  console.log(`- ${item.ingrediente.nome}: ${item.quantidade} ${item.unidade}`);
});

// Adicionando Etiquetas à Receita
// Linha 67
boloDeChocolate.adicionarEtiqueta(etiquetaChocolate);
boloDeChocolate.adicionarEtiqueta(etiquetaFacil);

console.log("\n--- Etiquetas da Receita ---");
// Linha 76
console.log(`Receita "${boloDeChocolate.titulo}" pertence à categoria "${boloDeChocolate.categoria?.nome}" e tem as etiquetas: ${boloDeChocolate.etiquetas.map(e => e.nome).join(', ')}`);

// Usuário Comum Interagindo
commonUser1.cadastrarReceita(boloDeChocolate); // Método de Comum
commonUser1.favoritarReceita(boloDeChocolate); // Método de Comum

const comentario1 = new Comentario(501, "Amei essa receita! Ficou muito bom!", commonUser2, boloDeChocolate.id);
// Linha 87
commonUser2.comentarReceita(boloDeChocolate, comentario1); // Método de Comum

console.log("\n--- Comentários na Receita ---");
boloDeChocolate.comentarios.forEach(com => {
  console.log(`- "${com.texto}" (Autor: ${com.autor.nome}, Data: ${com.data.toLocaleDateString()})`);
});

// Lista de Compras
const itemCompraChocolate = new ItemListaCompra(chocolate, 2, "pacotes");
// Linha 94
commonUser1.adicionarItemListaCompras(itemCompraChocolate);

console.log("\n--- Lista de Compras de Julia ---");
commonUser1.listaDeCompras.forEach(item => {
  console.log(`- ${item.ingrediente.nome}: ${item.quantidade} ${item.unidade} (Comprado: ${item.comprado})`);
});

// Testando definir categoria após criação (se não passada no construtor)
const tortaDeLimao = new Receita(
  402,
  "Torta de Limão Clássica",
  "Uma torta de limão refrescante e fácil de fazer.",
  "45 minutos",
  "Médio",
  10,
  commonUser2
  // Não passando categoria no construtor aqui
);
tortaDeLimao.definirCategoria(categoriaSobremesa); // Usando o método para definir
console.log(`\nReceita "${tortaDeLimao.titulo}" agora pertence à categoria "${tortaDeLimao.categoria?.nome}"`);
console.log(`Categoria "${categoriaSobremesa.nome}" agora tem as receitas: ${categoriaSobremesa.receitas.map(r => r.titulo).join(', ')}`);


console.log("\n--- Testes Concluídos ---");