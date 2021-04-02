/*
 * @Author: abc
 * @Date: 2020-12-31 11:36:48
 * @LastEditors: abc
 * @LastEditTime: 2021-01-27 16:40:31
 * @Description: eslint config
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: [
    "@nuxtjs",
    "prettier",
    "prettier/vue",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended"
  ],
  plugins: ["prettier"],
  // add your custom rules here
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/no-v-html": 0,
    "no-unused-vars": 0,
    "vue/no-parsing-error": 0,
    " vue/no-duplicate-attributes": 0
  }
};
