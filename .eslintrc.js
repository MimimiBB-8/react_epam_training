module.exports = {
  settings: {
    react: {
      version: "6.14.13",
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "airbnb-typescript/base"],
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      tsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  ignorePatterns: ["babel.config.json", "dist/", ".eslintrc.js"],
  plugins: ["react", "@typescript-eslint", "prettier"],
  overrides: [
    {
      files: ["webpack.development.js", "webpack.production.js"],
    },
  ],
  rules: {
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": "warn",
    "require-jsdoc": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-types": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
      },
    ],
  },
};
