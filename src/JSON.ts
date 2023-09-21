import 'json5';

declare module 'json5' {
  // WARN: `@ts-ignore` directive will be added here on compile
  function parse<T>(
    text: string,
    reviver?: (this: any, key: string, value: any) => any,
  ): T;

  // WARN: `@ts-ignore` directive will be added here on compile
  function stringify<T>(value: T, replacer?: (this: any, key: string, value: any) => any, space?: string | number): (
    T extends undefined
      ? undefined
      : string
  );
}

declare global {
  interface JSON {
    parse<T>(
      text: string,
      reviver?: (this: any, key: string, value: any) => any,
    ): T;

    stringify<T>(value: T, replacer?: (this: any, key: string, value: any) => any, space?: string | number): (
      T extends undefined
        ? undefined
        : string
    );
  }
}
