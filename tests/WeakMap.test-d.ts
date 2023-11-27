import { expectType } from 'tsd';

const weakMap1 = new WeakMap();

expectType<WeakMap<object, unknown>>(weakMap1);
//                                   ^?

declare const r1: Record<string, string>;
declare const r2: Record<number, number>;

const map2 = new WeakMap([[r1, 1], [r2, true]]);
expectType<WeakMap<typeof r1 | typeof r2, number | boolean>>(map2);
//                                                           ^?
