module.exports = {
  parserOptions: {
    files: ['*.ts', '*.tsx'],
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:security/recommended',
    'plugin:cypress/recommended',
    'standard-with-typescript',
    'next/core-web-vitals'
  ],
  ignorePatterns: [
    '**/public/',
    '**/.next/',
    '**/out/',
    '**/node_modules/',
    '**/build/',
    '**/dist/',
    '**/test/scripts/',
    '**/yarn.lock',
    '**/next-env.d.ts',
    '**/next.config.js',
    'data',
    '.eslintrc.js'
  ],
  rules: {
    'multiline-ternary': 0,
    'max-len': [
      2,
      {
        code: 100,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true
      }
    ]
  },
  settings: {
    next: {
      rootDir: './stack/'
    }
  }
}
