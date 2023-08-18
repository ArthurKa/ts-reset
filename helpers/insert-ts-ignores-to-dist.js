// @ts-check
'use strict';

const fs = require('fs');
const path = require('path');
const JSON5 = require('json5');

const {
  compilerOptions: {
    outDir,
  },
} = /** @type {import('../tsconfig.json')} */ (JSON5.parse(fs.readFileSync(path.resolve('tsconfig.json'), 'utf-8')));

/** @type {Record<string, Array<[number, number]>>} */
const ignoreDirectives = {
  'JSON.d.ts': [
    [2, 1],
  ],
  'Zod.d.ts': [
    [2, 1],
  ],
};

for(const [fileName, positions] of Object.entries(ignoreDirectives)) {
  const pathToFile = path.resolve(outDir, fileName);
  const file = fs.readFileSync(pathToFile, 'utf-8').split('\n');

  for(const [line, tabDepth] of positions) {
    file.splice(line, 0, `${Array.from({ length: tabDepth * 4 }, () => ' ').join('')}// @ts-ignore`);
  }
  file.join('\n');

  fs.writeFileSync(pathToFile, file.join('\n'));
}
