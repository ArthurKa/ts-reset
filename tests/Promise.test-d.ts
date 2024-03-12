import { expectType } from 'tsd';

new Promise(() => {}).catch(e => {
  //                        ^?
  expectType<unknown>(e);
});

new Promise(() => {}).then(
  e => {
    expectType<unknown>(e);
  },
  e => {
    expectType<unknown>(e);
  },
);
