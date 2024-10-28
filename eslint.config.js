import js from '@eslint/js';
import perfectionist from 'eslint-plugin-perfectionist';
import pluginPreact from 'eslint-plugin-preact';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  {
    files: ['**/*.{ts,tsx}'],
  },
  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      perfectionist,
      preact: pluginPreact,
    },
    rules: {
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'alphabetical',
          order: 'asc',
          ignoreCase: true,
          newlinesBetween: 'always',
          maxLineLength: undefined,
          groups: [
            ['builtin', 'external'],
            'internal',
            ['parent', 'sibling', 'index'],
            'unknown',
          ],
        },
      ],
    },
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
];
