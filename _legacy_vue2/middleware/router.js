/*
 * @Author: abc
 * @Date: 2020-10-16 16:45:00
 * @LastEditors: abc
 * @LastEditTime: 2020-12-31 16:22:45
 * @Description:
 */
export default ({ app }) => {
  app.router.afterEach((to, from, next) => {
    if (process.client) {
      document.getElementById("global").firstChild.scrollTop = 0;
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  });
};
