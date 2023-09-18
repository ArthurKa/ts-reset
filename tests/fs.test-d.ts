import { expectType } from 'tsd';
import fs from 'fs';

fs.readFile('', (err, data) => {
  if(err) {
    expectType<NodeJS.ErrnoException>(err);
    //                                ^?
    expectType<undefined>(data);
    //                    ^?
  } else {
    expectType<null>(err);
    //               ^?
    expectType<Buffer>(data);
    //                 ^?
  }
});
