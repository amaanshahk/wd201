import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  {
    env: {
      commonjs: true,
      es2021: true,
      node: true,
      jest: true,
    },
    extends: "eslint:recommended",
    overrides: [],
    parserOptions: {
      ecmaVersion: "latest",
    },
    rules: {},
  },
];
