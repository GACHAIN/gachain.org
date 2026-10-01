/*
 * @Author: renlei
 * @LastEditors: abc
 * @Description: vuex
 * @Date: 2019-04-11 09:26:40
 * @LastEditTime: 2021-01-04 10:33:20
 */

export const state = () => ({
  locales: ["zh", "en", "tw"],
  locale: "zh"
});

export const mutations = {
  SET_LANG(state, locale) {
    //  console.log(locale);
    if (state.locales.includes(locale)) {
      state.locale = locale;
    }
  }
};
//      store/index.js  ）。
export const actions = {
  // nuxtServerIni Nuxt.j
  async nuxtServerInit({ dispatch, commit }, { req }) {}
};
export const getters = {
  //
  handdleLang(state) {
    const { locale } = state;
    // console.log(authUser);
    return locale;
  }
};
