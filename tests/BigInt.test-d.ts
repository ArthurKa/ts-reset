import { expectType } from 'tsd';

const res1 = BigInt(0);
//    ^?
expectType<0n>(res1);

const res2 = BigInt(0 as number);
//    ^?
expectType<bigint>(res2);

const res3 = BigInt(0 as 0 | 2 | 3);
//    ^?
expectType<0n | 2n | 3n>(res3);

const res4 = BigInt(101n);
//    ^?
expectType<101n>(res4);

const res5 = BigInt(false);
//    ^?
expectType<0n>(res5);

const res6 = BigInt(true);
//    ^?
expectType<1n>(res6);

const res7 = BigInt(false as boolean);
//    ^?
expectType<0n | 1n>(res7);

const res8 = BigInt(101n as 101n | false);
//    ^?
expectType<0n | 101n>(res8);
