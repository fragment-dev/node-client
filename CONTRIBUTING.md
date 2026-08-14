# Contributing

## Setup

Use [`nvm`](https://github.com/nvm-sh/nvm) to manage Node versions. CI runs on Node 20; anything >= 18 works.

```bash
nvm install 20
nvm use 20
```

This repo uses Yarn (Berry, via `.yarnrc.yml`). Install dependencies:

```bash
yarn
```

## Development

Generated GraphQL clients live in `generated/`. Regenerate them after changing queries or the schema:

```bash
yarn gen-clients
```

Build both CJS and ESM outputs:

```bash
yarn build
```

## Testing and linting

```bash
yarn test        # vitest, watch mode
yarn test:ci     # single run
yarn lint
yarn typecheck
```

To refresh the schema used by tests, run `yarn update-test-schema`.

## Docs

```bash
yarn gen-docs
yarn start-docs
```

## Releasing

Publishing is handled by GitHub Actions (`.github/workflows/publish.yml`). Bump the version with `yarn version`, which also regenerates `generated/version.ts` via the `postversion` hook.
