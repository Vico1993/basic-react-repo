import eslint from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import react from "eslint-plugin-react";
import reactRefresh from "eslint-plugin-react-refresh";
import * as tsEslint from "typescript-eslint";
import globals from "globals";

export default tsEslint.config([
    {
        ignores: [
            "dist/",
            "*.mjs",
            "coverage/",
            "vite.config.ts",
            "vite-env.d.ts",
        ],
    },
    eslint.configs.recommended,
    ...tsEslint.configs.recommended,
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        plugins: {
            react,
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
        },
        languageOptions: {
            ecmaVersion: 2020,
            globals: {
                ...globals.browser,
                ...globals.node,
                ...tsEslint.configs.recommended[0].languageOptions.globals,
            },
        },
        rules: {
            ...react.configs.recommended.rules,
            ...react.configs["jsx-runtime"].rules,
            ...reactHooks.configs.recommended.rules,
            "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true },
            ],
            "react/prop-types": "off",
        },
        settings: {
            react: {
                version: "detect",
            },
        },
    },
]);
