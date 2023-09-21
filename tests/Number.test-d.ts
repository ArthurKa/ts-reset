import { expectType } from 'tsd';
import { tuple } from '@arthurka/ts-utils';

const res1 = Number();
//    ^?
expectType<0>(res1);

const res2 = Number(123);
//    ^?
expectType<123>(res2);

const res3 = Number(false);
//    ^?
expectType<0>(res3);

const res4 = Number(false);
//    ^?
expectType<0>(res4);

const res5 = Number(false as boolean);
//    ^?
expectType<0 | 1>(res5);

const numbers = tuple(
  //  ^?
  Number(undefined),
  Number(Infinity),
  Number(-Infinity),
  Number(NaN),
  Number('123' as string),
);
expectType<[number, number, number, number, number]>(numbers);

const res6 = Number(200n);
//    ^?
expectType<200>(res6);

const res7 = Number('1234');
//    ^?
expectType<1234>(res7);
