import { expectType } from 'tsd';

new Promise(() => {}).catch(e => {
  //                        ^?
  expectType<unknown>(e);
});
