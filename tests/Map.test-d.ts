import { expectType } from 'tsd';

const map1 = new Map();

expectType<Map<unknown, unknown>>(map1);
//                                ^?
