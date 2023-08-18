interface ArrayConstructor {
  from<T = undefined>(iterable: Iterable<T> | ArrayLike<T>): T[];
  from<U, T = undefined>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
}
