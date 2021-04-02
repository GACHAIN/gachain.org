<!--
 * @Author: abc
 * @Date: 2021-01-12 15:27:42
 * @LastEditors: abc
 * @LastEditTime: 2021-01-27 18:55:10
 * @Description: 
-->
<template>
  <a-row type="flex" :justify="isMobile ? 'center' : 'space-around'">
    <a-col
      v-for="item in arrNews"
      :key="item.id"
      :lg="7"
      :xs="23"
      style="margin-bottom: 2em"
    >
      <nuxt-link
        :to="{ name: 'news-id', params: { id: item.id } }"
        class="home-fourth-box"
      >
        <div v-html="item.icon"></div>
        <h4
          class="about-first-one-title"
          :title="item.title"
          style="padding: 0 20px"
        >
          {{ item.title }}
        </h4>
        <div class="about-first-one-content" style="padding: 0 20px">
          {{ item.introduction }}
        </div>
        <div class="about-first-one-date">
          <span>{{ item.date }}</span>
          <a-icon type="right" />
        </div>
      </nuxt-link>
    </a-col>
  </a-row>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      // 重点新闻列表参数
      obj: {
        where: { homeenable: 1 },
        order: "homeindex desc",
        page: 1,
        limit: 3
      },
      arrNews: []
    };
  },
  computed: {},
  watch: {},
  created() {
    this.handleNewList(this.obj);
  },
  mounted() {},
  methods: {
    async handleNewList(obj) {
      const arrNews = await this.$axios.post("/newsfind", obj);
      console.log(JSON.stringify(arrNews));
      if (arrNews.code === 0) {
        this.arrNews = arrNews.data.rets;
      } else {
        this.arrNews = [];
      }
    }
  }
};
</script>
