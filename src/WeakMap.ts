declare global {
  interface WeakMapConstructor {
    new <T extends readonly (readonly [object, unknown])[]>(entries?: T | null): WeakMap<T[number][0], T[number][1]>;
  }
}
