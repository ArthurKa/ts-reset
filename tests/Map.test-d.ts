import { expectType } from 'tsd';

const map1 = new Map();

expectType<Map<unknown, unknown>>(map1);
//                                ^?

const map2 = new Map([['a', 1], [1, 2], [15, true]]);
expectType<Map<string | number, number | boolean>>(map2);
//                                                 ^?
