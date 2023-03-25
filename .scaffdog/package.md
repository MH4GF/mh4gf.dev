---
name: "package"
root: "."
output: "."
ignore: []
questions:
  packageKind:
    message: "パッケージの種別を入力してください"
    choices:
      - packages
      - apps
  packageName: "パッケージの名前を入力してください"
---

# `{{ inputs.packageKind }}/{{ inputs.packageName }}/package.json`

```json
{
  "name": "@mh4gf/{{ inputs.packageName }}",
  "type": "module",
  "version": "0.0.1",
  "private": true,
  "main": "src/index.ts",
  "scripts": {
    "lint": "eslint src --ext .ts,.tsx",
    "format": "prettier -w --plugin-search-dir=. ."
  }
}
```

# `{{ inputs.packageKind }}/{{ inputs.packageName }}/src/index.ts`

```typescript
console.log("Hello {{ inputs.packageName }}");
```

# `{{ inputs.packageKind }}/{{ inputs.packageName }}/tsconfig.json`

```json
{
  "extends": "../../tsconfig.base.json"
}
```

# `{{ inputs.packageKind }}/{{ inputs.packageName }}/turbo.json`

```json
{
  "$schema": "https://turbo.build/schema.json",
  "baseBranch": "origin/main",
  "extends": ["//"],
  "pipeline": {
    "dev": {},
    "build": {},
    "lint": {},
    "format": {}
  }
}
```

# `{{ inputs.packageKind }}/{{ inputs.packageName }}/.eslintrc.cjs`

```js
/** @type {import('eslint/lib/shared/types').ConfigData} */
module.exports = {
  extends: ["../../.eslintrc.base.js"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
};
```
