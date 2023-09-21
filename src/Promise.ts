export {};

declare global {
  interface Promise<T> {
    catch<TResult = never>(onrejected?: ((reason: unknown) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
  }
}
