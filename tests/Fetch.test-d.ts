import { expectType } from 'tsd';
import fetch from 'node-fetch';

const res1 = await fetch('').then(e => e.json());
//    ^?
expectType<unknown>(res1);

const res2 = await fetch('').then(e => e.json<123>());
//    ^?
expectType<123>(res2);

const res3 = await fetch('').then(e => e.text());
//    ^?
expectType<string>(res3);
