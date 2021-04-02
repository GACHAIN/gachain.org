<!--
 * @Author: abc
 * @Date: 2020-12-31 18:26:18
 * @LastEditors: abc
 * @LastEditTime: 2021-01-26 16:56:17
 * @Description: 
-->
<template>
  <div class="solution">
    <!-- 第一部分 -->
    <div class="solution-first">
      <a-row type="flex" justify="center">
        <a-col :lg="16" :xs="22">
          <div v-if="!isMobile" class="solution-first-text">
            {{ $t("solution.text") }}
          </div>
          <div class="solution-first-btn">
            <a href="javascript:;">
              {{ $t("solution.context") }}
            </a>
          </div>
        </a-col>
      </a-row>
    </div>
    <!-- 第二部分 -->
    <div class="solution-second">
      <a-row type="flex" justify="center">
        <a-col :lg="14" :xs="22">
          <div class="title-h2__black">{{ $t("solution.business") }}</div>
          <div v-if="isMobile" style="padding-bottom: 25px">
            {{ $t("solution.text") }}
          </div>
          <a-row type="flex" justify="space-around">
            <a-col
              v-for="item in solutionData"
              :key="item.key"
              :lg="11"
              :xs="24"
            >
              <div class="solution-second-box">
                <div class="solution-second-box-img">
                  <img :src="item.src" :alt="`solution&{item.key}`" />
                </div>
                <div class="solution-second-content">
                  <div class="title-h3__black" style="text-align: left">
                    {{ $t(item.title) }}
                  </div>
                  <div v-html="$t(item.content)"></div>
                </div>
              </div>
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
  data() {
    return {
      solutionData: [
        {
          key: 1,
          src: require("../assets/image/solution-1.png"),
          title: "solution.title1",
          content: "solution.content1"
        },
        {
          key: 2,
          src: require("../assets/image/solution-2.png"),
          title: "solution.title2",
          content: "solution.content2"
        },
        {
          key: 3,
          src: require("../assets/image/solution-3.png"),
          title: "solution.title3",
          content: "solution.content3"
        },
        {
          key: 4,
          src: require("../assets/image/solution-4.png"),
          title: "solution.title4",
          content: "solution.content4"
        },
        {
          key: 5,
          src: require("../assets/image/solution-5.png"),
          title: "solution.title5",
          content: "solution.content5"
        },
        {
          key: 6,
          src: require("../assets/image/solution-6.png"),
          title: "solution.title6",
          content: "solution.content6"
        },
        {
          key: 7,
          src: require("../assets/image/solution-7.png"),
          title: "solution.title7",
          content: "solution.content7"
        },
        {
          key: 8,
          src: require("../assets/image/solution-8.png"),
          title: "solution.title8",
          content: "solution.content8"
        },
        {
          key: 9,
          src: require("../assets/image/solution-9.png"),
          title: "solution.title9",
          content: "solution.content9"
        },
        {
          key: 10,
          src: require("../assets/image/solution-10.png"),
          title: "solution.title10",
          content: "solution.content10"
        }
      ]
    };
  },
  head() {
    return {
      title:
        "区块链解决方案，区块链开发，链改方案，链改溯源，区块链生态，智能合约，区块链定制开发，区块链底层框架",
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content:
            "政务链,区块链平台系统开发,区块链技术应用领域,区块链技术开发公司,区块链平台搭建,区块链应用场景,智乾科技,智慧政府,电子政务,大数据,云计算,政务微信,政务微博,政务云,政府信息化,信息化方案,智慧政府规划,企业征信,企业风险监测,企业画像,企业评分,智慧政务系统,智慧政务解决方案,智慧政务,区块链,电子存证,共享交换,数据孤岛,gachian、区块链底层框架、区块链算法、共识、区块链共识、区块链方案、区块链解决方案、区块链应用、智能合约"
        },
        {
          hid: "description",
          name: "description",
          content:
            "智乾科技推出解决方案栏目，您可以通过浏览解决方案页面，了解更多的相关信息，智乾科技欢迎您的到来。"
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "智乾科技推出解决方案栏目，您可以通过浏览解决方案页面，了解更多的相关信息，智乾科技欢迎您的到来。"
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
