type Contain<T extends PropertyKey> = (
  T extends unknown
    ? { [K in T]: unknown }
    : never
);

declare global {
  interface ObjectConstructor {
    hasOwn<T extends PropertyKey>(e: object, key: T): e is Contain<T>;

    create<T>(o: null): Record<string, T>;
    create<T extends PropertyKey, K>(o: null): Record<T, K>;
  }

  interface Object {
    hasOwnProperty<T extends PropertyKey>(key: T): this is Contain<T>;
  }
}
