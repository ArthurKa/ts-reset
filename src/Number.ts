import { StringInsertable } from './utils';

declare global {
  interface NumberConstructor {
    (): 0;
    <T extends StringInsertable>(e: T): (
      T extends null | false
        ? 0
        : T extends true
          ? 1
          : `${T}` extends `${infer R extends number}`
            ? R
            : number
    );
  }
}
