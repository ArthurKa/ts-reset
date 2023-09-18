import { expectType } from 'tsd';

const res1 = Number();
//    ^?
expectType<0>(res1);
