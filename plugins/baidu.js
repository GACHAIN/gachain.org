/*
 * @Author: abc
 * @Date: 2021-03-15 17:09:48
 * @LastEditors: abc
 * @LastEditTime: 2021-03-15 17:34:36
 * @Description:
 */
export default ({ app: { router }, store }) => {
  /* 每次路由变更时进行pv统计 */
  router.afterEach((to, from) => {
    /* 告诉增加一个PV */
    console.log(to.fullPath);
    try {
      window._hmt = window._hmt || [];
      window._hmt.push(["_trackPageview", to.fullPath]);
    } catch (e) {}
  });
};
