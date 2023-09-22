export {};

type Falsy = false | 0 | 0n | '' | null | undefined;

declare global {
  interface BooleanConstructor {
    (): false;
    <T extends Falsy | true>(e: T): T extends Falsy ? false : true;
    <T>(e: T): e is T extends Falsy ? never : T;
  }
}
