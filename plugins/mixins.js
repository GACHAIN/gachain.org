/*
 * @Author: abc
 * @Date: 2020-12-07 10:15:34
 * @LastEditors: abc
 * @LastEditTime: 2021-02-03 10:42:41
 * @Description:mixins
 */
import Vue from "vue";
Vue.mixin({
  data() {
    return {
      isMobile: true
    };
  },
  mounted() {
    const that = this;
    that.initIsMobile(that);
    window.addEventListener("resize", function () {
      that.initIsMobile(that);
    });
    // console.log(document.body.offsetWidth);
  },
  methods: {
    initIsMobile(that) {
      if (process.client) {
        const width = document.body.offsetWidth;
        if (width > 992) {
          that.isMobile = false;
        } else {
          that.isMobile = true;
        }
      }
    }
  }
});
