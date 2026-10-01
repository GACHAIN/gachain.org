<!--
 * @Author: abc
 * @Date: 2020-09-15 16:29:27
 * @LastEditors: abc
 * @LastEditTime: 2021-02-03 10:46:44
 * @Description: basic layout
-->
<template>
  <vue-scroll
    id="global"
    ref="scroll"
    class="global"
    :ops="ops"
    style="height: 100%"
  >
    <a-config-provider :locale="locale">
      <a-layout>
        <!--  header -->
        <a-layout-header
          ref="headerTop"
          :class="{
            'global-fixed': isFixed,
            slideInDown: isFixed,
            slideInUp: isInUp
          }"
          class="animated"
        >
          <a-row type="flex" justify="center">
            <a-col :lg="16" :xs="24">
              <public-header></public-header>
            </a-col>
          </a-row>
        </a-layout-header>
        <!-- content -->
        <a-layout-content>
          <keep-alive> <Nuxt /></keep-alive>
        </a-layout-content>
        <!-- footer -->
        <a-layout-footer>
          <public-footer></public-footer>
        </a-layout-footer>
      </a-layout>
    </a-config-provider>
    <!-- back top -->
    <a-back-top :target="handleBackTop" :visibility-height="visibilityHeight" />
  </vue-scroll>
</template>
<script>
if (process.client) {
  // eslint-disable-next-line no-var
  var { WOW } = require("wowjs");
}
export default {
  data() {
    return {
      locale: null,
      domGlobal: "",
      domHeaderTop: "",
      visibilityHeight: 10,
      isFixed: false,
      back: false,
      isInUp: false,
      ops: {
        vuescroll: {},
        scrollPanel: {
          initialScrollY: false,
          initialScrollX: false,
          scrollingX: false,
          scrollingY: true,
          speed: 300,
          easing: "easeInQuad",
          verticalNativeBarPos: "right",
          maxHeight: undefined,
          maxWidth: undefined
        },
        rail: {
          // background: "red",
          opacity: 0,
          size: "6px",
          specifyBorderRadius: false,
          gutterOfEnds: null,
          gutterOfSide: "2px",
          keepShow: false
        },
        bar: {
          opacity: 1,
          background: "gray"
        }
      }
    };
  },
  computed: {
    lang() {
      // console.log(this.$store.state.locale);
      return this.$store.state.locale;
    }
  },
  watch: {
    $route(newVal, oldVal) {
      const { scroll } = newVal.query;
      console.log(scroll);
      if (scroll) {
        console.log(newVal);
        this.$refs.scroll.scrollTo(
          {
            y: scroll
          },
          500,
          "easeInQuad"
        );
      }
    },
    lang: {
      handler(val, oldVal) {
        this.locale = this.$i18n.messages[val];
      },
      immediate: true
    }
  },
  created() {
    // const strLang = handleGetLang();
    // console.log(this.$i18n.messages[strLang]);
    // console.log(strLang);
    // this.locale = this.$i18n.messages[strLang];
  },
  mounted() {
    // this.$store.commit("handleDomGlobal", this.domGlobal);
    // eslint-disable-next-line nuxt/no-env-in-hooks
    this.$nextTick(() => {
      this.domGlobal = document.getElementById("global").firstChild;
      this.domHeaderTop = this.$refs.headerTop.$el;
      this.domGlobal.addEventListener("scroll", this.handleScroll);
      const wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        scrollContainer: ".__panel",
        offset: 0,
        mobile: true,
        live: false
      });
      // console.log(wow);
      wow.init();
    });
  },
  methods: {
    //
    handleBackTop() {
      return this.domGlobal;
    },
    //
    handleScroll() {
      const scrollTop = this.domGlobal.scrollTop;
      // console.log(this.domGlobal);
      if (scrollTop > 300) {
        this.back = true;
      } else {
        this.back = false;
      }
      const topHeight = this.domHeaderTop.offsetTop;
      this.isFixed = scrollTop > topHeight;
      this.isInUp = scrollTop === topHeight;
    },
    handleChange(val, oldVal) {
      this.locale = this.$i18n.messages[val];
    }
  }
};
</script>
