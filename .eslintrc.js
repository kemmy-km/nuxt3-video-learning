module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "plugin:nuxt/recommended",
    "eslint:recommended",
    "prettier",
    "prettier/vue",
    "plugin:prettier/recommended",
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "prettier/prettier": "warn",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // ここに追加のルールを設定します
    "no-unused-vars": "warn", // 未使用の変数に警告を表示
    "no-constant-condition": ["error", { checkLoops: false }], // ループ内での定数条件の警告を無効化
  },
  // parserOptions: {
  //   parser: "@typescript-eslint/parser",
  //   ecmaVersion: 2022,
  //   sourceType: "module",
  // },
}
