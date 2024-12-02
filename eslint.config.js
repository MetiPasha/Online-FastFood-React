import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactRefresh from "eslint-plugin-react-refresh"; // این مورد درست است

export default [
  {
    ignores: ["dist"],
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: {
      react: { version: "18.3" },
    },
    plugins: {
      react,
      "react-hooks": {}, // پلاگین را اینجا تعریف کنید
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactRefresh.configs.recommended.rules,
      "react-hooks/rules-of-hooks": "error", // این قانون اضافه شد
      "react-hooks/exhaustive-deps": "warn", // این قانون اضافه شد
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        {
          allowConstantExport: true,
        },
      ],
    },
  },
];
