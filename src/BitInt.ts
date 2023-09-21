export {};

declare global {
  interface BigIntConstructor {
    <T extends bigint | boolean | number | string>(value: T): (
      T extends false
        ? 0n
        : T extends true
          ? 1n
          : `${T}` extends `${infer R extends bigint}`
            ? R
            : bigint
    );
  }
}
