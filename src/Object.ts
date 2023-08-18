interface Object {
  hasOwnProperty<T extends PropertyKey>(key: T): this is { [K in T]: unknown };
}

interface ObjectConstructor {
  hasOwn<T extends PropertyKey>(e: object, key: T): e is { [K in T]: unknown };
}
