declare global {
  interface MapConstructor {
    new <T extends readonly (readonly [unknown, unknown])[]>(entries?: T | null): Map<T[number][0], T[number][1]>;
  }
}
