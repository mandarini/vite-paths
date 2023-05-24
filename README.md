# VitePaths

This project shows the issue described in [nrwl/nx/issues/17019](https://github.com/nrwl/nx/issues/17019).

The issue is that Vite has issues with a library that is imported in `vite.config.ts`.

## What this project contains

This project contains a simple js library which lives under `libs/my-lib`. The import path of that library, as defined in [`tsconfig.base.json`](./tsconfig.base.json) is `@myorg/my-lib`.

That library is imported in the [`vite.config.ts`](./apps/web/vite.config.ts) file of the `web` app of this workspace, living under `apps/web`.

It's imported like this:

```ts
import { myLib } from '@myorg/my-lib';
```

If you run `npx nx serve web` or `npx nx build web` , you'll see the following error:

```bash
failed to load config from /<PATH TO PROJECT>/apps/web/vite.config.ts

 >  NX   Unexpected token 'export'
```

## How to resolve

If you import the lib with a relative path like this:

```ts
import { myLib } from '../../libs/my-lib/src/index';
```

then it works. You have to disable the `@nrwl/nx/enforce-module-boundaries` rule for that line:

```ts
// eslint-disable-next-line @nx/enforce-module-boundaries
import { myLib } from '../../libs/my-lib/src/index';
```
