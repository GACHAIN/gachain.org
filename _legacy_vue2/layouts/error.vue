<!--
 * @Author: abc
 * @Date: 2021-01-08 10:04:00
 * @LastEditors: abc
 * @LastEditTime: 2021-01-08 10:13:22
 * @Description: 加载失败的页面
-->
<template>
  <div>
    <h2 v-if="error.statusCode == 404">404 - 页面不存在</h2>
    <h2 v-else>500 - 服务器错误</h2>
    <ul>
      <li><nuxt-link to="/">HOME</nuxt-link></li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
