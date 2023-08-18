import { expectType } from 'tsd';
import JSON5 from 'json5';


const res1 = JSON.parse('');
//    ^?
expectType<unknown>(res1);

const res2 = JSON5.parse('');
//    ^?
expectType<unknown>(res2);

const res3 = JSON.stringify('');
//    ^?
expectType<string>(res3);

const res4 = JSON5.stringify('');
//    ^?
expectType<string>(res4);

const res5 = JSON.parse<123>('');
//    ^?
expectType<123>(res5);

const res6 = JSON5.parse<123>('');
//    ^?
expectType<123>(res6);
