<header>

Fixes and improves TypeScript types.

<developmentInstallation>

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
import '<pkg.name>';
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
import '<pkg.name>/dist/Fetch';
import '<pkg.name>/dist/Boolean';
```

<testing>

<suggestions>
