import { expectType } from 'tsd';

const obj = {};
declare const union: 'asd' | 'qwe';

if(obj.hasOwnProperty('asd')) {
  expectType<{ asd: unknown }>(obj);

  if(obj.hasOwnProperty('asd2')) {
    expectType<{ asd: unknown } & { asd2: unknown }>(obj);
  }
  if(Object.hasOwn(obj, 'qwe')) {
    expectType<{ asd: unknown } & { qwe: unknown }>(obj);
  }
}

if(Object.hasOwn(obj, 'qwe')) {
  expectType<{ qwe: unknown }>(obj);
}

if(obj.hasOwnProperty(union)) {
  expectType<{ asd: unknown } | { qwe: unknown }>(obj);
}

if(Object.hasOwn(obj, union)) {
  expectType<{ asd: unknown } | { qwe: unknown }>(obj);
}

const asd1 = Object.create(null);
expectType<Record<string, unknown>>(asd1);
//                                  ^?

const asd2 = Object.create<number>(null);
expectType<Record<string, number>>(asd2);
//                                 ^?

const asd3 = Object.create<number, string>(null);
expectType<Record<number, string>>(asd3);
//                                 ^?
