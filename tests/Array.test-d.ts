import { expectType } from 'tsd';

const res1 = Array.from([1] as const);
//    ^?
expectType<1[]>(res1);

const res2 = Array.from([1]);
//    ^?
expectType<number[]>(res2);

const res3 = Array.from({ length: 3 });
//    ^?
expectType<undefined[]>(res3);

const res4 = Array.from({ length: 3 }, (e, i) => {
  //  ^?
  expectType<undefined>(e);
  expectType<number>(i);

  return 123;
});
expectType<number[]>(res4);
