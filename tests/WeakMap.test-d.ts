import { expectType } from 'tsd';

const weakMap1 = new WeakMap();

expectType<WeakMap<object, unknown>>(weakMap1);
//                                   ^?
