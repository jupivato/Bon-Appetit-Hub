export class Usuario {
  public id: number;
  public nome: string;
  public email: string;
  protected senha?: string; // protected para ser acessível nas subclasses

  constructor(id: number, nome: string, email: string, senha?: string) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    if (senha) this.senha = senha;
  }

  public obterPerfil(): { nome: string; email: string } {
    return { nome: this.nome, email: this.email };
  }
}

export class Administrador extends Usuario {
  constructor(id: number, nome: string, email: string, senha?: string) {
    super(id, nome, email, senha);
  }

  public excluirReceita(receitaId: number): void {
    console.log(`Administrador ${this.nome} excluiu a receita ID: ${receitaId}. (Lógica a ser implementada)`);
  }

  public excluirUsuario(usuarioId: number): void {
    console.log(`Administrador ${this.nome} excluiu o usuário ID: ${usuarioId}. (Lógica a ser implementada)`);
  }
}

export class Comum extends Usuario {
  public receitasFavoritas: Receita[];
  public listaDeCompras: ItemListaCompra[];

  constructor(id: number, nome: string, email: string, senha?: string) {
    super(id, nome, email, senha);
    this.receitasFavoritas = [];
    this.listaDeCompras = [];
  }

  public cadastrarReceita(receita: Receita): void {
    console.log(`Usuário ${this.nome} cadastrou a receita: ${receita.titulo}. (Lógica a ser implementada)`);
  }

  public favoritarReceita(receita: Receita): void {
    if (!this.receitasFavoritas.find(r => r.id === receita.id)) {
      this.receitasFavoritas.push(receita);
      console.log(`Receita "${receita.titulo}" favoritada por ${this.nome}.`);
    } else {
      console.log(`Receita "${receita.titulo}" já está nos favoritos de ${this.nome}.`);
    }
  }

  public adicionarItemListaCompras(item: ItemListaCompra): void {
    this.listaDeCompras.push(item);
    console.log(`Item "${item.ingrediente.nome}" adicionado à lista de compras de ${this.nome}.`);
  }

  public comentarReceita(receita: Receita, comentario: Comentario): void {
    receita.adicionarComentario(comentario); // delega à receita a adição do comentário
    console.log(`Usuário ${this.nome} comentou na receita "${receita.titulo}".`);
  }
}

export class Ingrediente {
  constructor(
    public id: number,
    public nome: string,
    public imagemUrl?: string,
    public categoriaIngrediente?: string // categoria específica do ingrediente, ex: "Laticínio", "Fruta"
  ) {}
}

export class Categoria { // categoria da Receita, ex: "Sobremesa", "Prato Principal"
  constructor(
    public id: number,
    public nome: string,
    public receitas: Receita[] = []
  ) {}

  public adicionarReceita(receita: Receita): void {
    this.receitas.push(receita);
  }
}

export class Etiqueta { // tags como "Vegano", "Sem Glúten"
  constructor(
    public id: number,
    public nome: string,
    public receitas: Receita[] = []
  ) {}

  public adicionarReceita(receita: Receita): void {
    this.receitas.push(receita);
  }
}

export class Comentario {
  public id: number;
  public texto: string;
  public data: Date;
  public autor: Comum; // o usuário que fez o comentário
  public receitaId: number; // ID da receita comentada

  constructor(id: number, texto: string, autor: Comum, receitaId: number) {
    this.id = id;
    this.texto = texto;
    this.autor = autor;
    this.data = new Date();
    this.receitaId = receitaId;
  }
}

export class Receita {
  public id: number;
  public titulo: string;
  public descricao: string;
  public tempoPreparo: string; // ex: "30 minutos"
  public dificuldade: 'Fácil' | 'Médio' | 'Difícil';
  public rendimento: number; // numero de porções
  public autor: Comum;
  public ingredientes: ItemListaIngredientes[]; // Ingredientes específicos desta receita
  public comentarios: Comentario[];
  public etiquetas: Etiqueta[];
  public categoria?: Categoria; // uma receita pertence a uma categoria
  public imagemUrl?: string;

  constructor(
    id: number,
    titulo: string,
    descricao: string,
    tempoPreparo: string,
    dificuldade: 'Fácil' | 'Médio' | 'Difícil',
    rendimento: number,
    autor: Comum,
    categoria?: Categoria,
    imagemUrl?: string
  ) {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.tempoPreparo = tempoPreparo;
    this.dificuldade = dificuldade;
    this.rendimento = rendimento;
    this.autor = autor;
    this.ingredientes = [];
    this.comentarios = [];
    this.etiquetas = [];
    if (categoria) this.categoria = categoria;
    if (imagemUrl) this.imagemUrl = imagemUrl;
  }

  public adicionarIngrediente(item: ItemListaIngredientes): void {
    this.ingredientes.push(item);
  }

  public adicionarComentario(comentario: Comentario): void {
    this.comentarios.push(comentario);
  }

  public adicionarEtiqueta(etiqueta: Etiqueta): void {
    if (!this.etiquetas.find(e => e.id === etiqueta.id)) {
      this.etiquetas.push(etiqueta);
      etiqueta.adicionarReceita(this); // mantém a relação bidirecional
    }
  }

  public definirCategoria(categoria: Categoria): void {
    this.categoria = categoria;
    categoria.adicionarReceita(this); // mantém a relação bidirecional
  }
}

export class ItemListaIngredientes { // representa um ingrediente DENTRO de uma receita
  constructor(
    public ingrediente: Ingrediente,
    public quantidade: number,
    public unidade: string // Ex: "g", "ml", "xícara", "unidade"
  ) {}
}

export class ItemListaCompra {
  constructor(
    public ingrediente: Ingrediente,
    public quantidade: number,
    public unidade: string,
    public comprado: boolean = false
  ) {}
}