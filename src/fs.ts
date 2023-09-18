import 'fs';

declare module 'fs' {
  function readFile(
    path: PathOrFileDescriptor,
    callback: (
      ...params: (
        | [err: NodeJS.ErrnoException, data: undefined]
        | [err: null, data: Buffer]
      )
    ) => void,
  ): void;
}
