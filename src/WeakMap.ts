declare global {
  interface WeakMapConstructor {
    new <K extends object = object, V = unknown>(entries?: readonly (readonly [K, V])[] | null): WeakMap<K, V>;
  }
}
