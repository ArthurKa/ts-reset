import { expectType } from 'tsd';

const literal = 'aSd';
const string = 'asd' as string;

const res1 = literal.toLowerCase();
//    ^?
expectType<'asd'>(res1);

const res2 = literal.toUpperCase();
//    ^?
expectType<'ASD'>(res2);

const res3 = literal.charAt(1);
//    ^?
expectType<'S'>(res3);

const res4 = string.charAt(2);
//    ^?
expectType<string>(res4);

const res5 = literal.charAt(1 as number);
//    ^?
expectType<'' | 'S' | 'a' | 'd'>(res5);

const res6 = string.charAt(2 as number);
//    ^?
expectType<string>(res6);

const res7 = String();
//    ^?
expectType<''>(res7);

const res71 = String(123);
//    ^?
expectType<'123'>(res71);

const res72 = String(1.23);
//    ^?
expectType<'1.23'>(res72);

const res73 = String(-0);
//    ^?
expectType<'0'>(res73);

const res74 = String(Infinity);
//    ^?
expectType<`${number}`>(res74);

const res75 = String(NaN);
//    ^?
expectType<`${number}`>(res75);

const res76 = String(123 as number);
//    ^?
expectType<`${number}`>(res76);
