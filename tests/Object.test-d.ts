import { expectType } from 'tsd';

const obj = {};

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
