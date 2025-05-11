
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Etiqueta
 * 
 */
export type Etiqueta = $Result.DefaultSelection<Prisma.$EtiquetaPayload>
/**
 * Model Ingrediente
 * 
 */
export type Ingrediente = $Result.DefaultSelection<Prisma.$IngredientePayload>
/**
 * Model Receita
 * 
 */
export type Receita = $Result.DefaultSelection<Prisma.$ReceitaPayload>
/**
 * Model ReceitaEtiqueta
 * 
 */
export type ReceitaEtiqueta = $Result.DefaultSelection<Prisma.$ReceitaEtiquetaPayload>
/**
 * Model Comentario
 * 
 */
export type Comentario = $Result.DefaultSelection<Prisma.$ComentarioPayload>
/**
 * Model ReceitaFavorita
 * 
 */
export type ReceitaFavorita = $Result.DefaultSelection<Prisma.$ReceitaFavoritaPayload>
/**
 * Model ItemReceitaIngrediente
 * 
 */
export type ItemReceitaIngrediente = $Result.DefaultSelection<Prisma.$ItemReceitaIngredientePayload>
/**
 * Model ListaCompras
 * 
 */
export type ListaCompras = $Result.DefaultSelection<Prisma.$ListaComprasPayload>
/**
 * Model ItemListaCompras
 * 
 */
export type ItemListaCompras = $Result.DefaultSelection<Prisma.$ItemListaComprasPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  COMUM: 'COMUM',
  ADMINISTRADOR: 'ADMINISTRADOR'
};

export type Role = (typeof Role)[keyof typeof Role]


export const DificuldadeReceita: {
  FACIL: 'FACIL',
  MEDIO: 'MEDIO',
  DIFICIL: 'DIFICIL'
};

export type DificuldadeReceita = (typeof DificuldadeReceita)[keyof typeof DificuldadeReceita]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type DificuldadeReceita = $Enums.DificuldadeReceita

export const DificuldadeReceita: typeof $Enums.DificuldadeReceita

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.etiqueta`: Exposes CRUD operations for the **Etiqueta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Etiquetas
    * const etiquetas = await prisma.etiqueta.findMany()
    * ```
    */
  get etiqueta(): Prisma.EtiquetaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingrediente`: Exposes CRUD operations for the **Ingrediente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredientes
    * const ingredientes = await prisma.ingrediente.findMany()
    * ```
    */
  get ingrediente(): Prisma.IngredienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receita`: Exposes CRUD operations for the **Receita** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Receitas
    * const receitas = await prisma.receita.findMany()
    * ```
    */
  get receita(): Prisma.ReceitaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receitaEtiqueta`: Exposes CRUD operations for the **ReceitaEtiqueta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReceitaEtiquetas
    * const receitaEtiquetas = await prisma.receitaEtiqueta.findMany()
    * ```
    */
  get receitaEtiqueta(): Prisma.ReceitaEtiquetaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comentario`: Exposes CRUD operations for the **Comentario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comentarios
    * const comentarios = await prisma.comentario.findMany()
    * ```
    */
  get comentario(): Prisma.ComentarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receitaFavorita`: Exposes CRUD operations for the **ReceitaFavorita** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReceitaFavoritas
    * const receitaFavoritas = await prisma.receitaFavorita.findMany()
    * ```
    */
  get receitaFavorita(): Prisma.ReceitaFavoritaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemReceitaIngrediente`: Exposes CRUD operations for the **ItemReceitaIngrediente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemReceitaIngredientes
    * const itemReceitaIngredientes = await prisma.itemReceitaIngrediente.findMany()
    * ```
    */
  get itemReceitaIngrediente(): Prisma.ItemReceitaIngredienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listaCompras`: Exposes CRUD operations for the **ListaCompras** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ListaCompras
    * const listaCompras = await prisma.listaCompras.findMany()
    * ```
    */
  get listaCompras(): Prisma.ListaComprasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemListaCompras`: Exposes CRUD operations for the **ItemListaCompras** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemListaCompras
    * const itemListaCompras = await prisma.itemListaCompras.findMany()
    * ```
    */
  get itemListaCompras(): Prisma.ItemListaComprasDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Categoria: 'Categoria',
    Etiqueta: 'Etiqueta',
    Ingrediente: 'Ingrediente',
    Receita: 'Receita',
    ReceitaEtiqueta: 'ReceitaEtiqueta',
    Comentario: 'Comentario',
    ReceitaFavorita: 'ReceitaFavorita',
    ItemReceitaIngrediente: 'ItemReceitaIngrediente',
    ListaCompras: 'ListaCompras',
    ItemListaCompras: 'ItemListaCompras'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "categoria" | "etiqueta" | "ingrediente" | "receita" | "receitaEtiqueta" | "comentario" | "receitaFavorita" | "itemReceitaIngrediente" | "listaCompras" | "itemListaCompras"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Etiqueta: {
        payload: Prisma.$EtiquetaPayload<ExtArgs>
        fields: Prisma.EtiquetaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EtiquetaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EtiquetaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>
          }
          findFirst: {
            args: Prisma.EtiquetaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EtiquetaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>
          }
          findMany: {
            args: Prisma.EtiquetaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>[]
          }
          create: {
            args: Prisma.EtiquetaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>
          }
          createMany: {
            args: Prisma.EtiquetaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EtiquetaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>[]
          }
          delete: {
            args: Prisma.EtiquetaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>
          }
          update: {
            args: Prisma.EtiquetaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>
          }
          deleteMany: {
            args: Prisma.EtiquetaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EtiquetaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EtiquetaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>[]
          }
          upsert: {
            args: Prisma.EtiquetaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>
          }
          aggregate: {
            args: Prisma.EtiquetaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEtiqueta>
          }
          groupBy: {
            args: Prisma.EtiquetaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EtiquetaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EtiquetaCountArgs<ExtArgs>
            result: $Utils.Optional<EtiquetaCountAggregateOutputType> | number
          }
        }
      }
      Ingrediente: {
        payload: Prisma.$IngredientePayload<ExtArgs>
        fields: Prisma.IngredienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngredienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngredienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload>
          }
          findFirst: {
            args: Prisma.IngredienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngredienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload>
          }
          findMany: {
            args: Prisma.IngredienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload>[]
          }
          create: {
            args: Prisma.IngredienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload>
          }
          createMany: {
            args: Prisma.IngredienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngredienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload>[]
          }
          delete: {
            args: Prisma.IngredienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload>
          }
          update: {
            args: Prisma.IngredienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload>
          }
          deleteMany: {
            args: Prisma.IngredienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngredienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IngredienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload>[]
          }
          upsert: {
            args: Prisma.IngredienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload>
          }
          aggregate: {
            args: Prisma.IngredienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngrediente>
          }
          groupBy: {
            args: Prisma.IngredienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngredienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngredienteCountArgs<ExtArgs>
            result: $Utils.Optional<IngredienteCountAggregateOutputType> | number
          }
        }
      }
      Receita: {
        payload: Prisma.$ReceitaPayload<ExtArgs>
        fields: Prisma.ReceitaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReceitaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReceitaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>
          }
          findFirst: {
            args: Prisma.ReceitaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReceitaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>
          }
          findMany: {
            args: Prisma.ReceitaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>[]
          }
          create: {
            args: Prisma.ReceitaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>
          }
          createMany: {
            args: Prisma.ReceitaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReceitaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>[]
          }
          delete: {
            args: Prisma.ReceitaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>
          }
          update: {
            args: Prisma.ReceitaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>
          }
          deleteMany: {
            args: Prisma.ReceitaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReceitaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReceitaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>[]
          }
          upsert: {
            args: Prisma.ReceitaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>
          }
          aggregate: {
            args: Prisma.ReceitaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceita>
          }
          groupBy: {
            args: Prisma.ReceitaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceitaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReceitaCountArgs<ExtArgs>
            result: $Utils.Optional<ReceitaCountAggregateOutputType> | number
          }
        }
      }
      ReceitaEtiqueta: {
        payload: Prisma.$ReceitaEtiquetaPayload<ExtArgs>
        fields: Prisma.ReceitaEtiquetaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReceitaEtiquetaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaEtiquetaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReceitaEtiquetaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaEtiquetaPayload>
          }
          findFirst: {
            args: Prisma.ReceitaEtiquetaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaEtiquetaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReceitaEtiquetaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaEtiquetaPayload>
          }
          findMany: {
            args: Prisma.ReceitaEtiquetaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaEtiquetaPayload>[]
          }
          create: {
            args: Prisma.ReceitaEtiquetaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaEtiquetaPayload>
          }
          createMany: {
            args: Prisma.ReceitaEtiquetaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReceitaEtiquetaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaEtiquetaPayload>[]
          }
          delete: {
            args: Prisma.ReceitaEtiquetaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaEtiquetaPayload>
          }
          update: {
            args: Prisma.ReceitaEtiquetaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaEtiquetaPayload>
          }
          deleteMany: {
            args: Prisma.ReceitaEtiquetaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReceitaEtiquetaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReceitaEtiquetaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaEtiquetaPayload>[]
          }
          upsert: {
            args: Prisma.ReceitaEtiquetaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaEtiquetaPayload>
          }
          aggregate: {
            args: Prisma.ReceitaEtiquetaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceitaEtiqueta>
          }
          groupBy: {
            args: Prisma.ReceitaEtiquetaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceitaEtiquetaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReceitaEtiquetaCountArgs<ExtArgs>
            result: $Utils.Optional<ReceitaEtiquetaCountAggregateOutputType> | number
          }
        }
      }
      Comentario: {
        payload: Prisma.$ComentarioPayload<ExtArgs>
        fields: Prisma.ComentarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComentarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComentarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          findFirst: {
            args: Prisma.ComentarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComentarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          findMany: {
            args: Prisma.ComentarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>[]
          }
          create: {
            args: Prisma.ComentarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          createMany: {
            args: Prisma.ComentarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComentarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>[]
          }
          delete: {
            args: Prisma.ComentarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          update: {
            args: Prisma.ComentarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          deleteMany: {
            args: Prisma.ComentarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComentarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComentarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>[]
          }
          upsert: {
            args: Prisma.ComentarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          aggregate: {
            args: Prisma.ComentarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComentario>
          }
          groupBy: {
            args: Prisma.ComentarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComentarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComentarioCountArgs<ExtArgs>
            result: $Utils.Optional<ComentarioCountAggregateOutputType> | number
          }
        }
      }
      ReceitaFavorita: {
        payload: Prisma.$ReceitaFavoritaPayload<ExtArgs>
        fields: Prisma.ReceitaFavoritaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReceitaFavoritaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaFavoritaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReceitaFavoritaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaFavoritaPayload>
          }
          findFirst: {
            args: Prisma.ReceitaFavoritaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaFavoritaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReceitaFavoritaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaFavoritaPayload>
          }
          findMany: {
            args: Prisma.ReceitaFavoritaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaFavoritaPayload>[]
          }
          create: {
            args: Prisma.ReceitaFavoritaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaFavoritaPayload>
          }
          createMany: {
            args: Prisma.ReceitaFavoritaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReceitaFavoritaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaFavoritaPayload>[]
          }
          delete: {
            args: Prisma.ReceitaFavoritaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaFavoritaPayload>
          }
          update: {
            args: Prisma.ReceitaFavoritaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaFavoritaPayload>
          }
          deleteMany: {
            args: Prisma.ReceitaFavoritaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReceitaFavoritaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReceitaFavoritaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaFavoritaPayload>[]
          }
          upsert: {
            args: Prisma.ReceitaFavoritaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaFavoritaPayload>
          }
          aggregate: {
            args: Prisma.ReceitaFavoritaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceitaFavorita>
          }
          groupBy: {
            args: Prisma.ReceitaFavoritaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceitaFavoritaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReceitaFavoritaCountArgs<ExtArgs>
            result: $Utils.Optional<ReceitaFavoritaCountAggregateOutputType> | number
          }
        }
      }
      ItemReceitaIngrediente: {
        payload: Prisma.$ItemReceitaIngredientePayload<ExtArgs>
        fields: Prisma.ItemReceitaIngredienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemReceitaIngredienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemReceitaIngredientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemReceitaIngredienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemReceitaIngredientePayload>
          }
          findFirst: {
            args: Prisma.ItemReceitaIngredienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemReceitaIngredientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemReceitaIngredienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemReceitaIngredientePayload>
          }
          findMany: {
            args: Prisma.ItemReceitaIngredienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemReceitaIngredientePayload>[]
          }
          create: {
            args: Prisma.ItemReceitaIngredienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemReceitaIngredientePayload>
          }
          createMany: {
            args: Prisma.ItemReceitaIngredienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemReceitaIngredienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemReceitaIngredientePayload>[]
          }
          delete: {
            args: Prisma.ItemReceitaIngredienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemReceitaIngredientePayload>
          }
          update: {
            args: Prisma.ItemReceitaIngredienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemReceitaIngredientePayload>
          }
          deleteMany: {
            args: Prisma.ItemReceitaIngredienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemReceitaIngredienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemReceitaIngredienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemReceitaIngredientePayload>[]
          }
          upsert: {
            args: Prisma.ItemReceitaIngredienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemReceitaIngredientePayload>
          }
          aggregate: {
            args: Prisma.ItemReceitaIngredienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemReceitaIngrediente>
          }
          groupBy: {
            args: Prisma.ItemReceitaIngredienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemReceitaIngredienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemReceitaIngredienteCountArgs<ExtArgs>
            result: $Utils.Optional<ItemReceitaIngredienteCountAggregateOutputType> | number
          }
        }
      }
      ListaCompras: {
        payload: Prisma.$ListaComprasPayload<ExtArgs>
        fields: Prisma.ListaComprasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListaComprasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaComprasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListaComprasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaComprasPayload>
          }
          findFirst: {
            args: Prisma.ListaComprasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaComprasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListaComprasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaComprasPayload>
          }
          findMany: {
            args: Prisma.ListaComprasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaComprasPayload>[]
          }
          create: {
            args: Prisma.ListaComprasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaComprasPayload>
          }
          createMany: {
            args: Prisma.ListaComprasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListaComprasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaComprasPayload>[]
          }
          delete: {
            args: Prisma.ListaComprasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaComprasPayload>
          }
          update: {
            args: Prisma.ListaComprasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaComprasPayload>
          }
          deleteMany: {
            args: Prisma.ListaComprasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListaComprasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListaComprasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaComprasPayload>[]
          }
          upsert: {
            args: Prisma.ListaComprasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaComprasPayload>
          }
          aggregate: {
            args: Prisma.ListaComprasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListaCompras>
          }
          groupBy: {
            args: Prisma.ListaComprasGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListaComprasGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListaComprasCountArgs<ExtArgs>
            result: $Utils.Optional<ListaComprasCountAggregateOutputType> | number
          }
        }
      }
      ItemListaCompras: {
        payload: Prisma.$ItemListaComprasPayload<ExtArgs>
        fields: Prisma.ItemListaComprasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemListaComprasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListaComprasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemListaComprasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListaComprasPayload>
          }
          findFirst: {
            args: Prisma.ItemListaComprasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListaComprasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemListaComprasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListaComprasPayload>
          }
          findMany: {
            args: Prisma.ItemListaComprasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListaComprasPayload>[]
          }
          create: {
            args: Prisma.ItemListaComprasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListaComprasPayload>
          }
          createMany: {
            args: Prisma.ItemListaComprasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemListaComprasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListaComprasPayload>[]
          }
          delete: {
            args: Prisma.ItemListaComprasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListaComprasPayload>
          }
          update: {
            args: Prisma.ItemListaComprasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListaComprasPayload>
          }
          deleteMany: {
            args: Prisma.ItemListaComprasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemListaComprasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemListaComprasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListaComprasPayload>[]
          }
          upsert: {
            args: Prisma.ItemListaComprasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListaComprasPayload>
          }
          aggregate: {
            args: Prisma.ItemListaComprasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemListaCompras>
          }
          groupBy: {
            args: Prisma.ItemListaComprasGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemListaComprasGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemListaComprasCountArgs<ExtArgs>
            result: $Utils.Optional<ItemListaComprasCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    categoria?: CategoriaOmit
    etiqueta?: EtiquetaOmit
    ingrediente?: IngredienteOmit
    receita?: ReceitaOmit
    receitaEtiqueta?: ReceitaEtiquetaOmit
    comentario?: ComentarioOmit
    receitaFavorita?: ReceitaFavoritaOmit
    itemReceitaIngrediente?: ItemReceitaIngredienteOmit
    listaCompras?: ListaComprasOmit
    itemListaCompras?: ItemListaComprasOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    receitasCadastradas: number
    comentarios: number
    receitasFavoritas: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receitasCadastradas?: boolean | UsuarioCountOutputTypeCountReceitasCadastradasArgs
    comentarios?: boolean | UsuarioCountOutputTypeCountComentariosArgs
    receitasFavoritas?: boolean | UsuarioCountOutputTypeCountReceitasFavoritasArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountReceitasCadastradasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceitaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountComentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountReceitasFavoritasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceitaFavoritaWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    receitas: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receitas?: boolean | CategoriaCountOutputTypeCountReceitasArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountReceitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceitaWhereInput
  }


  /**
   * Count Type EtiquetaCountOutputType
   */

  export type EtiquetaCountOutputType = {
    receitas: number
  }

  export type EtiquetaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receitas?: boolean | EtiquetaCountOutputTypeCountReceitasArgs
  }

  // Custom InputTypes
  /**
   * EtiquetaCountOutputType without action
   */
  export type EtiquetaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtiquetaCountOutputType
     */
    select?: EtiquetaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EtiquetaCountOutputType without action
   */
  export type EtiquetaCountOutputTypeCountReceitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceitaEtiquetaWhereInput
  }


  /**
   * Count Type IngredienteCountOutputType
   */

  export type IngredienteCountOutputType = {
    itemEmReceitas: number
    itemEmListasDeCompras: number
  }

  export type IngredienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itemEmReceitas?: boolean | IngredienteCountOutputTypeCountItemEmReceitasArgs
    itemEmListasDeCompras?: boolean | IngredienteCountOutputTypeCountItemEmListasDeComprasArgs
  }

  // Custom InputTypes
  /**
   * IngredienteCountOutputType without action
   */
  export type IngredienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredienteCountOutputType
     */
    select?: IngredienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IngredienteCountOutputType without action
   */
  export type IngredienteCountOutputTypeCountItemEmReceitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemReceitaIngredienteWhereInput
  }

  /**
   * IngredienteCountOutputType without action
   */
  export type IngredienteCountOutputTypeCountItemEmListasDeComprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemListaComprasWhereInput
  }


  /**
   * Count Type ReceitaCountOutputType
   */

  export type ReceitaCountOutputType = {
    comentarios: number
    etiquetas: number
    favoritadoPor: number
    ingredientes: number
  }

  export type ReceitaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comentarios?: boolean | ReceitaCountOutputTypeCountComentariosArgs
    etiquetas?: boolean | ReceitaCountOutputTypeCountEtiquetasArgs
    favoritadoPor?: boolean | ReceitaCountOutputTypeCountFavoritadoPorArgs
    ingredientes?: boolean | ReceitaCountOutputTypeCountIngredientesArgs
  }

  // Custom InputTypes
  /**
   * ReceitaCountOutputType without action
   */
  export type ReceitaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaCountOutputType
     */
    select?: ReceitaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReceitaCountOutputType without action
   */
  export type ReceitaCountOutputTypeCountComentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
  }

  /**
   * ReceitaCountOutputType without action
   */
  export type ReceitaCountOutputTypeCountEtiquetasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceitaEtiquetaWhereInput
  }

  /**
   * ReceitaCountOutputType without action
   */
  export type ReceitaCountOutputTypeCountFavoritadoPorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceitaFavoritaWhereInput
  }

  /**
   * ReceitaCountOutputType without action
   */
  export type ReceitaCountOutputTypeCountIngredientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemReceitaIngredienteWhereInput
  }


  /**
   * Count Type ListaComprasCountOutputType
   */

  export type ListaComprasCountOutputType = {
    itens: number
  }

  export type ListaComprasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | ListaComprasCountOutputTypeCountItensArgs
  }

  // Custom InputTypes
  /**
   * ListaComprasCountOutputType without action
   */
  export type ListaComprasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaComprasCountOutputType
     */
    select?: ListaComprasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ListaComprasCountOutputType without action
   */
  export type ListaComprasCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemListaComprasWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    receitasCadastradas?: boolean | Usuario$receitasCadastradasArgs<ExtArgs>
    comentarios?: boolean | Usuario$comentariosArgs<ExtArgs>
    receitasFavoritas?: boolean | Usuario$receitasFavoritasArgs<ExtArgs>
    listaDeCompras?: boolean | Usuario$listaDeComprasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receitasCadastradas?: boolean | Usuario$receitasCadastradasArgs<ExtArgs>
    comentarios?: boolean | Usuario$comentariosArgs<ExtArgs>
    receitasFavoritas?: boolean | Usuario$receitasFavoritasArgs<ExtArgs>
    listaDeCompras?: boolean | Usuario$listaDeComprasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      receitasCadastradas: Prisma.$ReceitaPayload<ExtArgs>[]
      comentarios: Prisma.$ComentarioPayload<ExtArgs>[]
      receitasFavoritas: Prisma.$ReceitaFavoritaPayload<ExtArgs>[]
      listaDeCompras: Prisma.$ListaComprasPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receitasCadastradas<T extends Usuario$receitasCadastradasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$receitasCadastradasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comentarios<T extends Usuario$comentariosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$comentariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receitasFavoritas<T extends Usuario$receitasFavoritasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$receitasFavoritasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaFavoritaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    listaDeCompras<T extends Usuario$listaDeComprasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$listaDeComprasArgs<ExtArgs>>): Prisma__ListaComprasClient<$Result.GetResult<Prisma.$ListaComprasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly role: FieldRef<"Usuario", 'Role'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly updatedAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.receitasCadastradas
   */
  export type Usuario$receitasCadastradasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    where?: ReceitaWhereInput
    orderBy?: ReceitaOrderByWithRelationInput | ReceitaOrderByWithRelationInput[]
    cursor?: ReceitaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceitaScalarFieldEnum | ReceitaScalarFieldEnum[]
  }

  /**
   * Usuario.comentarios
   */
  export type Usuario$comentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    cursor?: ComentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Usuario.receitasFavoritas
   */
  export type Usuario$receitasFavoritasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaFavorita
     */
    select?: ReceitaFavoritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaFavorita
     */
    omit?: ReceitaFavoritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaFavoritaInclude<ExtArgs> | null
    where?: ReceitaFavoritaWhereInput
    orderBy?: ReceitaFavoritaOrderByWithRelationInput | ReceitaFavoritaOrderByWithRelationInput[]
    cursor?: ReceitaFavoritaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceitaFavoritaScalarFieldEnum | ReceitaFavoritaScalarFieldEnum[]
  }

  /**
   * Usuario.listaDeCompras
   */
  export type Usuario$listaDeComprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaCompras
     */
    select?: ListaComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaCompras
     */
    omit?: ListaComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaComprasInclude<ExtArgs> | null
    where?: ListaComprasWhereInput
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    nome: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id?: true
  }

  export type CategoriaSumAggregateInputType = {
    id?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: number
    nome: string
    createdAt: Date
    updatedAt: Date
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    receitas?: boolean | Categoria$receitasArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectScalar = {
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "createdAt" | "updatedAt", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receitas?: boolean | Categoria$receitasArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      receitas: Prisma.$ReceitaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {CategoriaCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {CategoriaUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receitas<T extends Categoria$receitasArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$receitasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'Int'>
    readonly nome: FieldRef<"Categoria", 'String'>
    readonly createdAt: FieldRef<"Categoria", 'DateTime'>
    readonly updatedAt: FieldRef<"Categoria", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria createManyAndReturn
   */
  export type CategoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria updateManyAndReturn
   */
  export type CategoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.receitas
   */
  export type Categoria$receitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    where?: ReceitaWhereInput
    orderBy?: ReceitaOrderByWithRelationInput | ReceitaOrderByWithRelationInput[]
    cursor?: ReceitaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceitaScalarFieldEnum | ReceitaScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Etiqueta
   */

  export type AggregateEtiqueta = {
    _count: EtiquetaCountAggregateOutputType | null
    _avg: EtiquetaAvgAggregateOutputType | null
    _sum: EtiquetaSumAggregateOutputType | null
    _min: EtiquetaMinAggregateOutputType | null
    _max: EtiquetaMaxAggregateOutputType | null
  }

  export type EtiquetaAvgAggregateOutputType = {
    id: number | null
  }

  export type EtiquetaSumAggregateOutputType = {
    id: number | null
  }

  export type EtiquetaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EtiquetaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EtiquetaCountAggregateOutputType = {
    id: number
    nome: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EtiquetaAvgAggregateInputType = {
    id?: true
  }

  export type EtiquetaSumAggregateInputType = {
    id?: true
  }

  export type EtiquetaMinAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EtiquetaMaxAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EtiquetaCountAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EtiquetaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Etiqueta to aggregate.
     */
    where?: EtiquetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etiquetas to fetch.
     */
    orderBy?: EtiquetaOrderByWithRelationInput | EtiquetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EtiquetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etiquetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etiquetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Etiquetas
    **/
    _count?: true | EtiquetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EtiquetaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EtiquetaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EtiquetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EtiquetaMaxAggregateInputType
  }

  export type GetEtiquetaAggregateType<T extends EtiquetaAggregateArgs> = {
        [P in keyof T & keyof AggregateEtiqueta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEtiqueta[P]>
      : GetScalarType<T[P], AggregateEtiqueta[P]>
  }




  export type EtiquetaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EtiquetaWhereInput
    orderBy?: EtiquetaOrderByWithAggregationInput | EtiquetaOrderByWithAggregationInput[]
    by: EtiquetaScalarFieldEnum[] | EtiquetaScalarFieldEnum
    having?: EtiquetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EtiquetaCountAggregateInputType | true
    _avg?: EtiquetaAvgAggregateInputType
    _sum?: EtiquetaSumAggregateInputType
    _min?: EtiquetaMinAggregateInputType
    _max?: EtiquetaMaxAggregateInputType
  }

  export type EtiquetaGroupByOutputType = {
    id: number
    nome: string
    createdAt: Date
    updatedAt: Date
    _count: EtiquetaCountAggregateOutputType | null
    _avg: EtiquetaAvgAggregateOutputType | null
    _sum: EtiquetaSumAggregateOutputType | null
    _min: EtiquetaMinAggregateOutputType | null
    _max: EtiquetaMaxAggregateOutputType | null
  }

  type GetEtiquetaGroupByPayload<T extends EtiquetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EtiquetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EtiquetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EtiquetaGroupByOutputType[P]>
            : GetScalarType<T[P], EtiquetaGroupByOutputType[P]>
        }
      >
    >


  export type EtiquetaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    receitas?: boolean | Etiqueta$receitasArgs<ExtArgs>
    _count?: boolean | EtiquetaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["etiqueta"]>

  export type EtiquetaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["etiqueta"]>

  export type EtiquetaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["etiqueta"]>

  export type EtiquetaSelectScalar = {
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EtiquetaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "createdAt" | "updatedAt", ExtArgs["result"]["etiqueta"]>
  export type EtiquetaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receitas?: boolean | Etiqueta$receitasArgs<ExtArgs>
    _count?: boolean | EtiquetaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EtiquetaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EtiquetaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EtiquetaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Etiqueta"
    objects: {
      receitas: Prisma.$ReceitaEtiquetaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["etiqueta"]>
    composites: {}
  }

  type EtiquetaGetPayload<S extends boolean | null | undefined | EtiquetaDefaultArgs> = $Result.GetResult<Prisma.$EtiquetaPayload, S>

  type EtiquetaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EtiquetaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EtiquetaCountAggregateInputType | true
    }

  export interface EtiquetaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Etiqueta'], meta: { name: 'Etiqueta' } }
    /**
     * Find zero or one Etiqueta that matches the filter.
     * @param {EtiquetaFindUniqueArgs} args - Arguments to find a Etiqueta
     * @example
     * // Get one Etiqueta
     * const etiqueta = await prisma.etiqueta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EtiquetaFindUniqueArgs>(args: SelectSubset<T, EtiquetaFindUniqueArgs<ExtArgs>>): Prisma__EtiquetaClient<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Etiqueta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EtiquetaFindUniqueOrThrowArgs} args - Arguments to find a Etiqueta
     * @example
     * // Get one Etiqueta
     * const etiqueta = await prisma.etiqueta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EtiquetaFindUniqueOrThrowArgs>(args: SelectSubset<T, EtiquetaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EtiquetaClient<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Etiqueta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaFindFirstArgs} args - Arguments to find a Etiqueta
     * @example
     * // Get one Etiqueta
     * const etiqueta = await prisma.etiqueta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EtiquetaFindFirstArgs>(args?: SelectSubset<T, EtiquetaFindFirstArgs<ExtArgs>>): Prisma__EtiquetaClient<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Etiqueta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaFindFirstOrThrowArgs} args - Arguments to find a Etiqueta
     * @example
     * // Get one Etiqueta
     * const etiqueta = await prisma.etiqueta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EtiquetaFindFirstOrThrowArgs>(args?: SelectSubset<T, EtiquetaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EtiquetaClient<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Etiquetas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Etiquetas
     * const etiquetas = await prisma.etiqueta.findMany()
     * 
     * // Get first 10 Etiquetas
     * const etiquetas = await prisma.etiqueta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const etiquetaWithIdOnly = await prisma.etiqueta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EtiquetaFindManyArgs>(args?: SelectSubset<T, EtiquetaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Etiqueta.
     * @param {EtiquetaCreateArgs} args - Arguments to create a Etiqueta.
     * @example
     * // Create one Etiqueta
     * const Etiqueta = await prisma.etiqueta.create({
     *   data: {
     *     // ... data to create a Etiqueta
     *   }
     * })
     * 
     */
    create<T extends EtiquetaCreateArgs>(args: SelectSubset<T, EtiquetaCreateArgs<ExtArgs>>): Prisma__EtiquetaClient<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Etiquetas.
     * @param {EtiquetaCreateManyArgs} args - Arguments to create many Etiquetas.
     * @example
     * // Create many Etiquetas
     * const etiqueta = await prisma.etiqueta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EtiquetaCreateManyArgs>(args?: SelectSubset<T, EtiquetaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Etiquetas and returns the data saved in the database.
     * @param {EtiquetaCreateManyAndReturnArgs} args - Arguments to create many Etiquetas.
     * @example
     * // Create many Etiquetas
     * const etiqueta = await prisma.etiqueta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Etiquetas and only return the `id`
     * const etiquetaWithIdOnly = await prisma.etiqueta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EtiquetaCreateManyAndReturnArgs>(args?: SelectSubset<T, EtiquetaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Etiqueta.
     * @param {EtiquetaDeleteArgs} args - Arguments to delete one Etiqueta.
     * @example
     * // Delete one Etiqueta
     * const Etiqueta = await prisma.etiqueta.delete({
     *   where: {
     *     // ... filter to delete one Etiqueta
     *   }
     * })
     * 
     */
    delete<T extends EtiquetaDeleteArgs>(args: SelectSubset<T, EtiquetaDeleteArgs<ExtArgs>>): Prisma__EtiquetaClient<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Etiqueta.
     * @param {EtiquetaUpdateArgs} args - Arguments to update one Etiqueta.
     * @example
     * // Update one Etiqueta
     * const etiqueta = await prisma.etiqueta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EtiquetaUpdateArgs>(args: SelectSubset<T, EtiquetaUpdateArgs<ExtArgs>>): Prisma__EtiquetaClient<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Etiquetas.
     * @param {EtiquetaDeleteManyArgs} args - Arguments to filter Etiquetas to delete.
     * @example
     * // Delete a few Etiquetas
     * const { count } = await prisma.etiqueta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EtiquetaDeleteManyArgs>(args?: SelectSubset<T, EtiquetaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Etiquetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Etiquetas
     * const etiqueta = await prisma.etiqueta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EtiquetaUpdateManyArgs>(args: SelectSubset<T, EtiquetaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Etiquetas and returns the data updated in the database.
     * @param {EtiquetaUpdateManyAndReturnArgs} args - Arguments to update many Etiquetas.
     * @example
     * // Update many Etiquetas
     * const etiqueta = await prisma.etiqueta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Etiquetas and only return the `id`
     * const etiquetaWithIdOnly = await prisma.etiqueta.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EtiquetaUpdateManyAndReturnArgs>(args: SelectSubset<T, EtiquetaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Etiqueta.
     * @param {EtiquetaUpsertArgs} args - Arguments to update or create a Etiqueta.
     * @example
     * // Update or create a Etiqueta
     * const etiqueta = await prisma.etiqueta.upsert({
     *   create: {
     *     // ... data to create a Etiqueta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Etiqueta we want to update
     *   }
     * })
     */
    upsert<T extends EtiquetaUpsertArgs>(args: SelectSubset<T, EtiquetaUpsertArgs<ExtArgs>>): Prisma__EtiquetaClient<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Etiquetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaCountArgs} args - Arguments to filter Etiquetas to count.
     * @example
     * // Count the number of Etiquetas
     * const count = await prisma.etiqueta.count({
     *   where: {
     *     // ... the filter for the Etiquetas we want to count
     *   }
     * })
    **/
    count<T extends EtiquetaCountArgs>(
      args?: Subset<T, EtiquetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EtiquetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Etiqueta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EtiquetaAggregateArgs>(args: Subset<T, EtiquetaAggregateArgs>): Prisma.PrismaPromise<GetEtiquetaAggregateType<T>>

    /**
     * Group by Etiqueta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EtiquetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EtiquetaGroupByArgs['orderBy'] }
        : { orderBy?: EtiquetaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EtiquetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEtiquetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Etiqueta model
   */
  readonly fields: EtiquetaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Etiqueta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EtiquetaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receitas<T extends Etiqueta$receitasArgs<ExtArgs> = {}>(args?: Subset<T, Etiqueta$receitasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaEtiquetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Etiqueta model
   */
  interface EtiquetaFieldRefs {
    readonly id: FieldRef<"Etiqueta", 'Int'>
    readonly nome: FieldRef<"Etiqueta", 'String'>
    readonly createdAt: FieldRef<"Etiqueta", 'DateTime'>
    readonly updatedAt: FieldRef<"Etiqueta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Etiqueta findUnique
   */
  export type EtiquetaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    /**
     * Filter, which Etiqueta to fetch.
     */
    where: EtiquetaWhereUniqueInput
  }

  /**
   * Etiqueta findUniqueOrThrow
   */
  export type EtiquetaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    /**
     * Filter, which Etiqueta to fetch.
     */
    where: EtiquetaWhereUniqueInput
  }

  /**
   * Etiqueta findFirst
   */
  export type EtiquetaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    /**
     * Filter, which Etiqueta to fetch.
     */
    where?: EtiquetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etiquetas to fetch.
     */
    orderBy?: EtiquetaOrderByWithRelationInput | EtiquetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Etiquetas.
     */
    cursor?: EtiquetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etiquetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etiquetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Etiquetas.
     */
    distinct?: EtiquetaScalarFieldEnum | EtiquetaScalarFieldEnum[]
  }

  /**
   * Etiqueta findFirstOrThrow
   */
  export type EtiquetaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    /**
     * Filter, which Etiqueta to fetch.
     */
    where?: EtiquetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etiquetas to fetch.
     */
    orderBy?: EtiquetaOrderByWithRelationInput | EtiquetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Etiquetas.
     */
    cursor?: EtiquetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etiquetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etiquetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Etiquetas.
     */
    distinct?: EtiquetaScalarFieldEnum | EtiquetaScalarFieldEnum[]
  }

  /**
   * Etiqueta findMany
   */
  export type EtiquetaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    /**
     * Filter, which Etiquetas to fetch.
     */
    where?: EtiquetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etiquetas to fetch.
     */
    orderBy?: EtiquetaOrderByWithRelationInput | EtiquetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Etiquetas.
     */
    cursor?: EtiquetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etiquetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etiquetas.
     */
    skip?: number
    distinct?: EtiquetaScalarFieldEnum | EtiquetaScalarFieldEnum[]
  }

  /**
   * Etiqueta create
   */
  export type EtiquetaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    /**
     * The data needed to create a Etiqueta.
     */
    data: XOR<EtiquetaCreateInput, EtiquetaUncheckedCreateInput>
  }

  /**
   * Etiqueta createMany
   */
  export type EtiquetaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Etiquetas.
     */
    data: EtiquetaCreateManyInput | EtiquetaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Etiqueta createManyAndReturn
   */
  export type EtiquetaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * The data used to create many Etiquetas.
     */
    data: EtiquetaCreateManyInput | EtiquetaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Etiqueta update
   */
  export type EtiquetaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    /**
     * The data needed to update a Etiqueta.
     */
    data: XOR<EtiquetaUpdateInput, EtiquetaUncheckedUpdateInput>
    /**
     * Choose, which Etiqueta to update.
     */
    where: EtiquetaWhereUniqueInput
  }

  /**
   * Etiqueta updateMany
   */
  export type EtiquetaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Etiquetas.
     */
    data: XOR<EtiquetaUpdateManyMutationInput, EtiquetaUncheckedUpdateManyInput>
    /**
     * Filter which Etiquetas to update
     */
    where?: EtiquetaWhereInput
    /**
     * Limit how many Etiquetas to update.
     */
    limit?: number
  }

  /**
   * Etiqueta updateManyAndReturn
   */
  export type EtiquetaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * The data used to update Etiquetas.
     */
    data: XOR<EtiquetaUpdateManyMutationInput, EtiquetaUncheckedUpdateManyInput>
    /**
     * Filter which Etiquetas to update
     */
    where?: EtiquetaWhereInput
    /**
     * Limit how many Etiquetas to update.
     */
    limit?: number
  }

  /**
   * Etiqueta upsert
   */
  export type EtiquetaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    /**
     * The filter to search for the Etiqueta to update in case it exists.
     */
    where: EtiquetaWhereUniqueInput
    /**
     * In case the Etiqueta found by the `where` argument doesn't exist, create a new Etiqueta with this data.
     */
    create: XOR<EtiquetaCreateInput, EtiquetaUncheckedCreateInput>
    /**
     * In case the Etiqueta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EtiquetaUpdateInput, EtiquetaUncheckedUpdateInput>
  }

  /**
   * Etiqueta delete
   */
  export type EtiquetaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    /**
     * Filter which Etiqueta to delete.
     */
    where: EtiquetaWhereUniqueInput
  }

  /**
   * Etiqueta deleteMany
   */
  export type EtiquetaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Etiquetas to delete
     */
    where?: EtiquetaWhereInput
    /**
     * Limit how many Etiquetas to delete.
     */
    limit?: number
  }

  /**
   * Etiqueta.receitas
   */
  export type Etiqueta$receitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaEtiqueta
     */
    select?: ReceitaEtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaEtiqueta
     */
    omit?: ReceitaEtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaEtiquetaInclude<ExtArgs> | null
    where?: ReceitaEtiquetaWhereInput
    orderBy?: ReceitaEtiquetaOrderByWithRelationInput | ReceitaEtiquetaOrderByWithRelationInput[]
    cursor?: ReceitaEtiquetaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceitaEtiquetaScalarFieldEnum | ReceitaEtiquetaScalarFieldEnum[]
  }

  /**
   * Etiqueta without action
   */
  export type EtiquetaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
  }


  /**
   * Model Ingrediente
   */

  export type AggregateIngrediente = {
    _count: IngredienteCountAggregateOutputType | null
    _avg: IngredienteAvgAggregateOutputType | null
    _sum: IngredienteSumAggregateOutputType | null
    _min: IngredienteMinAggregateOutputType | null
    _max: IngredienteMaxAggregateOutputType | null
  }

  export type IngredienteAvgAggregateOutputType = {
    id: number | null
  }

  export type IngredienteSumAggregateOutputType = {
    id: number | null
  }

  export type IngredienteMinAggregateOutputType = {
    id: number | null
    nome: string | null
    imagemUrl: string | null
    categoriaIngrediente: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IngredienteMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    imagemUrl: string | null
    categoriaIngrediente: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IngredienteCountAggregateOutputType = {
    id: number
    nome: number
    imagemUrl: number
    categoriaIngrediente: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IngredienteAvgAggregateInputType = {
    id?: true
  }

  export type IngredienteSumAggregateInputType = {
    id?: true
  }

  export type IngredienteMinAggregateInputType = {
    id?: true
    nome?: true
    imagemUrl?: true
    categoriaIngrediente?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IngredienteMaxAggregateInputType = {
    id?: true
    nome?: true
    imagemUrl?: true
    categoriaIngrediente?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IngredienteCountAggregateInputType = {
    id?: true
    nome?: true
    imagemUrl?: true
    categoriaIngrediente?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IngredienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingrediente to aggregate.
     */
    where?: IngredienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredientes to fetch.
     */
    orderBy?: IngredienteOrderByWithRelationInput | IngredienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngredienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ingredientes
    **/
    _count?: true | IngredienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngredienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngredienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredienteMaxAggregateInputType
  }

  export type GetIngredienteAggregateType<T extends IngredienteAggregateArgs> = {
        [P in keyof T & keyof AggregateIngrediente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngrediente[P]>
      : GetScalarType<T[P], AggregateIngrediente[P]>
  }




  export type IngredienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredienteWhereInput
    orderBy?: IngredienteOrderByWithAggregationInput | IngredienteOrderByWithAggregationInput[]
    by: IngredienteScalarFieldEnum[] | IngredienteScalarFieldEnum
    having?: IngredienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredienteCountAggregateInputType | true
    _avg?: IngredienteAvgAggregateInputType
    _sum?: IngredienteSumAggregateInputType
    _min?: IngredienteMinAggregateInputType
    _max?: IngredienteMaxAggregateInputType
  }

  export type IngredienteGroupByOutputType = {
    id: number
    nome: string
    imagemUrl: string | null
    categoriaIngrediente: string | null
    createdAt: Date
    updatedAt: Date
    _count: IngredienteCountAggregateOutputType | null
    _avg: IngredienteAvgAggregateOutputType | null
    _sum: IngredienteSumAggregateOutputType | null
    _min: IngredienteMinAggregateOutputType | null
    _max: IngredienteMaxAggregateOutputType | null
  }

  type GetIngredienteGroupByPayload<T extends IngredienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredienteGroupByOutputType[P]>
            : GetScalarType<T[P], IngredienteGroupByOutputType[P]>
        }
      >
    >


  export type IngredienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    imagemUrl?: boolean
    categoriaIngrediente?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    itemEmReceitas?: boolean | Ingrediente$itemEmReceitasArgs<ExtArgs>
    itemEmListasDeCompras?: boolean | Ingrediente$itemEmListasDeComprasArgs<ExtArgs>
    _count?: boolean | IngredienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingrediente"]>

  export type IngredienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    imagemUrl?: boolean
    categoriaIngrediente?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ingrediente"]>

  export type IngredienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    imagemUrl?: boolean
    categoriaIngrediente?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ingrediente"]>

  export type IngredienteSelectScalar = {
    id?: boolean
    nome?: boolean
    imagemUrl?: boolean
    categoriaIngrediente?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IngredienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "imagemUrl" | "categoriaIngrediente" | "createdAt" | "updatedAt", ExtArgs["result"]["ingrediente"]>
  export type IngredienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itemEmReceitas?: boolean | Ingrediente$itemEmReceitasArgs<ExtArgs>
    itemEmListasDeCompras?: boolean | Ingrediente$itemEmListasDeComprasArgs<ExtArgs>
    _count?: boolean | IngredienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IngredienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type IngredienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $IngredientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ingrediente"
    objects: {
      itemEmReceitas: Prisma.$ItemReceitaIngredientePayload<ExtArgs>[]
      itemEmListasDeCompras: Prisma.$ItemListaComprasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      imagemUrl: string | null
      categoriaIngrediente: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ingrediente"]>
    composites: {}
  }

  type IngredienteGetPayload<S extends boolean | null | undefined | IngredienteDefaultArgs> = $Result.GetResult<Prisma.$IngredientePayload, S>

  type IngredienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngredienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngredienteCountAggregateInputType | true
    }

  export interface IngredienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ingrediente'], meta: { name: 'Ingrediente' } }
    /**
     * Find zero or one Ingrediente that matches the filter.
     * @param {IngredienteFindUniqueArgs} args - Arguments to find a Ingrediente
     * @example
     * // Get one Ingrediente
     * const ingrediente = await prisma.ingrediente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngredienteFindUniqueArgs>(args: SelectSubset<T, IngredienteFindUniqueArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingrediente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngredienteFindUniqueOrThrowArgs} args - Arguments to find a Ingrediente
     * @example
     * // Get one Ingrediente
     * const ingrediente = await prisma.ingrediente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngredienteFindUniqueOrThrowArgs>(args: SelectSubset<T, IngredienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingrediente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredienteFindFirstArgs} args - Arguments to find a Ingrediente
     * @example
     * // Get one Ingrediente
     * const ingrediente = await prisma.ingrediente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngredienteFindFirstArgs>(args?: SelectSubset<T, IngredienteFindFirstArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingrediente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredienteFindFirstOrThrowArgs} args - Arguments to find a Ingrediente
     * @example
     * // Get one Ingrediente
     * const ingrediente = await prisma.ingrediente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngredienteFindFirstOrThrowArgs>(args?: SelectSubset<T, IngredienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingredientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredientes
     * const ingredientes = await prisma.ingrediente.findMany()
     * 
     * // Get first 10 Ingredientes
     * const ingredientes = await prisma.ingrediente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredienteWithIdOnly = await prisma.ingrediente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngredienteFindManyArgs>(args?: SelectSubset<T, IngredienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingrediente.
     * @param {IngredienteCreateArgs} args - Arguments to create a Ingrediente.
     * @example
     * // Create one Ingrediente
     * const Ingrediente = await prisma.ingrediente.create({
     *   data: {
     *     // ... data to create a Ingrediente
     *   }
     * })
     * 
     */
    create<T extends IngredienteCreateArgs>(args: SelectSubset<T, IngredienteCreateArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingredientes.
     * @param {IngredienteCreateManyArgs} args - Arguments to create many Ingredientes.
     * @example
     * // Create many Ingredientes
     * const ingrediente = await prisma.ingrediente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngredienteCreateManyArgs>(args?: SelectSubset<T, IngredienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingredientes and returns the data saved in the database.
     * @param {IngredienteCreateManyAndReturnArgs} args - Arguments to create many Ingredientes.
     * @example
     * // Create many Ingredientes
     * const ingrediente = await prisma.ingrediente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingredientes and only return the `id`
     * const ingredienteWithIdOnly = await prisma.ingrediente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngredienteCreateManyAndReturnArgs>(args?: SelectSubset<T, IngredienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ingrediente.
     * @param {IngredienteDeleteArgs} args - Arguments to delete one Ingrediente.
     * @example
     * // Delete one Ingrediente
     * const Ingrediente = await prisma.ingrediente.delete({
     *   where: {
     *     // ... filter to delete one Ingrediente
     *   }
     * })
     * 
     */
    delete<T extends IngredienteDeleteArgs>(args: SelectSubset<T, IngredienteDeleteArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingrediente.
     * @param {IngredienteUpdateArgs} args - Arguments to update one Ingrediente.
     * @example
     * // Update one Ingrediente
     * const ingrediente = await prisma.ingrediente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngredienteUpdateArgs>(args: SelectSubset<T, IngredienteUpdateArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingredientes.
     * @param {IngredienteDeleteManyArgs} args - Arguments to filter Ingredientes to delete.
     * @example
     * // Delete a few Ingredientes
     * const { count } = await prisma.ingrediente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngredienteDeleteManyArgs>(args?: SelectSubset<T, IngredienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredientes
     * const ingrediente = await prisma.ingrediente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngredienteUpdateManyArgs>(args: SelectSubset<T, IngredienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredientes and returns the data updated in the database.
     * @param {IngredienteUpdateManyAndReturnArgs} args - Arguments to update many Ingredientes.
     * @example
     * // Update many Ingredientes
     * const ingrediente = await prisma.ingrediente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingredientes and only return the `id`
     * const ingredienteWithIdOnly = await prisma.ingrediente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IngredienteUpdateManyAndReturnArgs>(args: SelectSubset<T, IngredienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ingrediente.
     * @param {IngredienteUpsertArgs} args - Arguments to update or create a Ingrediente.
     * @example
     * // Update or create a Ingrediente
     * const ingrediente = await prisma.ingrediente.upsert({
     *   create: {
     *     // ... data to create a Ingrediente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingrediente we want to update
     *   }
     * })
     */
    upsert<T extends IngredienteUpsertArgs>(args: SelectSubset<T, IngredienteUpsertArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingredientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredienteCountArgs} args - Arguments to filter Ingredientes to count.
     * @example
     * // Count the number of Ingredientes
     * const count = await prisma.ingrediente.count({
     *   where: {
     *     // ... the filter for the Ingredientes we want to count
     *   }
     * })
    **/
    count<T extends IngredienteCountArgs>(
      args?: Subset<T, IngredienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingrediente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IngredienteAggregateArgs>(args: Subset<T, IngredienteAggregateArgs>): Prisma.PrismaPromise<GetIngredienteAggregateType<T>>

    /**
     * Group by Ingrediente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IngredienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredienteGroupByArgs['orderBy'] }
        : { orderBy?: IngredienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IngredienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ingrediente model
   */
  readonly fields: IngredienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ingrediente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    itemEmReceitas<T extends Ingrediente$itemEmReceitasArgs<ExtArgs> = {}>(args?: Subset<T, Ingrediente$itemEmReceitasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemReceitaIngredientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    itemEmListasDeCompras<T extends Ingrediente$itemEmListasDeComprasArgs<ExtArgs> = {}>(args?: Subset<T, Ingrediente$itemEmListasDeComprasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemListaComprasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ingrediente model
   */
  interface IngredienteFieldRefs {
    readonly id: FieldRef<"Ingrediente", 'Int'>
    readonly nome: FieldRef<"Ingrediente", 'String'>
    readonly imagemUrl: FieldRef<"Ingrediente", 'String'>
    readonly categoriaIngrediente: FieldRef<"Ingrediente", 'String'>
    readonly createdAt: FieldRef<"Ingrediente", 'DateTime'>
    readonly updatedAt: FieldRef<"Ingrediente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ingrediente findUnique
   */
  export type IngredienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
    /**
     * Filter, which Ingrediente to fetch.
     */
    where: IngredienteWhereUniqueInput
  }

  /**
   * Ingrediente findUniqueOrThrow
   */
  export type IngredienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
    /**
     * Filter, which Ingrediente to fetch.
     */
    where: IngredienteWhereUniqueInput
  }

  /**
   * Ingrediente findFirst
   */
  export type IngredienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
    /**
     * Filter, which Ingrediente to fetch.
     */
    where?: IngredienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredientes to fetch.
     */
    orderBy?: IngredienteOrderByWithRelationInput | IngredienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredientes.
     */
    cursor?: IngredienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredientes.
     */
    distinct?: IngredienteScalarFieldEnum | IngredienteScalarFieldEnum[]
  }

  /**
   * Ingrediente findFirstOrThrow
   */
  export type IngredienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
    /**
     * Filter, which Ingrediente to fetch.
     */
    where?: IngredienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredientes to fetch.
     */
    orderBy?: IngredienteOrderByWithRelationInput | IngredienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredientes.
     */
    cursor?: IngredienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredientes.
     */
    distinct?: IngredienteScalarFieldEnum | IngredienteScalarFieldEnum[]
  }

  /**
   * Ingrediente findMany
   */
  export type IngredienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
    /**
     * Filter, which Ingredientes to fetch.
     */
    where?: IngredienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredientes to fetch.
     */
    orderBy?: IngredienteOrderByWithRelationInput | IngredienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ingredientes.
     */
    cursor?: IngredienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredientes.
     */
    skip?: number
    distinct?: IngredienteScalarFieldEnum | IngredienteScalarFieldEnum[]
  }

  /**
   * Ingrediente create
   */
  export type IngredienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Ingrediente.
     */
    data: XOR<IngredienteCreateInput, IngredienteUncheckedCreateInput>
  }

  /**
   * Ingrediente createMany
   */
  export type IngredienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ingredientes.
     */
    data: IngredienteCreateManyInput | IngredienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingrediente createManyAndReturn
   */
  export type IngredienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * The data used to create many Ingredientes.
     */
    data: IngredienteCreateManyInput | IngredienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingrediente update
   */
  export type IngredienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Ingrediente.
     */
    data: XOR<IngredienteUpdateInput, IngredienteUncheckedUpdateInput>
    /**
     * Choose, which Ingrediente to update.
     */
    where: IngredienteWhereUniqueInput
  }

  /**
   * Ingrediente updateMany
   */
  export type IngredienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ingredientes.
     */
    data: XOR<IngredienteUpdateManyMutationInput, IngredienteUncheckedUpdateManyInput>
    /**
     * Filter which Ingredientes to update
     */
    where?: IngredienteWhereInput
    /**
     * Limit how many Ingredientes to update.
     */
    limit?: number
  }

  /**
   * Ingrediente updateManyAndReturn
   */
  export type IngredienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * The data used to update Ingredientes.
     */
    data: XOR<IngredienteUpdateManyMutationInput, IngredienteUncheckedUpdateManyInput>
    /**
     * Filter which Ingredientes to update
     */
    where?: IngredienteWhereInput
    /**
     * Limit how many Ingredientes to update.
     */
    limit?: number
  }

  /**
   * Ingrediente upsert
   */
  export type IngredienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Ingrediente to update in case it exists.
     */
    where: IngredienteWhereUniqueInput
    /**
     * In case the Ingrediente found by the `where` argument doesn't exist, create a new Ingrediente with this data.
     */
    create: XOR<IngredienteCreateInput, IngredienteUncheckedCreateInput>
    /**
     * In case the Ingrediente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredienteUpdateInput, IngredienteUncheckedUpdateInput>
  }

  /**
   * Ingrediente delete
   */
  export type IngredienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
    /**
     * Filter which Ingrediente to delete.
     */
    where: IngredienteWhereUniqueInput
  }

  /**
   * Ingrediente deleteMany
   */
  export type IngredienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredientes to delete
     */
    where?: IngredienteWhereInput
    /**
     * Limit how many Ingredientes to delete.
     */
    limit?: number
  }

  /**
   * Ingrediente.itemEmReceitas
   */
  export type Ingrediente$itemEmReceitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemReceitaIngrediente
     */
    select?: ItemReceitaIngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemReceitaIngrediente
     */
    omit?: ItemReceitaIngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemReceitaIngredienteInclude<ExtArgs> | null
    where?: ItemReceitaIngredienteWhereInput
    orderBy?: ItemReceitaIngredienteOrderByWithRelationInput | ItemReceitaIngredienteOrderByWithRelationInput[]
    cursor?: ItemReceitaIngredienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemReceitaIngredienteScalarFieldEnum | ItemReceitaIngredienteScalarFieldEnum[]
  }

  /**
   * Ingrediente.itemEmListasDeCompras
   */
  export type Ingrediente$itemEmListasDeComprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaCompras
     */
    select?: ItemListaComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaCompras
     */
    omit?: ItemListaComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaComprasInclude<ExtArgs> | null
    where?: ItemListaComprasWhereInput
    orderBy?: ItemListaComprasOrderByWithRelationInput | ItemListaComprasOrderByWithRelationInput[]
    cursor?: ItemListaComprasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemListaComprasScalarFieldEnum | ItemListaComprasScalarFieldEnum[]
  }

  /**
   * Ingrediente without action
   */
  export type IngredienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
  }


  /**
   * Model Receita
   */

  export type AggregateReceita = {
    _count: ReceitaCountAggregateOutputType | null
    _avg: ReceitaAvgAggregateOutputType | null
    _sum: ReceitaSumAggregateOutputType | null
    _min: ReceitaMinAggregateOutputType | null
    _max: ReceitaMaxAggregateOutputType | null
  }

  export type ReceitaAvgAggregateOutputType = {
    id: number | null
    rendimento: number | null
    autorId: number | null
    categoriaId: number | null
  }

  export type ReceitaSumAggregateOutputType = {
    id: number | null
    rendimento: number | null
    autorId: number | null
    categoriaId: number | null
  }

  export type ReceitaMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    descricao: string | null
    imagemUrl: string | null
    tempoPreparo: string | null
    dificuldade: $Enums.DificuldadeReceita | null
    rendimento: number | null
    createdAt: Date | null
    updatedAt: Date | null
    autorId: number | null
    categoriaId: number | null
  }

  export type ReceitaMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    descricao: string | null
    imagemUrl: string | null
    tempoPreparo: string | null
    dificuldade: $Enums.DificuldadeReceita | null
    rendimento: number | null
    createdAt: Date | null
    updatedAt: Date | null
    autorId: number | null
    categoriaId: number | null
  }

  export type ReceitaCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    imagemUrl: number
    tempoPreparo: number
    dificuldade: number
    rendimento: number
    createdAt: number
    updatedAt: number
    autorId: number
    categoriaId: number
    _all: number
  }


  export type ReceitaAvgAggregateInputType = {
    id?: true
    rendimento?: true
    autorId?: true
    categoriaId?: true
  }

  export type ReceitaSumAggregateInputType = {
    id?: true
    rendimento?: true
    autorId?: true
    categoriaId?: true
  }

  export type ReceitaMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    imagemUrl?: true
    tempoPreparo?: true
    dificuldade?: true
    rendimento?: true
    createdAt?: true
    updatedAt?: true
    autorId?: true
    categoriaId?: true
  }

  export type ReceitaMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    imagemUrl?: true
    tempoPreparo?: true
    dificuldade?: true
    rendimento?: true
    createdAt?: true
    updatedAt?: true
    autorId?: true
    categoriaId?: true
  }

  export type ReceitaCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    imagemUrl?: true
    tempoPreparo?: true
    dificuldade?: true
    rendimento?: true
    createdAt?: true
    updatedAt?: true
    autorId?: true
    categoriaId?: true
    _all?: true
  }

  export type ReceitaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Receita to aggregate.
     */
    where?: ReceitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receitas to fetch.
     */
    orderBy?: ReceitaOrderByWithRelationInput | ReceitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReceitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Receitas
    **/
    _count?: true | ReceitaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReceitaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReceitaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReceitaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReceitaMaxAggregateInputType
  }

  export type GetReceitaAggregateType<T extends ReceitaAggregateArgs> = {
        [P in keyof T & keyof AggregateReceita]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceita[P]>
      : GetScalarType<T[P], AggregateReceita[P]>
  }




  export type ReceitaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceitaWhereInput
    orderBy?: ReceitaOrderByWithAggregationInput | ReceitaOrderByWithAggregationInput[]
    by: ReceitaScalarFieldEnum[] | ReceitaScalarFieldEnum
    having?: ReceitaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceitaCountAggregateInputType | true
    _avg?: ReceitaAvgAggregateInputType
    _sum?: ReceitaSumAggregateInputType
    _min?: ReceitaMinAggregateInputType
    _max?: ReceitaMaxAggregateInputType
  }

  export type ReceitaGroupByOutputType = {
    id: number
    titulo: string
    descricao: string
    imagemUrl: string | null
    tempoPreparo: string
    dificuldade: $Enums.DificuldadeReceita
    rendimento: number
    createdAt: Date
    updatedAt: Date
    autorId: number
    categoriaId: number
    _count: ReceitaCountAggregateOutputType | null
    _avg: ReceitaAvgAggregateOutputType | null
    _sum: ReceitaSumAggregateOutputType | null
    _min: ReceitaMinAggregateOutputType | null
    _max: ReceitaMaxAggregateOutputType | null
  }

  type GetReceitaGroupByPayload<T extends ReceitaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceitaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceitaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceitaGroupByOutputType[P]>
            : GetScalarType<T[P], ReceitaGroupByOutputType[P]>
        }
      >
    >


  export type ReceitaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    imagemUrl?: boolean
    tempoPreparo?: boolean
    dificuldade?: boolean
    rendimento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    autorId?: boolean
    categoriaId?: boolean
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    comentarios?: boolean | Receita$comentariosArgs<ExtArgs>
    etiquetas?: boolean | Receita$etiquetasArgs<ExtArgs>
    favoritadoPor?: boolean | Receita$favoritadoPorArgs<ExtArgs>
    ingredientes?: boolean | Receita$ingredientesArgs<ExtArgs>
    _count?: boolean | ReceitaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receita"]>

  export type ReceitaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    imagemUrl?: boolean
    tempoPreparo?: boolean
    dificuldade?: boolean
    rendimento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    autorId?: boolean
    categoriaId?: boolean
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receita"]>

  export type ReceitaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    imagemUrl?: boolean
    tempoPreparo?: boolean
    dificuldade?: boolean
    rendimento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    autorId?: boolean
    categoriaId?: boolean
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receita"]>

  export type ReceitaSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    imagemUrl?: boolean
    tempoPreparo?: boolean
    dificuldade?: boolean
    rendimento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    autorId?: boolean
    categoriaId?: boolean
  }

  export type ReceitaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descricao" | "imagemUrl" | "tempoPreparo" | "dificuldade" | "rendimento" | "createdAt" | "updatedAt" | "autorId" | "categoriaId", ExtArgs["result"]["receita"]>
  export type ReceitaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    comentarios?: boolean | Receita$comentariosArgs<ExtArgs>
    etiquetas?: boolean | Receita$etiquetasArgs<ExtArgs>
    favoritadoPor?: boolean | Receita$favoritadoPorArgs<ExtArgs>
    ingredientes?: boolean | Receita$ingredientesArgs<ExtArgs>
    _count?: boolean | ReceitaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReceitaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }
  export type ReceitaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }

  export type $ReceitaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Receita"
    objects: {
      autor: Prisma.$UsuarioPayload<ExtArgs>
      categoria: Prisma.$CategoriaPayload<ExtArgs>
      comentarios: Prisma.$ComentarioPayload<ExtArgs>[]
      etiquetas: Prisma.$ReceitaEtiquetaPayload<ExtArgs>[]
      favoritadoPor: Prisma.$ReceitaFavoritaPayload<ExtArgs>[]
      ingredientes: Prisma.$ItemReceitaIngredientePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      descricao: string
      imagemUrl: string | null
      tempoPreparo: string
      dificuldade: $Enums.DificuldadeReceita
      rendimento: number
      createdAt: Date
      updatedAt: Date
      autorId: number
      categoriaId: number
    }, ExtArgs["result"]["receita"]>
    composites: {}
  }

  type ReceitaGetPayload<S extends boolean | null | undefined | ReceitaDefaultArgs> = $Result.GetResult<Prisma.$ReceitaPayload, S>

  type ReceitaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReceitaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReceitaCountAggregateInputType | true
    }

  export interface ReceitaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Receita'], meta: { name: 'Receita' } }
    /**
     * Find zero or one Receita that matches the filter.
     * @param {ReceitaFindUniqueArgs} args - Arguments to find a Receita
     * @example
     * // Get one Receita
     * const receita = await prisma.receita.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReceitaFindUniqueArgs>(args: SelectSubset<T, ReceitaFindUniqueArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Receita that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReceitaFindUniqueOrThrowArgs} args - Arguments to find a Receita
     * @example
     * // Get one Receita
     * const receita = await prisma.receita.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReceitaFindUniqueOrThrowArgs>(args: SelectSubset<T, ReceitaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receita that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaFindFirstArgs} args - Arguments to find a Receita
     * @example
     * // Get one Receita
     * const receita = await prisma.receita.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReceitaFindFirstArgs>(args?: SelectSubset<T, ReceitaFindFirstArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receita that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaFindFirstOrThrowArgs} args - Arguments to find a Receita
     * @example
     * // Get one Receita
     * const receita = await prisma.receita.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReceitaFindFirstOrThrowArgs>(args?: SelectSubset<T, ReceitaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Receitas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Receitas
     * const receitas = await prisma.receita.findMany()
     * 
     * // Get first 10 Receitas
     * const receitas = await prisma.receita.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const receitaWithIdOnly = await prisma.receita.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReceitaFindManyArgs>(args?: SelectSubset<T, ReceitaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Receita.
     * @param {ReceitaCreateArgs} args - Arguments to create a Receita.
     * @example
     * // Create one Receita
     * const Receita = await prisma.receita.create({
     *   data: {
     *     // ... data to create a Receita
     *   }
     * })
     * 
     */
    create<T extends ReceitaCreateArgs>(args: SelectSubset<T, ReceitaCreateArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Receitas.
     * @param {ReceitaCreateManyArgs} args - Arguments to create many Receitas.
     * @example
     * // Create many Receitas
     * const receita = await prisma.receita.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReceitaCreateManyArgs>(args?: SelectSubset<T, ReceitaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Receitas and returns the data saved in the database.
     * @param {ReceitaCreateManyAndReturnArgs} args - Arguments to create many Receitas.
     * @example
     * // Create many Receitas
     * const receita = await prisma.receita.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Receitas and only return the `id`
     * const receitaWithIdOnly = await prisma.receita.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReceitaCreateManyAndReturnArgs>(args?: SelectSubset<T, ReceitaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Receita.
     * @param {ReceitaDeleteArgs} args - Arguments to delete one Receita.
     * @example
     * // Delete one Receita
     * const Receita = await prisma.receita.delete({
     *   where: {
     *     // ... filter to delete one Receita
     *   }
     * })
     * 
     */
    delete<T extends ReceitaDeleteArgs>(args: SelectSubset<T, ReceitaDeleteArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Receita.
     * @param {ReceitaUpdateArgs} args - Arguments to update one Receita.
     * @example
     * // Update one Receita
     * const receita = await prisma.receita.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReceitaUpdateArgs>(args: SelectSubset<T, ReceitaUpdateArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Receitas.
     * @param {ReceitaDeleteManyArgs} args - Arguments to filter Receitas to delete.
     * @example
     * // Delete a few Receitas
     * const { count } = await prisma.receita.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReceitaDeleteManyArgs>(args?: SelectSubset<T, ReceitaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Receitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Receitas
     * const receita = await prisma.receita.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReceitaUpdateManyArgs>(args: SelectSubset<T, ReceitaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Receitas and returns the data updated in the database.
     * @param {ReceitaUpdateManyAndReturnArgs} args - Arguments to update many Receitas.
     * @example
     * // Update many Receitas
     * const receita = await prisma.receita.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Receitas and only return the `id`
     * const receitaWithIdOnly = await prisma.receita.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReceitaUpdateManyAndReturnArgs>(args: SelectSubset<T, ReceitaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Receita.
     * @param {ReceitaUpsertArgs} args - Arguments to update or create a Receita.
     * @example
     * // Update or create a Receita
     * const receita = await prisma.receita.upsert({
     *   create: {
     *     // ... data to create a Receita
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Receita we want to update
     *   }
     * })
     */
    upsert<T extends ReceitaUpsertArgs>(args: SelectSubset<T, ReceitaUpsertArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Receitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaCountArgs} args - Arguments to filter Receitas to count.
     * @example
     * // Count the number of Receitas
     * const count = await prisma.receita.count({
     *   where: {
     *     // ... the filter for the Receitas we want to count
     *   }
     * })
    **/
    count<T extends ReceitaCountArgs>(
      args?: Subset<T, ReceitaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceitaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Receita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReceitaAggregateArgs>(args: Subset<T, ReceitaAggregateArgs>): Prisma.PrismaPromise<GetReceitaAggregateType<T>>

    /**
     * Group by Receita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReceitaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReceitaGroupByArgs['orderBy'] }
        : { orderBy?: ReceitaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReceitaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceitaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Receita model
   */
  readonly fields: ReceitaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Receita.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReceitaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    autor<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comentarios<T extends Receita$comentariosArgs<ExtArgs> = {}>(args?: Subset<T, Receita$comentariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    etiquetas<T extends Receita$etiquetasArgs<ExtArgs> = {}>(args?: Subset<T, Receita$etiquetasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaEtiquetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoritadoPor<T extends Receita$favoritadoPorArgs<ExtArgs> = {}>(args?: Subset<T, Receita$favoritadoPorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaFavoritaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ingredientes<T extends Receita$ingredientesArgs<ExtArgs> = {}>(args?: Subset<T, Receita$ingredientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemReceitaIngredientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Receita model
   */
  interface ReceitaFieldRefs {
    readonly id: FieldRef<"Receita", 'Int'>
    readonly titulo: FieldRef<"Receita", 'String'>
    readonly descricao: FieldRef<"Receita", 'String'>
    readonly imagemUrl: FieldRef<"Receita", 'String'>
    readonly tempoPreparo: FieldRef<"Receita", 'String'>
    readonly dificuldade: FieldRef<"Receita", 'DificuldadeReceita'>
    readonly rendimento: FieldRef<"Receita", 'Int'>
    readonly createdAt: FieldRef<"Receita", 'DateTime'>
    readonly updatedAt: FieldRef<"Receita", 'DateTime'>
    readonly autorId: FieldRef<"Receita", 'Int'>
    readonly categoriaId: FieldRef<"Receita", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Receita findUnique
   */
  export type ReceitaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * Filter, which Receita to fetch.
     */
    where: ReceitaWhereUniqueInput
  }

  /**
   * Receita findUniqueOrThrow
   */
  export type ReceitaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * Filter, which Receita to fetch.
     */
    where: ReceitaWhereUniqueInput
  }

  /**
   * Receita findFirst
   */
  export type ReceitaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * Filter, which Receita to fetch.
     */
    where?: ReceitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receitas to fetch.
     */
    orderBy?: ReceitaOrderByWithRelationInput | ReceitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Receitas.
     */
    cursor?: ReceitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Receitas.
     */
    distinct?: ReceitaScalarFieldEnum | ReceitaScalarFieldEnum[]
  }

  /**
   * Receita findFirstOrThrow
   */
  export type ReceitaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * Filter, which Receita to fetch.
     */
    where?: ReceitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receitas to fetch.
     */
    orderBy?: ReceitaOrderByWithRelationInput | ReceitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Receitas.
     */
    cursor?: ReceitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Receitas.
     */
    distinct?: ReceitaScalarFieldEnum | ReceitaScalarFieldEnum[]
  }

  /**
   * Receita findMany
   */
  export type ReceitaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * Filter, which Receitas to fetch.
     */
    where?: ReceitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receitas to fetch.
     */
    orderBy?: ReceitaOrderByWithRelationInput | ReceitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Receitas.
     */
    cursor?: ReceitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receitas.
     */
    skip?: number
    distinct?: ReceitaScalarFieldEnum | ReceitaScalarFieldEnum[]
  }

  /**
   * Receita create
   */
  export type ReceitaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * The data needed to create a Receita.
     */
    data: XOR<ReceitaCreateInput, ReceitaUncheckedCreateInput>
  }

  /**
   * Receita createMany
   */
  export type ReceitaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Receitas.
     */
    data: ReceitaCreateManyInput | ReceitaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Receita createManyAndReturn
   */
  export type ReceitaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * The data used to create many Receitas.
     */
    data: ReceitaCreateManyInput | ReceitaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Receita update
   */
  export type ReceitaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * The data needed to update a Receita.
     */
    data: XOR<ReceitaUpdateInput, ReceitaUncheckedUpdateInput>
    /**
     * Choose, which Receita to update.
     */
    where: ReceitaWhereUniqueInput
  }

  /**
   * Receita updateMany
   */
  export type ReceitaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Receitas.
     */
    data: XOR<ReceitaUpdateManyMutationInput, ReceitaUncheckedUpdateManyInput>
    /**
     * Filter which Receitas to update
     */
    where?: ReceitaWhereInput
    /**
     * Limit how many Receitas to update.
     */
    limit?: number
  }

  /**
   * Receita updateManyAndReturn
   */
  export type ReceitaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * The data used to update Receitas.
     */
    data: XOR<ReceitaUpdateManyMutationInput, ReceitaUncheckedUpdateManyInput>
    /**
     * Filter which Receitas to update
     */
    where?: ReceitaWhereInput
    /**
     * Limit how many Receitas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Receita upsert
   */
  export type ReceitaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * The filter to search for the Receita to update in case it exists.
     */
    where: ReceitaWhereUniqueInput
    /**
     * In case the Receita found by the `where` argument doesn't exist, create a new Receita with this data.
     */
    create: XOR<ReceitaCreateInput, ReceitaUncheckedCreateInput>
    /**
     * In case the Receita was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReceitaUpdateInput, ReceitaUncheckedUpdateInput>
  }

  /**
   * Receita delete
   */
  export type ReceitaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * Filter which Receita to delete.
     */
    where: ReceitaWhereUniqueInput
  }

  /**
   * Receita deleteMany
   */
  export type ReceitaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Receitas to delete
     */
    where?: ReceitaWhereInput
    /**
     * Limit how many Receitas to delete.
     */
    limit?: number
  }

  /**
   * Receita.comentarios
   */
  export type Receita$comentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    cursor?: ComentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Receita.etiquetas
   */
  export type Receita$etiquetasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaEtiqueta
     */
    select?: ReceitaEtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaEtiqueta
     */
    omit?: ReceitaEtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaEtiquetaInclude<ExtArgs> | null
    where?: ReceitaEtiquetaWhereInput
    orderBy?: ReceitaEtiquetaOrderByWithRelationInput | ReceitaEtiquetaOrderByWithRelationInput[]
    cursor?: ReceitaEtiquetaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceitaEtiquetaScalarFieldEnum | ReceitaEtiquetaScalarFieldEnum[]
  }

  /**
   * Receita.favoritadoPor
   */
  export type Receita$favoritadoPorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaFavorita
     */
    select?: ReceitaFavoritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaFavorita
     */
    omit?: ReceitaFavoritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaFavoritaInclude<ExtArgs> | null
    where?: ReceitaFavoritaWhereInput
    orderBy?: ReceitaFavoritaOrderByWithRelationInput | ReceitaFavoritaOrderByWithRelationInput[]
    cursor?: ReceitaFavoritaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceitaFavoritaScalarFieldEnum | ReceitaFavoritaScalarFieldEnum[]
  }

  /**
   * Receita.ingredientes
   */
  export type Receita$ingredientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemReceitaIngrediente
     */
    select?: ItemReceitaIngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemReceitaIngrediente
     */
    omit?: ItemReceitaIngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemReceitaIngredienteInclude<ExtArgs> | null
    where?: ItemReceitaIngredienteWhereInput
    orderBy?: ItemReceitaIngredienteOrderByWithRelationInput | ItemReceitaIngredienteOrderByWithRelationInput[]
    cursor?: ItemReceitaIngredienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemReceitaIngredienteScalarFieldEnum | ItemReceitaIngredienteScalarFieldEnum[]
  }

  /**
   * Receita without action
   */
  export type ReceitaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
  }


  /**
   * Model ReceitaEtiqueta
   */

  export type AggregateReceitaEtiqueta = {
    _count: ReceitaEtiquetaCountAggregateOutputType | null
    _avg: ReceitaEtiquetaAvgAggregateOutputType | null
    _sum: ReceitaEtiquetaSumAggregateOutputType | null
    _min: ReceitaEtiquetaMinAggregateOutputType | null
    _max: ReceitaEtiquetaMaxAggregateOutputType | null
  }

  export type ReceitaEtiquetaAvgAggregateOutputType = {
    receitaId: number | null
    etiquetaId: number | null
  }

  export type ReceitaEtiquetaSumAggregateOutputType = {
    receitaId: number | null
    etiquetaId: number | null
  }

  export type ReceitaEtiquetaMinAggregateOutputType = {
    receitaId: number | null
    etiquetaId: number | null
    assignedAt: Date | null
  }

  export type ReceitaEtiquetaMaxAggregateOutputType = {
    receitaId: number | null
    etiquetaId: number | null
    assignedAt: Date | null
  }

  export type ReceitaEtiquetaCountAggregateOutputType = {
    receitaId: number
    etiquetaId: number
    assignedAt: number
    _all: number
  }


  export type ReceitaEtiquetaAvgAggregateInputType = {
    receitaId?: true
    etiquetaId?: true
  }

  export type ReceitaEtiquetaSumAggregateInputType = {
    receitaId?: true
    etiquetaId?: true
  }

  export type ReceitaEtiquetaMinAggregateInputType = {
    receitaId?: true
    etiquetaId?: true
    assignedAt?: true
  }

  export type ReceitaEtiquetaMaxAggregateInputType = {
    receitaId?: true
    etiquetaId?: true
    assignedAt?: true
  }

  export type ReceitaEtiquetaCountAggregateInputType = {
    receitaId?: true
    etiquetaId?: true
    assignedAt?: true
    _all?: true
  }

  export type ReceitaEtiquetaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReceitaEtiqueta to aggregate.
     */
    where?: ReceitaEtiquetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceitaEtiquetas to fetch.
     */
    orderBy?: ReceitaEtiquetaOrderByWithRelationInput | ReceitaEtiquetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReceitaEtiquetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceitaEtiquetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceitaEtiquetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReceitaEtiquetas
    **/
    _count?: true | ReceitaEtiquetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReceitaEtiquetaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReceitaEtiquetaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReceitaEtiquetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReceitaEtiquetaMaxAggregateInputType
  }

  export type GetReceitaEtiquetaAggregateType<T extends ReceitaEtiquetaAggregateArgs> = {
        [P in keyof T & keyof AggregateReceitaEtiqueta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceitaEtiqueta[P]>
      : GetScalarType<T[P], AggregateReceitaEtiqueta[P]>
  }




  export type ReceitaEtiquetaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceitaEtiquetaWhereInput
    orderBy?: ReceitaEtiquetaOrderByWithAggregationInput | ReceitaEtiquetaOrderByWithAggregationInput[]
    by: ReceitaEtiquetaScalarFieldEnum[] | ReceitaEtiquetaScalarFieldEnum
    having?: ReceitaEtiquetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceitaEtiquetaCountAggregateInputType | true
    _avg?: ReceitaEtiquetaAvgAggregateInputType
    _sum?: ReceitaEtiquetaSumAggregateInputType
    _min?: ReceitaEtiquetaMinAggregateInputType
    _max?: ReceitaEtiquetaMaxAggregateInputType
  }

  export type ReceitaEtiquetaGroupByOutputType = {
    receitaId: number
    etiquetaId: number
    assignedAt: Date
    _count: ReceitaEtiquetaCountAggregateOutputType | null
    _avg: ReceitaEtiquetaAvgAggregateOutputType | null
    _sum: ReceitaEtiquetaSumAggregateOutputType | null
    _min: ReceitaEtiquetaMinAggregateOutputType | null
    _max: ReceitaEtiquetaMaxAggregateOutputType | null
  }

  type GetReceitaEtiquetaGroupByPayload<T extends ReceitaEtiquetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceitaEtiquetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceitaEtiquetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceitaEtiquetaGroupByOutputType[P]>
            : GetScalarType<T[P], ReceitaEtiquetaGroupByOutputType[P]>
        }
      >
    >


  export type ReceitaEtiquetaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    receitaId?: boolean
    etiquetaId?: boolean
    assignedAt?: boolean
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
    etiqueta?: boolean | EtiquetaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receitaEtiqueta"]>

  export type ReceitaEtiquetaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    receitaId?: boolean
    etiquetaId?: boolean
    assignedAt?: boolean
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
    etiqueta?: boolean | EtiquetaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receitaEtiqueta"]>

  export type ReceitaEtiquetaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    receitaId?: boolean
    etiquetaId?: boolean
    assignedAt?: boolean
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
    etiqueta?: boolean | EtiquetaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receitaEtiqueta"]>

  export type ReceitaEtiquetaSelectScalar = {
    receitaId?: boolean
    etiquetaId?: boolean
    assignedAt?: boolean
  }

  export type ReceitaEtiquetaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"receitaId" | "etiquetaId" | "assignedAt", ExtArgs["result"]["receitaEtiqueta"]>
  export type ReceitaEtiquetaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
    etiqueta?: boolean | EtiquetaDefaultArgs<ExtArgs>
  }
  export type ReceitaEtiquetaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
    etiqueta?: boolean | EtiquetaDefaultArgs<ExtArgs>
  }
  export type ReceitaEtiquetaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
    etiqueta?: boolean | EtiquetaDefaultArgs<ExtArgs>
  }

  export type $ReceitaEtiquetaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReceitaEtiqueta"
    objects: {
      receita: Prisma.$ReceitaPayload<ExtArgs>
      etiqueta: Prisma.$EtiquetaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      receitaId: number
      etiquetaId: number
      assignedAt: Date
    }, ExtArgs["result"]["receitaEtiqueta"]>
    composites: {}
  }

  type ReceitaEtiquetaGetPayload<S extends boolean | null | undefined | ReceitaEtiquetaDefaultArgs> = $Result.GetResult<Prisma.$ReceitaEtiquetaPayload, S>

  type ReceitaEtiquetaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReceitaEtiquetaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReceitaEtiquetaCountAggregateInputType | true
    }

  export interface ReceitaEtiquetaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReceitaEtiqueta'], meta: { name: 'ReceitaEtiqueta' } }
    /**
     * Find zero or one ReceitaEtiqueta that matches the filter.
     * @param {ReceitaEtiquetaFindUniqueArgs} args - Arguments to find a ReceitaEtiqueta
     * @example
     * // Get one ReceitaEtiqueta
     * const receitaEtiqueta = await prisma.receitaEtiqueta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReceitaEtiquetaFindUniqueArgs>(args: SelectSubset<T, ReceitaEtiquetaFindUniqueArgs<ExtArgs>>): Prisma__ReceitaEtiquetaClient<$Result.GetResult<Prisma.$ReceitaEtiquetaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReceitaEtiqueta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReceitaEtiquetaFindUniqueOrThrowArgs} args - Arguments to find a ReceitaEtiqueta
     * @example
     * // Get one ReceitaEtiqueta
     * const receitaEtiqueta = await prisma.receitaEtiqueta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReceitaEtiquetaFindUniqueOrThrowArgs>(args: SelectSubset<T, ReceitaEtiquetaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReceitaEtiquetaClient<$Result.GetResult<Prisma.$ReceitaEtiquetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReceitaEtiqueta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaEtiquetaFindFirstArgs} args - Arguments to find a ReceitaEtiqueta
     * @example
     * // Get one ReceitaEtiqueta
     * const receitaEtiqueta = await prisma.receitaEtiqueta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReceitaEtiquetaFindFirstArgs>(args?: SelectSubset<T, ReceitaEtiquetaFindFirstArgs<ExtArgs>>): Prisma__ReceitaEtiquetaClient<$Result.GetResult<Prisma.$ReceitaEtiquetaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReceitaEtiqueta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaEtiquetaFindFirstOrThrowArgs} args - Arguments to find a ReceitaEtiqueta
     * @example
     * // Get one ReceitaEtiqueta
     * const receitaEtiqueta = await prisma.receitaEtiqueta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReceitaEtiquetaFindFirstOrThrowArgs>(args?: SelectSubset<T, ReceitaEtiquetaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReceitaEtiquetaClient<$Result.GetResult<Prisma.$ReceitaEtiquetaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReceitaEtiquetas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaEtiquetaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReceitaEtiquetas
     * const receitaEtiquetas = await prisma.receitaEtiqueta.findMany()
     * 
     * // Get first 10 ReceitaEtiquetas
     * const receitaEtiquetas = await prisma.receitaEtiqueta.findMany({ take: 10 })
     * 
     * // Only select the `receitaId`
     * const receitaEtiquetaWithReceitaIdOnly = await prisma.receitaEtiqueta.findMany({ select: { receitaId: true } })
     * 
     */
    findMany<T extends ReceitaEtiquetaFindManyArgs>(args?: SelectSubset<T, ReceitaEtiquetaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaEtiquetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReceitaEtiqueta.
     * @param {ReceitaEtiquetaCreateArgs} args - Arguments to create a ReceitaEtiqueta.
     * @example
     * // Create one ReceitaEtiqueta
     * const ReceitaEtiqueta = await prisma.receitaEtiqueta.create({
     *   data: {
     *     // ... data to create a ReceitaEtiqueta
     *   }
     * })
     * 
     */
    create<T extends ReceitaEtiquetaCreateArgs>(args: SelectSubset<T, ReceitaEtiquetaCreateArgs<ExtArgs>>): Prisma__ReceitaEtiquetaClient<$Result.GetResult<Prisma.$ReceitaEtiquetaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReceitaEtiquetas.
     * @param {ReceitaEtiquetaCreateManyArgs} args - Arguments to create many ReceitaEtiquetas.
     * @example
     * // Create many ReceitaEtiquetas
     * const receitaEtiqueta = await prisma.receitaEtiqueta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReceitaEtiquetaCreateManyArgs>(args?: SelectSubset<T, ReceitaEtiquetaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReceitaEtiquetas and returns the data saved in the database.
     * @param {ReceitaEtiquetaCreateManyAndReturnArgs} args - Arguments to create many ReceitaEtiquetas.
     * @example
     * // Create many ReceitaEtiquetas
     * const receitaEtiqueta = await prisma.receitaEtiqueta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReceitaEtiquetas and only return the `receitaId`
     * const receitaEtiquetaWithReceitaIdOnly = await prisma.receitaEtiqueta.createManyAndReturn({
     *   select: { receitaId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReceitaEtiquetaCreateManyAndReturnArgs>(args?: SelectSubset<T, ReceitaEtiquetaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaEtiquetaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReceitaEtiqueta.
     * @param {ReceitaEtiquetaDeleteArgs} args - Arguments to delete one ReceitaEtiqueta.
     * @example
     * // Delete one ReceitaEtiqueta
     * const ReceitaEtiqueta = await prisma.receitaEtiqueta.delete({
     *   where: {
     *     // ... filter to delete one ReceitaEtiqueta
     *   }
     * })
     * 
     */
    delete<T extends ReceitaEtiquetaDeleteArgs>(args: SelectSubset<T, ReceitaEtiquetaDeleteArgs<ExtArgs>>): Prisma__ReceitaEtiquetaClient<$Result.GetResult<Prisma.$ReceitaEtiquetaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReceitaEtiqueta.
     * @param {ReceitaEtiquetaUpdateArgs} args - Arguments to update one ReceitaEtiqueta.
     * @example
     * // Update one ReceitaEtiqueta
     * const receitaEtiqueta = await prisma.receitaEtiqueta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReceitaEtiquetaUpdateArgs>(args: SelectSubset<T, ReceitaEtiquetaUpdateArgs<ExtArgs>>): Prisma__ReceitaEtiquetaClient<$Result.GetResult<Prisma.$ReceitaEtiquetaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReceitaEtiquetas.
     * @param {ReceitaEtiquetaDeleteManyArgs} args - Arguments to filter ReceitaEtiquetas to delete.
     * @example
     * // Delete a few ReceitaEtiquetas
     * const { count } = await prisma.receitaEtiqueta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReceitaEtiquetaDeleteManyArgs>(args?: SelectSubset<T, ReceitaEtiquetaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReceitaEtiquetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaEtiquetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReceitaEtiquetas
     * const receitaEtiqueta = await prisma.receitaEtiqueta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReceitaEtiquetaUpdateManyArgs>(args: SelectSubset<T, ReceitaEtiquetaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReceitaEtiquetas and returns the data updated in the database.
     * @param {ReceitaEtiquetaUpdateManyAndReturnArgs} args - Arguments to update many ReceitaEtiquetas.
     * @example
     * // Update many ReceitaEtiquetas
     * const receitaEtiqueta = await prisma.receitaEtiqueta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReceitaEtiquetas and only return the `receitaId`
     * const receitaEtiquetaWithReceitaIdOnly = await prisma.receitaEtiqueta.updateManyAndReturn({
     *   select: { receitaId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReceitaEtiquetaUpdateManyAndReturnArgs>(args: SelectSubset<T, ReceitaEtiquetaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaEtiquetaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReceitaEtiqueta.
     * @param {ReceitaEtiquetaUpsertArgs} args - Arguments to update or create a ReceitaEtiqueta.
     * @example
     * // Update or create a ReceitaEtiqueta
     * const receitaEtiqueta = await prisma.receitaEtiqueta.upsert({
     *   create: {
     *     // ... data to create a ReceitaEtiqueta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReceitaEtiqueta we want to update
     *   }
     * })
     */
    upsert<T extends ReceitaEtiquetaUpsertArgs>(args: SelectSubset<T, ReceitaEtiquetaUpsertArgs<ExtArgs>>): Prisma__ReceitaEtiquetaClient<$Result.GetResult<Prisma.$ReceitaEtiquetaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReceitaEtiquetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaEtiquetaCountArgs} args - Arguments to filter ReceitaEtiquetas to count.
     * @example
     * // Count the number of ReceitaEtiquetas
     * const count = await prisma.receitaEtiqueta.count({
     *   where: {
     *     // ... the filter for the ReceitaEtiquetas we want to count
     *   }
     * })
    **/
    count<T extends ReceitaEtiquetaCountArgs>(
      args?: Subset<T, ReceitaEtiquetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceitaEtiquetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReceitaEtiqueta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaEtiquetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReceitaEtiquetaAggregateArgs>(args: Subset<T, ReceitaEtiquetaAggregateArgs>): Prisma.PrismaPromise<GetReceitaEtiquetaAggregateType<T>>

    /**
     * Group by ReceitaEtiqueta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaEtiquetaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReceitaEtiquetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReceitaEtiquetaGroupByArgs['orderBy'] }
        : { orderBy?: ReceitaEtiquetaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReceitaEtiquetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceitaEtiquetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReceitaEtiqueta model
   */
  readonly fields: ReceitaEtiquetaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReceitaEtiqueta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReceitaEtiquetaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receita<T extends ReceitaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReceitaDefaultArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    etiqueta<T extends EtiquetaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EtiquetaDefaultArgs<ExtArgs>>): Prisma__EtiquetaClient<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReceitaEtiqueta model
   */
  interface ReceitaEtiquetaFieldRefs {
    readonly receitaId: FieldRef<"ReceitaEtiqueta", 'Int'>
    readonly etiquetaId: FieldRef<"ReceitaEtiqueta", 'Int'>
    readonly assignedAt: FieldRef<"ReceitaEtiqueta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReceitaEtiqueta findUnique
   */
  export type ReceitaEtiquetaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaEtiqueta
     */
    select?: ReceitaEtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaEtiqueta
     */
    omit?: ReceitaEtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaEtiquetaInclude<ExtArgs> | null
    /**
     * Filter, which ReceitaEtiqueta to fetch.
     */
    where: ReceitaEtiquetaWhereUniqueInput
  }

  /**
   * ReceitaEtiqueta findUniqueOrThrow
   */
  export type ReceitaEtiquetaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaEtiqueta
     */
    select?: ReceitaEtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaEtiqueta
     */
    omit?: ReceitaEtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaEtiquetaInclude<ExtArgs> | null
    /**
     * Filter, which ReceitaEtiqueta to fetch.
     */
    where: ReceitaEtiquetaWhereUniqueInput
  }

  /**
   * ReceitaEtiqueta findFirst
   */
  export type ReceitaEtiquetaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaEtiqueta
     */
    select?: ReceitaEtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaEtiqueta
     */
    omit?: ReceitaEtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaEtiquetaInclude<ExtArgs> | null
    /**
     * Filter, which ReceitaEtiqueta to fetch.
     */
    where?: ReceitaEtiquetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceitaEtiquetas to fetch.
     */
    orderBy?: ReceitaEtiquetaOrderByWithRelationInput | ReceitaEtiquetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReceitaEtiquetas.
     */
    cursor?: ReceitaEtiquetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceitaEtiquetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceitaEtiquetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceitaEtiquetas.
     */
    distinct?: ReceitaEtiquetaScalarFieldEnum | ReceitaEtiquetaScalarFieldEnum[]
  }

  /**
   * ReceitaEtiqueta findFirstOrThrow
   */
  export type ReceitaEtiquetaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaEtiqueta
     */
    select?: ReceitaEtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaEtiqueta
     */
    omit?: ReceitaEtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaEtiquetaInclude<ExtArgs> | null
    /**
     * Filter, which ReceitaEtiqueta to fetch.
     */
    where?: ReceitaEtiquetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceitaEtiquetas to fetch.
     */
    orderBy?: ReceitaEtiquetaOrderByWithRelationInput | ReceitaEtiquetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReceitaEtiquetas.
     */
    cursor?: ReceitaEtiquetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceitaEtiquetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceitaEtiquetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceitaEtiquetas.
     */
    distinct?: ReceitaEtiquetaScalarFieldEnum | ReceitaEtiquetaScalarFieldEnum[]
  }

  /**
   * ReceitaEtiqueta findMany
   */
  export type ReceitaEtiquetaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaEtiqueta
     */
    select?: ReceitaEtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaEtiqueta
     */
    omit?: ReceitaEtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaEtiquetaInclude<ExtArgs> | null
    /**
     * Filter, which ReceitaEtiquetas to fetch.
     */
    where?: ReceitaEtiquetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceitaEtiquetas to fetch.
     */
    orderBy?: ReceitaEtiquetaOrderByWithRelationInput | ReceitaEtiquetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReceitaEtiquetas.
     */
    cursor?: ReceitaEtiquetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceitaEtiquetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceitaEtiquetas.
     */
    skip?: number
    distinct?: ReceitaEtiquetaScalarFieldEnum | ReceitaEtiquetaScalarFieldEnum[]
  }

  /**
   * ReceitaEtiqueta create
   */
  export type ReceitaEtiquetaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaEtiqueta
     */
    select?: ReceitaEtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaEtiqueta
     */
    omit?: ReceitaEtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaEtiquetaInclude<ExtArgs> | null
    /**
     * The data needed to create a ReceitaEtiqueta.
     */
    data: XOR<ReceitaEtiquetaCreateInput, ReceitaEtiquetaUncheckedCreateInput>
  }

  /**
   * ReceitaEtiqueta createMany
   */
  export type ReceitaEtiquetaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReceitaEtiquetas.
     */
    data: ReceitaEtiquetaCreateManyInput | ReceitaEtiquetaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReceitaEtiqueta createManyAndReturn
   */
  export type ReceitaEtiquetaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaEtiqueta
     */
    select?: ReceitaEtiquetaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaEtiqueta
     */
    omit?: ReceitaEtiquetaOmit<ExtArgs> | null
    /**
     * The data used to create many ReceitaEtiquetas.
     */
    data: ReceitaEtiquetaCreateManyInput | ReceitaEtiquetaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaEtiquetaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReceitaEtiqueta update
   */
  export type ReceitaEtiquetaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaEtiqueta
     */
    select?: ReceitaEtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaEtiqueta
     */
    omit?: ReceitaEtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaEtiquetaInclude<ExtArgs> | null
    /**
     * The data needed to update a ReceitaEtiqueta.
     */
    data: XOR<ReceitaEtiquetaUpdateInput, ReceitaEtiquetaUncheckedUpdateInput>
    /**
     * Choose, which ReceitaEtiqueta to update.
     */
    where: ReceitaEtiquetaWhereUniqueInput
  }

  /**
   * ReceitaEtiqueta updateMany
   */
  export type ReceitaEtiquetaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReceitaEtiquetas.
     */
    data: XOR<ReceitaEtiquetaUpdateManyMutationInput, ReceitaEtiquetaUncheckedUpdateManyInput>
    /**
     * Filter which ReceitaEtiquetas to update
     */
    where?: ReceitaEtiquetaWhereInput
    /**
     * Limit how many ReceitaEtiquetas to update.
     */
    limit?: number
  }

  /**
   * ReceitaEtiqueta updateManyAndReturn
   */
  export type ReceitaEtiquetaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaEtiqueta
     */
    select?: ReceitaEtiquetaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaEtiqueta
     */
    omit?: ReceitaEtiquetaOmit<ExtArgs> | null
    /**
     * The data used to update ReceitaEtiquetas.
     */
    data: XOR<ReceitaEtiquetaUpdateManyMutationInput, ReceitaEtiquetaUncheckedUpdateManyInput>
    /**
     * Filter which ReceitaEtiquetas to update
     */
    where?: ReceitaEtiquetaWhereInput
    /**
     * Limit how many ReceitaEtiquetas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaEtiquetaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReceitaEtiqueta upsert
   */
  export type ReceitaEtiquetaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaEtiqueta
     */
    select?: ReceitaEtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaEtiqueta
     */
    omit?: ReceitaEtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaEtiquetaInclude<ExtArgs> | null
    /**
     * The filter to search for the ReceitaEtiqueta to update in case it exists.
     */
    where: ReceitaEtiquetaWhereUniqueInput
    /**
     * In case the ReceitaEtiqueta found by the `where` argument doesn't exist, create a new ReceitaEtiqueta with this data.
     */
    create: XOR<ReceitaEtiquetaCreateInput, ReceitaEtiquetaUncheckedCreateInput>
    /**
     * In case the ReceitaEtiqueta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReceitaEtiquetaUpdateInput, ReceitaEtiquetaUncheckedUpdateInput>
  }

  /**
   * ReceitaEtiqueta delete
   */
  export type ReceitaEtiquetaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaEtiqueta
     */
    select?: ReceitaEtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaEtiqueta
     */
    omit?: ReceitaEtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaEtiquetaInclude<ExtArgs> | null
    /**
     * Filter which ReceitaEtiqueta to delete.
     */
    where: ReceitaEtiquetaWhereUniqueInput
  }

  /**
   * ReceitaEtiqueta deleteMany
   */
  export type ReceitaEtiquetaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReceitaEtiquetas to delete
     */
    where?: ReceitaEtiquetaWhereInput
    /**
     * Limit how many ReceitaEtiquetas to delete.
     */
    limit?: number
  }

  /**
   * ReceitaEtiqueta without action
   */
  export type ReceitaEtiquetaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaEtiqueta
     */
    select?: ReceitaEtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaEtiqueta
     */
    omit?: ReceitaEtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaEtiquetaInclude<ExtArgs> | null
  }


  /**
   * Model Comentario
   */

  export type AggregateComentario = {
    _count: ComentarioCountAggregateOutputType | null
    _avg: ComentarioAvgAggregateOutputType | null
    _sum: ComentarioSumAggregateOutputType | null
    _min: ComentarioMinAggregateOutputType | null
    _max: ComentarioMaxAggregateOutputType | null
  }

  export type ComentarioAvgAggregateOutputType = {
    id: number | null
    autorId: number | null
    receitaId: number | null
  }

  export type ComentarioSumAggregateOutputType = {
    id: number | null
    autorId: number | null
    receitaId: number | null
  }

  export type ComentarioMinAggregateOutputType = {
    id: number | null
    texto: string | null
    createdAt: Date | null
    updatedAt: Date | null
    autorId: number | null
    receitaId: number | null
  }

  export type ComentarioMaxAggregateOutputType = {
    id: number | null
    texto: string | null
    createdAt: Date | null
    updatedAt: Date | null
    autorId: number | null
    receitaId: number | null
  }

  export type ComentarioCountAggregateOutputType = {
    id: number
    texto: number
    createdAt: number
    updatedAt: number
    autorId: number
    receitaId: number
    _all: number
  }


  export type ComentarioAvgAggregateInputType = {
    id?: true
    autorId?: true
    receitaId?: true
  }

  export type ComentarioSumAggregateInputType = {
    id?: true
    autorId?: true
    receitaId?: true
  }

  export type ComentarioMinAggregateInputType = {
    id?: true
    texto?: true
    createdAt?: true
    updatedAt?: true
    autorId?: true
    receitaId?: true
  }

  export type ComentarioMaxAggregateInputType = {
    id?: true
    texto?: true
    createdAt?: true
    updatedAt?: true
    autorId?: true
    receitaId?: true
  }

  export type ComentarioCountAggregateInputType = {
    id?: true
    texto?: true
    createdAt?: true
    updatedAt?: true
    autorId?: true
    receitaId?: true
    _all?: true
  }

  export type ComentarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comentario to aggregate.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comentarios
    **/
    _count?: true | ComentarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComentarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComentarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComentarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComentarioMaxAggregateInputType
  }

  export type GetComentarioAggregateType<T extends ComentarioAggregateArgs> = {
        [P in keyof T & keyof AggregateComentario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComentario[P]>
      : GetScalarType<T[P], AggregateComentario[P]>
  }




  export type ComentarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithAggregationInput | ComentarioOrderByWithAggregationInput[]
    by: ComentarioScalarFieldEnum[] | ComentarioScalarFieldEnum
    having?: ComentarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComentarioCountAggregateInputType | true
    _avg?: ComentarioAvgAggregateInputType
    _sum?: ComentarioSumAggregateInputType
    _min?: ComentarioMinAggregateInputType
    _max?: ComentarioMaxAggregateInputType
  }

  export type ComentarioGroupByOutputType = {
    id: number
    texto: string
    createdAt: Date
    updatedAt: Date
    autorId: number
    receitaId: number
    _count: ComentarioCountAggregateOutputType | null
    _avg: ComentarioAvgAggregateOutputType | null
    _sum: ComentarioSumAggregateOutputType | null
    _min: ComentarioMinAggregateOutputType | null
    _max: ComentarioMaxAggregateOutputType | null
  }

  type GetComentarioGroupByPayload<T extends ComentarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComentarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComentarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComentarioGroupByOutputType[P]>
            : GetScalarType<T[P], ComentarioGroupByOutputType[P]>
        }
      >
    >


  export type ComentarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    texto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    autorId?: boolean
    receitaId?: boolean
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comentario"]>

  export type ComentarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    texto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    autorId?: boolean
    receitaId?: boolean
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comentario"]>

  export type ComentarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    texto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    autorId?: boolean
    receitaId?: boolean
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comentario"]>

  export type ComentarioSelectScalar = {
    id?: boolean
    texto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    autorId?: boolean
    receitaId?: boolean
  }

  export type ComentarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "texto" | "createdAt" | "updatedAt" | "autorId" | "receitaId", ExtArgs["result"]["comentario"]>
  export type ComentarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
  }
  export type ComentarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
  }
  export type ComentarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
  }

  export type $ComentarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comentario"
    objects: {
      autor: Prisma.$UsuarioPayload<ExtArgs>
      receita: Prisma.$ReceitaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      texto: string
      createdAt: Date
      updatedAt: Date
      autorId: number
      receitaId: number
    }, ExtArgs["result"]["comentario"]>
    composites: {}
  }

  type ComentarioGetPayload<S extends boolean | null | undefined | ComentarioDefaultArgs> = $Result.GetResult<Prisma.$ComentarioPayload, S>

  type ComentarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComentarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComentarioCountAggregateInputType | true
    }

  export interface ComentarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comentario'], meta: { name: 'Comentario' } }
    /**
     * Find zero or one Comentario that matches the filter.
     * @param {ComentarioFindUniqueArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComentarioFindUniqueArgs>(args: SelectSubset<T, ComentarioFindUniqueArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comentario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComentarioFindUniqueOrThrowArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComentarioFindUniqueOrThrowArgs>(args: SelectSubset<T, ComentarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comentario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindFirstArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComentarioFindFirstArgs>(args?: SelectSubset<T, ComentarioFindFirstArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comentario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindFirstOrThrowArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComentarioFindFirstOrThrowArgs>(args?: SelectSubset<T, ComentarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comentarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comentarios
     * const comentarios = await prisma.comentario.findMany()
     * 
     * // Get first 10 Comentarios
     * const comentarios = await prisma.comentario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comentarioWithIdOnly = await prisma.comentario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComentarioFindManyArgs>(args?: SelectSubset<T, ComentarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comentario.
     * @param {ComentarioCreateArgs} args - Arguments to create a Comentario.
     * @example
     * // Create one Comentario
     * const Comentario = await prisma.comentario.create({
     *   data: {
     *     // ... data to create a Comentario
     *   }
     * })
     * 
     */
    create<T extends ComentarioCreateArgs>(args: SelectSubset<T, ComentarioCreateArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comentarios.
     * @param {ComentarioCreateManyArgs} args - Arguments to create many Comentarios.
     * @example
     * // Create many Comentarios
     * const comentario = await prisma.comentario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComentarioCreateManyArgs>(args?: SelectSubset<T, ComentarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comentarios and returns the data saved in the database.
     * @param {ComentarioCreateManyAndReturnArgs} args - Arguments to create many Comentarios.
     * @example
     * // Create many Comentarios
     * const comentario = await prisma.comentario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comentarios and only return the `id`
     * const comentarioWithIdOnly = await prisma.comentario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComentarioCreateManyAndReturnArgs>(args?: SelectSubset<T, ComentarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comentario.
     * @param {ComentarioDeleteArgs} args - Arguments to delete one Comentario.
     * @example
     * // Delete one Comentario
     * const Comentario = await prisma.comentario.delete({
     *   where: {
     *     // ... filter to delete one Comentario
     *   }
     * })
     * 
     */
    delete<T extends ComentarioDeleteArgs>(args: SelectSubset<T, ComentarioDeleteArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comentario.
     * @param {ComentarioUpdateArgs} args - Arguments to update one Comentario.
     * @example
     * // Update one Comentario
     * const comentario = await prisma.comentario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComentarioUpdateArgs>(args: SelectSubset<T, ComentarioUpdateArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comentarios.
     * @param {ComentarioDeleteManyArgs} args - Arguments to filter Comentarios to delete.
     * @example
     * // Delete a few Comentarios
     * const { count } = await prisma.comentario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComentarioDeleteManyArgs>(args?: SelectSubset<T, ComentarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comentarios
     * const comentario = await prisma.comentario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComentarioUpdateManyArgs>(args: SelectSubset<T, ComentarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comentarios and returns the data updated in the database.
     * @param {ComentarioUpdateManyAndReturnArgs} args - Arguments to update many Comentarios.
     * @example
     * // Update many Comentarios
     * const comentario = await prisma.comentario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comentarios and only return the `id`
     * const comentarioWithIdOnly = await prisma.comentario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ComentarioUpdateManyAndReturnArgs>(args: SelectSubset<T, ComentarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comentario.
     * @param {ComentarioUpsertArgs} args - Arguments to update or create a Comentario.
     * @example
     * // Update or create a Comentario
     * const comentario = await prisma.comentario.upsert({
     *   create: {
     *     // ... data to create a Comentario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comentario we want to update
     *   }
     * })
     */
    upsert<T extends ComentarioUpsertArgs>(args: SelectSubset<T, ComentarioUpsertArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioCountArgs} args - Arguments to filter Comentarios to count.
     * @example
     * // Count the number of Comentarios
     * const count = await prisma.comentario.count({
     *   where: {
     *     // ... the filter for the Comentarios we want to count
     *   }
     * })
    **/
    count<T extends ComentarioCountArgs>(
      args?: Subset<T, ComentarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComentarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComentarioAggregateArgs>(args: Subset<T, ComentarioAggregateArgs>): Prisma.PrismaPromise<GetComentarioAggregateType<T>>

    /**
     * Group by Comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComentarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComentarioGroupByArgs['orderBy'] }
        : { orderBy?: ComentarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComentarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComentarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comentario model
   */
  readonly fields: ComentarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comentario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComentarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    autor<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receita<T extends ReceitaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReceitaDefaultArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comentario model
   */
  interface ComentarioFieldRefs {
    readonly id: FieldRef<"Comentario", 'Int'>
    readonly texto: FieldRef<"Comentario", 'String'>
    readonly createdAt: FieldRef<"Comentario", 'DateTime'>
    readonly updatedAt: FieldRef<"Comentario", 'DateTime'>
    readonly autorId: FieldRef<"Comentario", 'Int'>
    readonly receitaId: FieldRef<"Comentario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Comentario findUnique
   */
  export type ComentarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario findUniqueOrThrow
   */
  export type ComentarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario findFirst
   */
  export type ComentarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario findFirstOrThrow
   */
  export type ComentarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario findMany
   */
  export type ComentarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentarios to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario create
   */
  export type ComentarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Comentario.
     */
    data: XOR<ComentarioCreateInput, ComentarioUncheckedCreateInput>
  }

  /**
   * Comentario createMany
   */
  export type ComentarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comentarios.
     */
    data: ComentarioCreateManyInput | ComentarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comentario createManyAndReturn
   */
  export type ComentarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * The data used to create many Comentarios.
     */
    data: ComentarioCreateManyInput | ComentarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comentario update
   */
  export type ComentarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Comentario.
     */
    data: XOR<ComentarioUpdateInput, ComentarioUncheckedUpdateInput>
    /**
     * Choose, which Comentario to update.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario updateMany
   */
  export type ComentarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comentarios.
     */
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyInput>
    /**
     * Filter which Comentarios to update
     */
    where?: ComentarioWhereInput
    /**
     * Limit how many Comentarios to update.
     */
    limit?: number
  }

  /**
   * Comentario updateManyAndReturn
   */
  export type ComentarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * The data used to update Comentarios.
     */
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyInput>
    /**
     * Filter which Comentarios to update
     */
    where?: ComentarioWhereInput
    /**
     * Limit how many Comentarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comentario upsert
   */
  export type ComentarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Comentario to update in case it exists.
     */
    where: ComentarioWhereUniqueInput
    /**
     * In case the Comentario found by the `where` argument doesn't exist, create a new Comentario with this data.
     */
    create: XOR<ComentarioCreateInput, ComentarioUncheckedCreateInput>
    /**
     * In case the Comentario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComentarioUpdateInput, ComentarioUncheckedUpdateInput>
  }

  /**
   * Comentario delete
   */
  export type ComentarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter which Comentario to delete.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario deleteMany
   */
  export type ComentarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comentarios to delete
     */
    where?: ComentarioWhereInput
    /**
     * Limit how many Comentarios to delete.
     */
    limit?: number
  }

  /**
   * Comentario without action
   */
  export type ComentarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
  }


  /**
   * Model ReceitaFavorita
   */

  export type AggregateReceitaFavorita = {
    _count: ReceitaFavoritaCountAggregateOutputType | null
    _avg: ReceitaFavoritaAvgAggregateOutputType | null
    _sum: ReceitaFavoritaSumAggregateOutputType | null
    _min: ReceitaFavoritaMinAggregateOutputType | null
    _max: ReceitaFavoritaMaxAggregateOutputType | null
  }

  export type ReceitaFavoritaAvgAggregateOutputType = {
    usuarioId: number | null
    receitaId: number | null
  }

  export type ReceitaFavoritaSumAggregateOutputType = {
    usuarioId: number | null
    receitaId: number | null
  }

  export type ReceitaFavoritaMinAggregateOutputType = {
    usuarioId: number | null
    receitaId: number | null
    favoritedAt: Date | null
  }

  export type ReceitaFavoritaMaxAggregateOutputType = {
    usuarioId: number | null
    receitaId: number | null
    favoritedAt: Date | null
  }

  export type ReceitaFavoritaCountAggregateOutputType = {
    usuarioId: number
    receitaId: number
    favoritedAt: number
    _all: number
  }


  export type ReceitaFavoritaAvgAggregateInputType = {
    usuarioId?: true
    receitaId?: true
  }

  export type ReceitaFavoritaSumAggregateInputType = {
    usuarioId?: true
    receitaId?: true
  }

  export type ReceitaFavoritaMinAggregateInputType = {
    usuarioId?: true
    receitaId?: true
    favoritedAt?: true
  }

  export type ReceitaFavoritaMaxAggregateInputType = {
    usuarioId?: true
    receitaId?: true
    favoritedAt?: true
  }

  export type ReceitaFavoritaCountAggregateInputType = {
    usuarioId?: true
    receitaId?: true
    favoritedAt?: true
    _all?: true
  }

  export type ReceitaFavoritaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReceitaFavorita to aggregate.
     */
    where?: ReceitaFavoritaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceitaFavoritas to fetch.
     */
    orderBy?: ReceitaFavoritaOrderByWithRelationInput | ReceitaFavoritaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReceitaFavoritaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceitaFavoritas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceitaFavoritas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReceitaFavoritas
    **/
    _count?: true | ReceitaFavoritaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReceitaFavoritaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReceitaFavoritaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReceitaFavoritaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReceitaFavoritaMaxAggregateInputType
  }

  export type GetReceitaFavoritaAggregateType<T extends ReceitaFavoritaAggregateArgs> = {
        [P in keyof T & keyof AggregateReceitaFavorita]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceitaFavorita[P]>
      : GetScalarType<T[P], AggregateReceitaFavorita[P]>
  }




  export type ReceitaFavoritaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceitaFavoritaWhereInput
    orderBy?: ReceitaFavoritaOrderByWithAggregationInput | ReceitaFavoritaOrderByWithAggregationInput[]
    by: ReceitaFavoritaScalarFieldEnum[] | ReceitaFavoritaScalarFieldEnum
    having?: ReceitaFavoritaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceitaFavoritaCountAggregateInputType | true
    _avg?: ReceitaFavoritaAvgAggregateInputType
    _sum?: ReceitaFavoritaSumAggregateInputType
    _min?: ReceitaFavoritaMinAggregateInputType
    _max?: ReceitaFavoritaMaxAggregateInputType
  }

  export type ReceitaFavoritaGroupByOutputType = {
    usuarioId: number
    receitaId: number
    favoritedAt: Date
    _count: ReceitaFavoritaCountAggregateOutputType | null
    _avg: ReceitaFavoritaAvgAggregateOutputType | null
    _sum: ReceitaFavoritaSumAggregateOutputType | null
    _min: ReceitaFavoritaMinAggregateOutputType | null
    _max: ReceitaFavoritaMaxAggregateOutputType | null
  }

  type GetReceitaFavoritaGroupByPayload<T extends ReceitaFavoritaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceitaFavoritaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceitaFavoritaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceitaFavoritaGroupByOutputType[P]>
            : GetScalarType<T[P], ReceitaFavoritaGroupByOutputType[P]>
        }
      >
    >


  export type ReceitaFavoritaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuarioId?: boolean
    receitaId?: boolean
    favoritedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receitaFavorita"]>

  export type ReceitaFavoritaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuarioId?: boolean
    receitaId?: boolean
    favoritedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receitaFavorita"]>

  export type ReceitaFavoritaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuarioId?: boolean
    receitaId?: boolean
    favoritedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receitaFavorita"]>

  export type ReceitaFavoritaSelectScalar = {
    usuarioId?: boolean
    receitaId?: boolean
    favoritedAt?: boolean
  }

  export type ReceitaFavoritaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"usuarioId" | "receitaId" | "favoritedAt", ExtArgs["result"]["receitaFavorita"]>
  export type ReceitaFavoritaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
  }
  export type ReceitaFavoritaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
  }
  export type ReceitaFavoritaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
  }

  export type $ReceitaFavoritaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReceitaFavorita"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      receita: Prisma.$ReceitaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      usuarioId: number
      receitaId: number
      favoritedAt: Date
    }, ExtArgs["result"]["receitaFavorita"]>
    composites: {}
  }

  type ReceitaFavoritaGetPayload<S extends boolean | null | undefined | ReceitaFavoritaDefaultArgs> = $Result.GetResult<Prisma.$ReceitaFavoritaPayload, S>

  type ReceitaFavoritaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReceitaFavoritaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReceitaFavoritaCountAggregateInputType | true
    }

  export interface ReceitaFavoritaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReceitaFavorita'], meta: { name: 'ReceitaFavorita' } }
    /**
     * Find zero or one ReceitaFavorita that matches the filter.
     * @param {ReceitaFavoritaFindUniqueArgs} args - Arguments to find a ReceitaFavorita
     * @example
     * // Get one ReceitaFavorita
     * const receitaFavorita = await prisma.receitaFavorita.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReceitaFavoritaFindUniqueArgs>(args: SelectSubset<T, ReceitaFavoritaFindUniqueArgs<ExtArgs>>): Prisma__ReceitaFavoritaClient<$Result.GetResult<Prisma.$ReceitaFavoritaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReceitaFavorita that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReceitaFavoritaFindUniqueOrThrowArgs} args - Arguments to find a ReceitaFavorita
     * @example
     * // Get one ReceitaFavorita
     * const receitaFavorita = await prisma.receitaFavorita.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReceitaFavoritaFindUniqueOrThrowArgs>(args: SelectSubset<T, ReceitaFavoritaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReceitaFavoritaClient<$Result.GetResult<Prisma.$ReceitaFavoritaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReceitaFavorita that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaFavoritaFindFirstArgs} args - Arguments to find a ReceitaFavorita
     * @example
     * // Get one ReceitaFavorita
     * const receitaFavorita = await prisma.receitaFavorita.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReceitaFavoritaFindFirstArgs>(args?: SelectSubset<T, ReceitaFavoritaFindFirstArgs<ExtArgs>>): Prisma__ReceitaFavoritaClient<$Result.GetResult<Prisma.$ReceitaFavoritaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReceitaFavorita that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaFavoritaFindFirstOrThrowArgs} args - Arguments to find a ReceitaFavorita
     * @example
     * // Get one ReceitaFavorita
     * const receitaFavorita = await prisma.receitaFavorita.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReceitaFavoritaFindFirstOrThrowArgs>(args?: SelectSubset<T, ReceitaFavoritaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReceitaFavoritaClient<$Result.GetResult<Prisma.$ReceitaFavoritaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReceitaFavoritas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaFavoritaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReceitaFavoritas
     * const receitaFavoritas = await prisma.receitaFavorita.findMany()
     * 
     * // Get first 10 ReceitaFavoritas
     * const receitaFavoritas = await prisma.receitaFavorita.findMany({ take: 10 })
     * 
     * // Only select the `usuarioId`
     * const receitaFavoritaWithUsuarioIdOnly = await prisma.receitaFavorita.findMany({ select: { usuarioId: true } })
     * 
     */
    findMany<T extends ReceitaFavoritaFindManyArgs>(args?: SelectSubset<T, ReceitaFavoritaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaFavoritaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReceitaFavorita.
     * @param {ReceitaFavoritaCreateArgs} args - Arguments to create a ReceitaFavorita.
     * @example
     * // Create one ReceitaFavorita
     * const ReceitaFavorita = await prisma.receitaFavorita.create({
     *   data: {
     *     // ... data to create a ReceitaFavorita
     *   }
     * })
     * 
     */
    create<T extends ReceitaFavoritaCreateArgs>(args: SelectSubset<T, ReceitaFavoritaCreateArgs<ExtArgs>>): Prisma__ReceitaFavoritaClient<$Result.GetResult<Prisma.$ReceitaFavoritaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReceitaFavoritas.
     * @param {ReceitaFavoritaCreateManyArgs} args - Arguments to create many ReceitaFavoritas.
     * @example
     * // Create many ReceitaFavoritas
     * const receitaFavorita = await prisma.receitaFavorita.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReceitaFavoritaCreateManyArgs>(args?: SelectSubset<T, ReceitaFavoritaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReceitaFavoritas and returns the data saved in the database.
     * @param {ReceitaFavoritaCreateManyAndReturnArgs} args - Arguments to create many ReceitaFavoritas.
     * @example
     * // Create many ReceitaFavoritas
     * const receitaFavorita = await prisma.receitaFavorita.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReceitaFavoritas and only return the `usuarioId`
     * const receitaFavoritaWithUsuarioIdOnly = await prisma.receitaFavorita.createManyAndReturn({
     *   select: { usuarioId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReceitaFavoritaCreateManyAndReturnArgs>(args?: SelectSubset<T, ReceitaFavoritaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaFavoritaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReceitaFavorita.
     * @param {ReceitaFavoritaDeleteArgs} args - Arguments to delete one ReceitaFavorita.
     * @example
     * // Delete one ReceitaFavorita
     * const ReceitaFavorita = await prisma.receitaFavorita.delete({
     *   where: {
     *     // ... filter to delete one ReceitaFavorita
     *   }
     * })
     * 
     */
    delete<T extends ReceitaFavoritaDeleteArgs>(args: SelectSubset<T, ReceitaFavoritaDeleteArgs<ExtArgs>>): Prisma__ReceitaFavoritaClient<$Result.GetResult<Prisma.$ReceitaFavoritaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReceitaFavorita.
     * @param {ReceitaFavoritaUpdateArgs} args - Arguments to update one ReceitaFavorita.
     * @example
     * // Update one ReceitaFavorita
     * const receitaFavorita = await prisma.receitaFavorita.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReceitaFavoritaUpdateArgs>(args: SelectSubset<T, ReceitaFavoritaUpdateArgs<ExtArgs>>): Prisma__ReceitaFavoritaClient<$Result.GetResult<Prisma.$ReceitaFavoritaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReceitaFavoritas.
     * @param {ReceitaFavoritaDeleteManyArgs} args - Arguments to filter ReceitaFavoritas to delete.
     * @example
     * // Delete a few ReceitaFavoritas
     * const { count } = await prisma.receitaFavorita.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReceitaFavoritaDeleteManyArgs>(args?: SelectSubset<T, ReceitaFavoritaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReceitaFavoritas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaFavoritaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReceitaFavoritas
     * const receitaFavorita = await prisma.receitaFavorita.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReceitaFavoritaUpdateManyArgs>(args: SelectSubset<T, ReceitaFavoritaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReceitaFavoritas and returns the data updated in the database.
     * @param {ReceitaFavoritaUpdateManyAndReturnArgs} args - Arguments to update many ReceitaFavoritas.
     * @example
     * // Update many ReceitaFavoritas
     * const receitaFavorita = await prisma.receitaFavorita.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReceitaFavoritas and only return the `usuarioId`
     * const receitaFavoritaWithUsuarioIdOnly = await prisma.receitaFavorita.updateManyAndReturn({
     *   select: { usuarioId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReceitaFavoritaUpdateManyAndReturnArgs>(args: SelectSubset<T, ReceitaFavoritaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaFavoritaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReceitaFavorita.
     * @param {ReceitaFavoritaUpsertArgs} args - Arguments to update or create a ReceitaFavorita.
     * @example
     * // Update or create a ReceitaFavorita
     * const receitaFavorita = await prisma.receitaFavorita.upsert({
     *   create: {
     *     // ... data to create a ReceitaFavorita
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReceitaFavorita we want to update
     *   }
     * })
     */
    upsert<T extends ReceitaFavoritaUpsertArgs>(args: SelectSubset<T, ReceitaFavoritaUpsertArgs<ExtArgs>>): Prisma__ReceitaFavoritaClient<$Result.GetResult<Prisma.$ReceitaFavoritaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReceitaFavoritas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaFavoritaCountArgs} args - Arguments to filter ReceitaFavoritas to count.
     * @example
     * // Count the number of ReceitaFavoritas
     * const count = await prisma.receitaFavorita.count({
     *   where: {
     *     // ... the filter for the ReceitaFavoritas we want to count
     *   }
     * })
    **/
    count<T extends ReceitaFavoritaCountArgs>(
      args?: Subset<T, ReceitaFavoritaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceitaFavoritaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReceitaFavorita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaFavoritaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReceitaFavoritaAggregateArgs>(args: Subset<T, ReceitaFavoritaAggregateArgs>): Prisma.PrismaPromise<GetReceitaFavoritaAggregateType<T>>

    /**
     * Group by ReceitaFavorita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaFavoritaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReceitaFavoritaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReceitaFavoritaGroupByArgs['orderBy'] }
        : { orderBy?: ReceitaFavoritaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReceitaFavoritaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceitaFavoritaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReceitaFavorita model
   */
  readonly fields: ReceitaFavoritaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReceitaFavorita.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReceitaFavoritaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receita<T extends ReceitaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReceitaDefaultArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReceitaFavorita model
   */
  interface ReceitaFavoritaFieldRefs {
    readonly usuarioId: FieldRef<"ReceitaFavorita", 'Int'>
    readonly receitaId: FieldRef<"ReceitaFavorita", 'Int'>
    readonly favoritedAt: FieldRef<"ReceitaFavorita", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReceitaFavorita findUnique
   */
  export type ReceitaFavoritaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaFavorita
     */
    select?: ReceitaFavoritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaFavorita
     */
    omit?: ReceitaFavoritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaFavoritaInclude<ExtArgs> | null
    /**
     * Filter, which ReceitaFavorita to fetch.
     */
    where: ReceitaFavoritaWhereUniqueInput
  }

  /**
   * ReceitaFavorita findUniqueOrThrow
   */
  export type ReceitaFavoritaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaFavorita
     */
    select?: ReceitaFavoritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaFavorita
     */
    omit?: ReceitaFavoritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaFavoritaInclude<ExtArgs> | null
    /**
     * Filter, which ReceitaFavorita to fetch.
     */
    where: ReceitaFavoritaWhereUniqueInput
  }

  /**
   * ReceitaFavorita findFirst
   */
  export type ReceitaFavoritaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaFavorita
     */
    select?: ReceitaFavoritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaFavorita
     */
    omit?: ReceitaFavoritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaFavoritaInclude<ExtArgs> | null
    /**
     * Filter, which ReceitaFavorita to fetch.
     */
    where?: ReceitaFavoritaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceitaFavoritas to fetch.
     */
    orderBy?: ReceitaFavoritaOrderByWithRelationInput | ReceitaFavoritaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReceitaFavoritas.
     */
    cursor?: ReceitaFavoritaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceitaFavoritas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceitaFavoritas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceitaFavoritas.
     */
    distinct?: ReceitaFavoritaScalarFieldEnum | ReceitaFavoritaScalarFieldEnum[]
  }

  /**
   * ReceitaFavorita findFirstOrThrow
   */
  export type ReceitaFavoritaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaFavorita
     */
    select?: ReceitaFavoritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaFavorita
     */
    omit?: ReceitaFavoritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaFavoritaInclude<ExtArgs> | null
    /**
     * Filter, which ReceitaFavorita to fetch.
     */
    where?: ReceitaFavoritaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceitaFavoritas to fetch.
     */
    orderBy?: ReceitaFavoritaOrderByWithRelationInput | ReceitaFavoritaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReceitaFavoritas.
     */
    cursor?: ReceitaFavoritaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceitaFavoritas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceitaFavoritas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceitaFavoritas.
     */
    distinct?: ReceitaFavoritaScalarFieldEnum | ReceitaFavoritaScalarFieldEnum[]
  }

  /**
   * ReceitaFavorita findMany
   */
  export type ReceitaFavoritaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaFavorita
     */
    select?: ReceitaFavoritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaFavorita
     */
    omit?: ReceitaFavoritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaFavoritaInclude<ExtArgs> | null
    /**
     * Filter, which ReceitaFavoritas to fetch.
     */
    where?: ReceitaFavoritaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceitaFavoritas to fetch.
     */
    orderBy?: ReceitaFavoritaOrderByWithRelationInput | ReceitaFavoritaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReceitaFavoritas.
     */
    cursor?: ReceitaFavoritaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceitaFavoritas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceitaFavoritas.
     */
    skip?: number
    distinct?: ReceitaFavoritaScalarFieldEnum | ReceitaFavoritaScalarFieldEnum[]
  }

  /**
   * ReceitaFavorita create
   */
  export type ReceitaFavoritaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaFavorita
     */
    select?: ReceitaFavoritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaFavorita
     */
    omit?: ReceitaFavoritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaFavoritaInclude<ExtArgs> | null
    /**
     * The data needed to create a ReceitaFavorita.
     */
    data: XOR<ReceitaFavoritaCreateInput, ReceitaFavoritaUncheckedCreateInput>
  }

  /**
   * ReceitaFavorita createMany
   */
  export type ReceitaFavoritaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReceitaFavoritas.
     */
    data: ReceitaFavoritaCreateManyInput | ReceitaFavoritaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReceitaFavorita createManyAndReturn
   */
  export type ReceitaFavoritaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaFavorita
     */
    select?: ReceitaFavoritaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaFavorita
     */
    omit?: ReceitaFavoritaOmit<ExtArgs> | null
    /**
     * The data used to create many ReceitaFavoritas.
     */
    data: ReceitaFavoritaCreateManyInput | ReceitaFavoritaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaFavoritaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReceitaFavorita update
   */
  export type ReceitaFavoritaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaFavorita
     */
    select?: ReceitaFavoritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaFavorita
     */
    omit?: ReceitaFavoritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaFavoritaInclude<ExtArgs> | null
    /**
     * The data needed to update a ReceitaFavorita.
     */
    data: XOR<ReceitaFavoritaUpdateInput, ReceitaFavoritaUncheckedUpdateInput>
    /**
     * Choose, which ReceitaFavorita to update.
     */
    where: ReceitaFavoritaWhereUniqueInput
  }

  /**
   * ReceitaFavorita updateMany
   */
  export type ReceitaFavoritaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReceitaFavoritas.
     */
    data: XOR<ReceitaFavoritaUpdateManyMutationInput, ReceitaFavoritaUncheckedUpdateManyInput>
    /**
     * Filter which ReceitaFavoritas to update
     */
    where?: ReceitaFavoritaWhereInput
    /**
     * Limit how many ReceitaFavoritas to update.
     */
    limit?: number
  }

  /**
   * ReceitaFavorita updateManyAndReturn
   */
  export type ReceitaFavoritaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaFavorita
     */
    select?: ReceitaFavoritaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaFavorita
     */
    omit?: ReceitaFavoritaOmit<ExtArgs> | null
    /**
     * The data used to update ReceitaFavoritas.
     */
    data: XOR<ReceitaFavoritaUpdateManyMutationInput, ReceitaFavoritaUncheckedUpdateManyInput>
    /**
     * Filter which ReceitaFavoritas to update
     */
    where?: ReceitaFavoritaWhereInput
    /**
     * Limit how many ReceitaFavoritas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaFavoritaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReceitaFavorita upsert
   */
  export type ReceitaFavoritaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaFavorita
     */
    select?: ReceitaFavoritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaFavorita
     */
    omit?: ReceitaFavoritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaFavoritaInclude<ExtArgs> | null
    /**
     * The filter to search for the ReceitaFavorita to update in case it exists.
     */
    where: ReceitaFavoritaWhereUniqueInput
    /**
     * In case the ReceitaFavorita found by the `where` argument doesn't exist, create a new ReceitaFavorita with this data.
     */
    create: XOR<ReceitaFavoritaCreateInput, ReceitaFavoritaUncheckedCreateInput>
    /**
     * In case the ReceitaFavorita was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReceitaFavoritaUpdateInput, ReceitaFavoritaUncheckedUpdateInput>
  }

  /**
   * ReceitaFavorita delete
   */
  export type ReceitaFavoritaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaFavorita
     */
    select?: ReceitaFavoritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaFavorita
     */
    omit?: ReceitaFavoritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaFavoritaInclude<ExtArgs> | null
    /**
     * Filter which ReceitaFavorita to delete.
     */
    where: ReceitaFavoritaWhereUniqueInput
  }

  /**
   * ReceitaFavorita deleteMany
   */
  export type ReceitaFavoritaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReceitaFavoritas to delete
     */
    where?: ReceitaFavoritaWhereInput
    /**
     * Limit how many ReceitaFavoritas to delete.
     */
    limit?: number
  }

  /**
   * ReceitaFavorita without action
   */
  export type ReceitaFavoritaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaFavorita
     */
    select?: ReceitaFavoritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaFavorita
     */
    omit?: ReceitaFavoritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaFavoritaInclude<ExtArgs> | null
  }


  /**
   * Model ItemReceitaIngrediente
   */

  export type AggregateItemReceitaIngrediente = {
    _count: ItemReceitaIngredienteCountAggregateOutputType | null
    _avg: ItemReceitaIngredienteAvgAggregateOutputType | null
    _sum: ItemReceitaIngredienteSumAggregateOutputType | null
    _min: ItemReceitaIngredienteMinAggregateOutputType | null
    _max: ItemReceitaIngredienteMaxAggregateOutputType | null
  }

  export type ItemReceitaIngredienteAvgAggregateOutputType = {
    id: number | null
    quantidade: number | null
    receitaId: number | null
    ingredienteId: number | null
  }

  export type ItemReceitaIngredienteSumAggregateOutputType = {
    id: number | null
    quantidade: number | null
    receitaId: number | null
    ingredienteId: number | null
  }

  export type ItemReceitaIngredienteMinAggregateOutputType = {
    id: number | null
    quantidade: number | null
    unidade: string | null
    receitaId: number | null
    ingredienteId: number | null
  }

  export type ItemReceitaIngredienteMaxAggregateOutputType = {
    id: number | null
    quantidade: number | null
    unidade: string | null
    receitaId: number | null
    ingredienteId: number | null
  }

  export type ItemReceitaIngredienteCountAggregateOutputType = {
    id: number
    quantidade: number
    unidade: number
    receitaId: number
    ingredienteId: number
    _all: number
  }


  export type ItemReceitaIngredienteAvgAggregateInputType = {
    id?: true
    quantidade?: true
    receitaId?: true
    ingredienteId?: true
  }

  export type ItemReceitaIngredienteSumAggregateInputType = {
    id?: true
    quantidade?: true
    receitaId?: true
    ingredienteId?: true
  }

  export type ItemReceitaIngredienteMinAggregateInputType = {
    id?: true
    quantidade?: true
    unidade?: true
    receitaId?: true
    ingredienteId?: true
  }

  export type ItemReceitaIngredienteMaxAggregateInputType = {
    id?: true
    quantidade?: true
    unidade?: true
    receitaId?: true
    ingredienteId?: true
  }

  export type ItemReceitaIngredienteCountAggregateInputType = {
    id?: true
    quantidade?: true
    unidade?: true
    receitaId?: true
    ingredienteId?: true
    _all?: true
  }

  export type ItemReceitaIngredienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemReceitaIngrediente to aggregate.
     */
    where?: ItemReceitaIngredienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemReceitaIngredientes to fetch.
     */
    orderBy?: ItemReceitaIngredienteOrderByWithRelationInput | ItemReceitaIngredienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemReceitaIngredienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemReceitaIngredientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemReceitaIngredientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemReceitaIngredientes
    **/
    _count?: true | ItemReceitaIngredienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemReceitaIngredienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemReceitaIngredienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemReceitaIngredienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemReceitaIngredienteMaxAggregateInputType
  }

  export type GetItemReceitaIngredienteAggregateType<T extends ItemReceitaIngredienteAggregateArgs> = {
        [P in keyof T & keyof AggregateItemReceitaIngrediente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemReceitaIngrediente[P]>
      : GetScalarType<T[P], AggregateItemReceitaIngrediente[P]>
  }




  export type ItemReceitaIngredienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemReceitaIngredienteWhereInput
    orderBy?: ItemReceitaIngredienteOrderByWithAggregationInput | ItemReceitaIngredienteOrderByWithAggregationInput[]
    by: ItemReceitaIngredienteScalarFieldEnum[] | ItemReceitaIngredienteScalarFieldEnum
    having?: ItemReceitaIngredienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemReceitaIngredienteCountAggregateInputType | true
    _avg?: ItemReceitaIngredienteAvgAggregateInputType
    _sum?: ItemReceitaIngredienteSumAggregateInputType
    _min?: ItemReceitaIngredienteMinAggregateInputType
    _max?: ItemReceitaIngredienteMaxAggregateInputType
  }

  export type ItemReceitaIngredienteGroupByOutputType = {
    id: number
    quantidade: number
    unidade: string
    receitaId: number
    ingredienteId: number
    _count: ItemReceitaIngredienteCountAggregateOutputType | null
    _avg: ItemReceitaIngredienteAvgAggregateOutputType | null
    _sum: ItemReceitaIngredienteSumAggregateOutputType | null
    _min: ItemReceitaIngredienteMinAggregateOutputType | null
    _max: ItemReceitaIngredienteMaxAggregateOutputType | null
  }

  type GetItemReceitaIngredienteGroupByPayload<T extends ItemReceitaIngredienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemReceitaIngredienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemReceitaIngredienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemReceitaIngredienteGroupByOutputType[P]>
            : GetScalarType<T[P], ItemReceitaIngredienteGroupByOutputType[P]>
        }
      >
    >


  export type ItemReceitaIngredienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    unidade?: boolean
    receitaId?: boolean
    ingredienteId?: boolean
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemReceitaIngrediente"]>

  export type ItemReceitaIngredienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    unidade?: boolean
    receitaId?: boolean
    ingredienteId?: boolean
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemReceitaIngrediente"]>

  export type ItemReceitaIngredienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    unidade?: boolean
    receitaId?: boolean
    ingredienteId?: boolean
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemReceitaIngrediente"]>

  export type ItemReceitaIngredienteSelectScalar = {
    id?: boolean
    quantidade?: boolean
    unidade?: boolean
    receitaId?: boolean
    ingredienteId?: boolean
  }

  export type ItemReceitaIngredienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantidade" | "unidade" | "receitaId" | "ingredienteId", ExtArgs["result"]["itemReceitaIngrediente"]>
  export type ItemReceitaIngredienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }
  export type ItemReceitaIngredienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }
  export type ItemReceitaIngredienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }

  export type $ItemReceitaIngredientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemReceitaIngrediente"
    objects: {
      receita: Prisma.$ReceitaPayload<ExtArgs>
      ingrediente: Prisma.$IngredientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantidade: number
      unidade: string
      receitaId: number
      ingredienteId: number
    }, ExtArgs["result"]["itemReceitaIngrediente"]>
    composites: {}
  }

  type ItemReceitaIngredienteGetPayload<S extends boolean | null | undefined | ItemReceitaIngredienteDefaultArgs> = $Result.GetResult<Prisma.$ItemReceitaIngredientePayload, S>

  type ItemReceitaIngredienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemReceitaIngredienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemReceitaIngredienteCountAggregateInputType | true
    }

  export interface ItemReceitaIngredienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemReceitaIngrediente'], meta: { name: 'ItemReceitaIngrediente' } }
    /**
     * Find zero or one ItemReceitaIngrediente that matches the filter.
     * @param {ItemReceitaIngredienteFindUniqueArgs} args - Arguments to find a ItemReceitaIngrediente
     * @example
     * // Get one ItemReceitaIngrediente
     * const itemReceitaIngrediente = await prisma.itemReceitaIngrediente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemReceitaIngredienteFindUniqueArgs>(args: SelectSubset<T, ItemReceitaIngredienteFindUniqueArgs<ExtArgs>>): Prisma__ItemReceitaIngredienteClient<$Result.GetResult<Prisma.$ItemReceitaIngredientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemReceitaIngrediente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemReceitaIngredienteFindUniqueOrThrowArgs} args - Arguments to find a ItemReceitaIngrediente
     * @example
     * // Get one ItemReceitaIngrediente
     * const itemReceitaIngrediente = await prisma.itemReceitaIngrediente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemReceitaIngredienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemReceitaIngredienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemReceitaIngredienteClient<$Result.GetResult<Prisma.$ItemReceitaIngredientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemReceitaIngrediente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemReceitaIngredienteFindFirstArgs} args - Arguments to find a ItemReceitaIngrediente
     * @example
     * // Get one ItemReceitaIngrediente
     * const itemReceitaIngrediente = await prisma.itemReceitaIngrediente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemReceitaIngredienteFindFirstArgs>(args?: SelectSubset<T, ItemReceitaIngredienteFindFirstArgs<ExtArgs>>): Prisma__ItemReceitaIngredienteClient<$Result.GetResult<Prisma.$ItemReceitaIngredientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemReceitaIngrediente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemReceitaIngredienteFindFirstOrThrowArgs} args - Arguments to find a ItemReceitaIngrediente
     * @example
     * // Get one ItemReceitaIngrediente
     * const itemReceitaIngrediente = await prisma.itemReceitaIngrediente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemReceitaIngredienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemReceitaIngredienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemReceitaIngredienteClient<$Result.GetResult<Prisma.$ItemReceitaIngredientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemReceitaIngredientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemReceitaIngredienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemReceitaIngredientes
     * const itemReceitaIngredientes = await prisma.itemReceitaIngrediente.findMany()
     * 
     * // Get first 10 ItemReceitaIngredientes
     * const itemReceitaIngredientes = await prisma.itemReceitaIngrediente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemReceitaIngredienteWithIdOnly = await prisma.itemReceitaIngrediente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemReceitaIngredienteFindManyArgs>(args?: SelectSubset<T, ItemReceitaIngredienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemReceitaIngredientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemReceitaIngrediente.
     * @param {ItemReceitaIngredienteCreateArgs} args - Arguments to create a ItemReceitaIngrediente.
     * @example
     * // Create one ItemReceitaIngrediente
     * const ItemReceitaIngrediente = await prisma.itemReceitaIngrediente.create({
     *   data: {
     *     // ... data to create a ItemReceitaIngrediente
     *   }
     * })
     * 
     */
    create<T extends ItemReceitaIngredienteCreateArgs>(args: SelectSubset<T, ItemReceitaIngredienteCreateArgs<ExtArgs>>): Prisma__ItemReceitaIngredienteClient<$Result.GetResult<Prisma.$ItemReceitaIngredientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemReceitaIngredientes.
     * @param {ItemReceitaIngredienteCreateManyArgs} args - Arguments to create many ItemReceitaIngredientes.
     * @example
     * // Create many ItemReceitaIngredientes
     * const itemReceitaIngrediente = await prisma.itemReceitaIngrediente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemReceitaIngredienteCreateManyArgs>(args?: SelectSubset<T, ItemReceitaIngredienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemReceitaIngredientes and returns the data saved in the database.
     * @param {ItemReceitaIngredienteCreateManyAndReturnArgs} args - Arguments to create many ItemReceitaIngredientes.
     * @example
     * // Create many ItemReceitaIngredientes
     * const itemReceitaIngrediente = await prisma.itemReceitaIngrediente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemReceitaIngredientes and only return the `id`
     * const itemReceitaIngredienteWithIdOnly = await prisma.itemReceitaIngrediente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemReceitaIngredienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemReceitaIngredienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemReceitaIngredientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemReceitaIngrediente.
     * @param {ItemReceitaIngredienteDeleteArgs} args - Arguments to delete one ItemReceitaIngrediente.
     * @example
     * // Delete one ItemReceitaIngrediente
     * const ItemReceitaIngrediente = await prisma.itemReceitaIngrediente.delete({
     *   where: {
     *     // ... filter to delete one ItemReceitaIngrediente
     *   }
     * })
     * 
     */
    delete<T extends ItemReceitaIngredienteDeleteArgs>(args: SelectSubset<T, ItemReceitaIngredienteDeleteArgs<ExtArgs>>): Prisma__ItemReceitaIngredienteClient<$Result.GetResult<Prisma.$ItemReceitaIngredientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemReceitaIngrediente.
     * @param {ItemReceitaIngredienteUpdateArgs} args - Arguments to update one ItemReceitaIngrediente.
     * @example
     * // Update one ItemReceitaIngrediente
     * const itemReceitaIngrediente = await prisma.itemReceitaIngrediente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemReceitaIngredienteUpdateArgs>(args: SelectSubset<T, ItemReceitaIngredienteUpdateArgs<ExtArgs>>): Prisma__ItemReceitaIngredienteClient<$Result.GetResult<Prisma.$ItemReceitaIngredientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemReceitaIngredientes.
     * @param {ItemReceitaIngredienteDeleteManyArgs} args - Arguments to filter ItemReceitaIngredientes to delete.
     * @example
     * // Delete a few ItemReceitaIngredientes
     * const { count } = await prisma.itemReceitaIngrediente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemReceitaIngredienteDeleteManyArgs>(args?: SelectSubset<T, ItemReceitaIngredienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemReceitaIngredientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemReceitaIngredienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemReceitaIngredientes
     * const itemReceitaIngrediente = await prisma.itemReceitaIngrediente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemReceitaIngredienteUpdateManyArgs>(args: SelectSubset<T, ItemReceitaIngredienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemReceitaIngredientes and returns the data updated in the database.
     * @param {ItemReceitaIngredienteUpdateManyAndReturnArgs} args - Arguments to update many ItemReceitaIngredientes.
     * @example
     * // Update many ItemReceitaIngredientes
     * const itemReceitaIngrediente = await prisma.itemReceitaIngrediente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemReceitaIngredientes and only return the `id`
     * const itemReceitaIngredienteWithIdOnly = await prisma.itemReceitaIngrediente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemReceitaIngredienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemReceitaIngredienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemReceitaIngredientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemReceitaIngrediente.
     * @param {ItemReceitaIngredienteUpsertArgs} args - Arguments to update or create a ItemReceitaIngrediente.
     * @example
     * // Update or create a ItemReceitaIngrediente
     * const itemReceitaIngrediente = await prisma.itemReceitaIngrediente.upsert({
     *   create: {
     *     // ... data to create a ItemReceitaIngrediente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemReceitaIngrediente we want to update
     *   }
     * })
     */
    upsert<T extends ItemReceitaIngredienteUpsertArgs>(args: SelectSubset<T, ItemReceitaIngredienteUpsertArgs<ExtArgs>>): Prisma__ItemReceitaIngredienteClient<$Result.GetResult<Prisma.$ItemReceitaIngredientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemReceitaIngredientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemReceitaIngredienteCountArgs} args - Arguments to filter ItemReceitaIngredientes to count.
     * @example
     * // Count the number of ItemReceitaIngredientes
     * const count = await prisma.itemReceitaIngrediente.count({
     *   where: {
     *     // ... the filter for the ItemReceitaIngredientes we want to count
     *   }
     * })
    **/
    count<T extends ItemReceitaIngredienteCountArgs>(
      args?: Subset<T, ItemReceitaIngredienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemReceitaIngredienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemReceitaIngrediente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemReceitaIngredienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemReceitaIngredienteAggregateArgs>(args: Subset<T, ItemReceitaIngredienteAggregateArgs>): Prisma.PrismaPromise<GetItemReceitaIngredienteAggregateType<T>>

    /**
     * Group by ItemReceitaIngrediente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemReceitaIngredienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemReceitaIngredienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemReceitaIngredienteGroupByArgs['orderBy'] }
        : { orderBy?: ItemReceitaIngredienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemReceitaIngredienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemReceitaIngredienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemReceitaIngrediente model
   */
  readonly fields: ItemReceitaIngredienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemReceitaIngrediente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemReceitaIngredienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receita<T extends ReceitaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReceitaDefaultArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingrediente<T extends IngredienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngredienteDefaultArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemReceitaIngrediente model
   */
  interface ItemReceitaIngredienteFieldRefs {
    readonly id: FieldRef<"ItemReceitaIngrediente", 'Int'>
    readonly quantidade: FieldRef<"ItemReceitaIngrediente", 'Float'>
    readonly unidade: FieldRef<"ItemReceitaIngrediente", 'String'>
    readonly receitaId: FieldRef<"ItemReceitaIngrediente", 'Int'>
    readonly ingredienteId: FieldRef<"ItemReceitaIngrediente", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ItemReceitaIngrediente findUnique
   */
  export type ItemReceitaIngredienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemReceitaIngrediente
     */
    select?: ItemReceitaIngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemReceitaIngrediente
     */
    omit?: ItemReceitaIngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemReceitaIngredienteInclude<ExtArgs> | null
    /**
     * Filter, which ItemReceitaIngrediente to fetch.
     */
    where: ItemReceitaIngredienteWhereUniqueInput
  }

  /**
   * ItemReceitaIngrediente findUniqueOrThrow
   */
  export type ItemReceitaIngredienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemReceitaIngrediente
     */
    select?: ItemReceitaIngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemReceitaIngrediente
     */
    omit?: ItemReceitaIngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemReceitaIngredienteInclude<ExtArgs> | null
    /**
     * Filter, which ItemReceitaIngrediente to fetch.
     */
    where: ItemReceitaIngredienteWhereUniqueInput
  }

  /**
   * ItemReceitaIngrediente findFirst
   */
  export type ItemReceitaIngredienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemReceitaIngrediente
     */
    select?: ItemReceitaIngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemReceitaIngrediente
     */
    omit?: ItemReceitaIngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemReceitaIngredienteInclude<ExtArgs> | null
    /**
     * Filter, which ItemReceitaIngrediente to fetch.
     */
    where?: ItemReceitaIngredienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemReceitaIngredientes to fetch.
     */
    orderBy?: ItemReceitaIngredienteOrderByWithRelationInput | ItemReceitaIngredienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemReceitaIngredientes.
     */
    cursor?: ItemReceitaIngredienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemReceitaIngredientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemReceitaIngredientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemReceitaIngredientes.
     */
    distinct?: ItemReceitaIngredienteScalarFieldEnum | ItemReceitaIngredienteScalarFieldEnum[]
  }

  /**
   * ItemReceitaIngrediente findFirstOrThrow
   */
  export type ItemReceitaIngredienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemReceitaIngrediente
     */
    select?: ItemReceitaIngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemReceitaIngrediente
     */
    omit?: ItemReceitaIngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemReceitaIngredienteInclude<ExtArgs> | null
    /**
     * Filter, which ItemReceitaIngrediente to fetch.
     */
    where?: ItemReceitaIngredienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemReceitaIngredientes to fetch.
     */
    orderBy?: ItemReceitaIngredienteOrderByWithRelationInput | ItemReceitaIngredienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemReceitaIngredientes.
     */
    cursor?: ItemReceitaIngredienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemReceitaIngredientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemReceitaIngredientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemReceitaIngredientes.
     */
    distinct?: ItemReceitaIngredienteScalarFieldEnum | ItemReceitaIngredienteScalarFieldEnum[]
  }

  /**
   * ItemReceitaIngrediente findMany
   */
  export type ItemReceitaIngredienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemReceitaIngrediente
     */
    select?: ItemReceitaIngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemReceitaIngrediente
     */
    omit?: ItemReceitaIngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemReceitaIngredienteInclude<ExtArgs> | null
    /**
     * Filter, which ItemReceitaIngredientes to fetch.
     */
    where?: ItemReceitaIngredienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemReceitaIngredientes to fetch.
     */
    orderBy?: ItemReceitaIngredienteOrderByWithRelationInput | ItemReceitaIngredienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemReceitaIngredientes.
     */
    cursor?: ItemReceitaIngredienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemReceitaIngredientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemReceitaIngredientes.
     */
    skip?: number
    distinct?: ItemReceitaIngredienteScalarFieldEnum | ItemReceitaIngredienteScalarFieldEnum[]
  }

  /**
   * ItemReceitaIngrediente create
   */
  export type ItemReceitaIngredienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemReceitaIngrediente
     */
    select?: ItemReceitaIngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemReceitaIngrediente
     */
    omit?: ItemReceitaIngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemReceitaIngredienteInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemReceitaIngrediente.
     */
    data: XOR<ItemReceitaIngredienteCreateInput, ItemReceitaIngredienteUncheckedCreateInput>
  }

  /**
   * ItemReceitaIngrediente createMany
   */
  export type ItemReceitaIngredienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemReceitaIngredientes.
     */
    data: ItemReceitaIngredienteCreateManyInput | ItemReceitaIngredienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemReceitaIngrediente createManyAndReturn
   */
  export type ItemReceitaIngredienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemReceitaIngrediente
     */
    select?: ItemReceitaIngredienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemReceitaIngrediente
     */
    omit?: ItemReceitaIngredienteOmit<ExtArgs> | null
    /**
     * The data used to create many ItemReceitaIngredientes.
     */
    data: ItemReceitaIngredienteCreateManyInput | ItemReceitaIngredienteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemReceitaIngredienteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemReceitaIngrediente update
   */
  export type ItemReceitaIngredienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemReceitaIngrediente
     */
    select?: ItemReceitaIngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemReceitaIngrediente
     */
    omit?: ItemReceitaIngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemReceitaIngredienteInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemReceitaIngrediente.
     */
    data: XOR<ItemReceitaIngredienteUpdateInput, ItemReceitaIngredienteUncheckedUpdateInput>
    /**
     * Choose, which ItemReceitaIngrediente to update.
     */
    where: ItemReceitaIngredienteWhereUniqueInput
  }

  /**
   * ItemReceitaIngrediente updateMany
   */
  export type ItemReceitaIngredienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemReceitaIngredientes.
     */
    data: XOR<ItemReceitaIngredienteUpdateManyMutationInput, ItemReceitaIngredienteUncheckedUpdateManyInput>
    /**
     * Filter which ItemReceitaIngredientes to update
     */
    where?: ItemReceitaIngredienteWhereInput
    /**
     * Limit how many ItemReceitaIngredientes to update.
     */
    limit?: number
  }

  /**
   * ItemReceitaIngrediente updateManyAndReturn
   */
  export type ItemReceitaIngredienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemReceitaIngrediente
     */
    select?: ItemReceitaIngredienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemReceitaIngrediente
     */
    omit?: ItemReceitaIngredienteOmit<ExtArgs> | null
    /**
     * The data used to update ItemReceitaIngredientes.
     */
    data: XOR<ItemReceitaIngredienteUpdateManyMutationInput, ItemReceitaIngredienteUncheckedUpdateManyInput>
    /**
     * Filter which ItemReceitaIngredientes to update
     */
    where?: ItemReceitaIngredienteWhereInput
    /**
     * Limit how many ItemReceitaIngredientes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemReceitaIngredienteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemReceitaIngrediente upsert
   */
  export type ItemReceitaIngredienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemReceitaIngrediente
     */
    select?: ItemReceitaIngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemReceitaIngrediente
     */
    omit?: ItemReceitaIngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemReceitaIngredienteInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemReceitaIngrediente to update in case it exists.
     */
    where: ItemReceitaIngredienteWhereUniqueInput
    /**
     * In case the ItemReceitaIngrediente found by the `where` argument doesn't exist, create a new ItemReceitaIngrediente with this data.
     */
    create: XOR<ItemReceitaIngredienteCreateInput, ItemReceitaIngredienteUncheckedCreateInput>
    /**
     * In case the ItemReceitaIngrediente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemReceitaIngredienteUpdateInput, ItemReceitaIngredienteUncheckedUpdateInput>
  }

  /**
   * ItemReceitaIngrediente delete
   */
  export type ItemReceitaIngredienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemReceitaIngrediente
     */
    select?: ItemReceitaIngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemReceitaIngrediente
     */
    omit?: ItemReceitaIngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemReceitaIngredienteInclude<ExtArgs> | null
    /**
     * Filter which ItemReceitaIngrediente to delete.
     */
    where: ItemReceitaIngredienteWhereUniqueInput
  }

  /**
   * ItemReceitaIngrediente deleteMany
   */
  export type ItemReceitaIngredienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemReceitaIngredientes to delete
     */
    where?: ItemReceitaIngredienteWhereInput
    /**
     * Limit how many ItemReceitaIngredientes to delete.
     */
    limit?: number
  }

  /**
   * ItemReceitaIngrediente without action
   */
  export type ItemReceitaIngredienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemReceitaIngrediente
     */
    select?: ItemReceitaIngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemReceitaIngrediente
     */
    omit?: ItemReceitaIngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemReceitaIngredienteInclude<ExtArgs> | null
  }


  /**
   * Model ListaCompras
   */

  export type AggregateListaCompras = {
    _count: ListaComprasCountAggregateOutputType | null
    _avg: ListaComprasAvgAggregateOutputType | null
    _sum: ListaComprasSumAggregateOutputType | null
    _min: ListaComprasMinAggregateOutputType | null
    _max: ListaComprasMaxAggregateOutputType | null
  }

  export type ListaComprasAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type ListaComprasSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type ListaComprasMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    usuarioId: number | null
  }

  export type ListaComprasMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    usuarioId: number | null
  }

  export type ListaComprasCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    usuarioId: number
    _all: number
  }


  export type ListaComprasAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type ListaComprasSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type ListaComprasMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    usuarioId?: true
  }

  export type ListaComprasMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    usuarioId?: true
  }

  export type ListaComprasCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    usuarioId?: true
    _all?: true
  }

  export type ListaComprasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListaCompras to aggregate.
     */
    where?: ListaComprasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaCompras to fetch.
     */
    orderBy?: ListaComprasOrderByWithRelationInput | ListaComprasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListaComprasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ListaCompras
    **/
    _count?: true | ListaComprasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListaComprasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListaComprasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListaComprasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListaComprasMaxAggregateInputType
  }

  export type GetListaComprasAggregateType<T extends ListaComprasAggregateArgs> = {
        [P in keyof T & keyof AggregateListaCompras]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListaCompras[P]>
      : GetScalarType<T[P], AggregateListaCompras[P]>
  }




  export type ListaComprasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListaComprasWhereInput
    orderBy?: ListaComprasOrderByWithAggregationInput | ListaComprasOrderByWithAggregationInput[]
    by: ListaComprasScalarFieldEnum[] | ListaComprasScalarFieldEnum
    having?: ListaComprasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListaComprasCountAggregateInputType | true
    _avg?: ListaComprasAvgAggregateInputType
    _sum?: ListaComprasSumAggregateInputType
    _min?: ListaComprasMinAggregateInputType
    _max?: ListaComprasMaxAggregateInputType
  }

  export type ListaComprasGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    usuarioId: number
    _count: ListaComprasCountAggregateOutputType | null
    _avg: ListaComprasAvgAggregateOutputType | null
    _sum: ListaComprasSumAggregateOutputType | null
    _min: ListaComprasMinAggregateOutputType | null
    _max: ListaComprasMaxAggregateOutputType | null
  }

  type GetListaComprasGroupByPayload<T extends ListaComprasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListaComprasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListaComprasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListaComprasGroupByOutputType[P]>
            : GetScalarType<T[P], ListaComprasGroupByOutputType[P]>
        }
      >
    >


  export type ListaComprasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    itens?: boolean | ListaCompras$itensArgs<ExtArgs>
    _count?: boolean | ListaComprasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listaCompras"]>

  export type ListaComprasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listaCompras"]>

  export type ListaComprasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listaCompras"]>

  export type ListaComprasSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarioId?: boolean
  }

  export type ListaComprasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "usuarioId", ExtArgs["result"]["listaCompras"]>
  export type ListaComprasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    itens?: boolean | ListaCompras$itensArgs<ExtArgs>
    _count?: boolean | ListaComprasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ListaComprasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ListaComprasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ListaComprasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ListaCompras"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      itens: Prisma.$ItemListaComprasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      usuarioId: number
    }, ExtArgs["result"]["listaCompras"]>
    composites: {}
  }

  type ListaComprasGetPayload<S extends boolean | null | undefined | ListaComprasDefaultArgs> = $Result.GetResult<Prisma.$ListaComprasPayload, S>

  type ListaComprasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListaComprasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListaComprasCountAggregateInputType | true
    }

  export interface ListaComprasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ListaCompras'], meta: { name: 'ListaCompras' } }
    /**
     * Find zero or one ListaCompras that matches the filter.
     * @param {ListaComprasFindUniqueArgs} args - Arguments to find a ListaCompras
     * @example
     * // Get one ListaCompras
     * const listaCompras = await prisma.listaCompras.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListaComprasFindUniqueArgs>(args: SelectSubset<T, ListaComprasFindUniqueArgs<ExtArgs>>): Prisma__ListaComprasClient<$Result.GetResult<Prisma.$ListaComprasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ListaCompras that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListaComprasFindUniqueOrThrowArgs} args - Arguments to find a ListaCompras
     * @example
     * // Get one ListaCompras
     * const listaCompras = await prisma.listaCompras.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListaComprasFindUniqueOrThrowArgs>(args: SelectSubset<T, ListaComprasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListaComprasClient<$Result.GetResult<Prisma.$ListaComprasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListaCompras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaComprasFindFirstArgs} args - Arguments to find a ListaCompras
     * @example
     * // Get one ListaCompras
     * const listaCompras = await prisma.listaCompras.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListaComprasFindFirstArgs>(args?: SelectSubset<T, ListaComprasFindFirstArgs<ExtArgs>>): Prisma__ListaComprasClient<$Result.GetResult<Prisma.$ListaComprasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListaCompras that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaComprasFindFirstOrThrowArgs} args - Arguments to find a ListaCompras
     * @example
     * // Get one ListaCompras
     * const listaCompras = await prisma.listaCompras.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListaComprasFindFirstOrThrowArgs>(args?: SelectSubset<T, ListaComprasFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListaComprasClient<$Result.GetResult<Prisma.$ListaComprasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ListaCompras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaComprasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListaCompras
     * const listaCompras = await prisma.listaCompras.findMany()
     * 
     * // Get first 10 ListaCompras
     * const listaCompras = await prisma.listaCompras.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listaComprasWithIdOnly = await prisma.listaCompras.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListaComprasFindManyArgs>(args?: SelectSubset<T, ListaComprasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListaComprasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ListaCompras.
     * @param {ListaComprasCreateArgs} args - Arguments to create a ListaCompras.
     * @example
     * // Create one ListaCompras
     * const ListaCompras = await prisma.listaCompras.create({
     *   data: {
     *     // ... data to create a ListaCompras
     *   }
     * })
     * 
     */
    create<T extends ListaComprasCreateArgs>(args: SelectSubset<T, ListaComprasCreateArgs<ExtArgs>>): Prisma__ListaComprasClient<$Result.GetResult<Prisma.$ListaComprasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ListaCompras.
     * @param {ListaComprasCreateManyArgs} args - Arguments to create many ListaCompras.
     * @example
     * // Create many ListaCompras
     * const listaCompras = await prisma.listaCompras.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListaComprasCreateManyArgs>(args?: SelectSubset<T, ListaComprasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ListaCompras and returns the data saved in the database.
     * @param {ListaComprasCreateManyAndReturnArgs} args - Arguments to create many ListaCompras.
     * @example
     * // Create many ListaCompras
     * const listaCompras = await prisma.listaCompras.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ListaCompras and only return the `id`
     * const listaComprasWithIdOnly = await prisma.listaCompras.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListaComprasCreateManyAndReturnArgs>(args?: SelectSubset<T, ListaComprasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListaComprasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ListaCompras.
     * @param {ListaComprasDeleteArgs} args - Arguments to delete one ListaCompras.
     * @example
     * // Delete one ListaCompras
     * const ListaCompras = await prisma.listaCompras.delete({
     *   where: {
     *     // ... filter to delete one ListaCompras
     *   }
     * })
     * 
     */
    delete<T extends ListaComprasDeleteArgs>(args: SelectSubset<T, ListaComprasDeleteArgs<ExtArgs>>): Prisma__ListaComprasClient<$Result.GetResult<Prisma.$ListaComprasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ListaCompras.
     * @param {ListaComprasUpdateArgs} args - Arguments to update one ListaCompras.
     * @example
     * // Update one ListaCompras
     * const listaCompras = await prisma.listaCompras.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListaComprasUpdateArgs>(args: SelectSubset<T, ListaComprasUpdateArgs<ExtArgs>>): Prisma__ListaComprasClient<$Result.GetResult<Prisma.$ListaComprasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ListaCompras.
     * @param {ListaComprasDeleteManyArgs} args - Arguments to filter ListaCompras to delete.
     * @example
     * // Delete a few ListaCompras
     * const { count } = await prisma.listaCompras.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListaComprasDeleteManyArgs>(args?: SelectSubset<T, ListaComprasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListaCompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaComprasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListaCompras
     * const listaCompras = await prisma.listaCompras.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListaComprasUpdateManyArgs>(args: SelectSubset<T, ListaComprasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListaCompras and returns the data updated in the database.
     * @param {ListaComprasUpdateManyAndReturnArgs} args - Arguments to update many ListaCompras.
     * @example
     * // Update many ListaCompras
     * const listaCompras = await prisma.listaCompras.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ListaCompras and only return the `id`
     * const listaComprasWithIdOnly = await prisma.listaCompras.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ListaComprasUpdateManyAndReturnArgs>(args: SelectSubset<T, ListaComprasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListaComprasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ListaCompras.
     * @param {ListaComprasUpsertArgs} args - Arguments to update or create a ListaCompras.
     * @example
     * // Update or create a ListaCompras
     * const listaCompras = await prisma.listaCompras.upsert({
     *   create: {
     *     // ... data to create a ListaCompras
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListaCompras we want to update
     *   }
     * })
     */
    upsert<T extends ListaComprasUpsertArgs>(args: SelectSubset<T, ListaComprasUpsertArgs<ExtArgs>>): Prisma__ListaComprasClient<$Result.GetResult<Prisma.$ListaComprasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ListaCompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaComprasCountArgs} args - Arguments to filter ListaCompras to count.
     * @example
     * // Count the number of ListaCompras
     * const count = await prisma.listaCompras.count({
     *   where: {
     *     // ... the filter for the ListaCompras we want to count
     *   }
     * })
    **/
    count<T extends ListaComprasCountArgs>(
      args?: Subset<T, ListaComprasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListaComprasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ListaCompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaComprasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ListaComprasAggregateArgs>(args: Subset<T, ListaComprasAggregateArgs>): Prisma.PrismaPromise<GetListaComprasAggregateType<T>>

    /**
     * Group by ListaCompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaComprasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ListaComprasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListaComprasGroupByArgs['orderBy'] }
        : { orderBy?: ListaComprasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ListaComprasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListaComprasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ListaCompras model
   */
  readonly fields: ListaComprasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ListaCompras.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListaComprasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    itens<T extends ListaCompras$itensArgs<ExtArgs> = {}>(args?: Subset<T, ListaCompras$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemListaComprasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ListaCompras model
   */
  interface ListaComprasFieldRefs {
    readonly id: FieldRef<"ListaCompras", 'Int'>
    readonly createdAt: FieldRef<"ListaCompras", 'DateTime'>
    readonly updatedAt: FieldRef<"ListaCompras", 'DateTime'>
    readonly usuarioId: FieldRef<"ListaCompras", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ListaCompras findUnique
   */
  export type ListaComprasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaCompras
     */
    select?: ListaComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaCompras
     */
    omit?: ListaComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaComprasInclude<ExtArgs> | null
    /**
     * Filter, which ListaCompras to fetch.
     */
    where: ListaComprasWhereUniqueInput
  }

  /**
   * ListaCompras findUniqueOrThrow
   */
  export type ListaComprasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaCompras
     */
    select?: ListaComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaCompras
     */
    omit?: ListaComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaComprasInclude<ExtArgs> | null
    /**
     * Filter, which ListaCompras to fetch.
     */
    where: ListaComprasWhereUniqueInput
  }

  /**
   * ListaCompras findFirst
   */
  export type ListaComprasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaCompras
     */
    select?: ListaComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaCompras
     */
    omit?: ListaComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaComprasInclude<ExtArgs> | null
    /**
     * Filter, which ListaCompras to fetch.
     */
    where?: ListaComprasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaCompras to fetch.
     */
    orderBy?: ListaComprasOrderByWithRelationInput | ListaComprasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListaCompras.
     */
    cursor?: ListaComprasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListaCompras.
     */
    distinct?: ListaComprasScalarFieldEnum | ListaComprasScalarFieldEnum[]
  }

  /**
   * ListaCompras findFirstOrThrow
   */
  export type ListaComprasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaCompras
     */
    select?: ListaComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaCompras
     */
    omit?: ListaComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaComprasInclude<ExtArgs> | null
    /**
     * Filter, which ListaCompras to fetch.
     */
    where?: ListaComprasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaCompras to fetch.
     */
    orderBy?: ListaComprasOrderByWithRelationInput | ListaComprasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListaCompras.
     */
    cursor?: ListaComprasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListaCompras.
     */
    distinct?: ListaComprasScalarFieldEnum | ListaComprasScalarFieldEnum[]
  }

  /**
   * ListaCompras findMany
   */
  export type ListaComprasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaCompras
     */
    select?: ListaComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaCompras
     */
    omit?: ListaComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaComprasInclude<ExtArgs> | null
    /**
     * Filter, which ListaCompras to fetch.
     */
    where?: ListaComprasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaCompras to fetch.
     */
    orderBy?: ListaComprasOrderByWithRelationInput | ListaComprasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ListaCompras.
     */
    cursor?: ListaComprasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaCompras.
     */
    skip?: number
    distinct?: ListaComprasScalarFieldEnum | ListaComprasScalarFieldEnum[]
  }

  /**
   * ListaCompras create
   */
  export type ListaComprasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaCompras
     */
    select?: ListaComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaCompras
     */
    omit?: ListaComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaComprasInclude<ExtArgs> | null
    /**
     * The data needed to create a ListaCompras.
     */
    data: XOR<ListaComprasCreateInput, ListaComprasUncheckedCreateInput>
  }

  /**
   * ListaCompras createMany
   */
  export type ListaComprasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ListaCompras.
     */
    data: ListaComprasCreateManyInput | ListaComprasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ListaCompras createManyAndReturn
   */
  export type ListaComprasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaCompras
     */
    select?: ListaComprasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListaCompras
     */
    omit?: ListaComprasOmit<ExtArgs> | null
    /**
     * The data used to create many ListaCompras.
     */
    data: ListaComprasCreateManyInput | ListaComprasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaComprasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListaCompras update
   */
  export type ListaComprasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaCompras
     */
    select?: ListaComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaCompras
     */
    omit?: ListaComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaComprasInclude<ExtArgs> | null
    /**
     * The data needed to update a ListaCompras.
     */
    data: XOR<ListaComprasUpdateInput, ListaComprasUncheckedUpdateInput>
    /**
     * Choose, which ListaCompras to update.
     */
    where: ListaComprasWhereUniqueInput
  }

  /**
   * ListaCompras updateMany
   */
  export type ListaComprasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ListaCompras.
     */
    data: XOR<ListaComprasUpdateManyMutationInput, ListaComprasUncheckedUpdateManyInput>
    /**
     * Filter which ListaCompras to update
     */
    where?: ListaComprasWhereInput
    /**
     * Limit how many ListaCompras to update.
     */
    limit?: number
  }

  /**
   * ListaCompras updateManyAndReturn
   */
  export type ListaComprasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaCompras
     */
    select?: ListaComprasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListaCompras
     */
    omit?: ListaComprasOmit<ExtArgs> | null
    /**
     * The data used to update ListaCompras.
     */
    data: XOR<ListaComprasUpdateManyMutationInput, ListaComprasUncheckedUpdateManyInput>
    /**
     * Filter which ListaCompras to update
     */
    where?: ListaComprasWhereInput
    /**
     * Limit how many ListaCompras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaComprasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListaCompras upsert
   */
  export type ListaComprasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaCompras
     */
    select?: ListaComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaCompras
     */
    omit?: ListaComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaComprasInclude<ExtArgs> | null
    /**
     * The filter to search for the ListaCompras to update in case it exists.
     */
    where: ListaComprasWhereUniqueInput
    /**
     * In case the ListaCompras found by the `where` argument doesn't exist, create a new ListaCompras with this data.
     */
    create: XOR<ListaComprasCreateInput, ListaComprasUncheckedCreateInput>
    /**
     * In case the ListaCompras was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListaComprasUpdateInput, ListaComprasUncheckedUpdateInput>
  }

  /**
   * ListaCompras delete
   */
  export type ListaComprasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaCompras
     */
    select?: ListaComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaCompras
     */
    omit?: ListaComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaComprasInclude<ExtArgs> | null
    /**
     * Filter which ListaCompras to delete.
     */
    where: ListaComprasWhereUniqueInput
  }

  /**
   * ListaCompras deleteMany
   */
  export type ListaComprasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListaCompras to delete
     */
    where?: ListaComprasWhereInput
    /**
     * Limit how many ListaCompras to delete.
     */
    limit?: number
  }

  /**
   * ListaCompras.itens
   */
  export type ListaCompras$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaCompras
     */
    select?: ItemListaComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaCompras
     */
    omit?: ItemListaComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaComprasInclude<ExtArgs> | null
    where?: ItemListaComprasWhereInput
    orderBy?: ItemListaComprasOrderByWithRelationInput | ItemListaComprasOrderByWithRelationInput[]
    cursor?: ItemListaComprasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemListaComprasScalarFieldEnum | ItemListaComprasScalarFieldEnum[]
  }

  /**
   * ListaCompras without action
   */
  export type ListaComprasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaCompras
     */
    select?: ListaComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaCompras
     */
    omit?: ListaComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaComprasInclude<ExtArgs> | null
  }


  /**
   * Model ItemListaCompras
   */

  export type AggregateItemListaCompras = {
    _count: ItemListaComprasCountAggregateOutputType | null
    _avg: ItemListaComprasAvgAggregateOutputType | null
    _sum: ItemListaComprasSumAggregateOutputType | null
    _min: ItemListaComprasMinAggregateOutputType | null
    _max: ItemListaComprasMaxAggregateOutputType | null
  }

  export type ItemListaComprasAvgAggregateOutputType = {
    id: number | null
    quantidade: number | null
    listaComprasId: number | null
    ingredienteId: number | null
  }

  export type ItemListaComprasSumAggregateOutputType = {
    id: number | null
    quantidade: number | null
    listaComprasId: number | null
    ingredienteId: number | null
  }

  export type ItemListaComprasMinAggregateOutputType = {
    id: number | null
    quantidade: number | null
    unidade: string | null
    comprado: boolean | null
    listaComprasId: number | null
    ingredienteId: number | null
  }

  export type ItemListaComprasMaxAggregateOutputType = {
    id: number | null
    quantidade: number | null
    unidade: string | null
    comprado: boolean | null
    listaComprasId: number | null
    ingredienteId: number | null
  }

  export type ItemListaComprasCountAggregateOutputType = {
    id: number
    quantidade: number
    unidade: number
    comprado: number
    listaComprasId: number
    ingredienteId: number
    _all: number
  }


  export type ItemListaComprasAvgAggregateInputType = {
    id?: true
    quantidade?: true
    listaComprasId?: true
    ingredienteId?: true
  }

  export type ItemListaComprasSumAggregateInputType = {
    id?: true
    quantidade?: true
    listaComprasId?: true
    ingredienteId?: true
  }

  export type ItemListaComprasMinAggregateInputType = {
    id?: true
    quantidade?: true
    unidade?: true
    comprado?: true
    listaComprasId?: true
    ingredienteId?: true
  }

  export type ItemListaComprasMaxAggregateInputType = {
    id?: true
    quantidade?: true
    unidade?: true
    comprado?: true
    listaComprasId?: true
    ingredienteId?: true
  }

  export type ItemListaComprasCountAggregateInputType = {
    id?: true
    quantidade?: true
    unidade?: true
    comprado?: true
    listaComprasId?: true
    ingredienteId?: true
    _all?: true
  }

  export type ItemListaComprasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemListaCompras to aggregate.
     */
    where?: ItemListaComprasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemListaCompras to fetch.
     */
    orderBy?: ItemListaComprasOrderByWithRelationInput | ItemListaComprasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemListaComprasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemListaCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemListaCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemListaCompras
    **/
    _count?: true | ItemListaComprasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemListaComprasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemListaComprasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemListaComprasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemListaComprasMaxAggregateInputType
  }

  export type GetItemListaComprasAggregateType<T extends ItemListaComprasAggregateArgs> = {
        [P in keyof T & keyof AggregateItemListaCompras]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemListaCompras[P]>
      : GetScalarType<T[P], AggregateItemListaCompras[P]>
  }




  export type ItemListaComprasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemListaComprasWhereInput
    orderBy?: ItemListaComprasOrderByWithAggregationInput | ItemListaComprasOrderByWithAggregationInput[]
    by: ItemListaComprasScalarFieldEnum[] | ItemListaComprasScalarFieldEnum
    having?: ItemListaComprasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemListaComprasCountAggregateInputType | true
    _avg?: ItemListaComprasAvgAggregateInputType
    _sum?: ItemListaComprasSumAggregateInputType
    _min?: ItemListaComprasMinAggregateInputType
    _max?: ItemListaComprasMaxAggregateInputType
  }

  export type ItemListaComprasGroupByOutputType = {
    id: number
    quantidade: number
    unidade: string
    comprado: boolean
    listaComprasId: number
    ingredienteId: number
    _count: ItemListaComprasCountAggregateOutputType | null
    _avg: ItemListaComprasAvgAggregateOutputType | null
    _sum: ItemListaComprasSumAggregateOutputType | null
    _min: ItemListaComprasMinAggregateOutputType | null
    _max: ItemListaComprasMaxAggregateOutputType | null
  }

  type GetItemListaComprasGroupByPayload<T extends ItemListaComprasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemListaComprasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemListaComprasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemListaComprasGroupByOutputType[P]>
            : GetScalarType<T[P], ItemListaComprasGroupByOutputType[P]>
        }
      >
    >


  export type ItemListaComprasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    unidade?: boolean
    comprado?: boolean
    listaComprasId?: boolean
    ingredienteId?: boolean
    listaCompras?: boolean | ListaComprasDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemListaCompras"]>

  export type ItemListaComprasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    unidade?: boolean
    comprado?: boolean
    listaComprasId?: boolean
    ingredienteId?: boolean
    listaCompras?: boolean | ListaComprasDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemListaCompras"]>

  export type ItemListaComprasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    unidade?: boolean
    comprado?: boolean
    listaComprasId?: boolean
    ingredienteId?: boolean
    listaCompras?: boolean | ListaComprasDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemListaCompras"]>

  export type ItemListaComprasSelectScalar = {
    id?: boolean
    quantidade?: boolean
    unidade?: boolean
    comprado?: boolean
    listaComprasId?: boolean
    ingredienteId?: boolean
  }

  export type ItemListaComprasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantidade" | "unidade" | "comprado" | "listaComprasId" | "ingredienteId", ExtArgs["result"]["itemListaCompras"]>
  export type ItemListaComprasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listaCompras?: boolean | ListaComprasDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }
  export type ItemListaComprasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listaCompras?: boolean | ListaComprasDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }
  export type ItemListaComprasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listaCompras?: boolean | ListaComprasDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }

  export type $ItemListaComprasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemListaCompras"
    objects: {
      listaCompras: Prisma.$ListaComprasPayload<ExtArgs>
      ingrediente: Prisma.$IngredientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantidade: number
      unidade: string
      comprado: boolean
      listaComprasId: number
      ingredienteId: number
    }, ExtArgs["result"]["itemListaCompras"]>
    composites: {}
  }

  type ItemListaComprasGetPayload<S extends boolean | null | undefined | ItemListaComprasDefaultArgs> = $Result.GetResult<Prisma.$ItemListaComprasPayload, S>

  type ItemListaComprasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemListaComprasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemListaComprasCountAggregateInputType | true
    }

  export interface ItemListaComprasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemListaCompras'], meta: { name: 'ItemListaCompras' } }
    /**
     * Find zero or one ItemListaCompras that matches the filter.
     * @param {ItemListaComprasFindUniqueArgs} args - Arguments to find a ItemListaCompras
     * @example
     * // Get one ItemListaCompras
     * const itemListaCompras = await prisma.itemListaCompras.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemListaComprasFindUniqueArgs>(args: SelectSubset<T, ItemListaComprasFindUniqueArgs<ExtArgs>>): Prisma__ItemListaComprasClient<$Result.GetResult<Prisma.$ItemListaComprasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemListaCompras that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemListaComprasFindUniqueOrThrowArgs} args - Arguments to find a ItemListaCompras
     * @example
     * // Get one ItemListaCompras
     * const itemListaCompras = await prisma.itemListaCompras.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemListaComprasFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemListaComprasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemListaComprasClient<$Result.GetResult<Prisma.$ItemListaComprasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemListaCompras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemListaComprasFindFirstArgs} args - Arguments to find a ItemListaCompras
     * @example
     * // Get one ItemListaCompras
     * const itemListaCompras = await prisma.itemListaCompras.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemListaComprasFindFirstArgs>(args?: SelectSubset<T, ItemListaComprasFindFirstArgs<ExtArgs>>): Prisma__ItemListaComprasClient<$Result.GetResult<Prisma.$ItemListaComprasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemListaCompras that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemListaComprasFindFirstOrThrowArgs} args - Arguments to find a ItemListaCompras
     * @example
     * // Get one ItemListaCompras
     * const itemListaCompras = await prisma.itemListaCompras.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemListaComprasFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemListaComprasFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemListaComprasClient<$Result.GetResult<Prisma.$ItemListaComprasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemListaCompras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemListaComprasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemListaCompras
     * const itemListaCompras = await prisma.itemListaCompras.findMany()
     * 
     * // Get first 10 ItemListaCompras
     * const itemListaCompras = await prisma.itemListaCompras.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemListaComprasWithIdOnly = await prisma.itemListaCompras.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemListaComprasFindManyArgs>(args?: SelectSubset<T, ItemListaComprasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemListaComprasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemListaCompras.
     * @param {ItemListaComprasCreateArgs} args - Arguments to create a ItemListaCompras.
     * @example
     * // Create one ItemListaCompras
     * const ItemListaCompras = await prisma.itemListaCompras.create({
     *   data: {
     *     // ... data to create a ItemListaCompras
     *   }
     * })
     * 
     */
    create<T extends ItemListaComprasCreateArgs>(args: SelectSubset<T, ItemListaComprasCreateArgs<ExtArgs>>): Prisma__ItemListaComprasClient<$Result.GetResult<Prisma.$ItemListaComprasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemListaCompras.
     * @param {ItemListaComprasCreateManyArgs} args - Arguments to create many ItemListaCompras.
     * @example
     * // Create many ItemListaCompras
     * const itemListaCompras = await prisma.itemListaCompras.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemListaComprasCreateManyArgs>(args?: SelectSubset<T, ItemListaComprasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemListaCompras and returns the data saved in the database.
     * @param {ItemListaComprasCreateManyAndReturnArgs} args - Arguments to create many ItemListaCompras.
     * @example
     * // Create many ItemListaCompras
     * const itemListaCompras = await prisma.itemListaCompras.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemListaCompras and only return the `id`
     * const itemListaComprasWithIdOnly = await prisma.itemListaCompras.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemListaComprasCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemListaComprasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemListaComprasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemListaCompras.
     * @param {ItemListaComprasDeleteArgs} args - Arguments to delete one ItemListaCompras.
     * @example
     * // Delete one ItemListaCompras
     * const ItemListaCompras = await prisma.itemListaCompras.delete({
     *   where: {
     *     // ... filter to delete one ItemListaCompras
     *   }
     * })
     * 
     */
    delete<T extends ItemListaComprasDeleteArgs>(args: SelectSubset<T, ItemListaComprasDeleteArgs<ExtArgs>>): Prisma__ItemListaComprasClient<$Result.GetResult<Prisma.$ItemListaComprasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemListaCompras.
     * @param {ItemListaComprasUpdateArgs} args - Arguments to update one ItemListaCompras.
     * @example
     * // Update one ItemListaCompras
     * const itemListaCompras = await prisma.itemListaCompras.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemListaComprasUpdateArgs>(args: SelectSubset<T, ItemListaComprasUpdateArgs<ExtArgs>>): Prisma__ItemListaComprasClient<$Result.GetResult<Prisma.$ItemListaComprasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemListaCompras.
     * @param {ItemListaComprasDeleteManyArgs} args - Arguments to filter ItemListaCompras to delete.
     * @example
     * // Delete a few ItemListaCompras
     * const { count } = await prisma.itemListaCompras.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemListaComprasDeleteManyArgs>(args?: SelectSubset<T, ItemListaComprasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemListaCompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemListaComprasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemListaCompras
     * const itemListaCompras = await prisma.itemListaCompras.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemListaComprasUpdateManyArgs>(args: SelectSubset<T, ItemListaComprasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemListaCompras and returns the data updated in the database.
     * @param {ItemListaComprasUpdateManyAndReturnArgs} args - Arguments to update many ItemListaCompras.
     * @example
     * // Update many ItemListaCompras
     * const itemListaCompras = await prisma.itemListaCompras.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemListaCompras and only return the `id`
     * const itemListaComprasWithIdOnly = await prisma.itemListaCompras.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemListaComprasUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemListaComprasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemListaComprasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemListaCompras.
     * @param {ItemListaComprasUpsertArgs} args - Arguments to update or create a ItemListaCompras.
     * @example
     * // Update or create a ItemListaCompras
     * const itemListaCompras = await prisma.itemListaCompras.upsert({
     *   create: {
     *     // ... data to create a ItemListaCompras
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemListaCompras we want to update
     *   }
     * })
     */
    upsert<T extends ItemListaComprasUpsertArgs>(args: SelectSubset<T, ItemListaComprasUpsertArgs<ExtArgs>>): Prisma__ItemListaComprasClient<$Result.GetResult<Prisma.$ItemListaComprasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemListaCompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemListaComprasCountArgs} args - Arguments to filter ItemListaCompras to count.
     * @example
     * // Count the number of ItemListaCompras
     * const count = await prisma.itemListaCompras.count({
     *   where: {
     *     // ... the filter for the ItemListaCompras we want to count
     *   }
     * })
    **/
    count<T extends ItemListaComprasCountArgs>(
      args?: Subset<T, ItemListaComprasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemListaComprasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemListaCompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemListaComprasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemListaComprasAggregateArgs>(args: Subset<T, ItemListaComprasAggregateArgs>): Prisma.PrismaPromise<GetItemListaComprasAggregateType<T>>

    /**
     * Group by ItemListaCompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemListaComprasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemListaComprasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemListaComprasGroupByArgs['orderBy'] }
        : { orderBy?: ItemListaComprasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemListaComprasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemListaComprasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemListaCompras model
   */
  readonly fields: ItemListaComprasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemListaCompras.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemListaComprasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listaCompras<T extends ListaComprasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListaComprasDefaultArgs<ExtArgs>>): Prisma__ListaComprasClient<$Result.GetResult<Prisma.$ListaComprasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingrediente<T extends IngredienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngredienteDefaultArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemListaCompras model
   */
  interface ItemListaComprasFieldRefs {
    readonly id: FieldRef<"ItemListaCompras", 'Int'>
    readonly quantidade: FieldRef<"ItemListaCompras", 'Float'>
    readonly unidade: FieldRef<"ItemListaCompras", 'String'>
    readonly comprado: FieldRef<"ItemListaCompras", 'Boolean'>
    readonly listaComprasId: FieldRef<"ItemListaCompras", 'Int'>
    readonly ingredienteId: FieldRef<"ItemListaCompras", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ItemListaCompras findUnique
   */
  export type ItemListaComprasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaCompras
     */
    select?: ItemListaComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaCompras
     */
    omit?: ItemListaComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaComprasInclude<ExtArgs> | null
    /**
     * Filter, which ItemListaCompras to fetch.
     */
    where: ItemListaComprasWhereUniqueInput
  }

  /**
   * ItemListaCompras findUniqueOrThrow
   */
  export type ItemListaComprasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaCompras
     */
    select?: ItemListaComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaCompras
     */
    omit?: ItemListaComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaComprasInclude<ExtArgs> | null
    /**
     * Filter, which ItemListaCompras to fetch.
     */
    where: ItemListaComprasWhereUniqueInput
  }

  /**
   * ItemListaCompras findFirst
   */
  export type ItemListaComprasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaCompras
     */
    select?: ItemListaComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaCompras
     */
    omit?: ItemListaComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaComprasInclude<ExtArgs> | null
    /**
     * Filter, which ItemListaCompras to fetch.
     */
    where?: ItemListaComprasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemListaCompras to fetch.
     */
    orderBy?: ItemListaComprasOrderByWithRelationInput | ItemListaComprasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemListaCompras.
     */
    cursor?: ItemListaComprasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemListaCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemListaCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemListaCompras.
     */
    distinct?: ItemListaComprasScalarFieldEnum | ItemListaComprasScalarFieldEnum[]
  }

  /**
   * ItemListaCompras findFirstOrThrow
   */
  export type ItemListaComprasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaCompras
     */
    select?: ItemListaComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaCompras
     */
    omit?: ItemListaComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaComprasInclude<ExtArgs> | null
    /**
     * Filter, which ItemListaCompras to fetch.
     */
    where?: ItemListaComprasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemListaCompras to fetch.
     */
    orderBy?: ItemListaComprasOrderByWithRelationInput | ItemListaComprasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemListaCompras.
     */
    cursor?: ItemListaComprasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemListaCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemListaCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemListaCompras.
     */
    distinct?: ItemListaComprasScalarFieldEnum | ItemListaComprasScalarFieldEnum[]
  }

  /**
   * ItemListaCompras findMany
   */
  export type ItemListaComprasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaCompras
     */
    select?: ItemListaComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaCompras
     */
    omit?: ItemListaComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaComprasInclude<ExtArgs> | null
    /**
     * Filter, which ItemListaCompras to fetch.
     */
    where?: ItemListaComprasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemListaCompras to fetch.
     */
    orderBy?: ItemListaComprasOrderByWithRelationInput | ItemListaComprasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemListaCompras.
     */
    cursor?: ItemListaComprasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemListaCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemListaCompras.
     */
    skip?: number
    distinct?: ItemListaComprasScalarFieldEnum | ItemListaComprasScalarFieldEnum[]
  }

  /**
   * ItemListaCompras create
   */
  export type ItemListaComprasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaCompras
     */
    select?: ItemListaComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaCompras
     */
    omit?: ItemListaComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaComprasInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemListaCompras.
     */
    data: XOR<ItemListaComprasCreateInput, ItemListaComprasUncheckedCreateInput>
  }

  /**
   * ItemListaCompras createMany
   */
  export type ItemListaComprasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemListaCompras.
     */
    data: ItemListaComprasCreateManyInput | ItemListaComprasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemListaCompras createManyAndReturn
   */
  export type ItemListaComprasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaCompras
     */
    select?: ItemListaComprasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaCompras
     */
    omit?: ItemListaComprasOmit<ExtArgs> | null
    /**
     * The data used to create many ItemListaCompras.
     */
    data: ItemListaComprasCreateManyInput | ItemListaComprasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaComprasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemListaCompras update
   */
  export type ItemListaComprasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaCompras
     */
    select?: ItemListaComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaCompras
     */
    omit?: ItemListaComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaComprasInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemListaCompras.
     */
    data: XOR<ItemListaComprasUpdateInput, ItemListaComprasUncheckedUpdateInput>
    /**
     * Choose, which ItemListaCompras to update.
     */
    where: ItemListaComprasWhereUniqueInput
  }

  /**
   * ItemListaCompras updateMany
   */
  export type ItemListaComprasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemListaCompras.
     */
    data: XOR<ItemListaComprasUpdateManyMutationInput, ItemListaComprasUncheckedUpdateManyInput>
    /**
     * Filter which ItemListaCompras to update
     */
    where?: ItemListaComprasWhereInput
    /**
     * Limit how many ItemListaCompras to update.
     */
    limit?: number
  }

  /**
   * ItemListaCompras updateManyAndReturn
   */
  export type ItemListaComprasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaCompras
     */
    select?: ItemListaComprasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaCompras
     */
    omit?: ItemListaComprasOmit<ExtArgs> | null
    /**
     * The data used to update ItemListaCompras.
     */
    data: XOR<ItemListaComprasUpdateManyMutationInput, ItemListaComprasUncheckedUpdateManyInput>
    /**
     * Filter which ItemListaCompras to update
     */
    where?: ItemListaComprasWhereInput
    /**
     * Limit how many ItemListaCompras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaComprasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemListaCompras upsert
   */
  export type ItemListaComprasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaCompras
     */
    select?: ItemListaComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaCompras
     */
    omit?: ItemListaComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaComprasInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemListaCompras to update in case it exists.
     */
    where: ItemListaComprasWhereUniqueInput
    /**
     * In case the ItemListaCompras found by the `where` argument doesn't exist, create a new ItemListaCompras with this data.
     */
    create: XOR<ItemListaComprasCreateInput, ItemListaComprasUncheckedCreateInput>
    /**
     * In case the ItemListaCompras was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemListaComprasUpdateInput, ItemListaComprasUncheckedUpdateInput>
  }

  /**
   * ItemListaCompras delete
   */
  export type ItemListaComprasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaCompras
     */
    select?: ItemListaComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaCompras
     */
    omit?: ItemListaComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaComprasInclude<ExtArgs> | null
    /**
     * Filter which ItemListaCompras to delete.
     */
    where: ItemListaComprasWhereUniqueInput
  }

  /**
   * ItemListaCompras deleteMany
   */
  export type ItemListaComprasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemListaCompras to delete
     */
    where?: ItemListaComprasWhereInput
    /**
     * Limit how many ItemListaCompras to delete.
     */
    limit?: number
  }

  /**
   * ItemListaCompras without action
   */
  export type ItemListaComprasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaCompras
     */
    select?: ItemListaComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaCompras
     */
    omit?: ItemListaComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaComprasInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const EtiquetaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EtiquetaScalarFieldEnum = (typeof EtiquetaScalarFieldEnum)[keyof typeof EtiquetaScalarFieldEnum]


  export const IngredienteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    imagemUrl: 'imagemUrl',
    categoriaIngrediente: 'categoriaIngrediente',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IngredienteScalarFieldEnum = (typeof IngredienteScalarFieldEnum)[keyof typeof IngredienteScalarFieldEnum]


  export const ReceitaScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    imagemUrl: 'imagemUrl',
    tempoPreparo: 'tempoPreparo',
    dificuldade: 'dificuldade',
    rendimento: 'rendimento',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    autorId: 'autorId',
    categoriaId: 'categoriaId'
  };

  export type ReceitaScalarFieldEnum = (typeof ReceitaScalarFieldEnum)[keyof typeof ReceitaScalarFieldEnum]


  export const ReceitaEtiquetaScalarFieldEnum: {
    receitaId: 'receitaId',
    etiquetaId: 'etiquetaId',
    assignedAt: 'assignedAt'
  };

  export type ReceitaEtiquetaScalarFieldEnum = (typeof ReceitaEtiquetaScalarFieldEnum)[keyof typeof ReceitaEtiquetaScalarFieldEnum]


  export const ComentarioScalarFieldEnum: {
    id: 'id',
    texto: 'texto',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    autorId: 'autorId',
    receitaId: 'receitaId'
  };

  export type ComentarioScalarFieldEnum = (typeof ComentarioScalarFieldEnum)[keyof typeof ComentarioScalarFieldEnum]


  export const ReceitaFavoritaScalarFieldEnum: {
    usuarioId: 'usuarioId',
    receitaId: 'receitaId',
    favoritedAt: 'favoritedAt'
  };

  export type ReceitaFavoritaScalarFieldEnum = (typeof ReceitaFavoritaScalarFieldEnum)[keyof typeof ReceitaFavoritaScalarFieldEnum]


  export const ItemReceitaIngredienteScalarFieldEnum: {
    id: 'id',
    quantidade: 'quantidade',
    unidade: 'unidade',
    receitaId: 'receitaId',
    ingredienteId: 'ingredienteId'
  };

  export type ItemReceitaIngredienteScalarFieldEnum = (typeof ItemReceitaIngredienteScalarFieldEnum)[keyof typeof ItemReceitaIngredienteScalarFieldEnum]


  export const ListaComprasScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    usuarioId: 'usuarioId'
  };

  export type ListaComprasScalarFieldEnum = (typeof ListaComprasScalarFieldEnum)[keyof typeof ListaComprasScalarFieldEnum]


  export const ItemListaComprasScalarFieldEnum: {
    id: 'id',
    quantidade: 'quantidade',
    unidade: 'unidade',
    comprado: 'comprado',
    listaComprasId: 'listaComprasId',
    ingredienteId: 'ingredienteId'
  };

  export type ItemListaComprasScalarFieldEnum = (typeof ItemListaComprasScalarFieldEnum)[keyof typeof ItemListaComprasScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'DificuldadeReceita'
   */
  export type EnumDificuldadeReceitaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DificuldadeReceita'>
    


  /**
   * Reference to a field of type 'DificuldadeReceita[]'
   */
  export type ListEnumDificuldadeReceitaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DificuldadeReceita[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    role?: EnumRoleFilter<"Usuario"> | $Enums.Role
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    receitasCadastradas?: ReceitaListRelationFilter
    comentarios?: ComentarioListRelationFilter
    receitasFavoritas?: ReceitaFavoritaListRelationFilter
    listaDeCompras?: XOR<ListaComprasNullableScalarRelationFilter, ListaComprasWhereInput> | null
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    receitasCadastradas?: ReceitaOrderByRelationAggregateInput
    comentarios?: ComentarioOrderByRelationAggregateInput
    receitasFavoritas?: ReceitaFavoritaOrderByRelationAggregateInput
    listaDeCompras?: ListaComprasOrderByWithRelationInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    role?: EnumRoleFilter<"Usuario"> | $Enums.Role
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    receitasCadastradas?: ReceitaListRelationFilter
    comentarios?: ComentarioListRelationFilter
    receitasFavoritas?: ReceitaFavoritaListRelationFilter
    listaDeCompras?: XOR<ListaComprasNullableScalarRelationFilter, ListaComprasWhereInput> | null
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    role?: EnumRoleWithAggregatesFilter<"Usuario"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: IntFilter<"Categoria"> | number
    nome?: StringFilter<"Categoria"> | string
    createdAt?: DateTimeFilter<"Categoria"> | Date | string
    updatedAt?: DateTimeFilter<"Categoria"> | Date | string
    receitas?: ReceitaListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    receitas?: ReceitaOrderByRelationAggregateInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    createdAt?: DateTimeFilter<"Categoria"> | Date | string
    updatedAt?: DateTimeFilter<"Categoria"> | Date | string
    receitas?: ReceitaListRelationFilter
  }, "id" | "nome">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _avg?: CategoriaAvgOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
    _sum?: CategoriaSumOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categoria"> | number
    nome?: StringWithAggregatesFilter<"Categoria"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Categoria"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Categoria"> | Date | string
  }

  export type EtiquetaWhereInput = {
    AND?: EtiquetaWhereInput | EtiquetaWhereInput[]
    OR?: EtiquetaWhereInput[]
    NOT?: EtiquetaWhereInput | EtiquetaWhereInput[]
    id?: IntFilter<"Etiqueta"> | number
    nome?: StringFilter<"Etiqueta"> | string
    createdAt?: DateTimeFilter<"Etiqueta"> | Date | string
    updatedAt?: DateTimeFilter<"Etiqueta"> | Date | string
    receitas?: ReceitaEtiquetaListRelationFilter
  }

  export type EtiquetaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    receitas?: ReceitaEtiquetaOrderByRelationAggregateInput
  }

  export type EtiquetaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: EtiquetaWhereInput | EtiquetaWhereInput[]
    OR?: EtiquetaWhereInput[]
    NOT?: EtiquetaWhereInput | EtiquetaWhereInput[]
    createdAt?: DateTimeFilter<"Etiqueta"> | Date | string
    updatedAt?: DateTimeFilter<"Etiqueta"> | Date | string
    receitas?: ReceitaEtiquetaListRelationFilter
  }, "id" | "nome">

  export type EtiquetaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EtiquetaCountOrderByAggregateInput
    _avg?: EtiquetaAvgOrderByAggregateInput
    _max?: EtiquetaMaxOrderByAggregateInput
    _min?: EtiquetaMinOrderByAggregateInput
    _sum?: EtiquetaSumOrderByAggregateInput
  }

  export type EtiquetaScalarWhereWithAggregatesInput = {
    AND?: EtiquetaScalarWhereWithAggregatesInput | EtiquetaScalarWhereWithAggregatesInput[]
    OR?: EtiquetaScalarWhereWithAggregatesInput[]
    NOT?: EtiquetaScalarWhereWithAggregatesInput | EtiquetaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Etiqueta"> | number
    nome?: StringWithAggregatesFilter<"Etiqueta"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Etiqueta"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Etiqueta"> | Date | string
  }

  export type IngredienteWhereInput = {
    AND?: IngredienteWhereInput | IngredienteWhereInput[]
    OR?: IngredienteWhereInput[]
    NOT?: IngredienteWhereInput | IngredienteWhereInput[]
    id?: IntFilter<"Ingrediente"> | number
    nome?: StringFilter<"Ingrediente"> | string
    imagemUrl?: StringNullableFilter<"Ingrediente"> | string | null
    categoriaIngrediente?: StringNullableFilter<"Ingrediente"> | string | null
    createdAt?: DateTimeFilter<"Ingrediente"> | Date | string
    updatedAt?: DateTimeFilter<"Ingrediente"> | Date | string
    itemEmReceitas?: ItemReceitaIngredienteListRelationFilter
    itemEmListasDeCompras?: ItemListaComprasListRelationFilter
  }

  export type IngredienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    imagemUrl?: SortOrderInput | SortOrder
    categoriaIngrediente?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    itemEmReceitas?: ItemReceitaIngredienteOrderByRelationAggregateInput
    itemEmListasDeCompras?: ItemListaComprasOrderByRelationAggregateInput
  }

  export type IngredienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: IngredienteWhereInput | IngredienteWhereInput[]
    OR?: IngredienteWhereInput[]
    NOT?: IngredienteWhereInput | IngredienteWhereInput[]
    imagemUrl?: StringNullableFilter<"Ingrediente"> | string | null
    categoriaIngrediente?: StringNullableFilter<"Ingrediente"> | string | null
    createdAt?: DateTimeFilter<"Ingrediente"> | Date | string
    updatedAt?: DateTimeFilter<"Ingrediente"> | Date | string
    itemEmReceitas?: ItemReceitaIngredienteListRelationFilter
    itemEmListasDeCompras?: ItemListaComprasListRelationFilter
  }, "id" | "nome">

  export type IngredienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    imagemUrl?: SortOrderInput | SortOrder
    categoriaIngrediente?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IngredienteCountOrderByAggregateInput
    _avg?: IngredienteAvgOrderByAggregateInput
    _max?: IngredienteMaxOrderByAggregateInput
    _min?: IngredienteMinOrderByAggregateInput
    _sum?: IngredienteSumOrderByAggregateInput
  }

  export type IngredienteScalarWhereWithAggregatesInput = {
    AND?: IngredienteScalarWhereWithAggregatesInput | IngredienteScalarWhereWithAggregatesInput[]
    OR?: IngredienteScalarWhereWithAggregatesInput[]
    NOT?: IngredienteScalarWhereWithAggregatesInput | IngredienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ingrediente"> | number
    nome?: StringWithAggregatesFilter<"Ingrediente"> | string
    imagemUrl?: StringNullableWithAggregatesFilter<"Ingrediente"> | string | null
    categoriaIngrediente?: StringNullableWithAggregatesFilter<"Ingrediente"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Ingrediente"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ingrediente"> | Date | string
  }

  export type ReceitaWhereInput = {
    AND?: ReceitaWhereInput | ReceitaWhereInput[]
    OR?: ReceitaWhereInput[]
    NOT?: ReceitaWhereInput | ReceitaWhereInput[]
    id?: IntFilter<"Receita"> | number
    titulo?: StringFilter<"Receita"> | string
    descricao?: StringFilter<"Receita"> | string
    imagemUrl?: StringNullableFilter<"Receita"> | string | null
    tempoPreparo?: StringFilter<"Receita"> | string
    dificuldade?: EnumDificuldadeReceitaFilter<"Receita"> | $Enums.DificuldadeReceita
    rendimento?: IntFilter<"Receita"> | number
    createdAt?: DateTimeFilter<"Receita"> | Date | string
    updatedAt?: DateTimeFilter<"Receita"> | Date | string
    autorId?: IntFilter<"Receita"> | number
    categoriaId?: IntFilter<"Receita"> | number
    autor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    comentarios?: ComentarioListRelationFilter
    etiquetas?: ReceitaEtiquetaListRelationFilter
    favoritadoPor?: ReceitaFavoritaListRelationFilter
    ingredientes?: ItemReceitaIngredienteListRelationFilter
  }

  export type ReceitaOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    imagemUrl?: SortOrderInput | SortOrder
    tempoPreparo?: SortOrder
    dificuldade?: SortOrder
    rendimento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    autorId?: SortOrder
    categoriaId?: SortOrder
    autor?: UsuarioOrderByWithRelationInput
    categoria?: CategoriaOrderByWithRelationInput
    comentarios?: ComentarioOrderByRelationAggregateInput
    etiquetas?: ReceitaEtiquetaOrderByRelationAggregateInput
    favoritadoPor?: ReceitaFavoritaOrderByRelationAggregateInput
    ingredientes?: ItemReceitaIngredienteOrderByRelationAggregateInput
  }

  export type ReceitaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReceitaWhereInput | ReceitaWhereInput[]
    OR?: ReceitaWhereInput[]
    NOT?: ReceitaWhereInput | ReceitaWhereInput[]
    titulo?: StringFilter<"Receita"> | string
    descricao?: StringFilter<"Receita"> | string
    imagemUrl?: StringNullableFilter<"Receita"> | string | null
    tempoPreparo?: StringFilter<"Receita"> | string
    dificuldade?: EnumDificuldadeReceitaFilter<"Receita"> | $Enums.DificuldadeReceita
    rendimento?: IntFilter<"Receita"> | number
    createdAt?: DateTimeFilter<"Receita"> | Date | string
    updatedAt?: DateTimeFilter<"Receita"> | Date | string
    autorId?: IntFilter<"Receita"> | number
    categoriaId?: IntFilter<"Receita"> | number
    autor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    comentarios?: ComentarioListRelationFilter
    etiquetas?: ReceitaEtiquetaListRelationFilter
    favoritadoPor?: ReceitaFavoritaListRelationFilter
    ingredientes?: ItemReceitaIngredienteListRelationFilter
  }, "id">

  export type ReceitaOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    imagemUrl?: SortOrderInput | SortOrder
    tempoPreparo?: SortOrder
    dificuldade?: SortOrder
    rendimento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    autorId?: SortOrder
    categoriaId?: SortOrder
    _count?: ReceitaCountOrderByAggregateInput
    _avg?: ReceitaAvgOrderByAggregateInput
    _max?: ReceitaMaxOrderByAggregateInput
    _min?: ReceitaMinOrderByAggregateInput
    _sum?: ReceitaSumOrderByAggregateInput
  }

  export type ReceitaScalarWhereWithAggregatesInput = {
    AND?: ReceitaScalarWhereWithAggregatesInput | ReceitaScalarWhereWithAggregatesInput[]
    OR?: ReceitaScalarWhereWithAggregatesInput[]
    NOT?: ReceitaScalarWhereWithAggregatesInput | ReceitaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Receita"> | number
    titulo?: StringWithAggregatesFilter<"Receita"> | string
    descricao?: StringWithAggregatesFilter<"Receita"> | string
    imagemUrl?: StringNullableWithAggregatesFilter<"Receita"> | string | null
    tempoPreparo?: StringWithAggregatesFilter<"Receita"> | string
    dificuldade?: EnumDificuldadeReceitaWithAggregatesFilter<"Receita"> | $Enums.DificuldadeReceita
    rendimento?: IntWithAggregatesFilter<"Receita"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Receita"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Receita"> | Date | string
    autorId?: IntWithAggregatesFilter<"Receita"> | number
    categoriaId?: IntWithAggregatesFilter<"Receita"> | number
  }

  export type ReceitaEtiquetaWhereInput = {
    AND?: ReceitaEtiquetaWhereInput | ReceitaEtiquetaWhereInput[]
    OR?: ReceitaEtiquetaWhereInput[]
    NOT?: ReceitaEtiquetaWhereInput | ReceitaEtiquetaWhereInput[]
    receitaId?: IntFilter<"ReceitaEtiqueta"> | number
    etiquetaId?: IntFilter<"ReceitaEtiqueta"> | number
    assignedAt?: DateTimeFilter<"ReceitaEtiqueta"> | Date | string
    receita?: XOR<ReceitaScalarRelationFilter, ReceitaWhereInput>
    etiqueta?: XOR<EtiquetaScalarRelationFilter, EtiquetaWhereInput>
  }

  export type ReceitaEtiquetaOrderByWithRelationInput = {
    receitaId?: SortOrder
    etiquetaId?: SortOrder
    assignedAt?: SortOrder
    receita?: ReceitaOrderByWithRelationInput
    etiqueta?: EtiquetaOrderByWithRelationInput
  }

  export type ReceitaEtiquetaWhereUniqueInput = Prisma.AtLeast<{
    receitaId_etiquetaId?: ReceitaEtiquetaReceitaIdEtiquetaIdCompoundUniqueInput
    AND?: ReceitaEtiquetaWhereInput | ReceitaEtiquetaWhereInput[]
    OR?: ReceitaEtiquetaWhereInput[]
    NOT?: ReceitaEtiquetaWhereInput | ReceitaEtiquetaWhereInput[]
    receitaId?: IntFilter<"ReceitaEtiqueta"> | number
    etiquetaId?: IntFilter<"ReceitaEtiqueta"> | number
    assignedAt?: DateTimeFilter<"ReceitaEtiqueta"> | Date | string
    receita?: XOR<ReceitaScalarRelationFilter, ReceitaWhereInput>
    etiqueta?: XOR<EtiquetaScalarRelationFilter, EtiquetaWhereInput>
  }, "receitaId_etiquetaId">

  export type ReceitaEtiquetaOrderByWithAggregationInput = {
    receitaId?: SortOrder
    etiquetaId?: SortOrder
    assignedAt?: SortOrder
    _count?: ReceitaEtiquetaCountOrderByAggregateInput
    _avg?: ReceitaEtiquetaAvgOrderByAggregateInput
    _max?: ReceitaEtiquetaMaxOrderByAggregateInput
    _min?: ReceitaEtiquetaMinOrderByAggregateInput
    _sum?: ReceitaEtiquetaSumOrderByAggregateInput
  }

  export type ReceitaEtiquetaScalarWhereWithAggregatesInput = {
    AND?: ReceitaEtiquetaScalarWhereWithAggregatesInput | ReceitaEtiquetaScalarWhereWithAggregatesInput[]
    OR?: ReceitaEtiquetaScalarWhereWithAggregatesInput[]
    NOT?: ReceitaEtiquetaScalarWhereWithAggregatesInput | ReceitaEtiquetaScalarWhereWithAggregatesInput[]
    receitaId?: IntWithAggregatesFilter<"ReceitaEtiqueta"> | number
    etiquetaId?: IntWithAggregatesFilter<"ReceitaEtiqueta"> | number
    assignedAt?: DateTimeWithAggregatesFilter<"ReceitaEtiqueta"> | Date | string
  }

  export type ComentarioWhereInput = {
    AND?: ComentarioWhereInput | ComentarioWhereInput[]
    OR?: ComentarioWhereInput[]
    NOT?: ComentarioWhereInput | ComentarioWhereInput[]
    id?: IntFilter<"Comentario"> | number
    texto?: StringFilter<"Comentario"> | string
    createdAt?: DateTimeFilter<"Comentario"> | Date | string
    updatedAt?: DateTimeFilter<"Comentario"> | Date | string
    autorId?: IntFilter<"Comentario"> | number
    receitaId?: IntFilter<"Comentario"> | number
    autor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    receita?: XOR<ReceitaScalarRelationFilter, ReceitaWhereInput>
  }

  export type ComentarioOrderByWithRelationInput = {
    id?: SortOrder
    texto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    autorId?: SortOrder
    receitaId?: SortOrder
    autor?: UsuarioOrderByWithRelationInput
    receita?: ReceitaOrderByWithRelationInput
  }

  export type ComentarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ComentarioWhereInput | ComentarioWhereInput[]
    OR?: ComentarioWhereInput[]
    NOT?: ComentarioWhereInput | ComentarioWhereInput[]
    texto?: StringFilter<"Comentario"> | string
    createdAt?: DateTimeFilter<"Comentario"> | Date | string
    updatedAt?: DateTimeFilter<"Comentario"> | Date | string
    autorId?: IntFilter<"Comentario"> | number
    receitaId?: IntFilter<"Comentario"> | number
    autor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    receita?: XOR<ReceitaScalarRelationFilter, ReceitaWhereInput>
  }, "id">

  export type ComentarioOrderByWithAggregationInput = {
    id?: SortOrder
    texto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    autorId?: SortOrder
    receitaId?: SortOrder
    _count?: ComentarioCountOrderByAggregateInput
    _avg?: ComentarioAvgOrderByAggregateInput
    _max?: ComentarioMaxOrderByAggregateInput
    _min?: ComentarioMinOrderByAggregateInput
    _sum?: ComentarioSumOrderByAggregateInput
  }

  export type ComentarioScalarWhereWithAggregatesInput = {
    AND?: ComentarioScalarWhereWithAggregatesInput | ComentarioScalarWhereWithAggregatesInput[]
    OR?: ComentarioScalarWhereWithAggregatesInput[]
    NOT?: ComentarioScalarWhereWithAggregatesInput | ComentarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comentario"> | number
    texto?: StringWithAggregatesFilter<"Comentario"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comentario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comentario"> | Date | string
    autorId?: IntWithAggregatesFilter<"Comentario"> | number
    receitaId?: IntWithAggregatesFilter<"Comentario"> | number
  }

  export type ReceitaFavoritaWhereInput = {
    AND?: ReceitaFavoritaWhereInput | ReceitaFavoritaWhereInput[]
    OR?: ReceitaFavoritaWhereInput[]
    NOT?: ReceitaFavoritaWhereInput | ReceitaFavoritaWhereInput[]
    usuarioId?: IntFilter<"ReceitaFavorita"> | number
    receitaId?: IntFilter<"ReceitaFavorita"> | number
    favoritedAt?: DateTimeFilter<"ReceitaFavorita"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    receita?: XOR<ReceitaScalarRelationFilter, ReceitaWhereInput>
  }

  export type ReceitaFavoritaOrderByWithRelationInput = {
    usuarioId?: SortOrder
    receitaId?: SortOrder
    favoritedAt?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    receita?: ReceitaOrderByWithRelationInput
  }

  export type ReceitaFavoritaWhereUniqueInput = Prisma.AtLeast<{
    usuarioId_receitaId?: ReceitaFavoritaUsuarioIdReceitaIdCompoundUniqueInput
    AND?: ReceitaFavoritaWhereInput | ReceitaFavoritaWhereInput[]
    OR?: ReceitaFavoritaWhereInput[]
    NOT?: ReceitaFavoritaWhereInput | ReceitaFavoritaWhereInput[]
    usuarioId?: IntFilter<"ReceitaFavorita"> | number
    receitaId?: IntFilter<"ReceitaFavorita"> | number
    favoritedAt?: DateTimeFilter<"ReceitaFavorita"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    receita?: XOR<ReceitaScalarRelationFilter, ReceitaWhereInput>
  }, "usuarioId_receitaId">

  export type ReceitaFavoritaOrderByWithAggregationInput = {
    usuarioId?: SortOrder
    receitaId?: SortOrder
    favoritedAt?: SortOrder
    _count?: ReceitaFavoritaCountOrderByAggregateInput
    _avg?: ReceitaFavoritaAvgOrderByAggregateInput
    _max?: ReceitaFavoritaMaxOrderByAggregateInput
    _min?: ReceitaFavoritaMinOrderByAggregateInput
    _sum?: ReceitaFavoritaSumOrderByAggregateInput
  }

  export type ReceitaFavoritaScalarWhereWithAggregatesInput = {
    AND?: ReceitaFavoritaScalarWhereWithAggregatesInput | ReceitaFavoritaScalarWhereWithAggregatesInput[]
    OR?: ReceitaFavoritaScalarWhereWithAggregatesInput[]
    NOT?: ReceitaFavoritaScalarWhereWithAggregatesInput | ReceitaFavoritaScalarWhereWithAggregatesInput[]
    usuarioId?: IntWithAggregatesFilter<"ReceitaFavorita"> | number
    receitaId?: IntWithAggregatesFilter<"ReceitaFavorita"> | number
    favoritedAt?: DateTimeWithAggregatesFilter<"ReceitaFavorita"> | Date | string
  }

  export type ItemReceitaIngredienteWhereInput = {
    AND?: ItemReceitaIngredienteWhereInput | ItemReceitaIngredienteWhereInput[]
    OR?: ItemReceitaIngredienteWhereInput[]
    NOT?: ItemReceitaIngredienteWhereInput | ItemReceitaIngredienteWhereInput[]
    id?: IntFilter<"ItemReceitaIngrediente"> | number
    quantidade?: FloatFilter<"ItemReceitaIngrediente"> | number
    unidade?: StringFilter<"ItemReceitaIngrediente"> | string
    receitaId?: IntFilter<"ItemReceitaIngrediente"> | number
    ingredienteId?: IntFilter<"ItemReceitaIngrediente"> | number
    receita?: XOR<ReceitaScalarRelationFilter, ReceitaWhereInput>
    ingrediente?: XOR<IngredienteScalarRelationFilter, IngredienteWhereInput>
  }

  export type ItemReceitaIngredienteOrderByWithRelationInput = {
    id?: SortOrder
    quantidade?: SortOrder
    unidade?: SortOrder
    receitaId?: SortOrder
    ingredienteId?: SortOrder
    receita?: ReceitaOrderByWithRelationInput
    ingrediente?: IngredienteOrderByWithRelationInput
  }

  export type ItemReceitaIngredienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemReceitaIngredienteWhereInput | ItemReceitaIngredienteWhereInput[]
    OR?: ItemReceitaIngredienteWhereInput[]
    NOT?: ItemReceitaIngredienteWhereInput | ItemReceitaIngredienteWhereInput[]
    quantidade?: FloatFilter<"ItemReceitaIngrediente"> | number
    unidade?: StringFilter<"ItemReceitaIngrediente"> | string
    receitaId?: IntFilter<"ItemReceitaIngrediente"> | number
    ingredienteId?: IntFilter<"ItemReceitaIngrediente"> | number
    receita?: XOR<ReceitaScalarRelationFilter, ReceitaWhereInput>
    ingrediente?: XOR<IngredienteScalarRelationFilter, IngredienteWhereInput>
  }, "id">

  export type ItemReceitaIngredienteOrderByWithAggregationInput = {
    id?: SortOrder
    quantidade?: SortOrder
    unidade?: SortOrder
    receitaId?: SortOrder
    ingredienteId?: SortOrder
    _count?: ItemReceitaIngredienteCountOrderByAggregateInput
    _avg?: ItemReceitaIngredienteAvgOrderByAggregateInput
    _max?: ItemReceitaIngredienteMaxOrderByAggregateInput
    _min?: ItemReceitaIngredienteMinOrderByAggregateInput
    _sum?: ItemReceitaIngredienteSumOrderByAggregateInput
  }

  export type ItemReceitaIngredienteScalarWhereWithAggregatesInput = {
    AND?: ItemReceitaIngredienteScalarWhereWithAggregatesInput | ItemReceitaIngredienteScalarWhereWithAggregatesInput[]
    OR?: ItemReceitaIngredienteScalarWhereWithAggregatesInput[]
    NOT?: ItemReceitaIngredienteScalarWhereWithAggregatesInput | ItemReceitaIngredienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ItemReceitaIngrediente"> | number
    quantidade?: FloatWithAggregatesFilter<"ItemReceitaIngrediente"> | number
    unidade?: StringWithAggregatesFilter<"ItemReceitaIngrediente"> | string
    receitaId?: IntWithAggregatesFilter<"ItemReceitaIngrediente"> | number
    ingredienteId?: IntWithAggregatesFilter<"ItemReceitaIngrediente"> | number
  }

  export type ListaComprasWhereInput = {
    AND?: ListaComprasWhereInput | ListaComprasWhereInput[]
    OR?: ListaComprasWhereInput[]
    NOT?: ListaComprasWhereInput | ListaComprasWhereInput[]
    id?: IntFilter<"ListaCompras"> | number
    createdAt?: DateTimeFilter<"ListaCompras"> | Date | string
    updatedAt?: DateTimeFilter<"ListaCompras"> | Date | string
    usuarioId?: IntFilter<"ListaCompras"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    itens?: ItemListaComprasListRelationFilter
  }

  export type ListaComprasOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    itens?: ItemListaComprasOrderByRelationAggregateInput
  }

  export type ListaComprasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuarioId?: number
    AND?: ListaComprasWhereInput | ListaComprasWhereInput[]
    OR?: ListaComprasWhereInput[]
    NOT?: ListaComprasWhereInput | ListaComprasWhereInput[]
    createdAt?: DateTimeFilter<"ListaCompras"> | Date | string
    updatedAt?: DateTimeFilter<"ListaCompras"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    itens?: ItemListaComprasListRelationFilter
  }, "id" | "usuarioId">

  export type ListaComprasOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
    _count?: ListaComprasCountOrderByAggregateInput
    _avg?: ListaComprasAvgOrderByAggregateInput
    _max?: ListaComprasMaxOrderByAggregateInput
    _min?: ListaComprasMinOrderByAggregateInput
    _sum?: ListaComprasSumOrderByAggregateInput
  }

  export type ListaComprasScalarWhereWithAggregatesInput = {
    AND?: ListaComprasScalarWhereWithAggregatesInput | ListaComprasScalarWhereWithAggregatesInput[]
    OR?: ListaComprasScalarWhereWithAggregatesInput[]
    NOT?: ListaComprasScalarWhereWithAggregatesInput | ListaComprasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ListaCompras"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ListaCompras"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ListaCompras"> | Date | string
    usuarioId?: IntWithAggregatesFilter<"ListaCompras"> | number
  }

  export type ItemListaComprasWhereInput = {
    AND?: ItemListaComprasWhereInput | ItemListaComprasWhereInput[]
    OR?: ItemListaComprasWhereInput[]
    NOT?: ItemListaComprasWhereInput | ItemListaComprasWhereInput[]
    id?: IntFilter<"ItemListaCompras"> | number
    quantidade?: FloatFilter<"ItemListaCompras"> | number
    unidade?: StringFilter<"ItemListaCompras"> | string
    comprado?: BoolFilter<"ItemListaCompras"> | boolean
    listaComprasId?: IntFilter<"ItemListaCompras"> | number
    ingredienteId?: IntFilter<"ItemListaCompras"> | number
    listaCompras?: XOR<ListaComprasScalarRelationFilter, ListaComprasWhereInput>
    ingrediente?: XOR<IngredienteScalarRelationFilter, IngredienteWhereInput>
  }

  export type ItemListaComprasOrderByWithRelationInput = {
    id?: SortOrder
    quantidade?: SortOrder
    unidade?: SortOrder
    comprado?: SortOrder
    listaComprasId?: SortOrder
    ingredienteId?: SortOrder
    listaCompras?: ListaComprasOrderByWithRelationInput
    ingrediente?: IngredienteOrderByWithRelationInput
  }

  export type ItemListaComprasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemListaComprasWhereInput | ItemListaComprasWhereInput[]
    OR?: ItemListaComprasWhereInput[]
    NOT?: ItemListaComprasWhereInput | ItemListaComprasWhereInput[]
    quantidade?: FloatFilter<"ItemListaCompras"> | number
    unidade?: StringFilter<"ItemListaCompras"> | string
    comprado?: BoolFilter<"ItemListaCompras"> | boolean
    listaComprasId?: IntFilter<"ItemListaCompras"> | number
    ingredienteId?: IntFilter<"ItemListaCompras"> | number
    listaCompras?: XOR<ListaComprasScalarRelationFilter, ListaComprasWhereInput>
    ingrediente?: XOR<IngredienteScalarRelationFilter, IngredienteWhereInput>
  }, "id">

  export type ItemListaComprasOrderByWithAggregationInput = {
    id?: SortOrder
    quantidade?: SortOrder
    unidade?: SortOrder
    comprado?: SortOrder
    listaComprasId?: SortOrder
    ingredienteId?: SortOrder
    _count?: ItemListaComprasCountOrderByAggregateInput
    _avg?: ItemListaComprasAvgOrderByAggregateInput
    _max?: ItemListaComprasMaxOrderByAggregateInput
    _min?: ItemListaComprasMinOrderByAggregateInput
    _sum?: ItemListaComprasSumOrderByAggregateInput
  }

  export type ItemListaComprasScalarWhereWithAggregatesInput = {
    AND?: ItemListaComprasScalarWhereWithAggregatesInput | ItemListaComprasScalarWhereWithAggregatesInput[]
    OR?: ItemListaComprasScalarWhereWithAggregatesInput[]
    NOT?: ItemListaComprasScalarWhereWithAggregatesInput | ItemListaComprasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ItemListaCompras"> | number
    quantidade?: FloatWithAggregatesFilter<"ItemListaCompras"> | number
    unidade?: StringWithAggregatesFilter<"ItemListaCompras"> | string
    comprado?: BoolWithAggregatesFilter<"ItemListaCompras"> | boolean
    listaComprasId?: IntWithAggregatesFilter<"ItemListaCompras"> | number
    ingredienteId?: IntWithAggregatesFilter<"ItemListaCompras"> | number
  }

  export type UsuarioCreateInput = {
    nome: string
    email: string
    senha: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    receitasCadastradas?: ReceitaCreateNestedManyWithoutAutorInput
    comentarios?: ComentarioCreateNestedManyWithoutAutorInput
    receitasFavoritas?: ReceitaFavoritaCreateNestedManyWithoutUsuarioInput
    listaDeCompras?: ListaComprasCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    receitasCadastradas?: ReceitaUncheckedCreateNestedManyWithoutAutorInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutAutorInput
    receitasFavoritas?: ReceitaFavoritaUncheckedCreateNestedManyWithoutUsuarioInput
    listaDeCompras?: ListaComprasUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receitasCadastradas?: ReceitaUpdateManyWithoutAutorNestedInput
    comentarios?: ComentarioUpdateManyWithoutAutorNestedInput
    receitasFavoritas?: ReceitaFavoritaUpdateManyWithoutUsuarioNestedInput
    listaDeCompras?: ListaComprasUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receitasCadastradas?: ReceitaUncheckedUpdateManyWithoutAutorNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutAutorNestedInput
    receitasFavoritas?: ReceitaFavoritaUncheckedUpdateManyWithoutUsuarioNestedInput
    listaDeCompras?: ListaComprasUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaCreateInput = {
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    receitas?: ReceitaCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id?: number
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    receitas?: ReceitaUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receitas?: ReceitaUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receitas?: ReceitaUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id?: number
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EtiquetaCreateInput = {
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    receitas?: ReceitaEtiquetaCreateNestedManyWithoutEtiquetaInput
  }

  export type EtiquetaUncheckedCreateInput = {
    id?: number
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    receitas?: ReceitaEtiquetaUncheckedCreateNestedManyWithoutEtiquetaInput
  }

  export type EtiquetaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receitas?: ReceitaEtiquetaUpdateManyWithoutEtiquetaNestedInput
  }

  export type EtiquetaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receitas?: ReceitaEtiquetaUncheckedUpdateManyWithoutEtiquetaNestedInput
  }

  export type EtiquetaCreateManyInput = {
    id?: number
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EtiquetaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EtiquetaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredienteCreateInput = {
    nome: string
    imagemUrl?: string | null
    categoriaIngrediente?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    itemEmReceitas?: ItemReceitaIngredienteCreateNestedManyWithoutIngredienteInput
    itemEmListasDeCompras?: ItemListaComprasCreateNestedManyWithoutIngredienteInput
  }

  export type IngredienteUncheckedCreateInput = {
    id?: number
    nome: string
    imagemUrl?: string | null
    categoriaIngrediente?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    itemEmReceitas?: ItemReceitaIngredienteUncheckedCreateNestedManyWithoutIngredienteInput
    itemEmListasDeCompras?: ItemListaComprasUncheckedCreateNestedManyWithoutIngredienteInput
  }

  export type IngredienteUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoriaIngrediente?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itemEmReceitas?: ItemReceitaIngredienteUpdateManyWithoutIngredienteNestedInput
    itemEmListasDeCompras?: ItemListaComprasUpdateManyWithoutIngredienteNestedInput
  }

  export type IngredienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoriaIngrediente?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itemEmReceitas?: ItemReceitaIngredienteUncheckedUpdateManyWithoutIngredienteNestedInput
    itemEmListasDeCompras?: ItemListaComprasUncheckedUpdateManyWithoutIngredienteNestedInput
  }

  export type IngredienteCreateManyInput = {
    id?: number
    nome: string
    imagemUrl?: string | null
    categoriaIngrediente?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IngredienteUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoriaIngrediente?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoriaIngrediente?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceitaCreateInput = {
    titulo: string
    descricao: string
    imagemUrl?: string | null
    tempoPreparo: string
    dificuldade: $Enums.DificuldadeReceita
    rendimento: number
    createdAt?: Date | string
    updatedAt?: Date | string
    autor: UsuarioCreateNestedOneWithoutReceitasCadastradasInput
    categoria: CategoriaCreateNestedOneWithoutReceitasInput
    comentarios?: ComentarioCreateNestedManyWithoutReceitaInput
    etiquetas?: ReceitaEtiquetaCreateNestedManyWithoutReceitaInput
    favoritadoPor?: ReceitaFavoritaCreateNestedManyWithoutReceitaInput
    ingredientes?: ItemReceitaIngredienteCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaUncheckedCreateInput = {
    id?: number
    titulo: string
    descricao: string
    imagemUrl?: string | null
    tempoPreparo: string
    dificuldade: $Enums.DificuldadeReceita
    rendimento: number
    createdAt?: Date | string
    updatedAt?: Date | string
    autorId: number
    categoriaId: number
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutReceitaInput
    etiquetas?: ReceitaEtiquetaUncheckedCreateNestedManyWithoutReceitaInput
    favoritadoPor?: ReceitaFavoritaUncheckedCreateNestedManyWithoutReceitaInput
    ingredientes?: ItemReceitaIngredienteUncheckedCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tempoPreparo?: StringFieldUpdateOperationsInput | string
    dificuldade?: EnumDificuldadeReceitaFieldUpdateOperationsInput | $Enums.DificuldadeReceita
    rendimento?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autor?: UsuarioUpdateOneRequiredWithoutReceitasCadastradasNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutReceitasNestedInput
    comentarios?: ComentarioUpdateManyWithoutReceitaNestedInput
    etiquetas?: ReceitaEtiquetaUpdateManyWithoutReceitaNestedInput
    favoritadoPor?: ReceitaFavoritaUpdateManyWithoutReceitaNestedInput
    ingredientes?: ItemReceitaIngredienteUpdateManyWithoutReceitaNestedInput
  }

  export type ReceitaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tempoPreparo?: StringFieldUpdateOperationsInput | string
    dificuldade?: EnumDificuldadeReceitaFieldUpdateOperationsInput | $Enums.DificuldadeReceita
    rendimento?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autorId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    comentarios?: ComentarioUncheckedUpdateManyWithoutReceitaNestedInput
    etiquetas?: ReceitaEtiquetaUncheckedUpdateManyWithoutReceitaNestedInput
    favoritadoPor?: ReceitaFavoritaUncheckedUpdateManyWithoutReceitaNestedInput
    ingredientes?: ItemReceitaIngredienteUncheckedUpdateManyWithoutReceitaNestedInput
  }

  export type ReceitaCreateManyInput = {
    id?: number
    titulo: string
    descricao: string
    imagemUrl?: string | null
    tempoPreparo: string
    dificuldade: $Enums.DificuldadeReceita
    rendimento: number
    createdAt?: Date | string
    updatedAt?: Date | string
    autorId: number
    categoriaId: number
  }

  export type ReceitaUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tempoPreparo?: StringFieldUpdateOperationsInput | string
    dificuldade?: EnumDificuldadeReceitaFieldUpdateOperationsInput | $Enums.DificuldadeReceita
    rendimento?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceitaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tempoPreparo?: StringFieldUpdateOperationsInput | string
    dificuldade?: EnumDificuldadeReceitaFieldUpdateOperationsInput | $Enums.DificuldadeReceita
    rendimento?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autorId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
  }

  export type ReceitaEtiquetaCreateInput = {
    assignedAt?: Date | string
    receita: ReceitaCreateNestedOneWithoutEtiquetasInput
    etiqueta: EtiquetaCreateNestedOneWithoutReceitasInput
  }

  export type ReceitaEtiquetaUncheckedCreateInput = {
    receitaId: number
    etiquetaId: number
    assignedAt?: Date | string
  }

  export type ReceitaEtiquetaUpdateInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receita?: ReceitaUpdateOneRequiredWithoutEtiquetasNestedInput
    etiqueta?: EtiquetaUpdateOneRequiredWithoutReceitasNestedInput
  }

  export type ReceitaEtiquetaUncheckedUpdateInput = {
    receitaId?: IntFieldUpdateOperationsInput | number
    etiquetaId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceitaEtiquetaCreateManyInput = {
    receitaId: number
    etiquetaId: number
    assignedAt?: Date | string
  }

  export type ReceitaEtiquetaUpdateManyMutationInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceitaEtiquetaUncheckedUpdateManyInput = {
    receitaId?: IntFieldUpdateOperationsInput | number
    etiquetaId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioCreateInput = {
    texto: string
    createdAt?: Date | string
    updatedAt?: Date | string
    autor: UsuarioCreateNestedOneWithoutComentariosInput
    receita: ReceitaCreateNestedOneWithoutComentariosInput
  }

  export type ComentarioUncheckedCreateInput = {
    id?: number
    texto: string
    createdAt?: Date | string
    updatedAt?: Date | string
    autorId: number
    receitaId: number
  }

  export type ComentarioUpdateInput = {
    texto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autor?: UsuarioUpdateOneRequiredWithoutComentariosNestedInput
    receita?: ReceitaUpdateOneRequiredWithoutComentariosNestedInput
  }

  export type ComentarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    texto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autorId?: IntFieldUpdateOperationsInput | number
    receitaId?: IntFieldUpdateOperationsInput | number
  }

  export type ComentarioCreateManyInput = {
    id?: number
    texto: string
    createdAt?: Date | string
    updatedAt?: Date | string
    autorId: number
    receitaId: number
  }

  export type ComentarioUpdateManyMutationInput = {
    texto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    texto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autorId?: IntFieldUpdateOperationsInput | number
    receitaId?: IntFieldUpdateOperationsInput | number
  }

  export type ReceitaFavoritaCreateInput = {
    favoritedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutReceitasFavoritasInput
    receita: ReceitaCreateNestedOneWithoutFavoritadoPorInput
  }

  export type ReceitaFavoritaUncheckedCreateInput = {
    usuarioId: number
    receitaId: number
    favoritedAt?: Date | string
  }

  export type ReceitaFavoritaUpdateInput = {
    favoritedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutReceitasFavoritasNestedInput
    receita?: ReceitaUpdateOneRequiredWithoutFavoritadoPorNestedInput
  }

  export type ReceitaFavoritaUncheckedUpdateInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
    receitaId?: IntFieldUpdateOperationsInput | number
    favoritedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceitaFavoritaCreateManyInput = {
    usuarioId: number
    receitaId: number
    favoritedAt?: Date | string
  }

  export type ReceitaFavoritaUpdateManyMutationInput = {
    favoritedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceitaFavoritaUncheckedUpdateManyInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
    receitaId?: IntFieldUpdateOperationsInput | number
    favoritedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemReceitaIngredienteCreateInput = {
    quantidade: number
    unidade: string
    receita: ReceitaCreateNestedOneWithoutIngredientesInput
    ingrediente: IngredienteCreateNestedOneWithoutItemEmReceitasInput
  }

  export type ItemReceitaIngredienteUncheckedCreateInput = {
    id?: number
    quantidade: number
    unidade: string
    receitaId: number
    ingredienteId: number
  }

  export type ItemReceitaIngredienteUpdateInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    receita?: ReceitaUpdateOneRequiredWithoutIngredientesNestedInput
    ingrediente?: IngredienteUpdateOneRequiredWithoutItemEmReceitasNestedInput
  }

  export type ItemReceitaIngredienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    receitaId?: IntFieldUpdateOperationsInput | number
    ingredienteId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemReceitaIngredienteCreateManyInput = {
    id?: number
    quantidade: number
    unidade: string
    receitaId: number
    ingredienteId: number
  }

  export type ItemReceitaIngredienteUpdateManyMutationInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
  }

  export type ItemReceitaIngredienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    receitaId?: IntFieldUpdateOperationsInput | number
    ingredienteId?: IntFieldUpdateOperationsInput | number
  }

  export type ListaComprasCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutListaDeComprasInput
    itens?: ItemListaComprasCreateNestedManyWithoutListaComprasInput
  }

  export type ListaComprasUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: number
    itens?: ItemListaComprasUncheckedCreateNestedManyWithoutListaComprasInput
  }

  export type ListaComprasUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutListaDeComprasNestedInput
    itens?: ItemListaComprasUpdateManyWithoutListaComprasNestedInput
  }

  export type ListaComprasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    itens?: ItemListaComprasUncheckedUpdateManyWithoutListaComprasNestedInput
  }

  export type ListaComprasCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: number
  }

  export type ListaComprasUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListaComprasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemListaComprasCreateInput = {
    quantidade: number
    unidade: string
    comprado?: boolean
    listaCompras: ListaComprasCreateNestedOneWithoutItensInput
    ingrediente: IngredienteCreateNestedOneWithoutItemEmListasDeComprasInput
  }

  export type ItemListaComprasUncheckedCreateInput = {
    id?: number
    quantidade: number
    unidade: string
    comprado?: boolean
    listaComprasId: number
    ingredienteId: number
  }

  export type ItemListaComprasUpdateInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    comprado?: BoolFieldUpdateOperationsInput | boolean
    listaCompras?: ListaComprasUpdateOneRequiredWithoutItensNestedInput
    ingrediente?: IngredienteUpdateOneRequiredWithoutItemEmListasDeComprasNestedInput
  }

  export type ItemListaComprasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    comprado?: BoolFieldUpdateOperationsInput | boolean
    listaComprasId?: IntFieldUpdateOperationsInput | number
    ingredienteId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemListaComprasCreateManyInput = {
    id?: number
    quantidade: number
    unidade: string
    comprado?: boolean
    listaComprasId: number
    ingredienteId: number
  }

  export type ItemListaComprasUpdateManyMutationInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    comprado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ItemListaComprasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    comprado?: BoolFieldUpdateOperationsInput | boolean
    listaComprasId?: IntFieldUpdateOperationsInput | number
    ingredienteId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ReceitaListRelationFilter = {
    every?: ReceitaWhereInput
    some?: ReceitaWhereInput
    none?: ReceitaWhereInput
  }

  export type ComentarioListRelationFilter = {
    every?: ComentarioWhereInput
    some?: ComentarioWhereInput
    none?: ComentarioWhereInput
  }

  export type ReceitaFavoritaListRelationFilter = {
    every?: ReceitaFavoritaWhereInput
    some?: ReceitaFavoritaWhereInput
    none?: ReceitaFavoritaWhereInput
  }

  export type ListaComprasNullableScalarRelationFilter = {
    is?: ListaComprasWhereInput | null
    isNot?: ListaComprasWhereInput | null
  }

  export type ReceitaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComentarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReceitaFavoritaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ReceitaEtiquetaListRelationFilter = {
    every?: ReceitaEtiquetaWhereInput
    some?: ReceitaEtiquetaWhereInput
    none?: ReceitaEtiquetaWhereInput
  }

  export type ReceitaEtiquetaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EtiquetaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EtiquetaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EtiquetaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EtiquetaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EtiquetaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ItemReceitaIngredienteListRelationFilter = {
    every?: ItemReceitaIngredienteWhereInput
    some?: ItemReceitaIngredienteWhereInput
    none?: ItemReceitaIngredienteWhereInput
  }

  export type ItemListaComprasListRelationFilter = {
    every?: ItemListaComprasWhereInput
    some?: ItemListaComprasWhereInput
    none?: ItemListaComprasWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ItemReceitaIngredienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemListaComprasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IngredienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    imagemUrl?: SortOrder
    categoriaIngrediente?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IngredienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IngredienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    imagemUrl?: SortOrder
    categoriaIngrediente?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IngredienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    imagemUrl?: SortOrder
    categoriaIngrediente?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IngredienteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumDificuldadeReceitaFilter<$PrismaModel = never> = {
    equals?: $Enums.DificuldadeReceita | EnumDificuldadeReceitaFieldRefInput<$PrismaModel>
    in?: $Enums.DificuldadeReceita[] | ListEnumDificuldadeReceitaFieldRefInput<$PrismaModel>
    notIn?: $Enums.DificuldadeReceita[] | ListEnumDificuldadeReceitaFieldRefInput<$PrismaModel>
    not?: NestedEnumDificuldadeReceitaFilter<$PrismaModel> | $Enums.DificuldadeReceita
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type CategoriaScalarRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type ReceitaCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    imagemUrl?: SortOrder
    tempoPreparo?: SortOrder
    dificuldade?: SortOrder
    rendimento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    autorId?: SortOrder
    categoriaId?: SortOrder
  }

  export type ReceitaAvgOrderByAggregateInput = {
    id?: SortOrder
    rendimento?: SortOrder
    autorId?: SortOrder
    categoriaId?: SortOrder
  }

  export type ReceitaMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    imagemUrl?: SortOrder
    tempoPreparo?: SortOrder
    dificuldade?: SortOrder
    rendimento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    autorId?: SortOrder
    categoriaId?: SortOrder
  }

  export type ReceitaMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    imagemUrl?: SortOrder
    tempoPreparo?: SortOrder
    dificuldade?: SortOrder
    rendimento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    autorId?: SortOrder
    categoriaId?: SortOrder
  }

  export type ReceitaSumOrderByAggregateInput = {
    id?: SortOrder
    rendimento?: SortOrder
    autorId?: SortOrder
    categoriaId?: SortOrder
  }

  export type EnumDificuldadeReceitaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DificuldadeReceita | EnumDificuldadeReceitaFieldRefInput<$PrismaModel>
    in?: $Enums.DificuldadeReceita[] | ListEnumDificuldadeReceitaFieldRefInput<$PrismaModel>
    notIn?: $Enums.DificuldadeReceita[] | ListEnumDificuldadeReceitaFieldRefInput<$PrismaModel>
    not?: NestedEnumDificuldadeReceitaWithAggregatesFilter<$PrismaModel> | $Enums.DificuldadeReceita
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDificuldadeReceitaFilter<$PrismaModel>
    _max?: NestedEnumDificuldadeReceitaFilter<$PrismaModel>
  }

  export type ReceitaScalarRelationFilter = {
    is?: ReceitaWhereInput
    isNot?: ReceitaWhereInput
  }

  export type EtiquetaScalarRelationFilter = {
    is?: EtiquetaWhereInput
    isNot?: EtiquetaWhereInput
  }

  export type ReceitaEtiquetaReceitaIdEtiquetaIdCompoundUniqueInput = {
    receitaId: number
    etiquetaId: number
  }

  export type ReceitaEtiquetaCountOrderByAggregateInput = {
    receitaId?: SortOrder
    etiquetaId?: SortOrder
    assignedAt?: SortOrder
  }

  export type ReceitaEtiquetaAvgOrderByAggregateInput = {
    receitaId?: SortOrder
    etiquetaId?: SortOrder
  }

  export type ReceitaEtiquetaMaxOrderByAggregateInput = {
    receitaId?: SortOrder
    etiquetaId?: SortOrder
    assignedAt?: SortOrder
  }

  export type ReceitaEtiquetaMinOrderByAggregateInput = {
    receitaId?: SortOrder
    etiquetaId?: SortOrder
    assignedAt?: SortOrder
  }

  export type ReceitaEtiquetaSumOrderByAggregateInput = {
    receitaId?: SortOrder
    etiquetaId?: SortOrder
  }

  export type ComentarioCountOrderByAggregateInput = {
    id?: SortOrder
    texto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    autorId?: SortOrder
    receitaId?: SortOrder
  }

  export type ComentarioAvgOrderByAggregateInput = {
    id?: SortOrder
    autorId?: SortOrder
    receitaId?: SortOrder
  }

  export type ComentarioMaxOrderByAggregateInput = {
    id?: SortOrder
    texto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    autorId?: SortOrder
    receitaId?: SortOrder
  }

  export type ComentarioMinOrderByAggregateInput = {
    id?: SortOrder
    texto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    autorId?: SortOrder
    receitaId?: SortOrder
  }

  export type ComentarioSumOrderByAggregateInput = {
    id?: SortOrder
    autorId?: SortOrder
    receitaId?: SortOrder
  }

  export type ReceitaFavoritaUsuarioIdReceitaIdCompoundUniqueInput = {
    usuarioId: number
    receitaId: number
  }

  export type ReceitaFavoritaCountOrderByAggregateInput = {
    usuarioId?: SortOrder
    receitaId?: SortOrder
    favoritedAt?: SortOrder
  }

  export type ReceitaFavoritaAvgOrderByAggregateInput = {
    usuarioId?: SortOrder
    receitaId?: SortOrder
  }

  export type ReceitaFavoritaMaxOrderByAggregateInput = {
    usuarioId?: SortOrder
    receitaId?: SortOrder
    favoritedAt?: SortOrder
  }

  export type ReceitaFavoritaMinOrderByAggregateInput = {
    usuarioId?: SortOrder
    receitaId?: SortOrder
    favoritedAt?: SortOrder
  }

  export type ReceitaFavoritaSumOrderByAggregateInput = {
    usuarioId?: SortOrder
    receitaId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IngredienteScalarRelationFilter = {
    is?: IngredienteWhereInput
    isNot?: IngredienteWhereInput
  }

  export type ItemReceitaIngredienteCountOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    unidade?: SortOrder
    receitaId?: SortOrder
    ingredienteId?: SortOrder
  }

  export type ItemReceitaIngredienteAvgOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    receitaId?: SortOrder
    ingredienteId?: SortOrder
  }

  export type ItemReceitaIngredienteMaxOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    unidade?: SortOrder
    receitaId?: SortOrder
    ingredienteId?: SortOrder
  }

  export type ItemReceitaIngredienteMinOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    unidade?: SortOrder
    receitaId?: SortOrder
    ingredienteId?: SortOrder
  }

  export type ItemReceitaIngredienteSumOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    receitaId?: SortOrder
    ingredienteId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ListaComprasCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
  }

  export type ListaComprasAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type ListaComprasMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
  }

  export type ListaComprasMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
  }

  export type ListaComprasSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ListaComprasScalarRelationFilter = {
    is?: ListaComprasWhereInput
    isNot?: ListaComprasWhereInput
  }

  export type ItemListaComprasCountOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    unidade?: SortOrder
    comprado?: SortOrder
    listaComprasId?: SortOrder
    ingredienteId?: SortOrder
  }

  export type ItemListaComprasAvgOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    listaComprasId?: SortOrder
    ingredienteId?: SortOrder
  }

  export type ItemListaComprasMaxOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    unidade?: SortOrder
    comprado?: SortOrder
    listaComprasId?: SortOrder
    ingredienteId?: SortOrder
  }

  export type ItemListaComprasMinOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    unidade?: SortOrder
    comprado?: SortOrder
    listaComprasId?: SortOrder
    ingredienteId?: SortOrder
  }

  export type ItemListaComprasSumOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    listaComprasId?: SortOrder
    ingredienteId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ReceitaCreateNestedManyWithoutAutorInput = {
    create?: XOR<ReceitaCreateWithoutAutorInput, ReceitaUncheckedCreateWithoutAutorInput> | ReceitaCreateWithoutAutorInput[] | ReceitaUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: ReceitaCreateOrConnectWithoutAutorInput | ReceitaCreateOrConnectWithoutAutorInput[]
    createMany?: ReceitaCreateManyAutorInputEnvelope
    connect?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
  }

  export type ComentarioCreateNestedManyWithoutAutorInput = {
    create?: XOR<ComentarioCreateWithoutAutorInput, ComentarioUncheckedCreateWithoutAutorInput> | ComentarioCreateWithoutAutorInput[] | ComentarioUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutAutorInput | ComentarioCreateOrConnectWithoutAutorInput[]
    createMany?: ComentarioCreateManyAutorInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type ReceitaFavoritaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ReceitaFavoritaCreateWithoutUsuarioInput, ReceitaFavoritaUncheckedCreateWithoutUsuarioInput> | ReceitaFavoritaCreateWithoutUsuarioInput[] | ReceitaFavoritaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReceitaFavoritaCreateOrConnectWithoutUsuarioInput | ReceitaFavoritaCreateOrConnectWithoutUsuarioInput[]
    createMany?: ReceitaFavoritaCreateManyUsuarioInputEnvelope
    connect?: ReceitaFavoritaWhereUniqueInput | ReceitaFavoritaWhereUniqueInput[]
  }

  export type ListaComprasCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<ListaComprasCreateWithoutUsuarioInput, ListaComprasUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ListaComprasCreateOrConnectWithoutUsuarioInput
    connect?: ListaComprasWhereUniqueInput
  }

  export type ReceitaUncheckedCreateNestedManyWithoutAutorInput = {
    create?: XOR<ReceitaCreateWithoutAutorInput, ReceitaUncheckedCreateWithoutAutorInput> | ReceitaCreateWithoutAutorInput[] | ReceitaUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: ReceitaCreateOrConnectWithoutAutorInput | ReceitaCreateOrConnectWithoutAutorInput[]
    createMany?: ReceitaCreateManyAutorInputEnvelope
    connect?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
  }

  export type ComentarioUncheckedCreateNestedManyWithoutAutorInput = {
    create?: XOR<ComentarioCreateWithoutAutorInput, ComentarioUncheckedCreateWithoutAutorInput> | ComentarioCreateWithoutAutorInput[] | ComentarioUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutAutorInput | ComentarioCreateOrConnectWithoutAutorInput[]
    createMany?: ComentarioCreateManyAutorInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type ReceitaFavoritaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ReceitaFavoritaCreateWithoutUsuarioInput, ReceitaFavoritaUncheckedCreateWithoutUsuarioInput> | ReceitaFavoritaCreateWithoutUsuarioInput[] | ReceitaFavoritaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReceitaFavoritaCreateOrConnectWithoutUsuarioInput | ReceitaFavoritaCreateOrConnectWithoutUsuarioInput[]
    createMany?: ReceitaFavoritaCreateManyUsuarioInputEnvelope
    connect?: ReceitaFavoritaWhereUniqueInput | ReceitaFavoritaWhereUniqueInput[]
  }

  export type ListaComprasUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<ListaComprasCreateWithoutUsuarioInput, ListaComprasUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ListaComprasCreateOrConnectWithoutUsuarioInput
    connect?: ListaComprasWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReceitaUpdateManyWithoutAutorNestedInput = {
    create?: XOR<ReceitaCreateWithoutAutorInput, ReceitaUncheckedCreateWithoutAutorInput> | ReceitaCreateWithoutAutorInput[] | ReceitaUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: ReceitaCreateOrConnectWithoutAutorInput | ReceitaCreateOrConnectWithoutAutorInput[]
    upsert?: ReceitaUpsertWithWhereUniqueWithoutAutorInput | ReceitaUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: ReceitaCreateManyAutorInputEnvelope
    set?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
    disconnect?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
    delete?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
    connect?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
    update?: ReceitaUpdateWithWhereUniqueWithoutAutorInput | ReceitaUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: ReceitaUpdateManyWithWhereWithoutAutorInput | ReceitaUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: ReceitaScalarWhereInput | ReceitaScalarWhereInput[]
  }

  export type ComentarioUpdateManyWithoutAutorNestedInput = {
    create?: XOR<ComentarioCreateWithoutAutorInput, ComentarioUncheckedCreateWithoutAutorInput> | ComentarioCreateWithoutAutorInput[] | ComentarioUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutAutorInput | ComentarioCreateOrConnectWithoutAutorInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutAutorInput | ComentarioUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: ComentarioCreateManyAutorInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutAutorInput | ComentarioUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutAutorInput | ComentarioUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type ReceitaFavoritaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ReceitaFavoritaCreateWithoutUsuarioInput, ReceitaFavoritaUncheckedCreateWithoutUsuarioInput> | ReceitaFavoritaCreateWithoutUsuarioInput[] | ReceitaFavoritaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReceitaFavoritaCreateOrConnectWithoutUsuarioInput | ReceitaFavoritaCreateOrConnectWithoutUsuarioInput[]
    upsert?: ReceitaFavoritaUpsertWithWhereUniqueWithoutUsuarioInput | ReceitaFavoritaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ReceitaFavoritaCreateManyUsuarioInputEnvelope
    set?: ReceitaFavoritaWhereUniqueInput | ReceitaFavoritaWhereUniqueInput[]
    disconnect?: ReceitaFavoritaWhereUniqueInput | ReceitaFavoritaWhereUniqueInput[]
    delete?: ReceitaFavoritaWhereUniqueInput | ReceitaFavoritaWhereUniqueInput[]
    connect?: ReceitaFavoritaWhereUniqueInput | ReceitaFavoritaWhereUniqueInput[]
    update?: ReceitaFavoritaUpdateWithWhereUniqueWithoutUsuarioInput | ReceitaFavoritaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ReceitaFavoritaUpdateManyWithWhereWithoutUsuarioInput | ReceitaFavoritaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ReceitaFavoritaScalarWhereInput | ReceitaFavoritaScalarWhereInput[]
  }

  export type ListaComprasUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<ListaComprasCreateWithoutUsuarioInput, ListaComprasUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ListaComprasCreateOrConnectWithoutUsuarioInput
    upsert?: ListaComprasUpsertWithoutUsuarioInput
    disconnect?: ListaComprasWhereInput | boolean
    delete?: ListaComprasWhereInput | boolean
    connect?: ListaComprasWhereUniqueInput
    update?: XOR<XOR<ListaComprasUpdateToOneWithWhereWithoutUsuarioInput, ListaComprasUpdateWithoutUsuarioInput>, ListaComprasUncheckedUpdateWithoutUsuarioInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReceitaUncheckedUpdateManyWithoutAutorNestedInput = {
    create?: XOR<ReceitaCreateWithoutAutorInput, ReceitaUncheckedCreateWithoutAutorInput> | ReceitaCreateWithoutAutorInput[] | ReceitaUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: ReceitaCreateOrConnectWithoutAutorInput | ReceitaCreateOrConnectWithoutAutorInput[]
    upsert?: ReceitaUpsertWithWhereUniqueWithoutAutorInput | ReceitaUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: ReceitaCreateManyAutorInputEnvelope
    set?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
    disconnect?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
    delete?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
    connect?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
    update?: ReceitaUpdateWithWhereUniqueWithoutAutorInput | ReceitaUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: ReceitaUpdateManyWithWhereWithoutAutorInput | ReceitaUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: ReceitaScalarWhereInput | ReceitaScalarWhereInput[]
  }

  export type ComentarioUncheckedUpdateManyWithoutAutorNestedInput = {
    create?: XOR<ComentarioCreateWithoutAutorInput, ComentarioUncheckedCreateWithoutAutorInput> | ComentarioCreateWithoutAutorInput[] | ComentarioUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutAutorInput | ComentarioCreateOrConnectWithoutAutorInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutAutorInput | ComentarioUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: ComentarioCreateManyAutorInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutAutorInput | ComentarioUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutAutorInput | ComentarioUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type ReceitaFavoritaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ReceitaFavoritaCreateWithoutUsuarioInput, ReceitaFavoritaUncheckedCreateWithoutUsuarioInput> | ReceitaFavoritaCreateWithoutUsuarioInput[] | ReceitaFavoritaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReceitaFavoritaCreateOrConnectWithoutUsuarioInput | ReceitaFavoritaCreateOrConnectWithoutUsuarioInput[]
    upsert?: ReceitaFavoritaUpsertWithWhereUniqueWithoutUsuarioInput | ReceitaFavoritaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ReceitaFavoritaCreateManyUsuarioInputEnvelope
    set?: ReceitaFavoritaWhereUniqueInput | ReceitaFavoritaWhereUniqueInput[]
    disconnect?: ReceitaFavoritaWhereUniqueInput | ReceitaFavoritaWhereUniqueInput[]
    delete?: ReceitaFavoritaWhereUniqueInput | ReceitaFavoritaWhereUniqueInput[]
    connect?: ReceitaFavoritaWhereUniqueInput | ReceitaFavoritaWhereUniqueInput[]
    update?: ReceitaFavoritaUpdateWithWhereUniqueWithoutUsuarioInput | ReceitaFavoritaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ReceitaFavoritaUpdateManyWithWhereWithoutUsuarioInput | ReceitaFavoritaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ReceitaFavoritaScalarWhereInput | ReceitaFavoritaScalarWhereInput[]
  }

  export type ListaComprasUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<ListaComprasCreateWithoutUsuarioInput, ListaComprasUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ListaComprasCreateOrConnectWithoutUsuarioInput
    upsert?: ListaComprasUpsertWithoutUsuarioInput
    disconnect?: ListaComprasWhereInput | boolean
    delete?: ListaComprasWhereInput | boolean
    connect?: ListaComprasWhereUniqueInput
    update?: XOR<XOR<ListaComprasUpdateToOneWithWhereWithoutUsuarioInput, ListaComprasUpdateWithoutUsuarioInput>, ListaComprasUncheckedUpdateWithoutUsuarioInput>
  }

  export type ReceitaCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ReceitaCreateWithoutCategoriaInput, ReceitaUncheckedCreateWithoutCategoriaInput> | ReceitaCreateWithoutCategoriaInput[] | ReceitaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ReceitaCreateOrConnectWithoutCategoriaInput | ReceitaCreateOrConnectWithoutCategoriaInput[]
    createMany?: ReceitaCreateManyCategoriaInputEnvelope
    connect?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
  }

  export type ReceitaUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ReceitaCreateWithoutCategoriaInput, ReceitaUncheckedCreateWithoutCategoriaInput> | ReceitaCreateWithoutCategoriaInput[] | ReceitaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ReceitaCreateOrConnectWithoutCategoriaInput | ReceitaCreateOrConnectWithoutCategoriaInput[]
    createMany?: ReceitaCreateManyCategoriaInputEnvelope
    connect?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
  }

  export type ReceitaUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ReceitaCreateWithoutCategoriaInput, ReceitaUncheckedCreateWithoutCategoriaInput> | ReceitaCreateWithoutCategoriaInput[] | ReceitaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ReceitaCreateOrConnectWithoutCategoriaInput | ReceitaCreateOrConnectWithoutCategoriaInput[]
    upsert?: ReceitaUpsertWithWhereUniqueWithoutCategoriaInput | ReceitaUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ReceitaCreateManyCategoriaInputEnvelope
    set?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
    disconnect?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
    delete?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
    connect?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
    update?: ReceitaUpdateWithWhereUniqueWithoutCategoriaInput | ReceitaUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ReceitaUpdateManyWithWhereWithoutCategoriaInput | ReceitaUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ReceitaScalarWhereInput | ReceitaScalarWhereInput[]
  }

  export type ReceitaUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ReceitaCreateWithoutCategoriaInput, ReceitaUncheckedCreateWithoutCategoriaInput> | ReceitaCreateWithoutCategoriaInput[] | ReceitaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ReceitaCreateOrConnectWithoutCategoriaInput | ReceitaCreateOrConnectWithoutCategoriaInput[]
    upsert?: ReceitaUpsertWithWhereUniqueWithoutCategoriaInput | ReceitaUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ReceitaCreateManyCategoriaInputEnvelope
    set?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
    disconnect?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
    delete?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
    connect?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
    update?: ReceitaUpdateWithWhereUniqueWithoutCategoriaInput | ReceitaUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ReceitaUpdateManyWithWhereWithoutCategoriaInput | ReceitaUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ReceitaScalarWhereInput | ReceitaScalarWhereInput[]
  }

  export type ReceitaEtiquetaCreateNestedManyWithoutEtiquetaInput = {
    create?: XOR<ReceitaEtiquetaCreateWithoutEtiquetaInput, ReceitaEtiquetaUncheckedCreateWithoutEtiquetaInput> | ReceitaEtiquetaCreateWithoutEtiquetaInput[] | ReceitaEtiquetaUncheckedCreateWithoutEtiquetaInput[]
    connectOrCreate?: ReceitaEtiquetaCreateOrConnectWithoutEtiquetaInput | ReceitaEtiquetaCreateOrConnectWithoutEtiquetaInput[]
    createMany?: ReceitaEtiquetaCreateManyEtiquetaInputEnvelope
    connect?: ReceitaEtiquetaWhereUniqueInput | ReceitaEtiquetaWhereUniqueInput[]
  }

  export type ReceitaEtiquetaUncheckedCreateNestedManyWithoutEtiquetaInput = {
    create?: XOR<ReceitaEtiquetaCreateWithoutEtiquetaInput, ReceitaEtiquetaUncheckedCreateWithoutEtiquetaInput> | ReceitaEtiquetaCreateWithoutEtiquetaInput[] | ReceitaEtiquetaUncheckedCreateWithoutEtiquetaInput[]
    connectOrCreate?: ReceitaEtiquetaCreateOrConnectWithoutEtiquetaInput | ReceitaEtiquetaCreateOrConnectWithoutEtiquetaInput[]
    createMany?: ReceitaEtiquetaCreateManyEtiquetaInputEnvelope
    connect?: ReceitaEtiquetaWhereUniqueInput | ReceitaEtiquetaWhereUniqueInput[]
  }

  export type ReceitaEtiquetaUpdateManyWithoutEtiquetaNestedInput = {
    create?: XOR<ReceitaEtiquetaCreateWithoutEtiquetaInput, ReceitaEtiquetaUncheckedCreateWithoutEtiquetaInput> | ReceitaEtiquetaCreateWithoutEtiquetaInput[] | ReceitaEtiquetaUncheckedCreateWithoutEtiquetaInput[]
    connectOrCreate?: ReceitaEtiquetaCreateOrConnectWithoutEtiquetaInput | ReceitaEtiquetaCreateOrConnectWithoutEtiquetaInput[]
    upsert?: ReceitaEtiquetaUpsertWithWhereUniqueWithoutEtiquetaInput | ReceitaEtiquetaUpsertWithWhereUniqueWithoutEtiquetaInput[]
    createMany?: ReceitaEtiquetaCreateManyEtiquetaInputEnvelope
    set?: ReceitaEtiquetaWhereUniqueInput | ReceitaEtiquetaWhereUniqueInput[]
    disconnect?: ReceitaEtiquetaWhereUniqueInput | ReceitaEtiquetaWhereUniqueInput[]
    delete?: ReceitaEtiquetaWhereUniqueInput | ReceitaEtiquetaWhereUniqueInput[]
    connect?: ReceitaEtiquetaWhereUniqueInput | ReceitaEtiquetaWhereUniqueInput[]
    update?: ReceitaEtiquetaUpdateWithWhereUniqueWithoutEtiquetaInput | ReceitaEtiquetaUpdateWithWhereUniqueWithoutEtiquetaInput[]
    updateMany?: ReceitaEtiquetaUpdateManyWithWhereWithoutEtiquetaInput | ReceitaEtiquetaUpdateManyWithWhereWithoutEtiquetaInput[]
    deleteMany?: ReceitaEtiquetaScalarWhereInput | ReceitaEtiquetaScalarWhereInput[]
  }

  export type ReceitaEtiquetaUncheckedUpdateManyWithoutEtiquetaNestedInput = {
    create?: XOR<ReceitaEtiquetaCreateWithoutEtiquetaInput, ReceitaEtiquetaUncheckedCreateWithoutEtiquetaInput> | ReceitaEtiquetaCreateWithoutEtiquetaInput[] | ReceitaEtiquetaUncheckedCreateWithoutEtiquetaInput[]
    connectOrCreate?: ReceitaEtiquetaCreateOrConnectWithoutEtiquetaInput | ReceitaEtiquetaCreateOrConnectWithoutEtiquetaInput[]
    upsert?: ReceitaEtiquetaUpsertWithWhereUniqueWithoutEtiquetaInput | ReceitaEtiquetaUpsertWithWhereUniqueWithoutEtiquetaInput[]
    createMany?: ReceitaEtiquetaCreateManyEtiquetaInputEnvelope
    set?: ReceitaEtiquetaWhereUniqueInput | ReceitaEtiquetaWhereUniqueInput[]
    disconnect?: ReceitaEtiquetaWhereUniqueInput | ReceitaEtiquetaWhereUniqueInput[]
    delete?: ReceitaEtiquetaWhereUniqueInput | ReceitaEtiquetaWhereUniqueInput[]
    connect?: ReceitaEtiquetaWhereUniqueInput | ReceitaEtiquetaWhereUniqueInput[]
    update?: ReceitaEtiquetaUpdateWithWhereUniqueWithoutEtiquetaInput | ReceitaEtiquetaUpdateWithWhereUniqueWithoutEtiquetaInput[]
    updateMany?: ReceitaEtiquetaUpdateManyWithWhereWithoutEtiquetaInput | ReceitaEtiquetaUpdateManyWithWhereWithoutEtiquetaInput[]
    deleteMany?: ReceitaEtiquetaScalarWhereInput | ReceitaEtiquetaScalarWhereInput[]
  }

  export type ItemReceitaIngredienteCreateNestedManyWithoutIngredienteInput = {
    create?: XOR<ItemReceitaIngredienteCreateWithoutIngredienteInput, ItemReceitaIngredienteUncheckedCreateWithoutIngredienteInput> | ItemReceitaIngredienteCreateWithoutIngredienteInput[] | ItemReceitaIngredienteUncheckedCreateWithoutIngredienteInput[]
    connectOrCreate?: ItemReceitaIngredienteCreateOrConnectWithoutIngredienteInput | ItemReceitaIngredienteCreateOrConnectWithoutIngredienteInput[]
    createMany?: ItemReceitaIngredienteCreateManyIngredienteInputEnvelope
    connect?: ItemReceitaIngredienteWhereUniqueInput | ItemReceitaIngredienteWhereUniqueInput[]
  }

  export type ItemListaComprasCreateNestedManyWithoutIngredienteInput = {
    create?: XOR<ItemListaComprasCreateWithoutIngredienteInput, ItemListaComprasUncheckedCreateWithoutIngredienteInput> | ItemListaComprasCreateWithoutIngredienteInput[] | ItemListaComprasUncheckedCreateWithoutIngredienteInput[]
    connectOrCreate?: ItemListaComprasCreateOrConnectWithoutIngredienteInput | ItemListaComprasCreateOrConnectWithoutIngredienteInput[]
    createMany?: ItemListaComprasCreateManyIngredienteInputEnvelope
    connect?: ItemListaComprasWhereUniqueInput | ItemListaComprasWhereUniqueInput[]
  }

  export type ItemReceitaIngredienteUncheckedCreateNestedManyWithoutIngredienteInput = {
    create?: XOR<ItemReceitaIngredienteCreateWithoutIngredienteInput, ItemReceitaIngredienteUncheckedCreateWithoutIngredienteInput> | ItemReceitaIngredienteCreateWithoutIngredienteInput[] | ItemReceitaIngredienteUncheckedCreateWithoutIngredienteInput[]
    connectOrCreate?: ItemReceitaIngredienteCreateOrConnectWithoutIngredienteInput | ItemReceitaIngredienteCreateOrConnectWithoutIngredienteInput[]
    createMany?: ItemReceitaIngredienteCreateManyIngredienteInputEnvelope
    connect?: ItemReceitaIngredienteWhereUniqueInput | ItemReceitaIngredienteWhereUniqueInput[]
  }

  export type ItemListaComprasUncheckedCreateNestedManyWithoutIngredienteInput = {
    create?: XOR<ItemListaComprasCreateWithoutIngredienteInput, ItemListaComprasUncheckedCreateWithoutIngredienteInput> | ItemListaComprasCreateWithoutIngredienteInput[] | ItemListaComprasUncheckedCreateWithoutIngredienteInput[]
    connectOrCreate?: ItemListaComprasCreateOrConnectWithoutIngredienteInput | ItemListaComprasCreateOrConnectWithoutIngredienteInput[]
    createMany?: ItemListaComprasCreateManyIngredienteInputEnvelope
    connect?: ItemListaComprasWhereUniqueInput | ItemListaComprasWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ItemReceitaIngredienteUpdateManyWithoutIngredienteNestedInput = {
    create?: XOR<ItemReceitaIngredienteCreateWithoutIngredienteInput, ItemReceitaIngredienteUncheckedCreateWithoutIngredienteInput> | ItemReceitaIngredienteCreateWithoutIngredienteInput[] | ItemReceitaIngredienteUncheckedCreateWithoutIngredienteInput[]
    connectOrCreate?: ItemReceitaIngredienteCreateOrConnectWithoutIngredienteInput | ItemReceitaIngredienteCreateOrConnectWithoutIngredienteInput[]
    upsert?: ItemReceitaIngredienteUpsertWithWhereUniqueWithoutIngredienteInput | ItemReceitaIngredienteUpsertWithWhereUniqueWithoutIngredienteInput[]
    createMany?: ItemReceitaIngredienteCreateManyIngredienteInputEnvelope
    set?: ItemReceitaIngredienteWhereUniqueInput | ItemReceitaIngredienteWhereUniqueInput[]
    disconnect?: ItemReceitaIngredienteWhereUniqueInput | ItemReceitaIngredienteWhereUniqueInput[]
    delete?: ItemReceitaIngredienteWhereUniqueInput | ItemReceitaIngredienteWhereUniqueInput[]
    connect?: ItemReceitaIngredienteWhereUniqueInput | ItemReceitaIngredienteWhereUniqueInput[]
    update?: ItemReceitaIngredienteUpdateWithWhereUniqueWithoutIngredienteInput | ItemReceitaIngredienteUpdateWithWhereUniqueWithoutIngredienteInput[]
    updateMany?: ItemReceitaIngredienteUpdateManyWithWhereWithoutIngredienteInput | ItemReceitaIngredienteUpdateManyWithWhereWithoutIngredienteInput[]
    deleteMany?: ItemReceitaIngredienteScalarWhereInput | ItemReceitaIngredienteScalarWhereInput[]
  }

  export type ItemListaComprasUpdateManyWithoutIngredienteNestedInput = {
    create?: XOR<ItemListaComprasCreateWithoutIngredienteInput, ItemListaComprasUncheckedCreateWithoutIngredienteInput> | ItemListaComprasCreateWithoutIngredienteInput[] | ItemListaComprasUncheckedCreateWithoutIngredienteInput[]
    connectOrCreate?: ItemListaComprasCreateOrConnectWithoutIngredienteInput | ItemListaComprasCreateOrConnectWithoutIngredienteInput[]
    upsert?: ItemListaComprasUpsertWithWhereUniqueWithoutIngredienteInput | ItemListaComprasUpsertWithWhereUniqueWithoutIngredienteInput[]
    createMany?: ItemListaComprasCreateManyIngredienteInputEnvelope
    set?: ItemListaComprasWhereUniqueInput | ItemListaComprasWhereUniqueInput[]
    disconnect?: ItemListaComprasWhereUniqueInput | ItemListaComprasWhereUniqueInput[]
    delete?: ItemListaComprasWhereUniqueInput | ItemListaComprasWhereUniqueInput[]
    connect?: ItemListaComprasWhereUniqueInput | ItemListaComprasWhereUniqueInput[]
    update?: ItemListaComprasUpdateWithWhereUniqueWithoutIngredienteInput | ItemListaComprasUpdateWithWhereUniqueWithoutIngredienteInput[]
    updateMany?: ItemListaComprasUpdateManyWithWhereWithoutIngredienteInput | ItemListaComprasUpdateManyWithWhereWithoutIngredienteInput[]
    deleteMany?: ItemListaComprasScalarWhereInput | ItemListaComprasScalarWhereInput[]
  }

  export type ItemReceitaIngredienteUncheckedUpdateManyWithoutIngredienteNestedInput = {
    create?: XOR<ItemReceitaIngredienteCreateWithoutIngredienteInput, ItemReceitaIngredienteUncheckedCreateWithoutIngredienteInput> | ItemReceitaIngredienteCreateWithoutIngredienteInput[] | ItemReceitaIngredienteUncheckedCreateWithoutIngredienteInput[]
    connectOrCreate?: ItemReceitaIngredienteCreateOrConnectWithoutIngredienteInput | ItemReceitaIngredienteCreateOrConnectWithoutIngredienteInput[]
    upsert?: ItemReceitaIngredienteUpsertWithWhereUniqueWithoutIngredienteInput | ItemReceitaIngredienteUpsertWithWhereUniqueWithoutIngredienteInput[]
    createMany?: ItemReceitaIngredienteCreateManyIngredienteInputEnvelope
    set?: ItemReceitaIngredienteWhereUniqueInput | ItemReceitaIngredienteWhereUniqueInput[]
    disconnect?: ItemReceitaIngredienteWhereUniqueInput | ItemReceitaIngredienteWhereUniqueInput[]
    delete?: ItemReceitaIngredienteWhereUniqueInput | ItemReceitaIngredienteWhereUniqueInput[]
    connect?: ItemReceitaIngredienteWhereUniqueInput | ItemReceitaIngredienteWhereUniqueInput[]
    update?: ItemReceitaIngredienteUpdateWithWhereUniqueWithoutIngredienteInput | ItemReceitaIngredienteUpdateWithWhereUniqueWithoutIngredienteInput[]
    updateMany?: ItemReceitaIngredienteUpdateManyWithWhereWithoutIngredienteInput | ItemReceitaIngredienteUpdateManyWithWhereWithoutIngredienteInput[]
    deleteMany?: ItemReceitaIngredienteScalarWhereInput | ItemReceitaIngredienteScalarWhereInput[]
  }

  export type ItemListaComprasUncheckedUpdateManyWithoutIngredienteNestedInput = {
    create?: XOR<ItemListaComprasCreateWithoutIngredienteInput, ItemListaComprasUncheckedCreateWithoutIngredienteInput> | ItemListaComprasCreateWithoutIngredienteInput[] | ItemListaComprasUncheckedCreateWithoutIngredienteInput[]
    connectOrCreate?: ItemListaComprasCreateOrConnectWithoutIngredienteInput | ItemListaComprasCreateOrConnectWithoutIngredienteInput[]
    upsert?: ItemListaComprasUpsertWithWhereUniqueWithoutIngredienteInput | ItemListaComprasUpsertWithWhereUniqueWithoutIngredienteInput[]
    createMany?: ItemListaComprasCreateManyIngredienteInputEnvelope
    set?: ItemListaComprasWhereUniqueInput | ItemListaComprasWhereUniqueInput[]
    disconnect?: ItemListaComprasWhereUniqueInput | ItemListaComprasWhereUniqueInput[]
    delete?: ItemListaComprasWhereUniqueInput | ItemListaComprasWhereUniqueInput[]
    connect?: ItemListaComprasWhereUniqueInput | ItemListaComprasWhereUniqueInput[]
    update?: ItemListaComprasUpdateWithWhereUniqueWithoutIngredienteInput | ItemListaComprasUpdateWithWhereUniqueWithoutIngredienteInput[]
    updateMany?: ItemListaComprasUpdateManyWithWhereWithoutIngredienteInput | ItemListaComprasUpdateManyWithWhereWithoutIngredienteInput[]
    deleteMany?: ItemListaComprasScalarWhereInput | ItemListaComprasScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutReceitasCadastradasInput = {
    create?: XOR<UsuarioCreateWithoutReceitasCadastradasInput, UsuarioUncheckedCreateWithoutReceitasCadastradasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReceitasCadastradasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type CategoriaCreateNestedOneWithoutReceitasInput = {
    create?: XOR<CategoriaCreateWithoutReceitasInput, CategoriaUncheckedCreateWithoutReceitasInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutReceitasInput
    connect?: CategoriaWhereUniqueInput
  }

  export type ComentarioCreateNestedManyWithoutReceitaInput = {
    create?: XOR<ComentarioCreateWithoutReceitaInput, ComentarioUncheckedCreateWithoutReceitaInput> | ComentarioCreateWithoutReceitaInput[] | ComentarioUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutReceitaInput | ComentarioCreateOrConnectWithoutReceitaInput[]
    createMany?: ComentarioCreateManyReceitaInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type ReceitaEtiquetaCreateNestedManyWithoutReceitaInput = {
    create?: XOR<ReceitaEtiquetaCreateWithoutReceitaInput, ReceitaEtiquetaUncheckedCreateWithoutReceitaInput> | ReceitaEtiquetaCreateWithoutReceitaInput[] | ReceitaEtiquetaUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ReceitaEtiquetaCreateOrConnectWithoutReceitaInput | ReceitaEtiquetaCreateOrConnectWithoutReceitaInput[]
    createMany?: ReceitaEtiquetaCreateManyReceitaInputEnvelope
    connect?: ReceitaEtiquetaWhereUniqueInput | ReceitaEtiquetaWhereUniqueInput[]
  }

  export type ReceitaFavoritaCreateNestedManyWithoutReceitaInput = {
    create?: XOR<ReceitaFavoritaCreateWithoutReceitaInput, ReceitaFavoritaUncheckedCreateWithoutReceitaInput> | ReceitaFavoritaCreateWithoutReceitaInput[] | ReceitaFavoritaUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ReceitaFavoritaCreateOrConnectWithoutReceitaInput | ReceitaFavoritaCreateOrConnectWithoutReceitaInput[]
    createMany?: ReceitaFavoritaCreateManyReceitaInputEnvelope
    connect?: ReceitaFavoritaWhereUniqueInput | ReceitaFavoritaWhereUniqueInput[]
  }

  export type ItemReceitaIngredienteCreateNestedManyWithoutReceitaInput = {
    create?: XOR<ItemReceitaIngredienteCreateWithoutReceitaInput, ItemReceitaIngredienteUncheckedCreateWithoutReceitaInput> | ItemReceitaIngredienteCreateWithoutReceitaInput[] | ItemReceitaIngredienteUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ItemReceitaIngredienteCreateOrConnectWithoutReceitaInput | ItemReceitaIngredienteCreateOrConnectWithoutReceitaInput[]
    createMany?: ItemReceitaIngredienteCreateManyReceitaInputEnvelope
    connect?: ItemReceitaIngredienteWhereUniqueInput | ItemReceitaIngredienteWhereUniqueInput[]
  }

  export type ComentarioUncheckedCreateNestedManyWithoutReceitaInput = {
    create?: XOR<ComentarioCreateWithoutReceitaInput, ComentarioUncheckedCreateWithoutReceitaInput> | ComentarioCreateWithoutReceitaInput[] | ComentarioUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutReceitaInput | ComentarioCreateOrConnectWithoutReceitaInput[]
    createMany?: ComentarioCreateManyReceitaInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type ReceitaEtiquetaUncheckedCreateNestedManyWithoutReceitaInput = {
    create?: XOR<ReceitaEtiquetaCreateWithoutReceitaInput, ReceitaEtiquetaUncheckedCreateWithoutReceitaInput> | ReceitaEtiquetaCreateWithoutReceitaInput[] | ReceitaEtiquetaUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ReceitaEtiquetaCreateOrConnectWithoutReceitaInput | ReceitaEtiquetaCreateOrConnectWithoutReceitaInput[]
    createMany?: ReceitaEtiquetaCreateManyReceitaInputEnvelope
    connect?: ReceitaEtiquetaWhereUniqueInput | ReceitaEtiquetaWhereUniqueInput[]
  }

  export type ReceitaFavoritaUncheckedCreateNestedManyWithoutReceitaInput = {
    create?: XOR<ReceitaFavoritaCreateWithoutReceitaInput, ReceitaFavoritaUncheckedCreateWithoutReceitaInput> | ReceitaFavoritaCreateWithoutReceitaInput[] | ReceitaFavoritaUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ReceitaFavoritaCreateOrConnectWithoutReceitaInput | ReceitaFavoritaCreateOrConnectWithoutReceitaInput[]
    createMany?: ReceitaFavoritaCreateManyReceitaInputEnvelope
    connect?: ReceitaFavoritaWhereUniqueInput | ReceitaFavoritaWhereUniqueInput[]
  }

  export type ItemReceitaIngredienteUncheckedCreateNestedManyWithoutReceitaInput = {
    create?: XOR<ItemReceitaIngredienteCreateWithoutReceitaInput, ItemReceitaIngredienteUncheckedCreateWithoutReceitaInput> | ItemReceitaIngredienteCreateWithoutReceitaInput[] | ItemReceitaIngredienteUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ItemReceitaIngredienteCreateOrConnectWithoutReceitaInput | ItemReceitaIngredienteCreateOrConnectWithoutReceitaInput[]
    createMany?: ItemReceitaIngredienteCreateManyReceitaInputEnvelope
    connect?: ItemReceitaIngredienteWhereUniqueInput | ItemReceitaIngredienteWhereUniqueInput[]
  }

  export type EnumDificuldadeReceitaFieldUpdateOperationsInput = {
    set?: $Enums.DificuldadeReceita
  }

  export type UsuarioUpdateOneRequiredWithoutReceitasCadastradasNestedInput = {
    create?: XOR<UsuarioCreateWithoutReceitasCadastradasInput, UsuarioUncheckedCreateWithoutReceitasCadastradasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReceitasCadastradasInput
    upsert?: UsuarioUpsertWithoutReceitasCadastradasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutReceitasCadastradasInput, UsuarioUpdateWithoutReceitasCadastradasInput>, UsuarioUncheckedUpdateWithoutReceitasCadastradasInput>
  }

  export type CategoriaUpdateOneRequiredWithoutReceitasNestedInput = {
    create?: XOR<CategoriaCreateWithoutReceitasInput, CategoriaUncheckedCreateWithoutReceitasInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutReceitasInput
    upsert?: CategoriaUpsertWithoutReceitasInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutReceitasInput, CategoriaUpdateWithoutReceitasInput>, CategoriaUncheckedUpdateWithoutReceitasInput>
  }

  export type ComentarioUpdateManyWithoutReceitaNestedInput = {
    create?: XOR<ComentarioCreateWithoutReceitaInput, ComentarioUncheckedCreateWithoutReceitaInput> | ComentarioCreateWithoutReceitaInput[] | ComentarioUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutReceitaInput | ComentarioCreateOrConnectWithoutReceitaInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutReceitaInput | ComentarioUpsertWithWhereUniqueWithoutReceitaInput[]
    createMany?: ComentarioCreateManyReceitaInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutReceitaInput | ComentarioUpdateWithWhereUniqueWithoutReceitaInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutReceitaInput | ComentarioUpdateManyWithWhereWithoutReceitaInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type ReceitaEtiquetaUpdateManyWithoutReceitaNestedInput = {
    create?: XOR<ReceitaEtiquetaCreateWithoutReceitaInput, ReceitaEtiquetaUncheckedCreateWithoutReceitaInput> | ReceitaEtiquetaCreateWithoutReceitaInput[] | ReceitaEtiquetaUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ReceitaEtiquetaCreateOrConnectWithoutReceitaInput | ReceitaEtiquetaCreateOrConnectWithoutReceitaInput[]
    upsert?: ReceitaEtiquetaUpsertWithWhereUniqueWithoutReceitaInput | ReceitaEtiquetaUpsertWithWhereUniqueWithoutReceitaInput[]
    createMany?: ReceitaEtiquetaCreateManyReceitaInputEnvelope
    set?: ReceitaEtiquetaWhereUniqueInput | ReceitaEtiquetaWhereUniqueInput[]
    disconnect?: ReceitaEtiquetaWhereUniqueInput | ReceitaEtiquetaWhereUniqueInput[]
    delete?: ReceitaEtiquetaWhereUniqueInput | ReceitaEtiquetaWhereUniqueInput[]
    connect?: ReceitaEtiquetaWhereUniqueInput | ReceitaEtiquetaWhereUniqueInput[]
    update?: ReceitaEtiquetaUpdateWithWhereUniqueWithoutReceitaInput | ReceitaEtiquetaUpdateWithWhereUniqueWithoutReceitaInput[]
    updateMany?: ReceitaEtiquetaUpdateManyWithWhereWithoutReceitaInput | ReceitaEtiquetaUpdateManyWithWhereWithoutReceitaInput[]
    deleteMany?: ReceitaEtiquetaScalarWhereInput | ReceitaEtiquetaScalarWhereInput[]
  }

  export type ReceitaFavoritaUpdateManyWithoutReceitaNestedInput = {
    create?: XOR<ReceitaFavoritaCreateWithoutReceitaInput, ReceitaFavoritaUncheckedCreateWithoutReceitaInput> | ReceitaFavoritaCreateWithoutReceitaInput[] | ReceitaFavoritaUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ReceitaFavoritaCreateOrConnectWithoutReceitaInput | ReceitaFavoritaCreateOrConnectWithoutReceitaInput[]
    upsert?: ReceitaFavoritaUpsertWithWhereUniqueWithoutReceitaInput | ReceitaFavoritaUpsertWithWhereUniqueWithoutReceitaInput[]
    createMany?: ReceitaFavoritaCreateManyReceitaInputEnvelope
    set?: ReceitaFavoritaWhereUniqueInput | ReceitaFavoritaWhereUniqueInput[]
    disconnect?: ReceitaFavoritaWhereUniqueInput | ReceitaFavoritaWhereUniqueInput[]
    delete?: ReceitaFavoritaWhereUniqueInput | ReceitaFavoritaWhereUniqueInput[]
    connect?: ReceitaFavoritaWhereUniqueInput | ReceitaFavoritaWhereUniqueInput[]
    update?: ReceitaFavoritaUpdateWithWhereUniqueWithoutReceitaInput | ReceitaFavoritaUpdateWithWhereUniqueWithoutReceitaInput[]
    updateMany?: ReceitaFavoritaUpdateManyWithWhereWithoutReceitaInput | ReceitaFavoritaUpdateManyWithWhereWithoutReceitaInput[]
    deleteMany?: ReceitaFavoritaScalarWhereInput | ReceitaFavoritaScalarWhereInput[]
  }

  export type ItemReceitaIngredienteUpdateManyWithoutReceitaNestedInput = {
    create?: XOR<ItemReceitaIngredienteCreateWithoutReceitaInput, ItemReceitaIngredienteUncheckedCreateWithoutReceitaInput> | ItemReceitaIngredienteCreateWithoutReceitaInput[] | ItemReceitaIngredienteUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ItemReceitaIngredienteCreateOrConnectWithoutReceitaInput | ItemReceitaIngredienteCreateOrConnectWithoutReceitaInput[]
    upsert?: ItemReceitaIngredienteUpsertWithWhereUniqueWithoutReceitaInput | ItemReceitaIngredienteUpsertWithWhereUniqueWithoutReceitaInput[]
    createMany?: ItemReceitaIngredienteCreateManyReceitaInputEnvelope
    set?: ItemReceitaIngredienteWhereUniqueInput | ItemReceitaIngredienteWhereUniqueInput[]
    disconnect?: ItemReceitaIngredienteWhereUniqueInput | ItemReceitaIngredienteWhereUniqueInput[]
    delete?: ItemReceitaIngredienteWhereUniqueInput | ItemReceitaIngredienteWhereUniqueInput[]
    connect?: ItemReceitaIngredienteWhereUniqueInput | ItemReceitaIngredienteWhereUniqueInput[]
    update?: ItemReceitaIngredienteUpdateWithWhereUniqueWithoutReceitaInput | ItemReceitaIngredienteUpdateWithWhereUniqueWithoutReceitaInput[]
    updateMany?: ItemReceitaIngredienteUpdateManyWithWhereWithoutReceitaInput | ItemReceitaIngredienteUpdateManyWithWhereWithoutReceitaInput[]
    deleteMany?: ItemReceitaIngredienteScalarWhereInput | ItemReceitaIngredienteScalarWhereInput[]
  }

  export type ComentarioUncheckedUpdateManyWithoutReceitaNestedInput = {
    create?: XOR<ComentarioCreateWithoutReceitaInput, ComentarioUncheckedCreateWithoutReceitaInput> | ComentarioCreateWithoutReceitaInput[] | ComentarioUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutReceitaInput | ComentarioCreateOrConnectWithoutReceitaInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutReceitaInput | ComentarioUpsertWithWhereUniqueWithoutReceitaInput[]
    createMany?: ComentarioCreateManyReceitaInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutReceitaInput | ComentarioUpdateWithWhereUniqueWithoutReceitaInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutReceitaInput | ComentarioUpdateManyWithWhereWithoutReceitaInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type ReceitaEtiquetaUncheckedUpdateManyWithoutReceitaNestedInput = {
    create?: XOR<ReceitaEtiquetaCreateWithoutReceitaInput, ReceitaEtiquetaUncheckedCreateWithoutReceitaInput> | ReceitaEtiquetaCreateWithoutReceitaInput[] | ReceitaEtiquetaUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ReceitaEtiquetaCreateOrConnectWithoutReceitaInput | ReceitaEtiquetaCreateOrConnectWithoutReceitaInput[]
    upsert?: ReceitaEtiquetaUpsertWithWhereUniqueWithoutReceitaInput | ReceitaEtiquetaUpsertWithWhereUniqueWithoutReceitaInput[]
    createMany?: ReceitaEtiquetaCreateManyReceitaInputEnvelope
    set?: ReceitaEtiquetaWhereUniqueInput | ReceitaEtiquetaWhereUniqueInput[]
    disconnect?: ReceitaEtiquetaWhereUniqueInput | ReceitaEtiquetaWhereUniqueInput[]
    delete?: ReceitaEtiquetaWhereUniqueInput | ReceitaEtiquetaWhereUniqueInput[]
    connect?: ReceitaEtiquetaWhereUniqueInput | ReceitaEtiquetaWhereUniqueInput[]
    update?: ReceitaEtiquetaUpdateWithWhereUniqueWithoutReceitaInput | ReceitaEtiquetaUpdateWithWhereUniqueWithoutReceitaInput[]
    updateMany?: ReceitaEtiquetaUpdateManyWithWhereWithoutReceitaInput | ReceitaEtiquetaUpdateManyWithWhereWithoutReceitaInput[]
    deleteMany?: ReceitaEtiquetaScalarWhereInput | ReceitaEtiquetaScalarWhereInput[]
  }

  export type ReceitaFavoritaUncheckedUpdateManyWithoutReceitaNestedInput = {
    create?: XOR<ReceitaFavoritaCreateWithoutReceitaInput, ReceitaFavoritaUncheckedCreateWithoutReceitaInput> | ReceitaFavoritaCreateWithoutReceitaInput[] | ReceitaFavoritaUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ReceitaFavoritaCreateOrConnectWithoutReceitaInput | ReceitaFavoritaCreateOrConnectWithoutReceitaInput[]
    upsert?: ReceitaFavoritaUpsertWithWhereUniqueWithoutReceitaInput | ReceitaFavoritaUpsertWithWhereUniqueWithoutReceitaInput[]
    createMany?: ReceitaFavoritaCreateManyReceitaInputEnvelope
    set?: ReceitaFavoritaWhereUniqueInput | ReceitaFavoritaWhereUniqueInput[]
    disconnect?: ReceitaFavoritaWhereUniqueInput | ReceitaFavoritaWhereUniqueInput[]
    delete?: ReceitaFavoritaWhereUniqueInput | ReceitaFavoritaWhereUniqueInput[]
    connect?: ReceitaFavoritaWhereUniqueInput | ReceitaFavoritaWhereUniqueInput[]
    update?: ReceitaFavoritaUpdateWithWhereUniqueWithoutReceitaInput | ReceitaFavoritaUpdateWithWhereUniqueWithoutReceitaInput[]
    updateMany?: ReceitaFavoritaUpdateManyWithWhereWithoutReceitaInput | ReceitaFavoritaUpdateManyWithWhereWithoutReceitaInput[]
    deleteMany?: ReceitaFavoritaScalarWhereInput | ReceitaFavoritaScalarWhereInput[]
  }

  export type ItemReceitaIngredienteUncheckedUpdateManyWithoutReceitaNestedInput = {
    create?: XOR<ItemReceitaIngredienteCreateWithoutReceitaInput, ItemReceitaIngredienteUncheckedCreateWithoutReceitaInput> | ItemReceitaIngredienteCreateWithoutReceitaInput[] | ItemReceitaIngredienteUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ItemReceitaIngredienteCreateOrConnectWithoutReceitaInput | ItemReceitaIngredienteCreateOrConnectWithoutReceitaInput[]
    upsert?: ItemReceitaIngredienteUpsertWithWhereUniqueWithoutReceitaInput | ItemReceitaIngredienteUpsertWithWhereUniqueWithoutReceitaInput[]
    createMany?: ItemReceitaIngredienteCreateManyReceitaInputEnvelope
    set?: ItemReceitaIngredienteWhereUniqueInput | ItemReceitaIngredienteWhereUniqueInput[]
    disconnect?: ItemReceitaIngredienteWhereUniqueInput | ItemReceitaIngredienteWhereUniqueInput[]
    delete?: ItemReceitaIngredienteWhereUniqueInput | ItemReceitaIngredienteWhereUniqueInput[]
    connect?: ItemReceitaIngredienteWhereUniqueInput | ItemReceitaIngredienteWhereUniqueInput[]
    update?: ItemReceitaIngredienteUpdateWithWhereUniqueWithoutReceitaInput | ItemReceitaIngredienteUpdateWithWhereUniqueWithoutReceitaInput[]
    updateMany?: ItemReceitaIngredienteUpdateManyWithWhereWithoutReceitaInput | ItemReceitaIngredienteUpdateManyWithWhereWithoutReceitaInput[]
    deleteMany?: ItemReceitaIngredienteScalarWhereInput | ItemReceitaIngredienteScalarWhereInput[]
  }

  export type ReceitaCreateNestedOneWithoutEtiquetasInput = {
    create?: XOR<ReceitaCreateWithoutEtiquetasInput, ReceitaUncheckedCreateWithoutEtiquetasInput>
    connectOrCreate?: ReceitaCreateOrConnectWithoutEtiquetasInput
    connect?: ReceitaWhereUniqueInput
  }

  export type EtiquetaCreateNestedOneWithoutReceitasInput = {
    create?: XOR<EtiquetaCreateWithoutReceitasInput, EtiquetaUncheckedCreateWithoutReceitasInput>
    connectOrCreate?: EtiquetaCreateOrConnectWithoutReceitasInput
    connect?: EtiquetaWhereUniqueInput
  }

  export type ReceitaUpdateOneRequiredWithoutEtiquetasNestedInput = {
    create?: XOR<ReceitaCreateWithoutEtiquetasInput, ReceitaUncheckedCreateWithoutEtiquetasInput>
    connectOrCreate?: ReceitaCreateOrConnectWithoutEtiquetasInput
    upsert?: ReceitaUpsertWithoutEtiquetasInput
    connect?: ReceitaWhereUniqueInput
    update?: XOR<XOR<ReceitaUpdateToOneWithWhereWithoutEtiquetasInput, ReceitaUpdateWithoutEtiquetasInput>, ReceitaUncheckedUpdateWithoutEtiquetasInput>
  }

  export type EtiquetaUpdateOneRequiredWithoutReceitasNestedInput = {
    create?: XOR<EtiquetaCreateWithoutReceitasInput, EtiquetaUncheckedCreateWithoutReceitasInput>
    connectOrCreate?: EtiquetaCreateOrConnectWithoutReceitasInput
    upsert?: EtiquetaUpsertWithoutReceitasInput
    connect?: EtiquetaWhereUniqueInput
    update?: XOR<XOR<EtiquetaUpdateToOneWithWhereWithoutReceitasInput, EtiquetaUpdateWithoutReceitasInput>, EtiquetaUncheckedUpdateWithoutReceitasInput>
  }

  export type UsuarioCreateNestedOneWithoutComentariosInput = {
    create?: XOR<UsuarioCreateWithoutComentariosInput, UsuarioUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutComentariosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ReceitaCreateNestedOneWithoutComentariosInput = {
    create?: XOR<ReceitaCreateWithoutComentariosInput, ReceitaUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: ReceitaCreateOrConnectWithoutComentariosInput
    connect?: ReceitaWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutComentariosNestedInput = {
    create?: XOR<UsuarioCreateWithoutComentariosInput, UsuarioUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutComentariosInput
    upsert?: UsuarioUpsertWithoutComentariosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutComentariosInput, UsuarioUpdateWithoutComentariosInput>, UsuarioUncheckedUpdateWithoutComentariosInput>
  }

  export type ReceitaUpdateOneRequiredWithoutComentariosNestedInput = {
    create?: XOR<ReceitaCreateWithoutComentariosInput, ReceitaUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: ReceitaCreateOrConnectWithoutComentariosInput
    upsert?: ReceitaUpsertWithoutComentariosInput
    connect?: ReceitaWhereUniqueInput
    update?: XOR<XOR<ReceitaUpdateToOneWithWhereWithoutComentariosInput, ReceitaUpdateWithoutComentariosInput>, ReceitaUncheckedUpdateWithoutComentariosInput>
  }

  export type UsuarioCreateNestedOneWithoutReceitasFavoritasInput = {
    create?: XOR<UsuarioCreateWithoutReceitasFavoritasInput, UsuarioUncheckedCreateWithoutReceitasFavoritasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReceitasFavoritasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ReceitaCreateNestedOneWithoutFavoritadoPorInput = {
    create?: XOR<ReceitaCreateWithoutFavoritadoPorInput, ReceitaUncheckedCreateWithoutFavoritadoPorInput>
    connectOrCreate?: ReceitaCreateOrConnectWithoutFavoritadoPorInput
    connect?: ReceitaWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutReceitasFavoritasNestedInput = {
    create?: XOR<UsuarioCreateWithoutReceitasFavoritasInput, UsuarioUncheckedCreateWithoutReceitasFavoritasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReceitasFavoritasInput
    upsert?: UsuarioUpsertWithoutReceitasFavoritasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutReceitasFavoritasInput, UsuarioUpdateWithoutReceitasFavoritasInput>, UsuarioUncheckedUpdateWithoutReceitasFavoritasInput>
  }

  export type ReceitaUpdateOneRequiredWithoutFavoritadoPorNestedInput = {
    create?: XOR<ReceitaCreateWithoutFavoritadoPorInput, ReceitaUncheckedCreateWithoutFavoritadoPorInput>
    connectOrCreate?: ReceitaCreateOrConnectWithoutFavoritadoPorInput
    upsert?: ReceitaUpsertWithoutFavoritadoPorInput
    connect?: ReceitaWhereUniqueInput
    update?: XOR<XOR<ReceitaUpdateToOneWithWhereWithoutFavoritadoPorInput, ReceitaUpdateWithoutFavoritadoPorInput>, ReceitaUncheckedUpdateWithoutFavoritadoPorInput>
  }

  export type ReceitaCreateNestedOneWithoutIngredientesInput = {
    create?: XOR<ReceitaCreateWithoutIngredientesInput, ReceitaUncheckedCreateWithoutIngredientesInput>
    connectOrCreate?: ReceitaCreateOrConnectWithoutIngredientesInput
    connect?: ReceitaWhereUniqueInput
  }

  export type IngredienteCreateNestedOneWithoutItemEmReceitasInput = {
    create?: XOR<IngredienteCreateWithoutItemEmReceitasInput, IngredienteUncheckedCreateWithoutItemEmReceitasInput>
    connectOrCreate?: IngredienteCreateOrConnectWithoutItemEmReceitasInput
    connect?: IngredienteWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReceitaUpdateOneRequiredWithoutIngredientesNestedInput = {
    create?: XOR<ReceitaCreateWithoutIngredientesInput, ReceitaUncheckedCreateWithoutIngredientesInput>
    connectOrCreate?: ReceitaCreateOrConnectWithoutIngredientesInput
    upsert?: ReceitaUpsertWithoutIngredientesInput
    connect?: ReceitaWhereUniqueInput
    update?: XOR<XOR<ReceitaUpdateToOneWithWhereWithoutIngredientesInput, ReceitaUpdateWithoutIngredientesInput>, ReceitaUncheckedUpdateWithoutIngredientesInput>
  }

  export type IngredienteUpdateOneRequiredWithoutItemEmReceitasNestedInput = {
    create?: XOR<IngredienteCreateWithoutItemEmReceitasInput, IngredienteUncheckedCreateWithoutItemEmReceitasInput>
    connectOrCreate?: IngredienteCreateOrConnectWithoutItemEmReceitasInput
    upsert?: IngredienteUpsertWithoutItemEmReceitasInput
    connect?: IngredienteWhereUniqueInput
    update?: XOR<XOR<IngredienteUpdateToOneWithWhereWithoutItemEmReceitasInput, IngredienteUpdateWithoutItemEmReceitasInput>, IngredienteUncheckedUpdateWithoutItemEmReceitasInput>
  }

  export type UsuarioCreateNestedOneWithoutListaDeComprasInput = {
    create?: XOR<UsuarioCreateWithoutListaDeComprasInput, UsuarioUncheckedCreateWithoutListaDeComprasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutListaDeComprasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ItemListaComprasCreateNestedManyWithoutListaComprasInput = {
    create?: XOR<ItemListaComprasCreateWithoutListaComprasInput, ItemListaComprasUncheckedCreateWithoutListaComprasInput> | ItemListaComprasCreateWithoutListaComprasInput[] | ItemListaComprasUncheckedCreateWithoutListaComprasInput[]
    connectOrCreate?: ItemListaComprasCreateOrConnectWithoutListaComprasInput | ItemListaComprasCreateOrConnectWithoutListaComprasInput[]
    createMany?: ItemListaComprasCreateManyListaComprasInputEnvelope
    connect?: ItemListaComprasWhereUniqueInput | ItemListaComprasWhereUniqueInput[]
  }

  export type ItemListaComprasUncheckedCreateNestedManyWithoutListaComprasInput = {
    create?: XOR<ItemListaComprasCreateWithoutListaComprasInput, ItemListaComprasUncheckedCreateWithoutListaComprasInput> | ItemListaComprasCreateWithoutListaComprasInput[] | ItemListaComprasUncheckedCreateWithoutListaComprasInput[]
    connectOrCreate?: ItemListaComprasCreateOrConnectWithoutListaComprasInput | ItemListaComprasCreateOrConnectWithoutListaComprasInput[]
    createMany?: ItemListaComprasCreateManyListaComprasInputEnvelope
    connect?: ItemListaComprasWhereUniqueInput | ItemListaComprasWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutListaDeComprasNestedInput = {
    create?: XOR<UsuarioCreateWithoutListaDeComprasInput, UsuarioUncheckedCreateWithoutListaDeComprasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutListaDeComprasInput
    upsert?: UsuarioUpsertWithoutListaDeComprasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutListaDeComprasInput, UsuarioUpdateWithoutListaDeComprasInput>, UsuarioUncheckedUpdateWithoutListaDeComprasInput>
  }

  export type ItemListaComprasUpdateManyWithoutListaComprasNestedInput = {
    create?: XOR<ItemListaComprasCreateWithoutListaComprasInput, ItemListaComprasUncheckedCreateWithoutListaComprasInput> | ItemListaComprasCreateWithoutListaComprasInput[] | ItemListaComprasUncheckedCreateWithoutListaComprasInput[]
    connectOrCreate?: ItemListaComprasCreateOrConnectWithoutListaComprasInput | ItemListaComprasCreateOrConnectWithoutListaComprasInput[]
    upsert?: ItemListaComprasUpsertWithWhereUniqueWithoutListaComprasInput | ItemListaComprasUpsertWithWhereUniqueWithoutListaComprasInput[]
    createMany?: ItemListaComprasCreateManyListaComprasInputEnvelope
    set?: ItemListaComprasWhereUniqueInput | ItemListaComprasWhereUniqueInput[]
    disconnect?: ItemListaComprasWhereUniqueInput | ItemListaComprasWhereUniqueInput[]
    delete?: ItemListaComprasWhereUniqueInput | ItemListaComprasWhereUniqueInput[]
    connect?: ItemListaComprasWhereUniqueInput | ItemListaComprasWhereUniqueInput[]
    update?: ItemListaComprasUpdateWithWhereUniqueWithoutListaComprasInput | ItemListaComprasUpdateWithWhereUniqueWithoutListaComprasInput[]
    updateMany?: ItemListaComprasUpdateManyWithWhereWithoutListaComprasInput | ItemListaComprasUpdateManyWithWhereWithoutListaComprasInput[]
    deleteMany?: ItemListaComprasScalarWhereInput | ItemListaComprasScalarWhereInput[]
  }

  export type ItemListaComprasUncheckedUpdateManyWithoutListaComprasNestedInput = {
    create?: XOR<ItemListaComprasCreateWithoutListaComprasInput, ItemListaComprasUncheckedCreateWithoutListaComprasInput> | ItemListaComprasCreateWithoutListaComprasInput[] | ItemListaComprasUncheckedCreateWithoutListaComprasInput[]
    connectOrCreate?: ItemListaComprasCreateOrConnectWithoutListaComprasInput | ItemListaComprasCreateOrConnectWithoutListaComprasInput[]
    upsert?: ItemListaComprasUpsertWithWhereUniqueWithoutListaComprasInput | ItemListaComprasUpsertWithWhereUniqueWithoutListaComprasInput[]
    createMany?: ItemListaComprasCreateManyListaComprasInputEnvelope
    set?: ItemListaComprasWhereUniqueInput | ItemListaComprasWhereUniqueInput[]
    disconnect?: ItemListaComprasWhereUniqueInput | ItemListaComprasWhereUniqueInput[]
    delete?: ItemListaComprasWhereUniqueInput | ItemListaComprasWhereUniqueInput[]
    connect?: ItemListaComprasWhereUniqueInput | ItemListaComprasWhereUniqueInput[]
    update?: ItemListaComprasUpdateWithWhereUniqueWithoutListaComprasInput | ItemListaComprasUpdateWithWhereUniqueWithoutListaComprasInput[]
    updateMany?: ItemListaComprasUpdateManyWithWhereWithoutListaComprasInput | ItemListaComprasUpdateManyWithWhereWithoutListaComprasInput[]
    deleteMany?: ItemListaComprasScalarWhereInput | ItemListaComprasScalarWhereInput[]
  }

  export type ListaComprasCreateNestedOneWithoutItensInput = {
    create?: XOR<ListaComprasCreateWithoutItensInput, ListaComprasUncheckedCreateWithoutItensInput>
    connectOrCreate?: ListaComprasCreateOrConnectWithoutItensInput
    connect?: ListaComprasWhereUniqueInput
  }

  export type IngredienteCreateNestedOneWithoutItemEmListasDeComprasInput = {
    create?: XOR<IngredienteCreateWithoutItemEmListasDeComprasInput, IngredienteUncheckedCreateWithoutItemEmListasDeComprasInput>
    connectOrCreate?: IngredienteCreateOrConnectWithoutItemEmListasDeComprasInput
    connect?: IngredienteWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ListaComprasUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<ListaComprasCreateWithoutItensInput, ListaComprasUncheckedCreateWithoutItensInput>
    connectOrCreate?: ListaComprasCreateOrConnectWithoutItensInput
    upsert?: ListaComprasUpsertWithoutItensInput
    connect?: ListaComprasWhereUniqueInput
    update?: XOR<XOR<ListaComprasUpdateToOneWithWhereWithoutItensInput, ListaComprasUpdateWithoutItensInput>, ListaComprasUncheckedUpdateWithoutItensInput>
  }

  export type IngredienteUpdateOneRequiredWithoutItemEmListasDeComprasNestedInput = {
    create?: XOR<IngredienteCreateWithoutItemEmListasDeComprasInput, IngredienteUncheckedCreateWithoutItemEmListasDeComprasInput>
    connectOrCreate?: IngredienteCreateOrConnectWithoutItemEmListasDeComprasInput
    upsert?: IngredienteUpsertWithoutItemEmListasDeComprasInput
    connect?: IngredienteWhereUniqueInput
    update?: XOR<XOR<IngredienteUpdateToOneWithWhereWithoutItemEmListasDeComprasInput, IngredienteUpdateWithoutItemEmListasDeComprasInput>, IngredienteUncheckedUpdateWithoutItemEmListasDeComprasInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumDificuldadeReceitaFilter<$PrismaModel = never> = {
    equals?: $Enums.DificuldadeReceita | EnumDificuldadeReceitaFieldRefInput<$PrismaModel>
    in?: $Enums.DificuldadeReceita[] | ListEnumDificuldadeReceitaFieldRefInput<$PrismaModel>
    notIn?: $Enums.DificuldadeReceita[] | ListEnumDificuldadeReceitaFieldRefInput<$PrismaModel>
    not?: NestedEnumDificuldadeReceitaFilter<$PrismaModel> | $Enums.DificuldadeReceita
  }

  export type NestedEnumDificuldadeReceitaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DificuldadeReceita | EnumDificuldadeReceitaFieldRefInput<$PrismaModel>
    in?: $Enums.DificuldadeReceita[] | ListEnumDificuldadeReceitaFieldRefInput<$PrismaModel>
    notIn?: $Enums.DificuldadeReceita[] | ListEnumDificuldadeReceitaFieldRefInput<$PrismaModel>
    not?: NestedEnumDificuldadeReceitaWithAggregatesFilter<$PrismaModel> | $Enums.DificuldadeReceita
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDificuldadeReceitaFilter<$PrismaModel>
    _max?: NestedEnumDificuldadeReceitaFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ReceitaCreateWithoutAutorInput = {
    titulo: string
    descricao: string
    imagemUrl?: string | null
    tempoPreparo: string
    dificuldade: $Enums.DificuldadeReceita
    rendimento: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoria: CategoriaCreateNestedOneWithoutReceitasInput
    comentarios?: ComentarioCreateNestedManyWithoutReceitaInput
    etiquetas?: ReceitaEtiquetaCreateNestedManyWithoutReceitaInput
    favoritadoPor?: ReceitaFavoritaCreateNestedManyWithoutReceitaInput
    ingredientes?: ItemReceitaIngredienteCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaUncheckedCreateWithoutAutorInput = {
    id?: number
    titulo: string
    descricao: string
    imagemUrl?: string | null
    tempoPreparo: string
    dificuldade: $Enums.DificuldadeReceita
    rendimento: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoriaId: number
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutReceitaInput
    etiquetas?: ReceitaEtiquetaUncheckedCreateNestedManyWithoutReceitaInput
    favoritadoPor?: ReceitaFavoritaUncheckedCreateNestedManyWithoutReceitaInput
    ingredientes?: ItemReceitaIngredienteUncheckedCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaCreateOrConnectWithoutAutorInput = {
    where: ReceitaWhereUniqueInput
    create: XOR<ReceitaCreateWithoutAutorInput, ReceitaUncheckedCreateWithoutAutorInput>
  }

  export type ReceitaCreateManyAutorInputEnvelope = {
    data: ReceitaCreateManyAutorInput | ReceitaCreateManyAutorInput[]
    skipDuplicates?: boolean
  }

  export type ComentarioCreateWithoutAutorInput = {
    texto: string
    createdAt?: Date | string
    updatedAt?: Date | string
    receita: ReceitaCreateNestedOneWithoutComentariosInput
  }

  export type ComentarioUncheckedCreateWithoutAutorInput = {
    id?: number
    texto: string
    createdAt?: Date | string
    updatedAt?: Date | string
    receitaId: number
  }

  export type ComentarioCreateOrConnectWithoutAutorInput = {
    where: ComentarioWhereUniqueInput
    create: XOR<ComentarioCreateWithoutAutorInput, ComentarioUncheckedCreateWithoutAutorInput>
  }

  export type ComentarioCreateManyAutorInputEnvelope = {
    data: ComentarioCreateManyAutorInput | ComentarioCreateManyAutorInput[]
    skipDuplicates?: boolean
  }

  export type ReceitaFavoritaCreateWithoutUsuarioInput = {
    favoritedAt?: Date | string
    receita: ReceitaCreateNestedOneWithoutFavoritadoPorInput
  }

  export type ReceitaFavoritaUncheckedCreateWithoutUsuarioInput = {
    receitaId: number
    favoritedAt?: Date | string
  }

  export type ReceitaFavoritaCreateOrConnectWithoutUsuarioInput = {
    where: ReceitaFavoritaWhereUniqueInput
    create: XOR<ReceitaFavoritaCreateWithoutUsuarioInput, ReceitaFavoritaUncheckedCreateWithoutUsuarioInput>
  }

  export type ReceitaFavoritaCreateManyUsuarioInputEnvelope = {
    data: ReceitaFavoritaCreateManyUsuarioInput | ReceitaFavoritaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ListaComprasCreateWithoutUsuarioInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    itens?: ItemListaComprasCreateNestedManyWithoutListaComprasInput
  }

  export type ListaComprasUncheckedCreateWithoutUsuarioInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itens?: ItemListaComprasUncheckedCreateNestedManyWithoutListaComprasInput
  }

  export type ListaComprasCreateOrConnectWithoutUsuarioInput = {
    where: ListaComprasWhereUniqueInput
    create: XOR<ListaComprasCreateWithoutUsuarioInput, ListaComprasUncheckedCreateWithoutUsuarioInput>
  }

  export type ReceitaUpsertWithWhereUniqueWithoutAutorInput = {
    where: ReceitaWhereUniqueInput
    update: XOR<ReceitaUpdateWithoutAutorInput, ReceitaUncheckedUpdateWithoutAutorInput>
    create: XOR<ReceitaCreateWithoutAutorInput, ReceitaUncheckedCreateWithoutAutorInput>
  }

  export type ReceitaUpdateWithWhereUniqueWithoutAutorInput = {
    where: ReceitaWhereUniqueInput
    data: XOR<ReceitaUpdateWithoutAutorInput, ReceitaUncheckedUpdateWithoutAutorInput>
  }

  export type ReceitaUpdateManyWithWhereWithoutAutorInput = {
    where: ReceitaScalarWhereInput
    data: XOR<ReceitaUpdateManyMutationInput, ReceitaUncheckedUpdateManyWithoutAutorInput>
  }

  export type ReceitaScalarWhereInput = {
    AND?: ReceitaScalarWhereInput | ReceitaScalarWhereInput[]
    OR?: ReceitaScalarWhereInput[]
    NOT?: ReceitaScalarWhereInput | ReceitaScalarWhereInput[]
    id?: IntFilter<"Receita"> | number
    titulo?: StringFilter<"Receita"> | string
    descricao?: StringFilter<"Receita"> | string
    imagemUrl?: StringNullableFilter<"Receita"> | string | null
    tempoPreparo?: StringFilter<"Receita"> | string
    dificuldade?: EnumDificuldadeReceitaFilter<"Receita"> | $Enums.DificuldadeReceita
    rendimento?: IntFilter<"Receita"> | number
    createdAt?: DateTimeFilter<"Receita"> | Date | string
    updatedAt?: DateTimeFilter<"Receita"> | Date | string
    autorId?: IntFilter<"Receita"> | number
    categoriaId?: IntFilter<"Receita"> | number
  }

  export type ComentarioUpsertWithWhereUniqueWithoutAutorInput = {
    where: ComentarioWhereUniqueInput
    update: XOR<ComentarioUpdateWithoutAutorInput, ComentarioUncheckedUpdateWithoutAutorInput>
    create: XOR<ComentarioCreateWithoutAutorInput, ComentarioUncheckedCreateWithoutAutorInput>
  }

  export type ComentarioUpdateWithWhereUniqueWithoutAutorInput = {
    where: ComentarioWhereUniqueInput
    data: XOR<ComentarioUpdateWithoutAutorInput, ComentarioUncheckedUpdateWithoutAutorInput>
  }

  export type ComentarioUpdateManyWithWhereWithoutAutorInput = {
    where: ComentarioScalarWhereInput
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyWithoutAutorInput>
  }

  export type ComentarioScalarWhereInput = {
    AND?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
    OR?: ComentarioScalarWhereInput[]
    NOT?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
    id?: IntFilter<"Comentario"> | number
    texto?: StringFilter<"Comentario"> | string
    createdAt?: DateTimeFilter<"Comentario"> | Date | string
    updatedAt?: DateTimeFilter<"Comentario"> | Date | string
    autorId?: IntFilter<"Comentario"> | number
    receitaId?: IntFilter<"Comentario"> | number
  }

  export type ReceitaFavoritaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ReceitaFavoritaWhereUniqueInput
    update: XOR<ReceitaFavoritaUpdateWithoutUsuarioInput, ReceitaFavoritaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ReceitaFavoritaCreateWithoutUsuarioInput, ReceitaFavoritaUncheckedCreateWithoutUsuarioInput>
  }

  export type ReceitaFavoritaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ReceitaFavoritaWhereUniqueInput
    data: XOR<ReceitaFavoritaUpdateWithoutUsuarioInput, ReceitaFavoritaUncheckedUpdateWithoutUsuarioInput>
  }

  export type ReceitaFavoritaUpdateManyWithWhereWithoutUsuarioInput = {
    where: ReceitaFavoritaScalarWhereInput
    data: XOR<ReceitaFavoritaUpdateManyMutationInput, ReceitaFavoritaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ReceitaFavoritaScalarWhereInput = {
    AND?: ReceitaFavoritaScalarWhereInput | ReceitaFavoritaScalarWhereInput[]
    OR?: ReceitaFavoritaScalarWhereInput[]
    NOT?: ReceitaFavoritaScalarWhereInput | ReceitaFavoritaScalarWhereInput[]
    usuarioId?: IntFilter<"ReceitaFavorita"> | number
    receitaId?: IntFilter<"ReceitaFavorita"> | number
    favoritedAt?: DateTimeFilter<"ReceitaFavorita"> | Date | string
  }

  export type ListaComprasUpsertWithoutUsuarioInput = {
    update: XOR<ListaComprasUpdateWithoutUsuarioInput, ListaComprasUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ListaComprasCreateWithoutUsuarioInput, ListaComprasUncheckedCreateWithoutUsuarioInput>
    where?: ListaComprasWhereInput
  }

  export type ListaComprasUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: ListaComprasWhereInput
    data: XOR<ListaComprasUpdateWithoutUsuarioInput, ListaComprasUncheckedUpdateWithoutUsuarioInput>
  }

  export type ListaComprasUpdateWithoutUsuarioInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemListaComprasUpdateManyWithoutListaComprasNestedInput
  }

  export type ListaComprasUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemListaComprasUncheckedUpdateManyWithoutListaComprasNestedInput
  }

  export type ReceitaCreateWithoutCategoriaInput = {
    titulo: string
    descricao: string
    imagemUrl?: string | null
    tempoPreparo: string
    dificuldade: $Enums.DificuldadeReceita
    rendimento: number
    createdAt?: Date | string
    updatedAt?: Date | string
    autor: UsuarioCreateNestedOneWithoutReceitasCadastradasInput
    comentarios?: ComentarioCreateNestedManyWithoutReceitaInput
    etiquetas?: ReceitaEtiquetaCreateNestedManyWithoutReceitaInput
    favoritadoPor?: ReceitaFavoritaCreateNestedManyWithoutReceitaInput
    ingredientes?: ItemReceitaIngredienteCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaUncheckedCreateWithoutCategoriaInput = {
    id?: number
    titulo: string
    descricao: string
    imagemUrl?: string | null
    tempoPreparo: string
    dificuldade: $Enums.DificuldadeReceita
    rendimento: number
    createdAt?: Date | string
    updatedAt?: Date | string
    autorId: number
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutReceitaInput
    etiquetas?: ReceitaEtiquetaUncheckedCreateNestedManyWithoutReceitaInput
    favoritadoPor?: ReceitaFavoritaUncheckedCreateNestedManyWithoutReceitaInput
    ingredientes?: ItemReceitaIngredienteUncheckedCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaCreateOrConnectWithoutCategoriaInput = {
    where: ReceitaWhereUniqueInput
    create: XOR<ReceitaCreateWithoutCategoriaInput, ReceitaUncheckedCreateWithoutCategoriaInput>
  }

  export type ReceitaCreateManyCategoriaInputEnvelope = {
    data: ReceitaCreateManyCategoriaInput | ReceitaCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type ReceitaUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: ReceitaWhereUniqueInput
    update: XOR<ReceitaUpdateWithoutCategoriaInput, ReceitaUncheckedUpdateWithoutCategoriaInput>
    create: XOR<ReceitaCreateWithoutCategoriaInput, ReceitaUncheckedCreateWithoutCategoriaInput>
  }

  export type ReceitaUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: ReceitaWhereUniqueInput
    data: XOR<ReceitaUpdateWithoutCategoriaInput, ReceitaUncheckedUpdateWithoutCategoriaInput>
  }

  export type ReceitaUpdateManyWithWhereWithoutCategoriaInput = {
    where: ReceitaScalarWhereInput
    data: XOR<ReceitaUpdateManyMutationInput, ReceitaUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type ReceitaEtiquetaCreateWithoutEtiquetaInput = {
    assignedAt?: Date | string
    receita: ReceitaCreateNestedOneWithoutEtiquetasInput
  }

  export type ReceitaEtiquetaUncheckedCreateWithoutEtiquetaInput = {
    receitaId: number
    assignedAt?: Date | string
  }

  export type ReceitaEtiquetaCreateOrConnectWithoutEtiquetaInput = {
    where: ReceitaEtiquetaWhereUniqueInput
    create: XOR<ReceitaEtiquetaCreateWithoutEtiquetaInput, ReceitaEtiquetaUncheckedCreateWithoutEtiquetaInput>
  }

  export type ReceitaEtiquetaCreateManyEtiquetaInputEnvelope = {
    data: ReceitaEtiquetaCreateManyEtiquetaInput | ReceitaEtiquetaCreateManyEtiquetaInput[]
    skipDuplicates?: boolean
  }

  export type ReceitaEtiquetaUpsertWithWhereUniqueWithoutEtiquetaInput = {
    where: ReceitaEtiquetaWhereUniqueInput
    update: XOR<ReceitaEtiquetaUpdateWithoutEtiquetaInput, ReceitaEtiquetaUncheckedUpdateWithoutEtiquetaInput>
    create: XOR<ReceitaEtiquetaCreateWithoutEtiquetaInput, ReceitaEtiquetaUncheckedCreateWithoutEtiquetaInput>
  }

  export type ReceitaEtiquetaUpdateWithWhereUniqueWithoutEtiquetaInput = {
    where: ReceitaEtiquetaWhereUniqueInput
    data: XOR<ReceitaEtiquetaUpdateWithoutEtiquetaInput, ReceitaEtiquetaUncheckedUpdateWithoutEtiquetaInput>
  }

  export type ReceitaEtiquetaUpdateManyWithWhereWithoutEtiquetaInput = {
    where: ReceitaEtiquetaScalarWhereInput
    data: XOR<ReceitaEtiquetaUpdateManyMutationInput, ReceitaEtiquetaUncheckedUpdateManyWithoutEtiquetaInput>
  }

  export type ReceitaEtiquetaScalarWhereInput = {
    AND?: ReceitaEtiquetaScalarWhereInput | ReceitaEtiquetaScalarWhereInput[]
    OR?: ReceitaEtiquetaScalarWhereInput[]
    NOT?: ReceitaEtiquetaScalarWhereInput | ReceitaEtiquetaScalarWhereInput[]
    receitaId?: IntFilter<"ReceitaEtiqueta"> | number
    etiquetaId?: IntFilter<"ReceitaEtiqueta"> | number
    assignedAt?: DateTimeFilter<"ReceitaEtiqueta"> | Date | string
  }

  export type ItemReceitaIngredienteCreateWithoutIngredienteInput = {
    quantidade: number
    unidade: string
    receita: ReceitaCreateNestedOneWithoutIngredientesInput
  }

  export type ItemReceitaIngredienteUncheckedCreateWithoutIngredienteInput = {
    id?: number
    quantidade: number
    unidade: string
    receitaId: number
  }

  export type ItemReceitaIngredienteCreateOrConnectWithoutIngredienteInput = {
    where: ItemReceitaIngredienteWhereUniqueInput
    create: XOR<ItemReceitaIngredienteCreateWithoutIngredienteInput, ItemReceitaIngredienteUncheckedCreateWithoutIngredienteInput>
  }

  export type ItemReceitaIngredienteCreateManyIngredienteInputEnvelope = {
    data: ItemReceitaIngredienteCreateManyIngredienteInput | ItemReceitaIngredienteCreateManyIngredienteInput[]
    skipDuplicates?: boolean
  }

  export type ItemListaComprasCreateWithoutIngredienteInput = {
    quantidade: number
    unidade: string
    comprado?: boolean
    listaCompras: ListaComprasCreateNestedOneWithoutItensInput
  }

  export type ItemListaComprasUncheckedCreateWithoutIngredienteInput = {
    id?: number
    quantidade: number
    unidade: string
    comprado?: boolean
    listaComprasId: number
  }

  export type ItemListaComprasCreateOrConnectWithoutIngredienteInput = {
    where: ItemListaComprasWhereUniqueInput
    create: XOR<ItemListaComprasCreateWithoutIngredienteInput, ItemListaComprasUncheckedCreateWithoutIngredienteInput>
  }

  export type ItemListaComprasCreateManyIngredienteInputEnvelope = {
    data: ItemListaComprasCreateManyIngredienteInput | ItemListaComprasCreateManyIngredienteInput[]
    skipDuplicates?: boolean
  }

  export type ItemReceitaIngredienteUpsertWithWhereUniqueWithoutIngredienteInput = {
    where: ItemReceitaIngredienteWhereUniqueInput
    update: XOR<ItemReceitaIngredienteUpdateWithoutIngredienteInput, ItemReceitaIngredienteUncheckedUpdateWithoutIngredienteInput>
    create: XOR<ItemReceitaIngredienteCreateWithoutIngredienteInput, ItemReceitaIngredienteUncheckedCreateWithoutIngredienteInput>
  }

  export type ItemReceitaIngredienteUpdateWithWhereUniqueWithoutIngredienteInput = {
    where: ItemReceitaIngredienteWhereUniqueInput
    data: XOR<ItemReceitaIngredienteUpdateWithoutIngredienteInput, ItemReceitaIngredienteUncheckedUpdateWithoutIngredienteInput>
  }

  export type ItemReceitaIngredienteUpdateManyWithWhereWithoutIngredienteInput = {
    where: ItemReceitaIngredienteScalarWhereInput
    data: XOR<ItemReceitaIngredienteUpdateManyMutationInput, ItemReceitaIngredienteUncheckedUpdateManyWithoutIngredienteInput>
  }

  export type ItemReceitaIngredienteScalarWhereInput = {
    AND?: ItemReceitaIngredienteScalarWhereInput | ItemReceitaIngredienteScalarWhereInput[]
    OR?: ItemReceitaIngredienteScalarWhereInput[]
    NOT?: ItemReceitaIngredienteScalarWhereInput | ItemReceitaIngredienteScalarWhereInput[]
    id?: IntFilter<"ItemReceitaIngrediente"> | number
    quantidade?: FloatFilter<"ItemReceitaIngrediente"> | number
    unidade?: StringFilter<"ItemReceitaIngrediente"> | string
    receitaId?: IntFilter<"ItemReceitaIngrediente"> | number
    ingredienteId?: IntFilter<"ItemReceitaIngrediente"> | number
  }

  export type ItemListaComprasUpsertWithWhereUniqueWithoutIngredienteInput = {
    where: ItemListaComprasWhereUniqueInput
    update: XOR<ItemListaComprasUpdateWithoutIngredienteInput, ItemListaComprasUncheckedUpdateWithoutIngredienteInput>
    create: XOR<ItemListaComprasCreateWithoutIngredienteInput, ItemListaComprasUncheckedCreateWithoutIngredienteInput>
  }

  export type ItemListaComprasUpdateWithWhereUniqueWithoutIngredienteInput = {
    where: ItemListaComprasWhereUniqueInput
    data: XOR<ItemListaComprasUpdateWithoutIngredienteInput, ItemListaComprasUncheckedUpdateWithoutIngredienteInput>
  }

  export type ItemListaComprasUpdateManyWithWhereWithoutIngredienteInput = {
    where: ItemListaComprasScalarWhereInput
    data: XOR<ItemListaComprasUpdateManyMutationInput, ItemListaComprasUncheckedUpdateManyWithoutIngredienteInput>
  }

  export type ItemListaComprasScalarWhereInput = {
    AND?: ItemListaComprasScalarWhereInput | ItemListaComprasScalarWhereInput[]
    OR?: ItemListaComprasScalarWhereInput[]
    NOT?: ItemListaComprasScalarWhereInput | ItemListaComprasScalarWhereInput[]
    id?: IntFilter<"ItemListaCompras"> | number
    quantidade?: FloatFilter<"ItemListaCompras"> | number
    unidade?: StringFilter<"ItemListaCompras"> | string
    comprado?: BoolFilter<"ItemListaCompras"> | boolean
    listaComprasId?: IntFilter<"ItemListaCompras"> | number
    ingredienteId?: IntFilter<"ItemListaCompras"> | number
  }

  export type UsuarioCreateWithoutReceitasCadastradasInput = {
    nome: string
    email: string
    senha: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    comentarios?: ComentarioCreateNestedManyWithoutAutorInput
    receitasFavoritas?: ReceitaFavoritaCreateNestedManyWithoutUsuarioInput
    listaDeCompras?: ListaComprasCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutReceitasCadastradasInput = {
    id?: number
    nome: string
    email: string
    senha: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutAutorInput
    receitasFavoritas?: ReceitaFavoritaUncheckedCreateNestedManyWithoutUsuarioInput
    listaDeCompras?: ListaComprasUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutReceitasCadastradasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutReceitasCadastradasInput, UsuarioUncheckedCreateWithoutReceitasCadastradasInput>
  }

  export type CategoriaCreateWithoutReceitasInput = {
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriaUncheckedCreateWithoutReceitasInput = {
    id?: number
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriaCreateOrConnectWithoutReceitasInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutReceitasInput, CategoriaUncheckedCreateWithoutReceitasInput>
  }

  export type ComentarioCreateWithoutReceitaInput = {
    texto: string
    createdAt?: Date | string
    updatedAt?: Date | string
    autor: UsuarioCreateNestedOneWithoutComentariosInput
  }

  export type ComentarioUncheckedCreateWithoutReceitaInput = {
    id?: number
    texto: string
    createdAt?: Date | string
    updatedAt?: Date | string
    autorId: number
  }

  export type ComentarioCreateOrConnectWithoutReceitaInput = {
    where: ComentarioWhereUniqueInput
    create: XOR<ComentarioCreateWithoutReceitaInput, ComentarioUncheckedCreateWithoutReceitaInput>
  }

  export type ComentarioCreateManyReceitaInputEnvelope = {
    data: ComentarioCreateManyReceitaInput | ComentarioCreateManyReceitaInput[]
    skipDuplicates?: boolean
  }

  export type ReceitaEtiquetaCreateWithoutReceitaInput = {
    assignedAt?: Date | string
    etiqueta: EtiquetaCreateNestedOneWithoutReceitasInput
  }

  export type ReceitaEtiquetaUncheckedCreateWithoutReceitaInput = {
    etiquetaId: number
    assignedAt?: Date | string
  }

  export type ReceitaEtiquetaCreateOrConnectWithoutReceitaInput = {
    where: ReceitaEtiquetaWhereUniqueInput
    create: XOR<ReceitaEtiquetaCreateWithoutReceitaInput, ReceitaEtiquetaUncheckedCreateWithoutReceitaInput>
  }

  export type ReceitaEtiquetaCreateManyReceitaInputEnvelope = {
    data: ReceitaEtiquetaCreateManyReceitaInput | ReceitaEtiquetaCreateManyReceitaInput[]
    skipDuplicates?: boolean
  }

  export type ReceitaFavoritaCreateWithoutReceitaInput = {
    favoritedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutReceitasFavoritasInput
  }

  export type ReceitaFavoritaUncheckedCreateWithoutReceitaInput = {
    usuarioId: number
    favoritedAt?: Date | string
  }

  export type ReceitaFavoritaCreateOrConnectWithoutReceitaInput = {
    where: ReceitaFavoritaWhereUniqueInput
    create: XOR<ReceitaFavoritaCreateWithoutReceitaInput, ReceitaFavoritaUncheckedCreateWithoutReceitaInput>
  }

  export type ReceitaFavoritaCreateManyReceitaInputEnvelope = {
    data: ReceitaFavoritaCreateManyReceitaInput | ReceitaFavoritaCreateManyReceitaInput[]
    skipDuplicates?: boolean
  }

  export type ItemReceitaIngredienteCreateWithoutReceitaInput = {
    quantidade: number
    unidade: string
    ingrediente: IngredienteCreateNestedOneWithoutItemEmReceitasInput
  }

  export type ItemReceitaIngredienteUncheckedCreateWithoutReceitaInput = {
    id?: number
    quantidade: number
    unidade: string
    ingredienteId: number
  }

  export type ItemReceitaIngredienteCreateOrConnectWithoutReceitaInput = {
    where: ItemReceitaIngredienteWhereUniqueInput
    create: XOR<ItemReceitaIngredienteCreateWithoutReceitaInput, ItemReceitaIngredienteUncheckedCreateWithoutReceitaInput>
  }

  export type ItemReceitaIngredienteCreateManyReceitaInputEnvelope = {
    data: ItemReceitaIngredienteCreateManyReceitaInput | ItemReceitaIngredienteCreateManyReceitaInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutReceitasCadastradasInput = {
    update: XOR<UsuarioUpdateWithoutReceitasCadastradasInput, UsuarioUncheckedUpdateWithoutReceitasCadastradasInput>
    create: XOR<UsuarioCreateWithoutReceitasCadastradasInput, UsuarioUncheckedCreateWithoutReceitasCadastradasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutReceitasCadastradasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutReceitasCadastradasInput, UsuarioUncheckedUpdateWithoutReceitasCadastradasInput>
  }

  export type UsuarioUpdateWithoutReceitasCadastradasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comentarios?: ComentarioUpdateManyWithoutAutorNestedInput
    receitasFavoritas?: ReceitaFavoritaUpdateManyWithoutUsuarioNestedInput
    listaDeCompras?: ListaComprasUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutReceitasCadastradasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comentarios?: ComentarioUncheckedUpdateManyWithoutAutorNestedInput
    receitasFavoritas?: ReceitaFavoritaUncheckedUpdateManyWithoutUsuarioNestedInput
    listaDeCompras?: ListaComprasUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type CategoriaUpsertWithoutReceitasInput = {
    update: XOR<CategoriaUpdateWithoutReceitasInput, CategoriaUncheckedUpdateWithoutReceitasInput>
    create: XOR<CategoriaCreateWithoutReceitasInput, CategoriaUncheckedCreateWithoutReceitasInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutReceitasInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutReceitasInput, CategoriaUncheckedUpdateWithoutReceitasInput>
  }

  export type CategoriaUpdateWithoutReceitasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaUncheckedUpdateWithoutReceitasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioUpsertWithWhereUniqueWithoutReceitaInput = {
    where: ComentarioWhereUniqueInput
    update: XOR<ComentarioUpdateWithoutReceitaInput, ComentarioUncheckedUpdateWithoutReceitaInput>
    create: XOR<ComentarioCreateWithoutReceitaInput, ComentarioUncheckedCreateWithoutReceitaInput>
  }

  export type ComentarioUpdateWithWhereUniqueWithoutReceitaInput = {
    where: ComentarioWhereUniqueInput
    data: XOR<ComentarioUpdateWithoutReceitaInput, ComentarioUncheckedUpdateWithoutReceitaInput>
  }

  export type ComentarioUpdateManyWithWhereWithoutReceitaInput = {
    where: ComentarioScalarWhereInput
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyWithoutReceitaInput>
  }

  export type ReceitaEtiquetaUpsertWithWhereUniqueWithoutReceitaInput = {
    where: ReceitaEtiquetaWhereUniqueInput
    update: XOR<ReceitaEtiquetaUpdateWithoutReceitaInput, ReceitaEtiquetaUncheckedUpdateWithoutReceitaInput>
    create: XOR<ReceitaEtiquetaCreateWithoutReceitaInput, ReceitaEtiquetaUncheckedCreateWithoutReceitaInput>
  }

  export type ReceitaEtiquetaUpdateWithWhereUniqueWithoutReceitaInput = {
    where: ReceitaEtiquetaWhereUniqueInput
    data: XOR<ReceitaEtiquetaUpdateWithoutReceitaInput, ReceitaEtiquetaUncheckedUpdateWithoutReceitaInput>
  }

  export type ReceitaEtiquetaUpdateManyWithWhereWithoutReceitaInput = {
    where: ReceitaEtiquetaScalarWhereInput
    data: XOR<ReceitaEtiquetaUpdateManyMutationInput, ReceitaEtiquetaUncheckedUpdateManyWithoutReceitaInput>
  }

  export type ReceitaFavoritaUpsertWithWhereUniqueWithoutReceitaInput = {
    where: ReceitaFavoritaWhereUniqueInput
    update: XOR<ReceitaFavoritaUpdateWithoutReceitaInput, ReceitaFavoritaUncheckedUpdateWithoutReceitaInput>
    create: XOR<ReceitaFavoritaCreateWithoutReceitaInput, ReceitaFavoritaUncheckedCreateWithoutReceitaInput>
  }

  export type ReceitaFavoritaUpdateWithWhereUniqueWithoutReceitaInput = {
    where: ReceitaFavoritaWhereUniqueInput
    data: XOR<ReceitaFavoritaUpdateWithoutReceitaInput, ReceitaFavoritaUncheckedUpdateWithoutReceitaInput>
  }

  export type ReceitaFavoritaUpdateManyWithWhereWithoutReceitaInput = {
    where: ReceitaFavoritaScalarWhereInput
    data: XOR<ReceitaFavoritaUpdateManyMutationInput, ReceitaFavoritaUncheckedUpdateManyWithoutReceitaInput>
  }

  export type ItemReceitaIngredienteUpsertWithWhereUniqueWithoutReceitaInput = {
    where: ItemReceitaIngredienteWhereUniqueInput
    update: XOR<ItemReceitaIngredienteUpdateWithoutReceitaInput, ItemReceitaIngredienteUncheckedUpdateWithoutReceitaInput>
    create: XOR<ItemReceitaIngredienteCreateWithoutReceitaInput, ItemReceitaIngredienteUncheckedCreateWithoutReceitaInput>
  }

  export type ItemReceitaIngredienteUpdateWithWhereUniqueWithoutReceitaInput = {
    where: ItemReceitaIngredienteWhereUniqueInput
    data: XOR<ItemReceitaIngredienteUpdateWithoutReceitaInput, ItemReceitaIngredienteUncheckedUpdateWithoutReceitaInput>
  }

  export type ItemReceitaIngredienteUpdateManyWithWhereWithoutReceitaInput = {
    where: ItemReceitaIngredienteScalarWhereInput
    data: XOR<ItemReceitaIngredienteUpdateManyMutationInput, ItemReceitaIngredienteUncheckedUpdateManyWithoutReceitaInput>
  }

  export type ReceitaCreateWithoutEtiquetasInput = {
    titulo: string
    descricao: string
    imagemUrl?: string | null
    tempoPreparo: string
    dificuldade: $Enums.DificuldadeReceita
    rendimento: number
    createdAt?: Date | string
    updatedAt?: Date | string
    autor: UsuarioCreateNestedOneWithoutReceitasCadastradasInput
    categoria: CategoriaCreateNestedOneWithoutReceitasInput
    comentarios?: ComentarioCreateNestedManyWithoutReceitaInput
    favoritadoPor?: ReceitaFavoritaCreateNestedManyWithoutReceitaInput
    ingredientes?: ItemReceitaIngredienteCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaUncheckedCreateWithoutEtiquetasInput = {
    id?: number
    titulo: string
    descricao: string
    imagemUrl?: string | null
    tempoPreparo: string
    dificuldade: $Enums.DificuldadeReceita
    rendimento: number
    createdAt?: Date | string
    updatedAt?: Date | string
    autorId: number
    categoriaId: number
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutReceitaInput
    favoritadoPor?: ReceitaFavoritaUncheckedCreateNestedManyWithoutReceitaInput
    ingredientes?: ItemReceitaIngredienteUncheckedCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaCreateOrConnectWithoutEtiquetasInput = {
    where: ReceitaWhereUniqueInput
    create: XOR<ReceitaCreateWithoutEtiquetasInput, ReceitaUncheckedCreateWithoutEtiquetasInput>
  }

  export type EtiquetaCreateWithoutReceitasInput = {
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EtiquetaUncheckedCreateWithoutReceitasInput = {
    id?: number
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EtiquetaCreateOrConnectWithoutReceitasInput = {
    where: EtiquetaWhereUniqueInput
    create: XOR<EtiquetaCreateWithoutReceitasInput, EtiquetaUncheckedCreateWithoutReceitasInput>
  }

  export type ReceitaUpsertWithoutEtiquetasInput = {
    update: XOR<ReceitaUpdateWithoutEtiquetasInput, ReceitaUncheckedUpdateWithoutEtiquetasInput>
    create: XOR<ReceitaCreateWithoutEtiquetasInput, ReceitaUncheckedCreateWithoutEtiquetasInput>
    where?: ReceitaWhereInput
  }

  export type ReceitaUpdateToOneWithWhereWithoutEtiquetasInput = {
    where?: ReceitaWhereInput
    data: XOR<ReceitaUpdateWithoutEtiquetasInput, ReceitaUncheckedUpdateWithoutEtiquetasInput>
  }

  export type ReceitaUpdateWithoutEtiquetasInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tempoPreparo?: StringFieldUpdateOperationsInput | string
    dificuldade?: EnumDificuldadeReceitaFieldUpdateOperationsInput | $Enums.DificuldadeReceita
    rendimento?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autor?: UsuarioUpdateOneRequiredWithoutReceitasCadastradasNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutReceitasNestedInput
    comentarios?: ComentarioUpdateManyWithoutReceitaNestedInput
    favoritadoPor?: ReceitaFavoritaUpdateManyWithoutReceitaNestedInput
    ingredientes?: ItemReceitaIngredienteUpdateManyWithoutReceitaNestedInput
  }

  export type ReceitaUncheckedUpdateWithoutEtiquetasInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tempoPreparo?: StringFieldUpdateOperationsInput | string
    dificuldade?: EnumDificuldadeReceitaFieldUpdateOperationsInput | $Enums.DificuldadeReceita
    rendimento?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autorId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    comentarios?: ComentarioUncheckedUpdateManyWithoutReceitaNestedInput
    favoritadoPor?: ReceitaFavoritaUncheckedUpdateManyWithoutReceitaNestedInput
    ingredientes?: ItemReceitaIngredienteUncheckedUpdateManyWithoutReceitaNestedInput
  }

  export type EtiquetaUpsertWithoutReceitasInput = {
    update: XOR<EtiquetaUpdateWithoutReceitasInput, EtiquetaUncheckedUpdateWithoutReceitasInput>
    create: XOR<EtiquetaCreateWithoutReceitasInput, EtiquetaUncheckedCreateWithoutReceitasInput>
    where?: EtiquetaWhereInput
  }

  export type EtiquetaUpdateToOneWithWhereWithoutReceitasInput = {
    where?: EtiquetaWhereInput
    data: XOR<EtiquetaUpdateWithoutReceitasInput, EtiquetaUncheckedUpdateWithoutReceitasInput>
  }

  export type EtiquetaUpdateWithoutReceitasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EtiquetaUncheckedUpdateWithoutReceitasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateWithoutComentariosInput = {
    nome: string
    email: string
    senha: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    receitasCadastradas?: ReceitaCreateNestedManyWithoutAutorInput
    receitasFavoritas?: ReceitaFavoritaCreateNestedManyWithoutUsuarioInput
    listaDeCompras?: ListaComprasCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutComentariosInput = {
    id?: number
    nome: string
    email: string
    senha: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    receitasCadastradas?: ReceitaUncheckedCreateNestedManyWithoutAutorInput
    receitasFavoritas?: ReceitaFavoritaUncheckedCreateNestedManyWithoutUsuarioInput
    listaDeCompras?: ListaComprasUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutComentariosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutComentariosInput, UsuarioUncheckedCreateWithoutComentariosInput>
  }

  export type ReceitaCreateWithoutComentariosInput = {
    titulo: string
    descricao: string
    imagemUrl?: string | null
    tempoPreparo: string
    dificuldade: $Enums.DificuldadeReceita
    rendimento: number
    createdAt?: Date | string
    updatedAt?: Date | string
    autor: UsuarioCreateNestedOneWithoutReceitasCadastradasInput
    categoria: CategoriaCreateNestedOneWithoutReceitasInput
    etiquetas?: ReceitaEtiquetaCreateNestedManyWithoutReceitaInput
    favoritadoPor?: ReceitaFavoritaCreateNestedManyWithoutReceitaInput
    ingredientes?: ItemReceitaIngredienteCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaUncheckedCreateWithoutComentariosInput = {
    id?: number
    titulo: string
    descricao: string
    imagemUrl?: string | null
    tempoPreparo: string
    dificuldade: $Enums.DificuldadeReceita
    rendimento: number
    createdAt?: Date | string
    updatedAt?: Date | string
    autorId: number
    categoriaId: number
    etiquetas?: ReceitaEtiquetaUncheckedCreateNestedManyWithoutReceitaInput
    favoritadoPor?: ReceitaFavoritaUncheckedCreateNestedManyWithoutReceitaInput
    ingredientes?: ItemReceitaIngredienteUncheckedCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaCreateOrConnectWithoutComentariosInput = {
    where: ReceitaWhereUniqueInput
    create: XOR<ReceitaCreateWithoutComentariosInput, ReceitaUncheckedCreateWithoutComentariosInput>
  }

  export type UsuarioUpsertWithoutComentariosInput = {
    update: XOR<UsuarioUpdateWithoutComentariosInput, UsuarioUncheckedUpdateWithoutComentariosInput>
    create: XOR<UsuarioCreateWithoutComentariosInput, UsuarioUncheckedCreateWithoutComentariosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutComentariosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutComentariosInput, UsuarioUncheckedUpdateWithoutComentariosInput>
  }

  export type UsuarioUpdateWithoutComentariosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receitasCadastradas?: ReceitaUpdateManyWithoutAutorNestedInput
    receitasFavoritas?: ReceitaFavoritaUpdateManyWithoutUsuarioNestedInput
    listaDeCompras?: ListaComprasUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutComentariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receitasCadastradas?: ReceitaUncheckedUpdateManyWithoutAutorNestedInput
    receitasFavoritas?: ReceitaFavoritaUncheckedUpdateManyWithoutUsuarioNestedInput
    listaDeCompras?: ListaComprasUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type ReceitaUpsertWithoutComentariosInput = {
    update: XOR<ReceitaUpdateWithoutComentariosInput, ReceitaUncheckedUpdateWithoutComentariosInput>
    create: XOR<ReceitaCreateWithoutComentariosInput, ReceitaUncheckedCreateWithoutComentariosInput>
    where?: ReceitaWhereInput
  }

  export type ReceitaUpdateToOneWithWhereWithoutComentariosInput = {
    where?: ReceitaWhereInput
    data: XOR<ReceitaUpdateWithoutComentariosInput, ReceitaUncheckedUpdateWithoutComentariosInput>
  }

  export type ReceitaUpdateWithoutComentariosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tempoPreparo?: StringFieldUpdateOperationsInput | string
    dificuldade?: EnumDificuldadeReceitaFieldUpdateOperationsInput | $Enums.DificuldadeReceita
    rendimento?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autor?: UsuarioUpdateOneRequiredWithoutReceitasCadastradasNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutReceitasNestedInput
    etiquetas?: ReceitaEtiquetaUpdateManyWithoutReceitaNestedInput
    favoritadoPor?: ReceitaFavoritaUpdateManyWithoutReceitaNestedInput
    ingredientes?: ItemReceitaIngredienteUpdateManyWithoutReceitaNestedInput
  }

  export type ReceitaUncheckedUpdateWithoutComentariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tempoPreparo?: StringFieldUpdateOperationsInput | string
    dificuldade?: EnumDificuldadeReceitaFieldUpdateOperationsInput | $Enums.DificuldadeReceita
    rendimento?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autorId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    etiquetas?: ReceitaEtiquetaUncheckedUpdateManyWithoutReceitaNestedInput
    favoritadoPor?: ReceitaFavoritaUncheckedUpdateManyWithoutReceitaNestedInput
    ingredientes?: ItemReceitaIngredienteUncheckedUpdateManyWithoutReceitaNestedInput
  }

  export type UsuarioCreateWithoutReceitasFavoritasInput = {
    nome: string
    email: string
    senha: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    receitasCadastradas?: ReceitaCreateNestedManyWithoutAutorInput
    comentarios?: ComentarioCreateNestedManyWithoutAutorInput
    listaDeCompras?: ListaComprasCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutReceitasFavoritasInput = {
    id?: number
    nome: string
    email: string
    senha: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    receitasCadastradas?: ReceitaUncheckedCreateNestedManyWithoutAutorInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutAutorInput
    listaDeCompras?: ListaComprasUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutReceitasFavoritasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutReceitasFavoritasInput, UsuarioUncheckedCreateWithoutReceitasFavoritasInput>
  }

  export type ReceitaCreateWithoutFavoritadoPorInput = {
    titulo: string
    descricao: string
    imagemUrl?: string | null
    tempoPreparo: string
    dificuldade: $Enums.DificuldadeReceita
    rendimento: number
    createdAt?: Date | string
    updatedAt?: Date | string
    autor: UsuarioCreateNestedOneWithoutReceitasCadastradasInput
    categoria: CategoriaCreateNestedOneWithoutReceitasInput
    comentarios?: ComentarioCreateNestedManyWithoutReceitaInput
    etiquetas?: ReceitaEtiquetaCreateNestedManyWithoutReceitaInput
    ingredientes?: ItemReceitaIngredienteCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaUncheckedCreateWithoutFavoritadoPorInput = {
    id?: number
    titulo: string
    descricao: string
    imagemUrl?: string | null
    tempoPreparo: string
    dificuldade: $Enums.DificuldadeReceita
    rendimento: number
    createdAt?: Date | string
    updatedAt?: Date | string
    autorId: number
    categoriaId: number
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutReceitaInput
    etiquetas?: ReceitaEtiquetaUncheckedCreateNestedManyWithoutReceitaInput
    ingredientes?: ItemReceitaIngredienteUncheckedCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaCreateOrConnectWithoutFavoritadoPorInput = {
    where: ReceitaWhereUniqueInput
    create: XOR<ReceitaCreateWithoutFavoritadoPorInput, ReceitaUncheckedCreateWithoutFavoritadoPorInput>
  }

  export type UsuarioUpsertWithoutReceitasFavoritasInput = {
    update: XOR<UsuarioUpdateWithoutReceitasFavoritasInput, UsuarioUncheckedUpdateWithoutReceitasFavoritasInput>
    create: XOR<UsuarioCreateWithoutReceitasFavoritasInput, UsuarioUncheckedCreateWithoutReceitasFavoritasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutReceitasFavoritasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutReceitasFavoritasInput, UsuarioUncheckedUpdateWithoutReceitasFavoritasInput>
  }

  export type UsuarioUpdateWithoutReceitasFavoritasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receitasCadastradas?: ReceitaUpdateManyWithoutAutorNestedInput
    comentarios?: ComentarioUpdateManyWithoutAutorNestedInput
    listaDeCompras?: ListaComprasUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutReceitasFavoritasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receitasCadastradas?: ReceitaUncheckedUpdateManyWithoutAutorNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutAutorNestedInput
    listaDeCompras?: ListaComprasUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type ReceitaUpsertWithoutFavoritadoPorInput = {
    update: XOR<ReceitaUpdateWithoutFavoritadoPorInput, ReceitaUncheckedUpdateWithoutFavoritadoPorInput>
    create: XOR<ReceitaCreateWithoutFavoritadoPorInput, ReceitaUncheckedCreateWithoutFavoritadoPorInput>
    where?: ReceitaWhereInput
  }

  export type ReceitaUpdateToOneWithWhereWithoutFavoritadoPorInput = {
    where?: ReceitaWhereInput
    data: XOR<ReceitaUpdateWithoutFavoritadoPorInput, ReceitaUncheckedUpdateWithoutFavoritadoPorInput>
  }

  export type ReceitaUpdateWithoutFavoritadoPorInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tempoPreparo?: StringFieldUpdateOperationsInput | string
    dificuldade?: EnumDificuldadeReceitaFieldUpdateOperationsInput | $Enums.DificuldadeReceita
    rendimento?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autor?: UsuarioUpdateOneRequiredWithoutReceitasCadastradasNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutReceitasNestedInput
    comentarios?: ComentarioUpdateManyWithoutReceitaNestedInput
    etiquetas?: ReceitaEtiquetaUpdateManyWithoutReceitaNestedInput
    ingredientes?: ItemReceitaIngredienteUpdateManyWithoutReceitaNestedInput
  }

  export type ReceitaUncheckedUpdateWithoutFavoritadoPorInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tempoPreparo?: StringFieldUpdateOperationsInput | string
    dificuldade?: EnumDificuldadeReceitaFieldUpdateOperationsInput | $Enums.DificuldadeReceita
    rendimento?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autorId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    comentarios?: ComentarioUncheckedUpdateManyWithoutReceitaNestedInput
    etiquetas?: ReceitaEtiquetaUncheckedUpdateManyWithoutReceitaNestedInput
    ingredientes?: ItemReceitaIngredienteUncheckedUpdateManyWithoutReceitaNestedInput
  }

  export type ReceitaCreateWithoutIngredientesInput = {
    titulo: string
    descricao: string
    imagemUrl?: string | null
    tempoPreparo: string
    dificuldade: $Enums.DificuldadeReceita
    rendimento: number
    createdAt?: Date | string
    updatedAt?: Date | string
    autor: UsuarioCreateNestedOneWithoutReceitasCadastradasInput
    categoria: CategoriaCreateNestedOneWithoutReceitasInput
    comentarios?: ComentarioCreateNestedManyWithoutReceitaInput
    etiquetas?: ReceitaEtiquetaCreateNestedManyWithoutReceitaInput
    favoritadoPor?: ReceitaFavoritaCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaUncheckedCreateWithoutIngredientesInput = {
    id?: number
    titulo: string
    descricao: string
    imagemUrl?: string | null
    tempoPreparo: string
    dificuldade: $Enums.DificuldadeReceita
    rendimento: number
    createdAt?: Date | string
    updatedAt?: Date | string
    autorId: number
    categoriaId: number
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutReceitaInput
    etiquetas?: ReceitaEtiquetaUncheckedCreateNestedManyWithoutReceitaInput
    favoritadoPor?: ReceitaFavoritaUncheckedCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaCreateOrConnectWithoutIngredientesInput = {
    where: ReceitaWhereUniqueInput
    create: XOR<ReceitaCreateWithoutIngredientesInput, ReceitaUncheckedCreateWithoutIngredientesInput>
  }

  export type IngredienteCreateWithoutItemEmReceitasInput = {
    nome: string
    imagemUrl?: string | null
    categoriaIngrediente?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    itemEmListasDeCompras?: ItemListaComprasCreateNestedManyWithoutIngredienteInput
  }

  export type IngredienteUncheckedCreateWithoutItemEmReceitasInput = {
    id?: number
    nome: string
    imagemUrl?: string | null
    categoriaIngrediente?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    itemEmListasDeCompras?: ItemListaComprasUncheckedCreateNestedManyWithoutIngredienteInput
  }

  export type IngredienteCreateOrConnectWithoutItemEmReceitasInput = {
    where: IngredienteWhereUniqueInput
    create: XOR<IngredienteCreateWithoutItemEmReceitasInput, IngredienteUncheckedCreateWithoutItemEmReceitasInput>
  }

  export type ReceitaUpsertWithoutIngredientesInput = {
    update: XOR<ReceitaUpdateWithoutIngredientesInput, ReceitaUncheckedUpdateWithoutIngredientesInput>
    create: XOR<ReceitaCreateWithoutIngredientesInput, ReceitaUncheckedCreateWithoutIngredientesInput>
    where?: ReceitaWhereInput
  }

  export type ReceitaUpdateToOneWithWhereWithoutIngredientesInput = {
    where?: ReceitaWhereInput
    data: XOR<ReceitaUpdateWithoutIngredientesInput, ReceitaUncheckedUpdateWithoutIngredientesInput>
  }

  export type ReceitaUpdateWithoutIngredientesInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tempoPreparo?: StringFieldUpdateOperationsInput | string
    dificuldade?: EnumDificuldadeReceitaFieldUpdateOperationsInput | $Enums.DificuldadeReceita
    rendimento?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autor?: UsuarioUpdateOneRequiredWithoutReceitasCadastradasNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutReceitasNestedInput
    comentarios?: ComentarioUpdateManyWithoutReceitaNestedInput
    etiquetas?: ReceitaEtiquetaUpdateManyWithoutReceitaNestedInput
    favoritadoPor?: ReceitaFavoritaUpdateManyWithoutReceitaNestedInput
  }

  export type ReceitaUncheckedUpdateWithoutIngredientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tempoPreparo?: StringFieldUpdateOperationsInput | string
    dificuldade?: EnumDificuldadeReceitaFieldUpdateOperationsInput | $Enums.DificuldadeReceita
    rendimento?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autorId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    comentarios?: ComentarioUncheckedUpdateManyWithoutReceitaNestedInput
    etiquetas?: ReceitaEtiquetaUncheckedUpdateManyWithoutReceitaNestedInput
    favoritadoPor?: ReceitaFavoritaUncheckedUpdateManyWithoutReceitaNestedInput
  }

  export type IngredienteUpsertWithoutItemEmReceitasInput = {
    update: XOR<IngredienteUpdateWithoutItemEmReceitasInput, IngredienteUncheckedUpdateWithoutItemEmReceitasInput>
    create: XOR<IngredienteCreateWithoutItemEmReceitasInput, IngredienteUncheckedCreateWithoutItemEmReceitasInput>
    where?: IngredienteWhereInput
  }

  export type IngredienteUpdateToOneWithWhereWithoutItemEmReceitasInput = {
    where?: IngredienteWhereInput
    data: XOR<IngredienteUpdateWithoutItemEmReceitasInput, IngredienteUncheckedUpdateWithoutItemEmReceitasInput>
  }

  export type IngredienteUpdateWithoutItemEmReceitasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoriaIngrediente?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itemEmListasDeCompras?: ItemListaComprasUpdateManyWithoutIngredienteNestedInput
  }

  export type IngredienteUncheckedUpdateWithoutItemEmReceitasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoriaIngrediente?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itemEmListasDeCompras?: ItemListaComprasUncheckedUpdateManyWithoutIngredienteNestedInput
  }

  export type UsuarioCreateWithoutListaDeComprasInput = {
    nome: string
    email: string
    senha: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    receitasCadastradas?: ReceitaCreateNestedManyWithoutAutorInput
    comentarios?: ComentarioCreateNestedManyWithoutAutorInput
    receitasFavoritas?: ReceitaFavoritaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutListaDeComprasInput = {
    id?: number
    nome: string
    email: string
    senha: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    receitasCadastradas?: ReceitaUncheckedCreateNestedManyWithoutAutorInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutAutorInput
    receitasFavoritas?: ReceitaFavoritaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutListaDeComprasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutListaDeComprasInput, UsuarioUncheckedCreateWithoutListaDeComprasInput>
  }

  export type ItemListaComprasCreateWithoutListaComprasInput = {
    quantidade: number
    unidade: string
    comprado?: boolean
    ingrediente: IngredienteCreateNestedOneWithoutItemEmListasDeComprasInput
  }

  export type ItemListaComprasUncheckedCreateWithoutListaComprasInput = {
    id?: number
    quantidade: number
    unidade: string
    comprado?: boolean
    ingredienteId: number
  }

  export type ItemListaComprasCreateOrConnectWithoutListaComprasInput = {
    where: ItemListaComprasWhereUniqueInput
    create: XOR<ItemListaComprasCreateWithoutListaComprasInput, ItemListaComprasUncheckedCreateWithoutListaComprasInput>
  }

  export type ItemListaComprasCreateManyListaComprasInputEnvelope = {
    data: ItemListaComprasCreateManyListaComprasInput | ItemListaComprasCreateManyListaComprasInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutListaDeComprasInput = {
    update: XOR<UsuarioUpdateWithoutListaDeComprasInput, UsuarioUncheckedUpdateWithoutListaDeComprasInput>
    create: XOR<UsuarioCreateWithoutListaDeComprasInput, UsuarioUncheckedCreateWithoutListaDeComprasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutListaDeComprasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutListaDeComprasInput, UsuarioUncheckedUpdateWithoutListaDeComprasInput>
  }

  export type UsuarioUpdateWithoutListaDeComprasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receitasCadastradas?: ReceitaUpdateManyWithoutAutorNestedInput
    comentarios?: ComentarioUpdateManyWithoutAutorNestedInput
    receitasFavoritas?: ReceitaFavoritaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutListaDeComprasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receitasCadastradas?: ReceitaUncheckedUpdateManyWithoutAutorNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutAutorNestedInput
    receitasFavoritas?: ReceitaFavoritaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ItemListaComprasUpsertWithWhereUniqueWithoutListaComprasInput = {
    where: ItemListaComprasWhereUniqueInput
    update: XOR<ItemListaComprasUpdateWithoutListaComprasInput, ItemListaComprasUncheckedUpdateWithoutListaComprasInput>
    create: XOR<ItemListaComprasCreateWithoutListaComprasInput, ItemListaComprasUncheckedCreateWithoutListaComprasInput>
  }

  export type ItemListaComprasUpdateWithWhereUniqueWithoutListaComprasInput = {
    where: ItemListaComprasWhereUniqueInput
    data: XOR<ItemListaComprasUpdateWithoutListaComprasInput, ItemListaComprasUncheckedUpdateWithoutListaComprasInput>
  }

  export type ItemListaComprasUpdateManyWithWhereWithoutListaComprasInput = {
    where: ItemListaComprasScalarWhereInput
    data: XOR<ItemListaComprasUpdateManyMutationInput, ItemListaComprasUncheckedUpdateManyWithoutListaComprasInput>
  }

  export type ListaComprasCreateWithoutItensInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutListaDeComprasInput
  }

  export type ListaComprasUncheckedCreateWithoutItensInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: number
  }

  export type ListaComprasCreateOrConnectWithoutItensInput = {
    where: ListaComprasWhereUniqueInput
    create: XOR<ListaComprasCreateWithoutItensInput, ListaComprasUncheckedCreateWithoutItensInput>
  }

  export type IngredienteCreateWithoutItemEmListasDeComprasInput = {
    nome: string
    imagemUrl?: string | null
    categoriaIngrediente?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    itemEmReceitas?: ItemReceitaIngredienteCreateNestedManyWithoutIngredienteInput
  }

  export type IngredienteUncheckedCreateWithoutItemEmListasDeComprasInput = {
    id?: number
    nome: string
    imagemUrl?: string | null
    categoriaIngrediente?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    itemEmReceitas?: ItemReceitaIngredienteUncheckedCreateNestedManyWithoutIngredienteInput
  }

  export type IngredienteCreateOrConnectWithoutItemEmListasDeComprasInput = {
    where: IngredienteWhereUniqueInput
    create: XOR<IngredienteCreateWithoutItemEmListasDeComprasInput, IngredienteUncheckedCreateWithoutItemEmListasDeComprasInput>
  }

  export type ListaComprasUpsertWithoutItensInput = {
    update: XOR<ListaComprasUpdateWithoutItensInput, ListaComprasUncheckedUpdateWithoutItensInput>
    create: XOR<ListaComprasCreateWithoutItensInput, ListaComprasUncheckedCreateWithoutItensInput>
    where?: ListaComprasWhereInput
  }

  export type ListaComprasUpdateToOneWithWhereWithoutItensInput = {
    where?: ListaComprasWhereInput
    data: XOR<ListaComprasUpdateWithoutItensInput, ListaComprasUncheckedUpdateWithoutItensInput>
  }

  export type ListaComprasUpdateWithoutItensInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutListaDeComprasNestedInput
  }

  export type ListaComprasUncheckedUpdateWithoutItensInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type IngredienteUpsertWithoutItemEmListasDeComprasInput = {
    update: XOR<IngredienteUpdateWithoutItemEmListasDeComprasInput, IngredienteUncheckedUpdateWithoutItemEmListasDeComprasInput>
    create: XOR<IngredienteCreateWithoutItemEmListasDeComprasInput, IngredienteUncheckedCreateWithoutItemEmListasDeComprasInput>
    where?: IngredienteWhereInput
  }

  export type IngredienteUpdateToOneWithWhereWithoutItemEmListasDeComprasInput = {
    where?: IngredienteWhereInput
    data: XOR<IngredienteUpdateWithoutItemEmListasDeComprasInput, IngredienteUncheckedUpdateWithoutItemEmListasDeComprasInput>
  }

  export type IngredienteUpdateWithoutItemEmListasDeComprasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoriaIngrediente?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itemEmReceitas?: ItemReceitaIngredienteUpdateManyWithoutIngredienteNestedInput
  }

  export type IngredienteUncheckedUpdateWithoutItemEmListasDeComprasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoriaIngrediente?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itemEmReceitas?: ItemReceitaIngredienteUncheckedUpdateManyWithoutIngredienteNestedInput
  }

  export type ReceitaCreateManyAutorInput = {
    id?: number
    titulo: string
    descricao: string
    imagemUrl?: string | null
    tempoPreparo: string
    dificuldade: $Enums.DificuldadeReceita
    rendimento: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoriaId: number
  }

  export type ComentarioCreateManyAutorInput = {
    id?: number
    texto: string
    createdAt?: Date | string
    updatedAt?: Date | string
    receitaId: number
  }

  export type ReceitaFavoritaCreateManyUsuarioInput = {
    receitaId: number
    favoritedAt?: Date | string
  }

  export type ReceitaUpdateWithoutAutorInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tempoPreparo?: StringFieldUpdateOperationsInput | string
    dificuldade?: EnumDificuldadeReceitaFieldUpdateOperationsInput | $Enums.DificuldadeReceita
    rendimento?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneRequiredWithoutReceitasNestedInput
    comentarios?: ComentarioUpdateManyWithoutReceitaNestedInput
    etiquetas?: ReceitaEtiquetaUpdateManyWithoutReceitaNestedInput
    favoritadoPor?: ReceitaFavoritaUpdateManyWithoutReceitaNestedInput
    ingredientes?: ItemReceitaIngredienteUpdateManyWithoutReceitaNestedInput
  }

  export type ReceitaUncheckedUpdateWithoutAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tempoPreparo?: StringFieldUpdateOperationsInput | string
    dificuldade?: EnumDificuldadeReceitaFieldUpdateOperationsInput | $Enums.DificuldadeReceita
    rendimento?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoriaId?: IntFieldUpdateOperationsInput | number
    comentarios?: ComentarioUncheckedUpdateManyWithoutReceitaNestedInput
    etiquetas?: ReceitaEtiquetaUncheckedUpdateManyWithoutReceitaNestedInput
    favoritadoPor?: ReceitaFavoritaUncheckedUpdateManyWithoutReceitaNestedInput
    ingredientes?: ItemReceitaIngredienteUncheckedUpdateManyWithoutReceitaNestedInput
  }

  export type ReceitaUncheckedUpdateManyWithoutAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tempoPreparo?: StringFieldUpdateOperationsInput | string
    dificuldade?: EnumDificuldadeReceitaFieldUpdateOperationsInput | $Enums.DificuldadeReceita
    rendimento?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoriaId?: IntFieldUpdateOperationsInput | number
  }

  export type ComentarioUpdateWithoutAutorInput = {
    texto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receita?: ReceitaUpdateOneRequiredWithoutComentariosNestedInput
  }

  export type ComentarioUncheckedUpdateWithoutAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    texto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receitaId?: IntFieldUpdateOperationsInput | number
  }

  export type ComentarioUncheckedUpdateManyWithoutAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    texto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receitaId?: IntFieldUpdateOperationsInput | number
  }

  export type ReceitaFavoritaUpdateWithoutUsuarioInput = {
    favoritedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receita?: ReceitaUpdateOneRequiredWithoutFavoritadoPorNestedInput
  }

  export type ReceitaFavoritaUncheckedUpdateWithoutUsuarioInput = {
    receitaId?: IntFieldUpdateOperationsInput | number
    favoritedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceitaFavoritaUncheckedUpdateManyWithoutUsuarioInput = {
    receitaId?: IntFieldUpdateOperationsInput | number
    favoritedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceitaCreateManyCategoriaInput = {
    id?: number
    titulo: string
    descricao: string
    imagemUrl?: string | null
    tempoPreparo: string
    dificuldade: $Enums.DificuldadeReceita
    rendimento: number
    createdAt?: Date | string
    updatedAt?: Date | string
    autorId: number
  }

  export type ReceitaUpdateWithoutCategoriaInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tempoPreparo?: StringFieldUpdateOperationsInput | string
    dificuldade?: EnumDificuldadeReceitaFieldUpdateOperationsInput | $Enums.DificuldadeReceita
    rendimento?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autor?: UsuarioUpdateOneRequiredWithoutReceitasCadastradasNestedInput
    comentarios?: ComentarioUpdateManyWithoutReceitaNestedInput
    etiquetas?: ReceitaEtiquetaUpdateManyWithoutReceitaNestedInput
    favoritadoPor?: ReceitaFavoritaUpdateManyWithoutReceitaNestedInput
    ingredientes?: ItemReceitaIngredienteUpdateManyWithoutReceitaNestedInput
  }

  export type ReceitaUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tempoPreparo?: StringFieldUpdateOperationsInput | string
    dificuldade?: EnumDificuldadeReceitaFieldUpdateOperationsInput | $Enums.DificuldadeReceita
    rendimento?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autorId?: IntFieldUpdateOperationsInput | number
    comentarios?: ComentarioUncheckedUpdateManyWithoutReceitaNestedInput
    etiquetas?: ReceitaEtiquetaUncheckedUpdateManyWithoutReceitaNestedInput
    favoritadoPor?: ReceitaFavoritaUncheckedUpdateManyWithoutReceitaNestedInput
    ingredientes?: ItemReceitaIngredienteUncheckedUpdateManyWithoutReceitaNestedInput
  }

  export type ReceitaUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tempoPreparo?: StringFieldUpdateOperationsInput | string
    dificuldade?: EnumDificuldadeReceitaFieldUpdateOperationsInput | $Enums.DificuldadeReceita
    rendimento?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autorId?: IntFieldUpdateOperationsInput | number
  }

  export type ReceitaEtiquetaCreateManyEtiquetaInput = {
    receitaId: number
    assignedAt?: Date | string
  }

  export type ReceitaEtiquetaUpdateWithoutEtiquetaInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receita?: ReceitaUpdateOneRequiredWithoutEtiquetasNestedInput
  }

  export type ReceitaEtiquetaUncheckedUpdateWithoutEtiquetaInput = {
    receitaId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceitaEtiquetaUncheckedUpdateManyWithoutEtiquetaInput = {
    receitaId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemReceitaIngredienteCreateManyIngredienteInput = {
    id?: number
    quantidade: number
    unidade: string
    receitaId: number
  }

  export type ItemListaComprasCreateManyIngredienteInput = {
    id?: number
    quantidade: number
    unidade: string
    comprado?: boolean
    listaComprasId: number
  }

  export type ItemReceitaIngredienteUpdateWithoutIngredienteInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    receita?: ReceitaUpdateOneRequiredWithoutIngredientesNestedInput
  }

  export type ItemReceitaIngredienteUncheckedUpdateWithoutIngredienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    receitaId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemReceitaIngredienteUncheckedUpdateManyWithoutIngredienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    receitaId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemListaComprasUpdateWithoutIngredienteInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    comprado?: BoolFieldUpdateOperationsInput | boolean
    listaCompras?: ListaComprasUpdateOneRequiredWithoutItensNestedInput
  }

  export type ItemListaComprasUncheckedUpdateWithoutIngredienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    comprado?: BoolFieldUpdateOperationsInput | boolean
    listaComprasId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemListaComprasUncheckedUpdateManyWithoutIngredienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    comprado?: BoolFieldUpdateOperationsInput | boolean
    listaComprasId?: IntFieldUpdateOperationsInput | number
  }

  export type ComentarioCreateManyReceitaInput = {
    id?: number
    texto: string
    createdAt?: Date | string
    updatedAt?: Date | string
    autorId: number
  }

  export type ReceitaEtiquetaCreateManyReceitaInput = {
    etiquetaId: number
    assignedAt?: Date | string
  }

  export type ReceitaFavoritaCreateManyReceitaInput = {
    usuarioId: number
    favoritedAt?: Date | string
  }

  export type ItemReceitaIngredienteCreateManyReceitaInput = {
    id?: number
    quantidade: number
    unidade: string
    ingredienteId: number
  }

  export type ComentarioUpdateWithoutReceitaInput = {
    texto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autor?: UsuarioUpdateOneRequiredWithoutComentariosNestedInput
  }

  export type ComentarioUncheckedUpdateWithoutReceitaInput = {
    id?: IntFieldUpdateOperationsInput | number
    texto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autorId?: IntFieldUpdateOperationsInput | number
  }

  export type ComentarioUncheckedUpdateManyWithoutReceitaInput = {
    id?: IntFieldUpdateOperationsInput | number
    texto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autorId?: IntFieldUpdateOperationsInput | number
  }

  export type ReceitaEtiquetaUpdateWithoutReceitaInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    etiqueta?: EtiquetaUpdateOneRequiredWithoutReceitasNestedInput
  }

  export type ReceitaEtiquetaUncheckedUpdateWithoutReceitaInput = {
    etiquetaId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceitaEtiquetaUncheckedUpdateManyWithoutReceitaInput = {
    etiquetaId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceitaFavoritaUpdateWithoutReceitaInput = {
    favoritedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutReceitasFavoritasNestedInput
  }

  export type ReceitaFavoritaUncheckedUpdateWithoutReceitaInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
    favoritedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceitaFavoritaUncheckedUpdateManyWithoutReceitaInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
    favoritedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemReceitaIngredienteUpdateWithoutReceitaInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    ingrediente?: IngredienteUpdateOneRequiredWithoutItemEmReceitasNestedInput
  }

  export type ItemReceitaIngredienteUncheckedUpdateWithoutReceitaInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    ingredienteId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemReceitaIngredienteUncheckedUpdateManyWithoutReceitaInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    ingredienteId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemListaComprasCreateManyListaComprasInput = {
    id?: number
    quantidade: number
    unidade: string
    comprado?: boolean
    ingredienteId: number
  }

  export type ItemListaComprasUpdateWithoutListaComprasInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    comprado?: BoolFieldUpdateOperationsInput | boolean
    ingrediente?: IngredienteUpdateOneRequiredWithoutItemEmListasDeComprasNestedInput
  }

  export type ItemListaComprasUncheckedUpdateWithoutListaComprasInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    comprado?: BoolFieldUpdateOperationsInput | boolean
    ingredienteId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemListaComprasUncheckedUpdateManyWithoutListaComprasInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    comprado?: BoolFieldUpdateOperationsInput | boolean
    ingredienteId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}