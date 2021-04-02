<!--
 * @Author: abc
 * @Date: 2021-01-08 09:47:47
 * @LastEditors: abc
 * @LastEditTime: 2021-01-27 11:04:59
 * @Description: 新闻详情
-->
<template>
  <div class="news">
    <a-row type="flex" justify="center">
      <a-col :lg="16" :xs="23">
        <a-row type="flex" justify="space-around">
          <a-col :lg="18" :xs="23">
            <div class="news-box">
              <h2 class="home-three-title">{{ objNews.title }}</h2>
              <div class="news-box-info">
                <span class=""
                  >{{ $t("about.date") }}：{{ objNews.date }}
                </span>
                <a
                  v-if="objNews.source_url"
                  :href="objNews.source_url"
                  target="_blank"
                  >{{ $t("about.source") }}：{{ objNews.source }}</a
                >
                <a v-else href="javascript:;"
                  >{{ $t("about.source") }}：{{ objNews.source }}</a
                >
              </div>
              <div class="news-content" v-html="objNews.content"></div>
              <div v-if="newsPre" class="news-next">
                <div class="news-next-title">{{ $t("about.last") }}</div>
                <nuxt-link
                  :to="{ name: 'news-id', params: { id: newsPre.id } }"
                  class="about-first-one-title about-first-one-clamp1"
                >
                  {{ newsPre.title }}
                </nuxt-link>
              </div>
            </div>
          </a-col>
          <a-col :lg="5" :xs="23">
            <div class="news-other">
              <div class="news-other-title">{{ $t("about.other") }}</div>
              <nuxt-link
                v-for="item in arrNewsfind"
                :key="item.id"
                :to="{ name: 'news-id', params: { id: item.id } }"
              >
                <div v-html="item.icon"></div>
                <div
                  class="about-first-one-title about-first-one-clamp1"
                  :title="item.title"
                >
                  {{ item.title }}
                </div>
              </nuxt-link>
            </div>
            <div v-if="newsNext" class="news-next">
              <div class="news-next-title">{{ $t("about.next") }}</div>
              <nuxt-link
                :to="{ name: 'news-id', params: { id: newsNext.id } }"
                class="about-first-one-title about-first-one-clamp1"
              >
                {{ newsNext.title }}
              </nuxt-link>
            </div>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  validate({ params }) {
    // console.log(params);
    // 必须是number类型
    return /^\d+$/.test(params.id);
  },
  props: {},
  async asyncData({ app, params, router }) {
    // console.log(params);
    const newsData = await app.$axios.$get(`news/${params.id}`);
    console.log(JSON.stringify(newsData));
    let objNews = "";
    let id = "";
    if (newsData) {
      objNews = newsData;
      id = newsData.homeindex;
      // where = newsData.homeenable;
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
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content: this.objNews.keywords
        },
        {
          hid: "description",
          name: "description",
          content: this.objNews.introduction
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.objNews.introduction
        }
      ]
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
      const newsfind = await this.$axios.$post("newsfind", params);
      // const arrHotInterFootball = tabsInterFootball.data.hotInterFootball;
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
        console.log(newsPre);
        this.newsPre = newsPre[0];
      }
    },
    // 后一条
    async handleNext(id, where) {
      const newsNext = await this.$axios.$get(`newsnext/${id}/${where}`);
      if (!newsNext) {
        console.log(newsNext);
        this.newsNext = "";
      } else {
        // console.log(newsNext);
        this.newsNext = newsNext[0];
      }
    }
  }
};
</script>
