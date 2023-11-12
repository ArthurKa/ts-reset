declare global {
  interface MapConstructor {
    new(): Map<unknown, unknown>;
  }
}
