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
