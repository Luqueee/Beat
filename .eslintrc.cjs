module.exports = {
  extends: [
    "plugin:astro/recommended",
    "plugin:jsx-a11y/strict",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        ecmaVersion: "latest",
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
        project: "./tsconfig.json"
      },
      rules: {
        
      }
    }
  ],
  env: {
    node: true
  },
  rules: {
    "@typescript-eslint/ban-ts-comment": "warn",
    "camelcase": "off",
    "prefer-const": "error",
    "no-undef": "off",
    "no-bitwise": "off",
    "no-unused-vars": "off",
    "guard-for-in": "off",
    "capitalized-comments": "off"
  }
};