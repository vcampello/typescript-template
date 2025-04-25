// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommended,
    {
        ignores: ["./node_modules", "./dist"],
    },
    {
        rules: {
            "@typescript-eslint/explicit-function-return-type": "error",
        },
    },
    // needs to come last to prevent conflicts with eslint
    eslintConfigPrettier,
);
