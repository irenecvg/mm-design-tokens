# mm-design-tokens

Design tokens, built with [Style Dictionary](https://styledictionary.com/).

**[View the token showcase →](https://irenecvg.github.io/mm-design-tokens/)**

The source of truth is plain JSON under `tokens/`. The build resolves every
`{reference}` between files into a single flat-nested output — no formats
other than JSON are generated here. Platform-specific output (SCSS, CSS,
etc.) is the responsibility of whichever project consumes these tokens.

## Structure

Token layers, from primitive to component-facing, each in its own file
under `tokens/`:

- **`brand.json`** — primitives: raw color scales, font families/weights, a
  numeric spacing scale (`scale.0`–`scale.1600`).
- **`alias.json`** — semantic aliases over the primitives (`primary`,
  `error`, `success`, `warning`, `information`, `neutral`, plus
  `border-width` / `border-radius` / `font`).
- **`mapped.json`** — component-facing tokens (`text`, `icons`, `surface`,
  `border`) resolved from the aliases above.
- **`responsive.json`** — typography and layout tokens that vary by
  breakpoint (`mobile` / `tablet` / `desktop`). Only breakpoints where a
  value actually changes are present — e.g. `typography.h3` only has a
  `mobile` key because it never changes at wider viewports.

Files are merged into one token tree at build time, so later files can
reference earlier ones (e.g. `mapped.json`'s `text.headings` references
`{neutral.800}` from `alias.json`).

## Units

All dimension values (spacing, font sizes, line heights) are **unitless
numbers representing px** — e.g. `"scale.400": 16` means 16px. No unit
conversion (px→rem or otherwise) happens here; that's intentionally left to
consuming projects, since the right conversion depends on their own base
font size and tooling.

## Build

```sh
npm install
npm run build
```

Outputs a single resolved `build/tokens.json`.

## Consuming these tokens

Published as [`@irenecvg/mm-design-tokens`](https://www.npmjs.com/package/@irenecvg/mm-design-tokens):

```sh
npm install @irenecvg/mm-design-tokens
```

`build/tokens.json` is the resolved output — read it directly, or feed it
into your own build step to generate SCSS/CSS/etc.
