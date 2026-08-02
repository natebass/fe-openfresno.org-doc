# Open Fresno documentation

This repository is for documenting, testing, and experimenting with the Open Fresno website. It provides a sandbox
for testing UI components in isolation before they are integrated into the main site.

> [!NOTE]
> If you are looking for the Open Fresno website,
> go [here](https://github.com/openfresno/openfresno.org).

## Requirements

- Node.js 24.0.0 or higher

## Prerequisite

- Install PNPM. Get help installing
  PNPM [here](https://openfresno.github.io/fe-openfresno.org-doc/?path=/docs/project-develop-developer-guide--docs)
  or https://pnpm.io/installation.
- Install the Chromium [Playwright browser](https://playwright.dev/docs/browsers). `npx playwright install`

## Quick start

### Start Storybook

Open [http://localhost:6006](http://localhost:6006) with your browser to see the result. Storybook hosts the component
stories and all markdown documentation.

```sh
pnpm storybook
```

### Start the website

The full website is included so you can run and experiment with it locally
on [http://localhost:3000](http://localhost:3000).

```sh
pnpm dev
```

> [!TIP]
> The code should be periodically kept up to date with the main repository by manually copy/pasting the `src/` folder.
> See the [sync guide](https://openfresno.github.io/fe-openfresno.org-doc/?path=/docs/project-develop-developer-guide--docs).

## Test

This website primarily uses Storybook. It is also a home for a bigger test suite using Vitest and Playwright. For more
information see
the [testing guide](https://openfresno.github.io/fe-openfresno.org-doc/?path=/docs/project-test--docs).

> [!WARNING]
> Critical tests should be included in the main website repository for use in the CI/CD pipeline.

## Resources

- [Contributing guide](https://github.com/openfresno/openfresno.org/blob/main/CONTRIBUTING.md)
- [Open Fresno's Code of Conduct](https://www.google.com/search?q=https://github.com/openfresno/fe-openfresno-doc/blob/main/CODE_OF_CONDUCT.md)
- [Storybook documentation](https://storybook.js.org/docs)
- [Next.js documentation](https://nextjs.org/docs)
