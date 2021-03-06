/*
 * @Author: renlei
 * @Date: 2019-11-08 15:06:37
 * @LastEditors: abc
 * @LastEditTime: 2021-01-04 10:02:01
 * @Description 国际化配置
 */
import Vue from "vue";
import VueI18n from "vue-i18n";
// ant design vu
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import zhTW from "ant-design-vue/lib/locale-provider/zh_TW";
import zhBG from "ant-design-vue/lib/locale-provider/en_GB";
// import { handleGetLang } from "~/assets/js/public";
const en = require("@/lang/en-us.json");
const zh = require("@/lang/zh-cn.json");
const tw = require("@/lang/zh-tw.json");
const mergeZH = Object.assign({}, zhCN, zh);
const mergeEN = Object.assign({}, zhBG, en);
const mergeTW = Object.assign({}, zhTW, tw);
Vue.use(VueI18n);
export default ({ app, store }) => {
  const strLocale = store.state.locale;
  // console.log(strLocale);
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: strLocale,
    fallbackLocale: "zh",
    messages: {
      en: mergeEN,
      zh: mergeZH,
      tw: mergeTW
    },
    silentTranslationWarn: true
  });
  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`;
    }
    return `/${app.i18n.locale}/${link}`;
  };
};
