import { expectType } from 'tsd';
import { Brand, tuple } from '@arthurka/ts-utils';

const falsy = [
  //    ^?
  Boolean(),
  Boolean(false),
  Boolean(0),
  Boolean(0n),
  Boolean(''),
  Boolean(null),
  Boolean(undefined),
  // Boolean(NaN),
];
expectType<false[]>(falsy);

const widenFalsy = tuple(
  //  ^?
  Boolean(false as boolean),
  Boolean(0 as number),
  Boolean(0n as bigint),
  Boolean('' as string),
);
expectType<[boolean, boolean, boolean, boolean]>(widenFalsy);

const truthy = tuple(
  //    ^?
  Boolean([1, 2]),
  Boolean(['1', 2] as const),
  Boolean({}),
  Boolean({} as Record<string, unknown>),
  Boolean({ a: 2 }),
  Boolean({ asd: 'qwe' } as const),
  Boolean('asd'),
);
expectType<[boolean, boolean, boolean, boolean, boolean, boolean, boolean]>(truthy);

const res1 = Boolean(123);
//    ^?
expectType<boolean>(res1);

const res2 = Boolean(123 as unknown);
//    ^?
expectType<boolean>(res2);

const res3 = Boolean(123 as any);
//    ^?
expectType<boolean>(res3);

const res4 = Boolean('123');
//    ^?
expectType<boolean>(res4);

const res5 = Boolean('123' as string);
//    ^?
expectType<boolean>(res5);

type UserId = Brand<string, 'UserId'>;
declare const userId: UserId;
const res6 = Boolean(userId);
//    ^?
expectType<boolean>(res6);

const res7 = Boolean(true);
//    ^?
expectType<true>(res7);

const res8 = Boolean(true as boolean);
//    ^?
expectType<boolean>(res8);
