/*
 * @Author: abc
 * @Date: 2020-12-31 11:36:48
 * @LastEditors: abc
 * @LastEditTime: 2021-01-09 14:36:47
 * @Description:
 */
module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    "no-descending-specificity": null
  }
};
