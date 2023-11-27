import 'json5';

declare module 'json5' {
  // WARN: `@ts-ignore` directive will be added here on compile
  function stringify<T>(value: T, replacer?: (this: any, key: string, value: any) => any, space?: string | number): (
    T extends undefined
      ? undefined
      : string
  );

  // WARN: `@ts-ignore` directive will be added here on compile
  function parse<T>(
    text: string,
    reviver?: (this: any, key: string, value: any) => any,
  ): T;
}

declare global {
  interface JSON {
    stringify<T>(value: T, replacer?: (this: any, key: string, value: any) => any, space?: string | number): (
      T extends undefined
        ? undefined
        : string
    );

    parse<T>(
      text: string,
      reviver?: (this: any, key: string, value: any) => any,
    ): T;
  }
}
