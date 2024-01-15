import { expectType } from 'tsd';

const res1 = Array.from([1] as const);
//    ^?
expectType<1[]>(res1);

const res2 = Array.from([1]);
//    ^?
expectType<number[]>(res2);

const res3 = Array.from({ length: 3 });
//    ^?
expectType<undefined[]>(res3);

const res4 = Array.from({ length: 3 }, (e, i) => {
  //  ^?
  expectType<undefined>(e);
  expectType<number>(i);

  return 123;
});
expectType<number[]>(res4);

declare const arr1: string[] | string;
if(Array.isArray(arr1)) {
  expectType<string[]>(arr1);
  //                   ^?
} else {
  expectType<string>(arr1);
  //                 ^?
}

declare const arr2: readonly string[] | string;
if(Array.isArray(arr2)) {
  expectType<readonly string[]>(arr2);
  //                            ^?
} else {
  expectType<string>(arr2);
  //                 ^?
}

declare const arr3: any;
if(Array.isArray(arr3)) {
  expectType<unknown[]>(arr3);
  //                    ^?
} else {
  expectType<any>(arr3);
  //              ^?
}

declare const arr4: unknown;
if(Array.isArray(arr4)) {
  expectType<unknown[]>(arr4);
  //                    ^?
} else {
  expectType<unknown>(arr4);
  //                  ^?
}

declare const arr5: readonly string[] | number[] | string;
if(Array.isArray(arr5)) {
  expectType<readonly string[] | number[]>(arr5);
  //                                       ^?
} else {
  expectType<string>(arr5);
  //                 ^?
}

declare const arr6: ReadonlyArray<string> | number[] | string;
if(Array.isArray(arr6)) {
  expectType<readonly string[] | number[]>(arr6);
  //                                       ^?
} else {
  expectType<string>(arr6);
  //                 ^?
}

declare const readonlyTuple1: readonly [123, 'asd'];
const readonlyMappedTuple1 = readonlyTuple1.map(String);
expectType<readonly [string, string]>(readonlyMappedTuple1);
//                                    ^?
const readonlyMappedTuple2 = readonlyTuple1.map(e => String(e));
expectType<readonly ['asd' | '123', 'asd' | '123']>(readonlyMappedTuple2);
//                                                  ^?

declare const tuple1: [123, 'asd'];
const mappedTuple1 = tuple1.map(String);
expectType<[string, string]>(mappedTuple1);
//                           ^?
const mappedTuple2 = tuple1.map(e => String(e));
expectType<['asd' | '123', 'asd' | '123']>(mappedTuple2);
//                                         ^?
