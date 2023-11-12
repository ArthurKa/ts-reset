declare global {
  interface SetConstructor {
    new <T>(values?: readonly T[] | null): Set<T>;
  }
}
