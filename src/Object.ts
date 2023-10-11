type Contain<T extends PropertyKey> = (
  T extends unknown
    ? { [K in T]: unknown }
    : never
);

declare global {
  interface ObjectConstructor {
    hasOwn<T extends PropertyKey>(e: object, key: T): e is Contain<T>;
  }

  interface Object {
    hasOwnProperty<T extends PropertyKey>(key: T): this is Contain<T>;
  }
}
