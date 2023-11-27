import 'json5';

declare module 'json5' {
  // WARN: `@ts-ignore` directive will be added here on compile
  function stringify<T>(
    value: T,
    replacer?: <K extends string>(this: { [V in K]: unknown }, key: K, value: unknown) => unknown, space?: string | number
  ): (
    T extends undefined
      ? undefined
      : string
  );

  // WARN: `@ts-ignore` directive will be added here on compile
  function parse<T>(
    text: string,
    reviver?: <K extends string>(this: { [V in K]: unknown }, key: K, value: unknown) => unknown,
  ): T;
}

declare global {
  interface JSON {
    stringify<T>(
      value: T,
      replacer?: <K extends string>(this: { [V in K]: unknown }, key: K, value: unknown) => unknown, space?: string | number
    ): (
      T extends undefined
        ? undefined
        : string
    );

    parse<T>(
      text: string,
      reviver?: <K extends string>(this: { [V in K]: unknown }, key: K, value: unknown) => unknown,
    ): T;
  }
}
