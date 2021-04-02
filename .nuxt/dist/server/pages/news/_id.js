exports.ids = [3];
exports.modules = {

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@1.2.4@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./pages/news/_id.vue?vue&type=template&id=77fb1a28&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"news"},[_c('a-row',{attrs:{"type":"flex","justify":"center"}},[_c('a-col',{attrs:{"lg":16,"xs":23}},[_c('a-row',{attrs:{"type":"flex","justify":"space-around"}},[_c('a-col',{attrs:{"lg":18,"xs":23}},[_c('div',{staticClass:"news-box"},[_c('h2',{staticClass:"home-three-title"},[_vm._v(_vm._s(_vm.objNews.title))]),_vm._v(" "),_c('div',{staticClass:"news-box-info"},[_c('span',{},[_vm._v(_vm._s(_vm.$t("about.date"))+"："+_vm._s(_vm.objNews.date)+"\n              ")]),_vm._v(" "),(_vm.objNews.source_url)?_c('a',{attrs:{"href":_vm.objNews.source_url,"target":"_blank"}},[_vm._v(_vm._s(_vm.$t("about.source"))+"："+_vm._s(_vm.objNews.source))]):_c('a',{attrs:{"href":"javascript:;"}},[_vm._v(_vm._s(_vm.$t("about.source"))+"："+_vm._s(_vm.objNews.source))])]),_vm._v(" "),_c('div',{staticClass:"news-content",domProps:{"innerHTML":_vm._s(_vm.objNews.content)}}),_vm._v(" "),(_vm.newsPre)?_c('div',{staticClass:"news-next"},[_c('div',{staticClass:"news-next-title"},[_vm._v(_vm._s(_vm.$t("about.last")))]),_vm._v(" "),_c('nuxt-link',{staticClass:"about-first-one-title about-first-one-clamp1",attrs:{"to":{ name: 'news-id', params: { id: _vm.newsPre.id } }}},[_vm._v("\n                "+_vm._s(_vm.newsPre.title)+"\n              ")])],1):_vm._e()])]),_vm._v(" "),_c('a-col',{attrs:{"lg":5,"xs":23}},[_c('div',{staticClass:"news-other"},[_c('div',{staticClass:"news-other-title"},[_vm._v(_vm._s(_vm.$t("about.other")))]),_vm._v(" "),_vm._l((_vm.arrNewsfind),function(item){return _c('nuxt-link',{key:item.id,attrs:{"to":{ name: 'news-id', params: { id: item.id } }}},[_c('div',{domProps:{"innerHTML":_vm._s(item.icon)}}),_vm._v(" "),_c('div',{staticClass:"about-first-one-title about-first-one-clamp1",attrs:{"title":item.title}},[_vm._v("\n                "+_vm._s(item.title)+"\n              ")])])})],2),_vm._v(" "),(_vm.newsNext)?_c('div',{staticClass:"news-next"},[_c('div',{staticClass:"news-next-title"},[_vm._v(_vm._s(_vm.$t("about.next")))]),_vm._v(" "),_c('nuxt-link',{staticClass:"about-first-one-title about-first-one-clamp1",attrs:{"to":{ name: 'news-id', params: { id: _vm.newsNext.id } }}},[_vm._v("\n              "+_vm._s(_vm.newsNext.title)+"\n            ")])],1):_vm._e()])],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/news/_id.vue?vue&type=template&id=77fb1a28&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@1.2.4@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./pages/news/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  validate({
    params
  }) {
    // console.log(params);
    // 必须是number类型
    return /^\d+$/.test(params.id);
  },

  props: {},

  async asyncData({
    app,
    params,
    router
  }) {
    // console.log(params);
    const newsData = await app.$axios.$get(`news/${params.id}`);
    let objNews = "";
    let id = "";

    if (newsData) {
      objNews = newsData;
      id = newsData.homeindex; // where = newsData.homeenable;
    } else {
      objNews = "";
    }

    return {
      objNews,
      id
    };
  },

  data() {
    return {
      where: true,
      params: {
        where: {},
        order: "id desc",
        page: 1,
        limit: 5
      },
      arrNewsfind: [],
      newsPre: "",
      newsNext: ""
    };
  },

  head() {
    return {
      title: ` ${this.objNews.title} - 深圳智乾 | 深圳智乾区块链`,
      meta: [{
        hid: "keywords",
        name: "keywords",
        content: this.objNews.keywords
      }, {
        hid: "description",
        name: "description",
        content: this.objNews.introduction
      }, {
        hid: "og:description",
        name: "og:description",
        content: this.objNews.introduction
      }]
    };
  },

  computed: {},
  watch: {},

  created() {
    // console.log(this.id, this.where);
    this.handleNewsfind(this.params);
    this.handlePre(this.id, this.where);
    this.handleNext(this.id, this.where);
  },

  mounted() {},

  methods: {
    async handleNewsfind(params) {
      const newsfind = await this.$axios.$post("newsfind", params); // const arrHotInterFootball = tabsInterFootball.data.hotInterFootball;

      this.arrNewsfind = [];

      if (newsfind) {
        this.arrNewsfind = newsfind.rets;
      } else {
        this.arrNewsfind = [];
      }
    },

    // 前一条
    async handlePre(id, where) {
      const newsPre = await this.$axios.$get(`newspre/${id}/${where}`);

      if (!newsPre) {
        // console.log(newsPre);
        this.newsPre = "";
      } else {
        this.newsPre = newsPre[0];
      }
    },

    // 后一条
    async handleNext(id, where) {
      const newsNext = await this.$axios.$get(`newsnext/${id}/${where}`);

      if (!newsNext) {
        this.newsNext = "";
      } else {
        // console.log(newsNext);
        this.newsNext = newsNext[0];
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/news/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var news_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(16);

// CONCATENATED MODULE: ./pages/news/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  news_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "59877c5f"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;