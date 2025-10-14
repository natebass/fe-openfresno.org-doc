# Open Fresno Storybook (Next.js)

This repository hosts the **Storybook + Next.js testing environment** for Open Fresno. It provides a sandbox for building, documenting, and testing UI components in isolation before they are integrated into the main site.

## 🚀 Getting Started

### Prerequisites

- Node.js
- PNPM

### Installation

Clone the repo and install dependencies:

```
git clone [https://github.com/openfresno/fe-openfresno-doc.git](https://github.com/openfresno/fe-openfresno-doc.git)
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

If you want to preview components inside a Next.js app shell:

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
