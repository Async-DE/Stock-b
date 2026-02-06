
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
 * Model usuario
 * 
 */
export type usuario = $Result.DefaultSelection<Prisma.$usuarioPayload>
/**
 * Model ubicacion
 * 
 */
export type ubicacion = $Result.DefaultSelection<Prisma.$ubicacionPayload>
/**
 * Model estantes
 * 
 */
export type estantes = $Result.DefaultSelection<Prisma.$estantesPayload>
/**
 * Model categorias
 * 
 */
export type categorias = $Result.DefaultSelection<Prisma.$categoriasPayload>
/**
 * Model productos
 * 
 */
export type productos = $Result.DefaultSelection<Prisma.$productosPayload>
/**
 * Model variantes
 * 
 */
export type variantes = $Result.DefaultSelection<Prisma.$variantesPayload>
/**
 * Model ventas
 * 
 */
export type ventas = $Result.DefaultSelection<Prisma.$ventasPayload>
/**
 * Model costosExtras
 * 
 */
export type costosExtras = $Result.DefaultSelection<Prisma.$costosExtrasPayload>
/**
 * Model auditoria
 * 
 */
export type auditoria = $Result.DefaultSelection<Prisma.$auditoriaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Accion: {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
  LOGIN: 'LOGIN',
  VENTA: 'VENTA',
  AJUSTE_STOCK: 'AJUSTE_STOCK'
};

export type Accion = (typeof Accion)[keyof typeof Accion]

}

export type Accion = $Enums.Accion

export const Accion: typeof $Enums.Accion

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * `prisma.usuario`: Exposes CRUD operations for the **usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.usuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ubicacion`: Exposes CRUD operations for the **ubicacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ubicacions
    * const ubicacions = await prisma.ubicacion.findMany()
    * ```
    */
  get ubicacion(): Prisma.ubicacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estantes`: Exposes CRUD operations for the **estantes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estantes
    * const estantes = await prisma.estantes.findMany()
    * ```
    */
  get estantes(): Prisma.estantesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categorias`: Exposes CRUD operations for the **categorias** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categorias.findMany()
    * ```
    */
  get categorias(): Prisma.categoriasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productos`: Exposes CRUD operations for the **productos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.productos.findMany()
    * ```
    */
  get productos(): Prisma.productosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.variantes`: Exposes CRUD operations for the **variantes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Variantes
    * const variantes = await prisma.variantes.findMany()
    * ```
    */
  get variantes(): Prisma.variantesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ventas`: Exposes CRUD operations for the **ventas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ventas
    * const ventas = await prisma.ventas.findMany()
    * ```
    */
  get ventas(): Prisma.ventasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.costosExtras`: Exposes CRUD operations for the **costosExtras** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CostosExtras
    * const costosExtras = await prisma.costosExtras.findMany()
    * ```
    */
  get costosExtras(): Prisma.costosExtrasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditoria`: Exposes CRUD operations for the **auditoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auditorias
    * const auditorias = await prisma.auditoria.findMany()
    * ```
    */
  get auditoria(): Prisma.auditoriaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    usuario: 'usuario',
    ubicacion: 'ubicacion',
    estantes: 'estantes',
    categorias: 'categorias',
    productos: 'productos',
    variantes: 'variantes',
    ventas: 'ventas',
    costosExtras: 'costosExtras',
    auditoria: 'auditoria'
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
      modelProps: "usuario" | "ubicacion" | "estantes" | "categorias" | "productos" | "variantes" | "ventas" | "costosExtras" | "auditoria"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      usuario: {
        payload: Prisma.$usuarioPayload<ExtArgs>
        fields: Prisma.usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findFirst: {
            args: Prisma.usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findMany: {
            args: Prisma.usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          create: {
            args: Prisma.usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          createMany: {
            args: Prisma.usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          delete: {
            args: Prisma.usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          update: {
            args: Prisma.usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          deleteMany: {
            args: Prisma.usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          upsert: {
            args: Prisma.usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      ubicacion: {
        payload: Prisma.$ubicacionPayload<ExtArgs>
        fields: Prisma.ubicacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ubicacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ubicacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ubicacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ubicacionPayload>
          }
          findFirst: {
            args: Prisma.ubicacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ubicacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ubicacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ubicacionPayload>
          }
          findMany: {
            args: Prisma.ubicacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ubicacionPayload>[]
          }
          create: {
            args: Prisma.ubicacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ubicacionPayload>
          }
          createMany: {
            args: Prisma.ubicacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ubicacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ubicacionPayload>[]
          }
          delete: {
            args: Prisma.ubicacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ubicacionPayload>
          }
          update: {
            args: Prisma.ubicacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ubicacionPayload>
          }
          deleteMany: {
            args: Prisma.ubicacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ubicacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ubicacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ubicacionPayload>[]
          }
          upsert: {
            args: Prisma.ubicacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ubicacionPayload>
          }
          aggregate: {
            args: Prisma.UbicacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUbicacion>
          }
          groupBy: {
            args: Prisma.ubicacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UbicacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ubicacionCountArgs<ExtArgs>
            result: $Utils.Optional<UbicacionCountAggregateOutputType> | number
          }
        }
      }
      estantes: {
        payload: Prisma.$estantesPayload<ExtArgs>
        fields: Prisma.estantesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.estantesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estantesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.estantesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estantesPayload>
          }
          findFirst: {
            args: Prisma.estantesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estantesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.estantesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estantesPayload>
          }
          findMany: {
            args: Prisma.estantesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estantesPayload>[]
          }
          create: {
            args: Prisma.estantesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estantesPayload>
          }
          createMany: {
            args: Prisma.estantesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.estantesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estantesPayload>[]
          }
          delete: {
            args: Prisma.estantesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estantesPayload>
          }
          update: {
            args: Prisma.estantesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estantesPayload>
          }
          deleteMany: {
            args: Prisma.estantesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.estantesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.estantesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estantesPayload>[]
          }
          upsert: {
            args: Prisma.estantesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estantesPayload>
          }
          aggregate: {
            args: Prisma.EstantesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstantes>
          }
          groupBy: {
            args: Prisma.estantesGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstantesGroupByOutputType>[]
          }
          count: {
            args: Prisma.estantesCountArgs<ExtArgs>
            result: $Utils.Optional<EstantesCountAggregateOutputType> | number
          }
        }
      }
      categorias: {
        payload: Prisma.$categoriasPayload<ExtArgs>
        fields: Prisma.categoriasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          findFirst: {
            args: Prisma.categoriasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          findMany: {
            args: Prisma.categoriasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>[]
          }
          create: {
            args: Prisma.categoriasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          createMany: {
            args: Prisma.categoriasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>[]
          }
          delete: {
            args: Prisma.categoriasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          update: {
            args: Prisma.categoriasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          deleteMany: {
            args: Prisma.categoriasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>[]
          }
          upsert: {
            args: Prisma.categoriasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          aggregate: {
            args: Prisma.CategoriasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategorias>
          }
          groupBy: {
            args: Prisma.categoriasGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriasGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriasCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriasCountAggregateOutputType> | number
          }
        }
      }
      productos: {
        payload: Prisma.$productosPayload<ExtArgs>
        fields: Prisma.productosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          findFirst: {
            args: Prisma.productosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          findMany: {
            args: Prisma.productosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>[]
          }
          create: {
            args: Prisma.productosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          createMany: {
            args: Prisma.productosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>[]
          }
          delete: {
            args: Prisma.productosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          update: {
            args: Prisma.productosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          deleteMany: {
            args: Prisma.productosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>[]
          }
          upsert: {
            args: Prisma.productosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          aggregate: {
            args: Prisma.ProductosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductos>
          }
          groupBy: {
            args: Prisma.productosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductosGroupByOutputType>[]
          }
          count: {
            args: Prisma.productosCountArgs<ExtArgs>
            result: $Utils.Optional<ProductosCountAggregateOutputType> | number
          }
        }
      }
      variantes: {
        payload: Prisma.$variantesPayload<ExtArgs>
        fields: Prisma.variantesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.variantesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.variantesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantesPayload>
          }
          findFirst: {
            args: Prisma.variantesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.variantesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantesPayload>
          }
          findMany: {
            args: Prisma.variantesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantesPayload>[]
          }
          create: {
            args: Prisma.variantesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantesPayload>
          }
          createMany: {
            args: Prisma.variantesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.variantesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantesPayload>[]
          }
          delete: {
            args: Prisma.variantesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantesPayload>
          }
          update: {
            args: Prisma.variantesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantesPayload>
          }
          deleteMany: {
            args: Prisma.variantesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.variantesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.variantesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantesPayload>[]
          }
          upsert: {
            args: Prisma.variantesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantesPayload>
          }
          aggregate: {
            args: Prisma.VariantesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVariantes>
          }
          groupBy: {
            args: Prisma.variantesGroupByArgs<ExtArgs>
            result: $Utils.Optional<VariantesGroupByOutputType>[]
          }
          count: {
            args: Prisma.variantesCountArgs<ExtArgs>
            result: $Utils.Optional<VariantesCountAggregateOutputType> | number
          }
        }
      }
      ventas: {
        payload: Prisma.$ventasPayload<ExtArgs>
        fields: Prisma.ventasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ventasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ventasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload>
          }
          findFirst: {
            args: Prisma.ventasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ventasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload>
          }
          findMany: {
            args: Prisma.ventasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload>[]
          }
          create: {
            args: Prisma.ventasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload>
          }
          createMany: {
            args: Prisma.ventasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ventasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload>[]
          }
          delete: {
            args: Prisma.ventasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload>
          }
          update: {
            args: Prisma.ventasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload>
          }
          deleteMany: {
            args: Prisma.ventasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ventasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ventasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload>[]
          }
          upsert: {
            args: Prisma.ventasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload>
          }
          aggregate: {
            args: Prisma.VentasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVentas>
          }
          groupBy: {
            args: Prisma.ventasGroupByArgs<ExtArgs>
            result: $Utils.Optional<VentasGroupByOutputType>[]
          }
          count: {
            args: Prisma.ventasCountArgs<ExtArgs>
            result: $Utils.Optional<VentasCountAggregateOutputType> | number
          }
        }
      }
      costosExtras: {
        payload: Prisma.$costosExtrasPayload<ExtArgs>
        fields: Prisma.costosExtrasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.costosExtrasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$costosExtrasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.costosExtrasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$costosExtrasPayload>
          }
          findFirst: {
            args: Prisma.costosExtrasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$costosExtrasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.costosExtrasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$costosExtrasPayload>
          }
          findMany: {
            args: Prisma.costosExtrasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$costosExtrasPayload>[]
          }
          create: {
            args: Prisma.costosExtrasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$costosExtrasPayload>
          }
          createMany: {
            args: Prisma.costosExtrasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.costosExtrasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$costosExtrasPayload>[]
          }
          delete: {
            args: Prisma.costosExtrasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$costosExtrasPayload>
          }
          update: {
            args: Prisma.costosExtrasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$costosExtrasPayload>
          }
          deleteMany: {
            args: Prisma.costosExtrasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.costosExtrasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.costosExtrasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$costosExtrasPayload>[]
          }
          upsert: {
            args: Prisma.costosExtrasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$costosExtrasPayload>
          }
          aggregate: {
            args: Prisma.CostosExtrasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCostosExtras>
          }
          groupBy: {
            args: Prisma.costosExtrasGroupByArgs<ExtArgs>
            result: $Utils.Optional<CostosExtrasGroupByOutputType>[]
          }
          count: {
            args: Prisma.costosExtrasCountArgs<ExtArgs>
            result: $Utils.Optional<CostosExtrasCountAggregateOutputType> | number
          }
        }
      }
      auditoria: {
        payload: Prisma.$auditoriaPayload<ExtArgs>
        fields: Prisma.auditoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.auditoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.auditoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditoriaPayload>
          }
          findFirst: {
            args: Prisma.auditoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.auditoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditoriaPayload>
          }
          findMany: {
            args: Prisma.auditoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditoriaPayload>[]
          }
          create: {
            args: Prisma.auditoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditoriaPayload>
          }
          createMany: {
            args: Prisma.auditoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.auditoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditoriaPayload>[]
          }
          delete: {
            args: Prisma.auditoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditoriaPayload>
          }
          update: {
            args: Prisma.auditoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditoriaPayload>
          }
          deleteMany: {
            args: Prisma.auditoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.auditoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.auditoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditoriaPayload>[]
          }
          upsert: {
            args: Prisma.auditoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditoriaPayload>
          }
          aggregate: {
            args: Prisma.AuditoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditoria>
          }
          groupBy: {
            args: Prisma.auditoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.auditoriaCountArgs<ExtArgs>
            result: $Utils.Optional<AuditoriaCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    usuario?: usuarioOmit
    ubicacion?: ubicacionOmit
    estantes?: estantesOmit
    categorias?: categoriasOmit
    productos?: productosOmit
    variantes?: variantesOmit
    ventas?: ventasOmit
    costosExtras?: costosExtrasOmit
    auditoria?: auditoriaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    auditorias: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auditorias?: boolean | UsuarioCountOutputTypeCountAuditoriasArgs
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
  export type UsuarioCountOutputTypeCountAuditoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auditoriaWhereInput
  }


  /**
   * Count Type UbicacionCountOutputType
   */

  export type UbicacionCountOutputType = {
    estantes: number
  }

  export type UbicacionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estantes?: boolean | UbicacionCountOutputTypeCountEstantesArgs
  }

  // Custom InputTypes
  /**
   * UbicacionCountOutputType without action
   */
  export type UbicacionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionCountOutputType
     */
    select?: UbicacionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UbicacionCountOutputType without action
   */
  export type UbicacionCountOutputTypeCountEstantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: estantesWhereInput
  }


  /**
   * Count Type EstantesCountOutputType
   */

  export type EstantesCountOutputType = {
    productos: number
    auditorias: number
  }

  export type EstantesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | EstantesCountOutputTypeCountProductosArgs
    auditorias?: boolean | EstantesCountOutputTypeCountAuditoriasArgs
  }

  // Custom InputTypes
  /**
   * EstantesCountOutputType without action
   */
  export type EstantesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstantesCountOutputType
     */
    select?: EstantesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstantesCountOutputType without action
   */
  export type EstantesCountOutputTypeCountProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productosWhereInput
  }

  /**
   * EstantesCountOutputType without action
   */
  export type EstantesCountOutputTypeCountAuditoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auditoriaWhereInput
  }


  /**
   * Count Type CategoriasCountOutputType
   */

  export type CategoriasCountOutputType = {
    productos: number
    auditorias: number
  }

  export type CategoriasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | CategoriasCountOutputTypeCountProductosArgs
    auditorias?: boolean | CategoriasCountOutputTypeCountAuditoriasArgs
  }

  // Custom InputTypes
  /**
   * CategoriasCountOutputType without action
   */
  export type CategoriasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriasCountOutputType
     */
    select?: CategoriasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriasCountOutputType without action
   */
  export type CategoriasCountOutputTypeCountProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productosWhereInput
  }

  /**
   * CategoriasCountOutputType without action
   */
  export type CategoriasCountOutputTypeCountAuditoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auditoriaWhereInput
  }


  /**
   * Count Type ProductosCountOutputType
   */

  export type ProductosCountOutputType = {
    variantes: number
    usuario: number
    auditorias: number
  }

  export type ProductosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variantes?: boolean | ProductosCountOutputTypeCountVariantesArgs
    usuario?: boolean | ProductosCountOutputTypeCountUsuarioArgs
    auditorias?: boolean | ProductosCountOutputTypeCountAuditoriasArgs
  }

  // Custom InputTypes
  /**
   * ProductosCountOutputType without action
   */
  export type ProductosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductosCountOutputType
     */
    select?: ProductosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductosCountOutputType without action
   */
  export type ProductosCountOutputTypeCountVariantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: variantesWhereInput
  }

  /**
   * ProductosCountOutputType without action
   */
  export type ProductosCountOutputTypeCountUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
  }

  /**
   * ProductosCountOutputType without action
   */
  export type ProductosCountOutputTypeCountAuditoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auditoriaWhereInput
  }


  /**
   * Count Type VariantesCountOutputType
   */

  export type VariantesCountOutputType = {
    ventas: number
    auditorias: number
  }

  export type VariantesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ventas?: boolean | VariantesCountOutputTypeCountVentasArgs
    auditorias?: boolean | VariantesCountOutputTypeCountAuditoriasArgs
  }

  // Custom InputTypes
  /**
   * VariantesCountOutputType without action
   */
  export type VariantesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantesCountOutputType
     */
    select?: VariantesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VariantesCountOutputType without action
   */
  export type VariantesCountOutputTypeCountVentasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ventasWhereInput
  }

  /**
   * VariantesCountOutputType without action
   */
  export type VariantesCountOutputTypeCountAuditoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auditoriaWhereInput
  }


  /**
   * Count Type VentasCountOutputType
   */

  export type VentasCountOutputType = {
    costosExtras: number
    auditorias: number
  }

  export type VentasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    costosExtras?: boolean | VentasCountOutputTypeCountCostosExtrasArgs
    auditorias?: boolean | VentasCountOutputTypeCountAuditoriasArgs
  }

  // Custom InputTypes
  /**
   * VentasCountOutputType without action
   */
  export type VentasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentasCountOutputType
     */
    select?: VentasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VentasCountOutputType without action
   */
  export type VentasCountOutputTypeCountCostosExtrasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: costosExtrasWhereInput
  }

  /**
   * VentasCountOutputType without action
   */
  export type VentasCountOutputTypeCountAuditoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auditoriaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model usuario
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
    productosId: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
    productosId: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    productosId: number | null
    nombre: string | null
    usuario: string | null
    email_phone: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    productosId: number | null
    nombre: string | null
    usuario: string | null
    email_phone: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    productosId: number
    nombre: number
    usuario: number
    email_phone: number
    password: number
    createdAt: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
    productosId?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
    productosId?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    productosId?: true
    nombre?: true
    usuario?: true
    email_phone?: true
    password?: true
    createdAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    productosId?: true
    nombre?: true
    usuario?: true
    email_phone?: true
    password?: true
    createdAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    productosId?: true
    nombre?: true
    usuario?: true
    email_phone?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario to aggregate.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
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




  export type usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithAggregationInput | usuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: usuarioScalarWhereWithAggregatesInput
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
    productosId: number | null
    nombre: string
    usuario: string
    email_phone: string
    password: string
    createdAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends usuarioGroupByArgs> = Prisma.PrismaPromise<
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


  export type usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productosId?: boolean
    nombre?: boolean
    usuario?: boolean
    email_phone?: boolean
    password?: boolean
    createdAt?: boolean
    productos?: boolean | usuario$productosArgs<ExtArgs>
    auditorias?: boolean | usuario$auditoriasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productosId?: boolean
    nombre?: boolean
    usuario?: boolean
    email_phone?: boolean
    password?: boolean
    createdAt?: boolean
    productos?: boolean | usuario$productosArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productosId?: boolean
    nombre?: boolean
    usuario?: boolean
    email_phone?: boolean
    password?: boolean
    createdAt?: boolean
    productos?: boolean | usuario$productosArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectScalar = {
    id?: boolean
    productosId?: boolean
    nombre?: boolean
    usuario?: boolean
    email_phone?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type usuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productosId" | "nombre" | "usuario" | "email_phone" | "password" | "createdAt", ExtArgs["result"]["usuario"]>
  export type usuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | usuario$productosArgs<ExtArgs>
    auditorias?: boolean | usuario$auditoriasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | usuario$productosArgs<ExtArgs>
  }
  export type usuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | usuario$productosArgs<ExtArgs>
  }

  export type $usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario"
    objects: {
      productos: Prisma.$productosPayload<ExtArgs> | null
      auditorias: Prisma.$auditoriaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productosId: number | null
      nombre: string
      usuario: string
      email_phone: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type usuarioGetPayload<S extends boolean | null | undefined | usuarioDefaultArgs> = $Result.GetResult<Prisma.$usuarioPayload, S>

  type usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario'], meta: { name: 'usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {usuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuarioFindUniqueArgs>(args: SelectSubset<T, usuarioFindUniqueArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuarioFindFirstArgs>(args?: SelectSubset<T, usuarioFindFirstArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends usuarioFindManyArgs>(args?: SelectSubset<T, usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {usuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends usuarioCreateArgs>(args: SelectSubset<T, usuarioCreateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuarioCreateManyArgs>(args?: SelectSubset<T, usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
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
    createManyAndReturn<T extends usuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, usuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {usuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends usuarioDeleteArgs>(args: SelectSubset<T, usuarioDeleteArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {usuarioUpdateArgs} args - Arguments to update one Usuario.
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
    update<T extends usuarioUpdateArgs>(args: SelectSubset<T, usuarioUpdateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuarioDeleteManyArgs>(args?: SelectSubset<T, usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends usuarioUpdateManyArgs>(args: SelectSubset<T, usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {usuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
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
    updateManyAndReturn<T extends usuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, usuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {usuarioUpsertArgs} args - Arguments to update or create a Usuario.
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
    upsert<T extends usuarioUpsertArgs>(args: SelectSubset<T, usuarioUpsertArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuarioCountArgs>(
      args?: Subset<T, usuarioCountArgs>,
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
     * @param {usuarioGroupByArgs} args - Group by arguments.
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
      T extends usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuarioGroupByArgs['orderBy'] }
        : { orderBy?: usuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario model
   */
  readonly fields: usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos<T extends usuario$productosArgs<ExtArgs> = {}>(args?: Subset<T, usuario$productosArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    auditorias<T extends usuario$auditoriasArgs<ExtArgs> = {}>(args?: Subset<T, usuario$auditoriasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auditoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the usuario model
   */
  interface usuarioFieldRefs {
    readonly id: FieldRef<"usuario", 'Int'>
    readonly productosId: FieldRef<"usuario", 'Int'>
    readonly nombre: FieldRef<"usuario", 'String'>
    readonly usuario: FieldRef<"usuario", 'String'>
    readonly email_phone: FieldRef<"usuario", 'String'>
    readonly password: FieldRef<"usuario", 'String'>
    readonly createdAt: FieldRef<"usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * usuario findUnique
   */
  export type usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findUniqueOrThrow
   */
  export type usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findFirst
   */
  export type usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findFirstOrThrow
   */
  export type usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findMany
   */
  export type usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario create
   */
  export type usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a usuario.
     */
    data: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
  }

  /**
   * usuario createMany
   */
  export type usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario createManyAndReturn
   */
  export type usuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * usuario update
   */
  export type usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a usuario.
     */
    data: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
    /**
     * Choose, which usuario to update.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario updateMany
   */
  export type usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuario updateManyAndReturn
   */
  export type usuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * usuario upsert
   */
  export type usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the usuario to update in case it exists.
     */
    where: usuarioWhereUniqueInput
    /**
     * In case the usuario found by the `where` argument doesn't exist, create a new usuario with this data.
     */
    create: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
    /**
     * In case the usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
  }

  /**
   * usuario delete
   */
  export type usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter which usuario to delete.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario deleteMany
   */
  export type usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuario.productos
   */
  export type usuario$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    where?: productosWhereInput
  }

  /**
   * usuario.auditorias
   */
  export type usuario$auditoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditoria
     */
    select?: auditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditoria
     */
    omit?: auditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditoriaInclude<ExtArgs> | null
    where?: auditoriaWhereInput
    orderBy?: auditoriaOrderByWithRelationInput | auditoriaOrderByWithRelationInput[]
    cursor?: auditoriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditoriaScalarFieldEnum | AuditoriaScalarFieldEnum[]
  }

  /**
   * usuario without action
   */
  export type usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
  }


  /**
   * Model ubicacion
   */

  export type AggregateUbicacion = {
    _count: UbicacionCountAggregateOutputType | null
    _avg: UbicacionAvgAggregateOutputType | null
    _sum: UbicacionSumAggregateOutputType | null
    _min: UbicacionMinAggregateOutputType | null
    _max: UbicacionMaxAggregateOutputType | null
  }

  export type UbicacionAvgAggregateOutputType = {
    id: number | null
  }

  export type UbicacionSumAggregateOutputType = {
    id: number | null
  }

  export type UbicacionMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    calle: string | null
    cp: string | null
    colonia: string | null
    celular: string | null
    createdAt: Date | null
  }

  export type UbicacionMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    calle: string | null
    cp: string | null
    colonia: string | null
    celular: string | null
    createdAt: Date | null
  }

  export type UbicacionCountAggregateOutputType = {
    id: number
    nombre: number
    calle: number
    cp: number
    colonia: number
    celular: number
    createdAt: number
    _all: number
  }


  export type UbicacionAvgAggregateInputType = {
    id?: true
  }

  export type UbicacionSumAggregateInputType = {
    id?: true
  }

  export type UbicacionMinAggregateInputType = {
    id?: true
    nombre?: true
    calle?: true
    cp?: true
    colonia?: true
    celular?: true
    createdAt?: true
  }

  export type UbicacionMaxAggregateInputType = {
    id?: true
    nombre?: true
    calle?: true
    cp?: true
    colonia?: true
    celular?: true
    createdAt?: true
  }

  export type UbicacionCountAggregateInputType = {
    id?: true
    nombre?: true
    calle?: true
    cp?: true
    colonia?: true
    celular?: true
    createdAt?: true
    _all?: true
  }

  export type UbicacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ubicacion to aggregate.
     */
    where?: ubicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ubicacions to fetch.
     */
    orderBy?: ubicacionOrderByWithRelationInput | ubicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ubicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ubicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ubicacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ubicacions
    **/
    _count?: true | UbicacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UbicacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UbicacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UbicacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UbicacionMaxAggregateInputType
  }

  export type GetUbicacionAggregateType<T extends UbicacionAggregateArgs> = {
        [P in keyof T & keyof AggregateUbicacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUbicacion[P]>
      : GetScalarType<T[P], AggregateUbicacion[P]>
  }




  export type ubicacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ubicacionWhereInput
    orderBy?: ubicacionOrderByWithAggregationInput | ubicacionOrderByWithAggregationInput[]
    by: UbicacionScalarFieldEnum[] | UbicacionScalarFieldEnum
    having?: ubicacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UbicacionCountAggregateInputType | true
    _avg?: UbicacionAvgAggregateInputType
    _sum?: UbicacionSumAggregateInputType
    _min?: UbicacionMinAggregateInputType
    _max?: UbicacionMaxAggregateInputType
  }

  export type UbicacionGroupByOutputType = {
    id: number
    nombre: string
    calle: string
    cp: string
    colonia: string
    celular: string
    createdAt: Date
    _count: UbicacionCountAggregateOutputType | null
    _avg: UbicacionAvgAggregateOutputType | null
    _sum: UbicacionSumAggregateOutputType | null
    _min: UbicacionMinAggregateOutputType | null
    _max: UbicacionMaxAggregateOutputType | null
  }

  type GetUbicacionGroupByPayload<T extends ubicacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UbicacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UbicacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UbicacionGroupByOutputType[P]>
            : GetScalarType<T[P], UbicacionGroupByOutputType[P]>
        }
      >
    >


  export type ubicacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    calle?: boolean
    cp?: boolean
    colonia?: boolean
    celular?: boolean
    createdAt?: boolean
    estantes?: boolean | ubicacion$estantesArgs<ExtArgs>
    _count?: boolean | UbicacionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ubicacion"]>

  export type ubicacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    calle?: boolean
    cp?: boolean
    colonia?: boolean
    celular?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["ubicacion"]>

  export type ubicacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    calle?: boolean
    cp?: boolean
    colonia?: boolean
    celular?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["ubicacion"]>

  export type ubicacionSelectScalar = {
    id?: boolean
    nombre?: boolean
    calle?: boolean
    cp?: boolean
    colonia?: boolean
    celular?: boolean
    createdAt?: boolean
  }

  export type ubicacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "calle" | "cp" | "colonia" | "celular" | "createdAt", ExtArgs["result"]["ubicacion"]>
  export type ubicacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estantes?: boolean | ubicacion$estantesArgs<ExtArgs>
    _count?: boolean | UbicacionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ubicacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ubicacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ubicacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ubicacion"
    objects: {
      estantes: Prisma.$estantesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      calle: string
      cp: string
      colonia: string
      celular: string
      createdAt: Date
    }, ExtArgs["result"]["ubicacion"]>
    composites: {}
  }

  type ubicacionGetPayload<S extends boolean | null | undefined | ubicacionDefaultArgs> = $Result.GetResult<Prisma.$ubicacionPayload, S>

  type ubicacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ubicacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UbicacionCountAggregateInputType | true
    }

  export interface ubicacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ubicacion'], meta: { name: 'ubicacion' } }
    /**
     * Find zero or one Ubicacion that matches the filter.
     * @param {ubicacionFindUniqueArgs} args - Arguments to find a Ubicacion
     * @example
     * // Get one Ubicacion
     * const ubicacion = await prisma.ubicacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ubicacionFindUniqueArgs>(args: SelectSubset<T, ubicacionFindUniqueArgs<ExtArgs>>): Prisma__ubicacionClient<$Result.GetResult<Prisma.$ubicacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ubicacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ubicacionFindUniqueOrThrowArgs} args - Arguments to find a Ubicacion
     * @example
     * // Get one Ubicacion
     * const ubicacion = await prisma.ubicacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ubicacionFindUniqueOrThrowArgs>(args: SelectSubset<T, ubicacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ubicacionClient<$Result.GetResult<Prisma.$ubicacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ubicacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ubicacionFindFirstArgs} args - Arguments to find a Ubicacion
     * @example
     * // Get one Ubicacion
     * const ubicacion = await prisma.ubicacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ubicacionFindFirstArgs>(args?: SelectSubset<T, ubicacionFindFirstArgs<ExtArgs>>): Prisma__ubicacionClient<$Result.GetResult<Prisma.$ubicacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ubicacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ubicacionFindFirstOrThrowArgs} args - Arguments to find a Ubicacion
     * @example
     * // Get one Ubicacion
     * const ubicacion = await prisma.ubicacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ubicacionFindFirstOrThrowArgs>(args?: SelectSubset<T, ubicacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ubicacionClient<$Result.GetResult<Prisma.$ubicacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ubicacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ubicacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ubicacions
     * const ubicacions = await prisma.ubicacion.findMany()
     * 
     * // Get first 10 Ubicacions
     * const ubicacions = await prisma.ubicacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ubicacionWithIdOnly = await prisma.ubicacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ubicacionFindManyArgs>(args?: SelectSubset<T, ubicacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ubicacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ubicacion.
     * @param {ubicacionCreateArgs} args - Arguments to create a Ubicacion.
     * @example
     * // Create one Ubicacion
     * const Ubicacion = await prisma.ubicacion.create({
     *   data: {
     *     // ... data to create a Ubicacion
     *   }
     * })
     * 
     */
    create<T extends ubicacionCreateArgs>(args: SelectSubset<T, ubicacionCreateArgs<ExtArgs>>): Prisma__ubicacionClient<$Result.GetResult<Prisma.$ubicacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ubicacions.
     * @param {ubicacionCreateManyArgs} args - Arguments to create many Ubicacions.
     * @example
     * // Create many Ubicacions
     * const ubicacion = await prisma.ubicacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ubicacionCreateManyArgs>(args?: SelectSubset<T, ubicacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ubicacions and returns the data saved in the database.
     * @param {ubicacionCreateManyAndReturnArgs} args - Arguments to create many Ubicacions.
     * @example
     * // Create many Ubicacions
     * const ubicacion = await prisma.ubicacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ubicacions and only return the `id`
     * const ubicacionWithIdOnly = await prisma.ubicacion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ubicacionCreateManyAndReturnArgs>(args?: SelectSubset<T, ubicacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ubicacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ubicacion.
     * @param {ubicacionDeleteArgs} args - Arguments to delete one Ubicacion.
     * @example
     * // Delete one Ubicacion
     * const Ubicacion = await prisma.ubicacion.delete({
     *   where: {
     *     // ... filter to delete one Ubicacion
     *   }
     * })
     * 
     */
    delete<T extends ubicacionDeleteArgs>(args: SelectSubset<T, ubicacionDeleteArgs<ExtArgs>>): Prisma__ubicacionClient<$Result.GetResult<Prisma.$ubicacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ubicacion.
     * @param {ubicacionUpdateArgs} args - Arguments to update one Ubicacion.
     * @example
     * // Update one Ubicacion
     * const ubicacion = await prisma.ubicacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ubicacionUpdateArgs>(args: SelectSubset<T, ubicacionUpdateArgs<ExtArgs>>): Prisma__ubicacionClient<$Result.GetResult<Prisma.$ubicacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ubicacions.
     * @param {ubicacionDeleteManyArgs} args - Arguments to filter Ubicacions to delete.
     * @example
     * // Delete a few Ubicacions
     * const { count } = await prisma.ubicacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ubicacionDeleteManyArgs>(args?: SelectSubset<T, ubicacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ubicacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ubicacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ubicacions
     * const ubicacion = await prisma.ubicacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ubicacionUpdateManyArgs>(args: SelectSubset<T, ubicacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ubicacions and returns the data updated in the database.
     * @param {ubicacionUpdateManyAndReturnArgs} args - Arguments to update many Ubicacions.
     * @example
     * // Update many Ubicacions
     * const ubicacion = await prisma.ubicacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ubicacions and only return the `id`
     * const ubicacionWithIdOnly = await prisma.ubicacion.updateManyAndReturn({
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
    updateManyAndReturn<T extends ubicacionUpdateManyAndReturnArgs>(args: SelectSubset<T, ubicacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ubicacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ubicacion.
     * @param {ubicacionUpsertArgs} args - Arguments to update or create a Ubicacion.
     * @example
     * // Update or create a Ubicacion
     * const ubicacion = await prisma.ubicacion.upsert({
     *   create: {
     *     // ... data to create a Ubicacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ubicacion we want to update
     *   }
     * })
     */
    upsert<T extends ubicacionUpsertArgs>(args: SelectSubset<T, ubicacionUpsertArgs<ExtArgs>>): Prisma__ubicacionClient<$Result.GetResult<Prisma.$ubicacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ubicacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ubicacionCountArgs} args - Arguments to filter Ubicacions to count.
     * @example
     * // Count the number of Ubicacions
     * const count = await prisma.ubicacion.count({
     *   where: {
     *     // ... the filter for the Ubicacions we want to count
     *   }
     * })
    **/
    count<T extends ubicacionCountArgs>(
      args?: Subset<T, ubicacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UbicacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ubicacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UbicacionAggregateArgs>(args: Subset<T, UbicacionAggregateArgs>): Prisma.PrismaPromise<GetUbicacionAggregateType<T>>

    /**
     * Group by Ubicacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ubicacionGroupByArgs} args - Group by arguments.
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
      T extends ubicacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ubicacionGroupByArgs['orderBy'] }
        : { orderBy?: ubicacionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ubicacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUbicacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ubicacion model
   */
  readonly fields: ubicacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ubicacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ubicacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estantes<T extends ubicacion$estantesArgs<ExtArgs> = {}>(args?: Subset<T, ubicacion$estantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estantesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ubicacion model
   */
  interface ubicacionFieldRefs {
    readonly id: FieldRef<"ubicacion", 'Int'>
    readonly nombre: FieldRef<"ubicacion", 'String'>
    readonly calle: FieldRef<"ubicacion", 'String'>
    readonly cp: FieldRef<"ubicacion", 'String'>
    readonly colonia: FieldRef<"ubicacion", 'String'>
    readonly celular: FieldRef<"ubicacion", 'String'>
    readonly createdAt: FieldRef<"ubicacion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ubicacion findUnique
   */
  export type ubicacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ubicacionInclude<ExtArgs> | null
    /**
     * Filter, which ubicacion to fetch.
     */
    where: ubicacionWhereUniqueInput
  }

  /**
   * ubicacion findUniqueOrThrow
   */
  export type ubicacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ubicacionInclude<ExtArgs> | null
    /**
     * Filter, which ubicacion to fetch.
     */
    where: ubicacionWhereUniqueInput
  }

  /**
   * ubicacion findFirst
   */
  export type ubicacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ubicacionInclude<ExtArgs> | null
    /**
     * Filter, which ubicacion to fetch.
     */
    where?: ubicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ubicacions to fetch.
     */
    orderBy?: ubicacionOrderByWithRelationInput | ubicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ubicacions.
     */
    cursor?: ubicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ubicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ubicacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ubicacions.
     */
    distinct?: UbicacionScalarFieldEnum | UbicacionScalarFieldEnum[]
  }

  /**
   * ubicacion findFirstOrThrow
   */
  export type ubicacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ubicacionInclude<ExtArgs> | null
    /**
     * Filter, which ubicacion to fetch.
     */
    where?: ubicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ubicacions to fetch.
     */
    orderBy?: ubicacionOrderByWithRelationInput | ubicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ubicacions.
     */
    cursor?: ubicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ubicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ubicacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ubicacions.
     */
    distinct?: UbicacionScalarFieldEnum | UbicacionScalarFieldEnum[]
  }

  /**
   * ubicacion findMany
   */
  export type ubicacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ubicacionInclude<ExtArgs> | null
    /**
     * Filter, which ubicacions to fetch.
     */
    where?: ubicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ubicacions to fetch.
     */
    orderBy?: ubicacionOrderByWithRelationInput | ubicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ubicacions.
     */
    cursor?: ubicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ubicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ubicacions.
     */
    skip?: number
    distinct?: UbicacionScalarFieldEnum | UbicacionScalarFieldEnum[]
  }

  /**
   * ubicacion create
   */
  export type ubicacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ubicacionInclude<ExtArgs> | null
    /**
     * The data needed to create a ubicacion.
     */
    data: XOR<ubicacionCreateInput, ubicacionUncheckedCreateInput>
  }

  /**
   * ubicacion createMany
   */
  export type ubicacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ubicacions.
     */
    data: ubicacionCreateManyInput | ubicacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ubicacion createManyAndReturn
   */
  export type ubicacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * The data used to create many ubicacions.
     */
    data: ubicacionCreateManyInput | ubicacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ubicacion update
   */
  export type ubicacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ubicacionInclude<ExtArgs> | null
    /**
     * The data needed to update a ubicacion.
     */
    data: XOR<ubicacionUpdateInput, ubicacionUncheckedUpdateInput>
    /**
     * Choose, which ubicacion to update.
     */
    where: ubicacionWhereUniqueInput
  }

  /**
   * ubicacion updateMany
   */
  export type ubicacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ubicacions.
     */
    data: XOR<ubicacionUpdateManyMutationInput, ubicacionUncheckedUpdateManyInput>
    /**
     * Filter which ubicacions to update
     */
    where?: ubicacionWhereInput
    /**
     * Limit how many ubicacions to update.
     */
    limit?: number
  }

  /**
   * ubicacion updateManyAndReturn
   */
  export type ubicacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * The data used to update ubicacions.
     */
    data: XOR<ubicacionUpdateManyMutationInput, ubicacionUncheckedUpdateManyInput>
    /**
     * Filter which ubicacions to update
     */
    where?: ubicacionWhereInput
    /**
     * Limit how many ubicacions to update.
     */
    limit?: number
  }

  /**
   * ubicacion upsert
   */
  export type ubicacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ubicacionInclude<ExtArgs> | null
    /**
     * The filter to search for the ubicacion to update in case it exists.
     */
    where: ubicacionWhereUniqueInput
    /**
     * In case the ubicacion found by the `where` argument doesn't exist, create a new ubicacion with this data.
     */
    create: XOR<ubicacionCreateInput, ubicacionUncheckedCreateInput>
    /**
     * In case the ubicacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ubicacionUpdateInput, ubicacionUncheckedUpdateInput>
  }

  /**
   * ubicacion delete
   */
  export type ubicacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ubicacionInclude<ExtArgs> | null
    /**
     * Filter which ubicacion to delete.
     */
    where: ubicacionWhereUniqueInput
  }

  /**
   * ubicacion deleteMany
   */
  export type ubicacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ubicacions to delete
     */
    where?: ubicacionWhereInput
    /**
     * Limit how many ubicacions to delete.
     */
    limit?: number
  }

  /**
   * ubicacion.estantes
   */
  export type ubicacion$estantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estantes
     */
    select?: estantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estantes
     */
    omit?: estantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estantesInclude<ExtArgs> | null
    where?: estantesWhereInput
    orderBy?: estantesOrderByWithRelationInput | estantesOrderByWithRelationInput[]
    cursor?: estantesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstantesScalarFieldEnum | EstantesScalarFieldEnum[]
  }

  /**
   * ubicacion without action
   */
  export type ubicacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ubicacionInclude<ExtArgs> | null
  }


  /**
   * Model estantes
   */

  export type AggregateEstantes = {
    _count: EstantesCountAggregateOutputType | null
    _avg: EstantesAvgAggregateOutputType | null
    _sum: EstantesSumAggregateOutputType | null
    _min: EstantesMinAggregateOutputType | null
    _max: EstantesMaxAggregateOutputType | null
  }

  export type EstantesAvgAggregateOutputType = {
    id: number | null
    nivel: number | null
    pasillo: number | null
    ubicacionId: number | null
  }

  export type EstantesSumAggregateOutputType = {
    id: number | null
    nivel: number | null
    pasillo: number | null
    ubicacionId: number | null
  }

  export type EstantesMinAggregateOutputType = {
    id: number | null
    Seccion: string | null
    nivel: number | null
    pasillo: number | null
    createdAt: Date | null
    ubicacionId: number | null
  }

  export type EstantesMaxAggregateOutputType = {
    id: number | null
    Seccion: string | null
    nivel: number | null
    pasillo: number | null
    createdAt: Date | null
    ubicacionId: number | null
  }

  export type EstantesCountAggregateOutputType = {
    id: number
    Seccion: number
    nivel: number
    pasillo: number
    createdAt: number
    ubicacionId: number
    _all: number
  }


  export type EstantesAvgAggregateInputType = {
    id?: true
    nivel?: true
    pasillo?: true
    ubicacionId?: true
  }

  export type EstantesSumAggregateInputType = {
    id?: true
    nivel?: true
    pasillo?: true
    ubicacionId?: true
  }

  export type EstantesMinAggregateInputType = {
    id?: true
    Seccion?: true
    nivel?: true
    pasillo?: true
    createdAt?: true
    ubicacionId?: true
  }

  export type EstantesMaxAggregateInputType = {
    id?: true
    Seccion?: true
    nivel?: true
    pasillo?: true
    createdAt?: true
    ubicacionId?: true
  }

  export type EstantesCountAggregateInputType = {
    id?: true
    Seccion?: true
    nivel?: true
    pasillo?: true
    createdAt?: true
    ubicacionId?: true
    _all?: true
  }

  export type EstantesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which estantes to aggregate.
     */
    where?: estantesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estantes to fetch.
     */
    orderBy?: estantesOrderByWithRelationInput | estantesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: estantesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned estantes
    **/
    _count?: true | EstantesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstantesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstantesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstantesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstantesMaxAggregateInputType
  }

  export type GetEstantesAggregateType<T extends EstantesAggregateArgs> = {
        [P in keyof T & keyof AggregateEstantes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstantes[P]>
      : GetScalarType<T[P], AggregateEstantes[P]>
  }




  export type estantesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: estantesWhereInput
    orderBy?: estantesOrderByWithAggregationInput | estantesOrderByWithAggregationInput[]
    by: EstantesScalarFieldEnum[] | EstantesScalarFieldEnum
    having?: estantesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstantesCountAggregateInputType | true
    _avg?: EstantesAvgAggregateInputType
    _sum?: EstantesSumAggregateInputType
    _min?: EstantesMinAggregateInputType
    _max?: EstantesMaxAggregateInputType
  }

  export type EstantesGroupByOutputType = {
    id: number
    Seccion: string
    nivel: number
    pasillo: number
    createdAt: Date
    ubicacionId: number | null
    _count: EstantesCountAggregateOutputType | null
    _avg: EstantesAvgAggregateOutputType | null
    _sum: EstantesSumAggregateOutputType | null
    _min: EstantesMinAggregateOutputType | null
    _max: EstantesMaxAggregateOutputType | null
  }

  type GetEstantesGroupByPayload<T extends estantesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstantesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstantesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstantesGroupByOutputType[P]>
            : GetScalarType<T[P], EstantesGroupByOutputType[P]>
        }
      >
    >


  export type estantesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Seccion?: boolean
    nivel?: boolean
    pasillo?: boolean
    createdAt?: boolean
    ubicacionId?: boolean
    ubicacion?: boolean | estantes$ubicacionArgs<ExtArgs>
    productos?: boolean | estantes$productosArgs<ExtArgs>
    auditorias?: boolean | estantes$auditoriasArgs<ExtArgs>
    _count?: boolean | EstantesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estantes"]>

  export type estantesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Seccion?: boolean
    nivel?: boolean
    pasillo?: boolean
    createdAt?: boolean
    ubicacionId?: boolean
    ubicacion?: boolean | estantes$ubicacionArgs<ExtArgs>
  }, ExtArgs["result"]["estantes"]>

  export type estantesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Seccion?: boolean
    nivel?: boolean
    pasillo?: boolean
    createdAt?: boolean
    ubicacionId?: boolean
    ubicacion?: boolean | estantes$ubicacionArgs<ExtArgs>
  }, ExtArgs["result"]["estantes"]>

  export type estantesSelectScalar = {
    id?: boolean
    Seccion?: boolean
    nivel?: boolean
    pasillo?: boolean
    createdAt?: boolean
    ubicacionId?: boolean
  }

  export type estantesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Seccion" | "nivel" | "pasillo" | "createdAt" | "ubicacionId", ExtArgs["result"]["estantes"]>
  export type estantesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ubicacion?: boolean | estantes$ubicacionArgs<ExtArgs>
    productos?: boolean | estantes$productosArgs<ExtArgs>
    auditorias?: boolean | estantes$auditoriasArgs<ExtArgs>
    _count?: boolean | EstantesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type estantesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ubicacion?: boolean | estantes$ubicacionArgs<ExtArgs>
  }
  export type estantesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ubicacion?: boolean | estantes$ubicacionArgs<ExtArgs>
  }

  export type $estantesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "estantes"
    objects: {
      ubicacion: Prisma.$ubicacionPayload<ExtArgs> | null
      productos: Prisma.$productosPayload<ExtArgs>[]
      auditorias: Prisma.$auditoriaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Seccion: string
      nivel: number
      pasillo: number
      createdAt: Date
      ubicacionId: number | null
    }, ExtArgs["result"]["estantes"]>
    composites: {}
  }

  type estantesGetPayload<S extends boolean | null | undefined | estantesDefaultArgs> = $Result.GetResult<Prisma.$estantesPayload, S>

  type estantesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<estantesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstantesCountAggregateInputType | true
    }

  export interface estantesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['estantes'], meta: { name: 'estantes' } }
    /**
     * Find zero or one Estantes that matches the filter.
     * @param {estantesFindUniqueArgs} args - Arguments to find a Estantes
     * @example
     * // Get one Estantes
     * const estantes = await prisma.estantes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends estantesFindUniqueArgs>(args: SelectSubset<T, estantesFindUniqueArgs<ExtArgs>>): Prisma__estantesClient<$Result.GetResult<Prisma.$estantesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estantes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {estantesFindUniqueOrThrowArgs} args - Arguments to find a Estantes
     * @example
     * // Get one Estantes
     * const estantes = await prisma.estantes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends estantesFindUniqueOrThrowArgs>(args: SelectSubset<T, estantesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__estantesClient<$Result.GetResult<Prisma.$estantesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estantesFindFirstArgs} args - Arguments to find a Estantes
     * @example
     * // Get one Estantes
     * const estantes = await prisma.estantes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends estantesFindFirstArgs>(args?: SelectSubset<T, estantesFindFirstArgs<ExtArgs>>): Prisma__estantesClient<$Result.GetResult<Prisma.$estantesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estantes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estantesFindFirstOrThrowArgs} args - Arguments to find a Estantes
     * @example
     * // Get one Estantes
     * const estantes = await prisma.estantes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends estantesFindFirstOrThrowArgs>(args?: SelectSubset<T, estantesFindFirstOrThrowArgs<ExtArgs>>): Prisma__estantesClient<$Result.GetResult<Prisma.$estantesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estantesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estantes
     * const estantes = await prisma.estantes.findMany()
     * 
     * // Get first 10 Estantes
     * const estantes = await prisma.estantes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estantesWithIdOnly = await prisma.estantes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends estantesFindManyArgs>(args?: SelectSubset<T, estantesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estantesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estantes.
     * @param {estantesCreateArgs} args - Arguments to create a Estantes.
     * @example
     * // Create one Estantes
     * const Estantes = await prisma.estantes.create({
     *   data: {
     *     // ... data to create a Estantes
     *   }
     * })
     * 
     */
    create<T extends estantesCreateArgs>(args: SelectSubset<T, estantesCreateArgs<ExtArgs>>): Prisma__estantesClient<$Result.GetResult<Prisma.$estantesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estantes.
     * @param {estantesCreateManyArgs} args - Arguments to create many Estantes.
     * @example
     * // Create many Estantes
     * const estantes = await prisma.estantes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends estantesCreateManyArgs>(args?: SelectSubset<T, estantesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Estantes and returns the data saved in the database.
     * @param {estantesCreateManyAndReturnArgs} args - Arguments to create many Estantes.
     * @example
     * // Create many Estantes
     * const estantes = await prisma.estantes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Estantes and only return the `id`
     * const estantesWithIdOnly = await prisma.estantes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends estantesCreateManyAndReturnArgs>(args?: SelectSubset<T, estantesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estantesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Estantes.
     * @param {estantesDeleteArgs} args - Arguments to delete one Estantes.
     * @example
     * // Delete one Estantes
     * const Estantes = await prisma.estantes.delete({
     *   where: {
     *     // ... filter to delete one Estantes
     *   }
     * })
     * 
     */
    delete<T extends estantesDeleteArgs>(args: SelectSubset<T, estantesDeleteArgs<ExtArgs>>): Prisma__estantesClient<$Result.GetResult<Prisma.$estantesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estantes.
     * @param {estantesUpdateArgs} args - Arguments to update one Estantes.
     * @example
     * // Update one Estantes
     * const estantes = await prisma.estantes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends estantesUpdateArgs>(args: SelectSubset<T, estantesUpdateArgs<ExtArgs>>): Prisma__estantesClient<$Result.GetResult<Prisma.$estantesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estantes.
     * @param {estantesDeleteManyArgs} args - Arguments to filter Estantes to delete.
     * @example
     * // Delete a few Estantes
     * const { count } = await prisma.estantes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends estantesDeleteManyArgs>(args?: SelectSubset<T, estantesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estantesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estantes
     * const estantes = await prisma.estantes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends estantesUpdateManyArgs>(args: SelectSubset<T, estantesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estantes and returns the data updated in the database.
     * @param {estantesUpdateManyAndReturnArgs} args - Arguments to update many Estantes.
     * @example
     * // Update many Estantes
     * const estantes = await prisma.estantes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Estantes and only return the `id`
     * const estantesWithIdOnly = await prisma.estantes.updateManyAndReturn({
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
    updateManyAndReturn<T extends estantesUpdateManyAndReturnArgs>(args: SelectSubset<T, estantesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estantesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Estantes.
     * @param {estantesUpsertArgs} args - Arguments to update or create a Estantes.
     * @example
     * // Update or create a Estantes
     * const estantes = await prisma.estantes.upsert({
     *   create: {
     *     // ... data to create a Estantes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estantes we want to update
     *   }
     * })
     */
    upsert<T extends estantesUpsertArgs>(args: SelectSubset<T, estantesUpsertArgs<ExtArgs>>): Prisma__estantesClient<$Result.GetResult<Prisma.$estantesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estantesCountArgs} args - Arguments to filter Estantes to count.
     * @example
     * // Count the number of Estantes
     * const count = await prisma.estantes.count({
     *   where: {
     *     // ... the filter for the Estantes we want to count
     *   }
     * })
    **/
    count<T extends estantesCountArgs>(
      args?: Subset<T, estantesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstantesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstantesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstantesAggregateArgs>(args: Subset<T, EstantesAggregateArgs>): Prisma.PrismaPromise<GetEstantesAggregateType<T>>

    /**
     * Group by Estantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estantesGroupByArgs} args - Group by arguments.
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
      T extends estantesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: estantesGroupByArgs['orderBy'] }
        : { orderBy?: estantesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, estantesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstantesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the estantes model
   */
  readonly fields: estantesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for estantes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__estantesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ubicacion<T extends estantes$ubicacionArgs<ExtArgs> = {}>(args?: Subset<T, estantes$ubicacionArgs<ExtArgs>>): Prisma__ubicacionClient<$Result.GetResult<Prisma.$ubicacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    productos<T extends estantes$productosArgs<ExtArgs> = {}>(args?: Subset<T, estantes$productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditorias<T extends estantes$auditoriasArgs<ExtArgs> = {}>(args?: Subset<T, estantes$auditoriasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auditoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the estantes model
   */
  interface estantesFieldRefs {
    readonly id: FieldRef<"estantes", 'Int'>
    readonly Seccion: FieldRef<"estantes", 'String'>
    readonly nivel: FieldRef<"estantes", 'Int'>
    readonly pasillo: FieldRef<"estantes", 'Int'>
    readonly createdAt: FieldRef<"estantes", 'DateTime'>
    readonly ubicacionId: FieldRef<"estantes", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * estantes findUnique
   */
  export type estantesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estantes
     */
    select?: estantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estantes
     */
    omit?: estantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estantesInclude<ExtArgs> | null
    /**
     * Filter, which estantes to fetch.
     */
    where: estantesWhereUniqueInput
  }

  /**
   * estantes findUniqueOrThrow
   */
  export type estantesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estantes
     */
    select?: estantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estantes
     */
    omit?: estantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estantesInclude<ExtArgs> | null
    /**
     * Filter, which estantes to fetch.
     */
    where: estantesWhereUniqueInput
  }

  /**
   * estantes findFirst
   */
  export type estantesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estantes
     */
    select?: estantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estantes
     */
    omit?: estantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estantesInclude<ExtArgs> | null
    /**
     * Filter, which estantes to fetch.
     */
    where?: estantesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estantes to fetch.
     */
    orderBy?: estantesOrderByWithRelationInput | estantesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for estantes.
     */
    cursor?: estantesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of estantes.
     */
    distinct?: EstantesScalarFieldEnum | EstantesScalarFieldEnum[]
  }

  /**
   * estantes findFirstOrThrow
   */
  export type estantesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estantes
     */
    select?: estantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estantes
     */
    omit?: estantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estantesInclude<ExtArgs> | null
    /**
     * Filter, which estantes to fetch.
     */
    where?: estantesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estantes to fetch.
     */
    orderBy?: estantesOrderByWithRelationInput | estantesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for estantes.
     */
    cursor?: estantesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of estantes.
     */
    distinct?: EstantesScalarFieldEnum | EstantesScalarFieldEnum[]
  }

  /**
   * estantes findMany
   */
  export type estantesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estantes
     */
    select?: estantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estantes
     */
    omit?: estantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estantesInclude<ExtArgs> | null
    /**
     * Filter, which estantes to fetch.
     */
    where?: estantesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estantes to fetch.
     */
    orderBy?: estantesOrderByWithRelationInput | estantesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing estantes.
     */
    cursor?: estantesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estantes.
     */
    skip?: number
    distinct?: EstantesScalarFieldEnum | EstantesScalarFieldEnum[]
  }

  /**
   * estantes create
   */
  export type estantesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estantes
     */
    select?: estantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estantes
     */
    omit?: estantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estantesInclude<ExtArgs> | null
    /**
     * The data needed to create a estantes.
     */
    data: XOR<estantesCreateInput, estantesUncheckedCreateInput>
  }

  /**
   * estantes createMany
   */
  export type estantesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many estantes.
     */
    data: estantesCreateManyInput | estantesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * estantes createManyAndReturn
   */
  export type estantesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estantes
     */
    select?: estantesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the estantes
     */
    omit?: estantesOmit<ExtArgs> | null
    /**
     * The data used to create many estantes.
     */
    data: estantesCreateManyInput | estantesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estantesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * estantes update
   */
  export type estantesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estantes
     */
    select?: estantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estantes
     */
    omit?: estantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estantesInclude<ExtArgs> | null
    /**
     * The data needed to update a estantes.
     */
    data: XOR<estantesUpdateInput, estantesUncheckedUpdateInput>
    /**
     * Choose, which estantes to update.
     */
    where: estantesWhereUniqueInput
  }

  /**
   * estantes updateMany
   */
  export type estantesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update estantes.
     */
    data: XOR<estantesUpdateManyMutationInput, estantesUncheckedUpdateManyInput>
    /**
     * Filter which estantes to update
     */
    where?: estantesWhereInput
    /**
     * Limit how many estantes to update.
     */
    limit?: number
  }

  /**
   * estantes updateManyAndReturn
   */
  export type estantesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estantes
     */
    select?: estantesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the estantes
     */
    omit?: estantesOmit<ExtArgs> | null
    /**
     * The data used to update estantes.
     */
    data: XOR<estantesUpdateManyMutationInput, estantesUncheckedUpdateManyInput>
    /**
     * Filter which estantes to update
     */
    where?: estantesWhereInput
    /**
     * Limit how many estantes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estantesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * estantes upsert
   */
  export type estantesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estantes
     */
    select?: estantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estantes
     */
    omit?: estantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estantesInclude<ExtArgs> | null
    /**
     * The filter to search for the estantes to update in case it exists.
     */
    where: estantesWhereUniqueInput
    /**
     * In case the estantes found by the `where` argument doesn't exist, create a new estantes with this data.
     */
    create: XOR<estantesCreateInput, estantesUncheckedCreateInput>
    /**
     * In case the estantes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<estantesUpdateInput, estantesUncheckedUpdateInput>
  }

  /**
   * estantes delete
   */
  export type estantesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estantes
     */
    select?: estantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estantes
     */
    omit?: estantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estantesInclude<ExtArgs> | null
    /**
     * Filter which estantes to delete.
     */
    where: estantesWhereUniqueInput
  }

  /**
   * estantes deleteMany
   */
  export type estantesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which estantes to delete
     */
    where?: estantesWhereInput
    /**
     * Limit how many estantes to delete.
     */
    limit?: number
  }

  /**
   * estantes.ubicacion
   */
  export type estantes$ubicacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ubicacionInclude<ExtArgs> | null
    where?: ubicacionWhereInput
  }

  /**
   * estantes.productos
   */
  export type estantes$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    where?: productosWhereInput
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    cursor?: productosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * estantes.auditorias
   */
  export type estantes$auditoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditoria
     */
    select?: auditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditoria
     */
    omit?: auditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditoriaInclude<ExtArgs> | null
    where?: auditoriaWhereInput
    orderBy?: auditoriaOrderByWithRelationInput | auditoriaOrderByWithRelationInput[]
    cursor?: auditoriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditoriaScalarFieldEnum | AuditoriaScalarFieldEnum[]
  }

  /**
   * estantes without action
   */
  export type estantesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estantes
     */
    select?: estantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estantes
     */
    omit?: estantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estantesInclude<ExtArgs> | null
  }


  /**
   * Model categorias
   */

  export type AggregateCategorias = {
    _count: CategoriasCountAggregateOutputType | null
    _avg: CategoriasAvgAggregateOutputType | null
    _sum: CategoriasSumAggregateOutputType | null
    _min: CategoriasMinAggregateOutputType | null
    _max: CategoriasMaxAggregateOutputType | null
  }

  export type CategoriasAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriasSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriasMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    createdAt: Date | null
  }

  export type CategoriasMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    createdAt: Date | null
  }

  export type CategoriasCountAggregateOutputType = {
    id: number
    nombre: number
    createdAt: number
    _all: number
  }


  export type CategoriasAvgAggregateInputType = {
    id?: true
  }

  export type CategoriasSumAggregateInputType = {
    id?: true
  }

  export type CategoriasMinAggregateInputType = {
    id?: true
    nombre?: true
    createdAt?: true
  }

  export type CategoriasMaxAggregateInputType = {
    id?: true
    nombre?: true
    createdAt?: true
  }

  export type CategoriasCountAggregateInputType = {
    id?: true
    nombre?: true
    createdAt?: true
    _all?: true
  }

  export type CategoriasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorias to aggregate.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categorias
    **/
    _count?: true | CategoriasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriasMaxAggregateInputType
  }

  export type GetCategoriasAggregateType<T extends CategoriasAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorias]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorias[P]>
      : GetScalarType<T[P], AggregateCategorias[P]>
  }




  export type categoriasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriasWhereInput
    orderBy?: categoriasOrderByWithAggregationInput | categoriasOrderByWithAggregationInput[]
    by: CategoriasScalarFieldEnum[] | CategoriasScalarFieldEnum
    having?: categoriasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriasCountAggregateInputType | true
    _avg?: CategoriasAvgAggregateInputType
    _sum?: CategoriasSumAggregateInputType
    _min?: CategoriasMinAggregateInputType
    _max?: CategoriasMaxAggregateInputType
  }

  export type CategoriasGroupByOutputType = {
    id: number
    nombre: string
    createdAt: Date
    _count: CategoriasCountAggregateOutputType | null
    _avg: CategoriasAvgAggregateOutputType | null
    _sum: CategoriasSumAggregateOutputType | null
    _min: CategoriasMinAggregateOutputType | null
    _max: CategoriasMaxAggregateOutputType | null
  }

  type GetCategoriasGroupByPayload<T extends categoriasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriasGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriasGroupByOutputType[P]>
        }
      >
    >


  export type categoriasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    createdAt?: boolean
    productos?: boolean | categorias$productosArgs<ExtArgs>
    auditorias?: boolean | categorias$auditoriasArgs<ExtArgs>
    _count?: boolean | CategoriasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categorias"]>

  export type categoriasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["categorias"]>

  export type categoriasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["categorias"]>

  export type categoriasSelectScalar = {
    id?: boolean
    nombre?: boolean
    createdAt?: boolean
  }

  export type categoriasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "createdAt", ExtArgs["result"]["categorias"]>
  export type categoriasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | categorias$productosArgs<ExtArgs>
    auditorias?: boolean | categorias$auditoriasArgs<ExtArgs>
    _count?: boolean | CategoriasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoriasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoriasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoriasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categorias"
    objects: {
      productos: Prisma.$productosPayload<ExtArgs>[]
      auditorias: Prisma.$auditoriaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      createdAt: Date
    }, ExtArgs["result"]["categorias"]>
    composites: {}
  }

  type categoriasGetPayload<S extends boolean | null | undefined | categoriasDefaultArgs> = $Result.GetResult<Prisma.$categoriasPayload, S>

  type categoriasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriasCountAggregateInputType | true
    }

  export interface categoriasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categorias'], meta: { name: 'categorias' } }
    /**
     * Find zero or one Categorias that matches the filter.
     * @param {categoriasFindUniqueArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriasFindUniqueArgs>(args: SelectSubset<T, categoriasFindUniqueArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categorias that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriasFindUniqueOrThrowArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriasFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasFindFirstArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriasFindFirstArgs>(args?: SelectSubset<T, categoriasFindFirstArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorias that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasFindFirstOrThrowArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriasFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriasFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categorias.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categorias.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriasWithIdOnly = await prisma.categorias.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriasFindManyArgs>(args?: SelectSubset<T, categoriasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categorias.
     * @param {categoriasCreateArgs} args - Arguments to create a Categorias.
     * @example
     * // Create one Categorias
     * const Categorias = await prisma.categorias.create({
     *   data: {
     *     // ... data to create a Categorias
     *   }
     * })
     * 
     */
    create<T extends categoriasCreateArgs>(args: SelectSubset<T, categoriasCreateArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {categoriasCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categorias = await prisma.categorias.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriasCreateManyArgs>(args?: SelectSubset<T, categoriasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {categoriasCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categorias = await prisma.categorias.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id`
     * const categoriasWithIdOnly = await prisma.categorias.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriasCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categorias.
     * @param {categoriasDeleteArgs} args - Arguments to delete one Categorias.
     * @example
     * // Delete one Categorias
     * const Categorias = await prisma.categorias.delete({
     *   where: {
     *     // ... filter to delete one Categorias
     *   }
     * })
     * 
     */
    delete<T extends categoriasDeleteArgs>(args: SelectSubset<T, categoriasDeleteArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categorias.
     * @param {categoriasUpdateArgs} args - Arguments to update one Categorias.
     * @example
     * // Update one Categorias
     * const categorias = await prisma.categorias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriasUpdateArgs>(args: SelectSubset<T, categoriasUpdateArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {categoriasDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categorias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriasDeleteManyArgs>(args?: SelectSubset<T, categoriasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categorias = await prisma.categorias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriasUpdateManyArgs>(args: SelectSubset<T, categoriasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {categoriasUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categorias = await prisma.categorias.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id`
     * const categoriasWithIdOnly = await prisma.categorias.updateManyAndReturn({
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
    updateManyAndReturn<T extends categoriasUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categorias.
     * @param {categoriasUpsertArgs} args - Arguments to update or create a Categorias.
     * @example
     * // Update or create a Categorias
     * const categorias = await prisma.categorias.upsert({
     *   create: {
     *     // ... data to create a Categorias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categorias we want to update
     *   }
     * })
     */
    upsert<T extends categoriasUpsertArgs>(args: SelectSubset<T, categoriasUpsertArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categorias.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends categoriasCountArgs>(
      args?: Subset<T, categoriasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriasAggregateArgs>(args: Subset<T, CategoriasAggregateArgs>): Prisma.PrismaPromise<GetCategoriasAggregateType<T>>

    /**
     * Group by Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasGroupByArgs} args - Group by arguments.
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
      T extends categoriasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriasGroupByArgs['orderBy'] }
        : { orderBy?: categoriasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoriasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categorias model
   */
  readonly fields: categoriasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categorias.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos<T extends categorias$productosArgs<ExtArgs> = {}>(args?: Subset<T, categorias$productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditorias<T extends categorias$auditoriasArgs<ExtArgs> = {}>(args?: Subset<T, categorias$auditoriasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auditoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the categorias model
   */
  interface categoriasFieldRefs {
    readonly id: FieldRef<"categorias", 'Int'>
    readonly nombre: FieldRef<"categorias", 'String'>
    readonly createdAt: FieldRef<"categorias", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * categorias findUnique
   */
  export type categoriasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias findUniqueOrThrow
   */
  export type categoriasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias findFirst
   */
  export type categoriasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * categorias findFirstOrThrow
   */
  export type categoriasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * categorias findMany
   */
  export type categoriasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categorias.
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * categorias create
   */
  export type categoriasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * The data needed to create a categorias.
     */
    data: XOR<categoriasCreateInput, categoriasUncheckedCreateInput>
  }

  /**
   * categorias createMany
   */
  export type categoriasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categorias.
     */
    data: categoriasCreateManyInput | categoriasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categorias createManyAndReturn
   */
  export type categoriasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * The data used to create many categorias.
     */
    data: categoriasCreateManyInput | categoriasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categorias update
   */
  export type categoriasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * The data needed to update a categorias.
     */
    data: XOR<categoriasUpdateInput, categoriasUncheckedUpdateInput>
    /**
     * Choose, which categorias to update.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias updateMany
   */
  export type categoriasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categorias.
     */
    data: XOR<categoriasUpdateManyMutationInput, categoriasUncheckedUpdateManyInput>
    /**
     * Filter which categorias to update
     */
    where?: categoriasWhereInput
    /**
     * Limit how many categorias to update.
     */
    limit?: number
  }

  /**
   * categorias updateManyAndReturn
   */
  export type categoriasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * The data used to update categorias.
     */
    data: XOR<categoriasUpdateManyMutationInput, categoriasUncheckedUpdateManyInput>
    /**
     * Filter which categorias to update
     */
    where?: categoriasWhereInput
    /**
     * Limit how many categorias to update.
     */
    limit?: number
  }

  /**
   * categorias upsert
   */
  export type categoriasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * The filter to search for the categorias to update in case it exists.
     */
    where: categoriasWhereUniqueInput
    /**
     * In case the categorias found by the `where` argument doesn't exist, create a new categorias with this data.
     */
    create: XOR<categoriasCreateInput, categoriasUncheckedCreateInput>
    /**
     * In case the categorias was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriasUpdateInput, categoriasUncheckedUpdateInput>
  }

  /**
   * categorias delete
   */
  export type categoriasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter which categorias to delete.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias deleteMany
   */
  export type categoriasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorias to delete
     */
    where?: categoriasWhereInput
    /**
     * Limit how many categorias to delete.
     */
    limit?: number
  }

  /**
   * categorias.productos
   */
  export type categorias$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    where?: productosWhereInput
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    cursor?: productosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * categorias.auditorias
   */
  export type categorias$auditoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditoria
     */
    select?: auditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditoria
     */
    omit?: auditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditoriaInclude<ExtArgs> | null
    where?: auditoriaWhereInput
    orderBy?: auditoriaOrderByWithRelationInput | auditoriaOrderByWithRelationInput[]
    cursor?: auditoriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditoriaScalarFieldEnum | AuditoriaScalarFieldEnum[]
  }

  /**
   * categorias without action
   */
  export type categoriasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
  }


  /**
   * Model productos
   */

  export type AggregateProductos = {
    _count: ProductosCountAggregateOutputType | null
    _avg: ProductosAvgAggregateOutputType | null
    _sum: ProductosSumAggregateOutputType | null
    _min: ProductosMinAggregateOutputType | null
    _max: ProductosMaxAggregateOutputType | null
  }

  export type ProductosAvgAggregateOutputType = {
    id: number | null
    categoriaId: number | null
    estantesId: number | null
  }

  export type ProductosSumAggregateOutputType = {
    id: number | null
    categoriaId: number | null
    estantesId: number | null
  }

  export type ProductosMinAggregateOutputType = {
    id: number | null
    categoriaId: number | null
    createdAt: Date | null
    estantesId: number | null
  }

  export type ProductosMaxAggregateOutputType = {
    id: number | null
    categoriaId: number | null
    createdAt: Date | null
    estantesId: number | null
  }

  export type ProductosCountAggregateOutputType = {
    id: number
    categoriaId: number
    createdAt: number
    estantesId: number
    _all: number
  }


  export type ProductosAvgAggregateInputType = {
    id?: true
    categoriaId?: true
    estantesId?: true
  }

  export type ProductosSumAggregateInputType = {
    id?: true
    categoriaId?: true
    estantesId?: true
  }

  export type ProductosMinAggregateInputType = {
    id?: true
    categoriaId?: true
    createdAt?: true
    estantesId?: true
  }

  export type ProductosMaxAggregateInputType = {
    id?: true
    categoriaId?: true
    createdAt?: true
    estantesId?: true
  }

  export type ProductosCountAggregateInputType = {
    id?: true
    categoriaId?: true
    createdAt?: true
    estantesId?: true
    _all?: true
  }

  export type ProductosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productos to aggregate.
     */
    where?: productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned productos
    **/
    _count?: true | ProductosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductosMaxAggregateInputType
  }

  export type GetProductosAggregateType<T extends ProductosAggregateArgs> = {
        [P in keyof T & keyof AggregateProductos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductos[P]>
      : GetScalarType<T[P], AggregateProductos[P]>
  }




  export type productosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productosWhereInput
    orderBy?: productosOrderByWithAggregationInput | productosOrderByWithAggregationInput[]
    by: ProductosScalarFieldEnum[] | ProductosScalarFieldEnum
    having?: productosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductosCountAggregateInputType | true
    _avg?: ProductosAvgAggregateInputType
    _sum?: ProductosSumAggregateInputType
    _min?: ProductosMinAggregateInputType
    _max?: ProductosMaxAggregateInputType
  }

  export type ProductosGroupByOutputType = {
    id: number
    categoriaId: number | null
    createdAt: Date
    estantesId: number | null
    _count: ProductosCountAggregateOutputType | null
    _avg: ProductosAvgAggregateOutputType | null
    _sum: ProductosSumAggregateOutputType | null
    _min: ProductosMinAggregateOutputType | null
    _max: ProductosMaxAggregateOutputType | null
  }

  type GetProductosGroupByPayload<T extends productosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductosGroupByOutputType[P]>
            : GetScalarType<T[P], ProductosGroupByOutputType[P]>
        }
      >
    >


  export type productosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoriaId?: boolean
    createdAt?: boolean
    estantesId?: boolean
    categoria?: boolean | productos$categoriaArgs<ExtArgs>
    variantes?: boolean | productos$variantesArgs<ExtArgs>
    usuario?: boolean | productos$usuarioArgs<ExtArgs>
    estantes?: boolean | productos$estantesArgs<ExtArgs>
    auditorias?: boolean | productos$auditoriasArgs<ExtArgs>
    _count?: boolean | ProductosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productos"]>

  export type productosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoriaId?: boolean
    createdAt?: boolean
    estantesId?: boolean
    categoria?: boolean | productos$categoriaArgs<ExtArgs>
    estantes?: boolean | productos$estantesArgs<ExtArgs>
  }, ExtArgs["result"]["productos"]>

  export type productosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoriaId?: boolean
    createdAt?: boolean
    estantesId?: boolean
    categoria?: boolean | productos$categoriaArgs<ExtArgs>
    estantes?: boolean | productos$estantesArgs<ExtArgs>
  }, ExtArgs["result"]["productos"]>

  export type productosSelectScalar = {
    id?: boolean
    categoriaId?: boolean
    createdAt?: boolean
    estantesId?: boolean
  }

  export type productosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoriaId" | "createdAt" | "estantesId", ExtArgs["result"]["productos"]>
  export type productosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | productos$categoriaArgs<ExtArgs>
    variantes?: boolean | productos$variantesArgs<ExtArgs>
    usuario?: boolean | productos$usuarioArgs<ExtArgs>
    estantes?: boolean | productos$estantesArgs<ExtArgs>
    auditorias?: boolean | productos$auditoriasArgs<ExtArgs>
    _count?: boolean | ProductosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | productos$categoriaArgs<ExtArgs>
    estantes?: boolean | productos$estantesArgs<ExtArgs>
  }
  export type productosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | productos$categoriaArgs<ExtArgs>
    estantes?: boolean | productos$estantesArgs<ExtArgs>
  }

  export type $productosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "productos"
    objects: {
      categoria: Prisma.$categoriasPayload<ExtArgs> | null
      variantes: Prisma.$variantesPayload<ExtArgs>[]
      usuario: Prisma.$usuarioPayload<ExtArgs>[]
      estantes: Prisma.$estantesPayload<ExtArgs> | null
      auditorias: Prisma.$auditoriaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      categoriaId: number | null
      createdAt: Date
      estantesId: number | null
    }, ExtArgs["result"]["productos"]>
    composites: {}
  }

  type productosGetPayload<S extends boolean | null | undefined | productosDefaultArgs> = $Result.GetResult<Prisma.$productosPayload, S>

  type productosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductosCountAggregateInputType | true
    }

  export interface productosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['productos'], meta: { name: 'productos' } }
    /**
     * Find zero or one Productos that matches the filter.
     * @param {productosFindUniqueArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productosFindUniqueArgs>(args: SelectSubset<T, productosFindUniqueArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Productos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productosFindUniqueOrThrowArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productosFindUniqueOrThrowArgs>(args: SelectSubset<T, productosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosFindFirstArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productosFindFirstArgs>(args?: SelectSubset<T, productosFindFirstArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Productos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosFindFirstOrThrowArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productosFindFirstOrThrowArgs>(args?: SelectSubset<T, productosFindFirstOrThrowArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.productos.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.productos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productosWithIdOnly = await prisma.productos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productosFindManyArgs>(args?: SelectSubset<T, productosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Productos.
     * @param {productosCreateArgs} args - Arguments to create a Productos.
     * @example
     * // Create one Productos
     * const Productos = await prisma.productos.create({
     *   data: {
     *     // ... data to create a Productos
     *   }
     * })
     * 
     */
    create<T extends productosCreateArgs>(args: SelectSubset<T, productosCreateArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productos.
     * @param {productosCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const productos = await prisma.productos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productosCreateManyArgs>(args?: SelectSubset<T, productosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Productos and returns the data saved in the database.
     * @param {productosCreateManyAndReturnArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const productos = await prisma.productos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Productos and only return the `id`
     * const productosWithIdOnly = await prisma.productos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productosCreateManyAndReturnArgs>(args?: SelectSubset<T, productosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Productos.
     * @param {productosDeleteArgs} args - Arguments to delete one Productos.
     * @example
     * // Delete one Productos
     * const Productos = await prisma.productos.delete({
     *   where: {
     *     // ... filter to delete one Productos
     *   }
     * })
     * 
     */
    delete<T extends productosDeleteArgs>(args: SelectSubset<T, productosDeleteArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Productos.
     * @param {productosUpdateArgs} args - Arguments to update one Productos.
     * @example
     * // Update one Productos
     * const productos = await prisma.productos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productosUpdateArgs>(args: SelectSubset<T, productosUpdateArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productos.
     * @param {productosDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.productos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productosDeleteManyArgs>(args?: SelectSubset<T, productosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const productos = await prisma.productos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productosUpdateManyArgs>(args: SelectSubset<T, productosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos and returns the data updated in the database.
     * @param {productosUpdateManyAndReturnArgs} args - Arguments to update many Productos.
     * @example
     * // Update many Productos
     * const productos = await prisma.productos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Productos and only return the `id`
     * const productosWithIdOnly = await prisma.productos.updateManyAndReturn({
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
    updateManyAndReturn<T extends productosUpdateManyAndReturnArgs>(args: SelectSubset<T, productosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Productos.
     * @param {productosUpsertArgs} args - Arguments to update or create a Productos.
     * @example
     * // Update or create a Productos
     * const productos = await prisma.productos.upsert({
     *   create: {
     *     // ... data to create a Productos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Productos we want to update
     *   }
     * })
     */
    upsert<T extends productosUpsertArgs>(args: SelectSubset<T, productosUpsertArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.productos.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends productosCountArgs>(
      args?: Subset<T, productosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductosAggregateArgs>(args: Subset<T, ProductosAggregateArgs>): Prisma.PrismaPromise<GetProductosAggregateType<T>>

    /**
     * Group by Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosGroupByArgs} args - Group by arguments.
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
      T extends productosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productosGroupByArgs['orderBy'] }
        : { orderBy?: productosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, productosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the productos model
   */
  readonly fields: productosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for productos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends productos$categoriaArgs<ExtArgs> = {}>(args?: Subset<T, productos$categoriaArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    variantes<T extends productos$variantesArgs<ExtArgs> = {}>(args?: Subset<T, productos$variantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$variantesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuario<T extends productos$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, productos$usuarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    estantes<T extends productos$estantesArgs<ExtArgs> = {}>(args?: Subset<T, productos$estantesArgs<ExtArgs>>): Prisma__estantesClient<$Result.GetResult<Prisma.$estantesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    auditorias<T extends productos$auditoriasArgs<ExtArgs> = {}>(args?: Subset<T, productos$auditoriasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auditoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the productos model
   */
  interface productosFieldRefs {
    readonly id: FieldRef<"productos", 'Int'>
    readonly categoriaId: FieldRef<"productos", 'Int'>
    readonly createdAt: FieldRef<"productos", 'DateTime'>
    readonly estantesId: FieldRef<"productos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * productos findUnique
   */
  export type productosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where: productosWhereUniqueInput
  }

  /**
   * productos findUniqueOrThrow
   */
  export type productosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where: productosWhereUniqueInput
  }

  /**
   * productos findFirst
   */
  export type productosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where?: productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productos.
     */
    cursor?: productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productos.
     */
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * productos findFirstOrThrow
   */
  export type productosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where?: productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productos.
     */
    cursor?: productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productos.
     */
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * productos findMany
   */
  export type productosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where?: productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing productos.
     */
    cursor?: productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * productos create
   */
  export type productosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * The data needed to create a productos.
     */
    data?: XOR<productosCreateInput, productosUncheckedCreateInput>
  }

  /**
   * productos createMany
   */
  export type productosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many productos.
     */
    data: productosCreateManyInput | productosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * productos createManyAndReturn
   */
  export type productosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * The data used to create many productos.
     */
    data: productosCreateManyInput | productosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * productos update
   */
  export type productosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * The data needed to update a productos.
     */
    data: XOR<productosUpdateInput, productosUncheckedUpdateInput>
    /**
     * Choose, which productos to update.
     */
    where: productosWhereUniqueInput
  }

  /**
   * productos updateMany
   */
  export type productosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update productos.
     */
    data: XOR<productosUpdateManyMutationInput, productosUncheckedUpdateManyInput>
    /**
     * Filter which productos to update
     */
    where?: productosWhereInput
    /**
     * Limit how many productos to update.
     */
    limit?: number
  }

  /**
   * productos updateManyAndReturn
   */
  export type productosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * The data used to update productos.
     */
    data: XOR<productosUpdateManyMutationInput, productosUncheckedUpdateManyInput>
    /**
     * Filter which productos to update
     */
    where?: productosWhereInput
    /**
     * Limit how many productos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * productos upsert
   */
  export type productosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * The filter to search for the productos to update in case it exists.
     */
    where: productosWhereUniqueInput
    /**
     * In case the productos found by the `where` argument doesn't exist, create a new productos with this data.
     */
    create: XOR<productosCreateInput, productosUncheckedCreateInput>
    /**
     * In case the productos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productosUpdateInput, productosUncheckedUpdateInput>
  }

  /**
   * productos delete
   */
  export type productosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter which productos to delete.
     */
    where: productosWhereUniqueInput
  }

  /**
   * productos deleteMany
   */
  export type productosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productos to delete
     */
    where?: productosWhereInput
    /**
     * Limit how many productos to delete.
     */
    limit?: number
  }

  /**
   * productos.categoria
   */
  export type productos$categoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    where?: categoriasWhereInput
  }

  /**
   * productos.variantes
   */
  export type productos$variantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variantes
     */
    select?: variantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variantes
     */
    omit?: variantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantesInclude<ExtArgs> | null
    where?: variantesWhereInput
    orderBy?: variantesOrderByWithRelationInput | variantesOrderByWithRelationInput[]
    cursor?: variantesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariantesScalarFieldEnum | VariantesScalarFieldEnum[]
  }

  /**
   * productos.usuario
   */
  export type productos$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    cursor?: usuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * productos.estantes
   */
  export type productos$estantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estantes
     */
    select?: estantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estantes
     */
    omit?: estantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estantesInclude<ExtArgs> | null
    where?: estantesWhereInput
  }

  /**
   * productos.auditorias
   */
  export type productos$auditoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditoria
     */
    select?: auditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditoria
     */
    omit?: auditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditoriaInclude<ExtArgs> | null
    where?: auditoriaWhereInput
    orderBy?: auditoriaOrderByWithRelationInput | auditoriaOrderByWithRelationInput[]
    cursor?: auditoriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditoriaScalarFieldEnum | AuditoriaScalarFieldEnum[]
  }

  /**
   * productos without action
   */
  export type productosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
  }


  /**
   * Model variantes
   */

  export type AggregateVariantes = {
    _count: VariantesCountAggregateOutputType | null
    _avg: VariantesAvgAggregateOutputType | null
    _sum: VariantesSumAggregateOutputType | null
    _min: VariantesMinAggregateOutputType | null
    _max: VariantesMaxAggregateOutputType | null
  }

  export type VariantesAvgAggregateOutputType = {
    id: number | null
    producto_id: number | null
    locacion_id: number | null
    estante_id: number | null
    cantidad: number | null
    precio_publico: number | null
    precio_contratista: number | null
    costo_compra: number | null
    ganacia_publico: number | null
    ganacia_contratista: number | null
    ganancias_stock: number | null
  }

  export type VariantesSumAggregateOutputType = {
    id: number | null
    producto_id: number | null
    locacion_id: number | null
    estante_id: number | null
    cantidad: number | null
    precio_publico: number | null
    precio_contratista: number | null
    costo_compra: number | null
    ganacia_publico: number | null
    ganacia_contratista: number | null
    ganancias_stock: number | null
  }

  export type VariantesMinAggregateOutputType = {
    id: number | null
    producto_id: number | null
    locacion_id: number | null
    estante_id: number | null
    foto: string | null
    nombre: string | null
    codigo: string | null
    color: string | null
    descripcion: string | null
    cantidad: number | null
    medidas: string | null
    precio_publico: number | null
    precio_contratista: number | null
    costo_compra: number | null
    createdAt: Date | null
    updatedAt: Date | null
    ganacia_publico: number | null
    ganacia_contratista: number | null
    ganancias_stock: number | null
  }

  export type VariantesMaxAggregateOutputType = {
    id: number | null
    producto_id: number | null
    locacion_id: number | null
    estante_id: number | null
    foto: string | null
    nombre: string | null
    codigo: string | null
    color: string | null
    descripcion: string | null
    cantidad: number | null
    medidas: string | null
    precio_publico: number | null
    precio_contratista: number | null
    costo_compra: number | null
    createdAt: Date | null
    updatedAt: Date | null
    ganacia_publico: number | null
    ganacia_contratista: number | null
    ganancias_stock: number | null
  }

  export type VariantesCountAggregateOutputType = {
    id: number
    producto_id: number
    locacion_id: number
    estante_id: number
    foto: number
    nombre: number
    codigo: number
    color: number
    descripcion: number
    cantidad: number
    medidas: number
    precio_publico: number
    precio_contratista: number
    costo_compra: number
    createdAt: number
    updatedAt: number
    ganacia_publico: number
    ganacia_contratista: number
    ganancias_stock: number
    _all: number
  }


  export type VariantesAvgAggregateInputType = {
    id?: true
    producto_id?: true
    locacion_id?: true
    estante_id?: true
    cantidad?: true
    precio_publico?: true
    precio_contratista?: true
    costo_compra?: true
    ganacia_publico?: true
    ganacia_contratista?: true
    ganancias_stock?: true
  }

  export type VariantesSumAggregateInputType = {
    id?: true
    producto_id?: true
    locacion_id?: true
    estante_id?: true
    cantidad?: true
    precio_publico?: true
    precio_contratista?: true
    costo_compra?: true
    ganacia_publico?: true
    ganacia_contratista?: true
    ganancias_stock?: true
  }

  export type VariantesMinAggregateInputType = {
    id?: true
    producto_id?: true
    locacion_id?: true
    estante_id?: true
    foto?: true
    nombre?: true
    codigo?: true
    color?: true
    descripcion?: true
    cantidad?: true
    medidas?: true
    precio_publico?: true
    precio_contratista?: true
    costo_compra?: true
    createdAt?: true
    updatedAt?: true
    ganacia_publico?: true
    ganacia_contratista?: true
    ganancias_stock?: true
  }

  export type VariantesMaxAggregateInputType = {
    id?: true
    producto_id?: true
    locacion_id?: true
    estante_id?: true
    foto?: true
    nombre?: true
    codigo?: true
    color?: true
    descripcion?: true
    cantidad?: true
    medidas?: true
    precio_publico?: true
    precio_contratista?: true
    costo_compra?: true
    createdAt?: true
    updatedAt?: true
    ganacia_publico?: true
    ganacia_contratista?: true
    ganancias_stock?: true
  }

  export type VariantesCountAggregateInputType = {
    id?: true
    producto_id?: true
    locacion_id?: true
    estante_id?: true
    foto?: true
    nombre?: true
    codigo?: true
    color?: true
    descripcion?: true
    cantidad?: true
    medidas?: true
    precio_publico?: true
    precio_contratista?: true
    costo_compra?: true
    createdAt?: true
    updatedAt?: true
    ganacia_publico?: true
    ganacia_contratista?: true
    ganancias_stock?: true
    _all?: true
  }

  export type VariantesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which variantes to aggregate.
     */
    where?: variantesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of variantes to fetch.
     */
    orderBy?: variantesOrderByWithRelationInput | variantesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: variantesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` variantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` variantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned variantes
    **/
    _count?: true | VariantesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VariantesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VariantesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VariantesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VariantesMaxAggregateInputType
  }

  export type GetVariantesAggregateType<T extends VariantesAggregateArgs> = {
        [P in keyof T & keyof AggregateVariantes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariantes[P]>
      : GetScalarType<T[P], AggregateVariantes[P]>
  }




  export type variantesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: variantesWhereInput
    orderBy?: variantesOrderByWithAggregationInput | variantesOrderByWithAggregationInput[]
    by: VariantesScalarFieldEnum[] | VariantesScalarFieldEnum
    having?: variantesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VariantesCountAggregateInputType | true
    _avg?: VariantesAvgAggregateInputType
    _sum?: VariantesSumAggregateInputType
    _min?: VariantesMinAggregateInputType
    _max?: VariantesMaxAggregateInputType
  }

  export type VariantesGroupByOutputType = {
    id: number
    producto_id: number
    locacion_id: number
    estante_id: number | null
    foto: string
    nombre: string
    codigo: string
    color: string
    descripcion: string
    cantidad: number
    medidas: string
    precio_publico: number
    precio_contratista: number
    costo_compra: number
    createdAt: Date
    updatedAt: Date
    ganacia_publico: number
    ganacia_contratista: number
    ganancias_stock: number
    _count: VariantesCountAggregateOutputType | null
    _avg: VariantesAvgAggregateOutputType | null
    _sum: VariantesSumAggregateOutputType | null
    _min: VariantesMinAggregateOutputType | null
    _max: VariantesMaxAggregateOutputType | null
  }

  type GetVariantesGroupByPayload<T extends variantesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VariantesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VariantesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VariantesGroupByOutputType[P]>
            : GetScalarType<T[P], VariantesGroupByOutputType[P]>
        }
      >
    >


  export type variantesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    producto_id?: boolean
    locacion_id?: boolean
    estante_id?: boolean
    foto?: boolean
    nombre?: boolean
    codigo?: boolean
    color?: boolean
    descripcion?: boolean
    cantidad?: boolean
    medidas?: boolean
    precio_publico?: boolean
    precio_contratista?: boolean
    costo_compra?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ganacia_publico?: boolean
    ganacia_contratista?: boolean
    ganancias_stock?: boolean
    producto?: boolean | variantes$productoArgs<ExtArgs>
    ventas?: boolean | variantes$ventasArgs<ExtArgs>
    auditorias?: boolean | variantes$auditoriasArgs<ExtArgs>
    _count?: boolean | VariantesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variantes"]>

  export type variantesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    producto_id?: boolean
    locacion_id?: boolean
    estante_id?: boolean
    foto?: boolean
    nombre?: boolean
    codigo?: boolean
    color?: boolean
    descripcion?: boolean
    cantidad?: boolean
    medidas?: boolean
    precio_publico?: boolean
    precio_contratista?: boolean
    costo_compra?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ganacia_publico?: boolean
    ganacia_contratista?: boolean
    ganancias_stock?: boolean
    producto?: boolean | variantes$productoArgs<ExtArgs>
  }, ExtArgs["result"]["variantes"]>

  export type variantesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    producto_id?: boolean
    locacion_id?: boolean
    estante_id?: boolean
    foto?: boolean
    nombre?: boolean
    codigo?: boolean
    color?: boolean
    descripcion?: boolean
    cantidad?: boolean
    medidas?: boolean
    precio_publico?: boolean
    precio_contratista?: boolean
    costo_compra?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ganacia_publico?: boolean
    ganacia_contratista?: boolean
    ganancias_stock?: boolean
    producto?: boolean | variantes$productoArgs<ExtArgs>
  }, ExtArgs["result"]["variantes"]>

  export type variantesSelectScalar = {
    id?: boolean
    producto_id?: boolean
    locacion_id?: boolean
    estante_id?: boolean
    foto?: boolean
    nombre?: boolean
    codigo?: boolean
    color?: boolean
    descripcion?: boolean
    cantidad?: boolean
    medidas?: boolean
    precio_publico?: boolean
    precio_contratista?: boolean
    costo_compra?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ganacia_publico?: boolean
    ganacia_contratista?: boolean
    ganancias_stock?: boolean
  }

  export type variantesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "producto_id" | "locacion_id" | "estante_id" | "foto" | "nombre" | "codigo" | "color" | "descripcion" | "cantidad" | "medidas" | "precio_publico" | "precio_contratista" | "costo_compra" | "createdAt" | "updatedAt" | "ganacia_publico" | "ganacia_contratista" | "ganancias_stock", ExtArgs["result"]["variantes"]>
  export type variantesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | variantes$productoArgs<ExtArgs>
    ventas?: boolean | variantes$ventasArgs<ExtArgs>
    auditorias?: boolean | variantes$auditoriasArgs<ExtArgs>
    _count?: boolean | VariantesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type variantesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | variantes$productoArgs<ExtArgs>
  }
  export type variantesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | variantes$productoArgs<ExtArgs>
  }

  export type $variantesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "variantes"
    objects: {
      producto: Prisma.$productosPayload<ExtArgs> | null
      ventas: Prisma.$ventasPayload<ExtArgs>[]
      auditorias: Prisma.$auditoriaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      producto_id: number
      locacion_id: number
      estante_id: number | null
      foto: string
      nombre: string
      codigo: string
      color: string
      descripcion: string
      cantidad: number
      medidas: string
      precio_publico: number
      precio_contratista: number
      costo_compra: number
      createdAt: Date
      updatedAt: Date
      ganacia_publico: number
      ganacia_contratista: number
      ganancias_stock: number
    }, ExtArgs["result"]["variantes"]>
    composites: {}
  }

  type variantesGetPayload<S extends boolean | null | undefined | variantesDefaultArgs> = $Result.GetResult<Prisma.$variantesPayload, S>

  type variantesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<variantesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VariantesCountAggregateInputType | true
    }

  export interface variantesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['variantes'], meta: { name: 'variantes' } }
    /**
     * Find zero or one Variantes that matches the filter.
     * @param {variantesFindUniqueArgs} args - Arguments to find a Variantes
     * @example
     * // Get one Variantes
     * const variantes = await prisma.variantes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends variantesFindUniqueArgs>(args: SelectSubset<T, variantesFindUniqueArgs<ExtArgs>>): Prisma__variantesClient<$Result.GetResult<Prisma.$variantesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Variantes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {variantesFindUniqueOrThrowArgs} args - Arguments to find a Variantes
     * @example
     * // Get one Variantes
     * const variantes = await prisma.variantes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends variantesFindUniqueOrThrowArgs>(args: SelectSubset<T, variantesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__variantesClient<$Result.GetResult<Prisma.$variantesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variantesFindFirstArgs} args - Arguments to find a Variantes
     * @example
     * // Get one Variantes
     * const variantes = await prisma.variantes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends variantesFindFirstArgs>(args?: SelectSubset<T, variantesFindFirstArgs<ExtArgs>>): Prisma__variantesClient<$Result.GetResult<Prisma.$variantesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variantes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variantesFindFirstOrThrowArgs} args - Arguments to find a Variantes
     * @example
     * // Get one Variantes
     * const variantes = await prisma.variantes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends variantesFindFirstOrThrowArgs>(args?: SelectSubset<T, variantesFindFirstOrThrowArgs<ExtArgs>>): Prisma__variantesClient<$Result.GetResult<Prisma.$variantesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Variantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variantesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Variantes
     * const variantes = await prisma.variantes.findMany()
     * 
     * // Get first 10 Variantes
     * const variantes = await prisma.variantes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const variantesWithIdOnly = await prisma.variantes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends variantesFindManyArgs>(args?: SelectSubset<T, variantesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$variantesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Variantes.
     * @param {variantesCreateArgs} args - Arguments to create a Variantes.
     * @example
     * // Create one Variantes
     * const Variantes = await prisma.variantes.create({
     *   data: {
     *     // ... data to create a Variantes
     *   }
     * })
     * 
     */
    create<T extends variantesCreateArgs>(args: SelectSubset<T, variantesCreateArgs<ExtArgs>>): Prisma__variantesClient<$Result.GetResult<Prisma.$variantesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Variantes.
     * @param {variantesCreateManyArgs} args - Arguments to create many Variantes.
     * @example
     * // Create many Variantes
     * const variantes = await prisma.variantes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends variantesCreateManyArgs>(args?: SelectSubset<T, variantesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Variantes and returns the data saved in the database.
     * @param {variantesCreateManyAndReturnArgs} args - Arguments to create many Variantes.
     * @example
     * // Create many Variantes
     * const variantes = await prisma.variantes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Variantes and only return the `id`
     * const variantesWithIdOnly = await prisma.variantes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends variantesCreateManyAndReturnArgs>(args?: SelectSubset<T, variantesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$variantesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Variantes.
     * @param {variantesDeleteArgs} args - Arguments to delete one Variantes.
     * @example
     * // Delete one Variantes
     * const Variantes = await prisma.variantes.delete({
     *   where: {
     *     // ... filter to delete one Variantes
     *   }
     * })
     * 
     */
    delete<T extends variantesDeleteArgs>(args: SelectSubset<T, variantesDeleteArgs<ExtArgs>>): Prisma__variantesClient<$Result.GetResult<Prisma.$variantesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Variantes.
     * @param {variantesUpdateArgs} args - Arguments to update one Variantes.
     * @example
     * // Update one Variantes
     * const variantes = await prisma.variantes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends variantesUpdateArgs>(args: SelectSubset<T, variantesUpdateArgs<ExtArgs>>): Prisma__variantesClient<$Result.GetResult<Prisma.$variantesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Variantes.
     * @param {variantesDeleteManyArgs} args - Arguments to filter Variantes to delete.
     * @example
     * // Delete a few Variantes
     * const { count } = await prisma.variantes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends variantesDeleteManyArgs>(args?: SelectSubset<T, variantesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variantesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Variantes
     * const variantes = await prisma.variantes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends variantesUpdateManyArgs>(args: SelectSubset<T, variantesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variantes and returns the data updated in the database.
     * @param {variantesUpdateManyAndReturnArgs} args - Arguments to update many Variantes.
     * @example
     * // Update many Variantes
     * const variantes = await prisma.variantes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Variantes and only return the `id`
     * const variantesWithIdOnly = await prisma.variantes.updateManyAndReturn({
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
    updateManyAndReturn<T extends variantesUpdateManyAndReturnArgs>(args: SelectSubset<T, variantesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$variantesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Variantes.
     * @param {variantesUpsertArgs} args - Arguments to update or create a Variantes.
     * @example
     * // Update or create a Variantes
     * const variantes = await prisma.variantes.upsert({
     *   create: {
     *     // ... data to create a Variantes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Variantes we want to update
     *   }
     * })
     */
    upsert<T extends variantesUpsertArgs>(args: SelectSubset<T, variantesUpsertArgs<ExtArgs>>): Prisma__variantesClient<$Result.GetResult<Prisma.$variantesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Variantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variantesCountArgs} args - Arguments to filter Variantes to count.
     * @example
     * // Count the number of Variantes
     * const count = await prisma.variantes.count({
     *   where: {
     *     // ... the filter for the Variantes we want to count
     *   }
     * })
    **/
    count<T extends variantesCountArgs>(
      args?: Subset<T, variantesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VariantesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Variantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VariantesAggregateArgs>(args: Subset<T, VariantesAggregateArgs>): Prisma.PrismaPromise<GetVariantesAggregateType<T>>

    /**
     * Group by Variantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variantesGroupByArgs} args - Group by arguments.
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
      T extends variantesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: variantesGroupByArgs['orderBy'] }
        : { orderBy?: variantesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, variantesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariantesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the variantes model
   */
  readonly fields: variantesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for variantes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__variantesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    producto<T extends variantes$productoArgs<ExtArgs> = {}>(args?: Subset<T, variantes$productoArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ventas<T extends variantes$ventasArgs<ExtArgs> = {}>(args?: Subset<T, variantes$ventasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditorias<T extends variantes$auditoriasArgs<ExtArgs> = {}>(args?: Subset<T, variantes$auditoriasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auditoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the variantes model
   */
  interface variantesFieldRefs {
    readonly id: FieldRef<"variantes", 'Int'>
    readonly producto_id: FieldRef<"variantes", 'Int'>
    readonly locacion_id: FieldRef<"variantes", 'Int'>
    readonly estante_id: FieldRef<"variantes", 'Int'>
    readonly foto: FieldRef<"variantes", 'String'>
    readonly nombre: FieldRef<"variantes", 'String'>
    readonly codigo: FieldRef<"variantes", 'String'>
    readonly color: FieldRef<"variantes", 'String'>
    readonly descripcion: FieldRef<"variantes", 'String'>
    readonly cantidad: FieldRef<"variantes", 'Int'>
    readonly medidas: FieldRef<"variantes", 'String'>
    readonly precio_publico: FieldRef<"variantes", 'Float'>
    readonly precio_contratista: FieldRef<"variantes", 'Float'>
    readonly costo_compra: FieldRef<"variantes", 'Float'>
    readonly createdAt: FieldRef<"variantes", 'DateTime'>
    readonly updatedAt: FieldRef<"variantes", 'DateTime'>
    readonly ganacia_publico: FieldRef<"variantes", 'Float'>
    readonly ganacia_contratista: FieldRef<"variantes", 'Float'>
    readonly ganancias_stock: FieldRef<"variantes", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * variantes findUnique
   */
  export type variantesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variantes
     */
    select?: variantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variantes
     */
    omit?: variantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantesInclude<ExtArgs> | null
    /**
     * Filter, which variantes to fetch.
     */
    where: variantesWhereUniqueInput
  }

  /**
   * variantes findUniqueOrThrow
   */
  export type variantesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variantes
     */
    select?: variantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variantes
     */
    omit?: variantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantesInclude<ExtArgs> | null
    /**
     * Filter, which variantes to fetch.
     */
    where: variantesWhereUniqueInput
  }

  /**
   * variantes findFirst
   */
  export type variantesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variantes
     */
    select?: variantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variantes
     */
    omit?: variantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantesInclude<ExtArgs> | null
    /**
     * Filter, which variantes to fetch.
     */
    where?: variantesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of variantes to fetch.
     */
    orderBy?: variantesOrderByWithRelationInput | variantesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for variantes.
     */
    cursor?: variantesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` variantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` variantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of variantes.
     */
    distinct?: VariantesScalarFieldEnum | VariantesScalarFieldEnum[]
  }

  /**
   * variantes findFirstOrThrow
   */
  export type variantesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variantes
     */
    select?: variantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variantes
     */
    omit?: variantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantesInclude<ExtArgs> | null
    /**
     * Filter, which variantes to fetch.
     */
    where?: variantesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of variantes to fetch.
     */
    orderBy?: variantesOrderByWithRelationInput | variantesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for variantes.
     */
    cursor?: variantesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` variantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` variantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of variantes.
     */
    distinct?: VariantesScalarFieldEnum | VariantesScalarFieldEnum[]
  }

  /**
   * variantes findMany
   */
  export type variantesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variantes
     */
    select?: variantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variantes
     */
    omit?: variantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantesInclude<ExtArgs> | null
    /**
     * Filter, which variantes to fetch.
     */
    where?: variantesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of variantes to fetch.
     */
    orderBy?: variantesOrderByWithRelationInput | variantesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing variantes.
     */
    cursor?: variantesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` variantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` variantes.
     */
    skip?: number
    distinct?: VariantesScalarFieldEnum | VariantesScalarFieldEnum[]
  }

  /**
   * variantes create
   */
  export type variantesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variantes
     */
    select?: variantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variantes
     */
    omit?: variantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantesInclude<ExtArgs> | null
    /**
     * The data needed to create a variantes.
     */
    data: XOR<variantesCreateInput, variantesUncheckedCreateInput>
  }

  /**
   * variantes createMany
   */
  export type variantesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many variantes.
     */
    data: variantesCreateManyInput | variantesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * variantes createManyAndReturn
   */
  export type variantesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variantes
     */
    select?: variantesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the variantes
     */
    omit?: variantesOmit<ExtArgs> | null
    /**
     * The data used to create many variantes.
     */
    data: variantesCreateManyInput | variantesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * variantes update
   */
  export type variantesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variantes
     */
    select?: variantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variantes
     */
    omit?: variantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantesInclude<ExtArgs> | null
    /**
     * The data needed to update a variantes.
     */
    data: XOR<variantesUpdateInput, variantesUncheckedUpdateInput>
    /**
     * Choose, which variantes to update.
     */
    where: variantesWhereUniqueInput
  }

  /**
   * variantes updateMany
   */
  export type variantesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update variantes.
     */
    data: XOR<variantesUpdateManyMutationInput, variantesUncheckedUpdateManyInput>
    /**
     * Filter which variantes to update
     */
    where?: variantesWhereInput
    /**
     * Limit how many variantes to update.
     */
    limit?: number
  }

  /**
   * variantes updateManyAndReturn
   */
  export type variantesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variantes
     */
    select?: variantesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the variantes
     */
    omit?: variantesOmit<ExtArgs> | null
    /**
     * The data used to update variantes.
     */
    data: XOR<variantesUpdateManyMutationInput, variantesUncheckedUpdateManyInput>
    /**
     * Filter which variantes to update
     */
    where?: variantesWhereInput
    /**
     * Limit how many variantes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * variantes upsert
   */
  export type variantesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variantes
     */
    select?: variantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variantes
     */
    omit?: variantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantesInclude<ExtArgs> | null
    /**
     * The filter to search for the variantes to update in case it exists.
     */
    where: variantesWhereUniqueInput
    /**
     * In case the variantes found by the `where` argument doesn't exist, create a new variantes with this data.
     */
    create: XOR<variantesCreateInput, variantesUncheckedCreateInput>
    /**
     * In case the variantes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<variantesUpdateInput, variantesUncheckedUpdateInput>
  }

  /**
   * variantes delete
   */
  export type variantesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variantes
     */
    select?: variantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variantes
     */
    omit?: variantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantesInclude<ExtArgs> | null
    /**
     * Filter which variantes to delete.
     */
    where: variantesWhereUniqueInput
  }

  /**
   * variantes deleteMany
   */
  export type variantesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which variantes to delete
     */
    where?: variantesWhereInput
    /**
     * Limit how many variantes to delete.
     */
    limit?: number
  }

  /**
   * variantes.producto
   */
  export type variantes$productoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    where?: productosWhereInput
  }

  /**
   * variantes.ventas
   */
  export type variantes$ventasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    where?: ventasWhereInput
    orderBy?: ventasOrderByWithRelationInput | ventasOrderByWithRelationInput[]
    cursor?: ventasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VentasScalarFieldEnum | VentasScalarFieldEnum[]
  }

  /**
   * variantes.auditorias
   */
  export type variantes$auditoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditoria
     */
    select?: auditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditoria
     */
    omit?: auditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditoriaInclude<ExtArgs> | null
    where?: auditoriaWhereInput
    orderBy?: auditoriaOrderByWithRelationInput | auditoriaOrderByWithRelationInput[]
    cursor?: auditoriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditoriaScalarFieldEnum | AuditoriaScalarFieldEnum[]
  }

  /**
   * variantes without action
   */
  export type variantesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variantes
     */
    select?: variantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variantes
     */
    omit?: variantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantesInclude<ExtArgs> | null
  }


  /**
   * Model ventas
   */

  export type AggregateVentas = {
    _count: VentasCountAggregateOutputType | null
    _avg: VentasAvgAggregateOutputType | null
    _sum: VentasSumAggregateOutputType | null
    _min: VentasMinAggregateOutputType | null
    _max: VentasMaxAggregateOutputType | null
  }

  export type VentasAvgAggregateOutputType = {
    id: number | null
    variante_id: number | null
    cantidad: number | null
    total_venta: number | null
    costos_extras: number | null
    precio_publico: number | null
    precio_contratista: number | null
    costo_compra: number | null
  }

  export type VentasSumAggregateOutputType = {
    id: number | null
    variante_id: number | null
    cantidad: number | null
    total_venta: number | null
    costos_extras: number | null
    precio_publico: number | null
    precio_contratista: number | null
    costo_compra: number | null
  }

  export type VentasMinAggregateOutputType = {
    id: number | null
    variante_id: number | null
    cantidad: number | null
    total_venta: number | null
    fecha_venta: Date | null
    nombre_cliente: string | null
    contacto_cliente: string | null
    costos_extras: number | null
    motivo_costo_extra: string | null
    precio_publico: number | null
    precio_contratista: number | null
    costo_compra: number | null
  }

  export type VentasMaxAggregateOutputType = {
    id: number | null
    variante_id: number | null
    cantidad: number | null
    total_venta: number | null
    fecha_venta: Date | null
    nombre_cliente: string | null
    contacto_cliente: string | null
    costos_extras: number | null
    motivo_costo_extra: string | null
    precio_publico: number | null
    precio_contratista: number | null
    costo_compra: number | null
  }

  export type VentasCountAggregateOutputType = {
    id: number
    variante_id: number
    cantidad: number
    total_venta: number
    fecha_venta: number
    nombre_cliente: number
    contacto_cliente: number
    costos_extras: number
    motivo_costo_extra: number
    precio_publico: number
    precio_contratista: number
    costo_compra: number
    _all: number
  }


  export type VentasAvgAggregateInputType = {
    id?: true
    variante_id?: true
    cantidad?: true
    total_venta?: true
    costos_extras?: true
    precio_publico?: true
    precio_contratista?: true
    costo_compra?: true
  }

  export type VentasSumAggregateInputType = {
    id?: true
    variante_id?: true
    cantidad?: true
    total_venta?: true
    costos_extras?: true
    precio_publico?: true
    precio_contratista?: true
    costo_compra?: true
  }

  export type VentasMinAggregateInputType = {
    id?: true
    variante_id?: true
    cantidad?: true
    total_venta?: true
    fecha_venta?: true
    nombre_cliente?: true
    contacto_cliente?: true
    costos_extras?: true
    motivo_costo_extra?: true
    precio_publico?: true
    precio_contratista?: true
    costo_compra?: true
  }

  export type VentasMaxAggregateInputType = {
    id?: true
    variante_id?: true
    cantidad?: true
    total_venta?: true
    fecha_venta?: true
    nombre_cliente?: true
    contacto_cliente?: true
    costos_extras?: true
    motivo_costo_extra?: true
    precio_publico?: true
    precio_contratista?: true
    costo_compra?: true
  }

  export type VentasCountAggregateInputType = {
    id?: true
    variante_id?: true
    cantidad?: true
    total_venta?: true
    fecha_venta?: true
    nombre_cliente?: true
    contacto_cliente?: true
    costos_extras?: true
    motivo_costo_extra?: true
    precio_publico?: true
    precio_contratista?: true
    costo_compra?: true
    _all?: true
  }

  export type VentasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ventas to aggregate.
     */
    where?: ventasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ventas to fetch.
     */
    orderBy?: ventasOrderByWithRelationInput | ventasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ventasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ventas
    **/
    _count?: true | VentasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VentasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VentasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VentasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VentasMaxAggregateInputType
  }

  export type GetVentasAggregateType<T extends VentasAggregateArgs> = {
        [P in keyof T & keyof AggregateVentas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVentas[P]>
      : GetScalarType<T[P], AggregateVentas[P]>
  }




  export type ventasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ventasWhereInput
    orderBy?: ventasOrderByWithAggregationInput | ventasOrderByWithAggregationInput[]
    by: VentasScalarFieldEnum[] | VentasScalarFieldEnum
    having?: ventasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VentasCountAggregateInputType | true
    _avg?: VentasAvgAggregateInputType
    _sum?: VentasSumAggregateInputType
    _min?: VentasMinAggregateInputType
    _max?: VentasMaxAggregateInputType
  }

  export type VentasGroupByOutputType = {
    id: number
    variante_id: number
    cantidad: number
    total_venta: number
    fecha_venta: Date
    nombre_cliente: string
    contacto_cliente: string
    costos_extras: number
    motivo_costo_extra: string
    precio_publico: number
    precio_contratista: number
    costo_compra: number
    _count: VentasCountAggregateOutputType | null
    _avg: VentasAvgAggregateOutputType | null
    _sum: VentasSumAggregateOutputType | null
    _min: VentasMinAggregateOutputType | null
    _max: VentasMaxAggregateOutputType | null
  }

  type GetVentasGroupByPayload<T extends ventasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VentasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VentasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VentasGroupByOutputType[P]>
            : GetScalarType<T[P], VentasGroupByOutputType[P]>
        }
      >
    >


  export type ventasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    variante_id?: boolean
    cantidad?: boolean
    total_venta?: boolean
    fecha_venta?: boolean
    nombre_cliente?: boolean
    contacto_cliente?: boolean
    costos_extras?: boolean
    motivo_costo_extra?: boolean
    precio_publico?: boolean
    precio_contratista?: boolean
    costo_compra?: boolean
    variante?: boolean | ventas$varianteArgs<ExtArgs>
    costosExtras?: boolean | ventas$costosExtrasArgs<ExtArgs>
    auditorias?: boolean | ventas$auditoriasArgs<ExtArgs>
    _count?: boolean | VentasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ventas"]>

  export type ventasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    variante_id?: boolean
    cantidad?: boolean
    total_venta?: boolean
    fecha_venta?: boolean
    nombre_cliente?: boolean
    contacto_cliente?: boolean
    costos_extras?: boolean
    motivo_costo_extra?: boolean
    precio_publico?: boolean
    precio_contratista?: boolean
    costo_compra?: boolean
    variante?: boolean | ventas$varianteArgs<ExtArgs>
  }, ExtArgs["result"]["ventas"]>

  export type ventasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    variante_id?: boolean
    cantidad?: boolean
    total_venta?: boolean
    fecha_venta?: boolean
    nombre_cliente?: boolean
    contacto_cliente?: boolean
    costos_extras?: boolean
    motivo_costo_extra?: boolean
    precio_publico?: boolean
    precio_contratista?: boolean
    costo_compra?: boolean
    variante?: boolean | ventas$varianteArgs<ExtArgs>
  }, ExtArgs["result"]["ventas"]>

  export type ventasSelectScalar = {
    id?: boolean
    variante_id?: boolean
    cantidad?: boolean
    total_venta?: boolean
    fecha_venta?: boolean
    nombre_cliente?: boolean
    contacto_cliente?: boolean
    costos_extras?: boolean
    motivo_costo_extra?: boolean
    precio_publico?: boolean
    precio_contratista?: boolean
    costo_compra?: boolean
  }

  export type ventasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "variante_id" | "cantidad" | "total_venta" | "fecha_venta" | "nombre_cliente" | "contacto_cliente" | "costos_extras" | "motivo_costo_extra" | "precio_publico" | "precio_contratista" | "costo_compra", ExtArgs["result"]["ventas"]>
  export type ventasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variante?: boolean | ventas$varianteArgs<ExtArgs>
    costosExtras?: boolean | ventas$costosExtrasArgs<ExtArgs>
    auditorias?: boolean | ventas$auditoriasArgs<ExtArgs>
    _count?: boolean | VentasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ventasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variante?: boolean | ventas$varianteArgs<ExtArgs>
  }
  export type ventasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variante?: boolean | ventas$varianteArgs<ExtArgs>
  }

  export type $ventasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ventas"
    objects: {
      variante: Prisma.$variantesPayload<ExtArgs> | null
      costosExtras: Prisma.$costosExtrasPayload<ExtArgs>[]
      auditorias: Prisma.$auditoriaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      variante_id: number
      cantidad: number
      total_venta: number
      fecha_venta: Date
      nombre_cliente: string
      contacto_cliente: string
      costos_extras: number
      motivo_costo_extra: string
      precio_publico: number
      precio_contratista: number
      costo_compra: number
    }, ExtArgs["result"]["ventas"]>
    composites: {}
  }

  type ventasGetPayload<S extends boolean | null | undefined | ventasDefaultArgs> = $Result.GetResult<Prisma.$ventasPayload, S>

  type ventasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ventasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VentasCountAggregateInputType | true
    }

  export interface ventasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ventas'], meta: { name: 'ventas' } }
    /**
     * Find zero or one Ventas that matches the filter.
     * @param {ventasFindUniqueArgs} args - Arguments to find a Ventas
     * @example
     * // Get one Ventas
     * const ventas = await prisma.ventas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ventasFindUniqueArgs>(args: SelectSubset<T, ventasFindUniqueArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ventas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ventasFindUniqueOrThrowArgs} args - Arguments to find a Ventas
     * @example
     * // Get one Ventas
     * const ventas = await prisma.ventas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ventasFindUniqueOrThrowArgs>(args: SelectSubset<T, ventasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ventas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ventasFindFirstArgs} args - Arguments to find a Ventas
     * @example
     * // Get one Ventas
     * const ventas = await prisma.ventas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ventasFindFirstArgs>(args?: SelectSubset<T, ventasFindFirstArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ventas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ventasFindFirstOrThrowArgs} args - Arguments to find a Ventas
     * @example
     * // Get one Ventas
     * const ventas = await prisma.ventas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ventasFindFirstOrThrowArgs>(args?: SelectSubset<T, ventasFindFirstOrThrowArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ventas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ventasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ventas
     * const ventas = await prisma.ventas.findMany()
     * 
     * // Get first 10 Ventas
     * const ventas = await prisma.ventas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ventasWithIdOnly = await prisma.ventas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ventasFindManyArgs>(args?: SelectSubset<T, ventasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ventas.
     * @param {ventasCreateArgs} args - Arguments to create a Ventas.
     * @example
     * // Create one Ventas
     * const Ventas = await prisma.ventas.create({
     *   data: {
     *     // ... data to create a Ventas
     *   }
     * })
     * 
     */
    create<T extends ventasCreateArgs>(args: SelectSubset<T, ventasCreateArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ventas.
     * @param {ventasCreateManyArgs} args - Arguments to create many Ventas.
     * @example
     * // Create many Ventas
     * const ventas = await prisma.ventas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ventasCreateManyArgs>(args?: SelectSubset<T, ventasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ventas and returns the data saved in the database.
     * @param {ventasCreateManyAndReturnArgs} args - Arguments to create many Ventas.
     * @example
     * // Create many Ventas
     * const ventas = await prisma.ventas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ventas and only return the `id`
     * const ventasWithIdOnly = await prisma.ventas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ventasCreateManyAndReturnArgs>(args?: SelectSubset<T, ventasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ventas.
     * @param {ventasDeleteArgs} args - Arguments to delete one Ventas.
     * @example
     * // Delete one Ventas
     * const Ventas = await prisma.ventas.delete({
     *   where: {
     *     // ... filter to delete one Ventas
     *   }
     * })
     * 
     */
    delete<T extends ventasDeleteArgs>(args: SelectSubset<T, ventasDeleteArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ventas.
     * @param {ventasUpdateArgs} args - Arguments to update one Ventas.
     * @example
     * // Update one Ventas
     * const ventas = await prisma.ventas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ventasUpdateArgs>(args: SelectSubset<T, ventasUpdateArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ventas.
     * @param {ventasDeleteManyArgs} args - Arguments to filter Ventas to delete.
     * @example
     * // Delete a few Ventas
     * const { count } = await prisma.ventas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ventasDeleteManyArgs>(args?: SelectSubset<T, ventasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ventasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ventas
     * const ventas = await prisma.ventas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ventasUpdateManyArgs>(args: SelectSubset<T, ventasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ventas and returns the data updated in the database.
     * @param {ventasUpdateManyAndReturnArgs} args - Arguments to update many Ventas.
     * @example
     * // Update many Ventas
     * const ventas = await prisma.ventas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ventas and only return the `id`
     * const ventasWithIdOnly = await prisma.ventas.updateManyAndReturn({
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
    updateManyAndReturn<T extends ventasUpdateManyAndReturnArgs>(args: SelectSubset<T, ventasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ventas.
     * @param {ventasUpsertArgs} args - Arguments to update or create a Ventas.
     * @example
     * // Update or create a Ventas
     * const ventas = await prisma.ventas.upsert({
     *   create: {
     *     // ... data to create a Ventas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ventas we want to update
     *   }
     * })
     */
    upsert<T extends ventasUpsertArgs>(args: SelectSubset<T, ventasUpsertArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ventasCountArgs} args - Arguments to filter Ventas to count.
     * @example
     * // Count the number of Ventas
     * const count = await prisma.ventas.count({
     *   where: {
     *     // ... the filter for the Ventas we want to count
     *   }
     * })
    **/
    count<T extends ventasCountArgs>(
      args?: Subset<T, ventasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VentasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VentasAggregateArgs>(args: Subset<T, VentasAggregateArgs>): Prisma.PrismaPromise<GetVentasAggregateType<T>>

    /**
     * Group by Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ventasGroupByArgs} args - Group by arguments.
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
      T extends ventasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ventasGroupByArgs['orderBy'] }
        : { orderBy?: ventasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ventasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVentasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ventas model
   */
  readonly fields: ventasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ventas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ventasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    variante<T extends ventas$varianteArgs<ExtArgs> = {}>(args?: Subset<T, ventas$varianteArgs<ExtArgs>>): Prisma__variantesClient<$Result.GetResult<Prisma.$variantesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    costosExtras<T extends ventas$costosExtrasArgs<ExtArgs> = {}>(args?: Subset<T, ventas$costosExtrasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$costosExtrasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditorias<T extends ventas$auditoriasArgs<ExtArgs> = {}>(args?: Subset<T, ventas$auditoriasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auditoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ventas model
   */
  interface ventasFieldRefs {
    readonly id: FieldRef<"ventas", 'Int'>
    readonly variante_id: FieldRef<"ventas", 'Int'>
    readonly cantidad: FieldRef<"ventas", 'Int'>
    readonly total_venta: FieldRef<"ventas", 'Float'>
    readonly fecha_venta: FieldRef<"ventas", 'DateTime'>
    readonly nombre_cliente: FieldRef<"ventas", 'String'>
    readonly contacto_cliente: FieldRef<"ventas", 'String'>
    readonly costos_extras: FieldRef<"ventas", 'Float'>
    readonly motivo_costo_extra: FieldRef<"ventas", 'String'>
    readonly precio_publico: FieldRef<"ventas", 'Float'>
    readonly precio_contratista: FieldRef<"ventas", 'Float'>
    readonly costo_compra: FieldRef<"ventas", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ventas findUnique
   */
  export type ventasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    /**
     * Filter, which ventas to fetch.
     */
    where: ventasWhereUniqueInput
  }

  /**
   * ventas findUniqueOrThrow
   */
  export type ventasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    /**
     * Filter, which ventas to fetch.
     */
    where: ventasWhereUniqueInput
  }

  /**
   * ventas findFirst
   */
  export type ventasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    /**
     * Filter, which ventas to fetch.
     */
    where?: ventasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ventas to fetch.
     */
    orderBy?: ventasOrderByWithRelationInput | ventasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ventas.
     */
    cursor?: ventasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ventas.
     */
    distinct?: VentasScalarFieldEnum | VentasScalarFieldEnum[]
  }

  /**
   * ventas findFirstOrThrow
   */
  export type ventasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    /**
     * Filter, which ventas to fetch.
     */
    where?: ventasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ventas to fetch.
     */
    orderBy?: ventasOrderByWithRelationInput | ventasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ventas.
     */
    cursor?: ventasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ventas.
     */
    distinct?: VentasScalarFieldEnum | VentasScalarFieldEnum[]
  }

  /**
   * ventas findMany
   */
  export type ventasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    /**
     * Filter, which ventas to fetch.
     */
    where?: ventasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ventas to fetch.
     */
    orderBy?: ventasOrderByWithRelationInput | ventasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ventas.
     */
    cursor?: ventasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ventas.
     */
    skip?: number
    distinct?: VentasScalarFieldEnum | VentasScalarFieldEnum[]
  }

  /**
   * ventas create
   */
  export type ventasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    /**
     * The data needed to create a ventas.
     */
    data: XOR<ventasCreateInput, ventasUncheckedCreateInput>
  }

  /**
   * ventas createMany
   */
  export type ventasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ventas.
     */
    data: ventasCreateManyInput | ventasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ventas createManyAndReturn
   */
  export type ventasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * The data used to create many ventas.
     */
    data: ventasCreateManyInput | ventasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ventas update
   */
  export type ventasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    /**
     * The data needed to update a ventas.
     */
    data: XOR<ventasUpdateInput, ventasUncheckedUpdateInput>
    /**
     * Choose, which ventas to update.
     */
    where: ventasWhereUniqueInput
  }

  /**
   * ventas updateMany
   */
  export type ventasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ventas.
     */
    data: XOR<ventasUpdateManyMutationInput, ventasUncheckedUpdateManyInput>
    /**
     * Filter which ventas to update
     */
    where?: ventasWhereInput
    /**
     * Limit how many ventas to update.
     */
    limit?: number
  }

  /**
   * ventas updateManyAndReturn
   */
  export type ventasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * The data used to update ventas.
     */
    data: XOR<ventasUpdateManyMutationInput, ventasUncheckedUpdateManyInput>
    /**
     * Filter which ventas to update
     */
    where?: ventasWhereInput
    /**
     * Limit how many ventas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ventas upsert
   */
  export type ventasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    /**
     * The filter to search for the ventas to update in case it exists.
     */
    where: ventasWhereUniqueInput
    /**
     * In case the ventas found by the `where` argument doesn't exist, create a new ventas with this data.
     */
    create: XOR<ventasCreateInput, ventasUncheckedCreateInput>
    /**
     * In case the ventas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ventasUpdateInput, ventasUncheckedUpdateInput>
  }

  /**
   * ventas delete
   */
  export type ventasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    /**
     * Filter which ventas to delete.
     */
    where: ventasWhereUniqueInput
  }

  /**
   * ventas deleteMany
   */
  export type ventasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ventas to delete
     */
    where?: ventasWhereInput
    /**
     * Limit how many ventas to delete.
     */
    limit?: number
  }

  /**
   * ventas.variante
   */
  export type ventas$varianteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variantes
     */
    select?: variantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variantes
     */
    omit?: variantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantesInclude<ExtArgs> | null
    where?: variantesWhereInput
  }

  /**
   * ventas.costosExtras
   */
  export type ventas$costosExtrasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the costosExtras
     */
    select?: costosExtrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the costosExtras
     */
    omit?: costosExtrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: costosExtrasInclude<ExtArgs> | null
    where?: costosExtrasWhereInput
    orderBy?: costosExtrasOrderByWithRelationInput | costosExtrasOrderByWithRelationInput[]
    cursor?: costosExtrasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CostosExtrasScalarFieldEnum | CostosExtrasScalarFieldEnum[]
  }

  /**
   * ventas.auditorias
   */
  export type ventas$auditoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditoria
     */
    select?: auditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditoria
     */
    omit?: auditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditoriaInclude<ExtArgs> | null
    where?: auditoriaWhereInput
    orderBy?: auditoriaOrderByWithRelationInput | auditoriaOrderByWithRelationInput[]
    cursor?: auditoriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditoriaScalarFieldEnum | AuditoriaScalarFieldEnum[]
  }

  /**
   * ventas without action
   */
  export type ventasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
  }


  /**
   * Model costosExtras
   */

  export type AggregateCostosExtras = {
    _count: CostosExtrasCountAggregateOutputType | null
    _avg: CostosExtrasAvgAggregateOutputType | null
    _sum: CostosExtrasSumAggregateOutputType | null
    _min: CostosExtrasMinAggregateOutputType | null
    _max: CostosExtrasMaxAggregateOutputType | null
  }

  export type CostosExtrasAvgAggregateOutputType = {
    id: number | null
    venta_id: number | null
    costo: number | null
  }

  export type CostosExtrasSumAggregateOutputType = {
    id: number | null
    venta_id: number | null
    costo: number | null
  }

  export type CostosExtrasMinAggregateOutputType = {
    id: number | null
    venta_id: number | null
    motivo: string | null
    costo: number | null
    createdAt: Date | null
  }

  export type CostosExtrasMaxAggregateOutputType = {
    id: number | null
    venta_id: number | null
    motivo: string | null
    costo: number | null
    createdAt: Date | null
  }

  export type CostosExtrasCountAggregateOutputType = {
    id: number
    venta_id: number
    motivo: number
    costo: number
    createdAt: number
    _all: number
  }


  export type CostosExtrasAvgAggregateInputType = {
    id?: true
    venta_id?: true
    costo?: true
  }

  export type CostosExtrasSumAggregateInputType = {
    id?: true
    venta_id?: true
    costo?: true
  }

  export type CostosExtrasMinAggregateInputType = {
    id?: true
    venta_id?: true
    motivo?: true
    costo?: true
    createdAt?: true
  }

  export type CostosExtrasMaxAggregateInputType = {
    id?: true
    venta_id?: true
    motivo?: true
    costo?: true
    createdAt?: true
  }

  export type CostosExtrasCountAggregateInputType = {
    id?: true
    venta_id?: true
    motivo?: true
    costo?: true
    createdAt?: true
    _all?: true
  }

  export type CostosExtrasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which costosExtras to aggregate.
     */
    where?: costosExtrasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of costosExtras to fetch.
     */
    orderBy?: costosExtrasOrderByWithRelationInput | costosExtrasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: costosExtrasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` costosExtras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` costosExtras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned costosExtras
    **/
    _count?: true | CostosExtrasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CostosExtrasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CostosExtrasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CostosExtrasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CostosExtrasMaxAggregateInputType
  }

  export type GetCostosExtrasAggregateType<T extends CostosExtrasAggregateArgs> = {
        [P in keyof T & keyof AggregateCostosExtras]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCostosExtras[P]>
      : GetScalarType<T[P], AggregateCostosExtras[P]>
  }




  export type costosExtrasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: costosExtrasWhereInput
    orderBy?: costosExtrasOrderByWithAggregationInput | costosExtrasOrderByWithAggregationInput[]
    by: CostosExtrasScalarFieldEnum[] | CostosExtrasScalarFieldEnum
    having?: costosExtrasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CostosExtrasCountAggregateInputType | true
    _avg?: CostosExtrasAvgAggregateInputType
    _sum?: CostosExtrasSumAggregateInputType
    _min?: CostosExtrasMinAggregateInputType
    _max?: CostosExtrasMaxAggregateInputType
  }

  export type CostosExtrasGroupByOutputType = {
    id: number
    venta_id: number
    motivo: string
    costo: number
    createdAt: Date
    _count: CostosExtrasCountAggregateOutputType | null
    _avg: CostosExtrasAvgAggregateOutputType | null
    _sum: CostosExtrasSumAggregateOutputType | null
    _min: CostosExtrasMinAggregateOutputType | null
    _max: CostosExtrasMaxAggregateOutputType | null
  }

  type GetCostosExtrasGroupByPayload<T extends costosExtrasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CostosExtrasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CostosExtrasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CostosExtrasGroupByOutputType[P]>
            : GetScalarType<T[P], CostosExtrasGroupByOutputType[P]>
        }
      >
    >


  export type costosExtrasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venta_id?: boolean
    motivo?: boolean
    costo?: boolean
    createdAt?: boolean
    venta?: boolean | ventasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["costosExtras"]>

  export type costosExtrasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venta_id?: boolean
    motivo?: boolean
    costo?: boolean
    createdAt?: boolean
    venta?: boolean | ventasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["costosExtras"]>

  export type costosExtrasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venta_id?: boolean
    motivo?: boolean
    costo?: boolean
    createdAt?: boolean
    venta?: boolean | ventasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["costosExtras"]>

  export type costosExtrasSelectScalar = {
    id?: boolean
    venta_id?: boolean
    motivo?: boolean
    costo?: boolean
    createdAt?: boolean
  }

  export type costosExtrasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "venta_id" | "motivo" | "costo" | "createdAt", ExtArgs["result"]["costosExtras"]>
  export type costosExtrasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venta?: boolean | ventasDefaultArgs<ExtArgs>
  }
  export type costosExtrasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venta?: boolean | ventasDefaultArgs<ExtArgs>
  }
  export type costosExtrasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venta?: boolean | ventasDefaultArgs<ExtArgs>
  }

  export type $costosExtrasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "costosExtras"
    objects: {
      venta: Prisma.$ventasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      venta_id: number
      motivo: string
      costo: number
      createdAt: Date
    }, ExtArgs["result"]["costosExtras"]>
    composites: {}
  }

  type costosExtrasGetPayload<S extends boolean | null | undefined | costosExtrasDefaultArgs> = $Result.GetResult<Prisma.$costosExtrasPayload, S>

  type costosExtrasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<costosExtrasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CostosExtrasCountAggregateInputType | true
    }

  export interface costosExtrasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['costosExtras'], meta: { name: 'costosExtras' } }
    /**
     * Find zero or one CostosExtras that matches the filter.
     * @param {costosExtrasFindUniqueArgs} args - Arguments to find a CostosExtras
     * @example
     * // Get one CostosExtras
     * const costosExtras = await prisma.costosExtras.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends costosExtrasFindUniqueArgs>(args: SelectSubset<T, costosExtrasFindUniqueArgs<ExtArgs>>): Prisma__costosExtrasClient<$Result.GetResult<Prisma.$costosExtrasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CostosExtras that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {costosExtrasFindUniqueOrThrowArgs} args - Arguments to find a CostosExtras
     * @example
     * // Get one CostosExtras
     * const costosExtras = await prisma.costosExtras.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends costosExtrasFindUniqueOrThrowArgs>(args: SelectSubset<T, costosExtrasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__costosExtrasClient<$Result.GetResult<Prisma.$costosExtrasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CostosExtras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {costosExtrasFindFirstArgs} args - Arguments to find a CostosExtras
     * @example
     * // Get one CostosExtras
     * const costosExtras = await prisma.costosExtras.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends costosExtrasFindFirstArgs>(args?: SelectSubset<T, costosExtrasFindFirstArgs<ExtArgs>>): Prisma__costosExtrasClient<$Result.GetResult<Prisma.$costosExtrasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CostosExtras that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {costosExtrasFindFirstOrThrowArgs} args - Arguments to find a CostosExtras
     * @example
     * // Get one CostosExtras
     * const costosExtras = await prisma.costosExtras.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends costosExtrasFindFirstOrThrowArgs>(args?: SelectSubset<T, costosExtrasFindFirstOrThrowArgs<ExtArgs>>): Prisma__costosExtrasClient<$Result.GetResult<Prisma.$costosExtrasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CostosExtras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {costosExtrasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CostosExtras
     * const costosExtras = await prisma.costosExtras.findMany()
     * 
     * // Get first 10 CostosExtras
     * const costosExtras = await prisma.costosExtras.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const costosExtrasWithIdOnly = await prisma.costosExtras.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends costosExtrasFindManyArgs>(args?: SelectSubset<T, costosExtrasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$costosExtrasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CostosExtras.
     * @param {costosExtrasCreateArgs} args - Arguments to create a CostosExtras.
     * @example
     * // Create one CostosExtras
     * const CostosExtras = await prisma.costosExtras.create({
     *   data: {
     *     // ... data to create a CostosExtras
     *   }
     * })
     * 
     */
    create<T extends costosExtrasCreateArgs>(args: SelectSubset<T, costosExtrasCreateArgs<ExtArgs>>): Prisma__costosExtrasClient<$Result.GetResult<Prisma.$costosExtrasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CostosExtras.
     * @param {costosExtrasCreateManyArgs} args - Arguments to create many CostosExtras.
     * @example
     * // Create many CostosExtras
     * const costosExtras = await prisma.costosExtras.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends costosExtrasCreateManyArgs>(args?: SelectSubset<T, costosExtrasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CostosExtras and returns the data saved in the database.
     * @param {costosExtrasCreateManyAndReturnArgs} args - Arguments to create many CostosExtras.
     * @example
     * // Create many CostosExtras
     * const costosExtras = await prisma.costosExtras.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CostosExtras and only return the `id`
     * const costosExtrasWithIdOnly = await prisma.costosExtras.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends costosExtrasCreateManyAndReturnArgs>(args?: SelectSubset<T, costosExtrasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$costosExtrasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CostosExtras.
     * @param {costosExtrasDeleteArgs} args - Arguments to delete one CostosExtras.
     * @example
     * // Delete one CostosExtras
     * const CostosExtras = await prisma.costosExtras.delete({
     *   where: {
     *     // ... filter to delete one CostosExtras
     *   }
     * })
     * 
     */
    delete<T extends costosExtrasDeleteArgs>(args: SelectSubset<T, costosExtrasDeleteArgs<ExtArgs>>): Prisma__costosExtrasClient<$Result.GetResult<Prisma.$costosExtrasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CostosExtras.
     * @param {costosExtrasUpdateArgs} args - Arguments to update one CostosExtras.
     * @example
     * // Update one CostosExtras
     * const costosExtras = await prisma.costosExtras.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends costosExtrasUpdateArgs>(args: SelectSubset<T, costosExtrasUpdateArgs<ExtArgs>>): Prisma__costosExtrasClient<$Result.GetResult<Prisma.$costosExtrasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CostosExtras.
     * @param {costosExtrasDeleteManyArgs} args - Arguments to filter CostosExtras to delete.
     * @example
     * // Delete a few CostosExtras
     * const { count } = await prisma.costosExtras.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends costosExtrasDeleteManyArgs>(args?: SelectSubset<T, costosExtrasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CostosExtras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {costosExtrasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CostosExtras
     * const costosExtras = await prisma.costosExtras.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends costosExtrasUpdateManyArgs>(args: SelectSubset<T, costosExtrasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CostosExtras and returns the data updated in the database.
     * @param {costosExtrasUpdateManyAndReturnArgs} args - Arguments to update many CostosExtras.
     * @example
     * // Update many CostosExtras
     * const costosExtras = await prisma.costosExtras.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CostosExtras and only return the `id`
     * const costosExtrasWithIdOnly = await prisma.costosExtras.updateManyAndReturn({
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
    updateManyAndReturn<T extends costosExtrasUpdateManyAndReturnArgs>(args: SelectSubset<T, costosExtrasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$costosExtrasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CostosExtras.
     * @param {costosExtrasUpsertArgs} args - Arguments to update or create a CostosExtras.
     * @example
     * // Update or create a CostosExtras
     * const costosExtras = await prisma.costosExtras.upsert({
     *   create: {
     *     // ... data to create a CostosExtras
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CostosExtras we want to update
     *   }
     * })
     */
    upsert<T extends costosExtrasUpsertArgs>(args: SelectSubset<T, costosExtrasUpsertArgs<ExtArgs>>): Prisma__costosExtrasClient<$Result.GetResult<Prisma.$costosExtrasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CostosExtras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {costosExtrasCountArgs} args - Arguments to filter CostosExtras to count.
     * @example
     * // Count the number of CostosExtras
     * const count = await prisma.costosExtras.count({
     *   where: {
     *     // ... the filter for the CostosExtras we want to count
     *   }
     * })
    **/
    count<T extends costosExtrasCountArgs>(
      args?: Subset<T, costosExtrasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CostosExtrasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CostosExtras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostosExtrasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CostosExtrasAggregateArgs>(args: Subset<T, CostosExtrasAggregateArgs>): Prisma.PrismaPromise<GetCostosExtrasAggregateType<T>>

    /**
     * Group by CostosExtras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {costosExtrasGroupByArgs} args - Group by arguments.
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
      T extends costosExtrasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: costosExtrasGroupByArgs['orderBy'] }
        : { orderBy?: costosExtrasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, costosExtrasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCostosExtrasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the costosExtras model
   */
  readonly fields: costosExtrasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for costosExtras.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__costosExtrasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venta<T extends ventasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ventasDefaultArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the costosExtras model
   */
  interface costosExtrasFieldRefs {
    readonly id: FieldRef<"costosExtras", 'Int'>
    readonly venta_id: FieldRef<"costosExtras", 'Int'>
    readonly motivo: FieldRef<"costosExtras", 'String'>
    readonly costo: FieldRef<"costosExtras", 'Float'>
    readonly createdAt: FieldRef<"costosExtras", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * costosExtras findUnique
   */
  export type costosExtrasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the costosExtras
     */
    select?: costosExtrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the costosExtras
     */
    omit?: costosExtrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: costosExtrasInclude<ExtArgs> | null
    /**
     * Filter, which costosExtras to fetch.
     */
    where: costosExtrasWhereUniqueInput
  }

  /**
   * costosExtras findUniqueOrThrow
   */
  export type costosExtrasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the costosExtras
     */
    select?: costosExtrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the costosExtras
     */
    omit?: costosExtrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: costosExtrasInclude<ExtArgs> | null
    /**
     * Filter, which costosExtras to fetch.
     */
    where: costosExtrasWhereUniqueInput
  }

  /**
   * costosExtras findFirst
   */
  export type costosExtrasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the costosExtras
     */
    select?: costosExtrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the costosExtras
     */
    omit?: costosExtrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: costosExtrasInclude<ExtArgs> | null
    /**
     * Filter, which costosExtras to fetch.
     */
    where?: costosExtrasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of costosExtras to fetch.
     */
    orderBy?: costosExtrasOrderByWithRelationInput | costosExtrasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for costosExtras.
     */
    cursor?: costosExtrasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` costosExtras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` costosExtras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of costosExtras.
     */
    distinct?: CostosExtrasScalarFieldEnum | CostosExtrasScalarFieldEnum[]
  }

  /**
   * costosExtras findFirstOrThrow
   */
  export type costosExtrasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the costosExtras
     */
    select?: costosExtrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the costosExtras
     */
    omit?: costosExtrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: costosExtrasInclude<ExtArgs> | null
    /**
     * Filter, which costosExtras to fetch.
     */
    where?: costosExtrasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of costosExtras to fetch.
     */
    orderBy?: costosExtrasOrderByWithRelationInput | costosExtrasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for costosExtras.
     */
    cursor?: costosExtrasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` costosExtras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` costosExtras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of costosExtras.
     */
    distinct?: CostosExtrasScalarFieldEnum | CostosExtrasScalarFieldEnum[]
  }

  /**
   * costosExtras findMany
   */
  export type costosExtrasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the costosExtras
     */
    select?: costosExtrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the costosExtras
     */
    omit?: costosExtrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: costosExtrasInclude<ExtArgs> | null
    /**
     * Filter, which costosExtras to fetch.
     */
    where?: costosExtrasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of costosExtras to fetch.
     */
    orderBy?: costosExtrasOrderByWithRelationInput | costosExtrasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing costosExtras.
     */
    cursor?: costosExtrasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` costosExtras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` costosExtras.
     */
    skip?: number
    distinct?: CostosExtrasScalarFieldEnum | CostosExtrasScalarFieldEnum[]
  }

  /**
   * costosExtras create
   */
  export type costosExtrasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the costosExtras
     */
    select?: costosExtrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the costosExtras
     */
    omit?: costosExtrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: costosExtrasInclude<ExtArgs> | null
    /**
     * The data needed to create a costosExtras.
     */
    data: XOR<costosExtrasCreateInput, costosExtrasUncheckedCreateInput>
  }

  /**
   * costosExtras createMany
   */
  export type costosExtrasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many costosExtras.
     */
    data: costosExtrasCreateManyInput | costosExtrasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * costosExtras createManyAndReturn
   */
  export type costosExtrasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the costosExtras
     */
    select?: costosExtrasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the costosExtras
     */
    omit?: costosExtrasOmit<ExtArgs> | null
    /**
     * The data used to create many costosExtras.
     */
    data: costosExtrasCreateManyInput | costosExtrasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: costosExtrasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * costosExtras update
   */
  export type costosExtrasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the costosExtras
     */
    select?: costosExtrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the costosExtras
     */
    omit?: costosExtrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: costosExtrasInclude<ExtArgs> | null
    /**
     * The data needed to update a costosExtras.
     */
    data: XOR<costosExtrasUpdateInput, costosExtrasUncheckedUpdateInput>
    /**
     * Choose, which costosExtras to update.
     */
    where: costosExtrasWhereUniqueInput
  }

  /**
   * costosExtras updateMany
   */
  export type costosExtrasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update costosExtras.
     */
    data: XOR<costosExtrasUpdateManyMutationInput, costosExtrasUncheckedUpdateManyInput>
    /**
     * Filter which costosExtras to update
     */
    where?: costosExtrasWhereInput
    /**
     * Limit how many costosExtras to update.
     */
    limit?: number
  }

  /**
   * costosExtras updateManyAndReturn
   */
  export type costosExtrasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the costosExtras
     */
    select?: costosExtrasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the costosExtras
     */
    omit?: costosExtrasOmit<ExtArgs> | null
    /**
     * The data used to update costosExtras.
     */
    data: XOR<costosExtrasUpdateManyMutationInput, costosExtrasUncheckedUpdateManyInput>
    /**
     * Filter which costosExtras to update
     */
    where?: costosExtrasWhereInput
    /**
     * Limit how many costosExtras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: costosExtrasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * costosExtras upsert
   */
  export type costosExtrasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the costosExtras
     */
    select?: costosExtrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the costosExtras
     */
    omit?: costosExtrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: costosExtrasInclude<ExtArgs> | null
    /**
     * The filter to search for the costosExtras to update in case it exists.
     */
    where: costosExtrasWhereUniqueInput
    /**
     * In case the costosExtras found by the `where` argument doesn't exist, create a new costosExtras with this data.
     */
    create: XOR<costosExtrasCreateInput, costosExtrasUncheckedCreateInput>
    /**
     * In case the costosExtras was found with the provided `where` argument, update it with this data.
     */
    update: XOR<costosExtrasUpdateInput, costosExtrasUncheckedUpdateInput>
  }

  /**
   * costosExtras delete
   */
  export type costosExtrasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the costosExtras
     */
    select?: costosExtrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the costosExtras
     */
    omit?: costosExtrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: costosExtrasInclude<ExtArgs> | null
    /**
     * Filter which costosExtras to delete.
     */
    where: costosExtrasWhereUniqueInput
  }

  /**
   * costosExtras deleteMany
   */
  export type costosExtrasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which costosExtras to delete
     */
    where?: costosExtrasWhereInput
    /**
     * Limit how many costosExtras to delete.
     */
    limit?: number
  }

  /**
   * costosExtras without action
   */
  export type costosExtrasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the costosExtras
     */
    select?: costosExtrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the costosExtras
     */
    omit?: costosExtrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: costosExtrasInclude<ExtArgs> | null
  }


  /**
   * Model auditoria
   */

  export type AggregateAuditoria = {
    _count: AuditoriaCountAggregateOutputType | null
    _avg: AuditoriaAvgAggregateOutputType | null
    _sum: AuditoriaSumAggregateOutputType | null
    _min: AuditoriaMinAggregateOutputType | null
    _max: AuditoriaMaxAggregateOutputType | null
  }

  export type AuditoriaAvgAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    productoId: number | null
    varianteId: number | null
    ventaId: number | null
    estanteId: number | null
    categoriaId: number | null
  }

  export type AuditoriaSumAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    productoId: number | null
    varianteId: number | null
    ventaId: number | null
    estanteId: number | null
    categoriaId: number | null
  }

  export type AuditoriaMinAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    accion: $Enums.Accion | null
    productoId: number | null
    varianteId: number | null
    ventaId: number | null
    estanteId: number | null
    categoriaId: number | null
    createdAt: Date | null
  }

  export type AuditoriaMaxAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    accion: $Enums.Accion | null
    productoId: number | null
    varianteId: number | null
    ventaId: number | null
    estanteId: number | null
    categoriaId: number | null
    createdAt: Date | null
  }

  export type AuditoriaCountAggregateOutputType = {
    id: number
    usuario_id: number
    accion: number
    productoId: number
    varianteId: number
    ventaId: number
    estanteId: number
    categoriaId: number
    createdAt: number
    _all: number
  }


  export type AuditoriaAvgAggregateInputType = {
    id?: true
    usuario_id?: true
    productoId?: true
    varianteId?: true
    ventaId?: true
    estanteId?: true
    categoriaId?: true
  }

  export type AuditoriaSumAggregateInputType = {
    id?: true
    usuario_id?: true
    productoId?: true
    varianteId?: true
    ventaId?: true
    estanteId?: true
    categoriaId?: true
  }

  export type AuditoriaMinAggregateInputType = {
    id?: true
    usuario_id?: true
    accion?: true
    productoId?: true
    varianteId?: true
    ventaId?: true
    estanteId?: true
    categoriaId?: true
    createdAt?: true
  }

  export type AuditoriaMaxAggregateInputType = {
    id?: true
    usuario_id?: true
    accion?: true
    productoId?: true
    varianteId?: true
    ventaId?: true
    estanteId?: true
    categoriaId?: true
    createdAt?: true
  }

  export type AuditoriaCountAggregateInputType = {
    id?: true
    usuario_id?: true
    accion?: true
    productoId?: true
    varianteId?: true
    ventaId?: true
    estanteId?: true
    categoriaId?: true
    createdAt?: true
    _all?: true
  }

  export type AuditoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auditoria to aggregate.
     */
    where?: auditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auditorias to fetch.
     */
    orderBy?: auditoriaOrderByWithRelationInput | auditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: auditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auditorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned auditorias
    **/
    _count?: true | AuditoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditoriaMaxAggregateInputType
  }

  export type GetAuditoriaAggregateType<T extends AuditoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditoria[P]>
      : GetScalarType<T[P], AggregateAuditoria[P]>
  }




  export type auditoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auditoriaWhereInput
    orderBy?: auditoriaOrderByWithAggregationInput | auditoriaOrderByWithAggregationInput[]
    by: AuditoriaScalarFieldEnum[] | AuditoriaScalarFieldEnum
    having?: auditoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditoriaCountAggregateInputType | true
    _avg?: AuditoriaAvgAggregateInputType
    _sum?: AuditoriaSumAggregateInputType
    _min?: AuditoriaMinAggregateInputType
    _max?: AuditoriaMaxAggregateInputType
  }

  export type AuditoriaGroupByOutputType = {
    id: number
    usuario_id: number
    accion: $Enums.Accion
    productoId: number | null
    varianteId: number | null
    ventaId: number | null
    estanteId: number | null
    categoriaId: number | null
    createdAt: Date
    _count: AuditoriaCountAggregateOutputType | null
    _avg: AuditoriaAvgAggregateOutputType | null
    _sum: AuditoriaSumAggregateOutputType | null
    _min: AuditoriaMinAggregateOutputType | null
    _max: AuditoriaMaxAggregateOutputType | null
  }

  type GetAuditoriaGroupByPayload<T extends auditoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditoriaGroupByOutputType[P]>
            : GetScalarType<T[P], AuditoriaGroupByOutputType[P]>
        }
      >
    >


  export type auditoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    accion?: boolean
    productoId?: boolean
    varianteId?: boolean
    ventaId?: boolean
    estanteId?: boolean
    categoriaId?: boolean
    createdAt?: boolean
    producto?: boolean | auditoria$productoArgs<ExtArgs>
    variante?: boolean | auditoria$varianteArgs<ExtArgs>
    venta?: boolean | auditoria$ventaArgs<ExtArgs>
    estante?: boolean | auditoria$estanteArgs<ExtArgs>
    categoria?: boolean | auditoria$categoriaArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditoria"]>

  export type auditoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    accion?: boolean
    productoId?: boolean
    varianteId?: boolean
    ventaId?: boolean
    estanteId?: boolean
    categoriaId?: boolean
    createdAt?: boolean
    producto?: boolean | auditoria$productoArgs<ExtArgs>
    variante?: boolean | auditoria$varianteArgs<ExtArgs>
    venta?: boolean | auditoria$ventaArgs<ExtArgs>
    estante?: boolean | auditoria$estanteArgs<ExtArgs>
    categoria?: boolean | auditoria$categoriaArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditoria"]>

  export type auditoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    accion?: boolean
    productoId?: boolean
    varianteId?: boolean
    ventaId?: boolean
    estanteId?: boolean
    categoriaId?: boolean
    createdAt?: boolean
    producto?: boolean | auditoria$productoArgs<ExtArgs>
    variante?: boolean | auditoria$varianteArgs<ExtArgs>
    venta?: boolean | auditoria$ventaArgs<ExtArgs>
    estante?: boolean | auditoria$estanteArgs<ExtArgs>
    categoria?: boolean | auditoria$categoriaArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditoria"]>

  export type auditoriaSelectScalar = {
    id?: boolean
    usuario_id?: boolean
    accion?: boolean
    productoId?: boolean
    varianteId?: boolean
    ventaId?: boolean
    estanteId?: boolean
    categoriaId?: boolean
    createdAt?: boolean
  }

  export type auditoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario_id" | "accion" | "productoId" | "varianteId" | "ventaId" | "estanteId" | "categoriaId" | "createdAt", ExtArgs["result"]["auditoria"]>
  export type auditoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | auditoria$productoArgs<ExtArgs>
    variante?: boolean | auditoria$varianteArgs<ExtArgs>
    venta?: boolean | auditoria$ventaArgs<ExtArgs>
    estante?: boolean | auditoria$estanteArgs<ExtArgs>
    categoria?: boolean | auditoria$categoriaArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }
  export type auditoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | auditoria$productoArgs<ExtArgs>
    variante?: boolean | auditoria$varianteArgs<ExtArgs>
    venta?: boolean | auditoria$ventaArgs<ExtArgs>
    estante?: boolean | auditoria$estanteArgs<ExtArgs>
    categoria?: boolean | auditoria$categoriaArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }
  export type auditoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | auditoria$productoArgs<ExtArgs>
    variante?: boolean | auditoria$varianteArgs<ExtArgs>
    venta?: boolean | auditoria$ventaArgs<ExtArgs>
    estante?: boolean | auditoria$estanteArgs<ExtArgs>
    categoria?: boolean | auditoria$categoriaArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }

  export type $auditoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "auditoria"
    objects: {
      producto: Prisma.$productosPayload<ExtArgs> | null
      variante: Prisma.$variantesPayload<ExtArgs> | null
      venta: Prisma.$ventasPayload<ExtArgs> | null
      estante: Prisma.$estantesPayload<ExtArgs> | null
      categoria: Prisma.$categoriasPayload<ExtArgs> | null
      usuario: Prisma.$usuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuario_id: number
      accion: $Enums.Accion
      productoId: number | null
      varianteId: number | null
      ventaId: number | null
      estanteId: number | null
      categoriaId: number | null
      createdAt: Date
    }, ExtArgs["result"]["auditoria"]>
    composites: {}
  }

  type auditoriaGetPayload<S extends boolean | null | undefined | auditoriaDefaultArgs> = $Result.GetResult<Prisma.$auditoriaPayload, S>

  type auditoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<auditoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditoriaCountAggregateInputType | true
    }

  export interface auditoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['auditoria'], meta: { name: 'auditoria' } }
    /**
     * Find zero or one Auditoria that matches the filter.
     * @param {auditoriaFindUniqueArgs} args - Arguments to find a Auditoria
     * @example
     * // Get one Auditoria
     * const auditoria = await prisma.auditoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends auditoriaFindUniqueArgs>(args: SelectSubset<T, auditoriaFindUniqueArgs<ExtArgs>>): Prisma__auditoriaClient<$Result.GetResult<Prisma.$auditoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Auditoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {auditoriaFindUniqueOrThrowArgs} args - Arguments to find a Auditoria
     * @example
     * // Get one Auditoria
     * const auditoria = await prisma.auditoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends auditoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, auditoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__auditoriaClient<$Result.GetResult<Prisma.$auditoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auditoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditoriaFindFirstArgs} args - Arguments to find a Auditoria
     * @example
     * // Get one Auditoria
     * const auditoria = await prisma.auditoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends auditoriaFindFirstArgs>(args?: SelectSubset<T, auditoriaFindFirstArgs<ExtArgs>>): Prisma__auditoriaClient<$Result.GetResult<Prisma.$auditoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auditoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditoriaFindFirstOrThrowArgs} args - Arguments to find a Auditoria
     * @example
     * // Get one Auditoria
     * const auditoria = await prisma.auditoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends auditoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, auditoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__auditoriaClient<$Result.GetResult<Prisma.$auditoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Auditorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auditorias
     * const auditorias = await prisma.auditoria.findMany()
     * 
     * // Get first 10 Auditorias
     * const auditorias = await prisma.auditoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditoriaWithIdOnly = await prisma.auditoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends auditoriaFindManyArgs>(args?: SelectSubset<T, auditoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auditoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Auditoria.
     * @param {auditoriaCreateArgs} args - Arguments to create a Auditoria.
     * @example
     * // Create one Auditoria
     * const Auditoria = await prisma.auditoria.create({
     *   data: {
     *     // ... data to create a Auditoria
     *   }
     * })
     * 
     */
    create<T extends auditoriaCreateArgs>(args: SelectSubset<T, auditoriaCreateArgs<ExtArgs>>): Prisma__auditoriaClient<$Result.GetResult<Prisma.$auditoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Auditorias.
     * @param {auditoriaCreateManyArgs} args - Arguments to create many Auditorias.
     * @example
     * // Create many Auditorias
     * const auditoria = await prisma.auditoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends auditoriaCreateManyArgs>(args?: SelectSubset<T, auditoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Auditorias and returns the data saved in the database.
     * @param {auditoriaCreateManyAndReturnArgs} args - Arguments to create many Auditorias.
     * @example
     * // Create many Auditorias
     * const auditoria = await prisma.auditoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Auditorias and only return the `id`
     * const auditoriaWithIdOnly = await prisma.auditoria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends auditoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, auditoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auditoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Auditoria.
     * @param {auditoriaDeleteArgs} args - Arguments to delete one Auditoria.
     * @example
     * // Delete one Auditoria
     * const Auditoria = await prisma.auditoria.delete({
     *   where: {
     *     // ... filter to delete one Auditoria
     *   }
     * })
     * 
     */
    delete<T extends auditoriaDeleteArgs>(args: SelectSubset<T, auditoriaDeleteArgs<ExtArgs>>): Prisma__auditoriaClient<$Result.GetResult<Prisma.$auditoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Auditoria.
     * @param {auditoriaUpdateArgs} args - Arguments to update one Auditoria.
     * @example
     * // Update one Auditoria
     * const auditoria = await prisma.auditoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends auditoriaUpdateArgs>(args: SelectSubset<T, auditoriaUpdateArgs<ExtArgs>>): Prisma__auditoriaClient<$Result.GetResult<Prisma.$auditoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Auditorias.
     * @param {auditoriaDeleteManyArgs} args - Arguments to filter Auditorias to delete.
     * @example
     * // Delete a few Auditorias
     * const { count } = await prisma.auditoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends auditoriaDeleteManyArgs>(args?: SelectSubset<T, auditoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auditorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auditorias
     * const auditoria = await prisma.auditoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends auditoriaUpdateManyArgs>(args: SelectSubset<T, auditoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auditorias and returns the data updated in the database.
     * @param {auditoriaUpdateManyAndReturnArgs} args - Arguments to update many Auditorias.
     * @example
     * // Update many Auditorias
     * const auditoria = await prisma.auditoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Auditorias and only return the `id`
     * const auditoriaWithIdOnly = await prisma.auditoria.updateManyAndReturn({
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
    updateManyAndReturn<T extends auditoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, auditoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auditoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Auditoria.
     * @param {auditoriaUpsertArgs} args - Arguments to update or create a Auditoria.
     * @example
     * // Update or create a Auditoria
     * const auditoria = await prisma.auditoria.upsert({
     *   create: {
     *     // ... data to create a Auditoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auditoria we want to update
     *   }
     * })
     */
    upsert<T extends auditoriaUpsertArgs>(args: SelectSubset<T, auditoriaUpsertArgs<ExtArgs>>): Prisma__auditoriaClient<$Result.GetResult<Prisma.$auditoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Auditorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditoriaCountArgs} args - Arguments to filter Auditorias to count.
     * @example
     * // Count the number of Auditorias
     * const count = await prisma.auditoria.count({
     *   where: {
     *     // ... the filter for the Auditorias we want to count
     *   }
     * })
    **/
    count<T extends auditoriaCountArgs>(
      args?: Subset<T, auditoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auditoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditoriaAggregateArgs>(args: Subset<T, AuditoriaAggregateArgs>): Prisma.PrismaPromise<GetAuditoriaAggregateType<T>>

    /**
     * Group by Auditoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditoriaGroupByArgs} args - Group by arguments.
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
      T extends auditoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: auditoriaGroupByArgs['orderBy'] }
        : { orderBy?: auditoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, auditoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the auditoria model
   */
  readonly fields: auditoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for auditoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__auditoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    producto<T extends auditoria$productoArgs<ExtArgs> = {}>(args?: Subset<T, auditoria$productoArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    variante<T extends auditoria$varianteArgs<ExtArgs> = {}>(args?: Subset<T, auditoria$varianteArgs<ExtArgs>>): Prisma__variantesClient<$Result.GetResult<Prisma.$variantesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    venta<T extends auditoria$ventaArgs<ExtArgs> = {}>(args?: Subset<T, auditoria$ventaArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    estante<T extends auditoria$estanteArgs<ExtArgs> = {}>(args?: Subset<T, auditoria$estanteArgs<ExtArgs>>): Prisma__estantesClient<$Result.GetResult<Prisma.$estantesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    categoria<T extends auditoria$categoriaArgs<ExtArgs> = {}>(args?: Subset<T, auditoria$categoriaArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the auditoria model
   */
  interface auditoriaFieldRefs {
    readonly id: FieldRef<"auditoria", 'Int'>
    readonly usuario_id: FieldRef<"auditoria", 'Int'>
    readonly accion: FieldRef<"auditoria", 'Accion'>
    readonly productoId: FieldRef<"auditoria", 'Int'>
    readonly varianteId: FieldRef<"auditoria", 'Int'>
    readonly ventaId: FieldRef<"auditoria", 'Int'>
    readonly estanteId: FieldRef<"auditoria", 'Int'>
    readonly categoriaId: FieldRef<"auditoria", 'Int'>
    readonly createdAt: FieldRef<"auditoria", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * auditoria findUnique
   */
  export type auditoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditoria
     */
    select?: auditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditoria
     */
    omit?: auditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditoriaInclude<ExtArgs> | null
    /**
     * Filter, which auditoria to fetch.
     */
    where: auditoriaWhereUniqueInput
  }

  /**
   * auditoria findUniqueOrThrow
   */
  export type auditoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditoria
     */
    select?: auditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditoria
     */
    omit?: auditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditoriaInclude<ExtArgs> | null
    /**
     * Filter, which auditoria to fetch.
     */
    where: auditoriaWhereUniqueInput
  }

  /**
   * auditoria findFirst
   */
  export type auditoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditoria
     */
    select?: auditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditoria
     */
    omit?: auditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditoriaInclude<ExtArgs> | null
    /**
     * Filter, which auditoria to fetch.
     */
    where?: auditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auditorias to fetch.
     */
    orderBy?: auditoriaOrderByWithRelationInput | auditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auditorias.
     */
    cursor?: auditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auditorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auditorias.
     */
    distinct?: AuditoriaScalarFieldEnum | AuditoriaScalarFieldEnum[]
  }

  /**
   * auditoria findFirstOrThrow
   */
  export type auditoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditoria
     */
    select?: auditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditoria
     */
    omit?: auditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditoriaInclude<ExtArgs> | null
    /**
     * Filter, which auditoria to fetch.
     */
    where?: auditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auditorias to fetch.
     */
    orderBy?: auditoriaOrderByWithRelationInput | auditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auditorias.
     */
    cursor?: auditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auditorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auditorias.
     */
    distinct?: AuditoriaScalarFieldEnum | AuditoriaScalarFieldEnum[]
  }

  /**
   * auditoria findMany
   */
  export type auditoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditoria
     */
    select?: auditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditoria
     */
    omit?: auditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditoriaInclude<ExtArgs> | null
    /**
     * Filter, which auditorias to fetch.
     */
    where?: auditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auditorias to fetch.
     */
    orderBy?: auditoriaOrderByWithRelationInput | auditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing auditorias.
     */
    cursor?: auditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auditorias.
     */
    skip?: number
    distinct?: AuditoriaScalarFieldEnum | AuditoriaScalarFieldEnum[]
  }

  /**
   * auditoria create
   */
  export type auditoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditoria
     */
    select?: auditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditoria
     */
    omit?: auditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a auditoria.
     */
    data: XOR<auditoriaCreateInput, auditoriaUncheckedCreateInput>
  }

  /**
   * auditoria createMany
   */
  export type auditoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many auditorias.
     */
    data: auditoriaCreateManyInput | auditoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * auditoria createManyAndReturn
   */
  export type auditoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditoria
     */
    select?: auditoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the auditoria
     */
    omit?: auditoriaOmit<ExtArgs> | null
    /**
     * The data used to create many auditorias.
     */
    data: auditoriaCreateManyInput | auditoriaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditoriaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * auditoria update
   */
  export type auditoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditoria
     */
    select?: auditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditoria
     */
    omit?: auditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a auditoria.
     */
    data: XOR<auditoriaUpdateInput, auditoriaUncheckedUpdateInput>
    /**
     * Choose, which auditoria to update.
     */
    where: auditoriaWhereUniqueInput
  }

  /**
   * auditoria updateMany
   */
  export type auditoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update auditorias.
     */
    data: XOR<auditoriaUpdateManyMutationInput, auditoriaUncheckedUpdateManyInput>
    /**
     * Filter which auditorias to update
     */
    where?: auditoriaWhereInput
    /**
     * Limit how many auditorias to update.
     */
    limit?: number
  }

  /**
   * auditoria updateManyAndReturn
   */
  export type auditoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditoria
     */
    select?: auditoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the auditoria
     */
    omit?: auditoriaOmit<ExtArgs> | null
    /**
     * The data used to update auditorias.
     */
    data: XOR<auditoriaUpdateManyMutationInput, auditoriaUncheckedUpdateManyInput>
    /**
     * Filter which auditorias to update
     */
    where?: auditoriaWhereInput
    /**
     * Limit how many auditorias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditoriaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * auditoria upsert
   */
  export type auditoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditoria
     */
    select?: auditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditoria
     */
    omit?: auditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the auditoria to update in case it exists.
     */
    where: auditoriaWhereUniqueInput
    /**
     * In case the auditoria found by the `where` argument doesn't exist, create a new auditoria with this data.
     */
    create: XOR<auditoriaCreateInput, auditoriaUncheckedCreateInput>
    /**
     * In case the auditoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<auditoriaUpdateInput, auditoriaUncheckedUpdateInput>
  }

  /**
   * auditoria delete
   */
  export type auditoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditoria
     */
    select?: auditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditoria
     */
    omit?: auditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditoriaInclude<ExtArgs> | null
    /**
     * Filter which auditoria to delete.
     */
    where: auditoriaWhereUniqueInput
  }

  /**
   * auditoria deleteMany
   */
  export type auditoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auditorias to delete
     */
    where?: auditoriaWhereInput
    /**
     * Limit how many auditorias to delete.
     */
    limit?: number
  }

  /**
   * auditoria.producto
   */
  export type auditoria$productoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    where?: productosWhereInput
  }

  /**
   * auditoria.variante
   */
  export type auditoria$varianteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variantes
     */
    select?: variantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variantes
     */
    omit?: variantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantesInclude<ExtArgs> | null
    where?: variantesWhereInput
  }

  /**
   * auditoria.venta
   */
  export type auditoria$ventaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas
     */
    omit?: ventasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    where?: ventasWhereInput
  }

  /**
   * auditoria.estante
   */
  export type auditoria$estanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estantes
     */
    select?: estantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estantes
     */
    omit?: estantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estantesInclude<ExtArgs> | null
    where?: estantesWhereInput
  }

  /**
   * auditoria.categoria
   */
  export type auditoria$categoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    where?: categoriasWhereInput
  }

  /**
   * auditoria without action
   */
  export type auditoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditoria
     */
    select?: auditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditoria
     */
    omit?: auditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditoriaInclude<ExtArgs> | null
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
    productosId: 'productosId',
    nombre: 'nombre',
    usuario: 'usuario',
    email_phone: 'email_phone',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const UbicacionScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    calle: 'calle',
    cp: 'cp',
    colonia: 'colonia',
    celular: 'celular',
    createdAt: 'createdAt'
  };

  export type UbicacionScalarFieldEnum = (typeof UbicacionScalarFieldEnum)[keyof typeof UbicacionScalarFieldEnum]


  export const EstantesScalarFieldEnum: {
    id: 'id',
    Seccion: 'Seccion',
    nivel: 'nivel',
    pasillo: 'pasillo',
    createdAt: 'createdAt',
    ubicacionId: 'ubicacionId'
  };

  export type EstantesScalarFieldEnum = (typeof EstantesScalarFieldEnum)[keyof typeof EstantesScalarFieldEnum]


  export const CategoriasScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    createdAt: 'createdAt'
  };

  export type CategoriasScalarFieldEnum = (typeof CategoriasScalarFieldEnum)[keyof typeof CategoriasScalarFieldEnum]


  export const ProductosScalarFieldEnum: {
    id: 'id',
    categoriaId: 'categoriaId',
    createdAt: 'createdAt',
    estantesId: 'estantesId'
  };

  export type ProductosScalarFieldEnum = (typeof ProductosScalarFieldEnum)[keyof typeof ProductosScalarFieldEnum]


  export const VariantesScalarFieldEnum: {
    id: 'id',
    producto_id: 'producto_id',
    locacion_id: 'locacion_id',
    estante_id: 'estante_id',
    foto: 'foto',
    nombre: 'nombre',
    codigo: 'codigo',
    color: 'color',
    descripcion: 'descripcion',
    cantidad: 'cantidad',
    medidas: 'medidas',
    precio_publico: 'precio_publico',
    precio_contratista: 'precio_contratista',
    costo_compra: 'costo_compra',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ganacia_publico: 'ganacia_publico',
    ganacia_contratista: 'ganacia_contratista',
    ganancias_stock: 'ganancias_stock'
  };

  export type VariantesScalarFieldEnum = (typeof VariantesScalarFieldEnum)[keyof typeof VariantesScalarFieldEnum]


  export const VentasScalarFieldEnum: {
    id: 'id',
    variante_id: 'variante_id',
    cantidad: 'cantidad',
    total_venta: 'total_venta',
    fecha_venta: 'fecha_venta',
    nombre_cliente: 'nombre_cliente',
    contacto_cliente: 'contacto_cliente',
    costos_extras: 'costos_extras',
    motivo_costo_extra: 'motivo_costo_extra',
    precio_publico: 'precio_publico',
    precio_contratista: 'precio_contratista',
    costo_compra: 'costo_compra'
  };

  export type VentasScalarFieldEnum = (typeof VentasScalarFieldEnum)[keyof typeof VentasScalarFieldEnum]


  export const CostosExtrasScalarFieldEnum: {
    id: 'id',
    venta_id: 'venta_id',
    motivo: 'motivo',
    costo: 'costo',
    createdAt: 'createdAt'
  };

  export type CostosExtrasScalarFieldEnum = (typeof CostosExtrasScalarFieldEnum)[keyof typeof CostosExtrasScalarFieldEnum]


  export const AuditoriaScalarFieldEnum: {
    id: 'id',
    usuario_id: 'usuario_id',
    accion: 'accion',
    productoId: 'productoId',
    varianteId: 'varianteId',
    ventaId: 'ventaId',
    estanteId: 'estanteId',
    categoriaId: 'categoriaId',
    createdAt: 'createdAt'
  };

  export type AuditoriaScalarFieldEnum = (typeof AuditoriaScalarFieldEnum)[keyof typeof AuditoriaScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Accion'
   */
  export type EnumAccionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Accion'>
    


  /**
   * Reference to a field of type 'Accion[]'
   */
  export type ListEnumAccionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Accion[]'>
    
  /**
   * Deep Input Types
   */


  export type usuarioWhereInput = {
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    id?: IntFilter<"usuario"> | number
    productosId?: IntNullableFilter<"usuario"> | number | null
    nombre?: StringFilter<"usuario"> | string
    usuario?: StringFilter<"usuario"> | string
    email_phone?: StringFilter<"usuario"> | string
    password?: StringFilter<"usuario"> | string
    createdAt?: DateTimeFilter<"usuario"> | Date | string
    productos?: XOR<ProductosNullableScalarRelationFilter, productosWhereInput> | null
    auditorias?: AuditoriaListRelationFilter
  }

  export type usuarioOrderByWithRelationInput = {
    id?: SortOrder
    productosId?: SortOrderInput | SortOrder
    nombre?: SortOrder
    usuario?: SortOrder
    email_phone?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    productos?: productosOrderByWithRelationInput
    auditorias?: auditoriaOrderByRelationAggregateInput
  }

  export type usuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuario?: string
    email_phone?: string
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    productosId?: IntNullableFilter<"usuario"> | number | null
    nombre?: StringFilter<"usuario"> | string
    password?: StringFilter<"usuario"> | string
    createdAt?: DateTimeFilter<"usuario"> | Date | string
    productos?: XOR<ProductosNullableScalarRelationFilter, productosWhereInput> | null
    auditorias?: AuditoriaListRelationFilter
  }, "id" | "usuario" | "email_phone">

  export type usuarioOrderByWithAggregationInput = {
    id?: SortOrder
    productosId?: SortOrderInput | SortOrder
    nombre?: SortOrder
    usuario?: SortOrder
    email_phone?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: usuarioCountOrderByAggregateInput
    _avg?: usuarioAvgOrderByAggregateInput
    _max?: usuarioMaxOrderByAggregateInput
    _min?: usuarioMinOrderByAggregateInput
    _sum?: usuarioSumOrderByAggregateInput
  }

  export type usuarioScalarWhereWithAggregatesInput = {
    AND?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    OR?: usuarioScalarWhereWithAggregatesInput[]
    NOT?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usuario"> | number
    productosId?: IntNullableWithAggregatesFilter<"usuario"> | number | null
    nombre?: StringWithAggregatesFilter<"usuario"> | string
    usuario?: StringWithAggregatesFilter<"usuario"> | string
    email_phone?: StringWithAggregatesFilter<"usuario"> | string
    password?: StringWithAggregatesFilter<"usuario"> | string
    createdAt?: DateTimeWithAggregatesFilter<"usuario"> | Date | string
  }

  export type ubicacionWhereInput = {
    AND?: ubicacionWhereInput | ubicacionWhereInput[]
    OR?: ubicacionWhereInput[]
    NOT?: ubicacionWhereInput | ubicacionWhereInput[]
    id?: IntFilter<"ubicacion"> | number
    nombre?: StringFilter<"ubicacion"> | string
    calle?: StringFilter<"ubicacion"> | string
    cp?: StringFilter<"ubicacion"> | string
    colonia?: StringFilter<"ubicacion"> | string
    celular?: StringFilter<"ubicacion"> | string
    createdAt?: DateTimeFilter<"ubicacion"> | Date | string
    estantes?: EstantesListRelationFilter
  }

  export type ubicacionOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    calle?: SortOrder
    cp?: SortOrder
    colonia?: SortOrder
    celular?: SortOrder
    createdAt?: SortOrder
    estantes?: estantesOrderByRelationAggregateInput
  }

  export type ubicacionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ubicacionWhereInput | ubicacionWhereInput[]
    OR?: ubicacionWhereInput[]
    NOT?: ubicacionWhereInput | ubicacionWhereInput[]
    nombre?: StringFilter<"ubicacion"> | string
    calle?: StringFilter<"ubicacion"> | string
    cp?: StringFilter<"ubicacion"> | string
    colonia?: StringFilter<"ubicacion"> | string
    celular?: StringFilter<"ubicacion"> | string
    createdAt?: DateTimeFilter<"ubicacion"> | Date | string
    estantes?: EstantesListRelationFilter
  }, "id">

  export type ubicacionOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    calle?: SortOrder
    cp?: SortOrder
    colonia?: SortOrder
    celular?: SortOrder
    createdAt?: SortOrder
    _count?: ubicacionCountOrderByAggregateInput
    _avg?: ubicacionAvgOrderByAggregateInput
    _max?: ubicacionMaxOrderByAggregateInput
    _min?: ubicacionMinOrderByAggregateInput
    _sum?: ubicacionSumOrderByAggregateInput
  }

  export type ubicacionScalarWhereWithAggregatesInput = {
    AND?: ubicacionScalarWhereWithAggregatesInput | ubicacionScalarWhereWithAggregatesInput[]
    OR?: ubicacionScalarWhereWithAggregatesInput[]
    NOT?: ubicacionScalarWhereWithAggregatesInput | ubicacionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ubicacion"> | number
    nombre?: StringWithAggregatesFilter<"ubicacion"> | string
    calle?: StringWithAggregatesFilter<"ubicacion"> | string
    cp?: StringWithAggregatesFilter<"ubicacion"> | string
    colonia?: StringWithAggregatesFilter<"ubicacion"> | string
    celular?: StringWithAggregatesFilter<"ubicacion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ubicacion"> | Date | string
  }

  export type estantesWhereInput = {
    AND?: estantesWhereInput | estantesWhereInput[]
    OR?: estantesWhereInput[]
    NOT?: estantesWhereInput | estantesWhereInput[]
    id?: IntFilter<"estantes"> | number
    Seccion?: StringFilter<"estantes"> | string
    nivel?: IntFilter<"estantes"> | number
    pasillo?: IntFilter<"estantes"> | number
    createdAt?: DateTimeFilter<"estantes"> | Date | string
    ubicacionId?: IntNullableFilter<"estantes"> | number | null
    ubicacion?: XOR<UbicacionNullableScalarRelationFilter, ubicacionWhereInput> | null
    productos?: ProductosListRelationFilter
    auditorias?: AuditoriaListRelationFilter
  }

  export type estantesOrderByWithRelationInput = {
    id?: SortOrder
    Seccion?: SortOrder
    nivel?: SortOrder
    pasillo?: SortOrder
    createdAt?: SortOrder
    ubicacionId?: SortOrderInput | SortOrder
    ubicacion?: ubicacionOrderByWithRelationInput
    productos?: productosOrderByRelationAggregateInput
    auditorias?: auditoriaOrderByRelationAggregateInput
  }

  export type estantesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: estantesWhereInput | estantesWhereInput[]
    OR?: estantesWhereInput[]
    NOT?: estantesWhereInput | estantesWhereInput[]
    Seccion?: StringFilter<"estantes"> | string
    nivel?: IntFilter<"estantes"> | number
    pasillo?: IntFilter<"estantes"> | number
    createdAt?: DateTimeFilter<"estantes"> | Date | string
    ubicacionId?: IntNullableFilter<"estantes"> | number | null
    ubicacion?: XOR<UbicacionNullableScalarRelationFilter, ubicacionWhereInput> | null
    productos?: ProductosListRelationFilter
    auditorias?: AuditoriaListRelationFilter
  }, "id">

  export type estantesOrderByWithAggregationInput = {
    id?: SortOrder
    Seccion?: SortOrder
    nivel?: SortOrder
    pasillo?: SortOrder
    createdAt?: SortOrder
    ubicacionId?: SortOrderInput | SortOrder
    _count?: estantesCountOrderByAggregateInput
    _avg?: estantesAvgOrderByAggregateInput
    _max?: estantesMaxOrderByAggregateInput
    _min?: estantesMinOrderByAggregateInput
    _sum?: estantesSumOrderByAggregateInput
  }

  export type estantesScalarWhereWithAggregatesInput = {
    AND?: estantesScalarWhereWithAggregatesInput | estantesScalarWhereWithAggregatesInput[]
    OR?: estantesScalarWhereWithAggregatesInput[]
    NOT?: estantesScalarWhereWithAggregatesInput | estantesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"estantes"> | number
    Seccion?: StringWithAggregatesFilter<"estantes"> | string
    nivel?: IntWithAggregatesFilter<"estantes"> | number
    pasillo?: IntWithAggregatesFilter<"estantes"> | number
    createdAt?: DateTimeWithAggregatesFilter<"estantes"> | Date | string
    ubicacionId?: IntNullableWithAggregatesFilter<"estantes"> | number | null
  }

  export type categoriasWhereInput = {
    AND?: categoriasWhereInput | categoriasWhereInput[]
    OR?: categoriasWhereInput[]
    NOT?: categoriasWhereInput | categoriasWhereInput[]
    id?: IntFilter<"categorias"> | number
    nombre?: StringFilter<"categorias"> | string
    createdAt?: DateTimeFilter<"categorias"> | Date | string
    productos?: ProductosListRelationFilter
    auditorias?: AuditoriaListRelationFilter
  }

  export type categoriasOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    createdAt?: SortOrder
    productos?: productosOrderByRelationAggregateInput
    auditorias?: auditoriaOrderByRelationAggregateInput
  }

  export type categoriasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: categoriasWhereInput | categoriasWhereInput[]
    OR?: categoriasWhereInput[]
    NOT?: categoriasWhereInput | categoriasWhereInput[]
    createdAt?: DateTimeFilter<"categorias"> | Date | string
    productos?: ProductosListRelationFilter
    auditorias?: AuditoriaListRelationFilter
  }, "id" | "nombre">

  export type categoriasOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    createdAt?: SortOrder
    _count?: categoriasCountOrderByAggregateInput
    _avg?: categoriasAvgOrderByAggregateInput
    _max?: categoriasMaxOrderByAggregateInput
    _min?: categoriasMinOrderByAggregateInput
    _sum?: categoriasSumOrderByAggregateInput
  }

  export type categoriasScalarWhereWithAggregatesInput = {
    AND?: categoriasScalarWhereWithAggregatesInput | categoriasScalarWhereWithAggregatesInput[]
    OR?: categoriasScalarWhereWithAggregatesInput[]
    NOT?: categoriasScalarWhereWithAggregatesInput | categoriasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categorias"> | number
    nombre?: StringWithAggregatesFilter<"categorias"> | string
    createdAt?: DateTimeWithAggregatesFilter<"categorias"> | Date | string
  }

  export type productosWhereInput = {
    AND?: productosWhereInput | productosWhereInput[]
    OR?: productosWhereInput[]
    NOT?: productosWhereInput | productosWhereInput[]
    id?: IntFilter<"productos"> | number
    categoriaId?: IntNullableFilter<"productos"> | number | null
    createdAt?: DateTimeFilter<"productos"> | Date | string
    estantesId?: IntNullableFilter<"productos"> | number | null
    categoria?: XOR<CategoriasNullableScalarRelationFilter, categoriasWhereInput> | null
    variantes?: VariantesListRelationFilter
    usuario?: UsuarioListRelationFilter
    estantes?: XOR<EstantesNullableScalarRelationFilter, estantesWhereInput> | null
    auditorias?: AuditoriaListRelationFilter
  }

  export type productosOrderByWithRelationInput = {
    id?: SortOrder
    categoriaId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    estantesId?: SortOrderInput | SortOrder
    categoria?: categoriasOrderByWithRelationInput
    variantes?: variantesOrderByRelationAggregateInput
    usuario?: usuarioOrderByRelationAggregateInput
    estantes?: estantesOrderByWithRelationInput
    auditorias?: auditoriaOrderByRelationAggregateInput
  }

  export type productosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: productosWhereInput | productosWhereInput[]
    OR?: productosWhereInput[]
    NOT?: productosWhereInput | productosWhereInput[]
    categoriaId?: IntNullableFilter<"productos"> | number | null
    createdAt?: DateTimeFilter<"productos"> | Date | string
    estantesId?: IntNullableFilter<"productos"> | number | null
    categoria?: XOR<CategoriasNullableScalarRelationFilter, categoriasWhereInput> | null
    variantes?: VariantesListRelationFilter
    usuario?: UsuarioListRelationFilter
    estantes?: XOR<EstantesNullableScalarRelationFilter, estantesWhereInput> | null
    auditorias?: AuditoriaListRelationFilter
  }, "id">

  export type productosOrderByWithAggregationInput = {
    id?: SortOrder
    categoriaId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    estantesId?: SortOrderInput | SortOrder
    _count?: productosCountOrderByAggregateInput
    _avg?: productosAvgOrderByAggregateInput
    _max?: productosMaxOrderByAggregateInput
    _min?: productosMinOrderByAggregateInput
    _sum?: productosSumOrderByAggregateInput
  }

  export type productosScalarWhereWithAggregatesInput = {
    AND?: productosScalarWhereWithAggregatesInput | productosScalarWhereWithAggregatesInput[]
    OR?: productosScalarWhereWithAggregatesInput[]
    NOT?: productosScalarWhereWithAggregatesInput | productosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"productos"> | number
    categoriaId?: IntNullableWithAggregatesFilter<"productos"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"productos"> | Date | string
    estantesId?: IntNullableWithAggregatesFilter<"productos"> | number | null
  }

  export type variantesWhereInput = {
    AND?: variantesWhereInput | variantesWhereInput[]
    OR?: variantesWhereInput[]
    NOT?: variantesWhereInput | variantesWhereInput[]
    id?: IntFilter<"variantes"> | number
    producto_id?: IntFilter<"variantes"> | number
    locacion_id?: IntFilter<"variantes"> | number
    estante_id?: IntNullableFilter<"variantes"> | number | null
    foto?: StringFilter<"variantes"> | string
    nombre?: StringFilter<"variantes"> | string
    codigo?: StringFilter<"variantes"> | string
    color?: StringFilter<"variantes"> | string
    descripcion?: StringFilter<"variantes"> | string
    cantidad?: IntFilter<"variantes"> | number
    medidas?: StringFilter<"variantes"> | string
    precio_publico?: FloatFilter<"variantes"> | number
    precio_contratista?: FloatFilter<"variantes"> | number
    costo_compra?: FloatFilter<"variantes"> | number
    createdAt?: DateTimeFilter<"variantes"> | Date | string
    updatedAt?: DateTimeFilter<"variantes"> | Date | string
    ganacia_publico?: FloatFilter<"variantes"> | number
    ganacia_contratista?: FloatFilter<"variantes"> | number
    ganancias_stock?: FloatFilter<"variantes"> | number
    producto?: XOR<ProductosNullableScalarRelationFilter, productosWhereInput> | null
    ventas?: VentasListRelationFilter
    auditorias?: AuditoriaListRelationFilter
  }

  export type variantesOrderByWithRelationInput = {
    id?: SortOrder
    producto_id?: SortOrder
    locacion_id?: SortOrder
    estante_id?: SortOrderInput | SortOrder
    foto?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    color?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
    medidas?: SortOrder
    precio_publico?: SortOrder
    precio_contratista?: SortOrder
    costo_compra?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ganacia_publico?: SortOrder
    ganacia_contratista?: SortOrder
    ganancias_stock?: SortOrder
    producto?: productosOrderByWithRelationInput
    ventas?: ventasOrderByRelationAggregateInput
    auditorias?: auditoriaOrderByRelationAggregateInput
  }

  export type variantesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: variantesWhereInput | variantesWhereInput[]
    OR?: variantesWhereInput[]
    NOT?: variantesWhereInput | variantesWhereInput[]
    producto_id?: IntFilter<"variantes"> | number
    locacion_id?: IntFilter<"variantes"> | number
    estante_id?: IntNullableFilter<"variantes"> | number | null
    foto?: StringFilter<"variantes"> | string
    nombre?: StringFilter<"variantes"> | string
    codigo?: StringFilter<"variantes"> | string
    color?: StringFilter<"variantes"> | string
    descripcion?: StringFilter<"variantes"> | string
    cantidad?: IntFilter<"variantes"> | number
    medidas?: StringFilter<"variantes"> | string
    precio_publico?: FloatFilter<"variantes"> | number
    precio_contratista?: FloatFilter<"variantes"> | number
    costo_compra?: FloatFilter<"variantes"> | number
    createdAt?: DateTimeFilter<"variantes"> | Date | string
    updatedAt?: DateTimeFilter<"variantes"> | Date | string
    ganacia_publico?: FloatFilter<"variantes"> | number
    ganacia_contratista?: FloatFilter<"variantes"> | number
    ganancias_stock?: FloatFilter<"variantes"> | number
    producto?: XOR<ProductosNullableScalarRelationFilter, productosWhereInput> | null
    ventas?: VentasListRelationFilter
    auditorias?: AuditoriaListRelationFilter
  }, "id">

  export type variantesOrderByWithAggregationInput = {
    id?: SortOrder
    producto_id?: SortOrder
    locacion_id?: SortOrder
    estante_id?: SortOrderInput | SortOrder
    foto?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    color?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
    medidas?: SortOrder
    precio_publico?: SortOrder
    precio_contratista?: SortOrder
    costo_compra?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ganacia_publico?: SortOrder
    ganacia_contratista?: SortOrder
    ganancias_stock?: SortOrder
    _count?: variantesCountOrderByAggregateInput
    _avg?: variantesAvgOrderByAggregateInput
    _max?: variantesMaxOrderByAggregateInput
    _min?: variantesMinOrderByAggregateInput
    _sum?: variantesSumOrderByAggregateInput
  }

  export type variantesScalarWhereWithAggregatesInput = {
    AND?: variantesScalarWhereWithAggregatesInput | variantesScalarWhereWithAggregatesInput[]
    OR?: variantesScalarWhereWithAggregatesInput[]
    NOT?: variantesScalarWhereWithAggregatesInput | variantesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"variantes"> | number
    producto_id?: IntWithAggregatesFilter<"variantes"> | number
    locacion_id?: IntWithAggregatesFilter<"variantes"> | number
    estante_id?: IntNullableWithAggregatesFilter<"variantes"> | number | null
    foto?: StringWithAggregatesFilter<"variantes"> | string
    nombre?: StringWithAggregatesFilter<"variantes"> | string
    codigo?: StringWithAggregatesFilter<"variantes"> | string
    color?: StringWithAggregatesFilter<"variantes"> | string
    descripcion?: StringWithAggregatesFilter<"variantes"> | string
    cantidad?: IntWithAggregatesFilter<"variantes"> | number
    medidas?: StringWithAggregatesFilter<"variantes"> | string
    precio_publico?: FloatWithAggregatesFilter<"variantes"> | number
    precio_contratista?: FloatWithAggregatesFilter<"variantes"> | number
    costo_compra?: FloatWithAggregatesFilter<"variantes"> | number
    createdAt?: DateTimeWithAggregatesFilter<"variantes"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"variantes"> | Date | string
    ganacia_publico?: FloatWithAggregatesFilter<"variantes"> | number
    ganacia_contratista?: FloatWithAggregatesFilter<"variantes"> | number
    ganancias_stock?: FloatWithAggregatesFilter<"variantes"> | number
  }

  export type ventasWhereInput = {
    AND?: ventasWhereInput | ventasWhereInput[]
    OR?: ventasWhereInput[]
    NOT?: ventasWhereInput | ventasWhereInput[]
    id?: IntFilter<"ventas"> | number
    variante_id?: IntFilter<"ventas"> | number
    cantidad?: IntFilter<"ventas"> | number
    total_venta?: FloatFilter<"ventas"> | number
    fecha_venta?: DateTimeFilter<"ventas"> | Date | string
    nombre_cliente?: StringFilter<"ventas"> | string
    contacto_cliente?: StringFilter<"ventas"> | string
    costos_extras?: FloatFilter<"ventas"> | number
    motivo_costo_extra?: StringFilter<"ventas"> | string
    precio_publico?: FloatFilter<"ventas"> | number
    precio_contratista?: FloatFilter<"ventas"> | number
    costo_compra?: FloatFilter<"ventas"> | number
    variante?: XOR<VariantesNullableScalarRelationFilter, variantesWhereInput> | null
    costosExtras?: CostosExtrasListRelationFilter
    auditorias?: AuditoriaListRelationFilter
  }

  export type ventasOrderByWithRelationInput = {
    id?: SortOrder
    variante_id?: SortOrder
    cantidad?: SortOrder
    total_venta?: SortOrder
    fecha_venta?: SortOrder
    nombre_cliente?: SortOrder
    contacto_cliente?: SortOrder
    costos_extras?: SortOrder
    motivo_costo_extra?: SortOrder
    precio_publico?: SortOrder
    precio_contratista?: SortOrder
    costo_compra?: SortOrder
    variante?: variantesOrderByWithRelationInput
    costosExtras?: costosExtrasOrderByRelationAggregateInput
    auditorias?: auditoriaOrderByRelationAggregateInput
  }

  export type ventasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ventasWhereInput | ventasWhereInput[]
    OR?: ventasWhereInput[]
    NOT?: ventasWhereInput | ventasWhereInput[]
    variante_id?: IntFilter<"ventas"> | number
    cantidad?: IntFilter<"ventas"> | number
    total_venta?: FloatFilter<"ventas"> | number
    fecha_venta?: DateTimeFilter<"ventas"> | Date | string
    nombre_cliente?: StringFilter<"ventas"> | string
    contacto_cliente?: StringFilter<"ventas"> | string
    costos_extras?: FloatFilter<"ventas"> | number
    motivo_costo_extra?: StringFilter<"ventas"> | string
    precio_publico?: FloatFilter<"ventas"> | number
    precio_contratista?: FloatFilter<"ventas"> | number
    costo_compra?: FloatFilter<"ventas"> | number
    variante?: XOR<VariantesNullableScalarRelationFilter, variantesWhereInput> | null
    costosExtras?: CostosExtrasListRelationFilter
    auditorias?: AuditoriaListRelationFilter
  }, "id">

  export type ventasOrderByWithAggregationInput = {
    id?: SortOrder
    variante_id?: SortOrder
    cantidad?: SortOrder
    total_venta?: SortOrder
    fecha_venta?: SortOrder
    nombre_cliente?: SortOrder
    contacto_cliente?: SortOrder
    costos_extras?: SortOrder
    motivo_costo_extra?: SortOrder
    precio_publico?: SortOrder
    precio_contratista?: SortOrder
    costo_compra?: SortOrder
    _count?: ventasCountOrderByAggregateInput
    _avg?: ventasAvgOrderByAggregateInput
    _max?: ventasMaxOrderByAggregateInput
    _min?: ventasMinOrderByAggregateInput
    _sum?: ventasSumOrderByAggregateInput
  }

  export type ventasScalarWhereWithAggregatesInput = {
    AND?: ventasScalarWhereWithAggregatesInput | ventasScalarWhereWithAggregatesInput[]
    OR?: ventasScalarWhereWithAggregatesInput[]
    NOT?: ventasScalarWhereWithAggregatesInput | ventasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ventas"> | number
    variante_id?: IntWithAggregatesFilter<"ventas"> | number
    cantidad?: IntWithAggregatesFilter<"ventas"> | number
    total_venta?: FloatWithAggregatesFilter<"ventas"> | number
    fecha_venta?: DateTimeWithAggregatesFilter<"ventas"> | Date | string
    nombre_cliente?: StringWithAggregatesFilter<"ventas"> | string
    contacto_cliente?: StringWithAggregatesFilter<"ventas"> | string
    costos_extras?: FloatWithAggregatesFilter<"ventas"> | number
    motivo_costo_extra?: StringWithAggregatesFilter<"ventas"> | string
    precio_publico?: FloatWithAggregatesFilter<"ventas"> | number
    precio_contratista?: FloatWithAggregatesFilter<"ventas"> | number
    costo_compra?: FloatWithAggregatesFilter<"ventas"> | number
  }

  export type costosExtrasWhereInput = {
    AND?: costosExtrasWhereInput | costosExtrasWhereInput[]
    OR?: costosExtrasWhereInput[]
    NOT?: costosExtrasWhereInput | costosExtrasWhereInput[]
    id?: IntFilter<"costosExtras"> | number
    venta_id?: IntFilter<"costosExtras"> | number
    motivo?: StringFilter<"costosExtras"> | string
    costo?: FloatFilter<"costosExtras"> | number
    createdAt?: DateTimeFilter<"costosExtras"> | Date | string
    venta?: XOR<VentasScalarRelationFilter, ventasWhereInput>
  }

  export type costosExtrasOrderByWithRelationInput = {
    id?: SortOrder
    venta_id?: SortOrder
    motivo?: SortOrder
    costo?: SortOrder
    createdAt?: SortOrder
    venta?: ventasOrderByWithRelationInput
  }

  export type costosExtrasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: costosExtrasWhereInput | costosExtrasWhereInput[]
    OR?: costosExtrasWhereInput[]
    NOT?: costosExtrasWhereInput | costosExtrasWhereInput[]
    venta_id?: IntFilter<"costosExtras"> | number
    motivo?: StringFilter<"costosExtras"> | string
    costo?: FloatFilter<"costosExtras"> | number
    createdAt?: DateTimeFilter<"costosExtras"> | Date | string
    venta?: XOR<VentasScalarRelationFilter, ventasWhereInput>
  }, "id">

  export type costosExtrasOrderByWithAggregationInput = {
    id?: SortOrder
    venta_id?: SortOrder
    motivo?: SortOrder
    costo?: SortOrder
    createdAt?: SortOrder
    _count?: costosExtrasCountOrderByAggregateInput
    _avg?: costosExtrasAvgOrderByAggregateInput
    _max?: costosExtrasMaxOrderByAggregateInput
    _min?: costosExtrasMinOrderByAggregateInput
    _sum?: costosExtrasSumOrderByAggregateInput
  }

  export type costosExtrasScalarWhereWithAggregatesInput = {
    AND?: costosExtrasScalarWhereWithAggregatesInput | costosExtrasScalarWhereWithAggregatesInput[]
    OR?: costosExtrasScalarWhereWithAggregatesInput[]
    NOT?: costosExtrasScalarWhereWithAggregatesInput | costosExtrasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"costosExtras"> | number
    venta_id?: IntWithAggregatesFilter<"costosExtras"> | number
    motivo?: StringWithAggregatesFilter<"costosExtras"> | string
    costo?: FloatWithAggregatesFilter<"costosExtras"> | number
    createdAt?: DateTimeWithAggregatesFilter<"costosExtras"> | Date | string
  }

  export type auditoriaWhereInput = {
    AND?: auditoriaWhereInput | auditoriaWhereInput[]
    OR?: auditoriaWhereInput[]
    NOT?: auditoriaWhereInput | auditoriaWhereInput[]
    id?: IntFilter<"auditoria"> | number
    usuario_id?: IntFilter<"auditoria"> | number
    accion?: EnumAccionFilter<"auditoria"> | $Enums.Accion
    productoId?: IntNullableFilter<"auditoria"> | number | null
    varianteId?: IntNullableFilter<"auditoria"> | number | null
    ventaId?: IntNullableFilter<"auditoria"> | number | null
    estanteId?: IntNullableFilter<"auditoria"> | number | null
    categoriaId?: IntNullableFilter<"auditoria"> | number | null
    createdAt?: DateTimeFilter<"auditoria"> | Date | string
    producto?: XOR<ProductosNullableScalarRelationFilter, productosWhereInput> | null
    variante?: XOR<VariantesNullableScalarRelationFilter, variantesWhereInput> | null
    venta?: XOR<VentasNullableScalarRelationFilter, ventasWhereInput> | null
    estante?: XOR<EstantesNullableScalarRelationFilter, estantesWhereInput> | null
    categoria?: XOR<CategoriasNullableScalarRelationFilter, categoriasWhereInput> | null
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }

  export type auditoriaOrderByWithRelationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    accion?: SortOrder
    productoId?: SortOrderInput | SortOrder
    varianteId?: SortOrderInput | SortOrder
    ventaId?: SortOrderInput | SortOrder
    estanteId?: SortOrderInput | SortOrder
    categoriaId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    producto?: productosOrderByWithRelationInput
    variante?: variantesOrderByWithRelationInput
    venta?: ventasOrderByWithRelationInput
    estante?: estantesOrderByWithRelationInput
    categoria?: categoriasOrderByWithRelationInput
    usuario?: usuarioOrderByWithRelationInput
  }

  export type auditoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: auditoriaWhereInput | auditoriaWhereInput[]
    OR?: auditoriaWhereInput[]
    NOT?: auditoriaWhereInput | auditoriaWhereInput[]
    usuario_id?: IntFilter<"auditoria"> | number
    accion?: EnumAccionFilter<"auditoria"> | $Enums.Accion
    productoId?: IntNullableFilter<"auditoria"> | number | null
    varianteId?: IntNullableFilter<"auditoria"> | number | null
    ventaId?: IntNullableFilter<"auditoria"> | number | null
    estanteId?: IntNullableFilter<"auditoria"> | number | null
    categoriaId?: IntNullableFilter<"auditoria"> | number | null
    createdAt?: DateTimeFilter<"auditoria"> | Date | string
    producto?: XOR<ProductosNullableScalarRelationFilter, productosWhereInput> | null
    variante?: XOR<VariantesNullableScalarRelationFilter, variantesWhereInput> | null
    venta?: XOR<VentasNullableScalarRelationFilter, ventasWhereInput> | null
    estante?: XOR<EstantesNullableScalarRelationFilter, estantesWhereInput> | null
    categoria?: XOR<CategoriasNullableScalarRelationFilter, categoriasWhereInput> | null
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }, "id">

  export type auditoriaOrderByWithAggregationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    accion?: SortOrder
    productoId?: SortOrderInput | SortOrder
    varianteId?: SortOrderInput | SortOrder
    ventaId?: SortOrderInput | SortOrder
    estanteId?: SortOrderInput | SortOrder
    categoriaId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: auditoriaCountOrderByAggregateInput
    _avg?: auditoriaAvgOrderByAggregateInput
    _max?: auditoriaMaxOrderByAggregateInput
    _min?: auditoriaMinOrderByAggregateInput
    _sum?: auditoriaSumOrderByAggregateInput
  }

  export type auditoriaScalarWhereWithAggregatesInput = {
    AND?: auditoriaScalarWhereWithAggregatesInput | auditoriaScalarWhereWithAggregatesInput[]
    OR?: auditoriaScalarWhereWithAggregatesInput[]
    NOT?: auditoriaScalarWhereWithAggregatesInput | auditoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"auditoria"> | number
    usuario_id?: IntWithAggregatesFilter<"auditoria"> | number
    accion?: EnumAccionWithAggregatesFilter<"auditoria"> | $Enums.Accion
    productoId?: IntNullableWithAggregatesFilter<"auditoria"> | number | null
    varianteId?: IntNullableWithAggregatesFilter<"auditoria"> | number | null
    ventaId?: IntNullableWithAggregatesFilter<"auditoria"> | number | null
    estanteId?: IntNullableWithAggregatesFilter<"auditoria"> | number | null
    categoriaId?: IntNullableWithAggregatesFilter<"auditoria"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"auditoria"> | Date | string
  }

  export type usuarioCreateInput = {
    nombre: string
    usuario: string
    email_phone: string
    password: string
    createdAt?: Date | string
    productos?: productosCreateNestedOneWithoutUsuarioInput
    auditorias?: auditoriaCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateInput = {
    id?: number
    productosId?: number | null
    nombre: string
    usuario: string
    email_phone: string
    password: string
    createdAt?: Date | string
    auditorias?: auditoriaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    email_phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productos?: productosUpdateOneWithoutUsuarioNestedInput
    auditorias?: auditoriaUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productosId?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    email_phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditorias?: auditoriaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioCreateManyInput = {
    id?: number
    productosId?: number | null
    nombre: string
    usuario: string
    email_phone: string
    password: string
    createdAt?: Date | string
  }

  export type usuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    email_phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productosId?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    email_phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ubicacionCreateInput = {
    nombre: string
    calle: string
    cp: string
    colonia: string
    celular: string
    createdAt?: Date | string
    estantes?: estantesCreateNestedManyWithoutUbicacionInput
  }

  export type ubicacionUncheckedCreateInput = {
    id?: number
    nombre: string
    calle: string
    cp: string
    colonia: string
    celular: string
    createdAt?: Date | string
    estantes?: estantesUncheckedCreateNestedManyWithoutUbicacionInput
  }

  export type ubicacionUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    calle?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    colonia?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estantes?: estantesUpdateManyWithoutUbicacionNestedInput
  }

  export type ubicacionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    calle?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    colonia?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estantes?: estantesUncheckedUpdateManyWithoutUbicacionNestedInput
  }

  export type ubicacionCreateManyInput = {
    id?: number
    nombre: string
    calle: string
    cp: string
    colonia: string
    celular: string
    createdAt?: Date | string
  }

  export type ubicacionUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    calle?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    colonia?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ubicacionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    calle?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    colonia?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type estantesCreateInput = {
    Seccion: string
    nivel: number
    pasillo: number
    createdAt?: Date | string
    ubicacion?: ubicacionCreateNestedOneWithoutEstantesInput
    productos?: productosCreateNestedManyWithoutEstantesInput
    auditorias?: auditoriaCreateNestedManyWithoutEstanteInput
  }

  export type estantesUncheckedCreateInput = {
    id?: number
    Seccion: string
    nivel: number
    pasillo: number
    createdAt?: Date | string
    ubicacionId?: number | null
    productos?: productosUncheckedCreateNestedManyWithoutEstantesInput
    auditorias?: auditoriaUncheckedCreateNestedManyWithoutEstanteInput
  }

  export type estantesUpdateInput = {
    Seccion?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    pasillo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ubicacion?: ubicacionUpdateOneWithoutEstantesNestedInput
    productos?: productosUpdateManyWithoutEstantesNestedInput
    auditorias?: auditoriaUpdateManyWithoutEstanteNestedInput
  }

  export type estantesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Seccion?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    pasillo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ubicacionId?: NullableIntFieldUpdateOperationsInput | number | null
    productos?: productosUncheckedUpdateManyWithoutEstantesNestedInput
    auditorias?: auditoriaUncheckedUpdateManyWithoutEstanteNestedInput
  }

  export type estantesCreateManyInput = {
    id?: number
    Seccion: string
    nivel: number
    pasillo: number
    createdAt?: Date | string
    ubicacionId?: number | null
  }

  export type estantesUpdateManyMutationInput = {
    Seccion?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    pasillo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type estantesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Seccion?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    pasillo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ubicacionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type categoriasCreateInput = {
    nombre: string
    createdAt?: Date | string
    productos?: productosCreateNestedManyWithoutCategoriaInput
    auditorias?: auditoriaCreateNestedManyWithoutCategoriaInput
  }

  export type categoriasUncheckedCreateInput = {
    id?: number
    nombre: string
    createdAt?: Date | string
    productos?: productosUncheckedCreateNestedManyWithoutCategoriaInput
    auditorias?: auditoriaUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type categoriasUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productos?: productosUpdateManyWithoutCategoriaNestedInput
    auditorias?: auditoriaUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productos?: productosUncheckedUpdateManyWithoutCategoriaNestedInput
    auditorias?: auditoriaUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriasCreateManyInput = {
    id?: number
    nombre: string
    createdAt?: Date | string
  }

  export type categoriasUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoriasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productosCreateInput = {
    createdAt?: Date | string
    categoria?: categoriasCreateNestedOneWithoutProductosInput
    variantes?: variantesCreateNestedManyWithoutProductoInput
    usuario?: usuarioCreateNestedManyWithoutProductosInput
    estantes?: estantesCreateNestedOneWithoutProductosInput
    auditorias?: auditoriaCreateNestedManyWithoutProductoInput
  }

  export type productosUncheckedCreateInput = {
    id?: number
    categoriaId?: number | null
    createdAt?: Date | string
    estantesId?: number | null
    variantes?: variantesUncheckedCreateNestedManyWithoutProductoInput
    usuario?: usuarioUncheckedCreateNestedManyWithoutProductosInput
    auditorias?: auditoriaUncheckedCreateNestedManyWithoutProductoInput
  }

  export type productosUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: categoriasUpdateOneWithoutProductosNestedInput
    variantes?: variantesUpdateManyWithoutProductoNestedInput
    usuario?: usuarioUpdateManyWithoutProductosNestedInput
    estantes?: estantesUpdateOneWithoutProductosNestedInput
    auditorias?: auditoriaUpdateManyWithoutProductoNestedInput
  }

  export type productosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estantesId?: NullableIntFieldUpdateOperationsInput | number | null
    variantes?: variantesUncheckedUpdateManyWithoutProductoNestedInput
    usuario?: usuarioUncheckedUpdateManyWithoutProductosNestedInput
    auditorias?: auditoriaUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type productosCreateManyInput = {
    id?: number
    categoriaId?: number | null
    createdAt?: Date | string
    estantesId?: number | null
  }

  export type productosUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estantesId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type variantesCreateInput = {
    locacion_id: number
    estante_id?: number | null
    foto: string
    nombre: string
    codigo: string
    color: string
    descripcion: string
    cantidad: number
    medidas: string
    precio_publico: number
    precio_contratista: number
    costo_compra: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ganacia_publico: number
    ganacia_contratista: number
    ganancias_stock: number
    producto?: productosCreateNestedOneWithoutVariantesInput
    ventas?: ventasCreateNestedManyWithoutVarianteInput
    auditorias?: auditoriaCreateNestedManyWithoutVarianteInput
  }

  export type variantesUncheckedCreateInput = {
    id?: number
    producto_id: number
    locacion_id: number
    estante_id?: number | null
    foto: string
    nombre: string
    codigo: string
    color: string
    descripcion: string
    cantidad: number
    medidas: string
    precio_publico: number
    precio_contratista: number
    costo_compra: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ganacia_publico: number
    ganacia_contratista: number
    ganancias_stock: number
    ventas?: ventasUncheckedCreateNestedManyWithoutVarianteInput
    auditorias?: auditoriaUncheckedCreateNestedManyWithoutVarianteInput
  }

  export type variantesUpdateInput = {
    locacion_id?: IntFieldUpdateOperationsInput | number
    estante_id?: NullableIntFieldUpdateOperationsInput | number | null
    foto?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    medidas?: StringFieldUpdateOperationsInput | string
    precio_publico?: FloatFieldUpdateOperationsInput | number
    precio_contratista?: FloatFieldUpdateOperationsInput | number
    costo_compra?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ganacia_publico?: FloatFieldUpdateOperationsInput | number
    ganacia_contratista?: FloatFieldUpdateOperationsInput | number
    ganancias_stock?: FloatFieldUpdateOperationsInput | number
    producto?: productosUpdateOneWithoutVariantesNestedInput
    ventas?: ventasUpdateManyWithoutVarianteNestedInput
    auditorias?: auditoriaUpdateManyWithoutVarianteNestedInput
  }

  export type variantesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    producto_id?: IntFieldUpdateOperationsInput | number
    locacion_id?: IntFieldUpdateOperationsInput | number
    estante_id?: NullableIntFieldUpdateOperationsInput | number | null
    foto?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    medidas?: StringFieldUpdateOperationsInput | string
    precio_publico?: FloatFieldUpdateOperationsInput | number
    precio_contratista?: FloatFieldUpdateOperationsInput | number
    costo_compra?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ganacia_publico?: FloatFieldUpdateOperationsInput | number
    ganacia_contratista?: FloatFieldUpdateOperationsInput | number
    ganancias_stock?: FloatFieldUpdateOperationsInput | number
    ventas?: ventasUncheckedUpdateManyWithoutVarianteNestedInput
    auditorias?: auditoriaUncheckedUpdateManyWithoutVarianteNestedInput
  }

  export type variantesCreateManyInput = {
    id?: number
    producto_id: number
    locacion_id: number
    estante_id?: number | null
    foto: string
    nombre: string
    codigo: string
    color: string
    descripcion: string
    cantidad: number
    medidas: string
    precio_publico: number
    precio_contratista: number
    costo_compra: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ganacia_publico: number
    ganacia_contratista: number
    ganancias_stock: number
  }

  export type variantesUpdateManyMutationInput = {
    locacion_id?: IntFieldUpdateOperationsInput | number
    estante_id?: NullableIntFieldUpdateOperationsInput | number | null
    foto?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    medidas?: StringFieldUpdateOperationsInput | string
    precio_publico?: FloatFieldUpdateOperationsInput | number
    precio_contratista?: FloatFieldUpdateOperationsInput | number
    costo_compra?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ganacia_publico?: FloatFieldUpdateOperationsInput | number
    ganacia_contratista?: FloatFieldUpdateOperationsInput | number
    ganancias_stock?: FloatFieldUpdateOperationsInput | number
  }

  export type variantesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    producto_id?: IntFieldUpdateOperationsInput | number
    locacion_id?: IntFieldUpdateOperationsInput | number
    estante_id?: NullableIntFieldUpdateOperationsInput | number | null
    foto?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    medidas?: StringFieldUpdateOperationsInput | string
    precio_publico?: FloatFieldUpdateOperationsInput | number
    precio_contratista?: FloatFieldUpdateOperationsInput | number
    costo_compra?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ganacia_publico?: FloatFieldUpdateOperationsInput | number
    ganacia_contratista?: FloatFieldUpdateOperationsInput | number
    ganancias_stock?: FloatFieldUpdateOperationsInput | number
  }

  export type ventasCreateInput = {
    cantidad: number
    total_venta: number
    fecha_venta?: Date | string
    nombre_cliente: string
    contacto_cliente: string
    costos_extras: number
    motivo_costo_extra: string
    precio_publico: number
    precio_contratista: number
    costo_compra: number
    variante?: variantesCreateNestedOneWithoutVentasInput
    costosExtras?: costosExtrasCreateNestedManyWithoutVentaInput
    auditorias?: auditoriaCreateNestedManyWithoutVentaInput
  }

  export type ventasUncheckedCreateInput = {
    id?: number
    variante_id: number
    cantidad: number
    total_venta: number
    fecha_venta?: Date | string
    nombre_cliente: string
    contacto_cliente: string
    costos_extras: number
    motivo_costo_extra: string
    precio_publico: number
    precio_contratista: number
    costo_compra: number
    costosExtras?: costosExtrasUncheckedCreateNestedManyWithoutVentaInput
    auditorias?: auditoriaUncheckedCreateNestedManyWithoutVentaInput
  }

  export type ventasUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    total_venta?: FloatFieldUpdateOperationsInput | number
    fecha_venta?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre_cliente?: StringFieldUpdateOperationsInput | string
    contacto_cliente?: StringFieldUpdateOperationsInput | string
    costos_extras?: FloatFieldUpdateOperationsInput | number
    motivo_costo_extra?: StringFieldUpdateOperationsInput | string
    precio_publico?: FloatFieldUpdateOperationsInput | number
    precio_contratista?: FloatFieldUpdateOperationsInput | number
    costo_compra?: FloatFieldUpdateOperationsInput | number
    variante?: variantesUpdateOneWithoutVentasNestedInput
    costosExtras?: costosExtrasUpdateManyWithoutVentaNestedInput
    auditorias?: auditoriaUpdateManyWithoutVentaNestedInput
  }

  export type ventasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    variante_id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    total_venta?: FloatFieldUpdateOperationsInput | number
    fecha_venta?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre_cliente?: StringFieldUpdateOperationsInput | string
    contacto_cliente?: StringFieldUpdateOperationsInput | string
    costos_extras?: FloatFieldUpdateOperationsInput | number
    motivo_costo_extra?: StringFieldUpdateOperationsInput | string
    precio_publico?: FloatFieldUpdateOperationsInput | number
    precio_contratista?: FloatFieldUpdateOperationsInput | number
    costo_compra?: FloatFieldUpdateOperationsInput | number
    costosExtras?: costosExtrasUncheckedUpdateManyWithoutVentaNestedInput
    auditorias?: auditoriaUncheckedUpdateManyWithoutVentaNestedInput
  }

  export type ventasCreateManyInput = {
    id?: number
    variante_id: number
    cantidad: number
    total_venta: number
    fecha_venta?: Date | string
    nombre_cliente: string
    contacto_cliente: string
    costos_extras: number
    motivo_costo_extra: string
    precio_publico: number
    precio_contratista: number
    costo_compra: number
  }

  export type ventasUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    total_venta?: FloatFieldUpdateOperationsInput | number
    fecha_venta?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre_cliente?: StringFieldUpdateOperationsInput | string
    contacto_cliente?: StringFieldUpdateOperationsInput | string
    costos_extras?: FloatFieldUpdateOperationsInput | number
    motivo_costo_extra?: StringFieldUpdateOperationsInput | string
    precio_publico?: FloatFieldUpdateOperationsInput | number
    precio_contratista?: FloatFieldUpdateOperationsInput | number
    costo_compra?: FloatFieldUpdateOperationsInput | number
  }

  export type ventasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    variante_id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    total_venta?: FloatFieldUpdateOperationsInput | number
    fecha_venta?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre_cliente?: StringFieldUpdateOperationsInput | string
    contacto_cliente?: StringFieldUpdateOperationsInput | string
    costos_extras?: FloatFieldUpdateOperationsInput | number
    motivo_costo_extra?: StringFieldUpdateOperationsInput | string
    precio_publico?: FloatFieldUpdateOperationsInput | number
    precio_contratista?: FloatFieldUpdateOperationsInput | number
    costo_compra?: FloatFieldUpdateOperationsInput | number
  }

  export type costosExtrasCreateInput = {
    motivo: string
    costo: number
    createdAt?: Date | string
    venta: ventasCreateNestedOneWithoutCostosExtrasInput
  }

  export type costosExtrasUncheckedCreateInput = {
    id?: number
    venta_id: number
    motivo: string
    costo: number
    createdAt?: Date | string
  }

  export type costosExtrasUpdateInput = {
    motivo?: StringFieldUpdateOperationsInput | string
    costo?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    venta?: ventasUpdateOneRequiredWithoutCostosExtrasNestedInput
  }

  export type costosExtrasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    venta_id?: IntFieldUpdateOperationsInput | number
    motivo?: StringFieldUpdateOperationsInput | string
    costo?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type costosExtrasCreateManyInput = {
    id?: number
    venta_id: number
    motivo: string
    costo: number
    createdAt?: Date | string
  }

  export type costosExtrasUpdateManyMutationInput = {
    motivo?: StringFieldUpdateOperationsInput | string
    costo?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type costosExtrasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    venta_id?: IntFieldUpdateOperationsInput | number
    motivo?: StringFieldUpdateOperationsInput | string
    costo?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type auditoriaCreateInput = {
    accion: $Enums.Accion
    createdAt?: Date | string
    producto?: productosCreateNestedOneWithoutAuditoriasInput
    variante?: variantesCreateNestedOneWithoutAuditoriasInput
    venta?: ventasCreateNestedOneWithoutAuditoriasInput
    estante?: estantesCreateNestedOneWithoutAuditoriasInput
    categoria?: categoriasCreateNestedOneWithoutAuditoriasInput
    usuario: usuarioCreateNestedOneWithoutAuditoriasInput
  }

  export type auditoriaUncheckedCreateInput = {
    id?: number
    usuario_id: number
    accion: $Enums.Accion
    productoId?: number | null
    varianteId?: number | null
    ventaId?: number | null
    estanteId?: number | null
    categoriaId?: number | null
    createdAt?: Date | string
  }

  export type auditoriaUpdateInput = {
    accion?: EnumAccionFieldUpdateOperationsInput | $Enums.Accion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    producto?: productosUpdateOneWithoutAuditoriasNestedInput
    variante?: variantesUpdateOneWithoutAuditoriasNestedInput
    venta?: ventasUpdateOneWithoutAuditoriasNestedInput
    estante?: estantesUpdateOneWithoutAuditoriasNestedInput
    categoria?: categoriasUpdateOneWithoutAuditoriasNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutAuditoriasNestedInput
  }

  export type auditoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    accion?: EnumAccionFieldUpdateOperationsInput | $Enums.Accion
    productoId?: NullableIntFieldUpdateOperationsInput | number | null
    varianteId?: NullableIntFieldUpdateOperationsInput | number | null
    ventaId?: NullableIntFieldUpdateOperationsInput | number | null
    estanteId?: NullableIntFieldUpdateOperationsInput | number | null
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type auditoriaCreateManyInput = {
    id?: number
    usuario_id: number
    accion: $Enums.Accion
    productoId?: number | null
    varianteId?: number | null
    ventaId?: number | null
    estanteId?: number | null
    categoriaId?: number | null
    createdAt?: Date | string
  }

  export type auditoriaUpdateManyMutationInput = {
    accion?: EnumAccionFieldUpdateOperationsInput | $Enums.Accion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type auditoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    accion?: EnumAccionFieldUpdateOperationsInput | $Enums.Accion
    productoId?: NullableIntFieldUpdateOperationsInput | number | null
    varianteId?: NullableIntFieldUpdateOperationsInput | number | null
    ventaId?: NullableIntFieldUpdateOperationsInput | number | null
    estanteId?: NullableIntFieldUpdateOperationsInput | number | null
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type ProductosNullableScalarRelationFilter = {
    is?: productosWhereInput | null
    isNot?: productosWhereInput | null
  }

  export type AuditoriaListRelationFilter = {
    every?: auditoriaWhereInput
    some?: auditoriaWhereInput
    none?: auditoriaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type auditoriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuarioCountOrderByAggregateInput = {
    id?: SortOrder
    productosId?: SortOrder
    nombre?: SortOrder
    usuario?: SortOrder
    email_phone?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type usuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    productosId?: SortOrder
  }

  export type usuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    productosId?: SortOrder
    nombre?: SortOrder
    usuario?: SortOrder
    email_phone?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type usuarioMinOrderByAggregateInput = {
    id?: SortOrder
    productosId?: SortOrder
    nombre?: SortOrder
    usuario?: SortOrder
    email_phone?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type usuarioSumOrderByAggregateInput = {
    id?: SortOrder
    productosId?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type EstantesListRelationFilter = {
    every?: estantesWhereInput
    some?: estantesWhereInput
    none?: estantesWhereInput
  }

  export type estantesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ubicacionCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    calle?: SortOrder
    cp?: SortOrder
    colonia?: SortOrder
    celular?: SortOrder
    createdAt?: SortOrder
  }

  export type ubicacionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ubicacionMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    calle?: SortOrder
    cp?: SortOrder
    colonia?: SortOrder
    celular?: SortOrder
    createdAt?: SortOrder
  }

  export type ubicacionMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    calle?: SortOrder
    cp?: SortOrder
    colonia?: SortOrder
    celular?: SortOrder
    createdAt?: SortOrder
  }

  export type ubicacionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UbicacionNullableScalarRelationFilter = {
    is?: ubicacionWhereInput | null
    isNot?: ubicacionWhereInput | null
  }

  export type ProductosListRelationFilter = {
    every?: productosWhereInput
    some?: productosWhereInput
    none?: productosWhereInput
  }

  export type productosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type estantesCountOrderByAggregateInput = {
    id?: SortOrder
    Seccion?: SortOrder
    nivel?: SortOrder
    pasillo?: SortOrder
    createdAt?: SortOrder
    ubicacionId?: SortOrder
  }

  export type estantesAvgOrderByAggregateInput = {
    id?: SortOrder
    nivel?: SortOrder
    pasillo?: SortOrder
    ubicacionId?: SortOrder
  }

  export type estantesMaxOrderByAggregateInput = {
    id?: SortOrder
    Seccion?: SortOrder
    nivel?: SortOrder
    pasillo?: SortOrder
    createdAt?: SortOrder
    ubicacionId?: SortOrder
  }

  export type estantesMinOrderByAggregateInput = {
    id?: SortOrder
    Seccion?: SortOrder
    nivel?: SortOrder
    pasillo?: SortOrder
    createdAt?: SortOrder
    ubicacionId?: SortOrder
  }

  export type estantesSumOrderByAggregateInput = {
    id?: SortOrder
    nivel?: SortOrder
    pasillo?: SortOrder
    ubicacionId?: SortOrder
  }

  export type categoriasCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    createdAt?: SortOrder
  }

  export type categoriasAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoriasMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    createdAt?: SortOrder
  }

  export type categoriasMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    createdAt?: SortOrder
  }

  export type categoriasSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriasNullableScalarRelationFilter = {
    is?: categoriasWhereInput | null
    isNot?: categoriasWhereInput | null
  }

  export type VariantesListRelationFilter = {
    every?: variantesWhereInput
    some?: variantesWhereInput
    none?: variantesWhereInput
  }

  export type UsuarioListRelationFilter = {
    every?: usuarioWhereInput
    some?: usuarioWhereInput
    none?: usuarioWhereInput
  }

  export type EstantesNullableScalarRelationFilter = {
    is?: estantesWhereInput | null
    isNot?: estantesWhereInput | null
  }

  export type variantesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productosCountOrderByAggregateInput = {
    id?: SortOrder
    categoriaId?: SortOrder
    createdAt?: SortOrder
    estantesId?: SortOrder
  }

  export type productosAvgOrderByAggregateInput = {
    id?: SortOrder
    categoriaId?: SortOrder
    estantesId?: SortOrder
  }

  export type productosMaxOrderByAggregateInput = {
    id?: SortOrder
    categoriaId?: SortOrder
    createdAt?: SortOrder
    estantesId?: SortOrder
  }

  export type productosMinOrderByAggregateInput = {
    id?: SortOrder
    categoriaId?: SortOrder
    createdAt?: SortOrder
    estantesId?: SortOrder
  }

  export type productosSumOrderByAggregateInput = {
    id?: SortOrder
    categoriaId?: SortOrder
    estantesId?: SortOrder
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

  export type VentasListRelationFilter = {
    every?: ventasWhereInput
    some?: ventasWhereInput
    none?: ventasWhereInput
  }

  export type ventasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type variantesCountOrderByAggregateInput = {
    id?: SortOrder
    producto_id?: SortOrder
    locacion_id?: SortOrder
    estante_id?: SortOrder
    foto?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    color?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
    medidas?: SortOrder
    precio_publico?: SortOrder
    precio_contratista?: SortOrder
    costo_compra?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ganacia_publico?: SortOrder
    ganacia_contratista?: SortOrder
    ganancias_stock?: SortOrder
  }

  export type variantesAvgOrderByAggregateInput = {
    id?: SortOrder
    producto_id?: SortOrder
    locacion_id?: SortOrder
    estante_id?: SortOrder
    cantidad?: SortOrder
    precio_publico?: SortOrder
    precio_contratista?: SortOrder
    costo_compra?: SortOrder
    ganacia_publico?: SortOrder
    ganacia_contratista?: SortOrder
    ganancias_stock?: SortOrder
  }

  export type variantesMaxOrderByAggregateInput = {
    id?: SortOrder
    producto_id?: SortOrder
    locacion_id?: SortOrder
    estante_id?: SortOrder
    foto?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    color?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
    medidas?: SortOrder
    precio_publico?: SortOrder
    precio_contratista?: SortOrder
    costo_compra?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ganacia_publico?: SortOrder
    ganacia_contratista?: SortOrder
    ganancias_stock?: SortOrder
  }

  export type variantesMinOrderByAggregateInput = {
    id?: SortOrder
    producto_id?: SortOrder
    locacion_id?: SortOrder
    estante_id?: SortOrder
    foto?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    color?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
    medidas?: SortOrder
    precio_publico?: SortOrder
    precio_contratista?: SortOrder
    costo_compra?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ganacia_publico?: SortOrder
    ganacia_contratista?: SortOrder
    ganancias_stock?: SortOrder
  }

  export type variantesSumOrderByAggregateInput = {
    id?: SortOrder
    producto_id?: SortOrder
    locacion_id?: SortOrder
    estante_id?: SortOrder
    cantidad?: SortOrder
    precio_publico?: SortOrder
    precio_contratista?: SortOrder
    costo_compra?: SortOrder
    ganacia_publico?: SortOrder
    ganacia_contratista?: SortOrder
    ganancias_stock?: SortOrder
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

  export type VariantesNullableScalarRelationFilter = {
    is?: variantesWhereInput | null
    isNot?: variantesWhereInput | null
  }

  export type CostosExtrasListRelationFilter = {
    every?: costosExtrasWhereInput
    some?: costosExtrasWhereInput
    none?: costosExtrasWhereInput
  }

  export type costosExtrasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ventasCountOrderByAggregateInput = {
    id?: SortOrder
    variante_id?: SortOrder
    cantidad?: SortOrder
    total_venta?: SortOrder
    fecha_venta?: SortOrder
    nombre_cliente?: SortOrder
    contacto_cliente?: SortOrder
    costos_extras?: SortOrder
    motivo_costo_extra?: SortOrder
    precio_publico?: SortOrder
    precio_contratista?: SortOrder
    costo_compra?: SortOrder
  }

  export type ventasAvgOrderByAggregateInput = {
    id?: SortOrder
    variante_id?: SortOrder
    cantidad?: SortOrder
    total_venta?: SortOrder
    costos_extras?: SortOrder
    precio_publico?: SortOrder
    precio_contratista?: SortOrder
    costo_compra?: SortOrder
  }

  export type ventasMaxOrderByAggregateInput = {
    id?: SortOrder
    variante_id?: SortOrder
    cantidad?: SortOrder
    total_venta?: SortOrder
    fecha_venta?: SortOrder
    nombre_cliente?: SortOrder
    contacto_cliente?: SortOrder
    costos_extras?: SortOrder
    motivo_costo_extra?: SortOrder
    precio_publico?: SortOrder
    precio_contratista?: SortOrder
    costo_compra?: SortOrder
  }

  export type ventasMinOrderByAggregateInput = {
    id?: SortOrder
    variante_id?: SortOrder
    cantidad?: SortOrder
    total_venta?: SortOrder
    fecha_venta?: SortOrder
    nombre_cliente?: SortOrder
    contacto_cliente?: SortOrder
    costos_extras?: SortOrder
    motivo_costo_extra?: SortOrder
    precio_publico?: SortOrder
    precio_contratista?: SortOrder
    costo_compra?: SortOrder
  }

  export type ventasSumOrderByAggregateInput = {
    id?: SortOrder
    variante_id?: SortOrder
    cantidad?: SortOrder
    total_venta?: SortOrder
    costos_extras?: SortOrder
    precio_publico?: SortOrder
    precio_contratista?: SortOrder
    costo_compra?: SortOrder
  }

  export type VentasScalarRelationFilter = {
    is?: ventasWhereInput
    isNot?: ventasWhereInput
  }

  export type costosExtrasCountOrderByAggregateInput = {
    id?: SortOrder
    venta_id?: SortOrder
    motivo?: SortOrder
    costo?: SortOrder
    createdAt?: SortOrder
  }

  export type costosExtrasAvgOrderByAggregateInput = {
    id?: SortOrder
    venta_id?: SortOrder
    costo?: SortOrder
  }

  export type costosExtrasMaxOrderByAggregateInput = {
    id?: SortOrder
    venta_id?: SortOrder
    motivo?: SortOrder
    costo?: SortOrder
    createdAt?: SortOrder
  }

  export type costosExtrasMinOrderByAggregateInput = {
    id?: SortOrder
    venta_id?: SortOrder
    motivo?: SortOrder
    costo?: SortOrder
    createdAt?: SortOrder
  }

  export type costosExtrasSumOrderByAggregateInput = {
    id?: SortOrder
    venta_id?: SortOrder
    costo?: SortOrder
  }

  export type EnumAccionFilter<$PrismaModel = never> = {
    equals?: $Enums.Accion | EnumAccionFieldRefInput<$PrismaModel>
    in?: $Enums.Accion[] | ListEnumAccionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Accion[] | ListEnumAccionFieldRefInput<$PrismaModel>
    not?: NestedEnumAccionFilter<$PrismaModel> | $Enums.Accion
  }

  export type VentasNullableScalarRelationFilter = {
    is?: ventasWhereInput | null
    isNot?: ventasWhereInput | null
  }

  export type UsuarioScalarRelationFilter = {
    is?: usuarioWhereInput
    isNot?: usuarioWhereInput
  }

  export type auditoriaCountOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    accion?: SortOrder
    productoId?: SortOrder
    varianteId?: SortOrder
    ventaId?: SortOrder
    estanteId?: SortOrder
    categoriaId?: SortOrder
    createdAt?: SortOrder
  }

  export type auditoriaAvgOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    productoId?: SortOrder
    varianteId?: SortOrder
    ventaId?: SortOrder
    estanteId?: SortOrder
    categoriaId?: SortOrder
  }

  export type auditoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    accion?: SortOrder
    productoId?: SortOrder
    varianteId?: SortOrder
    ventaId?: SortOrder
    estanteId?: SortOrder
    categoriaId?: SortOrder
    createdAt?: SortOrder
  }

  export type auditoriaMinOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    accion?: SortOrder
    productoId?: SortOrder
    varianteId?: SortOrder
    ventaId?: SortOrder
    estanteId?: SortOrder
    categoriaId?: SortOrder
    createdAt?: SortOrder
  }

  export type auditoriaSumOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    productoId?: SortOrder
    varianteId?: SortOrder
    ventaId?: SortOrder
    estanteId?: SortOrder
    categoriaId?: SortOrder
  }

  export type EnumAccionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Accion | EnumAccionFieldRefInput<$PrismaModel>
    in?: $Enums.Accion[] | ListEnumAccionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Accion[] | ListEnumAccionFieldRefInput<$PrismaModel>
    not?: NestedEnumAccionWithAggregatesFilter<$PrismaModel> | $Enums.Accion
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccionFilter<$PrismaModel>
    _max?: NestedEnumAccionFilter<$PrismaModel>
  }

  export type productosCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<productosCreateWithoutUsuarioInput, productosUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: productosCreateOrConnectWithoutUsuarioInput
    connect?: productosWhereUniqueInput
  }

  export type auditoriaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<auditoriaCreateWithoutUsuarioInput, auditoriaUncheckedCreateWithoutUsuarioInput> | auditoriaCreateWithoutUsuarioInput[] | auditoriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: auditoriaCreateOrConnectWithoutUsuarioInput | auditoriaCreateOrConnectWithoutUsuarioInput[]
    createMany?: auditoriaCreateManyUsuarioInputEnvelope
    connect?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
  }

  export type auditoriaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<auditoriaCreateWithoutUsuarioInput, auditoriaUncheckedCreateWithoutUsuarioInput> | auditoriaCreateWithoutUsuarioInput[] | auditoriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: auditoriaCreateOrConnectWithoutUsuarioInput | auditoriaCreateOrConnectWithoutUsuarioInput[]
    createMany?: auditoriaCreateManyUsuarioInputEnvelope
    connect?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type productosUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<productosCreateWithoutUsuarioInput, productosUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: productosCreateOrConnectWithoutUsuarioInput
    upsert?: productosUpsertWithoutUsuarioInput
    disconnect?: productosWhereInput | boolean
    delete?: productosWhereInput | boolean
    connect?: productosWhereUniqueInput
    update?: XOR<XOR<productosUpdateToOneWithWhereWithoutUsuarioInput, productosUpdateWithoutUsuarioInput>, productosUncheckedUpdateWithoutUsuarioInput>
  }

  export type auditoriaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<auditoriaCreateWithoutUsuarioInput, auditoriaUncheckedCreateWithoutUsuarioInput> | auditoriaCreateWithoutUsuarioInput[] | auditoriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: auditoriaCreateOrConnectWithoutUsuarioInput | auditoriaCreateOrConnectWithoutUsuarioInput[]
    upsert?: auditoriaUpsertWithWhereUniqueWithoutUsuarioInput | auditoriaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: auditoriaCreateManyUsuarioInputEnvelope
    set?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    disconnect?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    delete?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    connect?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    update?: auditoriaUpdateWithWhereUniqueWithoutUsuarioInput | auditoriaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: auditoriaUpdateManyWithWhereWithoutUsuarioInput | auditoriaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: auditoriaScalarWhereInput | auditoriaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type auditoriaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<auditoriaCreateWithoutUsuarioInput, auditoriaUncheckedCreateWithoutUsuarioInput> | auditoriaCreateWithoutUsuarioInput[] | auditoriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: auditoriaCreateOrConnectWithoutUsuarioInput | auditoriaCreateOrConnectWithoutUsuarioInput[]
    upsert?: auditoriaUpsertWithWhereUniqueWithoutUsuarioInput | auditoriaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: auditoriaCreateManyUsuarioInputEnvelope
    set?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    disconnect?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    delete?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    connect?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    update?: auditoriaUpdateWithWhereUniqueWithoutUsuarioInput | auditoriaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: auditoriaUpdateManyWithWhereWithoutUsuarioInput | auditoriaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: auditoriaScalarWhereInput | auditoriaScalarWhereInput[]
  }

  export type estantesCreateNestedManyWithoutUbicacionInput = {
    create?: XOR<estantesCreateWithoutUbicacionInput, estantesUncheckedCreateWithoutUbicacionInput> | estantesCreateWithoutUbicacionInput[] | estantesUncheckedCreateWithoutUbicacionInput[]
    connectOrCreate?: estantesCreateOrConnectWithoutUbicacionInput | estantesCreateOrConnectWithoutUbicacionInput[]
    createMany?: estantesCreateManyUbicacionInputEnvelope
    connect?: estantesWhereUniqueInput | estantesWhereUniqueInput[]
  }

  export type estantesUncheckedCreateNestedManyWithoutUbicacionInput = {
    create?: XOR<estantesCreateWithoutUbicacionInput, estantesUncheckedCreateWithoutUbicacionInput> | estantesCreateWithoutUbicacionInput[] | estantesUncheckedCreateWithoutUbicacionInput[]
    connectOrCreate?: estantesCreateOrConnectWithoutUbicacionInput | estantesCreateOrConnectWithoutUbicacionInput[]
    createMany?: estantesCreateManyUbicacionInputEnvelope
    connect?: estantesWhereUniqueInput | estantesWhereUniqueInput[]
  }

  export type estantesUpdateManyWithoutUbicacionNestedInput = {
    create?: XOR<estantesCreateWithoutUbicacionInput, estantesUncheckedCreateWithoutUbicacionInput> | estantesCreateWithoutUbicacionInput[] | estantesUncheckedCreateWithoutUbicacionInput[]
    connectOrCreate?: estantesCreateOrConnectWithoutUbicacionInput | estantesCreateOrConnectWithoutUbicacionInput[]
    upsert?: estantesUpsertWithWhereUniqueWithoutUbicacionInput | estantesUpsertWithWhereUniqueWithoutUbicacionInput[]
    createMany?: estantesCreateManyUbicacionInputEnvelope
    set?: estantesWhereUniqueInput | estantesWhereUniqueInput[]
    disconnect?: estantesWhereUniqueInput | estantesWhereUniqueInput[]
    delete?: estantesWhereUniqueInput | estantesWhereUniqueInput[]
    connect?: estantesWhereUniqueInput | estantesWhereUniqueInput[]
    update?: estantesUpdateWithWhereUniqueWithoutUbicacionInput | estantesUpdateWithWhereUniqueWithoutUbicacionInput[]
    updateMany?: estantesUpdateManyWithWhereWithoutUbicacionInput | estantesUpdateManyWithWhereWithoutUbicacionInput[]
    deleteMany?: estantesScalarWhereInput | estantesScalarWhereInput[]
  }

  export type estantesUncheckedUpdateManyWithoutUbicacionNestedInput = {
    create?: XOR<estantesCreateWithoutUbicacionInput, estantesUncheckedCreateWithoutUbicacionInput> | estantesCreateWithoutUbicacionInput[] | estantesUncheckedCreateWithoutUbicacionInput[]
    connectOrCreate?: estantesCreateOrConnectWithoutUbicacionInput | estantesCreateOrConnectWithoutUbicacionInput[]
    upsert?: estantesUpsertWithWhereUniqueWithoutUbicacionInput | estantesUpsertWithWhereUniqueWithoutUbicacionInput[]
    createMany?: estantesCreateManyUbicacionInputEnvelope
    set?: estantesWhereUniqueInput | estantesWhereUniqueInput[]
    disconnect?: estantesWhereUniqueInput | estantesWhereUniqueInput[]
    delete?: estantesWhereUniqueInput | estantesWhereUniqueInput[]
    connect?: estantesWhereUniqueInput | estantesWhereUniqueInput[]
    update?: estantesUpdateWithWhereUniqueWithoutUbicacionInput | estantesUpdateWithWhereUniqueWithoutUbicacionInput[]
    updateMany?: estantesUpdateManyWithWhereWithoutUbicacionInput | estantesUpdateManyWithWhereWithoutUbicacionInput[]
    deleteMany?: estantesScalarWhereInput | estantesScalarWhereInput[]
  }

  export type ubicacionCreateNestedOneWithoutEstantesInput = {
    create?: XOR<ubicacionCreateWithoutEstantesInput, ubicacionUncheckedCreateWithoutEstantesInput>
    connectOrCreate?: ubicacionCreateOrConnectWithoutEstantesInput
    connect?: ubicacionWhereUniqueInput
  }

  export type productosCreateNestedManyWithoutEstantesInput = {
    create?: XOR<productosCreateWithoutEstantesInput, productosUncheckedCreateWithoutEstantesInput> | productosCreateWithoutEstantesInput[] | productosUncheckedCreateWithoutEstantesInput[]
    connectOrCreate?: productosCreateOrConnectWithoutEstantesInput | productosCreateOrConnectWithoutEstantesInput[]
    createMany?: productosCreateManyEstantesInputEnvelope
    connect?: productosWhereUniqueInput | productosWhereUniqueInput[]
  }

  export type auditoriaCreateNestedManyWithoutEstanteInput = {
    create?: XOR<auditoriaCreateWithoutEstanteInput, auditoriaUncheckedCreateWithoutEstanteInput> | auditoriaCreateWithoutEstanteInput[] | auditoriaUncheckedCreateWithoutEstanteInput[]
    connectOrCreate?: auditoriaCreateOrConnectWithoutEstanteInput | auditoriaCreateOrConnectWithoutEstanteInput[]
    createMany?: auditoriaCreateManyEstanteInputEnvelope
    connect?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
  }

  export type productosUncheckedCreateNestedManyWithoutEstantesInput = {
    create?: XOR<productosCreateWithoutEstantesInput, productosUncheckedCreateWithoutEstantesInput> | productosCreateWithoutEstantesInput[] | productosUncheckedCreateWithoutEstantesInput[]
    connectOrCreate?: productosCreateOrConnectWithoutEstantesInput | productosCreateOrConnectWithoutEstantesInput[]
    createMany?: productosCreateManyEstantesInputEnvelope
    connect?: productosWhereUniqueInput | productosWhereUniqueInput[]
  }

  export type auditoriaUncheckedCreateNestedManyWithoutEstanteInput = {
    create?: XOR<auditoriaCreateWithoutEstanteInput, auditoriaUncheckedCreateWithoutEstanteInput> | auditoriaCreateWithoutEstanteInput[] | auditoriaUncheckedCreateWithoutEstanteInput[]
    connectOrCreate?: auditoriaCreateOrConnectWithoutEstanteInput | auditoriaCreateOrConnectWithoutEstanteInput[]
    createMany?: auditoriaCreateManyEstanteInputEnvelope
    connect?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
  }

  export type ubicacionUpdateOneWithoutEstantesNestedInput = {
    create?: XOR<ubicacionCreateWithoutEstantesInput, ubicacionUncheckedCreateWithoutEstantesInput>
    connectOrCreate?: ubicacionCreateOrConnectWithoutEstantesInput
    upsert?: ubicacionUpsertWithoutEstantesInput
    disconnect?: ubicacionWhereInput | boolean
    delete?: ubicacionWhereInput | boolean
    connect?: ubicacionWhereUniqueInput
    update?: XOR<XOR<ubicacionUpdateToOneWithWhereWithoutEstantesInput, ubicacionUpdateWithoutEstantesInput>, ubicacionUncheckedUpdateWithoutEstantesInput>
  }

  export type productosUpdateManyWithoutEstantesNestedInput = {
    create?: XOR<productosCreateWithoutEstantesInput, productosUncheckedCreateWithoutEstantesInput> | productosCreateWithoutEstantesInput[] | productosUncheckedCreateWithoutEstantesInput[]
    connectOrCreate?: productosCreateOrConnectWithoutEstantesInput | productosCreateOrConnectWithoutEstantesInput[]
    upsert?: productosUpsertWithWhereUniqueWithoutEstantesInput | productosUpsertWithWhereUniqueWithoutEstantesInput[]
    createMany?: productosCreateManyEstantesInputEnvelope
    set?: productosWhereUniqueInput | productosWhereUniqueInput[]
    disconnect?: productosWhereUniqueInput | productosWhereUniqueInput[]
    delete?: productosWhereUniqueInput | productosWhereUniqueInput[]
    connect?: productosWhereUniqueInput | productosWhereUniqueInput[]
    update?: productosUpdateWithWhereUniqueWithoutEstantesInput | productosUpdateWithWhereUniqueWithoutEstantesInput[]
    updateMany?: productosUpdateManyWithWhereWithoutEstantesInput | productosUpdateManyWithWhereWithoutEstantesInput[]
    deleteMany?: productosScalarWhereInput | productosScalarWhereInput[]
  }

  export type auditoriaUpdateManyWithoutEstanteNestedInput = {
    create?: XOR<auditoriaCreateWithoutEstanteInput, auditoriaUncheckedCreateWithoutEstanteInput> | auditoriaCreateWithoutEstanteInput[] | auditoriaUncheckedCreateWithoutEstanteInput[]
    connectOrCreate?: auditoriaCreateOrConnectWithoutEstanteInput | auditoriaCreateOrConnectWithoutEstanteInput[]
    upsert?: auditoriaUpsertWithWhereUniqueWithoutEstanteInput | auditoriaUpsertWithWhereUniqueWithoutEstanteInput[]
    createMany?: auditoriaCreateManyEstanteInputEnvelope
    set?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    disconnect?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    delete?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    connect?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    update?: auditoriaUpdateWithWhereUniqueWithoutEstanteInput | auditoriaUpdateWithWhereUniqueWithoutEstanteInput[]
    updateMany?: auditoriaUpdateManyWithWhereWithoutEstanteInput | auditoriaUpdateManyWithWhereWithoutEstanteInput[]
    deleteMany?: auditoriaScalarWhereInput | auditoriaScalarWhereInput[]
  }

  export type productosUncheckedUpdateManyWithoutEstantesNestedInput = {
    create?: XOR<productosCreateWithoutEstantesInput, productosUncheckedCreateWithoutEstantesInput> | productosCreateWithoutEstantesInput[] | productosUncheckedCreateWithoutEstantesInput[]
    connectOrCreate?: productosCreateOrConnectWithoutEstantesInput | productosCreateOrConnectWithoutEstantesInput[]
    upsert?: productosUpsertWithWhereUniqueWithoutEstantesInput | productosUpsertWithWhereUniqueWithoutEstantesInput[]
    createMany?: productosCreateManyEstantesInputEnvelope
    set?: productosWhereUniqueInput | productosWhereUniqueInput[]
    disconnect?: productosWhereUniqueInput | productosWhereUniqueInput[]
    delete?: productosWhereUniqueInput | productosWhereUniqueInput[]
    connect?: productosWhereUniqueInput | productosWhereUniqueInput[]
    update?: productosUpdateWithWhereUniqueWithoutEstantesInput | productosUpdateWithWhereUniqueWithoutEstantesInput[]
    updateMany?: productosUpdateManyWithWhereWithoutEstantesInput | productosUpdateManyWithWhereWithoutEstantesInput[]
    deleteMany?: productosScalarWhereInput | productosScalarWhereInput[]
  }

  export type auditoriaUncheckedUpdateManyWithoutEstanteNestedInput = {
    create?: XOR<auditoriaCreateWithoutEstanteInput, auditoriaUncheckedCreateWithoutEstanteInput> | auditoriaCreateWithoutEstanteInput[] | auditoriaUncheckedCreateWithoutEstanteInput[]
    connectOrCreate?: auditoriaCreateOrConnectWithoutEstanteInput | auditoriaCreateOrConnectWithoutEstanteInput[]
    upsert?: auditoriaUpsertWithWhereUniqueWithoutEstanteInput | auditoriaUpsertWithWhereUniqueWithoutEstanteInput[]
    createMany?: auditoriaCreateManyEstanteInputEnvelope
    set?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    disconnect?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    delete?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    connect?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    update?: auditoriaUpdateWithWhereUniqueWithoutEstanteInput | auditoriaUpdateWithWhereUniqueWithoutEstanteInput[]
    updateMany?: auditoriaUpdateManyWithWhereWithoutEstanteInput | auditoriaUpdateManyWithWhereWithoutEstanteInput[]
    deleteMany?: auditoriaScalarWhereInput | auditoriaScalarWhereInput[]
  }

  export type productosCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<productosCreateWithoutCategoriaInput, productosUncheckedCreateWithoutCategoriaInput> | productosCreateWithoutCategoriaInput[] | productosUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: productosCreateOrConnectWithoutCategoriaInput | productosCreateOrConnectWithoutCategoriaInput[]
    createMany?: productosCreateManyCategoriaInputEnvelope
    connect?: productosWhereUniqueInput | productosWhereUniqueInput[]
  }

  export type auditoriaCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<auditoriaCreateWithoutCategoriaInput, auditoriaUncheckedCreateWithoutCategoriaInput> | auditoriaCreateWithoutCategoriaInput[] | auditoriaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: auditoriaCreateOrConnectWithoutCategoriaInput | auditoriaCreateOrConnectWithoutCategoriaInput[]
    createMany?: auditoriaCreateManyCategoriaInputEnvelope
    connect?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
  }

  export type productosUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<productosCreateWithoutCategoriaInput, productosUncheckedCreateWithoutCategoriaInput> | productosCreateWithoutCategoriaInput[] | productosUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: productosCreateOrConnectWithoutCategoriaInput | productosCreateOrConnectWithoutCategoriaInput[]
    createMany?: productosCreateManyCategoriaInputEnvelope
    connect?: productosWhereUniqueInput | productosWhereUniqueInput[]
  }

  export type auditoriaUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<auditoriaCreateWithoutCategoriaInput, auditoriaUncheckedCreateWithoutCategoriaInput> | auditoriaCreateWithoutCategoriaInput[] | auditoriaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: auditoriaCreateOrConnectWithoutCategoriaInput | auditoriaCreateOrConnectWithoutCategoriaInput[]
    createMany?: auditoriaCreateManyCategoriaInputEnvelope
    connect?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
  }

  export type productosUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<productosCreateWithoutCategoriaInput, productosUncheckedCreateWithoutCategoriaInput> | productosCreateWithoutCategoriaInput[] | productosUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: productosCreateOrConnectWithoutCategoriaInput | productosCreateOrConnectWithoutCategoriaInput[]
    upsert?: productosUpsertWithWhereUniqueWithoutCategoriaInput | productosUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: productosCreateManyCategoriaInputEnvelope
    set?: productosWhereUniqueInput | productosWhereUniqueInput[]
    disconnect?: productosWhereUniqueInput | productosWhereUniqueInput[]
    delete?: productosWhereUniqueInput | productosWhereUniqueInput[]
    connect?: productosWhereUniqueInput | productosWhereUniqueInput[]
    update?: productosUpdateWithWhereUniqueWithoutCategoriaInput | productosUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: productosUpdateManyWithWhereWithoutCategoriaInput | productosUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: productosScalarWhereInput | productosScalarWhereInput[]
  }

  export type auditoriaUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<auditoriaCreateWithoutCategoriaInput, auditoriaUncheckedCreateWithoutCategoriaInput> | auditoriaCreateWithoutCategoriaInput[] | auditoriaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: auditoriaCreateOrConnectWithoutCategoriaInput | auditoriaCreateOrConnectWithoutCategoriaInput[]
    upsert?: auditoriaUpsertWithWhereUniqueWithoutCategoriaInput | auditoriaUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: auditoriaCreateManyCategoriaInputEnvelope
    set?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    disconnect?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    delete?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    connect?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    update?: auditoriaUpdateWithWhereUniqueWithoutCategoriaInput | auditoriaUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: auditoriaUpdateManyWithWhereWithoutCategoriaInput | auditoriaUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: auditoriaScalarWhereInput | auditoriaScalarWhereInput[]
  }

  export type productosUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<productosCreateWithoutCategoriaInput, productosUncheckedCreateWithoutCategoriaInput> | productosCreateWithoutCategoriaInput[] | productosUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: productosCreateOrConnectWithoutCategoriaInput | productosCreateOrConnectWithoutCategoriaInput[]
    upsert?: productosUpsertWithWhereUniqueWithoutCategoriaInput | productosUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: productosCreateManyCategoriaInputEnvelope
    set?: productosWhereUniqueInput | productosWhereUniqueInput[]
    disconnect?: productosWhereUniqueInput | productosWhereUniqueInput[]
    delete?: productosWhereUniqueInput | productosWhereUniqueInput[]
    connect?: productosWhereUniqueInput | productosWhereUniqueInput[]
    update?: productosUpdateWithWhereUniqueWithoutCategoriaInput | productosUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: productosUpdateManyWithWhereWithoutCategoriaInput | productosUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: productosScalarWhereInput | productosScalarWhereInput[]
  }

  export type auditoriaUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<auditoriaCreateWithoutCategoriaInput, auditoriaUncheckedCreateWithoutCategoriaInput> | auditoriaCreateWithoutCategoriaInput[] | auditoriaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: auditoriaCreateOrConnectWithoutCategoriaInput | auditoriaCreateOrConnectWithoutCategoriaInput[]
    upsert?: auditoriaUpsertWithWhereUniqueWithoutCategoriaInput | auditoriaUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: auditoriaCreateManyCategoriaInputEnvelope
    set?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    disconnect?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    delete?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    connect?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    update?: auditoriaUpdateWithWhereUniqueWithoutCategoriaInput | auditoriaUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: auditoriaUpdateManyWithWhereWithoutCategoriaInput | auditoriaUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: auditoriaScalarWhereInput | auditoriaScalarWhereInput[]
  }

  export type categoriasCreateNestedOneWithoutProductosInput = {
    create?: XOR<categoriasCreateWithoutProductosInput, categoriasUncheckedCreateWithoutProductosInput>
    connectOrCreate?: categoriasCreateOrConnectWithoutProductosInput
    connect?: categoriasWhereUniqueInput
  }

  export type variantesCreateNestedManyWithoutProductoInput = {
    create?: XOR<variantesCreateWithoutProductoInput, variantesUncheckedCreateWithoutProductoInput> | variantesCreateWithoutProductoInput[] | variantesUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: variantesCreateOrConnectWithoutProductoInput | variantesCreateOrConnectWithoutProductoInput[]
    createMany?: variantesCreateManyProductoInputEnvelope
    connect?: variantesWhereUniqueInput | variantesWhereUniqueInput[]
  }

  export type usuarioCreateNestedManyWithoutProductosInput = {
    create?: XOR<usuarioCreateWithoutProductosInput, usuarioUncheckedCreateWithoutProductosInput> | usuarioCreateWithoutProductosInput[] | usuarioUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutProductosInput | usuarioCreateOrConnectWithoutProductosInput[]
    createMany?: usuarioCreateManyProductosInputEnvelope
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
  }

  export type estantesCreateNestedOneWithoutProductosInput = {
    create?: XOR<estantesCreateWithoutProductosInput, estantesUncheckedCreateWithoutProductosInput>
    connectOrCreate?: estantesCreateOrConnectWithoutProductosInput
    connect?: estantesWhereUniqueInput
  }

  export type auditoriaCreateNestedManyWithoutProductoInput = {
    create?: XOR<auditoriaCreateWithoutProductoInput, auditoriaUncheckedCreateWithoutProductoInput> | auditoriaCreateWithoutProductoInput[] | auditoriaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: auditoriaCreateOrConnectWithoutProductoInput | auditoriaCreateOrConnectWithoutProductoInput[]
    createMany?: auditoriaCreateManyProductoInputEnvelope
    connect?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
  }

  export type variantesUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<variantesCreateWithoutProductoInput, variantesUncheckedCreateWithoutProductoInput> | variantesCreateWithoutProductoInput[] | variantesUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: variantesCreateOrConnectWithoutProductoInput | variantesCreateOrConnectWithoutProductoInput[]
    createMany?: variantesCreateManyProductoInputEnvelope
    connect?: variantesWhereUniqueInput | variantesWhereUniqueInput[]
  }

  export type usuarioUncheckedCreateNestedManyWithoutProductosInput = {
    create?: XOR<usuarioCreateWithoutProductosInput, usuarioUncheckedCreateWithoutProductosInput> | usuarioCreateWithoutProductosInput[] | usuarioUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutProductosInput | usuarioCreateOrConnectWithoutProductosInput[]
    createMany?: usuarioCreateManyProductosInputEnvelope
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
  }

  export type auditoriaUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<auditoriaCreateWithoutProductoInput, auditoriaUncheckedCreateWithoutProductoInput> | auditoriaCreateWithoutProductoInput[] | auditoriaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: auditoriaCreateOrConnectWithoutProductoInput | auditoriaCreateOrConnectWithoutProductoInput[]
    createMany?: auditoriaCreateManyProductoInputEnvelope
    connect?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
  }

  export type categoriasUpdateOneWithoutProductosNestedInput = {
    create?: XOR<categoriasCreateWithoutProductosInput, categoriasUncheckedCreateWithoutProductosInput>
    connectOrCreate?: categoriasCreateOrConnectWithoutProductosInput
    upsert?: categoriasUpsertWithoutProductosInput
    disconnect?: categoriasWhereInput | boolean
    delete?: categoriasWhereInput | boolean
    connect?: categoriasWhereUniqueInput
    update?: XOR<XOR<categoriasUpdateToOneWithWhereWithoutProductosInput, categoriasUpdateWithoutProductosInput>, categoriasUncheckedUpdateWithoutProductosInput>
  }

  export type variantesUpdateManyWithoutProductoNestedInput = {
    create?: XOR<variantesCreateWithoutProductoInput, variantesUncheckedCreateWithoutProductoInput> | variantesCreateWithoutProductoInput[] | variantesUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: variantesCreateOrConnectWithoutProductoInput | variantesCreateOrConnectWithoutProductoInput[]
    upsert?: variantesUpsertWithWhereUniqueWithoutProductoInput | variantesUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: variantesCreateManyProductoInputEnvelope
    set?: variantesWhereUniqueInput | variantesWhereUniqueInput[]
    disconnect?: variantesWhereUniqueInput | variantesWhereUniqueInput[]
    delete?: variantesWhereUniqueInput | variantesWhereUniqueInput[]
    connect?: variantesWhereUniqueInput | variantesWhereUniqueInput[]
    update?: variantesUpdateWithWhereUniqueWithoutProductoInput | variantesUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: variantesUpdateManyWithWhereWithoutProductoInput | variantesUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: variantesScalarWhereInput | variantesScalarWhereInput[]
  }

  export type usuarioUpdateManyWithoutProductosNestedInput = {
    create?: XOR<usuarioCreateWithoutProductosInput, usuarioUncheckedCreateWithoutProductosInput> | usuarioCreateWithoutProductosInput[] | usuarioUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutProductosInput | usuarioCreateOrConnectWithoutProductosInput[]
    upsert?: usuarioUpsertWithWhereUniqueWithoutProductosInput | usuarioUpsertWithWhereUniqueWithoutProductosInput[]
    createMany?: usuarioCreateManyProductosInputEnvelope
    set?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    disconnect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    delete?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    update?: usuarioUpdateWithWhereUniqueWithoutProductosInput | usuarioUpdateWithWhereUniqueWithoutProductosInput[]
    updateMany?: usuarioUpdateManyWithWhereWithoutProductosInput | usuarioUpdateManyWithWhereWithoutProductosInput[]
    deleteMany?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
  }

  export type estantesUpdateOneWithoutProductosNestedInput = {
    create?: XOR<estantesCreateWithoutProductosInput, estantesUncheckedCreateWithoutProductosInput>
    connectOrCreate?: estantesCreateOrConnectWithoutProductosInput
    upsert?: estantesUpsertWithoutProductosInput
    disconnect?: estantesWhereInput | boolean
    delete?: estantesWhereInput | boolean
    connect?: estantesWhereUniqueInput
    update?: XOR<XOR<estantesUpdateToOneWithWhereWithoutProductosInput, estantesUpdateWithoutProductosInput>, estantesUncheckedUpdateWithoutProductosInput>
  }

  export type auditoriaUpdateManyWithoutProductoNestedInput = {
    create?: XOR<auditoriaCreateWithoutProductoInput, auditoriaUncheckedCreateWithoutProductoInput> | auditoriaCreateWithoutProductoInput[] | auditoriaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: auditoriaCreateOrConnectWithoutProductoInput | auditoriaCreateOrConnectWithoutProductoInput[]
    upsert?: auditoriaUpsertWithWhereUniqueWithoutProductoInput | auditoriaUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: auditoriaCreateManyProductoInputEnvelope
    set?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    disconnect?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    delete?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    connect?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    update?: auditoriaUpdateWithWhereUniqueWithoutProductoInput | auditoriaUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: auditoriaUpdateManyWithWhereWithoutProductoInput | auditoriaUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: auditoriaScalarWhereInput | auditoriaScalarWhereInput[]
  }

  export type variantesUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<variantesCreateWithoutProductoInput, variantesUncheckedCreateWithoutProductoInput> | variantesCreateWithoutProductoInput[] | variantesUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: variantesCreateOrConnectWithoutProductoInput | variantesCreateOrConnectWithoutProductoInput[]
    upsert?: variantesUpsertWithWhereUniqueWithoutProductoInput | variantesUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: variantesCreateManyProductoInputEnvelope
    set?: variantesWhereUniqueInput | variantesWhereUniqueInput[]
    disconnect?: variantesWhereUniqueInput | variantesWhereUniqueInput[]
    delete?: variantesWhereUniqueInput | variantesWhereUniqueInput[]
    connect?: variantesWhereUniqueInput | variantesWhereUniqueInput[]
    update?: variantesUpdateWithWhereUniqueWithoutProductoInput | variantesUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: variantesUpdateManyWithWhereWithoutProductoInput | variantesUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: variantesScalarWhereInput | variantesScalarWhereInput[]
  }

  export type usuarioUncheckedUpdateManyWithoutProductosNestedInput = {
    create?: XOR<usuarioCreateWithoutProductosInput, usuarioUncheckedCreateWithoutProductosInput> | usuarioCreateWithoutProductosInput[] | usuarioUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutProductosInput | usuarioCreateOrConnectWithoutProductosInput[]
    upsert?: usuarioUpsertWithWhereUniqueWithoutProductosInput | usuarioUpsertWithWhereUniqueWithoutProductosInput[]
    createMany?: usuarioCreateManyProductosInputEnvelope
    set?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    disconnect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    delete?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    update?: usuarioUpdateWithWhereUniqueWithoutProductosInput | usuarioUpdateWithWhereUniqueWithoutProductosInput[]
    updateMany?: usuarioUpdateManyWithWhereWithoutProductosInput | usuarioUpdateManyWithWhereWithoutProductosInput[]
    deleteMany?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
  }

  export type auditoriaUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<auditoriaCreateWithoutProductoInput, auditoriaUncheckedCreateWithoutProductoInput> | auditoriaCreateWithoutProductoInput[] | auditoriaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: auditoriaCreateOrConnectWithoutProductoInput | auditoriaCreateOrConnectWithoutProductoInput[]
    upsert?: auditoriaUpsertWithWhereUniqueWithoutProductoInput | auditoriaUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: auditoriaCreateManyProductoInputEnvelope
    set?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    disconnect?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    delete?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    connect?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    update?: auditoriaUpdateWithWhereUniqueWithoutProductoInput | auditoriaUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: auditoriaUpdateManyWithWhereWithoutProductoInput | auditoriaUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: auditoriaScalarWhereInput | auditoriaScalarWhereInput[]
  }

  export type productosCreateNestedOneWithoutVariantesInput = {
    create?: XOR<productosCreateWithoutVariantesInput, productosUncheckedCreateWithoutVariantesInput>
    connectOrCreate?: productosCreateOrConnectWithoutVariantesInput
    connect?: productosWhereUniqueInput
  }

  export type ventasCreateNestedManyWithoutVarianteInput = {
    create?: XOR<ventasCreateWithoutVarianteInput, ventasUncheckedCreateWithoutVarianteInput> | ventasCreateWithoutVarianteInput[] | ventasUncheckedCreateWithoutVarianteInput[]
    connectOrCreate?: ventasCreateOrConnectWithoutVarianteInput | ventasCreateOrConnectWithoutVarianteInput[]
    createMany?: ventasCreateManyVarianteInputEnvelope
    connect?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
  }

  export type auditoriaCreateNestedManyWithoutVarianteInput = {
    create?: XOR<auditoriaCreateWithoutVarianteInput, auditoriaUncheckedCreateWithoutVarianteInput> | auditoriaCreateWithoutVarianteInput[] | auditoriaUncheckedCreateWithoutVarianteInput[]
    connectOrCreate?: auditoriaCreateOrConnectWithoutVarianteInput | auditoriaCreateOrConnectWithoutVarianteInput[]
    createMany?: auditoriaCreateManyVarianteInputEnvelope
    connect?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
  }

  export type ventasUncheckedCreateNestedManyWithoutVarianteInput = {
    create?: XOR<ventasCreateWithoutVarianteInput, ventasUncheckedCreateWithoutVarianteInput> | ventasCreateWithoutVarianteInput[] | ventasUncheckedCreateWithoutVarianteInput[]
    connectOrCreate?: ventasCreateOrConnectWithoutVarianteInput | ventasCreateOrConnectWithoutVarianteInput[]
    createMany?: ventasCreateManyVarianteInputEnvelope
    connect?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
  }

  export type auditoriaUncheckedCreateNestedManyWithoutVarianteInput = {
    create?: XOR<auditoriaCreateWithoutVarianteInput, auditoriaUncheckedCreateWithoutVarianteInput> | auditoriaCreateWithoutVarianteInput[] | auditoriaUncheckedCreateWithoutVarianteInput[]
    connectOrCreate?: auditoriaCreateOrConnectWithoutVarianteInput | auditoriaCreateOrConnectWithoutVarianteInput[]
    createMany?: auditoriaCreateManyVarianteInputEnvelope
    connect?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type productosUpdateOneWithoutVariantesNestedInput = {
    create?: XOR<productosCreateWithoutVariantesInput, productosUncheckedCreateWithoutVariantesInput>
    connectOrCreate?: productosCreateOrConnectWithoutVariantesInput
    upsert?: productosUpsertWithoutVariantesInput
    disconnect?: productosWhereInput | boolean
    delete?: productosWhereInput | boolean
    connect?: productosWhereUniqueInput
    update?: XOR<XOR<productosUpdateToOneWithWhereWithoutVariantesInput, productosUpdateWithoutVariantesInput>, productosUncheckedUpdateWithoutVariantesInput>
  }

  export type ventasUpdateManyWithoutVarianteNestedInput = {
    create?: XOR<ventasCreateWithoutVarianteInput, ventasUncheckedCreateWithoutVarianteInput> | ventasCreateWithoutVarianteInput[] | ventasUncheckedCreateWithoutVarianteInput[]
    connectOrCreate?: ventasCreateOrConnectWithoutVarianteInput | ventasCreateOrConnectWithoutVarianteInput[]
    upsert?: ventasUpsertWithWhereUniqueWithoutVarianteInput | ventasUpsertWithWhereUniqueWithoutVarianteInput[]
    createMany?: ventasCreateManyVarianteInputEnvelope
    set?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    disconnect?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    delete?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    connect?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    update?: ventasUpdateWithWhereUniqueWithoutVarianteInput | ventasUpdateWithWhereUniqueWithoutVarianteInput[]
    updateMany?: ventasUpdateManyWithWhereWithoutVarianteInput | ventasUpdateManyWithWhereWithoutVarianteInput[]
    deleteMany?: ventasScalarWhereInput | ventasScalarWhereInput[]
  }

  export type auditoriaUpdateManyWithoutVarianteNestedInput = {
    create?: XOR<auditoriaCreateWithoutVarianteInput, auditoriaUncheckedCreateWithoutVarianteInput> | auditoriaCreateWithoutVarianteInput[] | auditoriaUncheckedCreateWithoutVarianteInput[]
    connectOrCreate?: auditoriaCreateOrConnectWithoutVarianteInput | auditoriaCreateOrConnectWithoutVarianteInput[]
    upsert?: auditoriaUpsertWithWhereUniqueWithoutVarianteInput | auditoriaUpsertWithWhereUniqueWithoutVarianteInput[]
    createMany?: auditoriaCreateManyVarianteInputEnvelope
    set?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    disconnect?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    delete?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    connect?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    update?: auditoriaUpdateWithWhereUniqueWithoutVarianteInput | auditoriaUpdateWithWhereUniqueWithoutVarianteInput[]
    updateMany?: auditoriaUpdateManyWithWhereWithoutVarianteInput | auditoriaUpdateManyWithWhereWithoutVarianteInput[]
    deleteMany?: auditoriaScalarWhereInput | auditoriaScalarWhereInput[]
  }

  export type ventasUncheckedUpdateManyWithoutVarianteNestedInput = {
    create?: XOR<ventasCreateWithoutVarianteInput, ventasUncheckedCreateWithoutVarianteInput> | ventasCreateWithoutVarianteInput[] | ventasUncheckedCreateWithoutVarianteInput[]
    connectOrCreate?: ventasCreateOrConnectWithoutVarianteInput | ventasCreateOrConnectWithoutVarianteInput[]
    upsert?: ventasUpsertWithWhereUniqueWithoutVarianteInput | ventasUpsertWithWhereUniqueWithoutVarianteInput[]
    createMany?: ventasCreateManyVarianteInputEnvelope
    set?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    disconnect?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    delete?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    connect?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    update?: ventasUpdateWithWhereUniqueWithoutVarianteInput | ventasUpdateWithWhereUniqueWithoutVarianteInput[]
    updateMany?: ventasUpdateManyWithWhereWithoutVarianteInput | ventasUpdateManyWithWhereWithoutVarianteInput[]
    deleteMany?: ventasScalarWhereInput | ventasScalarWhereInput[]
  }

  export type auditoriaUncheckedUpdateManyWithoutVarianteNestedInput = {
    create?: XOR<auditoriaCreateWithoutVarianteInput, auditoriaUncheckedCreateWithoutVarianteInput> | auditoriaCreateWithoutVarianteInput[] | auditoriaUncheckedCreateWithoutVarianteInput[]
    connectOrCreate?: auditoriaCreateOrConnectWithoutVarianteInput | auditoriaCreateOrConnectWithoutVarianteInput[]
    upsert?: auditoriaUpsertWithWhereUniqueWithoutVarianteInput | auditoriaUpsertWithWhereUniqueWithoutVarianteInput[]
    createMany?: auditoriaCreateManyVarianteInputEnvelope
    set?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    disconnect?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    delete?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    connect?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    update?: auditoriaUpdateWithWhereUniqueWithoutVarianteInput | auditoriaUpdateWithWhereUniqueWithoutVarianteInput[]
    updateMany?: auditoriaUpdateManyWithWhereWithoutVarianteInput | auditoriaUpdateManyWithWhereWithoutVarianteInput[]
    deleteMany?: auditoriaScalarWhereInput | auditoriaScalarWhereInput[]
  }

  export type variantesCreateNestedOneWithoutVentasInput = {
    create?: XOR<variantesCreateWithoutVentasInput, variantesUncheckedCreateWithoutVentasInput>
    connectOrCreate?: variantesCreateOrConnectWithoutVentasInput
    connect?: variantesWhereUniqueInput
  }

  export type costosExtrasCreateNestedManyWithoutVentaInput = {
    create?: XOR<costosExtrasCreateWithoutVentaInput, costosExtrasUncheckedCreateWithoutVentaInput> | costosExtrasCreateWithoutVentaInput[] | costosExtrasUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: costosExtrasCreateOrConnectWithoutVentaInput | costosExtrasCreateOrConnectWithoutVentaInput[]
    createMany?: costosExtrasCreateManyVentaInputEnvelope
    connect?: costosExtrasWhereUniqueInput | costosExtrasWhereUniqueInput[]
  }

  export type auditoriaCreateNestedManyWithoutVentaInput = {
    create?: XOR<auditoriaCreateWithoutVentaInput, auditoriaUncheckedCreateWithoutVentaInput> | auditoriaCreateWithoutVentaInput[] | auditoriaUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: auditoriaCreateOrConnectWithoutVentaInput | auditoriaCreateOrConnectWithoutVentaInput[]
    createMany?: auditoriaCreateManyVentaInputEnvelope
    connect?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
  }

  export type costosExtrasUncheckedCreateNestedManyWithoutVentaInput = {
    create?: XOR<costosExtrasCreateWithoutVentaInput, costosExtrasUncheckedCreateWithoutVentaInput> | costosExtrasCreateWithoutVentaInput[] | costosExtrasUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: costosExtrasCreateOrConnectWithoutVentaInput | costosExtrasCreateOrConnectWithoutVentaInput[]
    createMany?: costosExtrasCreateManyVentaInputEnvelope
    connect?: costosExtrasWhereUniqueInput | costosExtrasWhereUniqueInput[]
  }

  export type auditoriaUncheckedCreateNestedManyWithoutVentaInput = {
    create?: XOR<auditoriaCreateWithoutVentaInput, auditoriaUncheckedCreateWithoutVentaInput> | auditoriaCreateWithoutVentaInput[] | auditoriaUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: auditoriaCreateOrConnectWithoutVentaInput | auditoriaCreateOrConnectWithoutVentaInput[]
    createMany?: auditoriaCreateManyVentaInputEnvelope
    connect?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
  }

  export type variantesUpdateOneWithoutVentasNestedInput = {
    create?: XOR<variantesCreateWithoutVentasInput, variantesUncheckedCreateWithoutVentasInput>
    connectOrCreate?: variantesCreateOrConnectWithoutVentasInput
    upsert?: variantesUpsertWithoutVentasInput
    disconnect?: variantesWhereInput | boolean
    delete?: variantesWhereInput | boolean
    connect?: variantesWhereUniqueInput
    update?: XOR<XOR<variantesUpdateToOneWithWhereWithoutVentasInput, variantesUpdateWithoutVentasInput>, variantesUncheckedUpdateWithoutVentasInput>
  }

  export type costosExtrasUpdateManyWithoutVentaNestedInput = {
    create?: XOR<costosExtrasCreateWithoutVentaInput, costosExtrasUncheckedCreateWithoutVentaInput> | costosExtrasCreateWithoutVentaInput[] | costosExtrasUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: costosExtrasCreateOrConnectWithoutVentaInput | costosExtrasCreateOrConnectWithoutVentaInput[]
    upsert?: costosExtrasUpsertWithWhereUniqueWithoutVentaInput | costosExtrasUpsertWithWhereUniqueWithoutVentaInput[]
    createMany?: costosExtrasCreateManyVentaInputEnvelope
    set?: costosExtrasWhereUniqueInput | costosExtrasWhereUniqueInput[]
    disconnect?: costosExtrasWhereUniqueInput | costosExtrasWhereUniqueInput[]
    delete?: costosExtrasWhereUniqueInput | costosExtrasWhereUniqueInput[]
    connect?: costosExtrasWhereUniqueInput | costosExtrasWhereUniqueInput[]
    update?: costosExtrasUpdateWithWhereUniqueWithoutVentaInput | costosExtrasUpdateWithWhereUniqueWithoutVentaInput[]
    updateMany?: costosExtrasUpdateManyWithWhereWithoutVentaInput | costosExtrasUpdateManyWithWhereWithoutVentaInput[]
    deleteMany?: costosExtrasScalarWhereInput | costosExtrasScalarWhereInput[]
  }

  export type auditoriaUpdateManyWithoutVentaNestedInput = {
    create?: XOR<auditoriaCreateWithoutVentaInput, auditoriaUncheckedCreateWithoutVentaInput> | auditoriaCreateWithoutVentaInput[] | auditoriaUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: auditoriaCreateOrConnectWithoutVentaInput | auditoriaCreateOrConnectWithoutVentaInput[]
    upsert?: auditoriaUpsertWithWhereUniqueWithoutVentaInput | auditoriaUpsertWithWhereUniqueWithoutVentaInput[]
    createMany?: auditoriaCreateManyVentaInputEnvelope
    set?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    disconnect?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    delete?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    connect?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    update?: auditoriaUpdateWithWhereUniqueWithoutVentaInput | auditoriaUpdateWithWhereUniqueWithoutVentaInput[]
    updateMany?: auditoriaUpdateManyWithWhereWithoutVentaInput | auditoriaUpdateManyWithWhereWithoutVentaInput[]
    deleteMany?: auditoriaScalarWhereInput | auditoriaScalarWhereInput[]
  }

  export type costosExtrasUncheckedUpdateManyWithoutVentaNestedInput = {
    create?: XOR<costosExtrasCreateWithoutVentaInput, costosExtrasUncheckedCreateWithoutVentaInput> | costosExtrasCreateWithoutVentaInput[] | costosExtrasUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: costosExtrasCreateOrConnectWithoutVentaInput | costosExtrasCreateOrConnectWithoutVentaInput[]
    upsert?: costosExtrasUpsertWithWhereUniqueWithoutVentaInput | costosExtrasUpsertWithWhereUniqueWithoutVentaInput[]
    createMany?: costosExtrasCreateManyVentaInputEnvelope
    set?: costosExtrasWhereUniqueInput | costosExtrasWhereUniqueInput[]
    disconnect?: costosExtrasWhereUniqueInput | costosExtrasWhereUniqueInput[]
    delete?: costosExtrasWhereUniqueInput | costosExtrasWhereUniqueInput[]
    connect?: costosExtrasWhereUniqueInput | costosExtrasWhereUniqueInput[]
    update?: costosExtrasUpdateWithWhereUniqueWithoutVentaInput | costosExtrasUpdateWithWhereUniqueWithoutVentaInput[]
    updateMany?: costosExtrasUpdateManyWithWhereWithoutVentaInput | costosExtrasUpdateManyWithWhereWithoutVentaInput[]
    deleteMany?: costosExtrasScalarWhereInput | costosExtrasScalarWhereInput[]
  }

  export type auditoriaUncheckedUpdateManyWithoutVentaNestedInput = {
    create?: XOR<auditoriaCreateWithoutVentaInput, auditoriaUncheckedCreateWithoutVentaInput> | auditoriaCreateWithoutVentaInput[] | auditoriaUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: auditoriaCreateOrConnectWithoutVentaInput | auditoriaCreateOrConnectWithoutVentaInput[]
    upsert?: auditoriaUpsertWithWhereUniqueWithoutVentaInput | auditoriaUpsertWithWhereUniqueWithoutVentaInput[]
    createMany?: auditoriaCreateManyVentaInputEnvelope
    set?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    disconnect?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    delete?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    connect?: auditoriaWhereUniqueInput | auditoriaWhereUniqueInput[]
    update?: auditoriaUpdateWithWhereUniqueWithoutVentaInput | auditoriaUpdateWithWhereUniqueWithoutVentaInput[]
    updateMany?: auditoriaUpdateManyWithWhereWithoutVentaInput | auditoriaUpdateManyWithWhereWithoutVentaInput[]
    deleteMany?: auditoriaScalarWhereInput | auditoriaScalarWhereInput[]
  }

  export type ventasCreateNestedOneWithoutCostosExtrasInput = {
    create?: XOR<ventasCreateWithoutCostosExtrasInput, ventasUncheckedCreateWithoutCostosExtrasInput>
    connectOrCreate?: ventasCreateOrConnectWithoutCostosExtrasInput
    connect?: ventasWhereUniqueInput
  }

  export type ventasUpdateOneRequiredWithoutCostosExtrasNestedInput = {
    create?: XOR<ventasCreateWithoutCostosExtrasInput, ventasUncheckedCreateWithoutCostosExtrasInput>
    connectOrCreate?: ventasCreateOrConnectWithoutCostosExtrasInput
    upsert?: ventasUpsertWithoutCostosExtrasInput
    connect?: ventasWhereUniqueInput
    update?: XOR<XOR<ventasUpdateToOneWithWhereWithoutCostosExtrasInput, ventasUpdateWithoutCostosExtrasInput>, ventasUncheckedUpdateWithoutCostosExtrasInput>
  }

  export type productosCreateNestedOneWithoutAuditoriasInput = {
    create?: XOR<productosCreateWithoutAuditoriasInput, productosUncheckedCreateWithoutAuditoriasInput>
    connectOrCreate?: productosCreateOrConnectWithoutAuditoriasInput
    connect?: productosWhereUniqueInput
  }

  export type variantesCreateNestedOneWithoutAuditoriasInput = {
    create?: XOR<variantesCreateWithoutAuditoriasInput, variantesUncheckedCreateWithoutAuditoriasInput>
    connectOrCreate?: variantesCreateOrConnectWithoutAuditoriasInput
    connect?: variantesWhereUniqueInput
  }

  export type ventasCreateNestedOneWithoutAuditoriasInput = {
    create?: XOR<ventasCreateWithoutAuditoriasInput, ventasUncheckedCreateWithoutAuditoriasInput>
    connectOrCreate?: ventasCreateOrConnectWithoutAuditoriasInput
    connect?: ventasWhereUniqueInput
  }

  export type estantesCreateNestedOneWithoutAuditoriasInput = {
    create?: XOR<estantesCreateWithoutAuditoriasInput, estantesUncheckedCreateWithoutAuditoriasInput>
    connectOrCreate?: estantesCreateOrConnectWithoutAuditoriasInput
    connect?: estantesWhereUniqueInput
  }

  export type categoriasCreateNestedOneWithoutAuditoriasInput = {
    create?: XOR<categoriasCreateWithoutAuditoriasInput, categoriasUncheckedCreateWithoutAuditoriasInput>
    connectOrCreate?: categoriasCreateOrConnectWithoutAuditoriasInput
    connect?: categoriasWhereUniqueInput
  }

  export type usuarioCreateNestedOneWithoutAuditoriasInput = {
    create?: XOR<usuarioCreateWithoutAuditoriasInput, usuarioUncheckedCreateWithoutAuditoriasInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutAuditoriasInput
    connect?: usuarioWhereUniqueInput
  }

  export type EnumAccionFieldUpdateOperationsInput = {
    set?: $Enums.Accion
  }

  export type productosUpdateOneWithoutAuditoriasNestedInput = {
    create?: XOR<productosCreateWithoutAuditoriasInput, productosUncheckedCreateWithoutAuditoriasInput>
    connectOrCreate?: productosCreateOrConnectWithoutAuditoriasInput
    upsert?: productosUpsertWithoutAuditoriasInput
    disconnect?: productosWhereInput | boolean
    delete?: productosWhereInput | boolean
    connect?: productosWhereUniqueInput
    update?: XOR<XOR<productosUpdateToOneWithWhereWithoutAuditoriasInput, productosUpdateWithoutAuditoriasInput>, productosUncheckedUpdateWithoutAuditoriasInput>
  }

  export type variantesUpdateOneWithoutAuditoriasNestedInput = {
    create?: XOR<variantesCreateWithoutAuditoriasInput, variantesUncheckedCreateWithoutAuditoriasInput>
    connectOrCreate?: variantesCreateOrConnectWithoutAuditoriasInput
    upsert?: variantesUpsertWithoutAuditoriasInput
    disconnect?: variantesWhereInput | boolean
    delete?: variantesWhereInput | boolean
    connect?: variantesWhereUniqueInput
    update?: XOR<XOR<variantesUpdateToOneWithWhereWithoutAuditoriasInput, variantesUpdateWithoutAuditoriasInput>, variantesUncheckedUpdateWithoutAuditoriasInput>
  }

  export type ventasUpdateOneWithoutAuditoriasNestedInput = {
    create?: XOR<ventasCreateWithoutAuditoriasInput, ventasUncheckedCreateWithoutAuditoriasInput>
    connectOrCreate?: ventasCreateOrConnectWithoutAuditoriasInput
    upsert?: ventasUpsertWithoutAuditoriasInput
    disconnect?: ventasWhereInput | boolean
    delete?: ventasWhereInput | boolean
    connect?: ventasWhereUniqueInput
    update?: XOR<XOR<ventasUpdateToOneWithWhereWithoutAuditoriasInput, ventasUpdateWithoutAuditoriasInput>, ventasUncheckedUpdateWithoutAuditoriasInput>
  }

  export type estantesUpdateOneWithoutAuditoriasNestedInput = {
    create?: XOR<estantesCreateWithoutAuditoriasInput, estantesUncheckedCreateWithoutAuditoriasInput>
    connectOrCreate?: estantesCreateOrConnectWithoutAuditoriasInput
    upsert?: estantesUpsertWithoutAuditoriasInput
    disconnect?: estantesWhereInput | boolean
    delete?: estantesWhereInput | boolean
    connect?: estantesWhereUniqueInput
    update?: XOR<XOR<estantesUpdateToOneWithWhereWithoutAuditoriasInput, estantesUpdateWithoutAuditoriasInput>, estantesUncheckedUpdateWithoutAuditoriasInput>
  }

  export type categoriasUpdateOneWithoutAuditoriasNestedInput = {
    create?: XOR<categoriasCreateWithoutAuditoriasInput, categoriasUncheckedCreateWithoutAuditoriasInput>
    connectOrCreate?: categoriasCreateOrConnectWithoutAuditoriasInput
    upsert?: categoriasUpsertWithoutAuditoriasInput
    disconnect?: categoriasWhereInput | boolean
    delete?: categoriasWhereInput | boolean
    connect?: categoriasWhereUniqueInput
    update?: XOR<XOR<categoriasUpdateToOneWithWhereWithoutAuditoriasInput, categoriasUpdateWithoutAuditoriasInput>, categoriasUncheckedUpdateWithoutAuditoriasInput>
  }

  export type usuarioUpdateOneRequiredWithoutAuditoriasNestedInput = {
    create?: XOR<usuarioCreateWithoutAuditoriasInput, usuarioUncheckedCreateWithoutAuditoriasInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutAuditoriasInput
    upsert?: usuarioUpsertWithoutAuditoriasInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutAuditoriasInput, usuarioUpdateWithoutAuditoriasInput>, usuarioUncheckedUpdateWithoutAuditoriasInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedEnumAccionFilter<$PrismaModel = never> = {
    equals?: $Enums.Accion | EnumAccionFieldRefInput<$PrismaModel>
    in?: $Enums.Accion[] | ListEnumAccionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Accion[] | ListEnumAccionFieldRefInput<$PrismaModel>
    not?: NestedEnumAccionFilter<$PrismaModel> | $Enums.Accion
  }

  export type NestedEnumAccionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Accion | EnumAccionFieldRefInput<$PrismaModel>
    in?: $Enums.Accion[] | ListEnumAccionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Accion[] | ListEnumAccionFieldRefInput<$PrismaModel>
    not?: NestedEnumAccionWithAggregatesFilter<$PrismaModel> | $Enums.Accion
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccionFilter<$PrismaModel>
    _max?: NestedEnumAccionFilter<$PrismaModel>
  }

  export type productosCreateWithoutUsuarioInput = {
    createdAt?: Date | string
    categoria?: categoriasCreateNestedOneWithoutProductosInput
    variantes?: variantesCreateNestedManyWithoutProductoInput
    estantes?: estantesCreateNestedOneWithoutProductosInput
    auditorias?: auditoriaCreateNestedManyWithoutProductoInput
  }

  export type productosUncheckedCreateWithoutUsuarioInput = {
    id?: number
    categoriaId?: number | null
    createdAt?: Date | string
    estantesId?: number | null
    variantes?: variantesUncheckedCreateNestedManyWithoutProductoInput
    auditorias?: auditoriaUncheckedCreateNestedManyWithoutProductoInput
  }

  export type productosCreateOrConnectWithoutUsuarioInput = {
    where: productosWhereUniqueInput
    create: XOR<productosCreateWithoutUsuarioInput, productosUncheckedCreateWithoutUsuarioInput>
  }

  export type auditoriaCreateWithoutUsuarioInput = {
    accion: $Enums.Accion
    createdAt?: Date | string
    producto?: productosCreateNestedOneWithoutAuditoriasInput
    variante?: variantesCreateNestedOneWithoutAuditoriasInput
    venta?: ventasCreateNestedOneWithoutAuditoriasInput
    estante?: estantesCreateNestedOneWithoutAuditoriasInput
    categoria?: categoriasCreateNestedOneWithoutAuditoriasInput
  }

  export type auditoriaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    accion: $Enums.Accion
    productoId?: number | null
    varianteId?: number | null
    ventaId?: number | null
    estanteId?: number | null
    categoriaId?: number | null
    createdAt?: Date | string
  }

  export type auditoriaCreateOrConnectWithoutUsuarioInput = {
    where: auditoriaWhereUniqueInput
    create: XOR<auditoriaCreateWithoutUsuarioInput, auditoriaUncheckedCreateWithoutUsuarioInput>
  }

  export type auditoriaCreateManyUsuarioInputEnvelope = {
    data: auditoriaCreateManyUsuarioInput | auditoriaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type productosUpsertWithoutUsuarioInput = {
    update: XOR<productosUpdateWithoutUsuarioInput, productosUncheckedUpdateWithoutUsuarioInput>
    create: XOR<productosCreateWithoutUsuarioInput, productosUncheckedCreateWithoutUsuarioInput>
    where?: productosWhereInput
  }

  export type productosUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: productosWhereInput
    data: XOR<productosUpdateWithoutUsuarioInput, productosUncheckedUpdateWithoutUsuarioInput>
  }

  export type productosUpdateWithoutUsuarioInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: categoriasUpdateOneWithoutProductosNestedInput
    variantes?: variantesUpdateManyWithoutProductoNestedInput
    estantes?: estantesUpdateOneWithoutProductosNestedInput
    auditorias?: auditoriaUpdateManyWithoutProductoNestedInput
  }

  export type productosUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estantesId?: NullableIntFieldUpdateOperationsInput | number | null
    variantes?: variantesUncheckedUpdateManyWithoutProductoNestedInput
    auditorias?: auditoriaUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type auditoriaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: auditoriaWhereUniqueInput
    update: XOR<auditoriaUpdateWithoutUsuarioInput, auditoriaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<auditoriaCreateWithoutUsuarioInput, auditoriaUncheckedCreateWithoutUsuarioInput>
  }

  export type auditoriaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: auditoriaWhereUniqueInput
    data: XOR<auditoriaUpdateWithoutUsuarioInput, auditoriaUncheckedUpdateWithoutUsuarioInput>
  }

  export type auditoriaUpdateManyWithWhereWithoutUsuarioInput = {
    where: auditoriaScalarWhereInput
    data: XOR<auditoriaUpdateManyMutationInput, auditoriaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type auditoriaScalarWhereInput = {
    AND?: auditoriaScalarWhereInput | auditoriaScalarWhereInput[]
    OR?: auditoriaScalarWhereInput[]
    NOT?: auditoriaScalarWhereInput | auditoriaScalarWhereInput[]
    id?: IntFilter<"auditoria"> | number
    usuario_id?: IntFilter<"auditoria"> | number
    accion?: EnumAccionFilter<"auditoria"> | $Enums.Accion
    productoId?: IntNullableFilter<"auditoria"> | number | null
    varianteId?: IntNullableFilter<"auditoria"> | number | null
    ventaId?: IntNullableFilter<"auditoria"> | number | null
    estanteId?: IntNullableFilter<"auditoria"> | number | null
    categoriaId?: IntNullableFilter<"auditoria"> | number | null
    createdAt?: DateTimeFilter<"auditoria"> | Date | string
  }

  export type estantesCreateWithoutUbicacionInput = {
    Seccion: string
    nivel: number
    pasillo: number
    createdAt?: Date | string
    productos?: productosCreateNestedManyWithoutEstantesInput
    auditorias?: auditoriaCreateNestedManyWithoutEstanteInput
  }

  export type estantesUncheckedCreateWithoutUbicacionInput = {
    id?: number
    Seccion: string
    nivel: number
    pasillo: number
    createdAt?: Date | string
    productos?: productosUncheckedCreateNestedManyWithoutEstantesInput
    auditorias?: auditoriaUncheckedCreateNestedManyWithoutEstanteInput
  }

  export type estantesCreateOrConnectWithoutUbicacionInput = {
    where: estantesWhereUniqueInput
    create: XOR<estantesCreateWithoutUbicacionInput, estantesUncheckedCreateWithoutUbicacionInput>
  }

  export type estantesCreateManyUbicacionInputEnvelope = {
    data: estantesCreateManyUbicacionInput | estantesCreateManyUbicacionInput[]
    skipDuplicates?: boolean
  }

  export type estantesUpsertWithWhereUniqueWithoutUbicacionInput = {
    where: estantesWhereUniqueInput
    update: XOR<estantesUpdateWithoutUbicacionInput, estantesUncheckedUpdateWithoutUbicacionInput>
    create: XOR<estantesCreateWithoutUbicacionInput, estantesUncheckedCreateWithoutUbicacionInput>
  }

  export type estantesUpdateWithWhereUniqueWithoutUbicacionInput = {
    where: estantesWhereUniqueInput
    data: XOR<estantesUpdateWithoutUbicacionInput, estantesUncheckedUpdateWithoutUbicacionInput>
  }

  export type estantesUpdateManyWithWhereWithoutUbicacionInput = {
    where: estantesScalarWhereInput
    data: XOR<estantesUpdateManyMutationInput, estantesUncheckedUpdateManyWithoutUbicacionInput>
  }

  export type estantesScalarWhereInput = {
    AND?: estantesScalarWhereInput | estantesScalarWhereInput[]
    OR?: estantesScalarWhereInput[]
    NOT?: estantesScalarWhereInput | estantesScalarWhereInput[]
    id?: IntFilter<"estantes"> | number
    Seccion?: StringFilter<"estantes"> | string
    nivel?: IntFilter<"estantes"> | number
    pasillo?: IntFilter<"estantes"> | number
    createdAt?: DateTimeFilter<"estantes"> | Date | string
    ubicacionId?: IntNullableFilter<"estantes"> | number | null
  }

  export type ubicacionCreateWithoutEstantesInput = {
    nombre: string
    calle: string
    cp: string
    colonia: string
    celular: string
    createdAt?: Date | string
  }

  export type ubicacionUncheckedCreateWithoutEstantesInput = {
    id?: number
    nombre: string
    calle: string
    cp: string
    colonia: string
    celular: string
    createdAt?: Date | string
  }

  export type ubicacionCreateOrConnectWithoutEstantesInput = {
    where: ubicacionWhereUniqueInput
    create: XOR<ubicacionCreateWithoutEstantesInput, ubicacionUncheckedCreateWithoutEstantesInput>
  }

  export type productosCreateWithoutEstantesInput = {
    createdAt?: Date | string
    categoria?: categoriasCreateNestedOneWithoutProductosInput
    variantes?: variantesCreateNestedManyWithoutProductoInput
    usuario?: usuarioCreateNestedManyWithoutProductosInput
    auditorias?: auditoriaCreateNestedManyWithoutProductoInput
  }

  export type productosUncheckedCreateWithoutEstantesInput = {
    id?: number
    categoriaId?: number | null
    createdAt?: Date | string
    variantes?: variantesUncheckedCreateNestedManyWithoutProductoInput
    usuario?: usuarioUncheckedCreateNestedManyWithoutProductosInput
    auditorias?: auditoriaUncheckedCreateNestedManyWithoutProductoInput
  }

  export type productosCreateOrConnectWithoutEstantesInput = {
    where: productosWhereUniqueInput
    create: XOR<productosCreateWithoutEstantesInput, productosUncheckedCreateWithoutEstantesInput>
  }

  export type productosCreateManyEstantesInputEnvelope = {
    data: productosCreateManyEstantesInput | productosCreateManyEstantesInput[]
    skipDuplicates?: boolean
  }

  export type auditoriaCreateWithoutEstanteInput = {
    accion: $Enums.Accion
    createdAt?: Date | string
    producto?: productosCreateNestedOneWithoutAuditoriasInput
    variante?: variantesCreateNestedOneWithoutAuditoriasInput
    venta?: ventasCreateNestedOneWithoutAuditoriasInput
    categoria?: categoriasCreateNestedOneWithoutAuditoriasInput
    usuario: usuarioCreateNestedOneWithoutAuditoriasInput
  }

  export type auditoriaUncheckedCreateWithoutEstanteInput = {
    id?: number
    usuario_id: number
    accion: $Enums.Accion
    productoId?: number | null
    varianteId?: number | null
    ventaId?: number | null
    categoriaId?: number | null
    createdAt?: Date | string
  }

  export type auditoriaCreateOrConnectWithoutEstanteInput = {
    where: auditoriaWhereUniqueInput
    create: XOR<auditoriaCreateWithoutEstanteInput, auditoriaUncheckedCreateWithoutEstanteInput>
  }

  export type auditoriaCreateManyEstanteInputEnvelope = {
    data: auditoriaCreateManyEstanteInput | auditoriaCreateManyEstanteInput[]
    skipDuplicates?: boolean
  }

  export type ubicacionUpsertWithoutEstantesInput = {
    update: XOR<ubicacionUpdateWithoutEstantesInput, ubicacionUncheckedUpdateWithoutEstantesInput>
    create: XOR<ubicacionCreateWithoutEstantesInput, ubicacionUncheckedCreateWithoutEstantesInput>
    where?: ubicacionWhereInput
  }

  export type ubicacionUpdateToOneWithWhereWithoutEstantesInput = {
    where?: ubicacionWhereInput
    data: XOR<ubicacionUpdateWithoutEstantesInput, ubicacionUncheckedUpdateWithoutEstantesInput>
  }

  export type ubicacionUpdateWithoutEstantesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    calle?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    colonia?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ubicacionUncheckedUpdateWithoutEstantesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    calle?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    colonia?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productosUpsertWithWhereUniqueWithoutEstantesInput = {
    where: productosWhereUniqueInput
    update: XOR<productosUpdateWithoutEstantesInput, productosUncheckedUpdateWithoutEstantesInput>
    create: XOR<productosCreateWithoutEstantesInput, productosUncheckedCreateWithoutEstantesInput>
  }

  export type productosUpdateWithWhereUniqueWithoutEstantesInput = {
    where: productosWhereUniqueInput
    data: XOR<productosUpdateWithoutEstantesInput, productosUncheckedUpdateWithoutEstantesInput>
  }

  export type productosUpdateManyWithWhereWithoutEstantesInput = {
    where: productosScalarWhereInput
    data: XOR<productosUpdateManyMutationInput, productosUncheckedUpdateManyWithoutEstantesInput>
  }

  export type productosScalarWhereInput = {
    AND?: productosScalarWhereInput | productosScalarWhereInput[]
    OR?: productosScalarWhereInput[]
    NOT?: productosScalarWhereInput | productosScalarWhereInput[]
    id?: IntFilter<"productos"> | number
    categoriaId?: IntNullableFilter<"productos"> | number | null
    createdAt?: DateTimeFilter<"productos"> | Date | string
    estantesId?: IntNullableFilter<"productos"> | number | null
  }

  export type auditoriaUpsertWithWhereUniqueWithoutEstanteInput = {
    where: auditoriaWhereUniqueInput
    update: XOR<auditoriaUpdateWithoutEstanteInput, auditoriaUncheckedUpdateWithoutEstanteInput>
    create: XOR<auditoriaCreateWithoutEstanteInput, auditoriaUncheckedCreateWithoutEstanteInput>
  }

  export type auditoriaUpdateWithWhereUniqueWithoutEstanteInput = {
    where: auditoriaWhereUniqueInput
    data: XOR<auditoriaUpdateWithoutEstanteInput, auditoriaUncheckedUpdateWithoutEstanteInput>
  }

  export type auditoriaUpdateManyWithWhereWithoutEstanteInput = {
    where: auditoriaScalarWhereInput
    data: XOR<auditoriaUpdateManyMutationInput, auditoriaUncheckedUpdateManyWithoutEstanteInput>
  }

  export type productosCreateWithoutCategoriaInput = {
    createdAt?: Date | string
    variantes?: variantesCreateNestedManyWithoutProductoInput
    usuario?: usuarioCreateNestedManyWithoutProductosInput
    estantes?: estantesCreateNestedOneWithoutProductosInput
    auditorias?: auditoriaCreateNestedManyWithoutProductoInput
  }

  export type productosUncheckedCreateWithoutCategoriaInput = {
    id?: number
    createdAt?: Date | string
    estantesId?: number | null
    variantes?: variantesUncheckedCreateNestedManyWithoutProductoInput
    usuario?: usuarioUncheckedCreateNestedManyWithoutProductosInput
    auditorias?: auditoriaUncheckedCreateNestedManyWithoutProductoInput
  }

  export type productosCreateOrConnectWithoutCategoriaInput = {
    where: productosWhereUniqueInput
    create: XOR<productosCreateWithoutCategoriaInput, productosUncheckedCreateWithoutCategoriaInput>
  }

  export type productosCreateManyCategoriaInputEnvelope = {
    data: productosCreateManyCategoriaInput | productosCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type auditoriaCreateWithoutCategoriaInput = {
    accion: $Enums.Accion
    createdAt?: Date | string
    producto?: productosCreateNestedOneWithoutAuditoriasInput
    variante?: variantesCreateNestedOneWithoutAuditoriasInput
    venta?: ventasCreateNestedOneWithoutAuditoriasInput
    estante?: estantesCreateNestedOneWithoutAuditoriasInput
    usuario: usuarioCreateNestedOneWithoutAuditoriasInput
  }

  export type auditoriaUncheckedCreateWithoutCategoriaInput = {
    id?: number
    usuario_id: number
    accion: $Enums.Accion
    productoId?: number | null
    varianteId?: number | null
    ventaId?: number | null
    estanteId?: number | null
    createdAt?: Date | string
  }

  export type auditoriaCreateOrConnectWithoutCategoriaInput = {
    where: auditoriaWhereUniqueInput
    create: XOR<auditoriaCreateWithoutCategoriaInput, auditoriaUncheckedCreateWithoutCategoriaInput>
  }

  export type auditoriaCreateManyCategoriaInputEnvelope = {
    data: auditoriaCreateManyCategoriaInput | auditoriaCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type productosUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: productosWhereUniqueInput
    update: XOR<productosUpdateWithoutCategoriaInput, productosUncheckedUpdateWithoutCategoriaInput>
    create: XOR<productosCreateWithoutCategoriaInput, productosUncheckedCreateWithoutCategoriaInput>
  }

  export type productosUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: productosWhereUniqueInput
    data: XOR<productosUpdateWithoutCategoriaInput, productosUncheckedUpdateWithoutCategoriaInput>
  }

  export type productosUpdateManyWithWhereWithoutCategoriaInput = {
    where: productosScalarWhereInput
    data: XOR<productosUpdateManyMutationInput, productosUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type auditoriaUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: auditoriaWhereUniqueInput
    update: XOR<auditoriaUpdateWithoutCategoriaInput, auditoriaUncheckedUpdateWithoutCategoriaInput>
    create: XOR<auditoriaCreateWithoutCategoriaInput, auditoriaUncheckedCreateWithoutCategoriaInput>
  }

  export type auditoriaUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: auditoriaWhereUniqueInput
    data: XOR<auditoriaUpdateWithoutCategoriaInput, auditoriaUncheckedUpdateWithoutCategoriaInput>
  }

  export type auditoriaUpdateManyWithWhereWithoutCategoriaInput = {
    where: auditoriaScalarWhereInput
    data: XOR<auditoriaUpdateManyMutationInput, auditoriaUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type categoriasCreateWithoutProductosInput = {
    nombre: string
    createdAt?: Date | string
    auditorias?: auditoriaCreateNestedManyWithoutCategoriaInput
  }

  export type categoriasUncheckedCreateWithoutProductosInput = {
    id?: number
    nombre: string
    createdAt?: Date | string
    auditorias?: auditoriaUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type categoriasCreateOrConnectWithoutProductosInput = {
    where: categoriasWhereUniqueInput
    create: XOR<categoriasCreateWithoutProductosInput, categoriasUncheckedCreateWithoutProductosInput>
  }

  export type variantesCreateWithoutProductoInput = {
    locacion_id: number
    estante_id?: number | null
    foto: string
    nombre: string
    codigo: string
    color: string
    descripcion: string
    cantidad: number
    medidas: string
    precio_publico: number
    precio_contratista: number
    costo_compra: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ganacia_publico: number
    ganacia_contratista: number
    ganancias_stock: number
    ventas?: ventasCreateNestedManyWithoutVarianteInput
    auditorias?: auditoriaCreateNestedManyWithoutVarianteInput
  }

  export type variantesUncheckedCreateWithoutProductoInput = {
    id?: number
    locacion_id: number
    estante_id?: number | null
    foto: string
    nombre: string
    codigo: string
    color: string
    descripcion: string
    cantidad: number
    medidas: string
    precio_publico: number
    precio_contratista: number
    costo_compra: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ganacia_publico: number
    ganacia_contratista: number
    ganancias_stock: number
    ventas?: ventasUncheckedCreateNestedManyWithoutVarianteInput
    auditorias?: auditoriaUncheckedCreateNestedManyWithoutVarianteInput
  }

  export type variantesCreateOrConnectWithoutProductoInput = {
    where: variantesWhereUniqueInput
    create: XOR<variantesCreateWithoutProductoInput, variantesUncheckedCreateWithoutProductoInput>
  }

  export type variantesCreateManyProductoInputEnvelope = {
    data: variantesCreateManyProductoInput | variantesCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type usuarioCreateWithoutProductosInput = {
    nombre: string
    usuario: string
    email_phone: string
    password: string
    createdAt?: Date | string
    auditorias?: auditoriaCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutProductosInput = {
    id?: number
    nombre: string
    usuario: string
    email_phone: string
    password: string
    createdAt?: Date | string
    auditorias?: auditoriaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutProductosInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutProductosInput, usuarioUncheckedCreateWithoutProductosInput>
  }

  export type usuarioCreateManyProductosInputEnvelope = {
    data: usuarioCreateManyProductosInput | usuarioCreateManyProductosInput[]
    skipDuplicates?: boolean
  }

  export type estantesCreateWithoutProductosInput = {
    Seccion: string
    nivel: number
    pasillo: number
    createdAt?: Date | string
    ubicacion?: ubicacionCreateNestedOneWithoutEstantesInput
    auditorias?: auditoriaCreateNestedManyWithoutEstanteInput
  }

  export type estantesUncheckedCreateWithoutProductosInput = {
    id?: number
    Seccion: string
    nivel: number
    pasillo: number
    createdAt?: Date | string
    ubicacionId?: number | null
    auditorias?: auditoriaUncheckedCreateNestedManyWithoutEstanteInput
  }

  export type estantesCreateOrConnectWithoutProductosInput = {
    where: estantesWhereUniqueInput
    create: XOR<estantesCreateWithoutProductosInput, estantesUncheckedCreateWithoutProductosInput>
  }

  export type auditoriaCreateWithoutProductoInput = {
    accion: $Enums.Accion
    createdAt?: Date | string
    variante?: variantesCreateNestedOneWithoutAuditoriasInput
    venta?: ventasCreateNestedOneWithoutAuditoriasInput
    estante?: estantesCreateNestedOneWithoutAuditoriasInput
    categoria?: categoriasCreateNestedOneWithoutAuditoriasInput
    usuario: usuarioCreateNestedOneWithoutAuditoriasInput
  }

  export type auditoriaUncheckedCreateWithoutProductoInput = {
    id?: number
    usuario_id: number
    accion: $Enums.Accion
    varianteId?: number | null
    ventaId?: number | null
    estanteId?: number | null
    categoriaId?: number | null
    createdAt?: Date | string
  }

  export type auditoriaCreateOrConnectWithoutProductoInput = {
    where: auditoriaWhereUniqueInput
    create: XOR<auditoriaCreateWithoutProductoInput, auditoriaUncheckedCreateWithoutProductoInput>
  }

  export type auditoriaCreateManyProductoInputEnvelope = {
    data: auditoriaCreateManyProductoInput | auditoriaCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type categoriasUpsertWithoutProductosInput = {
    update: XOR<categoriasUpdateWithoutProductosInput, categoriasUncheckedUpdateWithoutProductosInput>
    create: XOR<categoriasCreateWithoutProductosInput, categoriasUncheckedCreateWithoutProductosInput>
    where?: categoriasWhereInput
  }

  export type categoriasUpdateToOneWithWhereWithoutProductosInput = {
    where?: categoriasWhereInput
    data: XOR<categoriasUpdateWithoutProductosInput, categoriasUncheckedUpdateWithoutProductosInput>
  }

  export type categoriasUpdateWithoutProductosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditorias?: auditoriaUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriasUncheckedUpdateWithoutProductosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditorias?: auditoriaUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type variantesUpsertWithWhereUniqueWithoutProductoInput = {
    where: variantesWhereUniqueInput
    update: XOR<variantesUpdateWithoutProductoInput, variantesUncheckedUpdateWithoutProductoInput>
    create: XOR<variantesCreateWithoutProductoInput, variantesUncheckedCreateWithoutProductoInput>
  }

  export type variantesUpdateWithWhereUniqueWithoutProductoInput = {
    where: variantesWhereUniqueInput
    data: XOR<variantesUpdateWithoutProductoInput, variantesUncheckedUpdateWithoutProductoInput>
  }

  export type variantesUpdateManyWithWhereWithoutProductoInput = {
    where: variantesScalarWhereInput
    data: XOR<variantesUpdateManyMutationInput, variantesUncheckedUpdateManyWithoutProductoInput>
  }

  export type variantesScalarWhereInput = {
    AND?: variantesScalarWhereInput | variantesScalarWhereInput[]
    OR?: variantesScalarWhereInput[]
    NOT?: variantesScalarWhereInput | variantesScalarWhereInput[]
    id?: IntFilter<"variantes"> | number
    producto_id?: IntFilter<"variantes"> | number
    locacion_id?: IntFilter<"variantes"> | number
    estante_id?: IntNullableFilter<"variantes"> | number | null
    foto?: StringFilter<"variantes"> | string
    nombre?: StringFilter<"variantes"> | string
    codigo?: StringFilter<"variantes"> | string
    color?: StringFilter<"variantes"> | string
    descripcion?: StringFilter<"variantes"> | string
    cantidad?: IntFilter<"variantes"> | number
    medidas?: StringFilter<"variantes"> | string
    precio_publico?: FloatFilter<"variantes"> | number
    precio_contratista?: FloatFilter<"variantes"> | number
    costo_compra?: FloatFilter<"variantes"> | number
    createdAt?: DateTimeFilter<"variantes"> | Date | string
    updatedAt?: DateTimeFilter<"variantes"> | Date | string
    ganacia_publico?: FloatFilter<"variantes"> | number
    ganacia_contratista?: FloatFilter<"variantes"> | number
    ganancias_stock?: FloatFilter<"variantes"> | number
  }

  export type usuarioUpsertWithWhereUniqueWithoutProductosInput = {
    where: usuarioWhereUniqueInput
    update: XOR<usuarioUpdateWithoutProductosInput, usuarioUncheckedUpdateWithoutProductosInput>
    create: XOR<usuarioCreateWithoutProductosInput, usuarioUncheckedCreateWithoutProductosInput>
  }

  export type usuarioUpdateWithWhereUniqueWithoutProductosInput = {
    where: usuarioWhereUniqueInput
    data: XOR<usuarioUpdateWithoutProductosInput, usuarioUncheckedUpdateWithoutProductosInput>
  }

  export type usuarioUpdateManyWithWhereWithoutProductosInput = {
    where: usuarioScalarWhereInput
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyWithoutProductosInput>
  }

  export type usuarioScalarWhereInput = {
    AND?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
    OR?: usuarioScalarWhereInput[]
    NOT?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
    id?: IntFilter<"usuario"> | number
    productosId?: IntNullableFilter<"usuario"> | number | null
    nombre?: StringFilter<"usuario"> | string
    usuario?: StringFilter<"usuario"> | string
    email_phone?: StringFilter<"usuario"> | string
    password?: StringFilter<"usuario"> | string
    createdAt?: DateTimeFilter<"usuario"> | Date | string
  }

  export type estantesUpsertWithoutProductosInput = {
    update: XOR<estantesUpdateWithoutProductosInput, estantesUncheckedUpdateWithoutProductosInput>
    create: XOR<estantesCreateWithoutProductosInput, estantesUncheckedCreateWithoutProductosInput>
    where?: estantesWhereInput
  }

  export type estantesUpdateToOneWithWhereWithoutProductosInput = {
    where?: estantesWhereInput
    data: XOR<estantesUpdateWithoutProductosInput, estantesUncheckedUpdateWithoutProductosInput>
  }

  export type estantesUpdateWithoutProductosInput = {
    Seccion?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    pasillo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ubicacion?: ubicacionUpdateOneWithoutEstantesNestedInput
    auditorias?: auditoriaUpdateManyWithoutEstanteNestedInput
  }

  export type estantesUncheckedUpdateWithoutProductosInput = {
    id?: IntFieldUpdateOperationsInput | number
    Seccion?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    pasillo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ubicacionId?: NullableIntFieldUpdateOperationsInput | number | null
    auditorias?: auditoriaUncheckedUpdateManyWithoutEstanteNestedInput
  }

  export type auditoriaUpsertWithWhereUniqueWithoutProductoInput = {
    where: auditoriaWhereUniqueInput
    update: XOR<auditoriaUpdateWithoutProductoInput, auditoriaUncheckedUpdateWithoutProductoInput>
    create: XOR<auditoriaCreateWithoutProductoInput, auditoriaUncheckedCreateWithoutProductoInput>
  }

  export type auditoriaUpdateWithWhereUniqueWithoutProductoInput = {
    where: auditoriaWhereUniqueInput
    data: XOR<auditoriaUpdateWithoutProductoInput, auditoriaUncheckedUpdateWithoutProductoInput>
  }

  export type auditoriaUpdateManyWithWhereWithoutProductoInput = {
    where: auditoriaScalarWhereInput
    data: XOR<auditoriaUpdateManyMutationInput, auditoriaUncheckedUpdateManyWithoutProductoInput>
  }

  export type productosCreateWithoutVariantesInput = {
    createdAt?: Date | string
    categoria?: categoriasCreateNestedOneWithoutProductosInput
    usuario?: usuarioCreateNestedManyWithoutProductosInput
    estantes?: estantesCreateNestedOneWithoutProductosInput
    auditorias?: auditoriaCreateNestedManyWithoutProductoInput
  }

  export type productosUncheckedCreateWithoutVariantesInput = {
    id?: number
    categoriaId?: number | null
    createdAt?: Date | string
    estantesId?: number | null
    usuario?: usuarioUncheckedCreateNestedManyWithoutProductosInput
    auditorias?: auditoriaUncheckedCreateNestedManyWithoutProductoInput
  }

  export type productosCreateOrConnectWithoutVariantesInput = {
    where: productosWhereUniqueInput
    create: XOR<productosCreateWithoutVariantesInput, productosUncheckedCreateWithoutVariantesInput>
  }

  export type ventasCreateWithoutVarianteInput = {
    cantidad: number
    total_venta: number
    fecha_venta?: Date | string
    nombre_cliente: string
    contacto_cliente: string
    costos_extras: number
    motivo_costo_extra: string
    precio_publico: number
    precio_contratista: number
    costo_compra: number
    costosExtras?: costosExtrasCreateNestedManyWithoutVentaInput
    auditorias?: auditoriaCreateNestedManyWithoutVentaInput
  }

  export type ventasUncheckedCreateWithoutVarianteInput = {
    id?: number
    cantidad: number
    total_venta: number
    fecha_venta?: Date | string
    nombre_cliente: string
    contacto_cliente: string
    costos_extras: number
    motivo_costo_extra: string
    precio_publico: number
    precio_contratista: number
    costo_compra: number
    costosExtras?: costosExtrasUncheckedCreateNestedManyWithoutVentaInput
    auditorias?: auditoriaUncheckedCreateNestedManyWithoutVentaInput
  }

  export type ventasCreateOrConnectWithoutVarianteInput = {
    where: ventasWhereUniqueInput
    create: XOR<ventasCreateWithoutVarianteInput, ventasUncheckedCreateWithoutVarianteInput>
  }

  export type ventasCreateManyVarianteInputEnvelope = {
    data: ventasCreateManyVarianteInput | ventasCreateManyVarianteInput[]
    skipDuplicates?: boolean
  }

  export type auditoriaCreateWithoutVarianteInput = {
    accion: $Enums.Accion
    createdAt?: Date | string
    producto?: productosCreateNestedOneWithoutAuditoriasInput
    venta?: ventasCreateNestedOneWithoutAuditoriasInput
    estante?: estantesCreateNestedOneWithoutAuditoriasInput
    categoria?: categoriasCreateNestedOneWithoutAuditoriasInput
    usuario: usuarioCreateNestedOneWithoutAuditoriasInput
  }

  export type auditoriaUncheckedCreateWithoutVarianteInput = {
    id?: number
    usuario_id: number
    accion: $Enums.Accion
    productoId?: number | null
    ventaId?: number | null
    estanteId?: number | null
    categoriaId?: number | null
    createdAt?: Date | string
  }

  export type auditoriaCreateOrConnectWithoutVarianteInput = {
    where: auditoriaWhereUniqueInput
    create: XOR<auditoriaCreateWithoutVarianteInput, auditoriaUncheckedCreateWithoutVarianteInput>
  }

  export type auditoriaCreateManyVarianteInputEnvelope = {
    data: auditoriaCreateManyVarianteInput | auditoriaCreateManyVarianteInput[]
    skipDuplicates?: boolean
  }

  export type productosUpsertWithoutVariantesInput = {
    update: XOR<productosUpdateWithoutVariantesInput, productosUncheckedUpdateWithoutVariantesInput>
    create: XOR<productosCreateWithoutVariantesInput, productosUncheckedCreateWithoutVariantesInput>
    where?: productosWhereInput
  }

  export type productosUpdateToOneWithWhereWithoutVariantesInput = {
    where?: productosWhereInput
    data: XOR<productosUpdateWithoutVariantesInput, productosUncheckedUpdateWithoutVariantesInput>
  }

  export type productosUpdateWithoutVariantesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: categoriasUpdateOneWithoutProductosNestedInput
    usuario?: usuarioUpdateManyWithoutProductosNestedInput
    estantes?: estantesUpdateOneWithoutProductosNestedInput
    auditorias?: auditoriaUpdateManyWithoutProductoNestedInput
  }

  export type productosUncheckedUpdateWithoutVariantesInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estantesId?: NullableIntFieldUpdateOperationsInput | number | null
    usuario?: usuarioUncheckedUpdateManyWithoutProductosNestedInput
    auditorias?: auditoriaUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ventasUpsertWithWhereUniqueWithoutVarianteInput = {
    where: ventasWhereUniqueInput
    update: XOR<ventasUpdateWithoutVarianteInput, ventasUncheckedUpdateWithoutVarianteInput>
    create: XOR<ventasCreateWithoutVarianteInput, ventasUncheckedCreateWithoutVarianteInput>
  }

  export type ventasUpdateWithWhereUniqueWithoutVarianteInput = {
    where: ventasWhereUniqueInput
    data: XOR<ventasUpdateWithoutVarianteInput, ventasUncheckedUpdateWithoutVarianteInput>
  }

  export type ventasUpdateManyWithWhereWithoutVarianteInput = {
    where: ventasScalarWhereInput
    data: XOR<ventasUpdateManyMutationInput, ventasUncheckedUpdateManyWithoutVarianteInput>
  }

  export type ventasScalarWhereInput = {
    AND?: ventasScalarWhereInput | ventasScalarWhereInput[]
    OR?: ventasScalarWhereInput[]
    NOT?: ventasScalarWhereInput | ventasScalarWhereInput[]
    id?: IntFilter<"ventas"> | number
    variante_id?: IntFilter<"ventas"> | number
    cantidad?: IntFilter<"ventas"> | number
    total_venta?: FloatFilter<"ventas"> | number
    fecha_venta?: DateTimeFilter<"ventas"> | Date | string
    nombre_cliente?: StringFilter<"ventas"> | string
    contacto_cliente?: StringFilter<"ventas"> | string
    costos_extras?: FloatFilter<"ventas"> | number
    motivo_costo_extra?: StringFilter<"ventas"> | string
    precio_publico?: FloatFilter<"ventas"> | number
    precio_contratista?: FloatFilter<"ventas"> | number
    costo_compra?: FloatFilter<"ventas"> | number
  }

  export type auditoriaUpsertWithWhereUniqueWithoutVarianteInput = {
    where: auditoriaWhereUniqueInput
    update: XOR<auditoriaUpdateWithoutVarianteInput, auditoriaUncheckedUpdateWithoutVarianteInput>
    create: XOR<auditoriaCreateWithoutVarianteInput, auditoriaUncheckedCreateWithoutVarianteInput>
  }

  export type auditoriaUpdateWithWhereUniqueWithoutVarianteInput = {
    where: auditoriaWhereUniqueInput
    data: XOR<auditoriaUpdateWithoutVarianteInput, auditoriaUncheckedUpdateWithoutVarianteInput>
  }

  export type auditoriaUpdateManyWithWhereWithoutVarianteInput = {
    where: auditoriaScalarWhereInput
    data: XOR<auditoriaUpdateManyMutationInput, auditoriaUncheckedUpdateManyWithoutVarianteInput>
  }

  export type variantesCreateWithoutVentasInput = {
    locacion_id: number
    estante_id?: number | null
    foto: string
    nombre: string
    codigo: string
    color: string
    descripcion: string
    cantidad: number
    medidas: string
    precio_publico: number
    precio_contratista: number
    costo_compra: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ganacia_publico: number
    ganacia_contratista: number
    ganancias_stock: number
    producto?: productosCreateNestedOneWithoutVariantesInput
    auditorias?: auditoriaCreateNestedManyWithoutVarianteInput
  }

  export type variantesUncheckedCreateWithoutVentasInput = {
    id?: number
    producto_id: number
    locacion_id: number
    estante_id?: number | null
    foto: string
    nombre: string
    codigo: string
    color: string
    descripcion: string
    cantidad: number
    medidas: string
    precio_publico: number
    precio_contratista: number
    costo_compra: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ganacia_publico: number
    ganacia_contratista: number
    ganancias_stock: number
    auditorias?: auditoriaUncheckedCreateNestedManyWithoutVarianteInput
  }

  export type variantesCreateOrConnectWithoutVentasInput = {
    where: variantesWhereUniqueInput
    create: XOR<variantesCreateWithoutVentasInput, variantesUncheckedCreateWithoutVentasInput>
  }

  export type costosExtrasCreateWithoutVentaInput = {
    motivo: string
    costo: number
    createdAt?: Date | string
  }

  export type costosExtrasUncheckedCreateWithoutVentaInput = {
    id?: number
    motivo: string
    costo: number
    createdAt?: Date | string
  }

  export type costosExtrasCreateOrConnectWithoutVentaInput = {
    where: costosExtrasWhereUniqueInput
    create: XOR<costosExtrasCreateWithoutVentaInput, costosExtrasUncheckedCreateWithoutVentaInput>
  }

  export type costosExtrasCreateManyVentaInputEnvelope = {
    data: costosExtrasCreateManyVentaInput | costosExtrasCreateManyVentaInput[]
    skipDuplicates?: boolean
  }

  export type auditoriaCreateWithoutVentaInput = {
    accion: $Enums.Accion
    createdAt?: Date | string
    producto?: productosCreateNestedOneWithoutAuditoriasInput
    variante?: variantesCreateNestedOneWithoutAuditoriasInput
    estante?: estantesCreateNestedOneWithoutAuditoriasInput
    categoria?: categoriasCreateNestedOneWithoutAuditoriasInput
    usuario: usuarioCreateNestedOneWithoutAuditoriasInput
  }

  export type auditoriaUncheckedCreateWithoutVentaInput = {
    id?: number
    usuario_id: number
    accion: $Enums.Accion
    productoId?: number | null
    varianteId?: number | null
    estanteId?: number | null
    categoriaId?: number | null
    createdAt?: Date | string
  }

  export type auditoriaCreateOrConnectWithoutVentaInput = {
    where: auditoriaWhereUniqueInput
    create: XOR<auditoriaCreateWithoutVentaInput, auditoriaUncheckedCreateWithoutVentaInput>
  }

  export type auditoriaCreateManyVentaInputEnvelope = {
    data: auditoriaCreateManyVentaInput | auditoriaCreateManyVentaInput[]
    skipDuplicates?: boolean
  }

  export type variantesUpsertWithoutVentasInput = {
    update: XOR<variantesUpdateWithoutVentasInput, variantesUncheckedUpdateWithoutVentasInput>
    create: XOR<variantesCreateWithoutVentasInput, variantesUncheckedCreateWithoutVentasInput>
    where?: variantesWhereInput
  }

  export type variantesUpdateToOneWithWhereWithoutVentasInput = {
    where?: variantesWhereInput
    data: XOR<variantesUpdateWithoutVentasInput, variantesUncheckedUpdateWithoutVentasInput>
  }

  export type variantesUpdateWithoutVentasInput = {
    locacion_id?: IntFieldUpdateOperationsInput | number
    estante_id?: NullableIntFieldUpdateOperationsInput | number | null
    foto?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    medidas?: StringFieldUpdateOperationsInput | string
    precio_publico?: FloatFieldUpdateOperationsInput | number
    precio_contratista?: FloatFieldUpdateOperationsInput | number
    costo_compra?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ganacia_publico?: FloatFieldUpdateOperationsInput | number
    ganacia_contratista?: FloatFieldUpdateOperationsInput | number
    ganancias_stock?: FloatFieldUpdateOperationsInput | number
    producto?: productosUpdateOneWithoutVariantesNestedInput
    auditorias?: auditoriaUpdateManyWithoutVarianteNestedInput
  }

  export type variantesUncheckedUpdateWithoutVentasInput = {
    id?: IntFieldUpdateOperationsInput | number
    producto_id?: IntFieldUpdateOperationsInput | number
    locacion_id?: IntFieldUpdateOperationsInput | number
    estante_id?: NullableIntFieldUpdateOperationsInput | number | null
    foto?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    medidas?: StringFieldUpdateOperationsInput | string
    precio_publico?: FloatFieldUpdateOperationsInput | number
    precio_contratista?: FloatFieldUpdateOperationsInput | number
    costo_compra?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ganacia_publico?: FloatFieldUpdateOperationsInput | number
    ganacia_contratista?: FloatFieldUpdateOperationsInput | number
    ganancias_stock?: FloatFieldUpdateOperationsInput | number
    auditorias?: auditoriaUncheckedUpdateManyWithoutVarianteNestedInput
  }

  export type costosExtrasUpsertWithWhereUniqueWithoutVentaInput = {
    where: costosExtrasWhereUniqueInput
    update: XOR<costosExtrasUpdateWithoutVentaInput, costosExtrasUncheckedUpdateWithoutVentaInput>
    create: XOR<costosExtrasCreateWithoutVentaInput, costosExtrasUncheckedCreateWithoutVentaInput>
  }

  export type costosExtrasUpdateWithWhereUniqueWithoutVentaInput = {
    where: costosExtrasWhereUniqueInput
    data: XOR<costosExtrasUpdateWithoutVentaInput, costosExtrasUncheckedUpdateWithoutVentaInput>
  }

  export type costosExtrasUpdateManyWithWhereWithoutVentaInput = {
    where: costosExtrasScalarWhereInput
    data: XOR<costosExtrasUpdateManyMutationInput, costosExtrasUncheckedUpdateManyWithoutVentaInput>
  }

  export type costosExtrasScalarWhereInput = {
    AND?: costosExtrasScalarWhereInput | costosExtrasScalarWhereInput[]
    OR?: costosExtrasScalarWhereInput[]
    NOT?: costosExtrasScalarWhereInput | costosExtrasScalarWhereInput[]
    id?: IntFilter<"costosExtras"> | number
    venta_id?: IntFilter<"costosExtras"> | number
    motivo?: StringFilter<"costosExtras"> | string
    costo?: FloatFilter<"costosExtras"> | number
    createdAt?: DateTimeFilter<"costosExtras"> | Date | string
  }

  export type auditoriaUpsertWithWhereUniqueWithoutVentaInput = {
    where: auditoriaWhereUniqueInput
    update: XOR<auditoriaUpdateWithoutVentaInput, auditoriaUncheckedUpdateWithoutVentaInput>
    create: XOR<auditoriaCreateWithoutVentaInput, auditoriaUncheckedCreateWithoutVentaInput>
  }

  export type auditoriaUpdateWithWhereUniqueWithoutVentaInput = {
    where: auditoriaWhereUniqueInput
    data: XOR<auditoriaUpdateWithoutVentaInput, auditoriaUncheckedUpdateWithoutVentaInput>
  }

  export type auditoriaUpdateManyWithWhereWithoutVentaInput = {
    where: auditoriaScalarWhereInput
    data: XOR<auditoriaUpdateManyMutationInput, auditoriaUncheckedUpdateManyWithoutVentaInput>
  }

  export type ventasCreateWithoutCostosExtrasInput = {
    cantidad: number
    total_venta: number
    fecha_venta?: Date | string
    nombre_cliente: string
    contacto_cliente: string
    costos_extras: number
    motivo_costo_extra: string
    precio_publico: number
    precio_contratista: number
    costo_compra: number
    variante?: variantesCreateNestedOneWithoutVentasInput
    auditorias?: auditoriaCreateNestedManyWithoutVentaInput
  }

  export type ventasUncheckedCreateWithoutCostosExtrasInput = {
    id?: number
    variante_id: number
    cantidad: number
    total_venta: number
    fecha_venta?: Date | string
    nombre_cliente: string
    contacto_cliente: string
    costos_extras: number
    motivo_costo_extra: string
    precio_publico: number
    precio_contratista: number
    costo_compra: number
    auditorias?: auditoriaUncheckedCreateNestedManyWithoutVentaInput
  }

  export type ventasCreateOrConnectWithoutCostosExtrasInput = {
    where: ventasWhereUniqueInput
    create: XOR<ventasCreateWithoutCostosExtrasInput, ventasUncheckedCreateWithoutCostosExtrasInput>
  }

  export type ventasUpsertWithoutCostosExtrasInput = {
    update: XOR<ventasUpdateWithoutCostosExtrasInput, ventasUncheckedUpdateWithoutCostosExtrasInput>
    create: XOR<ventasCreateWithoutCostosExtrasInput, ventasUncheckedCreateWithoutCostosExtrasInput>
    where?: ventasWhereInput
  }

  export type ventasUpdateToOneWithWhereWithoutCostosExtrasInput = {
    where?: ventasWhereInput
    data: XOR<ventasUpdateWithoutCostosExtrasInput, ventasUncheckedUpdateWithoutCostosExtrasInput>
  }

  export type ventasUpdateWithoutCostosExtrasInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    total_venta?: FloatFieldUpdateOperationsInput | number
    fecha_venta?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre_cliente?: StringFieldUpdateOperationsInput | string
    contacto_cliente?: StringFieldUpdateOperationsInput | string
    costos_extras?: FloatFieldUpdateOperationsInput | number
    motivo_costo_extra?: StringFieldUpdateOperationsInput | string
    precio_publico?: FloatFieldUpdateOperationsInput | number
    precio_contratista?: FloatFieldUpdateOperationsInput | number
    costo_compra?: FloatFieldUpdateOperationsInput | number
    variante?: variantesUpdateOneWithoutVentasNestedInput
    auditorias?: auditoriaUpdateManyWithoutVentaNestedInput
  }

  export type ventasUncheckedUpdateWithoutCostosExtrasInput = {
    id?: IntFieldUpdateOperationsInput | number
    variante_id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    total_venta?: FloatFieldUpdateOperationsInput | number
    fecha_venta?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre_cliente?: StringFieldUpdateOperationsInput | string
    contacto_cliente?: StringFieldUpdateOperationsInput | string
    costos_extras?: FloatFieldUpdateOperationsInput | number
    motivo_costo_extra?: StringFieldUpdateOperationsInput | string
    precio_publico?: FloatFieldUpdateOperationsInput | number
    precio_contratista?: FloatFieldUpdateOperationsInput | number
    costo_compra?: FloatFieldUpdateOperationsInput | number
    auditorias?: auditoriaUncheckedUpdateManyWithoutVentaNestedInput
  }

  export type productosCreateWithoutAuditoriasInput = {
    createdAt?: Date | string
    categoria?: categoriasCreateNestedOneWithoutProductosInput
    variantes?: variantesCreateNestedManyWithoutProductoInput
    usuario?: usuarioCreateNestedManyWithoutProductosInput
    estantes?: estantesCreateNestedOneWithoutProductosInput
  }

  export type productosUncheckedCreateWithoutAuditoriasInput = {
    id?: number
    categoriaId?: number | null
    createdAt?: Date | string
    estantesId?: number | null
    variantes?: variantesUncheckedCreateNestedManyWithoutProductoInput
    usuario?: usuarioUncheckedCreateNestedManyWithoutProductosInput
  }

  export type productosCreateOrConnectWithoutAuditoriasInput = {
    where: productosWhereUniqueInput
    create: XOR<productosCreateWithoutAuditoriasInput, productosUncheckedCreateWithoutAuditoriasInput>
  }

  export type variantesCreateWithoutAuditoriasInput = {
    locacion_id: number
    estante_id?: number | null
    foto: string
    nombre: string
    codigo: string
    color: string
    descripcion: string
    cantidad: number
    medidas: string
    precio_publico: number
    precio_contratista: number
    costo_compra: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ganacia_publico: number
    ganacia_contratista: number
    ganancias_stock: number
    producto?: productosCreateNestedOneWithoutVariantesInput
    ventas?: ventasCreateNestedManyWithoutVarianteInput
  }

  export type variantesUncheckedCreateWithoutAuditoriasInput = {
    id?: number
    producto_id: number
    locacion_id: number
    estante_id?: number | null
    foto: string
    nombre: string
    codigo: string
    color: string
    descripcion: string
    cantidad: number
    medidas: string
    precio_publico: number
    precio_contratista: number
    costo_compra: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ganacia_publico: number
    ganacia_contratista: number
    ganancias_stock: number
    ventas?: ventasUncheckedCreateNestedManyWithoutVarianteInput
  }

  export type variantesCreateOrConnectWithoutAuditoriasInput = {
    where: variantesWhereUniqueInput
    create: XOR<variantesCreateWithoutAuditoriasInput, variantesUncheckedCreateWithoutAuditoriasInput>
  }

  export type ventasCreateWithoutAuditoriasInput = {
    cantidad: number
    total_venta: number
    fecha_venta?: Date | string
    nombre_cliente: string
    contacto_cliente: string
    costos_extras: number
    motivo_costo_extra: string
    precio_publico: number
    precio_contratista: number
    costo_compra: number
    variante?: variantesCreateNestedOneWithoutVentasInput
    costosExtras?: costosExtrasCreateNestedManyWithoutVentaInput
  }

  export type ventasUncheckedCreateWithoutAuditoriasInput = {
    id?: number
    variante_id: number
    cantidad: number
    total_venta: number
    fecha_venta?: Date | string
    nombre_cliente: string
    contacto_cliente: string
    costos_extras: number
    motivo_costo_extra: string
    precio_publico: number
    precio_contratista: number
    costo_compra: number
    costosExtras?: costosExtrasUncheckedCreateNestedManyWithoutVentaInput
  }

  export type ventasCreateOrConnectWithoutAuditoriasInput = {
    where: ventasWhereUniqueInput
    create: XOR<ventasCreateWithoutAuditoriasInput, ventasUncheckedCreateWithoutAuditoriasInput>
  }

  export type estantesCreateWithoutAuditoriasInput = {
    Seccion: string
    nivel: number
    pasillo: number
    createdAt?: Date | string
    ubicacion?: ubicacionCreateNestedOneWithoutEstantesInput
    productos?: productosCreateNestedManyWithoutEstantesInput
  }

  export type estantesUncheckedCreateWithoutAuditoriasInput = {
    id?: number
    Seccion: string
    nivel: number
    pasillo: number
    createdAt?: Date | string
    ubicacionId?: number | null
    productos?: productosUncheckedCreateNestedManyWithoutEstantesInput
  }

  export type estantesCreateOrConnectWithoutAuditoriasInput = {
    where: estantesWhereUniqueInput
    create: XOR<estantesCreateWithoutAuditoriasInput, estantesUncheckedCreateWithoutAuditoriasInput>
  }

  export type categoriasCreateWithoutAuditoriasInput = {
    nombre: string
    createdAt?: Date | string
    productos?: productosCreateNestedManyWithoutCategoriaInput
  }

  export type categoriasUncheckedCreateWithoutAuditoriasInput = {
    id?: number
    nombre: string
    createdAt?: Date | string
    productos?: productosUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type categoriasCreateOrConnectWithoutAuditoriasInput = {
    where: categoriasWhereUniqueInput
    create: XOR<categoriasCreateWithoutAuditoriasInput, categoriasUncheckedCreateWithoutAuditoriasInput>
  }

  export type usuarioCreateWithoutAuditoriasInput = {
    nombre: string
    usuario: string
    email_phone: string
    password: string
    createdAt?: Date | string
    productos?: productosCreateNestedOneWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutAuditoriasInput = {
    id?: number
    productosId?: number | null
    nombre: string
    usuario: string
    email_phone: string
    password: string
    createdAt?: Date | string
  }

  export type usuarioCreateOrConnectWithoutAuditoriasInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutAuditoriasInput, usuarioUncheckedCreateWithoutAuditoriasInput>
  }

  export type productosUpsertWithoutAuditoriasInput = {
    update: XOR<productosUpdateWithoutAuditoriasInput, productosUncheckedUpdateWithoutAuditoriasInput>
    create: XOR<productosCreateWithoutAuditoriasInput, productosUncheckedCreateWithoutAuditoriasInput>
    where?: productosWhereInput
  }

  export type productosUpdateToOneWithWhereWithoutAuditoriasInput = {
    where?: productosWhereInput
    data: XOR<productosUpdateWithoutAuditoriasInput, productosUncheckedUpdateWithoutAuditoriasInput>
  }

  export type productosUpdateWithoutAuditoriasInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: categoriasUpdateOneWithoutProductosNestedInput
    variantes?: variantesUpdateManyWithoutProductoNestedInput
    usuario?: usuarioUpdateManyWithoutProductosNestedInput
    estantes?: estantesUpdateOneWithoutProductosNestedInput
  }

  export type productosUncheckedUpdateWithoutAuditoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estantesId?: NullableIntFieldUpdateOperationsInput | number | null
    variantes?: variantesUncheckedUpdateManyWithoutProductoNestedInput
    usuario?: usuarioUncheckedUpdateManyWithoutProductosNestedInput
  }

  export type variantesUpsertWithoutAuditoriasInput = {
    update: XOR<variantesUpdateWithoutAuditoriasInput, variantesUncheckedUpdateWithoutAuditoriasInput>
    create: XOR<variantesCreateWithoutAuditoriasInput, variantesUncheckedCreateWithoutAuditoriasInput>
    where?: variantesWhereInput
  }

  export type variantesUpdateToOneWithWhereWithoutAuditoriasInput = {
    where?: variantesWhereInput
    data: XOR<variantesUpdateWithoutAuditoriasInput, variantesUncheckedUpdateWithoutAuditoriasInput>
  }

  export type variantesUpdateWithoutAuditoriasInput = {
    locacion_id?: IntFieldUpdateOperationsInput | number
    estante_id?: NullableIntFieldUpdateOperationsInput | number | null
    foto?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    medidas?: StringFieldUpdateOperationsInput | string
    precio_publico?: FloatFieldUpdateOperationsInput | number
    precio_contratista?: FloatFieldUpdateOperationsInput | number
    costo_compra?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ganacia_publico?: FloatFieldUpdateOperationsInput | number
    ganacia_contratista?: FloatFieldUpdateOperationsInput | number
    ganancias_stock?: FloatFieldUpdateOperationsInput | number
    producto?: productosUpdateOneWithoutVariantesNestedInput
    ventas?: ventasUpdateManyWithoutVarianteNestedInput
  }

  export type variantesUncheckedUpdateWithoutAuditoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    producto_id?: IntFieldUpdateOperationsInput | number
    locacion_id?: IntFieldUpdateOperationsInput | number
    estante_id?: NullableIntFieldUpdateOperationsInput | number | null
    foto?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    medidas?: StringFieldUpdateOperationsInput | string
    precio_publico?: FloatFieldUpdateOperationsInput | number
    precio_contratista?: FloatFieldUpdateOperationsInput | number
    costo_compra?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ganacia_publico?: FloatFieldUpdateOperationsInput | number
    ganacia_contratista?: FloatFieldUpdateOperationsInput | number
    ganancias_stock?: FloatFieldUpdateOperationsInput | number
    ventas?: ventasUncheckedUpdateManyWithoutVarianteNestedInput
  }

  export type ventasUpsertWithoutAuditoriasInput = {
    update: XOR<ventasUpdateWithoutAuditoriasInput, ventasUncheckedUpdateWithoutAuditoriasInput>
    create: XOR<ventasCreateWithoutAuditoriasInput, ventasUncheckedCreateWithoutAuditoriasInput>
    where?: ventasWhereInput
  }

  export type ventasUpdateToOneWithWhereWithoutAuditoriasInput = {
    where?: ventasWhereInput
    data: XOR<ventasUpdateWithoutAuditoriasInput, ventasUncheckedUpdateWithoutAuditoriasInput>
  }

  export type ventasUpdateWithoutAuditoriasInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    total_venta?: FloatFieldUpdateOperationsInput | number
    fecha_venta?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre_cliente?: StringFieldUpdateOperationsInput | string
    contacto_cliente?: StringFieldUpdateOperationsInput | string
    costos_extras?: FloatFieldUpdateOperationsInput | number
    motivo_costo_extra?: StringFieldUpdateOperationsInput | string
    precio_publico?: FloatFieldUpdateOperationsInput | number
    precio_contratista?: FloatFieldUpdateOperationsInput | number
    costo_compra?: FloatFieldUpdateOperationsInput | number
    variante?: variantesUpdateOneWithoutVentasNestedInput
    costosExtras?: costosExtrasUpdateManyWithoutVentaNestedInput
  }

  export type ventasUncheckedUpdateWithoutAuditoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    variante_id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    total_venta?: FloatFieldUpdateOperationsInput | number
    fecha_venta?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre_cliente?: StringFieldUpdateOperationsInput | string
    contacto_cliente?: StringFieldUpdateOperationsInput | string
    costos_extras?: FloatFieldUpdateOperationsInput | number
    motivo_costo_extra?: StringFieldUpdateOperationsInput | string
    precio_publico?: FloatFieldUpdateOperationsInput | number
    precio_contratista?: FloatFieldUpdateOperationsInput | number
    costo_compra?: FloatFieldUpdateOperationsInput | number
    costosExtras?: costosExtrasUncheckedUpdateManyWithoutVentaNestedInput
  }

  export type estantesUpsertWithoutAuditoriasInput = {
    update: XOR<estantesUpdateWithoutAuditoriasInput, estantesUncheckedUpdateWithoutAuditoriasInput>
    create: XOR<estantesCreateWithoutAuditoriasInput, estantesUncheckedCreateWithoutAuditoriasInput>
    where?: estantesWhereInput
  }

  export type estantesUpdateToOneWithWhereWithoutAuditoriasInput = {
    where?: estantesWhereInput
    data: XOR<estantesUpdateWithoutAuditoriasInput, estantesUncheckedUpdateWithoutAuditoriasInput>
  }

  export type estantesUpdateWithoutAuditoriasInput = {
    Seccion?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    pasillo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ubicacion?: ubicacionUpdateOneWithoutEstantesNestedInput
    productos?: productosUpdateManyWithoutEstantesNestedInput
  }

  export type estantesUncheckedUpdateWithoutAuditoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    Seccion?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    pasillo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ubicacionId?: NullableIntFieldUpdateOperationsInput | number | null
    productos?: productosUncheckedUpdateManyWithoutEstantesNestedInput
  }

  export type categoriasUpsertWithoutAuditoriasInput = {
    update: XOR<categoriasUpdateWithoutAuditoriasInput, categoriasUncheckedUpdateWithoutAuditoriasInput>
    create: XOR<categoriasCreateWithoutAuditoriasInput, categoriasUncheckedCreateWithoutAuditoriasInput>
    where?: categoriasWhereInput
  }

  export type categoriasUpdateToOneWithWhereWithoutAuditoriasInput = {
    where?: categoriasWhereInput
    data: XOR<categoriasUpdateWithoutAuditoriasInput, categoriasUncheckedUpdateWithoutAuditoriasInput>
  }

  export type categoriasUpdateWithoutAuditoriasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productos?: productosUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriasUncheckedUpdateWithoutAuditoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productos?: productosUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type usuarioUpsertWithoutAuditoriasInput = {
    update: XOR<usuarioUpdateWithoutAuditoriasInput, usuarioUncheckedUpdateWithoutAuditoriasInput>
    create: XOR<usuarioCreateWithoutAuditoriasInput, usuarioUncheckedCreateWithoutAuditoriasInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutAuditoriasInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutAuditoriasInput, usuarioUncheckedUpdateWithoutAuditoriasInput>
  }

  export type usuarioUpdateWithoutAuditoriasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    email_phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productos?: productosUpdateOneWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutAuditoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    productosId?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    email_phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type auditoriaCreateManyUsuarioInput = {
    id?: number
    accion: $Enums.Accion
    productoId?: number | null
    varianteId?: number | null
    ventaId?: number | null
    estanteId?: number | null
    categoriaId?: number | null
    createdAt?: Date | string
  }

  export type auditoriaUpdateWithoutUsuarioInput = {
    accion?: EnumAccionFieldUpdateOperationsInput | $Enums.Accion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    producto?: productosUpdateOneWithoutAuditoriasNestedInput
    variante?: variantesUpdateOneWithoutAuditoriasNestedInput
    venta?: ventasUpdateOneWithoutAuditoriasNestedInput
    estante?: estantesUpdateOneWithoutAuditoriasNestedInput
    categoria?: categoriasUpdateOneWithoutAuditoriasNestedInput
  }

  export type auditoriaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    accion?: EnumAccionFieldUpdateOperationsInput | $Enums.Accion
    productoId?: NullableIntFieldUpdateOperationsInput | number | null
    varianteId?: NullableIntFieldUpdateOperationsInput | number | null
    ventaId?: NullableIntFieldUpdateOperationsInput | number | null
    estanteId?: NullableIntFieldUpdateOperationsInput | number | null
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type auditoriaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    accion?: EnumAccionFieldUpdateOperationsInput | $Enums.Accion
    productoId?: NullableIntFieldUpdateOperationsInput | number | null
    varianteId?: NullableIntFieldUpdateOperationsInput | number | null
    ventaId?: NullableIntFieldUpdateOperationsInput | number | null
    estanteId?: NullableIntFieldUpdateOperationsInput | number | null
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type estantesCreateManyUbicacionInput = {
    id?: number
    Seccion: string
    nivel: number
    pasillo: number
    createdAt?: Date | string
  }

  export type estantesUpdateWithoutUbicacionInput = {
    Seccion?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    pasillo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productos?: productosUpdateManyWithoutEstantesNestedInput
    auditorias?: auditoriaUpdateManyWithoutEstanteNestedInput
  }

  export type estantesUncheckedUpdateWithoutUbicacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    Seccion?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    pasillo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productos?: productosUncheckedUpdateManyWithoutEstantesNestedInput
    auditorias?: auditoriaUncheckedUpdateManyWithoutEstanteNestedInput
  }

  export type estantesUncheckedUpdateManyWithoutUbicacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    Seccion?: StringFieldUpdateOperationsInput | string
    nivel?: IntFieldUpdateOperationsInput | number
    pasillo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productosCreateManyEstantesInput = {
    id?: number
    categoriaId?: number | null
    createdAt?: Date | string
  }

  export type auditoriaCreateManyEstanteInput = {
    id?: number
    usuario_id: number
    accion: $Enums.Accion
    productoId?: number | null
    varianteId?: number | null
    ventaId?: number | null
    categoriaId?: number | null
    createdAt?: Date | string
  }

  export type productosUpdateWithoutEstantesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: categoriasUpdateOneWithoutProductosNestedInput
    variantes?: variantesUpdateManyWithoutProductoNestedInput
    usuario?: usuarioUpdateManyWithoutProductosNestedInput
    auditorias?: auditoriaUpdateManyWithoutProductoNestedInput
  }

  export type productosUncheckedUpdateWithoutEstantesInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variantes?: variantesUncheckedUpdateManyWithoutProductoNestedInput
    usuario?: usuarioUncheckedUpdateManyWithoutProductosNestedInput
    auditorias?: auditoriaUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type productosUncheckedUpdateManyWithoutEstantesInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type auditoriaUpdateWithoutEstanteInput = {
    accion?: EnumAccionFieldUpdateOperationsInput | $Enums.Accion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    producto?: productosUpdateOneWithoutAuditoriasNestedInput
    variante?: variantesUpdateOneWithoutAuditoriasNestedInput
    venta?: ventasUpdateOneWithoutAuditoriasNestedInput
    categoria?: categoriasUpdateOneWithoutAuditoriasNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutAuditoriasNestedInput
  }

  export type auditoriaUncheckedUpdateWithoutEstanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    accion?: EnumAccionFieldUpdateOperationsInput | $Enums.Accion
    productoId?: NullableIntFieldUpdateOperationsInput | number | null
    varianteId?: NullableIntFieldUpdateOperationsInput | number | null
    ventaId?: NullableIntFieldUpdateOperationsInput | number | null
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type auditoriaUncheckedUpdateManyWithoutEstanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    accion?: EnumAccionFieldUpdateOperationsInput | $Enums.Accion
    productoId?: NullableIntFieldUpdateOperationsInput | number | null
    varianteId?: NullableIntFieldUpdateOperationsInput | number | null
    ventaId?: NullableIntFieldUpdateOperationsInput | number | null
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productosCreateManyCategoriaInput = {
    id?: number
    createdAt?: Date | string
    estantesId?: number | null
  }

  export type auditoriaCreateManyCategoriaInput = {
    id?: number
    usuario_id: number
    accion: $Enums.Accion
    productoId?: number | null
    varianteId?: number | null
    ventaId?: number | null
    estanteId?: number | null
    createdAt?: Date | string
  }

  export type productosUpdateWithoutCategoriaInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variantes?: variantesUpdateManyWithoutProductoNestedInput
    usuario?: usuarioUpdateManyWithoutProductosNestedInput
    estantes?: estantesUpdateOneWithoutProductosNestedInput
    auditorias?: auditoriaUpdateManyWithoutProductoNestedInput
  }

  export type productosUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estantesId?: NullableIntFieldUpdateOperationsInput | number | null
    variantes?: variantesUncheckedUpdateManyWithoutProductoNestedInput
    usuario?: usuarioUncheckedUpdateManyWithoutProductosNestedInput
    auditorias?: auditoriaUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type productosUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estantesId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type auditoriaUpdateWithoutCategoriaInput = {
    accion?: EnumAccionFieldUpdateOperationsInput | $Enums.Accion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    producto?: productosUpdateOneWithoutAuditoriasNestedInput
    variante?: variantesUpdateOneWithoutAuditoriasNestedInput
    venta?: ventasUpdateOneWithoutAuditoriasNestedInput
    estante?: estantesUpdateOneWithoutAuditoriasNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutAuditoriasNestedInput
  }

  export type auditoriaUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    accion?: EnumAccionFieldUpdateOperationsInput | $Enums.Accion
    productoId?: NullableIntFieldUpdateOperationsInput | number | null
    varianteId?: NullableIntFieldUpdateOperationsInput | number | null
    ventaId?: NullableIntFieldUpdateOperationsInput | number | null
    estanteId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type auditoriaUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    accion?: EnumAccionFieldUpdateOperationsInput | $Enums.Accion
    productoId?: NullableIntFieldUpdateOperationsInput | number | null
    varianteId?: NullableIntFieldUpdateOperationsInput | number | null
    ventaId?: NullableIntFieldUpdateOperationsInput | number | null
    estanteId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type variantesCreateManyProductoInput = {
    id?: number
    locacion_id: number
    estante_id?: number | null
    foto: string
    nombre: string
    codigo: string
    color: string
    descripcion: string
    cantidad: number
    medidas: string
    precio_publico: number
    precio_contratista: number
    costo_compra: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ganacia_publico: number
    ganacia_contratista: number
    ganancias_stock: number
  }

  export type usuarioCreateManyProductosInput = {
    id?: number
    nombre: string
    usuario: string
    email_phone: string
    password: string
    createdAt?: Date | string
  }

  export type auditoriaCreateManyProductoInput = {
    id?: number
    usuario_id: number
    accion: $Enums.Accion
    varianteId?: number | null
    ventaId?: number | null
    estanteId?: number | null
    categoriaId?: number | null
    createdAt?: Date | string
  }

  export type variantesUpdateWithoutProductoInput = {
    locacion_id?: IntFieldUpdateOperationsInput | number
    estante_id?: NullableIntFieldUpdateOperationsInput | number | null
    foto?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    medidas?: StringFieldUpdateOperationsInput | string
    precio_publico?: FloatFieldUpdateOperationsInput | number
    precio_contratista?: FloatFieldUpdateOperationsInput | number
    costo_compra?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ganacia_publico?: FloatFieldUpdateOperationsInput | number
    ganacia_contratista?: FloatFieldUpdateOperationsInput | number
    ganancias_stock?: FloatFieldUpdateOperationsInput | number
    ventas?: ventasUpdateManyWithoutVarianteNestedInput
    auditorias?: auditoriaUpdateManyWithoutVarianteNestedInput
  }

  export type variantesUncheckedUpdateWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    locacion_id?: IntFieldUpdateOperationsInput | number
    estante_id?: NullableIntFieldUpdateOperationsInput | number | null
    foto?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    medidas?: StringFieldUpdateOperationsInput | string
    precio_publico?: FloatFieldUpdateOperationsInput | number
    precio_contratista?: FloatFieldUpdateOperationsInput | number
    costo_compra?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ganacia_publico?: FloatFieldUpdateOperationsInput | number
    ganacia_contratista?: FloatFieldUpdateOperationsInput | number
    ganancias_stock?: FloatFieldUpdateOperationsInput | number
    ventas?: ventasUncheckedUpdateManyWithoutVarianteNestedInput
    auditorias?: auditoriaUncheckedUpdateManyWithoutVarianteNestedInput
  }

  export type variantesUncheckedUpdateManyWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    locacion_id?: IntFieldUpdateOperationsInput | number
    estante_id?: NullableIntFieldUpdateOperationsInput | number | null
    foto?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    medidas?: StringFieldUpdateOperationsInput | string
    precio_publico?: FloatFieldUpdateOperationsInput | number
    precio_contratista?: FloatFieldUpdateOperationsInput | number
    costo_compra?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ganacia_publico?: FloatFieldUpdateOperationsInput | number
    ganacia_contratista?: FloatFieldUpdateOperationsInput | number
    ganancias_stock?: FloatFieldUpdateOperationsInput | number
  }

  export type usuarioUpdateWithoutProductosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    email_phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditorias?: auditoriaUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutProductosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    email_phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditorias?: auditoriaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateManyWithoutProductosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    email_phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type auditoriaUpdateWithoutProductoInput = {
    accion?: EnumAccionFieldUpdateOperationsInput | $Enums.Accion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variante?: variantesUpdateOneWithoutAuditoriasNestedInput
    venta?: ventasUpdateOneWithoutAuditoriasNestedInput
    estante?: estantesUpdateOneWithoutAuditoriasNestedInput
    categoria?: categoriasUpdateOneWithoutAuditoriasNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutAuditoriasNestedInput
  }

  export type auditoriaUncheckedUpdateWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    accion?: EnumAccionFieldUpdateOperationsInput | $Enums.Accion
    varianteId?: NullableIntFieldUpdateOperationsInput | number | null
    ventaId?: NullableIntFieldUpdateOperationsInput | number | null
    estanteId?: NullableIntFieldUpdateOperationsInput | number | null
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type auditoriaUncheckedUpdateManyWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    accion?: EnumAccionFieldUpdateOperationsInput | $Enums.Accion
    varianteId?: NullableIntFieldUpdateOperationsInput | number | null
    ventaId?: NullableIntFieldUpdateOperationsInput | number | null
    estanteId?: NullableIntFieldUpdateOperationsInput | number | null
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ventasCreateManyVarianteInput = {
    id?: number
    cantidad: number
    total_venta: number
    fecha_venta?: Date | string
    nombre_cliente: string
    contacto_cliente: string
    costos_extras: number
    motivo_costo_extra: string
    precio_publico: number
    precio_contratista: number
    costo_compra: number
  }

  export type auditoriaCreateManyVarianteInput = {
    id?: number
    usuario_id: number
    accion: $Enums.Accion
    productoId?: number | null
    ventaId?: number | null
    estanteId?: number | null
    categoriaId?: number | null
    createdAt?: Date | string
  }

  export type ventasUpdateWithoutVarianteInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    total_venta?: FloatFieldUpdateOperationsInput | number
    fecha_venta?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre_cliente?: StringFieldUpdateOperationsInput | string
    contacto_cliente?: StringFieldUpdateOperationsInput | string
    costos_extras?: FloatFieldUpdateOperationsInput | number
    motivo_costo_extra?: StringFieldUpdateOperationsInput | string
    precio_publico?: FloatFieldUpdateOperationsInput | number
    precio_contratista?: FloatFieldUpdateOperationsInput | number
    costo_compra?: FloatFieldUpdateOperationsInput | number
    costosExtras?: costosExtrasUpdateManyWithoutVentaNestedInput
    auditorias?: auditoriaUpdateManyWithoutVentaNestedInput
  }

  export type ventasUncheckedUpdateWithoutVarianteInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    total_venta?: FloatFieldUpdateOperationsInput | number
    fecha_venta?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre_cliente?: StringFieldUpdateOperationsInput | string
    contacto_cliente?: StringFieldUpdateOperationsInput | string
    costos_extras?: FloatFieldUpdateOperationsInput | number
    motivo_costo_extra?: StringFieldUpdateOperationsInput | string
    precio_publico?: FloatFieldUpdateOperationsInput | number
    precio_contratista?: FloatFieldUpdateOperationsInput | number
    costo_compra?: FloatFieldUpdateOperationsInput | number
    costosExtras?: costosExtrasUncheckedUpdateManyWithoutVentaNestedInput
    auditorias?: auditoriaUncheckedUpdateManyWithoutVentaNestedInput
  }

  export type ventasUncheckedUpdateManyWithoutVarianteInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    total_venta?: FloatFieldUpdateOperationsInput | number
    fecha_venta?: DateTimeFieldUpdateOperationsInput | Date | string
    nombre_cliente?: StringFieldUpdateOperationsInput | string
    contacto_cliente?: StringFieldUpdateOperationsInput | string
    costos_extras?: FloatFieldUpdateOperationsInput | number
    motivo_costo_extra?: StringFieldUpdateOperationsInput | string
    precio_publico?: FloatFieldUpdateOperationsInput | number
    precio_contratista?: FloatFieldUpdateOperationsInput | number
    costo_compra?: FloatFieldUpdateOperationsInput | number
  }

  export type auditoriaUpdateWithoutVarianteInput = {
    accion?: EnumAccionFieldUpdateOperationsInput | $Enums.Accion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    producto?: productosUpdateOneWithoutAuditoriasNestedInput
    venta?: ventasUpdateOneWithoutAuditoriasNestedInput
    estante?: estantesUpdateOneWithoutAuditoriasNestedInput
    categoria?: categoriasUpdateOneWithoutAuditoriasNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutAuditoriasNestedInput
  }

  export type auditoriaUncheckedUpdateWithoutVarianteInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    accion?: EnumAccionFieldUpdateOperationsInput | $Enums.Accion
    productoId?: NullableIntFieldUpdateOperationsInput | number | null
    ventaId?: NullableIntFieldUpdateOperationsInput | number | null
    estanteId?: NullableIntFieldUpdateOperationsInput | number | null
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type auditoriaUncheckedUpdateManyWithoutVarianteInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    accion?: EnumAccionFieldUpdateOperationsInput | $Enums.Accion
    productoId?: NullableIntFieldUpdateOperationsInput | number | null
    ventaId?: NullableIntFieldUpdateOperationsInput | number | null
    estanteId?: NullableIntFieldUpdateOperationsInput | number | null
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type costosExtrasCreateManyVentaInput = {
    id?: number
    motivo: string
    costo: number
    createdAt?: Date | string
  }

  export type auditoriaCreateManyVentaInput = {
    id?: number
    usuario_id: number
    accion: $Enums.Accion
    productoId?: number | null
    varianteId?: number | null
    estanteId?: number | null
    categoriaId?: number | null
    createdAt?: Date | string
  }

  export type costosExtrasUpdateWithoutVentaInput = {
    motivo?: StringFieldUpdateOperationsInput | string
    costo?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type costosExtrasUncheckedUpdateWithoutVentaInput = {
    id?: IntFieldUpdateOperationsInput | number
    motivo?: StringFieldUpdateOperationsInput | string
    costo?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type costosExtrasUncheckedUpdateManyWithoutVentaInput = {
    id?: IntFieldUpdateOperationsInput | number
    motivo?: StringFieldUpdateOperationsInput | string
    costo?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type auditoriaUpdateWithoutVentaInput = {
    accion?: EnumAccionFieldUpdateOperationsInput | $Enums.Accion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    producto?: productosUpdateOneWithoutAuditoriasNestedInput
    variante?: variantesUpdateOneWithoutAuditoriasNestedInput
    estante?: estantesUpdateOneWithoutAuditoriasNestedInput
    categoria?: categoriasUpdateOneWithoutAuditoriasNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutAuditoriasNestedInput
  }

  export type auditoriaUncheckedUpdateWithoutVentaInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    accion?: EnumAccionFieldUpdateOperationsInput | $Enums.Accion
    productoId?: NullableIntFieldUpdateOperationsInput | number | null
    varianteId?: NullableIntFieldUpdateOperationsInput | number | null
    estanteId?: NullableIntFieldUpdateOperationsInput | number | null
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type auditoriaUncheckedUpdateManyWithoutVentaInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    accion?: EnumAccionFieldUpdateOperationsInput | $Enums.Accion
    productoId?: NullableIntFieldUpdateOperationsInput | number | null
    varianteId?: NullableIntFieldUpdateOperationsInput | number | null
    estanteId?: NullableIntFieldUpdateOperationsInput | number | null
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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