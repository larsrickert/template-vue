# Vue.js Template 🚀

This template is based on the official vue starter app but is extended by common libraries:

- [Pinia](https://pinia.vuejs.org)
- [Vue I18n](https://vue-i18n.intlify.dev)
- [Sass](https://sass-lang.com)
- [pnpm](https://pnpm.io/), if you haven't installed pnpm, you can do so with `npm i -g pnpm`
- Linting and formatting before committing

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Project Setup

### Install dependencies

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm run dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# When testing on CI, must build the project first
pnpm run build

# Runs the end-to-end tests
pnpm run test:e2e
# Runs the tests only on Chromium
pnpm run test:e2e -- --project=chromium
# Runs the tests of a specific file
pnpm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
pnpm run test:e2e -- --debug
```

### Lint and fix files with [ESLint](https://eslint.org)

```sh
pnpm run lint
```

### Format files with [Prettier](https://prettier.io)

```sh
pnpm run format
```

## Deploying for production with Docker

To start the application for production using Docker, just run

```sh
docker-compose up -d
```
