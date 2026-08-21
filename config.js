export default {
  source: ['tokens/**/*.json'],
  platforms: {
    json: {
      // No transforms: values pass through exactly as authored (hex colors,
      // raw px numbers) — only {reference} tokens get resolved to literals.
      buildPath: 'build/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json/nested',
        },
      ],
    },
  },
};
