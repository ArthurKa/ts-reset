declare global {
  interface Promise<T> {
    catch<TResult = never>(onrejected?: ((reason: unknown) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;

    then(onfulfilled?: null | undefined): Promise<T>;
    then<TResult = T>(onfulfilled: (value: T) => TResult | PromiseLike<TResult>): Promise<TResult>;
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: unknown) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): Promise<TResult1 | TResult2>;
  }
}
