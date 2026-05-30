export default [
  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        window: true,
        document: true,
        console: true,
        alert: true,
        navigator: true,
        setTimeout: true,
        setInterval: true,
        clearInterval: true,
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "eqeqeq": "error",
      "no-var": "warn",
      "no-console": "warn",
      "prefer-const": "warn",
      "semi": ["warn", "always"],
      "no-shadow": "warn",
      "curly": "warn",
      "complexity": ["warn", 2],
      "no-multiple-empty-lines": "warn",
      "no-trailing-spaces": "warn",
      "prefer-arrow-callback": "warn",
      "arrow-body-style": "warn",
      "no-else-return": "warn",
      "object-shorthand": "warn",
      "no-lonely-if": "warn",
    }
  }
];