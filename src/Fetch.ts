import 'node-fetch';

declare module 'node-fetch' {
  interface Body {
    json<T>(): Promise<T>;
  }
}

declare global {
  interface Body {
    json<T>(): Promise<T>;
  }
}
