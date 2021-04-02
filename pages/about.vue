<!--
 * @Author: abc
 * @Date: 2020-12-31 18:27:25
 * @LastEditors: abc
 * @LastEditTime: 2021-01-26 17:39:23
 * @Description: 关于智乾
-->
<template>
  <div class="about">
    <!-- 第一部分 -->
    <div class="about-first computer">
      <a-row type="flex" justify="center">
        <a-col :lg="16" :xs="22">
          <!-- 第一部分 第一段 -->
          <div class="title-h1__white">
            {{ $t("about.title") }}
          </div>
          <div class="home-back-text" v-html="$t('about.text')"></div>
          <!-- 第一部分 第二段 -->
          <div
            class="about-first-one product-fourth-white"
            style="margin-top: 30px"
          >
            <h4 class="service-title">
              {{ $t("about.enterprise") }}
            </h4>
            <a-row type="flex" justify="space-around" align="middle">
              <a-col :lg="11" :xs="22"
                ><img src="../assets/image/about-2.png" alt="about-2"
              /></a-col>
              <a-col :lg="11" :xs="22">
                <div class="about-first-text">{{ $t("about.team1") }}</div>
                <div class="about-first-text">{{ $t("about.team2") }}</div>
                <div class="about-first-text">{{ $t("about.team3") }}</div>
              </a-col>
            </a-row>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="mobile">
      <div class="mobile-about-first">
        <a-row type="flex" justify="center">
          <a-col :xs="22">
            <!-- 第一部分 第一段 -->
            <div class="title-h1__white">
              {{ $t("about.title") }}
            </div>
            <div class="home-back-text" v-html="$t('about.text')"></div>
          </a-col>
        </a-row>
      </div>
      <div class="mobile-about-first-box">
        <div class="title-h2__black">
          {{ $t("about.enterprise") }}
        </div>
        <div class="about-first-text">{{ $t("about.team1") }}</div>
        <div class="about-first-text">{{ $t("about.team2") }}</div>
        <div class="about-first-text">{{ $t("about.team3") }}</div>
        <img
          src="../assets/image/about-2.png"
          alt="about-2"
          style="margin-top: 30px"
        />
      </div>
    </div>
    <!-- 第一部分 第三段 -->
    <a-row type="flex" justify="space-around">
      <a-col :lg="16" :xs="22">
        <div class="about-first-one">
          <h2 class="home-three-title">{{ $t("home.new") }}</h2>
          <a-row type="flex" justify="space-around">
            <a-col
              :lg="8"
              :xs="22"
              class="product-fourth-white"
              style="margin-bottom: 15px"
            >
              <nuxt-link
                v-for="item in arrNewsList"
                :key="item.id"
                :to="{ name: 'news-id', params: { id: item.id } }"
              >
                <div v-html="item.icon"></div>
                <h4
                  class="about-first-one-title"
                  style="padding: 0 20px"
                  :title="item.title"
                >
                  {{ item.title }}
                </h4>
                <div class="about-first-one-content" style="padding: 0 20px">
                  {{ item.introduction }}
                </div>
                <div class="about-first-one-date">
                  <span> {{ item.date }} </span>
                  <a-icon type="right" />
                </div>
              </nuxt-link>
            </a-col>
            <a-col :lg="12" :xs="22">
              <nuxt-link
                v-for="item in arrNewsfind"
                :key="item.id"
                :to="{ name: 'news-id', params: { id: item.id } }"
                class="about-first-one-right product-fourth-white"
              >
                <div v-html="item.icon"></div>
                <!--  <img src="../assets/image/about-2.png" alt="about-2" /> -->
                <div class="about-first-one-right-box">
                  <h4
                    class="about-first-one-title about-first-one-clamp1"
                    :title="item.title"
                  >
                    {{ item.title }}
                  </h4>
                  <div class="about-first-one-content about-first-one-clamp2">
                    {{ item.introduction }}
                  </div>
                </div>
              </nuxt-link>
              <div class="about-first-one-pagination">
                <client-only>
                  <a-pagination
                    :default-current="params.page"
                    :total="params.total"
                    :page-size="params.limit"
                    @change="handleNewList"
                  />
                </client-only>
              </div>
            </a-col>
          </a-row>
        </div>
      </a-col>
    </a-row>
    <!-- 第二部分 -->
    <div class="home-fifth" style="overflow-x: auto">
      <h2 class="home-three-title">{{ $t("home.zhi") }}</h2>
      <div class="about-three-appear">{{ $t("home.one") }}</div>
      <div v-if="isMobile" class="mobile">
        <public-time></public-time>
      </div>
      <div v-else class="computer">
        <!-- 时间轴 -->
        <public-time></public-time>
      </div>
    </div>
    <!-- 第三部分 -->
    <div class="about-second">
      <a-row type="flex" justify="center">
        <a-col :lg="16" :xs="22">
          <div class="title-h2__white">{{ $t("about.block") }}</div>
          <div class="about-second-box">
            <div class="about-second-box-item">
              <img src="../assets/image/about-4.png" alt="about-4" />
              <div class="about-second-box-item-text">
                {{ $t("about.twenty") }}
              </div>
              <div class="about-second-box-item-content">
                {{ $t("about.patent") }}
              </div>
            </div>
            <div class="about-second-box-item-border"></div>
            <div class="about-second-box-item">
              <img src="../assets/image/about-5.png" alt="about-4" />
              <div class="about-second-box-item-text">
                {{ $t("about.twenty") }}
              </div>
              <div class="about-second-box-item-content">
                {{ $t("about.right") }}
              </div>
            </div>
            <div class="about-second-box-item-border"></div>
            <div class="about-second-box-item">
              <img src="../assets/image/about-6.png" alt="about-4" />
              <div class="about-second-box-item-text">
                {{ $t("about.seven") }}
              </div>
              <div class="about-second-box-item-content">
                {{ $t("about.sed") }}
              </div>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
    <!-- 第四部分 -->
    <div class="about-fourth">
      <h2 class="home-three-title">{{ $t("about.honor") }}</h2>
      <a-row type="flex" justify="center">
        <a-col :lg="16" :xs="22">
          <swiper-carousel :source="pictures"></swiper-carousel>
        </a-col>
      </a-row>
    </div>
    <!-- 第五部分 -->
    <div class="about-sixth">
      <h2 class="home-three-title">{{ $t("about.soft") }}</h2>
      <a-row type="flex" justify="center">
        <a-col :lg="16" :xs="23">
          <a-row type="flex" justify="space-around" style="margin-bottom: 40px">
            <a-col v-if="!isMobile" :lg="10" :xs="23">
              <img
                src="../assets/image/3800.png"
                alt="3800"
                style="width: 100%"
              />
            </a-col>
            <a-col :lg="12" :xs="23">
              <div class="about-buttom">
                <img
                  src="../assets/image/buttom-1.png"
                  alt="buttom-1"
                  class="about-buttom-first"
                />
                <span class="title-h3__black">{{ $t("about.chain") }}</span>
                <span class="about-buttom-right">{{ $t("about.part") }}</span>
              </div>
              <div
                v-for="(item, index) in arrButtom"
                :key="item.key"
                class="about-buttom-box"
                :style="isMobile ? styleMobile : styleComputer"
              >
                <img
                  :src="item.src"
                  alt="buttom-2"
                  class="about-buttom-second"
                />
                <span v-if="index === 0">{{ $t(`${item.title}.way`) }}</span>
                <span v-else>{{ $t(`${item.title}.way${index}`) }}</span>
              </div>
            </a-col>
            <a-col v-if="isMobile" :lg="10" :xs="23">
              <img
                src="../assets/image/3800.png"
                alt="3800"
                style="width: 100%"
              />
            </a-col>
          </a-row>
          <a-row type="flex" justify="space-around">
            <a-col :lg="12" :xs="23">
              <div class="about-buttom">
                <img
                  src="../assets/image/buttom-1.png"
                  alt="buttom-1"
                  class="about-buttom-first"
                />
                <span class="title-h3__black">{{ $t("about.ten") }}</span>
                <span class="about-buttom-right"> {{ $t("about.zhu") }}</span>
              </div>
              <div
                v-for="(item, index) in arrButtom"
                :key="item.key"
                class="about-buttom-box"
                :style="isMobile ? styleMobile : styleComputer"
              >
                <img
                  :src="item.src"
                  alt="buttom-2"
                  class="about-buttom-second"
                />
                <span v-if="index === 0">{{ $t(`${item.title}.system`) }}</span>
                <span v-else>{{ $t(`${item.title}.system${index}`) }}</span>
              </div>
            </a-col>
            <a-col :lg="10" :xs="23">
              <img
                src="../assets/image/buttom-3.png"
                alt="3800"
                style="width: 100%"
              />
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  /*  async asyncData({ app }) {
    const params = {
      where: {},
      order: "id desc",
      page: 1,
      limit: 3
    };
    const newsfind = await app.$axios.$post("newsfind", { data: params });
    console.log(JSON.stringify(newsfind));
    let arrNewsfind = [];
    if (newsfind.code === 0) {
      arrNewsfind = newsfind.data.rets;
    } else {
      arrNewsfind = [];
    }
    return {
      arrNewsfind
    };
  }, */
  data() {
    return {
      pictures: [
        { src: require("../assets/image/team-1.png") },
        { src: require("../assets/image/team-2.png") },
        { src: require("../assets/image/team-3.png") },
        { src: require("../assets/image/team-4.png") },
        { src: require("../assets/image/team-5.png") },
        { src: require("../assets/image/team-6.png") },
        { src: require("../assets/image/team-7.png") }
      ],
      styleComputer: {
        marginLeft: "40px",
        fontSize: "13px"
      },
      styleMobile: {
        marginLeft: "0",
        fontSize: "13px"
      },
      // 普通新闻列表参数
      params: {
        where: {},
        order: "homeindex desc",
        page: 1,
        limit: 3
      },
      obj: {
        where: { homeenable: 1 },
        order: "homeindex desc",
        page: 1,
        limit: 1
      },
      arrNewsfind: [],
      arrNewsList: [],
      arrButtom: [
        {
          src: require("../assets/image/buttom-2.png"),
          title: "about",
          key: 1
        },
        {
          src: require("../assets/image/buttom-2.png"),
          title: "about",
          key: 2
        },
        {
          src: require("../assets/image/buttom-2.png"),
          title: "about",
          key: 3
        },
        {
          src: require("../assets/image/buttom-2.png"),
          title: "about",
          key: 4
        },
        {
          src: require("../assets/image/buttom-2.png"),
          title: "about",
          key: 5
        },
        {
          src: require("../assets/image/buttom-2.png"),
          title: "about",
          key: 6
        },
        {
          src: require("../assets/image/buttom-2.png"),
          title: "about",
          key: 7
        },
        {
          src: require("../assets/image/buttom-2.png"),
          title: "about",
          key: 8
        }
      ]
    };
  },
  head() {
    return {
      title:
        "关于智乾，智乾的新闻动态，区块链技术发展，区块链行业内容，智乾公司活动",
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content:
            "政务链,智乾科技,智乾区块链,gachain,链改,链改方案,电子政务,智慧城市,智慧政务,区块链生态,gachian"
        },
        {
          hid: "description",
          name: "description",
          content:
            "深圳智乾区块链科技有限公司成立于2017年9月，是深圳链合科技投资有限公司的全资子公司。公司位于深圳市南山区前海。专业从事区块链研究、开发和应用落地的新兴公司。"
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "深圳智乾区块链科技有限公司成立于2017年9月，是深圳链合科技投资有限公司的全资子公司。公司位于深圳市南山区前海。专业从事区块链研究、开发和应用落地的新兴公司。"
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {
    const common = this.params;
    this.handleNewsfind(common);
    this.handleNewsfind1(this.obj);
  },
  mounted() {},
  methods: {
    async handleNewsfind(params) {
      const newsfind = await this.$axios.$post("newsfind", params);
      // console.log(JSON.stringify(newsfind));
      this.arrNewsfind = [];
      if (newsfind) {
        if (params.limit === 1) {
          this.arrNewsList = newsfind.rets;
        } else {
          this.arrNewsfind = newsfind.rets;
          this.params.total = newsfind.total;
          this.params.page = newsfind.page;
        }
      } else {
        this.arrNewsfind = [];
        this.arrNewsList = [];
        this.params.total = 0;
      }
    },
    async handleNewsfind1(params) {
      const newsfind = await this.$axios.$post("newsfind", params);
      // console.log(JSON.stringify(newsfind));
      if (newsfind) {
        this.arrNewsList = newsfind.rets;
      } else {
        this.arrNewsList = [];
      }
    },
    handleNewList(page) {
      this.params.page = page;
      this.handleNewsfind(this.params);
      // console.log(page);
    }
  }
};
</script>
