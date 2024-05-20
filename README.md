[![All dependencies](https://img.shields.io/librariesio/release/npm/@arthurka/ts-reset/1.12.1?style=flat-square "All dependencies of @arthurka/ts-reset@1.12.1")](https://libraries.io/npm/@arthurka/ts-reset/1.12.1)
[![Reported vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/@arthurka/ts-reset@1.12.1?style=flat-square "Reported vulnerabilities of @arthurka/ts-reset@1.12.1")](https://snyk.io/test/npm/@arthurka/ts-reset/1.12.1)
[![Commits](https://flat.badgen.net/github/commits/ArthurKa/ts-reset)](https://github.com/ArthurKa/ts-reset/commits/master)
[![NPM-version](https://img.shields.io/badge/npm-v1.12.1-blue.svg?style=flat-square&&logo=npm "Current NPM-version")](https://www.npmjs.com/package/@arthurka/ts-reset/v/1.12.1)
[![Total downloads](https://img.shields.io/npm/dt/@arthurka/ts-reset?style=flat-square "Total downloads for all the time")](https://npm-stat.com/charts.html?package=@arthurka/ts-reset)
[![Developed by](https://img.shields.io/badge/developed_by-ArthurKa-blueviolet.svg?style=flat-square "GitHub")](https://github.com/ArthurKa)\
[![Publish size](https://flat.badgen.net/packagephobia/publish/@arthurka/ts-reset@1.12.1?label=publish 'Publish size of @arthurka/ts-reset@1.12.1')](https://packagephobia.now.sh/result?p=@arthurka/ts-reset@1.12.1)
[![Install size](https://flat.badgen.net/packagephobia/install/@arthurka/ts-reset@1.12.1?label=install 'Install size of @arthurka/ts-reset@1.12.1')](https://packagephobia.now.sh/result?p=@arthurka/ts-reset@1.12.1)
[![Minified size](https://img.shields.io/bundlephobia/min/@arthurka/ts-reset@1.12.1?style=flat-square&label=minified "Minified size of @arthurka/ts-reset@1.12.1")](https://bundlephobia.com/result?p=@arthurka/ts-reset@1.12.1)
[![Minified + gzipped size](https://img.shields.io/bundlephobia/minzip/@arthurka/ts-reset@1.12.1?style=flat-square&label=minzipped "Minified + gzipped size of @arthurka/ts-reset@1.12.1")](https://bundlephobia.com/result?p=@arthurka/ts-reset@1.12.1)

# @arthurka/ts-reset@1.12.1

Fixes and improves TypeScript types.

## Installation
`@arthurka/ts-reset` is available via NPM:
```bash
$ npm i -D @arthurka/ts-reset@1.12.1
```

## Usage

It's also recommended to install `@total-typescript/ts-reset` as dev dependency.

### #1 Full (recommended)

`tsconfig.json`:

```json
"compilerOptions": {
  "types": [
    "@types/node",
    "@total-typescript/ts-reset",
    "@arthurka/ts-reset",
  ],
},
```

### #2 Also full usage

`tsconfig.json`:

```json
"compilerOptions": {
  "include": [
    "src",
  ],
},
```

`src/custom.d.ts`:

```ts
import '@total-typescript/ts-reset';
import '@arthurka/ts-reset';
```

### #3 Partial usage

`tsconfig.json`:

```json
"compilerOptions": {
  "include": [
    "src",
  ],
},
```

`src/custom.d.ts`:

```ts
import '@total-typescript/ts-reset/dist/filter-boolean';
import '@arthurka/ts-reset/dist/Fetch';
import '@arthurka/ts-reset/dist/Boolean';
```

## Testing
```bash
$ npm test
```

---

Your improve suggestions and bug reports [are welcome](https://github.com/ArthurKa/ts-reset/issues) any time.
