# My-first-TypeScript-Library
My first TypeScript library


## first Step

> initiate the package.json file

```bash
npm init
```

> Remember to declare where to find the type declarations `"types": "dist/index.d.ts",`

> Remember to declare where to find the common entry js file `"main": "dist/index.js",`

```json
{
  "name": "@sawyerbutton/my-first-typescript-library",
  "version": "1.0.0",
  "description": "log \"hello\" and \"bye\" to the console!",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/sawyerbutton/My-first-TypeScript-Library.git"
  },
  "keywords": [
    "TypeScript"
  ],
  "author": "sawyerbutton",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/sawyerbutton/My-first-TypeScript-Library/issues"
  },
  "homepage": "https://github.com/sawyerbutton/My-first-TypeScript-Library#readme"
}
```

## second step

> setup tsconfig.json

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es5",
    "sourceMap": true,
    "declaration": true,
    "outDir": "./dist"
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

> remember to add `"declaration": true,` flat in order to generate the typing declaration required for the consumers to use this library

## implement library

> setup xx.ts file under src folder

## create index.ts file

> Add an index.ts file to src folder. The purpose of it is to export all the parts of the library available for consumers.

> index.ts file will be converted to index.d.ts file later

## configure .npmignore

> commonly, packages downloaded from npm does not have src folder

> the compiled files along with the typings `(.d.ts files)` live in the dist folder.

> create a `.npmigonore` file to ignore these file

```text
tsconfig.json
src
```

## test library

> Install packages for unit testing

```bash
yarn add mocha @types/mocha chai @types/chai ts-node typescript --dev
```

> there is a unit

```typescript
export function add(x: number, y: number) {
  return x + y;
}
```

> corresponding unit test

```typescript
import { add } from './hello-world';

import * as mocha from 'mocha';
import * as chai from 'chai';

const expect  = chai.expect;

describe('My add function', () => {

    it('should be able to add things correctly' , () => {
        expect(add(3,4)).to.equal(7);
    });

});
```

> run the test command 

```bash
mocha --reporter spec --compilers ts:ts-node/register src/**/*.spec.ts
```

> console should output

```bash
 My add function
    ✓ should be able to add things correctly


  1 passing (7ms)
```

> It will be more convenient to put this long command into package.json into "scripts: { "test": "..."}" and then run the tests with `npm test`.


## compile file then publish

```bash
tsc
npm publish --access=public
```

> remember to use `npm publish --access=public` command rather than `npm publush` if you don't have private package access in npm.