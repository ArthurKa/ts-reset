import 'json5';

declare module 'json5' {
  // WARN: `@ts-ignore` directive will be added here on compile
  function parse<T>(
    text: string,
    reviver?: (this: any, key: string, value: any) => any,
  ): T;
}

declare global {
  interface JSON {
    parse<T>(
      text: string,
      reviver?: (this: any, key: string, value: any) => any,
    ): T;
  }
}
