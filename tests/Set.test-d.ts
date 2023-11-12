import { expectType } from 'tsd';

const res1 = new Set();

expectType<Set<unknown>>(res1);
//                       ^?
