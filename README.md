# Open Fresno Storybook (Next.js)

This repository hosts the **Storybook + Next.js testing environment** for Open Fresno. It provides a sandbox for building, documenting, and testing UI components in isolation before they are integrated into the main site. The main repository is https://github.com/openfresno/openfresno.org.

## Get Started

### Prerequisites

- Node.js
- PNPM

### Installation

Clone the repo and install dependencies:

```
git clone https://github.com/openfresno/fe-openfresno-doc
cd fe-openfresno-doc
pnpm i
```

### Running Storybook

Start the Storybook development server:

```
pnpm run storybook
```

Storybook will be available at **http://localhost:6006**.

### Running Next.js

The regular website can be previewed as well.

> [!NOTE]
> The code should be periodically kept up to date with the main repository by manually copy/pasting the `src/` folder.

```
pnpm run dev
```

## Testing

This repo is designed for component-driven development. We use:

- **Storybook** for isolated UI development
- **Vitest** for unit tests
- **Playwright** for visual regression and interaction tests

## Contribute

We welcome contributions! Here are a few ways to help:

1. Look for Issues tagged `help wanted` or `good first issue`.
2. Add or improve component stories to increase coverage.
3. Write tests for new components or edge cases.
4. Submit a pull request with clear commit messages.

## Resources

- [Storybook Docs](https://storybook.js.org/docs/ "null")
- [Next.js Docs](https://nextjs.org/docs "null")
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/ "null")
- [Code of Conduct](https://www.google.com/search?q=https://github.com/openfresno/fe-openfresno-doc/blob/main/CODE_OF_CONDUCT.md "null")
