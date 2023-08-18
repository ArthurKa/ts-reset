export {};

type Split<T extends string> = T extends `${infer U}${infer Rest}` ? [U, ...Split<Rest>] : [];

declare global {
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
  }
}
