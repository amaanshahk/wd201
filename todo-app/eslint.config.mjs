import globals from "globals";
import pluginJs from "@eslint/js";
import { defineConfig } from "eslint";

export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  {
    env: {
      jest: true,
    },
  },
  pluginJs.configs.recommended,
];
