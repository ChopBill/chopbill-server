
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
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model order_detail
 * 
 */
export type order_detail = $Result.DefaultSelection<Prisma.$order_detailPayload>
/**
 * Model friend_order
 * 
 */
export type friend_order = $Result.DefaultSelection<Prisma.$friend_orderPayload>
/**
 * Model bill
 * 
 */
export type bill = $Result.DefaultSelection<Prisma.$billPayload>
/**
 * Model payment_account
 * 
 */
export type payment_account = $Result.DefaultSelection<Prisma.$payment_accountPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;

  /**
   * `prisma.order_detail`: Exposes CRUD operations for the **order_detail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_details
    * const order_details = await prisma.order_detail.findMany()
    * ```
    */
  get order_detail(): Prisma.order_detailDelegate<ExtArgs>;

  /**
   * `prisma.friend_order`: Exposes CRUD operations for the **friend_order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friend_orders
    * const friend_orders = await prisma.friend_order.findMany()
    * ```
    */
  get friend_order(): Prisma.friend_orderDelegate<ExtArgs>;

  /**
   * `prisma.bill`: Exposes CRUD operations for the **bill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bills
    * const bills = await prisma.bill.findMany()
    * ```
    */
  get bill(): Prisma.billDelegate<ExtArgs>;

  /**
   * `prisma.payment_account`: Exposes CRUD operations for the **payment_account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payment_accounts
    * const payment_accounts = await prisma.payment_account.findMany()
    * ```
    */
  get payment_account(): Prisma.payment_accountDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.12.0
   * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    users: 'users',
    order_detail: 'order_detail',
    friend_order: 'friend_order',
    bill: 'bill',
    payment_account: 'payment_account'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'users' | 'order_detail' | 'friend_order' | 'bill' | 'payment_account'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      order_detail: {
        payload: Prisma.$order_detailPayload<ExtArgs>
        fields: Prisma.order_detailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_detailFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_detailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_detailFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_detailPayload>
          }
          findFirst: {
            args: Prisma.order_detailFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_detailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_detailFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_detailPayload>
          }
          findMany: {
            args: Prisma.order_detailFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_detailPayload>[]
          }
          create: {
            args: Prisma.order_detailCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_detailPayload>
          }
          createMany: {
            args: Prisma.order_detailCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.order_detailDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_detailPayload>
          }
          update: {
            args: Prisma.order_detailUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_detailPayload>
          }
          deleteMany: {
            args: Prisma.order_detailDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.order_detailUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.order_detailUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_detailPayload>
          }
          aggregate: {
            args: Prisma.Order_detailAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrder_detail>
          }
          groupBy: {
            args: Prisma.order_detailGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Order_detailGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_detailCountArgs<ExtArgs>,
            result: $Utils.Optional<Order_detailCountAggregateOutputType> | number
          }
        }
      }
      friend_order: {
        payload: Prisma.$friend_orderPayload<ExtArgs>
        fields: Prisma.friend_orderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.friend_orderFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friend_orderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.friend_orderFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friend_orderPayload>
          }
          findFirst: {
            args: Prisma.friend_orderFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friend_orderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.friend_orderFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friend_orderPayload>
          }
          findMany: {
            args: Prisma.friend_orderFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friend_orderPayload>[]
          }
          create: {
            args: Prisma.friend_orderCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friend_orderPayload>
          }
          createMany: {
            args: Prisma.friend_orderCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.friend_orderDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friend_orderPayload>
          }
          update: {
            args: Prisma.friend_orderUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friend_orderPayload>
          }
          deleteMany: {
            args: Prisma.friend_orderDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.friend_orderUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.friend_orderUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friend_orderPayload>
          }
          aggregate: {
            args: Prisma.Friend_orderAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFriend_order>
          }
          groupBy: {
            args: Prisma.friend_orderGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Friend_orderGroupByOutputType>[]
          }
          count: {
            args: Prisma.friend_orderCountArgs<ExtArgs>,
            result: $Utils.Optional<Friend_orderCountAggregateOutputType> | number
          }
        }
      }
      bill: {
        payload: Prisma.$billPayload<ExtArgs>
        fields: Prisma.billFieldRefs
        operations: {
          findUnique: {
            args: Prisma.billFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$billPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.billFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$billPayload>
          }
          findFirst: {
            args: Prisma.billFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$billPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.billFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$billPayload>
          }
          findMany: {
            args: Prisma.billFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$billPayload>[]
          }
          create: {
            args: Prisma.billCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$billPayload>
          }
          createMany: {
            args: Prisma.billCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.billDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$billPayload>
          }
          update: {
            args: Prisma.billUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$billPayload>
          }
          deleteMany: {
            args: Prisma.billDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.billUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.billUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$billPayload>
          }
          aggregate: {
            args: Prisma.BillAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBill>
          }
          groupBy: {
            args: Prisma.billGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BillGroupByOutputType>[]
          }
          count: {
            args: Prisma.billCountArgs<ExtArgs>,
            result: $Utils.Optional<BillCountAggregateOutputType> | number
          }
        }
      }
      payment_account: {
        payload: Prisma.$payment_accountPayload<ExtArgs>
        fields: Prisma.payment_accountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.payment_accountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$payment_accountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.payment_accountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$payment_accountPayload>
          }
          findFirst: {
            args: Prisma.payment_accountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$payment_accountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.payment_accountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$payment_accountPayload>
          }
          findMany: {
            args: Prisma.payment_accountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$payment_accountPayload>[]
          }
          create: {
            args: Prisma.payment_accountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$payment_accountPayload>
          }
          createMany: {
            args: Prisma.payment_accountCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.payment_accountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$payment_accountPayload>
          }
          update: {
            args: Prisma.payment_accountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$payment_accountPayload>
          }
          deleteMany: {
            args: Prisma.payment_accountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.payment_accountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.payment_accountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$payment_accountPayload>
          }
          aggregate: {
            args: Prisma.Payment_accountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePayment_account>
          }
          groupBy: {
            args: Prisma.payment_accountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Payment_accountGroupByOutputType>[]
          }
          count: {
            args: Prisma.payment_accountCountArgs<ExtArgs>,
            result: $Utils.Optional<Payment_accountCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    bill: number
    payment_account: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | UsersCountOutputTypeCountBillArgs
    payment_account?: boolean | UsersCountOutputTypeCountPayment_accountArgs
  }

  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: billWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPayment_accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: payment_accountWhereInput
  }



  /**
   * Count Type Friend_orderCountOutputType
   */

  export type Friend_orderCountOutputType = {
    order_detail: number
  }

  export type Friend_orderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_detail?: boolean | Friend_orderCountOutputTypeCountOrder_detailArgs
  }

  // Custom InputTypes

  /**
   * Friend_orderCountOutputType without action
   */
  export type Friend_orderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend_orderCountOutputType
     */
    select?: Friend_orderCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Friend_orderCountOutputType without action
   */
  export type Friend_orderCountOutputTypeCountOrder_detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_detailWhereInput
  }



  /**
   * Count Type BillCountOutputType
   */

  export type BillCountOutputType = {
    friend_order: number
  }

  export type BillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    friend_order?: boolean | BillCountOutputTypeCountFriend_orderArgs
  }

  // Custom InputTypes

  /**
   * BillCountOutputType without action
   */
  export type BillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillCountOutputType
     */
    select?: BillCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BillCountOutputType without action
   */
  export type BillCountOutputTypeCountFriend_orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: friend_orderWhereInput
  }



  /**
   * Count Type Payment_accountCountOutputType
   */

  export type Payment_accountCountOutputType = {
    bill: number
  }

  export type Payment_accountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | Payment_accountCountOutputTypeCountBillArgs
  }

  // Custom InputTypes

  /**
   * Payment_accountCountOutputType without action
   */
  export type Payment_accountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment_accountCountOutputType
     */
    select?: Payment_accountCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Payment_accountCountOutputType without action
   */
  export type Payment_accountCountOutputTypeCountBillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: billWhereInput
  }



  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    fullname: string | null
    phone_number: string | null
    email: string | null
    bio: string | null
    dob: Date | null
    photo_profile: string | null
    created_at: Date | null
    update_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    fullname: string | null
    phone_number: string | null
    email: string | null
    bio: string | null
    dob: Date | null
    photo_profile: string | null
    created_at: Date | null
    update_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    password: number
    fullname: number
    phone_number: number
    email: number
    bio: number
    dob: number
    photo_profile: number
    created_at: number
    update_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    fullname?: true
    phone_number?: true
    email?: true
    bio?: true
    dob?: true
    photo_profile?: true
    created_at?: true
    update_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    fullname?: true
    phone_number?: true
    email?: true
    bio?: true
    dob?: true
    photo_profile?: true
    created_at?: true
    update_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    fullname?: true
    phone_number?: true
    email?: true
    bio?: true
    dob?: true
    photo_profile?: true
    created_at?: true
    update_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string | null
    password: string | null
    fullname: string | null
    phone_number: string | null
    email: string | null
    bio: string | null
    dob: Date | null
    photo_profile: string | null
    created_at: Date
    update_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    fullname?: boolean
    phone_number?: boolean
    email?: boolean
    bio?: boolean
    dob?: boolean
    photo_profile?: boolean
    created_at?: boolean
    update_at?: boolean
    bill?: boolean | users$billArgs<ExtArgs>
    payment_account?: boolean | users$payment_accountArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    fullname?: boolean
    phone_number?: boolean
    email?: boolean
    bio?: boolean
    dob?: boolean
    photo_profile?: boolean
    created_at?: boolean
    update_at?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | users$billArgs<ExtArgs>
    payment_account?: boolean | users$payment_accountArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      bill: Prisma.$billPayload<ExtArgs>[]
      payment_account: Prisma.$payment_accountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string | null
      password: string | null
      fullname: string | null
      phone_number: string | null
      email: string | null
      bio: string | null
      dob: Date | null
      photo_profile: string | null
      created_at: Date
      update_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usersCreateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usersDeleteArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpsertArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    bill<T extends users$billArgs<ExtArgs> = {}>(args?: Subset<T, users$billArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$billPayload<ExtArgs>, T, 'findMany'> | Null>;

    payment_account<T extends users$payment_accountArgs<ExtArgs> = {}>(args?: Subset<T, users$payment_accountArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_accountPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly fullname: FieldRef<"users", 'String'>
    readonly phone_number: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly bio: FieldRef<"users", 'String'>
    readonly dob: FieldRef<"users", 'DateTime'>
    readonly photo_profile: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly update_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }


  /**
   * users.bill
   */
  export type users$billArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill
     */
    select?: billSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billInclude<ExtArgs> | null
    where?: billWhereInput
    orderBy?: billOrderByWithRelationInput | billOrderByWithRelationInput[]
    cursor?: billWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }


  /**
   * users.payment_account
   */
  export type users$payment_accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_account
     */
    select?: payment_accountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_accountInclude<ExtArgs> | null
    where?: payment_accountWhereInput
    orderBy?: payment_accountOrderByWithRelationInput | payment_accountOrderByWithRelationInput[]
    cursor?: payment_accountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Payment_accountScalarFieldEnum | Payment_accountScalarFieldEnum[]
  }


  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
  }



  /**
   * Model order_detail
   */

  export type AggregateOrder_detail = {
    _count: Order_detailCountAggregateOutputType | null
    _avg: Order_detailAvgAggregateOutputType | null
    _sum: Order_detailSumAggregateOutputType | null
    _min: Order_detailMinAggregateOutputType | null
    _max: Order_detailMaxAggregateOutputType | null
  }

  export type Order_detailAvgAggregateOutputType = {
    id: number | null
    friend_order_id: number | null
    quantity: number | null
    price: number | null
  }

  export type Order_detailSumAggregateOutputType = {
    id: number | null
    friend_order_id: number | null
    quantity: number | null
    price: number | null
  }

  export type Order_detailMinAggregateOutputType = {
    id: number | null
    friend_order_id: number | null
    menu: string | null
    quantity: number | null
    price: number | null
  }

  export type Order_detailMaxAggregateOutputType = {
    id: number | null
    friend_order_id: number | null
    menu: string | null
    quantity: number | null
    price: number | null
  }

  export type Order_detailCountAggregateOutputType = {
    id: number
    friend_order_id: number
    menu: number
    quantity: number
    price: number
    _all: number
  }


  export type Order_detailAvgAggregateInputType = {
    id?: true
    friend_order_id?: true
    quantity?: true
    price?: true
  }

  export type Order_detailSumAggregateInputType = {
    id?: true
    friend_order_id?: true
    quantity?: true
    price?: true
  }

  export type Order_detailMinAggregateInputType = {
    id?: true
    friend_order_id?: true
    menu?: true
    quantity?: true
    price?: true
  }

  export type Order_detailMaxAggregateInputType = {
    id?: true
    friend_order_id?: true
    menu?: true
    quantity?: true
    price?: true
  }

  export type Order_detailCountAggregateInputType = {
    id?: true
    friend_order_id?: true
    menu?: true
    quantity?: true
    price?: true
    _all?: true
  }

  export type Order_detailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_detail to aggregate.
     */
    where?: order_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_details to fetch.
     */
    orderBy?: order_detailOrderByWithRelationInput | order_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_details
    **/
    _count?: true | Order_detailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_detailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_detailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_detailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_detailMaxAggregateInputType
  }

  export type GetOrder_detailAggregateType<T extends Order_detailAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_detail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_detail[P]>
      : GetScalarType<T[P], AggregateOrder_detail[P]>
  }




  export type order_detailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_detailWhereInput
    orderBy?: order_detailOrderByWithAggregationInput | order_detailOrderByWithAggregationInput[]
    by: Order_detailScalarFieldEnum[] | Order_detailScalarFieldEnum
    having?: order_detailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_detailCountAggregateInputType | true
    _avg?: Order_detailAvgAggregateInputType
    _sum?: Order_detailSumAggregateInputType
    _min?: Order_detailMinAggregateInputType
    _max?: Order_detailMaxAggregateInputType
  }

  export type Order_detailGroupByOutputType = {
    id: number
    friend_order_id: number | null
    menu: string
    quantity: number
    price: number
    _count: Order_detailCountAggregateOutputType | null
    _avg: Order_detailAvgAggregateOutputType | null
    _sum: Order_detailSumAggregateOutputType | null
    _min: Order_detailMinAggregateOutputType | null
    _max: Order_detailMaxAggregateOutputType | null
  }

  type GetOrder_detailGroupByPayload<T extends order_detailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_detailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_detailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_detailGroupByOutputType[P]>
            : GetScalarType<T[P], Order_detailGroupByOutputType[P]>
        }
      >
    >


  export type order_detailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    friend_order_id?: boolean
    menu?: boolean
    quantity?: boolean
    price?: boolean
    friend_order?: boolean | order_detail$friend_orderArgs<ExtArgs>
  }, ExtArgs["result"]["order_detail"]>

  export type order_detailSelectScalar = {
    id?: boolean
    friend_order_id?: boolean
    menu?: boolean
    quantity?: boolean
    price?: boolean
  }

  export type order_detailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    friend_order?: boolean | order_detail$friend_orderArgs<ExtArgs>
  }


  export type $order_detailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_detail"
    objects: {
      friend_order: Prisma.$friend_orderPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      friend_order_id: number | null
      menu: string
      quantity: number
      price: number
    }, ExtArgs["result"]["order_detail"]>
    composites: {}
  }


  type order_detailGetPayload<S extends boolean | null | undefined | order_detailDefaultArgs> = $Result.GetResult<Prisma.$order_detailPayload, S>

  type order_detailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<order_detailFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Order_detailCountAggregateInputType | true
    }

  export interface order_detailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_detail'], meta: { name: 'order_detail' } }
    /**
     * Find zero or one Order_detail that matches the filter.
     * @param {order_detailFindUniqueArgs} args - Arguments to find a Order_detail
     * @example
     * // Get one Order_detail
     * const order_detail = await prisma.order_detail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends order_detailFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, order_detailFindUniqueArgs<ExtArgs>>
    ): Prisma__order_detailClient<$Result.GetResult<Prisma.$order_detailPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Order_detail that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {order_detailFindUniqueOrThrowArgs} args - Arguments to find a Order_detail
     * @example
     * // Get one Order_detail
     * const order_detail = await prisma.order_detail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends order_detailFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, order_detailFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__order_detailClient<$Result.GetResult<Prisma.$order_detailPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Order_detail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_detailFindFirstArgs} args - Arguments to find a Order_detail
     * @example
     * // Get one Order_detail
     * const order_detail = await prisma.order_detail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends order_detailFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, order_detailFindFirstArgs<ExtArgs>>
    ): Prisma__order_detailClient<$Result.GetResult<Prisma.$order_detailPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Order_detail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_detailFindFirstOrThrowArgs} args - Arguments to find a Order_detail
     * @example
     * // Get one Order_detail
     * const order_detail = await prisma.order_detail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends order_detailFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, order_detailFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__order_detailClient<$Result.GetResult<Prisma.$order_detailPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Order_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_detailFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_details
     * const order_details = await prisma.order_detail.findMany()
     * 
     * // Get first 10 Order_details
     * const order_details = await prisma.order_detail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const order_detailWithIdOnly = await prisma.order_detail.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends order_detailFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, order_detailFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_detailPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Order_detail.
     * @param {order_detailCreateArgs} args - Arguments to create a Order_detail.
     * @example
     * // Create one Order_detail
     * const Order_detail = await prisma.order_detail.create({
     *   data: {
     *     // ... data to create a Order_detail
     *   }
     * })
     * 
    **/
    create<T extends order_detailCreateArgs<ExtArgs>>(
      args: SelectSubset<T, order_detailCreateArgs<ExtArgs>>
    ): Prisma__order_detailClient<$Result.GetResult<Prisma.$order_detailPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Order_details.
     *     @param {order_detailCreateManyArgs} args - Arguments to create many Order_details.
     *     @example
     *     // Create many Order_details
     *     const order_detail = await prisma.order_detail.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends order_detailCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, order_detailCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order_detail.
     * @param {order_detailDeleteArgs} args - Arguments to delete one Order_detail.
     * @example
     * // Delete one Order_detail
     * const Order_detail = await prisma.order_detail.delete({
     *   where: {
     *     // ... filter to delete one Order_detail
     *   }
     * })
     * 
    **/
    delete<T extends order_detailDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, order_detailDeleteArgs<ExtArgs>>
    ): Prisma__order_detailClient<$Result.GetResult<Prisma.$order_detailPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Order_detail.
     * @param {order_detailUpdateArgs} args - Arguments to update one Order_detail.
     * @example
     * // Update one Order_detail
     * const order_detail = await prisma.order_detail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends order_detailUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, order_detailUpdateArgs<ExtArgs>>
    ): Prisma__order_detailClient<$Result.GetResult<Prisma.$order_detailPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Order_details.
     * @param {order_detailDeleteManyArgs} args - Arguments to filter Order_details to delete.
     * @example
     * // Delete a few Order_details
     * const { count } = await prisma.order_detail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends order_detailDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, order_detailDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_detailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_details
     * const order_detail = await prisma.order_detail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends order_detailUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, order_detailUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order_detail.
     * @param {order_detailUpsertArgs} args - Arguments to update or create a Order_detail.
     * @example
     * // Update or create a Order_detail
     * const order_detail = await prisma.order_detail.upsert({
     *   create: {
     *     // ... data to create a Order_detail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_detail we want to update
     *   }
     * })
    **/
    upsert<T extends order_detailUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, order_detailUpsertArgs<ExtArgs>>
    ): Prisma__order_detailClient<$Result.GetResult<Prisma.$order_detailPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Order_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_detailCountArgs} args - Arguments to filter Order_details to count.
     * @example
     * // Count the number of Order_details
     * const count = await prisma.order_detail.count({
     *   where: {
     *     // ... the filter for the Order_details we want to count
     *   }
     * })
    **/
    count<T extends order_detailCountArgs>(
      args?: Subset<T, order_detailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_detailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_detail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_detailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Order_detailAggregateArgs>(args: Subset<T, Order_detailAggregateArgs>): Prisma.PrismaPromise<GetOrder_detailAggregateType<T>>

    /**
     * Group by Order_detail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_detailGroupByArgs} args - Group by arguments.
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
      T extends order_detailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_detailGroupByArgs['orderBy'] }
        : { orderBy?: order_detailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, order_detailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_detailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_detail model
   */
  readonly fields: order_detailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_detail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_detailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    friend_order<T extends order_detail$friend_orderArgs<ExtArgs> = {}>(args?: Subset<T, order_detail$friend_orderArgs<ExtArgs>>): Prisma__friend_orderClient<$Result.GetResult<Prisma.$friend_orderPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the order_detail model
   */ 
  interface order_detailFieldRefs {
    readonly id: FieldRef<"order_detail", 'Int'>
    readonly friend_order_id: FieldRef<"order_detail", 'Int'>
    readonly menu: FieldRef<"order_detail", 'String'>
    readonly quantity: FieldRef<"order_detail", 'Int'>
    readonly price: FieldRef<"order_detail", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * order_detail findUnique
   */
  export type order_detailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_detail
     */
    select?: order_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_detailInclude<ExtArgs> | null
    /**
     * Filter, which order_detail to fetch.
     */
    where: order_detailWhereUniqueInput
  }


  /**
   * order_detail findUniqueOrThrow
   */
  export type order_detailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_detail
     */
    select?: order_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_detailInclude<ExtArgs> | null
    /**
     * Filter, which order_detail to fetch.
     */
    where: order_detailWhereUniqueInput
  }


  /**
   * order_detail findFirst
   */
  export type order_detailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_detail
     */
    select?: order_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_detailInclude<ExtArgs> | null
    /**
     * Filter, which order_detail to fetch.
     */
    where?: order_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_details to fetch.
     */
    orderBy?: order_detailOrderByWithRelationInput | order_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_details.
     */
    cursor?: order_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_details.
     */
    distinct?: Order_detailScalarFieldEnum | Order_detailScalarFieldEnum[]
  }


  /**
   * order_detail findFirstOrThrow
   */
  export type order_detailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_detail
     */
    select?: order_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_detailInclude<ExtArgs> | null
    /**
     * Filter, which order_detail to fetch.
     */
    where?: order_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_details to fetch.
     */
    orderBy?: order_detailOrderByWithRelationInput | order_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_details.
     */
    cursor?: order_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_details.
     */
    distinct?: Order_detailScalarFieldEnum | Order_detailScalarFieldEnum[]
  }


  /**
   * order_detail findMany
   */
  export type order_detailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_detail
     */
    select?: order_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_detailInclude<ExtArgs> | null
    /**
     * Filter, which order_details to fetch.
     */
    where?: order_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_details to fetch.
     */
    orderBy?: order_detailOrderByWithRelationInput | order_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_details.
     */
    cursor?: order_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_details.
     */
    skip?: number
    distinct?: Order_detailScalarFieldEnum | Order_detailScalarFieldEnum[]
  }


  /**
   * order_detail create
   */
  export type order_detailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_detail
     */
    select?: order_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_detailInclude<ExtArgs> | null
    /**
     * The data needed to create a order_detail.
     */
    data: XOR<order_detailCreateInput, order_detailUncheckedCreateInput>
  }


  /**
   * order_detail createMany
   */
  export type order_detailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_details.
     */
    data: order_detailCreateManyInput | order_detailCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * order_detail update
   */
  export type order_detailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_detail
     */
    select?: order_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_detailInclude<ExtArgs> | null
    /**
     * The data needed to update a order_detail.
     */
    data: XOR<order_detailUpdateInput, order_detailUncheckedUpdateInput>
    /**
     * Choose, which order_detail to update.
     */
    where: order_detailWhereUniqueInput
  }


  /**
   * order_detail updateMany
   */
  export type order_detailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_details.
     */
    data: XOR<order_detailUpdateManyMutationInput, order_detailUncheckedUpdateManyInput>
    /**
     * Filter which order_details to update
     */
    where?: order_detailWhereInput
  }


  /**
   * order_detail upsert
   */
  export type order_detailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_detail
     */
    select?: order_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_detailInclude<ExtArgs> | null
    /**
     * The filter to search for the order_detail to update in case it exists.
     */
    where: order_detailWhereUniqueInput
    /**
     * In case the order_detail found by the `where` argument doesn't exist, create a new order_detail with this data.
     */
    create: XOR<order_detailCreateInput, order_detailUncheckedCreateInput>
    /**
     * In case the order_detail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_detailUpdateInput, order_detailUncheckedUpdateInput>
  }


  /**
   * order_detail delete
   */
  export type order_detailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_detail
     */
    select?: order_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_detailInclude<ExtArgs> | null
    /**
     * Filter which order_detail to delete.
     */
    where: order_detailWhereUniqueInput
  }


  /**
   * order_detail deleteMany
   */
  export type order_detailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_details to delete
     */
    where?: order_detailWhereInput
  }


  /**
   * order_detail.friend_order
   */
  export type order_detail$friend_orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friend_order
     */
    select?: friend_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friend_orderInclude<ExtArgs> | null
    where?: friend_orderWhereInput
  }


  /**
   * order_detail without action
   */
  export type order_detailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_detail
     */
    select?: order_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_detailInclude<ExtArgs> | null
  }



  /**
   * Model friend_order
   */

  export type AggregateFriend_order = {
    _count: Friend_orderCountAggregateOutputType | null
    _avg: Friend_orderAvgAggregateOutputType | null
    _sum: Friend_orderSumAggregateOutputType | null
    _min: Friend_orderMinAggregateOutputType | null
    _max: Friend_orderMaxAggregateOutputType | null
  }

  export type Friend_orderAvgAggregateOutputType = {
    id: number | null
    bill_id: number | null
  }

  export type Friend_orderSumAggregateOutputType = {
    id: number | null
    bill_id: number | null
  }

  export type Friend_orderMinAggregateOutputType = {
    id: number | null
    bill_id: number | null
    name: string | null
    is_paid: boolean | null
  }

  export type Friend_orderMaxAggregateOutputType = {
    id: number | null
    bill_id: number | null
    name: string | null
    is_paid: boolean | null
  }

  export type Friend_orderCountAggregateOutputType = {
    id: number
    bill_id: number
    name: number
    is_paid: number
    _all: number
  }


  export type Friend_orderAvgAggregateInputType = {
    id?: true
    bill_id?: true
  }

  export type Friend_orderSumAggregateInputType = {
    id?: true
    bill_id?: true
  }

  export type Friend_orderMinAggregateInputType = {
    id?: true
    bill_id?: true
    name?: true
    is_paid?: true
  }

  export type Friend_orderMaxAggregateInputType = {
    id?: true
    bill_id?: true
    name?: true
    is_paid?: true
  }

  export type Friend_orderCountAggregateInputType = {
    id?: true
    bill_id?: true
    name?: true
    is_paid?: true
    _all?: true
  }

  export type Friend_orderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which friend_order to aggregate.
     */
    where?: friend_orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friend_orders to fetch.
     */
    orderBy?: friend_orderOrderByWithRelationInput | friend_orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: friend_orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friend_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friend_orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned friend_orders
    **/
    _count?: true | Friend_orderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Friend_orderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Friend_orderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Friend_orderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Friend_orderMaxAggregateInputType
  }

  export type GetFriend_orderAggregateType<T extends Friend_orderAggregateArgs> = {
        [P in keyof T & keyof AggregateFriend_order]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriend_order[P]>
      : GetScalarType<T[P], AggregateFriend_order[P]>
  }




  export type friend_orderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: friend_orderWhereInput
    orderBy?: friend_orderOrderByWithAggregationInput | friend_orderOrderByWithAggregationInput[]
    by: Friend_orderScalarFieldEnum[] | Friend_orderScalarFieldEnum
    having?: friend_orderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Friend_orderCountAggregateInputType | true
    _avg?: Friend_orderAvgAggregateInputType
    _sum?: Friend_orderSumAggregateInputType
    _min?: Friend_orderMinAggregateInputType
    _max?: Friend_orderMaxAggregateInputType
  }

  export type Friend_orderGroupByOutputType = {
    id: number
    bill_id: number | null
    name: string
    is_paid: boolean
    _count: Friend_orderCountAggregateOutputType | null
    _avg: Friend_orderAvgAggregateOutputType | null
    _sum: Friend_orderSumAggregateOutputType | null
    _min: Friend_orderMinAggregateOutputType | null
    _max: Friend_orderMaxAggregateOutputType | null
  }

  type GetFriend_orderGroupByPayload<T extends friend_orderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Friend_orderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Friend_orderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Friend_orderGroupByOutputType[P]>
            : GetScalarType<T[P], Friend_orderGroupByOutputType[P]>
        }
      >
    >


  export type friend_orderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bill_id?: boolean
    name?: boolean
    is_paid?: boolean
    bill?: boolean | friend_order$billArgs<ExtArgs>
    order_detail?: boolean | friend_order$order_detailArgs<ExtArgs>
    _count?: boolean | Friend_orderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friend_order"]>

  export type friend_orderSelectScalar = {
    id?: boolean
    bill_id?: boolean
    name?: boolean
    is_paid?: boolean
  }

  export type friend_orderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | friend_order$billArgs<ExtArgs>
    order_detail?: boolean | friend_order$order_detailArgs<ExtArgs>
    _count?: boolean | Friend_orderCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $friend_orderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "friend_order"
    objects: {
      bill: Prisma.$billPayload<ExtArgs> | null
      order_detail: Prisma.$order_detailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bill_id: number | null
      name: string
      is_paid: boolean
    }, ExtArgs["result"]["friend_order"]>
    composites: {}
  }


  type friend_orderGetPayload<S extends boolean | null | undefined | friend_orderDefaultArgs> = $Result.GetResult<Prisma.$friend_orderPayload, S>

  type friend_orderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<friend_orderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Friend_orderCountAggregateInputType | true
    }

  export interface friend_orderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['friend_order'], meta: { name: 'friend_order' } }
    /**
     * Find zero or one Friend_order that matches the filter.
     * @param {friend_orderFindUniqueArgs} args - Arguments to find a Friend_order
     * @example
     * // Get one Friend_order
     * const friend_order = await prisma.friend_order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends friend_orderFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, friend_orderFindUniqueArgs<ExtArgs>>
    ): Prisma__friend_orderClient<$Result.GetResult<Prisma.$friend_orderPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Friend_order that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {friend_orderFindUniqueOrThrowArgs} args - Arguments to find a Friend_order
     * @example
     * // Get one Friend_order
     * const friend_order = await prisma.friend_order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends friend_orderFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, friend_orderFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__friend_orderClient<$Result.GetResult<Prisma.$friend_orderPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Friend_order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friend_orderFindFirstArgs} args - Arguments to find a Friend_order
     * @example
     * // Get one Friend_order
     * const friend_order = await prisma.friend_order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends friend_orderFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, friend_orderFindFirstArgs<ExtArgs>>
    ): Prisma__friend_orderClient<$Result.GetResult<Prisma.$friend_orderPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Friend_order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friend_orderFindFirstOrThrowArgs} args - Arguments to find a Friend_order
     * @example
     * // Get one Friend_order
     * const friend_order = await prisma.friend_order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends friend_orderFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, friend_orderFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__friend_orderClient<$Result.GetResult<Prisma.$friend_orderPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Friend_orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friend_orderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friend_orders
     * const friend_orders = await prisma.friend_order.findMany()
     * 
     * // Get first 10 Friend_orders
     * const friend_orders = await prisma.friend_order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friend_orderWithIdOnly = await prisma.friend_order.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends friend_orderFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, friend_orderFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$friend_orderPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Friend_order.
     * @param {friend_orderCreateArgs} args - Arguments to create a Friend_order.
     * @example
     * // Create one Friend_order
     * const Friend_order = await prisma.friend_order.create({
     *   data: {
     *     // ... data to create a Friend_order
     *   }
     * })
     * 
    **/
    create<T extends friend_orderCreateArgs<ExtArgs>>(
      args: SelectSubset<T, friend_orderCreateArgs<ExtArgs>>
    ): Prisma__friend_orderClient<$Result.GetResult<Prisma.$friend_orderPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Friend_orders.
     *     @param {friend_orderCreateManyArgs} args - Arguments to create many Friend_orders.
     *     @example
     *     // Create many Friend_orders
     *     const friend_order = await prisma.friend_order.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends friend_orderCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, friend_orderCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Friend_order.
     * @param {friend_orderDeleteArgs} args - Arguments to delete one Friend_order.
     * @example
     * // Delete one Friend_order
     * const Friend_order = await prisma.friend_order.delete({
     *   where: {
     *     // ... filter to delete one Friend_order
     *   }
     * })
     * 
    **/
    delete<T extends friend_orderDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, friend_orderDeleteArgs<ExtArgs>>
    ): Prisma__friend_orderClient<$Result.GetResult<Prisma.$friend_orderPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Friend_order.
     * @param {friend_orderUpdateArgs} args - Arguments to update one Friend_order.
     * @example
     * // Update one Friend_order
     * const friend_order = await prisma.friend_order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends friend_orderUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, friend_orderUpdateArgs<ExtArgs>>
    ): Prisma__friend_orderClient<$Result.GetResult<Prisma.$friend_orderPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Friend_orders.
     * @param {friend_orderDeleteManyArgs} args - Arguments to filter Friend_orders to delete.
     * @example
     * // Delete a few Friend_orders
     * const { count } = await prisma.friend_order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends friend_orderDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, friend_orderDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friend_orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friend_orderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friend_orders
     * const friend_order = await prisma.friend_order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends friend_orderUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, friend_orderUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Friend_order.
     * @param {friend_orderUpsertArgs} args - Arguments to update or create a Friend_order.
     * @example
     * // Update or create a Friend_order
     * const friend_order = await prisma.friend_order.upsert({
     *   create: {
     *     // ... data to create a Friend_order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friend_order we want to update
     *   }
     * })
    **/
    upsert<T extends friend_orderUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, friend_orderUpsertArgs<ExtArgs>>
    ): Prisma__friend_orderClient<$Result.GetResult<Prisma.$friend_orderPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Friend_orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friend_orderCountArgs} args - Arguments to filter Friend_orders to count.
     * @example
     * // Count the number of Friend_orders
     * const count = await prisma.friend_order.count({
     *   where: {
     *     // ... the filter for the Friend_orders we want to count
     *   }
     * })
    **/
    count<T extends friend_orderCountArgs>(
      args?: Subset<T, friend_orderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Friend_orderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friend_order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Friend_orderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Friend_orderAggregateArgs>(args: Subset<T, Friend_orderAggregateArgs>): Prisma.PrismaPromise<GetFriend_orderAggregateType<T>>

    /**
     * Group by Friend_order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friend_orderGroupByArgs} args - Group by arguments.
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
      T extends friend_orderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: friend_orderGroupByArgs['orderBy'] }
        : { orderBy?: friend_orderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, friend_orderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriend_orderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the friend_order model
   */
  readonly fields: friend_orderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for friend_order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__friend_orderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    bill<T extends friend_order$billArgs<ExtArgs> = {}>(args?: Subset<T, friend_order$billArgs<ExtArgs>>): Prisma__billClient<$Result.GetResult<Prisma.$billPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    order_detail<T extends friend_order$order_detailArgs<ExtArgs> = {}>(args?: Subset<T, friend_order$order_detailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_detailPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the friend_order model
   */ 
  interface friend_orderFieldRefs {
    readonly id: FieldRef<"friend_order", 'Int'>
    readonly bill_id: FieldRef<"friend_order", 'Int'>
    readonly name: FieldRef<"friend_order", 'String'>
    readonly is_paid: FieldRef<"friend_order", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * friend_order findUnique
   */
  export type friend_orderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friend_order
     */
    select?: friend_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friend_orderInclude<ExtArgs> | null
    /**
     * Filter, which friend_order to fetch.
     */
    where: friend_orderWhereUniqueInput
  }


  /**
   * friend_order findUniqueOrThrow
   */
  export type friend_orderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friend_order
     */
    select?: friend_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friend_orderInclude<ExtArgs> | null
    /**
     * Filter, which friend_order to fetch.
     */
    where: friend_orderWhereUniqueInput
  }


  /**
   * friend_order findFirst
   */
  export type friend_orderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friend_order
     */
    select?: friend_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friend_orderInclude<ExtArgs> | null
    /**
     * Filter, which friend_order to fetch.
     */
    where?: friend_orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friend_orders to fetch.
     */
    orderBy?: friend_orderOrderByWithRelationInput | friend_orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for friend_orders.
     */
    cursor?: friend_orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friend_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friend_orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of friend_orders.
     */
    distinct?: Friend_orderScalarFieldEnum | Friend_orderScalarFieldEnum[]
  }


  /**
   * friend_order findFirstOrThrow
   */
  export type friend_orderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friend_order
     */
    select?: friend_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friend_orderInclude<ExtArgs> | null
    /**
     * Filter, which friend_order to fetch.
     */
    where?: friend_orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friend_orders to fetch.
     */
    orderBy?: friend_orderOrderByWithRelationInput | friend_orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for friend_orders.
     */
    cursor?: friend_orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friend_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friend_orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of friend_orders.
     */
    distinct?: Friend_orderScalarFieldEnum | Friend_orderScalarFieldEnum[]
  }


  /**
   * friend_order findMany
   */
  export type friend_orderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friend_order
     */
    select?: friend_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friend_orderInclude<ExtArgs> | null
    /**
     * Filter, which friend_orders to fetch.
     */
    where?: friend_orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friend_orders to fetch.
     */
    orderBy?: friend_orderOrderByWithRelationInput | friend_orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing friend_orders.
     */
    cursor?: friend_orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friend_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friend_orders.
     */
    skip?: number
    distinct?: Friend_orderScalarFieldEnum | Friend_orderScalarFieldEnum[]
  }


  /**
   * friend_order create
   */
  export type friend_orderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friend_order
     */
    select?: friend_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friend_orderInclude<ExtArgs> | null
    /**
     * The data needed to create a friend_order.
     */
    data: XOR<friend_orderCreateInput, friend_orderUncheckedCreateInput>
  }


  /**
   * friend_order createMany
   */
  export type friend_orderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many friend_orders.
     */
    data: friend_orderCreateManyInput | friend_orderCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * friend_order update
   */
  export type friend_orderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friend_order
     */
    select?: friend_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friend_orderInclude<ExtArgs> | null
    /**
     * The data needed to update a friend_order.
     */
    data: XOR<friend_orderUpdateInput, friend_orderUncheckedUpdateInput>
    /**
     * Choose, which friend_order to update.
     */
    where: friend_orderWhereUniqueInput
  }


  /**
   * friend_order updateMany
   */
  export type friend_orderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update friend_orders.
     */
    data: XOR<friend_orderUpdateManyMutationInput, friend_orderUncheckedUpdateManyInput>
    /**
     * Filter which friend_orders to update
     */
    where?: friend_orderWhereInput
  }


  /**
   * friend_order upsert
   */
  export type friend_orderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friend_order
     */
    select?: friend_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friend_orderInclude<ExtArgs> | null
    /**
     * The filter to search for the friend_order to update in case it exists.
     */
    where: friend_orderWhereUniqueInput
    /**
     * In case the friend_order found by the `where` argument doesn't exist, create a new friend_order with this data.
     */
    create: XOR<friend_orderCreateInput, friend_orderUncheckedCreateInput>
    /**
     * In case the friend_order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<friend_orderUpdateInput, friend_orderUncheckedUpdateInput>
  }


  /**
   * friend_order delete
   */
  export type friend_orderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friend_order
     */
    select?: friend_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friend_orderInclude<ExtArgs> | null
    /**
     * Filter which friend_order to delete.
     */
    where: friend_orderWhereUniqueInput
  }


  /**
   * friend_order deleteMany
   */
  export type friend_orderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which friend_orders to delete
     */
    where?: friend_orderWhereInput
  }


  /**
   * friend_order.bill
   */
  export type friend_order$billArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill
     */
    select?: billSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billInclude<ExtArgs> | null
    where?: billWhereInput
  }


  /**
   * friend_order.order_detail
   */
  export type friend_order$order_detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_detail
     */
    select?: order_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_detailInclude<ExtArgs> | null
    where?: order_detailWhereInput
    orderBy?: order_detailOrderByWithRelationInput | order_detailOrderByWithRelationInput[]
    cursor?: order_detailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_detailScalarFieldEnum | Order_detailScalarFieldEnum[]
  }


  /**
   * friend_order without action
   */
  export type friend_orderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friend_order
     */
    select?: friend_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friend_orderInclude<ExtArgs> | null
  }



  /**
   * Model bill
   */

  export type AggregateBill = {
    _count: BillCountAggregateOutputType | null
    _avg: BillAvgAggregateOutputType | null
    _sum: BillSumAggregateOutputType | null
    _min: BillMinAggregateOutputType | null
    _max: BillMaxAggregateOutputType | null
  }

  export type BillAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    payment_account_id: number | null
    discount: number | null
    tax: number | null
    service: number | null
    total_price: number | null
  }

  export type BillSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    payment_account_id: number | null
    discount: number | null
    tax: number | null
    service: number | null
    total_price: number | null
  }

  export type BillMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    payment_account_id: number | null
    description: string | null
    discount: number | null
    tax: number | null
    service: number | null
    total_price: number | null
    date: Date | null
  }

  export type BillMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    payment_account_id: number | null
    description: string | null
    discount: number | null
    tax: number | null
    service: number | null
    total_price: number | null
    date: Date | null
  }

  export type BillCountAggregateOutputType = {
    id: number
    user_id: number
    payment_account_id: number
    description: number
    discount: number
    tax: number
    service: number
    total_price: number
    date: number
    _all: number
  }


  export type BillAvgAggregateInputType = {
    id?: true
    user_id?: true
    payment_account_id?: true
    discount?: true
    tax?: true
    service?: true
    total_price?: true
  }

  export type BillSumAggregateInputType = {
    id?: true
    user_id?: true
    payment_account_id?: true
    discount?: true
    tax?: true
    service?: true
    total_price?: true
  }

  export type BillMinAggregateInputType = {
    id?: true
    user_id?: true
    payment_account_id?: true
    description?: true
    discount?: true
    tax?: true
    service?: true
    total_price?: true
    date?: true
  }

  export type BillMaxAggregateInputType = {
    id?: true
    user_id?: true
    payment_account_id?: true
    description?: true
    discount?: true
    tax?: true
    service?: true
    total_price?: true
    date?: true
  }

  export type BillCountAggregateInputType = {
    id?: true
    user_id?: true
    payment_account_id?: true
    description?: true
    discount?: true
    tax?: true
    service?: true
    total_price?: true
    date?: true
    _all?: true
  }

  export type BillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bill to aggregate.
     */
    where?: billWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bills to fetch.
     */
    orderBy?: billOrderByWithRelationInput | billOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: billWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bills
    **/
    _count?: true | BillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillMaxAggregateInputType
  }

  export type GetBillAggregateType<T extends BillAggregateArgs> = {
        [P in keyof T & keyof AggregateBill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBill[P]>
      : GetScalarType<T[P], AggregateBill[P]>
  }




  export type billGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: billWhereInput
    orderBy?: billOrderByWithAggregationInput | billOrderByWithAggregationInput[]
    by: BillScalarFieldEnum[] | BillScalarFieldEnum
    having?: billScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillCountAggregateInputType | true
    _avg?: BillAvgAggregateInputType
    _sum?: BillSumAggregateInputType
    _min?: BillMinAggregateInputType
    _max?: BillMaxAggregateInputType
  }

  export type BillGroupByOutputType = {
    id: number
    user_id: number | null
    payment_account_id: number | null
    description: string
    discount: number | null
    tax: number
    service: number | null
    total_price: number
    date: Date
    _count: BillCountAggregateOutputType | null
    _avg: BillAvgAggregateOutputType | null
    _sum: BillSumAggregateOutputType | null
    _min: BillMinAggregateOutputType | null
    _max: BillMaxAggregateOutputType | null
  }

  type GetBillGroupByPayload<T extends billGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillGroupByOutputType[P]>
            : GetScalarType<T[P], BillGroupByOutputType[P]>
        }
      >
    >


  export type billSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    payment_account_id?: boolean
    description?: boolean
    discount?: boolean
    tax?: boolean
    service?: boolean
    total_price?: boolean
    date?: boolean
    users?: boolean | bill$usersArgs<ExtArgs>
    payment_account?: boolean | bill$payment_accountArgs<ExtArgs>
    friend_order?: boolean | bill$friend_orderArgs<ExtArgs>
    _count?: boolean | BillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bill"]>

  export type billSelectScalar = {
    id?: boolean
    user_id?: boolean
    payment_account_id?: boolean
    description?: boolean
    discount?: boolean
    tax?: boolean
    service?: boolean
    total_price?: boolean
    date?: boolean
  }

  export type billInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | bill$usersArgs<ExtArgs>
    payment_account?: boolean | bill$payment_accountArgs<ExtArgs>
    friend_order?: boolean | bill$friend_orderArgs<ExtArgs>
    _count?: boolean | BillCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $billPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bill"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
      payment_account: Prisma.$payment_accountPayload<ExtArgs> | null
      friend_order: Prisma.$friend_orderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      payment_account_id: number | null
      description: string
      discount: number | null
      tax: number
      service: number | null
      total_price: number
      date: Date
    }, ExtArgs["result"]["bill"]>
    composites: {}
  }


  type billGetPayload<S extends boolean | null | undefined | billDefaultArgs> = $Result.GetResult<Prisma.$billPayload, S>

  type billCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<billFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BillCountAggregateInputType | true
    }

  export interface billDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bill'], meta: { name: 'bill' } }
    /**
     * Find zero or one Bill that matches the filter.
     * @param {billFindUniqueArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends billFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, billFindUniqueArgs<ExtArgs>>
    ): Prisma__billClient<$Result.GetResult<Prisma.$billPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Bill that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {billFindUniqueOrThrowArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends billFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, billFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__billClient<$Result.GetResult<Prisma.$billPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Bill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {billFindFirstArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends billFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, billFindFirstArgs<ExtArgs>>
    ): Prisma__billClient<$Result.GetResult<Prisma.$billPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Bill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {billFindFirstOrThrowArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends billFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, billFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__billClient<$Result.GetResult<Prisma.$billPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Bills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {billFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bills
     * const bills = await prisma.bill.findMany()
     * 
     * // Get first 10 Bills
     * const bills = await prisma.bill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billWithIdOnly = await prisma.bill.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends billFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, billFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$billPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Bill.
     * @param {billCreateArgs} args - Arguments to create a Bill.
     * @example
     * // Create one Bill
     * const Bill = await prisma.bill.create({
     *   data: {
     *     // ... data to create a Bill
     *   }
     * })
     * 
    **/
    create<T extends billCreateArgs<ExtArgs>>(
      args: SelectSubset<T, billCreateArgs<ExtArgs>>
    ): Prisma__billClient<$Result.GetResult<Prisma.$billPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Bills.
     *     @param {billCreateManyArgs} args - Arguments to create many Bills.
     *     @example
     *     // Create many Bills
     *     const bill = await prisma.bill.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends billCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, billCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bill.
     * @param {billDeleteArgs} args - Arguments to delete one Bill.
     * @example
     * // Delete one Bill
     * const Bill = await prisma.bill.delete({
     *   where: {
     *     // ... filter to delete one Bill
     *   }
     * })
     * 
    **/
    delete<T extends billDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, billDeleteArgs<ExtArgs>>
    ): Prisma__billClient<$Result.GetResult<Prisma.$billPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Bill.
     * @param {billUpdateArgs} args - Arguments to update one Bill.
     * @example
     * // Update one Bill
     * const bill = await prisma.bill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends billUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, billUpdateArgs<ExtArgs>>
    ): Prisma__billClient<$Result.GetResult<Prisma.$billPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Bills.
     * @param {billDeleteManyArgs} args - Arguments to filter Bills to delete.
     * @example
     * // Delete a few Bills
     * const { count } = await prisma.bill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends billDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, billDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {billUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bills
     * const bill = await prisma.bill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends billUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, billUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bill.
     * @param {billUpsertArgs} args - Arguments to update or create a Bill.
     * @example
     * // Update or create a Bill
     * const bill = await prisma.bill.upsert({
     *   create: {
     *     // ... data to create a Bill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bill we want to update
     *   }
     * })
    **/
    upsert<T extends billUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, billUpsertArgs<ExtArgs>>
    ): Prisma__billClient<$Result.GetResult<Prisma.$billPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {billCountArgs} args - Arguments to filter Bills to count.
     * @example
     * // Count the number of Bills
     * const count = await prisma.bill.count({
     *   where: {
     *     // ... the filter for the Bills we want to count
     *   }
     * })
    **/
    count<T extends billCountArgs>(
      args?: Subset<T, billCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BillAggregateArgs>(args: Subset<T, BillAggregateArgs>): Prisma.PrismaPromise<GetBillAggregateType<T>>

    /**
     * Group by Bill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {billGroupByArgs} args - Group by arguments.
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
      T extends billGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: billGroupByArgs['orderBy'] }
        : { orderBy?: billGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, billGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bill model
   */
  readonly fields: billFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__billClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends bill$usersArgs<ExtArgs> = {}>(args?: Subset<T, bill$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    payment_account<T extends bill$payment_accountArgs<ExtArgs> = {}>(args?: Subset<T, bill$payment_accountArgs<ExtArgs>>): Prisma__payment_accountClient<$Result.GetResult<Prisma.$payment_accountPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    friend_order<T extends bill$friend_orderArgs<ExtArgs> = {}>(args?: Subset<T, bill$friend_orderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$friend_orderPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the bill model
   */ 
  interface billFieldRefs {
    readonly id: FieldRef<"bill", 'Int'>
    readonly user_id: FieldRef<"bill", 'Int'>
    readonly payment_account_id: FieldRef<"bill", 'Int'>
    readonly description: FieldRef<"bill", 'String'>
    readonly discount: FieldRef<"bill", 'Float'>
    readonly tax: FieldRef<"bill", 'Int'>
    readonly service: FieldRef<"bill", 'Float'>
    readonly total_price: FieldRef<"bill", 'Int'>
    readonly date: FieldRef<"bill", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * bill findUnique
   */
  export type billFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill
     */
    select?: billSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billInclude<ExtArgs> | null
    /**
     * Filter, which bill to fetch.
     */
    where: billWhereUniqueInput
  }


  /**
   * bill findUniqueOrThrow
   */
  export type billFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill
     */
    select?: billSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billInclude<ExtArgs> | null
    /**
     * Filter, which bill to fetch.
     */
    where: billWhereUniqueInput
  }


  /**
   * bill findFirst
   */
  export type billFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill
     */
    select?: billSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billInclude<ExtArgs> | null
    /**
     * Filter, which bill to fetch.
     */
    where?: billWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bills to fetch.
     */
    orderBy?: billOrderByWithRelationInput | billOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bills.
     */
    cursor?: billWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bills.
     */
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }


  /**
   * bill findFirstOrThrow
   */
  export type billFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill
     */
    select?: billSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billInclude<ExtArgs> | null
    /**
     * Filter, which bill to fetch.
     */
    where?: billWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bills to fetch.
     */
    orderBy?: billOrderByWithRelationInput | billOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bills.
     */
    cursor?: billWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bills.
     */
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }


  /**
   * bill findMany
   */
  export type billFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill
     */
    select?: billSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billInclude<ExtArgs> | null
    /**
     * Filter, which bills to fetch.
     */
    where?: billWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bills to fetch.
     */
    orderBy?: billOrderByWithRelationInput | billOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bills.
     */
    cursor?: billWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bills.
     */
    skip?: number
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }


  /**
   * bill create
   */
  export type billCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill
     */
    select?: billSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billInclude<ExtArgs> | null
    /**
     * The data needed to create a bill.
     */
    data: XOR<billCreateInput, billUncheckedCreateInput>
  }


  /**
   * bill createMany
   */
  export type billCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bills.
     */
    data: billCreateManyInput | billCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * bill update
   */
  export type billUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill
     */
    select?: billSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billInclude<ExtArgs> | null
    /**
     * The data needed to update a bill.
     */
    data: XOR<billUpdateInput, billUncheckedUpdateInput>
    /**
     * Choose, which bill to update.
     */
    where: billWhereUniqueInput
  }


  /**
   * bill updateMany
   */
  export type billUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bills.
     */
    data: XOR<billUpdateManyMutationInput, billUncheckedUpdateManyInput>
    /**
     * Filter which bills to update
     */
    where?: billWhereInput
  }


  /**
   * bill upsert
   */
  export type billUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill
     */
    select?: billSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billInclude<ExtArgs> | null
    /**
     * The filter to search for the bill to update in case it exists.
     */
    where: billWhereUniqueInput
    /**
     * In case the bill found by the `where` argument doesn't exist, create a new bill with this data.
     */
    create: XOR<billCreateInput, billUncheckedCreateInput>
    /**
     * In case the bill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<billUpdateInput, billUncheckedUpdateInput>
  }


  /**
   * bill delete
   */
  export type billDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill
     */
    select?: billSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billInclude<ExtArgs> | null
    /**
     * Filter which bill to delete.
     */
    where: billWhereUniqueInput
  }


  /**
   * bill deleteMany
   */
  export type billDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bills to delete
     */
    where?: billWhereInput
  }


  /**
   * bill.users
   */
  export type bill$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }


  /**
   * bill.payment_account
   */
  export type bill$payment_accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_account
     */
    select?: payment_accountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_accountInclude<ExtArgs> | null
    where?: payment_accountWhereInput
  }


  /**
   * bill.friend_order
   */
  export type bill$friend_orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friend_order
     */
    select?: friend_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friend_orderInclude<ExtArgs> | null
    where?: friend_orderWhereInput
    orderBy?: friend_orderOrderByWithRelationInput | friend_orderOrderByWithRelationInput[]
    cursor?: friend_orderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Friend_orderScalarFieldEnum | Friend_orderScalarFieldEnum[]
  }


  /**
   * bill without action
   */
  export type billDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill
     */
    select?: billSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billInclude<ExtArgs> | null
  }



  /**
   * Model payment_account
   */

  export type AggregatePayment_account = {
    _count: Payment_accountCountAggregateOutputType | null
    _avg: Payment_accountAvgAggregateOutputType | null
    _sum: Payment_accountSumAggregateOutputType | null
    _min: Payment_accountMinAggregateOutputType | null
    _max: Payment_accountMaxAggregateOutputType | null
  }

  export type Payment_accountAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Payment_accountSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Payment_accountMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    number: string | null
    card_holder: string | null
    is_activated: boolean | null
  }

  export type Payment_accountMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    number: string | null
    card_holder: string | null
    is_activated: boolean | null
  }

  export type Payment_accountCountAggregateOutputType = {
    id: number
    user_id: number
    name: number
    number: number
    card_holder: number
    is_activated: number
    _all: number
  }


  export type Payment_accountAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Payment_accountSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Payment_accountMinAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    number?: true
    card_holder?: true
    is_activated?: true
  }

  export type Payment_accountMaxAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    number?: true
    card_holder?: true
    is_activated?: true
  }

  export type Payment_accountCountAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    number?: true
    card_holder?: true
    is_activated?: true
    _all?: true
  }

  export type Payment_accountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment_account to aggregate.
     */
    where?: payment_accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_accounts to fetch.
     */
    orderBy?: payment_accountOrderByWithRelationInput | payment_accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: payment_accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payment_accounts
    **/
    _count?: true | Payment_accountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Payment_accountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Payment_accountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Payment_accountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Payment_accountMaxAggregateInputType
  }

  export type GetPayment_accountAggregateType<T extends Payment_accountAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment_account]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment_account[P]>
      : GetScalarType<T[P], AggregatePayment_account[P]>
  }




  export type payment_accountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: payment_accountWhereInput
    orderBy?: payment_accountOrderByWithAggregationInput | payment_accountOrderByWithAggregationInput[]
    by: Payment_accountScalarFieldEnum[] | Payment_accountScalarFieldEnum
    having?: payment_accountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Payment_accountCountAggregateInputType | true
    _avg?: Payment_accountAvgAggregateInputType
    _sum?: Payment_accountSumAggregateInputType
    _min?: Payment_accountMinAggregateInputType
    _max?: Payment_accountMaxAggregateInputType
  }

  export type Payment_accountGroupByOutputType = {
    id: number
    user_id: number | null
    name: string
    number: string
    card_holder: string
    is_activated: boolean
    _count: Payment_accountCountAggregateOutputType | null
    _avg: Payment_accountAvgAggregateOutputType | null
    _sum: Payment_accountSumAggregateOutputType | null
    _min: Payment_accountMinAggregateOutputType | null
    _max: Payment_accountMaxAggregateOutputType | null
  }

  type GetPayment_accountGroupByPayload<T extends payment_accountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Payment_accountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Payment_accountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Payment_accountGroupByOutputType[P]>
            : GetScalarType<T[P], Payment_accountGroupByOutputType[P]>
        }
      >
    >


  export type payment_accountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    number?: boolean
    card_holder?: boolean
    is_activated?: boolean
    users?: boolean | payment_account$usersArgs<ExtArgs>
    bill?: boolean | payment_account$billArgs<ExtArgs>
    _count?: boolean | Payment_accountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment_account"]>

  export type payment_accountSelectScalar = {
    id?: boolean
    user_id?: boolean
    name?: boolean
    number?: boolean
    card_holder?: boolean
    is_activated?: boolean
  }

  export type payment_accountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | payment_account$usersArgs<ExtArgs>
    bill?: boolean | payment_account$billArgs<ExtArgs>
    _count?: boolean | Payment_accountCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $payment_accountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payment_account"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
      bill: Prisma.$billPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      name: string
      number: string
      card_holder: string
      is_activated: boolean
    }, ExtArgs["result"]["payment_account"]>
    composites: {}
  }


  type payment_accountGetPayload<S extends boolean | null | undefined | payment_accountDefaultArgs> = $Result.GetResult<Prisma.$payment_accountPayload, S>

  type payment_accountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<payment_accountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Payment_accountCountAggregateInputType | true
    }

  export interface payment_accountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payment_account'], meta: { name: 'payment_account' } }
    /**
     * Find zero or one Payment_account that matches the filter.
     * @param {payment_accountFindUniqueArgs} args - Arguments to find a Payment_account
     * @example
     * // Get one Payment_account
     * const payment_account = await prisma.payment_account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends payment_accountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, payment_accountFindUniqueArgs<ExtArgs>>
    ): Prisma__payment_accountClient<$Result.GetResult<Prisma.$payment_accountPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Payment_account that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {payment_accountFindUniqueOrThrowArgs} args - Arguments to find a Payment_account
     * @example
     * // Get one Payment_account
     * const payment_account = await prisma.payment_account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends payment_accountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, payment_accountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__payment_accountClient<$Result.GetResult<Prisma.$payment_accountPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Payment_account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_accountFindFirstArgs} args - Arguments to find a Payment_account
     * @example
     * // Get one Payment_account
     * const payment_account = await prisma.payment_account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends payment_accountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, payment_accountFindFirstArgs<ExtArgs>>
    ): Prisma__payment_accountClient<$Result.GetResult<Prisma.$payment_accountPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Payment_account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_accountFindFirstOrThrowArgs} args - Arguments to find a Payment_account
     * @example
     * // Get one Payment_account
     * const payment_account = await prisma.payment_account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends payment_accountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, payment_accountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__payment_accountClient<$Result.GetResult<Prisma.$payment_accountPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Payment_accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_accountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payment_accounts
     * const payment_accounts = await prisma.payment_account.findMany()
     * 
     * // Get first 10 Payment_accounts
     * const payment_accounts = await prisma.payment_account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payment_accountWithIdOnly = await prisma.payment_account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends payment_accountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, payment_accountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_accountPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Payment_account.
     * @param {payment_accountCreateArgs} args - Arguments to create a Payment_account.
     * @example
     * // Create one Payment_account
     * const Payment_account = await prisma.payment_account.create({
     *   data: {
     *     // ... data to create a Payment_account
     *   }
     * })
     * 
    **/
    create<T extends payment_accountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, payment_accountCreateArgs<ExtArgs>>
    ): Prisma__payment_accountClient<$Result.GetResult<Prisma.$payment_accountPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Payment_accounts.
     *     @param {payment_accountCreateManyArgs} args - Arguments to create many Payment_accounts.
     *     @example
     *     // Create many Payment_accounts
     *     const payment_account = await prisma.payment_account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends payment_accountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, payment_accountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment_account.
     * @param {payment_accountDeleteArgs} args - Arguments to delete one Payment_account.
     * @example
     * // Delete one Payment_account
     * const Payment_account = await prisma.payment_account.delete({
     *   where: {
     *     // ... filter to delete one Payment_account
     *   }
     * })
     * 
    **/
    delete<T extends payment_accountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, payment_accountDeleteArgs<ExtArgs>>
    ): Prisma__payment_accountClient<$Result.GetResult<Prisma.$payment_accountPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Payment_account.
     * @param {payment_accountUpdateArgs} args - Arguments to update one Payment_account.
     * @example
     * // Update one Payment_account
     * const payment_account = await prisma.payment_account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends payment_accountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, payment_accountUpdateArgs<ExtArgs>>
    ): Prisma__payment_accountClient<$Result.GetResult<Prisma.$payment_accountPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Payment_accounts.
     * @param {payment_accountDeleteManyArgs} args - Arguments to filter Payment_accounts to delete.
     * @example
     * // Delete a few Payment_accounts
     * const { count } = await prisma.payment_account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends payment_accountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, payment_accountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payment_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_accountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payment_accounts
     * const payment_account = await prisma.payment_account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends payment_accountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, payment_accountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment_account.
     * @param {payment_accountUpsertArgs} args - Arguments to update or create a Payment_account.
     * @example
     * // Update or create a Payment_account
     * const payment_account = await prisma.payment_account.upsert({
     *   create: {
     *     // ... data to create a Payment_account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment_account we want to update
     *   }
     * })
    **/
    upsert<T extends payment_accountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, payment_accountUpsertArgs<ExtArgs>>
    ): Prisma__payment_accountClient<$Result.GetResult<Prisma.$payment_accountPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Payment_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_accountCountArgs} args - Arguments to filter Payment_accounts to count.
     * @example
     * // Count the number of Payment_accounts
     * const count = await prisma.payment_account.count({
     *   where: {
     *     // ... the filter for the Payment_accounts we want to count
     *   }
     * })
    **/
    count<T extends payment_accountCountArgs>(
      args?: Subset<T, payment_accountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Payment_accountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment_account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Payment_accountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Payment_accountAggregateArgs>(args: Subset<T, Payment_accountAggregateArgs>): Prisma.PrismaPromise<GetPayment_accountAggregateType<T>>

    /**
     * Group by Payment_account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_accountGroupByArgs} args - Group by arguments.
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
      T extends payment_accountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: payment_accountGroupByArgs['orderBy'] }
        : { orderBy?: payment_accountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, payment_accountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayment_accountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payment_account model
   */
  readonly fields: payment_accountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payment_account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__payment_accountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends payment_account$usersArgs<ExtArgs> = {}>(args?: Subset<T, payment_account$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    bill<T extends payment_account$billArgs<ExtArgs> = {}>(args?: Subset<T, payment_account$billArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$billPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the payment_account model
   */ 
  interface payment_accountFieldRefs {
    readonly id: FieldRef<"payment_account", 'Int'>
    readonly user_id: FieldRef<"payment_account", 'Int'>
    readonly name: FieldRef<"payment_account", 'String'>
    readonly number: FieldRef<"payment_account", 'String'>
    readonly card_holder: FieldRef<"payment_account", 'String'>
    readonly is_activated: FieldRef<"payment_account", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * payment_account findUnique
   */
  export type payment_accountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_account
     */
    select?: payment_accountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_accountInclude<ExtArgs> | null
    /**
     * Filter, which payment_account to fetch.
     */
    where: payment_accountWhereUniqueInput
  }


  /**
   * payment_account findUniqueOrThrow
   */
  export type payment_accountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_account
     */
    select?: payment_accountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_accountInclude<ExtArgs> | null
    /**
     * Filter, which payment_account to fetch.
     */
    where: payment_accountWhereUniqueInput
  }


  /**
   * payment_account findFirst
   */
  export type payment_accountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_account
     */
    select?: payment_accountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_accountInclude<ExtArgs> | null
    /**
     * Filter, which payment_account to fetch.
     */
    where?: payment_accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_accounts to fetch.
     */
    orderBy?: payment_accountOrderByWithRelationInput | payment_accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payment_accounts.
     */
    cursor?: payment_accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payment_accounts.
     */
    distinct?: Payment_accountScalarFieldEnum | Payment_accountScalarFieldEnum[]
  }


  /**
   * payment_account findFirstOrThrow
   */
  export type payment_accountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_account
     */
    select?: payment_accountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_accountInclude<ExtArgs> | null
    /**
     * Filter, which payment_account to fetch.
     */
    where?: payment_accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_accounts to fetch.
     */
    orderBy?: payment_accountOrderByWithRelationInput | payment_accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payment_accounts.
     */
    cursor?: payment_accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payment_accounts.
     */
    distinct?: Payment_accountScalarFieldEnum | Payment_accountScalarFieldEnum[]
  }


  /**
   * payment_account findMany
   */
  export type payment_accountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_account
     */
    select?: payment_accountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_accountInclude<ExtArgs> | null
    /**
     * Filter, which payment_accounts to fetch.
     */
    where?: payment_accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_accounts to fetch.
     */
    orderBy?: payment_accountOrderByWithRelationInput | payment_accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payment_accounts.
     */
    cursor?: payment_accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_accounts.
     */
    skip?: number
    distinct?: Payment_accountScalarFieldEnum | Payment_accountScalarFieldEnum[]
  }


  /**
   * payment_account create
   */
  export type payment_accountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_account
     */
    select?: payment_accountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_accountInclude<ExtArgs> | null
    /**
     * The data needed to create a payment_account.
     */
    data: XOR<payment_accountCreateInput, payment_accountUncheckedCreateInput>
  }


  /**
   * payment_account createMany
   */
  export type payment_accountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payment_accounts.
     */
    data: payment_accountCreateManyInput | payment_accountCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * payment_account update
   */
  export type payment_accountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_account
     */
    select?: payment_accountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_accountInclude<ExtArgs> | null
    /**
     * The data needed to update a payment_account.
     */
    data: XOR<payment_accountUpdateInput, payment_accountUncheckedUpdateInput>
    /**
     * Choose, which payment_account to update.
     */
    where: payment_accountWhereUniqueInput
  }


  /**
   * payment_account updateMany
   */
  export type payment_accountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payment_accounts.
     */
    data: XOR<payment_accountUpdateManyMutationInput, payment_accountUncheckedUpdateManyInput>
    /**
     * Filter which payment_accounts to update
     */
    where?: payment_accountWhereInput
  }


  /**
   * payment_account upsert
   */
  export type payment_accountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_account
     */
    select?: payment_accountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_accountInclude<ExtArgs> | null
    /**
     * The filter to search for the payment_account to update in case it exists.
     */
    where: payment_accountWhereUniqueInput
    /**
     * In case the payment_account found by the `where` argument doesn't exist, create a new payment_account with this data.
     */
    create: XOR<payment_accountCreateInput, payment_accountUncheckedCreateInput>
    /**
     * In case the payment_account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<payment_accountUpdateInput, payment_accountUncheckedUpdateInput>
  }


  /**
   * payment_account delete
   */
  export type payment_accountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_account
     */
    select?: payment_accountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_accountInclude<ExtArgs> | null
    /**
     * Filter which payment_account to delete.
     */
    where: payment_accountWhereUniqueInput
  }


  /**
   * payment_account deleteMany
   */
  export type payment_accountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment_accounts to delete
     */
    where?: payment_accountWhereInput
  }


  /**
   * payment_account.users
   */
  export type payment_account$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }


  /**
   * payment_account.bill
   */
  export type payment_account$billArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill
     */
    select?: billSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billInclude<ExtArgs> | null
    where?: billWhereInput
    orderBy?: billOrderByWithRelationInput | billOrderByWithRelationInput[]
    cursor?: billWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }


  /**
   * payment_account without action
   */
  export type payment_accountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_account
     */
    select?: payment_accountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_accountInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    fullname: 'fullname',
    phone_number: 'phone_number',
    email: 'email',
    bio: 'bio',
    dob: 'dob',
    photo_profile: 'photo_profile',
    created_at: 'created_at',
    update_at: 'update_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Order_detailScalarFieldEnum: {
    id: 'id',
    friend_order_id: 'friend_order_id',
    menu: 'menu',
    quantity: 'quantity',
    price: 'price'
  };

  export type Order_detailScalarFieldEnum = (typeof Order_detailScalarFieldEnum)[keyof typeof Order_detailScalarFieldEnum]


  export const Friend_orderScalarFieldEnum: {
    id: 'id',
    bill_id: 'bill_id',
    name: 'name',
    is_paid: 'is_paid'
  };

  export type Friend_orderScalarFieldEnum = (typeof Friend_orderScalarFieldEnum)[keyof typeof Friend_orderScalarFieldEnum]


  export const BillScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    payment_account_id: 'payment_account_id',
    description: 'description',
    discount: 'discount',
    tax: 'tax',
    service: 'service',
    total_price: 'total_price',
    date: 'date'
  };

  export type BillScalarFieldEnum = (typeof BillScalarFieldEnum)[keyof typeof BillScalarFieldEnum]


  export const Payment_accountScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    name: 'name',
    number: 'number',
    card_holder: 'card_holder',
    is_activated: 'is_activated'
  };

  export type Payment_accountScalarFieldEnum = (typeof Payment_accountScalarFieldEnum)[keyof typeof Payment_accountScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    username?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    fullname?: StringNullableFilter<"users"> | string | null
    phone_number?: StringNullableFilter<"users"> | string | null
    email?: StringNullableFilter<"users"> | string | null
    bio?: StringNullableFilter<"users"> | string | null
    dob?: DateTimeNullableFilter<"users"> | Date | string | null
    photo_profile?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    update_at?: DateTimeFilter<"users"> | Date | string
    bill?: BillListRelationFilter
    payment_account?: Payment_accountListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    fullname?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    photo_profile?: SortOrderInput | SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    bill?: billOrderByRelationAggregateInput
    payment_account?: payment_accountOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    phone_number?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringNullableFilter<"users"> | string | null
    fullname?: StringNullableFilter<"users"> | string | null
    bio?: StringNullableFilter<"users"> | string | null
    dob?: DateTimeNullableFilter<"users"> | Date | string | null
    photo_profile?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    update_at?: DateTimeFilter<"users"> | Date | string
    bill?: BillListRelationFilter
    payment_account?: Payment_accountListRelationFilter
  }, "id" | "username" | "phone_number" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    fullname?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    photo_profile?: SortOrderInput | SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    username?: StringNullableWithAggregatesFilter<"users"> | string | null
    password?: StringNullableWithAggregatesFilter<"users"> | string | null
    fullname?: StringNullableWithAggregatesFilter<"users"> | string | null
    phone_number?: StringNullableWithAggregatesFilter<"users"> | string | null
    email?: StringNullableWithAggregatesFilter<"users"> | string | null
    bio?: StringNullableWithAggregatesFilter<"users"> | string | null
    dob?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    photo_profile?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    update_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type order_detailWhereInput = {
    AND?: order_detailWhereInput | order_detailWhereInput[]
    OR?: order_detailWhereInput[]
    NOT?: order_detailWhereInput | order_detailWhereInput[]
    id?: IntFilter<"order_detail"> | number
    friend_order_id?: IntNullableFilter<"order_detail"> | number | null
    menu?: StringFilter<"order_detail"> | string
    quantity?: IntFilter<"order_detail"> | number
    price?: IntFilter<"order_detail"> | number
    friend_order?: XOR<Friend_orderNullableRelationFilter, friend_orderWhereInput> | null
  }

  export type order_detailOrderByWithRelationInput = {
    id?: SortOrder
    friend_order_id?: SortOrderInput | SortOrder
    menu?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    friend_order?: friend_orderOrderByWithRelationInput
  }

  export type order_detailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: order_detailWhereInput | order_detailWhereInput[]
    OR?: order_detailWhereInput[]
    NOT?: order_detailWhereInput | order_detailWhereInput[]
    friend_order_id?: IntNullableFilter<"order_detail"> | number | null
    menu?: StringFilter<"order_detail"> | string
    quantity?: IntFilter<"order_detail"> | number
    price?: IntFilter<"order_detail"> | number
    friend_order?: XOR<Friend_orderNullableRelationFilter, friend_orderWhereInput> | null
  }, "id">

  export type order_detailOrderByWithAggregationInput = {
    id?: SortOrder
    friend_order_id?: SortOrderInput | SortOrder
    menu?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    _count?: order_detailCountOrderByAggregateInput
    _avg?: order_detailAvgOrderByAggregateInput
    _max?: order_detailMaxOrderByAggregateInput
    _min?: order_detailMinOrderByAggregateInput
    _sum?: order_detailSumOrderByAggregateInput
  }

  export type order_detailScalarWhereWithAggregatesInput = {
    AND?: order_detailScalarWhereWithAggregatesInput | order_detailScalarWhereWithAggregatesInput[]
    OR?: order_detailScalarWhereWithAggregatesInput[]
    NOT?: order_detailScalarWhereWithAggregatesInput | order_detailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"order_detail"> | number
    friend_order_id?: IntNullableWithAggregatesFilter<"order_detail"> | number | null
    menu?: StringWithAggregatesFilter<"order_detail"> | string
    quantity?: IntWithAggregatesFilter<"order_detail"> | number
    price?: IntWithAggregatesFilter<"order_detail"> | number
  }

  export type friend_orderWhereInput = {
    AND?: friend_orderWhereInput | friend_orderWhereInput[]
    OR?: friend_orderWhereInput[]
    NOT?: friend_orderWhereInput | friend_orderWhereInput[]
    id?: IntFilter<"friend_order"> | number
    bill_id?: IntNullableFilter<"friend_order"> | number | null
    name?: StringFilter<"friend_order"> | string
    is_paid?: BoolFilter<"friend_order"> | boolean
    bill?: XOR<BillNullableRelationFilter, billWhereInput> | null
    order_detail?: Order_detailListRelationFilter
  }

  export type friend_orderOrderByWithRelationInput = {
    id?: SortOrder
    bill_id?: SortOrderInput | SortOrder
    name?: SortOrder
    is_paid?: SortOrder
    bill?: billOrderByWithRelationInput
    order_detail?: order_detailOrderByRelationAggregateInput
  }

  export type friend_orderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: friend_orderWhereInput | friend_orderWhereInput[]
    OR?: friend_orderWhereInput[]
    NOT?: friend_orderWhereInput | friend_orderWhereInput[]
    bill_id?: IntNullableFilter<"friend_order"> | number | null
    name?: StringFilter<"friend_order"> | string
    is_paid?: BoolFilter<"friend_order"> | boolean
    bill?: XOR<BillNullableRelationFilter, billWhereInput> | null
    order_detail?: Order_detailListRelationFilter
  }, "id">

  export type friend_orderOrderByWithAggregationInput = {
    id?: SortOrder
    bill_id?: SortOrderInput | SortOrder
    name?: SortOrder
    is_paid?: SortOrder
    _count?: friend_orderCountOrderByAggregateInput
    _avg?: friend_orderAvgOrderByAggregateInput
    _max?: friend_orderMaxOrderByAggregateInput
    _min?: friend_orderMinOrderByAggregateInput
    _sum?: friend_orderSumOrderByAggregateInput
  }

  export type friend_orderScalarWhereWithAggregatesInput = {
    AND?: friend_orderScalarWhereWithAggregatesInput | friend_orderScalarWhereWithAggregatesInput[]
    OR?: friend_orderScalarWhereWithAggregatesInput[]
    NOT?: friend_orderScalarWhereWithAggregatesInput | friend_orderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"friend_order"> | number
    bill_id?: IntNullableWithAggregatesFilter<"friend_order"> | number | null
    name?: StringWithAggregatesFilter<"friend_order"> | string
    is_paid?: BoolWithAggregatesFilter<"friend_order"> | boolean
  }

  export type billWhereInput = {
    AND?: billWhereInput | billWhereInput[]
    OR?: billWhereInput[]
    NOT?: billWhereInput | billWhereInput[]
    id?: IntFilter<"bill"> | number
    user_id?: IntNullableFilter<"bill"> | number | null
    payment_account_id?: IntNullableFilter<"bill"> | number | null
    description?: StringFilter<"bill"> | string
    discount?: FloatNullableFilter<"bill"> | number | null
    tax?: IntFilter<"bill"> | number
    service?: FloatNullableFilter<"bill"> | number | null
    total_price?: IntFilter<"bill"> | number
    date?: DateTimeFilter<"bill"> | Date | string
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    payment_account?: XOR<Payment_accountNullableRelationFilter, payment_accountWhereInput> | null
    friend_order?: Friend_orderListRelationFilter
  }

  export type billOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    payment_account_id?: SortOrderInput | SortOrder
    description?: SortOrder
    discount?: SortOrderInput | SortOrder
    tax?: SortOrder
    service?: SortOrderInput | SortOrder
    total_price?: SortOrder
    date?: SortOrder
    users?: usersOrderByWithRelationInput
    payment_account?: payment_accountOrderByWithRelationInput
    friend_order?: friend_orderOrderByRelationAggregateInput
  }

  export type billWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: billWhereInput | billWhereInput[]
    OR?: billWhereInput[]
    NOT?: billWhereInput | billWhereInput[]
    user_id?: IntNullableFilter<"bill"> | number | null
    payment_account_id?: IntNullableFilter<"bill"> | number | null
    description?: StringFilter<"bill"> | string
    discount?: FloatNullableFilter<"bill"> | number | null
    tax?: IntFilter<"bill"> | number
    service?: FloatNullableFilter<"bill"> | number | null
    total_price?: IntFilter<"bill"> | number
    date?: DateTimeFilter<"bill"> | Date | string
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    payment_account?: XOR<Payment_accountNullableRelationFilter, payment_accountWhereInput> | null
    friend_order?: Friend_orderListRelationFilter
  }, "id">

  export type billOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    payment_account_id?: SortOrderInput | SortOrder
    description?: SortOrder
    discount?: SortOrderInput | SortOrder
    tax?: SortOrder
    service?: SortOrderInput | SortOrder
    total_price?: SortOrder
    date?: SortOrder
    _count?: billCountOrderByAggregateInput
    _avg?: billAvgOrderByAggregateInput
    _max?: billMaxOrderByAggregateInput
    _min?: billMinOrderByAggregateInput
    _sum?: billSumOrderByAggregateInput
  }

  export type billScalarWhereWithAggregatesInput = {
    AND?: billScalarWhereWithAggregatesInput | billScalarWhereWithAggregatesInput[]
    OR?: billScalarWhereWithAggregatesInput[]
    NOT?: billScalarWhereWithAggregatesInput | billScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"bill"> | number
    user_id?: IntNullableWithAggregatesFilter<"bill"> | number | null
    payment_account_id?: IntNullableWithAggregatesFilter<"bill"> | number | null
    description?: StringWithAggregatesFilter<"bill"> | string
    discount?: FloatNullableWithAggregatesFilter<"bill"> | number | null
    tax?: IntWithAggregatesFilter<"bill"> | number
    service?: FloatNullableWithAggregatesFilter<"bill"> | number | null
    total_price?: IntWithAggregatesFilter<"bill"> | number
    date?: DateTimeWithAggregatesFilter<"bill"> | Date | string
  }

  export type payment_accountWhereInput = {
    AND?: payment_accountWhereInput | payment_accountWhereInput[]
    OR?: payment_accountWhereInput[]
    NOT?: payment_accountWhereInput | payment_accountWhereInput[]
    id?: IntFilter<"payment_account"> | number
    user_id?: IntNullableFilter<"payment_account"> | number | null
    name?: StringFilter<"payment_account"> | string
    number?: StringFilter<"payment_account"> | string
    card_holder?: StringFilter<"payment_account"> | string
    is_activated?: BoolFilter<"payment_account"> | boolean
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    bill?: BillListRelationFilter
  }

  export type payment_accountOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    name?: SortOrder
    number?: SortOrder
    card_holder?: SortOrder
    is_activated?: SortOrder
    users?: usersOrderByWithRelationInput
    bill?: billOrderByRelationAggregateInput
  }

  export type payment_accountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: payment_accountWhereInput | payment_accountWhereInput[]
    OR?: payment_accountWhereInput[]
    NOT?: payment_accountWhereInput | payment_accountWhereInput[]
    user_id?: IntNullableFilter<"payment_account"> | number | null
    name?: StringFilter<"payment_account"> | string
    number?: StringFilter<"payment_account"> | string
    card_holder?: StringFilter<"payment_account"> | string
    is_activated?: BoolFilter<"payment_account"> | boolean
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    bill?: BillListRelationFilter
  }, "id">

  export type payment_accountOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    name?: SortOrder
    number?: SortOrder
    card_holder?: SortOrder
    is_activated?: SortOrder
    _count?: payment_accountCountOrderByAggregateInput
    _avg?: payment_accountAvgOrderByAggregateInput
    _max?: payment_accountMaxOrderByAggregateInput
    _min?: payment_accountMinOrderByAggregateInput
    _sum?: payment_accountSumOrderByAggregateInput
  }

  export type payment_accountScalarWhereWithAggregatesInput = {
    AND?: payment_accountScalarWhereWithAggregatesInput | payment_accountScalarWhereWithAggregatesInput[]
    OR?: payment_accountScalarWhereWithAggregatesInput[]
    NOT?: payment_accountScalarWhereWithAggregatesInput | payment_accountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"payment_account"> | number
    user_id?: IntNullableWithAggregatesFilter<"payment_account"> | number | null
    name?: StringWithAggregatesFilter<"payment_account"> | string
    number?: StringWithAggregatesFilter<"payment_account"> | string
    card_holder?: StringWithAggregatesFilter<"payment_account"> | string
    is_activated?: BoolWithAggregatesFilter<"payment_account"> | boolean
  }

  export type usersCreateInput = {
    username?: string | null
    password?: string | null
    fullname?: string | null
    phone_number?: string | null
    email?: string | null
    bio?: string | null
    dob?: Date | string | null
    photo_profile?: string | null
    created_at?: Date | string
    update_at?: Date | string
    bill?: billCreateNestedManyWithoutUsersInput
    payment_account?: payment_accountCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    username?: string | null
    password?: string | null
    fullname?: string | null
    phone_number?: string | null
    email?: string | null
    bio?: string | null
    dob?: Date | string | null
    photo_profile?: string | null
    created_at?: Date | string
    update_at?: Date | string
    bill?: billUncheckedCreateNestedManyWithoutUsersInput
    payment_account?: payment_accountUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_profile?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bill?: billUpdateManyWithoutUsersNestedInput
    payment_account?: payment_accountUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_profile?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bill?: billUncheckedUpdateManyWithoutUsersNestedInput
    payment_account?: payment_accountUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    username?: string | null
    password?: string | null
    fullname?: string | null
    phone_number?: string | null
    email?: string | null
    bio?: string | null
    dob?: Date | string | null
    photo_profile?: string | null
    created_at?: Date | string
    update_at?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_profile?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_profile?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type order_detailCreateInput = {
    menu: string
    quantity: number
    price: number
    friend_order?: friend_orderCreateNestedOneWithoutOrder_detailInput
  }

  export type order_detailUncheckedCreateInput = {
    id?: number
    friend_order_id?: number | null
    menu: string
    quantity: number
    price: number
  }

  export type order_detailUpdateInput = {
    menu?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    friend_order?: friend_orderUpdateOneWithoutOrder_detailNestedInput
  }

  export type order_detailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    friend_order_id?: NullableIntFieldUpdateOperationsInput | number | null
    menu?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type order_detailCreateManyInput = {
    id?: number
    friend_order_id?: number | null
    menu: string
    quantity: number
    price: number
  }

  export type order_detailUpdateManyMutationInput = {
    menu?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type order_detailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    friend_order_id?: NullableIntFieldUpdateOperationsInput | number | null
    menu?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type friend_orderCreateInput = {
    name: string
    is_paid?: boolean
    bill?: billCreateNestedOneWithoutFriend_orderInput
    order_detail?: order_detailCreateNestedManyWithoutFriend_orderInput
  }

  export type friend_orderUncheckedCreateInput = {
    id?: number
    bill_id?: number | null
    name: string
    is_paid?: boolean
    order_detail?: order_detailUncheckedCreateNestedManyWithoutFriend_orderInput
  }

  export type friend_orderUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    bill?: billUpdateOneWithoutFriend_orderNestedInput
    order_detail?: order_detailUpdateManyWithoutFriend_orderNestedInput
  }

  export type friend_orderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bill_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    order_detail?: order_detailUncheckedUpdateManyWithoutFriend_orderNestedInput
  }

  export type friend_orderCreateManyInput = {
    id?: number
    bill_id?: number | null
    name: string
    is_paid?: boolean
  }

  export type friend_orderUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    is_paid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type friend_orderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bill_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    is_paid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type billCreateInput = {
    description: string
    discount?: number | null
    tax: number
    service?: number | null
    total_price?: number
    date?: Date | string
    users?: usersCreateNestedOneWithoutBillInput
    payment_account?: payment_accountCreateNestedOneWithoutBillInput
    friend_order?: friend_orderCreateNestedManyWithoutBillInput
  }

  export type billUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    payment_account_id?: number | null
    description: string
    discount?: number | null
    tax: number
    service?: number | null
    total_price?: number
    date?: Date | string
    friend_order?: friend_orderUncheckedCreateNestedManyWithoutBillInput
  }

  export type billUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    tax?: IntFieldUpdateOperationsInput | number
    service?: NullableFloatFieldUpdateOperationsInput | number | null
    total_price?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneWithoutBillNestedInput
    payment_account?: payment_accountUpdateOneWithoutBillNestedInput
    friend_order?: friend_orderUpdateManyWithoutBillNestedInput
  }

  export type billUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    payment_account_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    tax?: IntFieldUpdateOperationsInput | number
    service?: NullableFloatFieldUpdateOperationsInput | number | null
    total_price?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    friend_order?: friend_orderUncheckedUpdateManyWithoutBillNestedInput
  }

  export type billCreateManyInput = {
    id?: number
    user_id?: number | null
    payment_account_id?: number | null
    description: string
    discount?: number | null
    tax: number
    service?: number | null
    total_price?: number
    date?: Date | string
  }

  export type billUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    tax?: IntFieldUpdateOperationsInput | number
    service?: NullableFloatFieldUpdateOperationsInput | number | null
    total_price?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type billUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    payment_account_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    tax?: IntFieldUpdateOperationsInput | number
    service?: NullableFloatFieldUpdateOperationsInput | number | null
    total_price?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payment_accountCreateInput = {
    name: string
    number: string
    card_holder: string
    is_activated: boolean
    users?: usersCreateNestedOneWithoutPayment_accountInput
    bill?: billCreateNestedManyWithoutPayment_accountInput
  }

  export type payment_accountUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    name: string
    number: string
    card_holder: string
    is_activated: boolean
    bill?: billUncheckedCreateNestedManyWithoutPayment_accountInput
  }

  export type payment_accountUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    card_holder?: StringFieldUpdateOperationsInput | string
    is_activated?: BoolFieldUpdateOperationsInput | boolean
    users?: usersUpdateOneWithoutPayment_accountNestedInput
    bill?: billUpdateManyWithoutPayment_accountNestedInput
  }

  export type payment_accountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    card_holder?: StringFieldUpdateOperationsInput | string
    is_activated?: BoolFieldUpdateOperationsInput | boolean
    bill?: billUncheckedUpdateManyWithoutPayment_accountNestedInput
  }

  export type payment_accountCreateManyInput = {
    id?: number
    user_id?: number | null
    name: string
    number: string
    card_holder: string
    is_activated: boolean
  }

  export type payment_accountUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    card_holder?: StringFieldUpdateOperationsInput | string
    is_activated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type payment_accountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    card_holder?: StringFieldUpdateOperationsInput | string
    is_activated?: BoolFieldUpdateOperationsInput | boolean
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type BillListRelationFilter = {
    every?: billWhereInput
    some?: billWhereInput
    none?: billWhereInput
  }

  export type Payment_accountListRelationFilter = {
    every?: payment_accountWhereInput
    some?: payment_accountWhereInput
    none?: payment_accountWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type billOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type payment_accountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    fullname?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    bio?: SortOrder
    dob?: SortOrder
    photo_profile?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    fullname?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    bio?: SortOrder
    dob?: SortOrder
    photo_profile?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    fullname?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    bio?: SortOrder
    dob?: SortOrder
    photo_profile?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type Friend_orderNullableRelationFilter = {
    is?: friend_orderWhereInput | null
    isNot?: friend_orderWhereInput | null
  }

  export type order_detailCountOrderByAggregateInput = {
    id?: SortOrder
    friend_order_id?: SortOrder
    menu?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type order_detailAvgOrderByAggregateInput = {
    id?: SortOrder
    friend_order_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type order_detailMaxOrderByAggregateInput = {
    id?: SortOrder
    friend_order_id?: SortOrder
    menu?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type order_detailMinOrderByAggregateInput = {
    id?: SortOrder
    friend_order_id?: SortOrder
    menu?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type order_detailSumOrderByAggregateInput = {
    id?: SortOrder
    friend_order_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BillNullableRelationFilter = {
    is?: billWhereInput | null
    isNot?: billWhereInput | null
  }

  export type Order_detailListRelationFilter = {
    every?: order_detailWhereInput
    some?: order_detailWhereInput
    none?: order_detailWhereInput
  }

  export type order_detailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type friend_orderCountOrderByAggregateInput = {
    id?: SortOrder
    bill_id?: SortOrder
    name?: SortOrder
    is_paid?: SortOrder
  }

  export type friend_orderAvgOrderByAggregateInput = {
    id?: SortOrder
    bill_id?: SortOrder
  }

  export type friend_orderMaxOrderByAggregateInput = {
    id?: SortOrder
    bill_id?: SortOrder
    name?: SortOrder
    is_paid?: SortOrder
  }

  export type friend_orderMinOrderByAggregateInput = {
    id?: SortOrder
    bill_id?: SortOrder
    name?: SortOrder
    is_paid?: SortOrder
  }

  export type friend_orderSumOrderByAggregateInput = {
    id?: SortOrder
    bill_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UsersNullableRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type Payment_accountNullableRelationFilter = {
    is?: payment_accountWhereInput | null
    isNot?: payment_accountWhereInput | null
  }

  export type Friend_orderListRelationFilter = {
    every?: friend_orderWhereInput
    some?: friend_orderWhereInput
    none?: friend_orderWhereInput
  }

  export type friend_orderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type billCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    payment_account_id?: SortOrder
    description?: SortOrder
    discount?: SortOrder
    tax?: SortOrder
    service?: SortOrder
    total_price?: SortOrder
    date?: SortOrder
  }

  export type billAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    payment_account_id?: SortOrder
    discount?: SortOrder
    tax?: SortOrder
    service?: SortOrder
    total_price?: SortOrder
  }

  export type billMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    payment_account_id?: SortOrder
    description?: SortOrder
    discount?: SortOrder
    tax?: SortOrder
    service?: SortOrder
    total_price?: SortOrder
    date?: SortOrder
  }

  export type billMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    payment_account_id?: SortOrder
    description?: SortOrder
    discount?: SortOrder
    tax?: SortOrder
    service?: SortOrder
    total_price?: SortOrder
    date?: SortOrder
  }

  export type billSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    payment_account_id?: SortOrder
    discount?: SortOrder
    tax?: SortOrder
    service?: SortOrder
    total_price?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type payment_accountCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    card_holder?: SortOrder
    is_activated?: SortOrder
  }

  export type payment_accountAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type payment_accountMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    card_holder?: SortOrder
    is_activated?: SortOrder
  }

  export type payment_accountMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    card_holder?: SortOrder
    is_activated?: SortOrder
  }

  export type payment_accountSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type billCreateNestedManyWithoutUsersInput = {
    create?: XOR<billCreateWithoutUsersInput, billUncheckedCreateWithoutUsersInput> | billCreateWithoutUsersInput[] | billUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: billCreateOrConnectWithoutUsersInput | billCreateOrConnectWithoutUsersInput[]
    createMany?: billCreateManyUsersInputEnvelope
    connect?: billWhereUniqueInput | billWhereUniqueInput[]
  }

  export type payment_accountCreateNestedManyWithoutUsersInput = {
    create?: XOR<payment_accountCreateWithoutUsersInput, payment_accountUncheckedCreateWithoutUsersInput> | payment_accountCreateWithoutUsersInput[] | payment_accountUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: payment_accountCreateOrConnectWithoutUsersInput | payment_accountCreateOrConnectWithoutUsersInput[]
    createMany?: payment_accountCreateManyUsersInputEnvelope
    connect?: payment_accountWhereUniqueInput | payment_accountWhereUniqueInput[]
  }

  export type billUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<billCreateWithoutUsersInput, billUncheckedCreateWithoutUsersInput> | billCreateWithoutUsersInput[] | billUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: billCreateOrConnectWithoutUsersInput | billCreateOrConnectWithoutUsersInput[]
    createMany?: billCreateManyUsersInputEnvelope
    connect?: billWhereUniqueInput | billWhereUniqueInput[]
  }

  export type payment_accountUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<payment_accountCreateWithoutUsersInput, payment_accountUncheckedCreateWithoutUsersInput> | payment_accountCreateWithoutUsersInput[] | payment_accountUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: payment_accountCreateOrConnectWithoutUsersInput | payment_accountCreateOrConnectWithoutUsersInput[]
    createMany?: payment_accountCreateManyUsersInputEnvelope
    connect?: payment_accountWhereUniqueInput | payment_accountWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type billUpdateManyWithoutUsersNestedInput = {
    create?: XOR<billCreateWithoutUsersInput, billUncheckedCreateWithoutUsersInput> | billCreateWithoutUsersInput[] | billUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: billCreateOrConnectWithoutUsersInput | billCreateOrConnectWithoutUsersInput[]
    upsert?: billUpsertWithWhereUniqueWithoutUsersInput | billUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: billCreateManyUsersInputEnvelope
    set?: billWhereUniqueInput | billWhereUniqueInput[]
    disconnect?: billWhereUniqueInput | billWhereUniqueInput[]
    delete?: billWhereUniqueInput | billWhereUniqueInput[]
    connect?: billWhereUniqueInput | billWhereUniqueInput[]
    update?: billUpdateWithWhereUniqueWithoutUsersInput | billUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: billUpdateManyWithWhereWithoutUsersInput | billUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: billScalarWhereInput | billScalarWhereInput[]
  }

  export type payment_accountUpdateManyWithoutUsersNestedInput = {
    create?: XOR<payment_accountCreateWithoutUsersInput, payment_accountUncheckedCreateWithoutUsersInput> | payment_accountCreateWithoutUsersInput[] | payment_accountUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: payment_accountCreateOrConnectWithoutUsersInput | payment_accountCreateOrConnectWithoutUsersInput[]
    upsert?: payment_accountUpsertWithWhereUniqueWithoutUsersInput | payment_accountUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: payment_accountCreateManyUsersInputEnvelope
    set?: payment_accountWhereUniqueInput | payment_accountWhereUniqueInput[]
    disconnect?: payment_accountWhereUniqueInput | payment_accountWhereUniqueInput[]
    delete?: payment_accountWhereUniqueInput | payment_accountWhereUniqueInput[]
    connect?: payment_accountWhereUniqueInput | payment_accountWhereUniqueInput[]
    update?: payment_accountUpdateWithWhereUniqueWithoutUsersInput | payment_accountUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: payment_accountUpdateManyWithWhereWithoutUsersInput | payment_accountUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: payment_accountScalarWhereInput | payment_accountScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type billUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<billCreateWithoutUsersInput, billUncheckedCreateWithoutUsersInput> | billCreateWithoutUsersInput[] | billUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: billCreateOrConnectWithoutUsersInput | billCreateOrConnectWithoutUsersInput[]
    upsert?: billUpsertWithWhereUniqueWithoutUsersInput | billUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: billCreateManyUsersInputEnvelope
    set?: billWhereUniqueInput | billWhereUniqueInput[]
    disconnect?: billWhereUniqueInput | billWhereUniqueInput[]
    delete?: billWhereUniqueInput | billWhereUniqueInput[]
    connect?: billWhereUniqueInput | billWhereUniqueInput[]
    update?: billUpdateWithWhereUniqueWithoutUsersInput | billUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: billUpdateManyWithWhereWithoutUsersInput | billUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: billScalarWhereInput | billScalarWhereInput[]
  }

  export type payment_accountUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<payment_accountCreateWithoutUsersInput, payment_accountUncheckedCreateWithoutUsersInput> | payment_accountCreateWithoutUsersInput[] | payment_accountUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: payment_accountCreateOrConnectWithoutUsersInput | payment_accountCreateOrConnectWithoutUsersInput[]
    upsert?: payment_accountUpsertWithWhereUniqueWithoutUsersInput | payment_accountUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: payment_accountCreateManyUsersInputEnvelope
    set?: payment_accountWhereUniqueInput | payment_accountWhereUniqueInput[]
    disconnect?: payment_accountWhereUniqueInput | payment_accountWhereUniqueInput[]
    delete?: payment_accountWhereUniqueInput | payment_accountWhereUniqueInput[]
    connect?: payment_accountWhereUniqueInput | payment_accountWhereUniqueInput[]
    update?: payment_accountUpdateWithWhereUniqueWithoutUsersInput | payment_accountUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: payment_accountUpdateManyWithWhereWithoutUsersInput | payment_accountUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: payment_accountScalarWhereInput | payment_accountScalarWhereInput[]
  }

  export type friend_orderCreateNestedOneWithoutOrder_detailInput = {
    create?: XOR<friend_orderCreateWithoutOrder_detailInput, friend_orderUncheckedCreateWithoutOrder_detailInput>
    connectOrCreate?: friend_orderCreateOrConnectWithoutOrder_detailInput
    connect?: friend_orderWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type friend_orderUpdateOneWithoutOrder_detailNestedInput = {
    create?: XOR<friend_orderCreateWithoutOrder_detailInput, friend_orderUncheckedCreateWithoutOrder_detailInput>
    connectOrCreate?: friend_orderCreateOrConnectWithoutOrder_detailInput
    upsert?: friend_orderUpsertWithoutOrder_detailInput
    disconnect?: friend_orderWhereInput | boolean
    delete?: friend_orderWhereInput | boolean
    connect?: friend_orderWhereUniqueInput
    update?: XOR<XOR<friend_orderUpdateToOneWithWhereWithoutOrder_detailInput, friend_orderUpdateWithoutOrder_detailInput>, friend_orderUncheckedUpdateWithoutOrder_detailInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type billCreateNestedOneWithoutFriend_orderInput = {
    create?: XOR<billCreateWithoutFriend_orderInput, billUncheckedCreateWithoutFriend_orderInput>
    connectOrCreate?: billCreateOrConnectWithoutFriend_orderInput
    connect?: billWhereUniqueInput
  }

  export type order_detailCreateNestedManyWithoutFriend_orderInput = {
    create?: XOR<order_detailCreateWithoutFriend_orderInput, order_detailUncheckedCreateWithoutFriend_orderInput> | order_detailCreateWithoutFriend_orderInput[] | order_detailUncheckedCreateWithoutFriend_orderInput[]
    connectOrCreate?: order_detailCreateOrConnectWithoutFriend_orderInput | order_detailCreateOrConnectWithoutFriend_orderInput[]
    createMany?: order_detailCreateManyFriend_orderInputEnvelope
    connect?: order_detailWhereUniqueInput | order_detailWhereUniqueInput[]
  }

  export type order_detailUncheckedCreateNestedManyWithoutFriend_orderInput = {
    create?: XOR<order_detailCreateWithoutFriend_orderInput, order_detailUncheckedCreateWithoutFriend_orderInput> | order_detailCreateWithoutFriend_orderInput[] | order_detailUncheckedCreateWithoutFriend_orderInput[]
    connectOrCreate?: order_detailCreateOrConnectWithoutFriend_orderInput | order_detailCreateOrConnectWithoutFriend_orderInput[]
    createMany?: order_detailCreateManyFriend_orderInputEnvelope
    connect?: order_detailWhereUniqueInput | order_detailWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type billUpdateOneWithoutFriend_orderNestedInput = {
    create?: XOR<billCreateWithoutFriend_orderInput, billUncheckedCreateWithoutFriend_orderInput>
    connectOrCreate?: billCreateOrConnectWithoutFriend_orderInput
    upsert?: billUpsertWithoutFriend_orderInput
    disconnect?: billWhereInput | boolean
    delete?: billWhereInput | boolean
    connect?: billWhereUniqueInput
    update?: XOR<XOR<billUpdateToOneWithWhereWithoutFriend_orderInput, billUpdateWithoutFriend_orderInput>, billUncheckedUpdateWithoutFriend_orderInput>
  }

  export type order_detailUpdateManyWithoutFriend_orderNestedInput = {
    create?: XOR<order_detailCreateWithoutFriend_orderInput, order_detailUncheckedCreateWithoutFriend_orderInput> | order_detailCreateWithoutFriend_orderInput[] | order_detailUncheckedCreateWithoutFriend_orderInput[]
    connectOrCreate?: order_detailCreateOrConnectWithoutFriend_orderInput | order_detailCreateOrConnectWithoutFriend_orderInput[]
    upsert?: order_detailUpsertWithWhereUniqueWithoutFriend_orderInput | order_detailUpsertWithWhereUniqueWithoutFriend_orderInput[]
    createMany?: order_detailCreateManyFriend_orderInputEnvelope
    set?: order_detailWhereUniqueInput | order_detailWhereUniqueInput[]
    disconnect?: order_detailWhereUniqueInput | order_detailWhereUniqueInput[]
    delete?: order_detailWhereUniqueInput | order_detailWhereUniqueInput[]
    connect?: order_detailWhereUniqueInput | order_detailWhereUniqueInput[]
    update?: order_detailUpdateWithWhereUniqueWithoutFriend_orderInput | order_detailUpdateWithWhereUniqueWithoutFriend_orderInput[]
    updateMany?: order_detailUpdateManyWithWhereWithoutFriend_orderInput | order_detailUpdateManyWithWhereWithoutFriend_orderInput[]
    deleteMany?: order_detailScalarWhereInput | order_detailScalarWhereInput[]
  }

  export type order_detailUncheckedUpdateManyWithoutFriend_orderNestedInput = {
    create?: XOR<order_detailCreateWithoutFriend_orderInput, order_detailUncheckedCreateWithoutFriend_orderInput> | order_detailCreateWithoutFriend_orderInput[] | order_detailUncheckedCreateWithoutFriend_orderInput[]
    connectOrCreate?: order_detailCreateOrConnectWithoutFriend_orderInput | order_detailCreateOrConnectWithoutFriend_orderInput[]
    upsert?: order_detailUpsertWithWhereUniqueWithoutFriend_orderInput | order_detailUpsertWithWhereUniqueWithoutFriend_orderInput[]
    createMany?: order_detailCreateManyFriend_orderInputEnvelope
    set?: order_detailWhereUniqueInput | order_detailWhereUniqueInput[]
    disconnect?: order_detailWhereUniqueInput | order_detailWhereUniqueInput[]
    delete?: order_detailWhereUniqueInput | order_detailWhereUniqueInput[]
    connect?: order_detailWhereUniqueInput | order_detailWhereUniqueInput[]
    update?: order_detailUpdateWithWhereUniqueWithoutFriend_orderInput | order_detailUpdateWithWhereUniqueWithoutFriend_orderInput[]
    updateMany?: order_detailUpdateManyWithWhereWithoutFriend_orderInput | order_detailUpdateManyWithWhereWithoutFriend_orderInput[]
    deleteMany?: order_detailScalarWhereInput | order_detailScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutBillInput = {
    create?: XOR<usersCreateWithoutBillInput, usersUncheckedCreateWithoutBillInput>
    connectOrCreate?: usersCreateOrConnectWithoutBillInput
    connect?: usersWhereUniqueInput
  }

  export type payment_accountCreateNestedOneWithoutBillInput = {
    create?: XOR<payment_accountCreateWithoutBillInput, payment_accountUncheckedCreateWithoutBillInput>
    connectOrCreate?: payment_accountCreateOrConnectWithoutBillInput
    connect?: payment_accountWhereUniqueInput
  }

  export type friend_orderCreateNestedManyWithoutBillInput = {
    create?: XOR<friend_orderCreateWithoutBillInput, friend_orderUncheckedCreateWithoutBillInput> | friend_orderCreateWithoutBillInput[] | friend_orderUncheckedCreateWithoutBillInput[]
    connectOrCreate?: friend_orderCreateOrConnectWithoutBillInput | friend_orderCreateOrConnectWithoutBillInput[]
    createMany?: friend_orderCreateManyBillInputEnvelope
    connect?: friend_orderWhereUniqueInput | friend_orderWhereUniqueInput[]
  }

  export type friend_orderUncheckedCreateNestedManyWithoutBillInput = {
    create?: XOR<friend_orderCreateWithoutBillInput, friend_orderUncheckedCreateWithoutBillInput> | friend_orderCreateWithoutBillInput[] | friend_orderUncheckedCreateWithoutBillInput[]
    connectOrCreate?: friend_orderCreateOrConnectWithoutBillInput | friend_orderCreateOrConnectWithoutBillInput[]
    createMany?: friend_orderCreateManyBillInputEnvelope
    connect?: friend_orderWhereUniqueInput | friend_orderWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersUpdateOneWithoutBillNestedInput = {
    create?: XOR<usersCreateWithoutBillInput, usersUncheckedCreateWithoutBillInput>
    connectOrCreate?: usersCreateOrConnectWithoutBillInput
    upsert?: usersUpsertWithoutBillInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutBillInput, usersUpdateWithoutBillInput>, usersUncheckedUpdateWithoutBillInput>
  }

  export type payment_accountUpdateOneWithoutBillNestedInput = {
    create?: XOR<payment_accountCreateWithoutBillInput, payment_accountUncheckedCreateWithoutBillInput>
    connectOrCreate?: payment_accountCreateOrConnectWithoutBillInput
    upsert?: payment_accountUpsertWithoutBillInput
    disconnect?: payment_accountWhereInput | boolean
    delete?: payment_accountWhereInput | boolean
    connect?: payment_accountWhereUniqueInput
    update?: XOR<XOR<payment_accountUpdateToOneWithWhereWithoutBillInput, payment_accountUpdateWithoutBillInput>, payment_accountUncheckedUpdateWithoutBillInput>
  }

  export type friend_orderUpdateManyWithoutBillNestedInput = {
    create?: XOR<friend_orderCreateWithoutBillInput, friend_orderUncheckedCreateWithoutBillInput> | friend_orderCreateWithoutBillInput[] | friend_orderUncheckedCreateWithoutBillInput[]
    connectOrCreate?: friend_orderCreateOrConnectWithoutBillInput | friend_orderCreateOrConnectWithoutBillInput[]
    upsert?: friend_orderUpsertWithWhereUniqueWithoutBillInput | friend_orderUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: friend_orderCreateManyBillInputEnvelope
    set?: friend_orderWhereUniqueInput | friend_orderWhereUniqueInput[]
    disconnect?: friend_orderWhereUniqueInput | friend_orderWhereUniqueInput[]
    delete?: friend_orderWhereUniqueInput | friend_orderWhereUniqueInput[]
    connect?: friend_orderWhereUniqueInput | friend_orderWhereUniqueInput[]
    update?: friend_orderUpdateWithWhereUniqueWithoutBillInput | friend_orderUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: friend_orderUpdateManyWithWhereWithoutBillInput | friend_orderUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: friend_orderScalarWhereInput | friend_orderScalarWhereInput[]
  }

  export type friend_orderUncheckedUpdateManyWithoutBillNestedInput = {
    create?: XOR<friend_orderCreateWithoutBillInput, friend_orderUncheckedCreateWithoutBillInput> | friend_orderCreateWithoutBillInput[] | friend_orderUncheckedCreateWithoutBillInput[]
    connectOrCreate?: friend_orderCreateOrConnectWithoutBillInput | friend_orderCreateOrConnectWithoutBillInput[]
    upsert?: friend_orderUpsertWithWhereUniqueWithoutBillInput | friend_orderUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: friend_orderCreateManyBillInputEnvelope
    set?: friend_orderWhereUniqueInput | friend_orderWhereUniqueInput[]
    disconnect?: friend_orderWhereUniqueInput | friend_orderWhereUniqueInput[]
    delete?: friend_orderWhereUniqueInput | friend_orderWhereUniqueInput[]
    connect?: friend_orderWhereUniqueInput | friend_orderWhereUniqueInput[]
    update?: friend_orderUpdateWithWhereUniqueWithoutBillInput | friend_orderUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: friend_orderUpdateManyWithWhereWithoutBillInput | friend_orderUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: friend_orderScalarWhereInput | friend_orderScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutPayment_accountInput = {
    create?: XOR<usersCreateWithoutPayment_accountInput, usersUncheckedCreateWithoutPayment_accountInput>
    connectOrCreate?: usersCreateOrConnectWithoutPayment_accountInput
    connect?: usersWhereUniqueInput
  }

  export type billCreateNestedManyWithoutPayment_accountInput = {
    create?: XOR<billCreateWithoutPayment_accountInput, billUncheckedCreateWithoutPayment_accountInput> | billCreateWithoutPayment_accountInput[] | billUncheckedCreateWithoutPayment_accountInput[]
    connectOrCreate?: billCreateOrConnectWithoutPayment_accountInput | billCreateOrConnectWithoutPayment_accountInput[]
    createMany?: billCreateManyPayment_accountInputEnvelope
    connect?: billWhereUniqueInput | billWhereUniqueInput[]
  }

  export type billUncheckedCreateNestedManyWithoutPayment_accountInput = {
    create?: XOR<billCreateWithoutPayment_accountInput, billUncheckedCreateWithoutPayment_accountInput> | billCreateWithoutPayment_accountInput[] | billUncheckedCreateWithoutPayment_accountInput[]
    connectOrCreate?: billCreateOrConnectWithoutPayment_accountInput | billCreateOrConnectWithoutPayment_accountInput[]
    createMany?: billCreateManyPayment_accountInputEnvelope
    connect?: billWhereUniqueInput | billWhereUniqueInput[]
  }

  export type usersUpdateOneWithoutPayment_accountNestedInput = {
    create?: XOR<usersCreateWithoutPayment_accountInput, usersUncheckedCreateWithoutPayment_accountInput>
    connectOrCreate?: usersCreateOrConnectWithoutPayment_accountInput
    upsert?: usersUpsertWithoutPayment_accountInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPayment_accountInput, usersUpdateWithoutPayment_accountInput>, usersUncheckedUpdateWithoutPayment_accountInput>
  }

  export type billUpdateManyWithoutPayment_accountNestedInput = {
    create?: XOR<billCreateWithoutPayment_accountInput, billUncheckedCreateWithoutPayment_accountInput> | billCreateWithoutPayment_accountInput[] | billUncheckedCreateWithoutPayment_accountInput[]
    connectOrCreate?: billCreateOrConnectWithoutPayment_accountInput | billCreateOrConnectWithoutPayment_accountInput[]
    upsert?: billUpsertWithWhereUniqueWithoutPayment_accountInput | billUpsertWithWhereUniqueWithoutPayment_accountInput[]
    createMany?: billCreateManyPayment_accountInputEnvelope
    set?: billWhereUniqueInput | billWhereUniqueInput[]
    disconnect?: billWhereUniqueInput | billWhereUniqueInput[]
    delete?: billWhereUniqueInput | billWhereUniqueInput[]
    connect?: billWhereUniqueInput | billWhereUniqueInput[]
    update?: billUpdateWithWhereUniqueWithoutPayment_accountInput | billUpdateWithWhereUniqueWithoutPayment_accountInput[]
    updateMany?: billUpdateManyWithWhereWithoutPayment_accountInput | billUpdateManyWithWhereWithoutPayment_accountInput[]
    deleteMany?: billScalarWhereInput | billScalarWhereInput[]
  }

  export type billUncheckedUpdateManyWithoutPayment_accountNestedInput = {
    create?: XOR<billCreateWithoutPayment_accountInput, billUncheckedCreateWithoutPayment_accountInput> | billCreateWithoutPayment_accountInput[] | billUncheckedCreateWithoutPayment_accountInput[]
    connectOrCreate?: billCreateOrConnectWithoutPayment_accountInput | billCreateOrConnectWithoutPayment_accountInput[]
    upsert?: billUpsertWithWhereUniqueWithoutPayment_accountInput | billUpsertWithWhereUniqueWithoutPayment_accountInput[]
    createMany?: billCreateManyPayment_accountInputEnvelope
    set?: billWhereUniqueInput | billWhereUniqueInput[]
    disconnect?: billWhereUniqueInput | billWhereUniqueInput[]
    delete?: billWhereUniqueInput | billWhereUniqueInput[]
    connect?: billWhereUniqueInput | billWhereUniqueInput[]
    update?: billUpdateWithWhereUniqueWithoutPayment_accountInput | billUpdateWithWhereUniqueWithoutPayment_accountInput[]
    updateMany?: billUpdateManyWithWhereWithoutPayment_accountInput | billUpdateManyWithWhereWithoutPayment_accountInput[]
    deleteMany?: billScalarWhereInput | billScalarWhereInput[]
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type billCreateWithoutUsersInput = {
    description: string
    discount?: number | null
    tax: number
    service?: number | null
    total_price?: number
    date?: Date | string
    payment_account?: payment_accountCreateNestedOneWithoutBillInput
    friend_order?: friend_orderCreateNestedManyWithoutBillInput
  }

  export type billUncheckedCreateWithoutUsersInput = {
    id?: number
    payment_account_id?: number | null
    description: string
    discount?: number | null
    tax: number
    service?: number | null
    total_price?: number
    date?: Date | string
    friend_order?: friend_orderUncheckedCreateNestedManyWithoutBillInput
  }

  export type billCreateOrConnectWithoutUsersInput = {
    where: billWhereUniqueInput
    create: XOR<billCreateWithoutUsersInput, billUncheckedCreateWithoutUsersInput>
  }

  export type billCreateManyUsersInputEnvelope = {
    data: billCreateManyUsersInput | billCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type payment_accountCreateWithoutUsersInput = {
    name: string
    number: string
    card_holder: string
    is_activated: boolean
    bill?: billCreateNestedManyWithoutPayment_accountInput
  }

  export type payment_accountUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    number: string
    card_holder: string
    is_activated: boolean
    bill?: billUncheckedCreateNestedManyWithoutPayment_accountInput
  }

  export type payment_accountCreateOrConnectWithoutUsersInput = {
    where: payment_accountWhereUniqueInput
    create: XOR<payment_accountCreateWithoutUsersInput, payment_accountUncheckedCreateWithoutUsersInput>
  }

  export type payment_accountCreateManyUsersInputEnvelope = {
    data: payment_accountCreateManyUsersInput | payment_accountCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type billUpsertWithWhereUniqueWithoutUsersInput = {
    where: billWhereUniqueInput
    update: XOR<billUpdateWithoutUsersInput, billUncheckedUpdateWithoutUsersInput>
    create: XOR<billCreateWithoutUsersInput, billUncheckedCreateWithoutUsersInput>
  }

  export type billUpdateWithWhereUniqueWithoutUsersInput = {
    where: billWhereUniqueInput
    data: XOR<billUpdateWithoutUsersInput, billUncheckedUpdateWithoutUsersInput>
  }

  export type billUpdateManyWithWhereWithoutUsersInput = {
    where: billScalarWhereInput
    data: XOR<billUpdateManyMutationInput, billUncheckedUpdateManyWithoutUsersInput>
  }

  export type billScalarWhereInput = {
    AND?: billScalarWhereInput | billScalarWhereInput[]
    OR?: billScalarWhereInput[]
    NOT?: billScalarWhereInput | billScalarWhereInput[]
    id?: IntFilter<"bill"> | number
    user_id?: IntNullableFilter<"bill"> | number | null
    payment_account_id?: IntNullableFilter<"bill"> | number | null
    description?: StringFilter<"bill"> | string
    discount?: FloatNullableFilter<"bill"> | number | null
    tax?: IntFilter<"bill"> | number
    service?: FloatNullableFilter<"bill"> | number | null
    total_price?: IntFilter<"bill"> | number
    date?: DateTimeFilter<"bill"> | Date | string
  }

  export type payment_accountUpsertWithWhereUniqueWithoutUsersInput = {
    where: payment_accountWhereUniqueInput
    update: XOR<payment_accountUpdateWithoutUsersInput, payment_accountUncheckedUpdateWithoutUsersInput>
    create: XOR<payment_accountCreateWithoutUsersInput, payment_accountUncheckedCreateWithoutUsersInput>
  }

  export type payment_accountUpdateWithWhereUniqueWithoutUsersInput = {
    where: payment_accountWhereUniqueInput
    data: XOR<payment_accountUpdateWithoutUsersInput, payment_accountUncheckedUpdateWithoutUsersInput>
  }

  export type payment_accountUpdateManyWithWhereWithoutUsersInput = {
    where: payment_accountScalarWhereInput
    data: XOR<payment_accountUpdateManyMutationInput, payment_accountUncheckedUpdateManyWithoutUsersInput>
  }

  export type payment_accountScalarWhereInput = {
    AND?: payment_accountScalarWhereInput | payment_accountScalarWhereInput[]
    OR?: payment_accountScalarWhereInput[]
    NOT?: payment_accountScalarWhereInput | payment_accountScalarWhereInput[]
    id?: IntFilter<"payment_account"> | number
    user_id?: IntNullableFilter<"payment_account"> | number | null
    name?: StringFilter<"payment_account"> | string
    number?: StringFilter<"payment_account"> | string
    card_holder?: StringFilter<"payment_account"> | string
    is_activated?: BoolFilter<"payment_account"> | boolean
  }

  export type friend_orderCreateWithoutOrder_detailInput = {
    name: string
    is_paid?: boolean
    bill?: billCreateNestedOneWithoutFriend_orderInput
  }

  export type friend_orderUncheckedCreateWithoutOrder_detailInput = {
    id?: number
    bill_id?: number | null
    name: string
    is_paid?: boolean
  }

  export type friend_orderCreateOrConnectWithoutOrder_detailInput = {
    where: friend_orderWhereUniqueInput
    create: XOR<friend_orderCreateWithoutOrder_detailInput, friend_orderUncheckedCreateWithoutOrder_detailInput>
  }

  export type friend_orderUpsertWithoutOrder_detailInput = {
    update: XOR<friend_orderUpdateWithoutOrder_detailInput, friend_orderUncheckedUpdateWithoutOrder_detailInput>
    create: XOR<friend_orderCreateWithoutOrder_detailInput, friend_orderUncheckedCreateWithoutOrder_detailInput>
    where?: friend_orderWhereInput
  }

  export type friend_orderUpdateToOneWithWhereWithoutOrder_detailInput = {
    where?: friend_orderWhereInput
    data: XOR<friend_orderUpdateWithoutOrder_detailInput, friend_orderUncheckedUpdateWithoutOrder_detailInput>
  }

  export type friend_orderUpdateWithoutOrder_detailInput = {
    name?: StringFieldUpdateOperationsInput | string
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    bill?: billUpdateOneWithoutFriend_orderNestedInput
  }

  export type friend_orderUncheckedUpdateWithoutOrder_detailInput = {
    id?: IntFieldUpdateOperationsInput | number
    bill_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    is_paid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type billCreateWithoutFriend_orderInput = {
    description: string
    discount?: number | null
    tax: number
    service?: number | null
    total_price?: number
    date?: Date | string
    users?: usersCreateNestedOneWithoutBillInput
    payment_account?: payment_accountCreateNestedOneWithoutBillInput
  }

  export type billUncheckedCreateWithoutFriend_orderInput = {
    id?: number
    user_id?: number | null
    payment_account_id?: number | null
    description: string
    discount?: number | null
    tax: number
    service?: number | null
    total_price?: number
    date?: Date | string
  }

  export type billCreateOrConnectWithoutFriend_orderInput = {
    where: billWhereUniqueInput
    create: XOR<billCreateWithoutFriend_orderInput, billUncheckedCreateWithoutFriend_orderInput>
  }

  export type order_detailCreateWithoutFriend_orderInput = {
    menu: string
    quantity: number
    price: number
  }

  export type order_detailUncheckedCreateWithoutFriend_orderInput = {
    id?: number
    menu: string
    quantity: number
    price: number
  }

  export type order_detailCreateOrConnectWithoutFriend_orderInput = {
    where: order_detailWhereUniqueInput
    create: XOR<order_detailCreateWithoutFriend_orderInput, order_detailUncheckedCreateWithoutFriend_orderInput>
  }

  export type order_detailCreateManyFriend_orderInputEnvelope = {
    data: order_detailCreateManyFriend_orderInput | order_detailCreateManyFriend_orderInput[]
    skipDuplicates?: boolean
  }

  export type billUpsertWithoutFriend_orderInput = {
    update: XOR<billUpdateWithoutFriend_orderInput, billUncheckedUpdateWithoutFriend_orderInput>
    create: XOR<billCreateWithoutFriend_orderInput, billUncheckedCreateWithoutFriend_orderInput>
    where?: billWhereInput
  }

  export type billUpdateToOneWithWhereWithoutFriend_orderInput = {
    where?: billWhereInput
    data: XOR<billUpdateWithoutFriend_orderInput, billUncheckedUpdateWithoutFriend_orderInput>
  }

  export type billUpdateWithoutFriend_orderInput = {
    description?: StringFieldUpdateOperationsInput | string
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    tax?: IntFieldUpdateOperationsInput | number
    service?: NullableFloatFieldUpdateOperationsInput | number | null
    total_price?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneWithoutBillNestedInput
    payment_account?: payment_accountUpdateOneWithoutBillNestedInput
  }

  export type billUncheckedUpdateWithoutFriend_orderInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    payment_account_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    tax?: IntFieldUpdateOperationsInput | number
    service?: NullableFloatFieldUpdateOperationsInput | number | null
    total_price?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type order_detailUpsertWithWhereUniqueWithoutFriend_orderInput = {
    where: order_detailWhereUniqueInput
    update: XOR<order_detailUpdateWithoutFriend_orderInput, order_detailUncheckedUpdateWithoutFriend_orderInput>
    create: XOR<order_detailCreateWithoutFriend_orderInput, order_detailUncheckedCreateWithoutFriend_orderInput>
  }

  export type order_detailUpdateWithWhereUniqueWithoutFriend_orderInput = {
    where: order_detailWhereUniqueInput
    data: XOR<order_detailUpdateWithoutFriend_orderInput, order_detailUncheckedUpdateWithoutFriend_orderInput>
  }

  export type order_detailUpdateManyWithWhereWithoutFriend_orderInput = {
    where: order_detailScalarWhereInput
    data: XOR<order_detailUpdateManyMutationInput, order_detailUncheckedUpdateManyWithoutFriend_orderInput>
  }

  export type order_detailScalarWhereInput = {
    AND?: order_detailScalarWhereInput | order_detailScalarWhereInput[]
    OR?: order_detailScalarWhereInput[]
    NOT?: order_detailScalarWhereInput | order_detailScalarWhereInput[]
    id?: IntFilter<"order_detail"> | number
    friend_order_id?: IntNullableFilter<"order_detail"> | number | null
    menu?: StringFilter<"order_detail"> | string
    quantity?: IntFilter<"order_detail"> | number
    price?: IntFilter<"order_detail"> | number
  }

  export type usersCreateWithoutBillInput = {
    username?: string | null
    password?: string | null
    fullname?: string | null
    phone_number?: string | null
    email?: string | null
    bio?: string | null
    dob?: Date | string | null
    photo_profile?: string | null
    created_at?: Date | string
    update_at?: Date | string
    payment_account?: payment_accountCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutBillInput = {
    id?: number
    username?: string | null
    password?: string | null
    fullname?: string | null
    phone_number?: string | null
    email?: string | null
    bio?: string | null
    dob?: Date | string | null
    photo_profile?: string | null
    created_at?: Date | string
    update_at?: Date | string
    payment_account?: payment_accountUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutBillInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutBillInput, usersUncheckedCreateWithoutBillInput>
  }

  export type payment_accountCreateWithoutBillInput = {
    name: string
    number: string
    card_holder: string
    is_activated: boolean
    users?: usersCreateNestedOneWithoutPayment_accountInput
  }

  export type payment_accountUncheckedCreateWithoutBillInput = {
    id?: number
    user_id?: number | null
    name: string
    number: string
    card_holder: string
    is_activated: boolean
  }

  export type payment_accountCreateOrConnectWithoutBillInput = {
    where: payment_accountWhereUniqueInput
    create: XOR<payment_accountCreateWithoutBillInput, payment_accountUncheckedCreateWithoutBillInput>
  }

  export type friend_orderCreateWithoutBillInput = {
    name: string
    is_paid?: boolean
    order_detail?: order_detailCreateNestedManyWithoutFriend_orderInput
  }

  export type friend_orderUncheckedCreateWithoutBillInput = {
    id?: number
    name: string
    is_paid?: boolean
    order_detail?: order_detailUncheckedCreateNestedManyWithoutFriend_orderInput
  }

  export type friend_orderCreateOrConnectWithoutBillInput = {
    where: friend_orderWhereUniqueInput
    create: XOR<friend_orderCreateWithoutBillInput, friend_orderUncheckedCreateWithoutBillInput>
  }

  export type friend_orderCreateManyBillInputEnvelope = {
    data: friend_orderCreateManyBillInput | friend_orderCreateManyBillInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutBillInput = {
    update: XOR<usersUpdateWithoutBillInput, usersUncheckedUpdateWithoutBillInput>
    create: XOR<usersCreateWithoutBillInput, usersUncheckedCreateWithoutBillInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutBillInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutBillInput, usersUncheckedUpdateWithoutBillInput>
  }

  export type usersUpdateWithoutBillInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_profile?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_account?: payment_accountUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutBillInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_profile?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_account?: payment_accountUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type payment_accountUpsertWithoutBillInput = {
    update: XOR<payment_accountUpdateWithoutBillInput, payment_accountUncheckedUpdateWithoutBillInput>
    create: XOR<payment_accountCreateWithoutBillInput, payment_accountUncheckedCreateWithoutBillInput>
    where?: payment_accountWhereInput
  }

  export type payment_accountUpdateToOneWithWhereWithoutBillInput = {
    where?: payment_accountWhereInput
    data: XOR<payment_accountUpdateWithoutBillInput, payment_accountUncheckedUpdateWithoutBillInput>
  }

  export type payment_accountUpdateWithoutBillInput = {
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    card_holder?: StringFieldUpdateOperationsInput | string
    is_activated?: BoolFieldUpdateOperationsInput | boolean
    users?: usersUpdateOneWithoutPayment_accountNestedInput
  }

  export type payment_accountUncheckedUpdateWithoutBillInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    card_holder?: StringFieldUpdateOperationsInput | string
    is_activated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type friend_orderUpsertWithWhereUniqueWithoutBillInput = {
    where: friend_orderWhereUniqueInput
    update: XOR<friend_orderUpdateWithoutBillInput, friend_orderUncheckedUpdateWithoutBillInput>
    create: XOR<friend_orderCreateWithoutBillInput, friend_orderUncheckedCreateWithoutBillInput>
  }

  export type friend_orderUpdateWithWhereUniqueWithoutBillInput = {
    where: friend_orderWhereUniqueInput
    data: XOR<friend_orderUpdateWithoutBillInput, friend_orderUncheckedUpdateWithoutBillInput>
  }

  export type friend_orderUpdateManyWithWhereWithoutBillInput = {
    where: friend_orderScalarWhereInput
    data: XOR<friend_orderUpdateManyMutationInput, friend_orderUncheckedUpdateManyWithoutBillInput>
  }

  export type friend_orderScalarWhereInput = {
    AND?: friend_orderScalarWhereInput | friend_orderScalarWhereInput[]
    OR?: friend_orderScalarWhereInput[]
    NOT?: friend_orderScalarWhereInput | friend_orderScalarWhereInput[]
    id?: IntFilter<"friend_order"> | number
    bill_id?: IntNullableFilter<"friend_order"> | number | null
    name?: StringFilter<"friend_order"> | string
    is_paid?: BoolFilter<"friend_order"> | boolean
  }

  export type usersCreateWithoutPayment_accountInput = {
    username?: string | null
    password?: string | null
    fullname?: string | null
    phone_number?: string | null
    email?: string | null
    bio?: string | null
    dob?: Date | string | null
    photo_profile?: string | null
    created_at?: Date | string
    update_at?: Date | string
    bill?: billCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutPayment_accountInput = {
    id?: number
    username?: string | null
    password?: string | null
    fullname?: string | null
    phone_number?: string | null
    email?: string | null
    bio?: string | null
    dob?: Date | string | null
    photo_profile?: string | null
    created_at?: Date | string
    update_at?: Date | string
    bill?: billUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutPayment_accountInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPayment_accountInput, usersUncheckedCreateWithoutPayment_accountInput>
  }

  export type billCreateWithoutPayment_accountInput = {
    description: string
    discount?: number | null
    tax: number
    service?: number | null
    total_price?: number
    date?: Date | string
    users?: usersCreateNestedOneWithoutBillInput
    friend_order?: friend_orderCreateNestedManyWithoutBillInput
  }

  export type billUncheckedCreateWithoutPayment_accountInput = {
    id?: number
    user_id?: number | null
    description: string
    discount?: number | null
    tax: number
    service?: number | null
    total_price?: number
    date?: Date | string
    friend_order?: friend_orderUncheckedCreateNestedManyWithoutBillInput
  }

  export type billCreateOrConnectWithoutPayment_accountInput = {
    where: billWhereUniqueInput
    create: XOR<billCreateWithoutPayment_accountInput, billUncheckedCreateWithoutPayment_accountInput>
  }

  export type billCreateManyPayment_accountInputEnvelope = {
    data: billCreateManyPayment_accountInput | billCreateManyPayment_accountInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutPayment_accountInput = {
    update: XOR<usersUpdateWithoutPayment_accountInput, usersUncheckedUpdateWithoutPayment_accountInput>
    create: XOR<usersCreateWithoutPayment_accountInput, usersUncheckedCreateWithoutPayment_accountInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPayment_accountInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPayment_accountInput, usersUncheckedUpdateWithoutPayment_accountInput>
  }

  export type usersUpdateWithoutPayment_accountInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_profile?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bill?: billUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutPayment_accountInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_profile?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bill?: billUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type billUpsertWithWhereUniqueWithoutPayment_accountInput = {
    where: billWhereUniqueInput
    update: XOR<billUpdateWithoutPayment_accountInput, billUncheckedUpdateWithoutPayment_accountInput>
    create: XOR<billCreateWithoutPayment_accountInput, billUncheckedCreateWithoutPayment_accountInput>
  }

  export type billUpdateWithWhereUniqueWithoutPayment_accountInput = {
    where: billWhereUniqueInput
    data: XOR<billUpdateWithoutPayment_accountInput, billUncheckedUpdateWithoutPayment_accountInput>
  }

  export type billUpdateManyWithWhereWithoutPayment_accountInput = {
    where: billScalarWhereInput
    data: XOR<billUpdateManyMutationInput, billUncheckedUpdateManyWithoutPayment_accountInput>
  }

  export type billCreateManyUsersInput = {
    id?: number
    payment_account_id?: number | null
    description: string
    discount?: number | null
    tax: number
    service?: number | null
    total_price?: number
    date?: Date | string
  }

  export type payment_accountCreateManyUsersInput = {
    id?: number
    name: string
    number: string
    card_holder: string
    is_activated: boolean
  }

  export type billUpdateWithoutUsersInput = {
    description?: StringFieldUpdateOperationsInput | string
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    tax?: IntFieldUpdateOperationsInput | number
    service?: NullableFloatFieldUpdateOperationsInput | number | null
    total_price?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_account?: payment_accountUpdateOneWithoutBillNestedInput
    friend_order?: friend_orderUpdateManyWithoutBillNestedInput
  }

  export type billUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    payment_account_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    tax?: IntFieldUpdateOperationsInput | number
    service?: NullableFloatFieldUpdateOperationsInput | number | null
    total_price?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    friend_order?: friend_orderUncheckedUpdateManyWithoutBillNestedInput
  }

  export type billUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    payment_account_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    tax?: IntFieldUpdateOperationsInput | number
    service?: NullableFloatFieldUpdateOperationsInput | number | null
    total_price?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payment_accountUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    card_holder?: StringFieldUpdateOperationsInput | string
    is_activated?: BoolFieldUpdateOperationsInput | boolean
    bill?: billUpdateManyWithoutPayment_accountNestedInput
  }

  export type payment_accountUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    card_holder?: StringFieldUpdateOperationsInput | string
    is_activated?: BoolFieldUpdateOperationsInput | boolean
    bill?: billUncheckedUpdateManyWithoutPayment_accountNestedInput
  }

  export type payment_accountUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    card_holder?: StringFieldUpdateOperationsInput | string
    is_activated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type order_detailCreateManyFriend_orderInput = {
    id?: number
    menu: string
    quantity: number
    price: number
  }

  export type order_detailUpdateWithoutFriend_orderInput = {
    menu?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type order_detailUncheckedUpdateWithoutFriend_orderInput = {
    id?: IntFieldUpdateOperationsInput | number
    menu?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type order_detailUncheckedUpdateManyWithoutFriend_orderInput = {
    id?: IntFieldUpdateOperationsInput | number
    menu?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type friend_orderCreateManyBillInput = {
    id?: number
    name: string
    is_paid?: boolean
  }

  export type friend_orderUpdateWithoutBillInput = {
    name?: StringFieldUpdateOperationsInput | string
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    order_detail?: order_detailUpdateManyWithoutFriend_orderNestedInput
  }

  export type friend_orderUncheckedUpdateWithoutBillInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    order_detail?: order_detailUncheckedUpdateManyWithoutFriend_orderNestedInput
  }

  export type friend_orderUncheckedUpdateManyWithoutBillInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    is_paid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type billCreateManyPayment_accountInput = {
    id?: number
    user_id?: number | null
    description: string
    discount?: number | null
    tax: number
    service?: number | null
    total_price?: number
    date?: Date | string
  }

  export type billUpdateWithoutPayment_accountInput = {
    description?: StringFieldUpdateOperationsInput | string
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    tax?: IntFieldUpdateOperationsInput | number
    service?: NullableFloatFieldUpdateOperationsInput | number | null
    total_price?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneWithoutBillNestedInput
    friend_order?: friend_orderUpdateManyWithoutBillNestedInput
  }

  export type billUncheckedUpdateWithoutPayment_accountInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    tax?: IntFieldUpdateOperationsInput | number
    service?: NullableFloatFieldUpdateOperationsInput | number | null
    total_price?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    friend_order?: friend_orderUncheckedUpdateManyWithoutBillNestedInput
  }

  export type billUncheckedUpdateManyWithoutPayment_accountInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    tax?: IntFieldUpdateOperationsInput | number
    service?: NullableFloatFieldUpdateOperationsInput | number | null
    total_price?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Friend_orderCountOutputTypeDefaultArgs instead
     */
    export type Friend_orderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Friend_orderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BillCountOutputTypeDefaultArgs instead
     */
    export type BillCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BillCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Payment_accountCountOutputTypeDefaultArgs instead
     */
    export type Payment_accountCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Payment_accountCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use order_detailDefaultArgs instead
     */
    export type order_detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = order_detailDefaultArgs<ExtArgs>
    /**
     * @deprecated Use friend_orderDefaultArgs instead
     */
    export type friend_orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = friend_orderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use billDefaultArgs instead
     */
    export type billArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = billDefaultArgs<ExtArgs>
    /**
     * @deprecated Use payment_accountDefaultArgs instead
     */
    export type payment_accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = payment_accountDefaultArgs<ExtArgs>

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