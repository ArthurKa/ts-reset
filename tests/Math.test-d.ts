import { Brand, isArrayLength } from '@arthurka/ts-utils';
import { expectType } from 'tsd';

type Integer = Brand<number, 'Integer'>;
type Natural = Brand<Integer, 'Natural'>;

declare const integer: Integer;
declare const natural: Natural;

const params = [...[integer, natural] as const];


const min1 = Math.min(1, 2, 3);
expectType<1 | 2 | 3>(min1);
//                    ^?

const min2 = Math.min(integer, 2 as number);
expectType<Integer | number>(min2);
//                           ^?

const min3 = Math.min();
expectType<number>(min3);
//                 ^?

const min4 = Math.min(...params);
expectType<number>(min4);
//                 ^?

if(isArrayLength(params, '>', 0)) {
  const min5 = Math.min(...params);
  expectType<Integer | Natural>(min5);
  //                            ^?
}


const max1 = Math.max(1, 2, 3);
expectType<1 | 2 | 3>(max1);
//                    ^?

const max2 = Math.max(integer, 2 as number);
expectType<Integer | number>(max2);
//                           ^?

const max3 = Math.max();
expectType<number>(max3);
//                 ^?

const max4 = Math.max(...params);
expectType<number>(max4);
//                 ^?

if(isArrayLength(params, '>', 0)) {
  const max5 = Math.max(...params);
  expectType<Integer | Natural>(max5);
  //                            ^?
}
