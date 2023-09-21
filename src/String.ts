import { StringInsertable } from './utils';

type Split<T extends string> = T extends `${infer U}${infer Rest}` ? [U, ...Split<Rest>] : [];

declare global {
  interface StringConstructor {
    (): '';
    <T extends StringInsertable>(e: T): `${T}`;
  }

  interface String {
    charAt<This extends string, Pos extends number>(this: This, pos: Pos): (
      string extends This
        ? string
        : Split<This>[Pos] extends infer Result
          ? number extends Pos
            ? Result | ''
            : Result extends undefined
              ? ''
              : Result
          : never
    );

    toLowerCase<This extends string>(this: This): Lowercase<This>;
    toUpperCase<This extends string>(this: This): Uppercase<This>;

    split(this: '', separator: '', limit?: number): [];
    split(this: '', separator: string, limit?: number): [] | [''];
    split(this: `${number}`, separator: '.'): [`${number}`] | [`${number}`, `${number}`];
    split(this: `${number}`, separator: string): [string, ...string[]];
  }
}
