<!--
 * @Author: abc
 * @Date: 2020-12-31 11:36:48
 * @LastEditors: abc
 * @LastEditTime: 2021-01-12 15:21:28
 * @Description: header
-->
<template>
  <div class="header">
    <nuxt-link class="header-logo" :to="{ name: 'index' }">
      <img src="../assets/image/logo-text.png" alt="logo-text" />
    </nuxt-link>
    <!-- computer -->
    <div class="computer">
      <nav class="header-nav computer">
        <template v-for="item in arrLink">
          <nuxt-link
            v-if="item.key === 1"
            :key="item.key"
            :to="{ name: item.name }"
            exact
          >
            {{ $t(item.label) }}
          </nuxt-link>
          <nuxt-link v-else :key="item.key" :to="{ name: item.name }">
            {{ $t(item.label) }}
          </nuxt-link>
        </template>
      </nav>
    </div>
    <!-- mobile -->
    <div class="mobile">
      <div class="header-slide" @click="handleisAside">
        <img src="../assets/image/nav.png" alt="nav" />
      </div>
      <aside
        class="header-aside"
        :class="{ 'header-width': isAside }"
        @click="handleisAside"
      >
        <div v-show="isAside" class="header-aside-content">
          <div class="header-aside-top">
            <a-icon type="close" @click="handleisAside" />
          </div>
          <div class="header-aside-link">
            <template v-for="item in arrLink">
              <nuxt-link
                v-if="item.key === 1"
                :key="item.key"
                :to="{ name: item.name }"
                exact
              >
                {{ $t(item.label) }}
              </nuxt-link>
              <nuxt-link v-else :key="item.key" :to="{ name: item.name }">
                {{ $t(item.label) }}
              </nuxt-link>
            </template>
          </div>
        </div>
      </aside>
    </div>
    <a-dropdown style="display: none">
      <a class="ant-dropdown-link" style="font-size: 16px">
        {{ label }} <a-icon type="down" />
      </a>
      <a-menu slot="overlay">
        <a-menu-item v-for="item in objLang" :key="item.value">
          <a href="javascript:;" @click="handleLangSwitch(item)">{{
            item.label
          }}</a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAside: false,
      label: "中文简体",
      arrLink: [
        {
          key: 1,
          name: "index",
          label: "home"
        },
        {
          key: 2,
          name: "product",
          label: "product"
        },
        {
          key: 3,
          name: "solution",
          label: "solution"
        },
        {
          key: 4,
          name: "service",
          label: "service"
        },
        {
          key: 5,
          name: "about",
          label: "about"
        }
        /* {
          key: 6,
          name: "scroll",
          label: "scroll"
        } */
      ],
      objLang: [
        {
          value: "zh",
          label: "中文简体"
        },
        {
          value: "tw",
          label: "中文繁体"
        },
        {
          value: "en",
          label: "English"
        }
      ]
    };
  },
  mounted() {
    const lang = window.localStorage.getItem("lang");
    // console.log(lang);
    this.$store.commit("SET_LANG", lang);
  },
  methods: {
    handleisAside(e) {
      e.stopPropagation();
      this.isAside = !this.isAside;
    },
    handleLangSwitch(obj) {
      this.$store.commit("SET_LANG", obj.value);
      this.$i18n.locale = obj.value;
      window.localStorage.setItem("lang", obj.value);
      this.label = obj.label;
    }
  }
};
</script>
