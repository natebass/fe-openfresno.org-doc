# Open Fresno website documentation

This repository hosts the **Storybook + Next.js testing environment** for the Open Fresno website. It provides a sandbox
for building, documenting, and testing UI components in isolation before they are integrated into the main site.

> [!NOTE]
> The Open Fresno website repository
> is [github.com/openfresno/openfresno.org](https://github.com/openfresno/openfresno.org).
> [!WARNING]
> The code should be periodically kept up to date with the main repository by manually copy/pasting the `src/` folder.

## Prerequisites

- PNPM. Get help installing
  PNPM [here](https://openfresno.github.io/fe-openfresno.org-doc/?path=/docs/developer-guide--docs#install-pnpm)
  or https://pnpm.io/installation.

## Get Started

1. Install the Node.js dependencies.

   ```
   pnpm i
   ```

2. Start the Storybook development server.

   ```
   pnpm storybook
   ```

3. (Optional) Preview the regular Next.js website.

   ```
   pnpm dev
   ```

## Test

Learn about testing https://openfresno.github.io/fe-openfresno.org-doc/.

> [!WARNING]
> Critical tests should be included in the main website repository for use in CI/CD pipelines.

## Resources

- [Contributing guide](https://github.com/openfresno/openfresno.org/blob/main/CONTRIBUTING.md)
- [Open Fresno's Code of Conduct](https://www.google.com/search?q=https://github.com/openfresno/fe-openfresno-doc/blob/main/CODE_OF_CONDUCT.md)
- [Storybook documentation](https://storybook.js.org/docs)
- [Next.js documentation](https://nextjs.org/docs)
