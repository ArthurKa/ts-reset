import { expectType } from 'tsd';

Promise.resolve(123).catch(e => {
  expectType<unknown>(e);
});

Promise.resolve(123 as const).then(
  e => {
    expectType<123>(e);
  },
  e => {
    expectType<unknown>(e);
  },
);

declare const param1: boolean | null;
declare const param2: boolean | undefined;

const asd1 = param1 ?? await Promise.resolve(123 as const).then();
expectType<boolean | 123>(asd1);
//                        ^?

const asd2 = param1 ?? await Promise.resolve(123 as const).then(undefined);
expectType<boolean | 123>(asd2);
//                           ^?

const asd3 = param2 ?? await Promise.resolve(123 as const).then(null);
expectType<boolean | 123>(asd3);
//                           ^?

const asd4 = param1 ?? await Promise.resolve(123 as const).then(null);
expectType<boolean | 123>(asd4);
//                           ^?

const asd5 = param1 ?? await Promise.resolve(123 as const).then(e => String(e));
expectType<boolean | '123'>(asd5);
//                           ^?
