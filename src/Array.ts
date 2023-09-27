import { IsAnyOrUnknown } from '@arthurka/ts-utils';

declare global {
  interface ArrayConstructor {
    // @ts-expect-error
    isArray<T>(arg: T): arg is (
      IsAnyOrUnknown<T> extends true
        ? unknown[]
        : T extends unknown[]
          ? unknown[]
          : T extends readonly unknown[]
            ? readonly unknown[]
            : unknown[]
    );

    from<T = undefined>(iterable: Iterable<T> | ArrayLike<T>): T[];
    from<U, T = undefined>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
  }
}
