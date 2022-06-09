module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    'jest/globals': true,
  },
  extends: [
    'next/core-web-vitals',
    'prettier',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@next/next/recommended',
  ],
  "overrides": [
    {
      // Enable TS eslint plugin rules or preset only for matching files
      files: ['**/*.ts', '**/*tsx'],
      "plugins": ["@typescript-eslint"],
      extends: ['plugin:@typescript-eslint/recommended'],
    },
    {
      // Enable eslint tests plugins rules or preset only for matching files
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      "plugins": ["testing-library", "jest"],
      extends: ['plugin:testing-library/react', 'plugin:jest/recommended', 'plugin:jest/style'],
    },
  ],
  rules: {
    // Typescript
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-shadow': 'error',
    // React
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/forbid-prop-types': [0],
    'react/prefer-stateless-function': [1],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx', '.jsx'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    // React Hooks
    'react-hooks/exhaustive-deps': 'warn',
    // Testing Library
    "testing-library/await-async-query": "error",
    "testing-library/no-await-sync-query": "error",
    "testing-library/no-debugging-utils": "warn",
    "testing-library/no-dom-import": "off",
    // Jest
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    // Others
    'no-nested-ternary': 'off',
    'import/prefer-default-export': 'off',
  },
};
