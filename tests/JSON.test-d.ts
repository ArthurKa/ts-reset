import { expectNotType, expectType } from 'tsd';
import JSON5 from 'json5';
import { unknown } from 'zod';

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

const res7 = JSON.stringify(undefined);
//    ^?
expectType<undefined>(res7);

const res8 = JSON5.stringify(undefined);
//    ^?
expectType<undefined>(res8);

const res9 = JSON.stringify(undefined as undefined | number);
//    ^?
expectType<string | undefined>(res9);

const res10 = JSON5.stringify(undefined as undefined | number);
//    ^?
expectType<string | undefined>(res10);

JSON.stringify({}, function(key, val) {
  const e = this[key];
  expectType<unknown>(e);
  expectNotType<string>(key);
  expectType<unknown>(val);
});

JSON.parse('{}', function(key, val) {
  const e = this[key];
  expectType<unknown>(e);
  expectNotType<string>(key);
  expectType<unknown>(val);
});
