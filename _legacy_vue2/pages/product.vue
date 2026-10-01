<!--
 * @Author: abc
 * @Date: 2020-12-31 18:25:33
 * @LastEditors: abc
 * @LastEditTime: 2021-01-27 14:22:54
 * @Description: 
-->
<template>
  <div class="product">
    <!-- 第一部分 -->
    <div class="product-first">
      <a-row type="flex" justify="center" align="middle">
        <a-col :lg="16" :xs="22">
          <div class="title-h1__white">
            {{ $t("product.chain") }}
          </div>
          <div v-if="isMobile" class="home-back-text" style="text-align: left">
            {{ $t("product.gochain") }}
          </div>
          <div v-else class="home-back-text">
            {{ $t("product.gochain") }}
          </div>
        </a-col>
      </a-row>
    </div>
    <!-- 第二部分 -->
    <div class="product-second">
      <a-row type="flex" justify="center">
        <a-col :lg="16" :xs="23">
          <a-row type="flex" justify="space-around">
            <a-col :lg="11" :xs="23">
              <div
                class="home-three-last"
                :style="isMobile ? alignMobile : alignComputer"
              >
                <div class="home-three-last-content">
                  <div class="title-h3__black">
                    {{ $t("product.docking") }}
                  </div>
                  <div class="home-back-second-content">
                    {{ $t("product.base") }}
                  </div>
                </div>
                <img
                  src="../assets/image/p-1.png"
                  alt="three-5"
                  class="product-second-img"
                />
              </div>
            </a-col>
            <a-col :lg="11" :xs="23">
              <div
                class="home-three-last"
                :style="isMobile ? alignMobile : alignComputer"
              >
                <div class="home-three-last-content">
                  <div class="title-h3__black">
                    {{ $t("product.draw") }}
                  </div>
                  <div class="home-back-second-content">
                    {{ $t("product.govis") }}
                  </div>
                </div>
                <img
                  src="../assets/image/p-2.png"
                  alt="three-6"
                  class="product-second-img"
                />
              </div>
            </a-col>
            <a-col :lg="11" :xs="23">
              <div
                class="home-three-last"
                :style="isMobile ? alignMobile : alignComputer"
              >
                <div class="home-three-last-content">
                  <div class="title-h3__black">
                    {{ $t("product.configure") }}
                  </div>
                  <div class="home-back-second-content">
                    {{ $t("product.tps") }}
                  </div>
                </div>
                <img
                  src="../assets/image/p-3.png"
                  alt="three-5"
                  class="product-second-img"
                />
              </div>
            </a-col>
            <a-col :lg="11" :xs="23">
              <div
                class="home-three-last"
                :style="isMobile ? alignMobile : alignComputer"
              >
                <div class="home-three-last-content">
                  <div class="title-h3__black">
                    {{ $t("product.chainopen") }}
                  </div>
                  <div class="home-back-second-content">
                    {{ $t("product.cooperation") }}
                  </div>
                </div>
                <img
                  src="../assets/image/p-4.png"
                  alt="three-5"
                  class="product-second-img"
                />
              </div>
            </a-col>
          </a-row>
          <!-- 第三部分 -->
          <h2 class="home-three-title">{{ $t("product.goodness") }}</h2>
          <a-row type="flex" justify="space-around">
            <a-col :lg="7" :xs="7">
              <div class="product-third">
                <img
                  src="../assets/image/product-1.png"
                  alt="product-1"
                  class="product-third-img"
                />
                <div class="title-h3__black">
                  {{ $t("product.business") }}
                </div>
                <div class="home-back-second-content">
                  {{ $t("product.unite") }}
                </div>
              </div>
            </a-col>
            <a-col :lg="7" :xs="7">
              <div class="product-third">
                <img
                  src="../assets/image/product-2.png"
                  alt="product-2"
                  class="product-third-img"
                />
                <div class="title-h3__black">
                  {{ $t("product.data") }}
                </div>
                <div class="home-back-second-content">
                  {{ $t("product.hash") }}
                </div>
              </div>
            </a-col>
            <a-col :lg="7" :xs="7">
              <div class="product-third">
                <img
                  src="../assets/image/product-3.png"
                  alt="product-3"
                  class="product-third-img"
                />
                <div class="title-h3__black">
                  {{ $t("product.file") }}
                </div>
                <div class="home-back-second-content">
                  {{ $t("product.code") }}
                </div>
              </div>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
    <!-- 第四部分 -->
    <h2 class="home-three-title">{{ $t("product.promote") }}</h2>
    <div class="product-fourth product-fourth-white">
      <a-row type="flex" justify="center">
        <a-col :lg="16" :xs="22">
          <a-row type="flex" justify="space-around" align="middle">
            <a-col :lg="6" :xs="24">
              <img
                src="../assets/image/product-4.png"
                alt="product-4"
                class="product-fourth-img computer"
              />
              <div class="mobile">
                <a-row type="flex" justify="space-between" align="middle">
                  <a-col :xs="13">
                    <div class="title-h3__black" style="text-align: left">
                      {{ $t("product.security") }}
                    </div>
                  </a-col>
                  <a-col :xs="7">
                    <img
                      src="../assets/image/product-4.png"
                      alt="product-4"
                      class="product-fourth-img product-back"
                    />
                  </a-col>
                </a-row>
              </div>
            </a-col>
            <a-col :lg="15" :xs="24">
              <div
                v-if="!isMobile"
                class="title-h3__black mobile-line"
                style="text-align: left"
              >
                {{ $t("product.security") }}
              </div>
              <div
                class="home-back-second-content"
                v-html="$t('product.government')"
              ></div>
              <div
                class="home-back-second-content"
                v-html="$t('product.government1')"
              ></div>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
    <div class="product-fourth">
      <a-row type="flex" justify="center">
        <a-col :lg="16" :xs="22">
          <a-row type="flex" justify="space-around" align="middle">
            <a-col :lg="15" :xs="24">
              <div
                v-if="isMobile"
                class="title-h3__black mobile-title-h3__black"
              >
                <span class="mobile-line">
                  {{ $t("product.core") }}
                </span>
              </div>
              <div
                v-else
                class="title-h3__black mobile-line"
                style="text-align: left"
              >
                {{ $t("product.core") }}
              </div>
              <div
                class="home-back-second-content"
                v-html="$t('product.time')"
              ></div>
            </a-col>
            <a-col :lg="6" :xs="22">
              <img
                src="../assets/image/product-5.png"
                alt="product-5"
                class="product-fourth-img"
              />
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
    <div class="product-fourth product-fourth-white">
      <a-row type="flex" justify="center">
        <a-col :lg="16" :xs="22">
          <a-row type="flex" justify="space-around" align="middle">
            <a-col :lg="6" :xs="24">
              <img
                src="../assets/image/product-6.png"
                alt="product-6"
                class="product-fourth-img computer"
              />
              <div class="mobile">
                <a-row type="flex" justify="space-between" align="middle">
                  <a-col :xs="13">
                    <div class="title-h3__black" style="text-align: left">
                      {{ $t("product.credible") }}
                    </div>
                  </a-col>
                  <a-col :xs="7">
                    <img
                      src="../assets/image/product-6.png"
                      alt="product-6"
                      class="product-fourth-img"
                    />
                  </a-col>
                </a-row>
              </div>
            </a-col>
            <a-col :lg="15" :xs="24">
              <div
                class="title-h3__black computer mobile-line"
                style="text-align: left"
              >
                {{ $t("product.credible") }}
              </div>
              <div
                class="home-back-second-content"
                v-html="$t('product.department')"
              ></div>
              <div
                class="home-back-second-content"
                v-html="$t('product.department1')"
              ></div>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
    <!-- 第三部分 -->
    <div class="product-third">
      <a-row type="flex" justify="center">
        <a-col :lg="16" :xs="22">
          <div
            class="title-h3__black title-h__center"
            :style="isMobile ? paddMob : paddCom"
          >
            <img src="../assets/image/third-4.png" alt="third-4" />
            <span style="padding: 0 10px">{{ $t("home.nan") }}</span>
            <img src="../assets/image/third-5.png" alt="third-4" />
          </div>
          <p class="home-back-second-content" v-html="$t('home.sha')"></p>
          <p class="home-back-second-content" v-html="$t('home.sha1')"></p>
          <!-- 走马灯效果 -->
          <div v-if="isMobile" class="home-carousel">
            <swiper-carousel :source="pictures"></swiper-carousel>
          </div>
          <div v-else class="home-carousel">
            <public-carousel :source="pictures"></public-carousel>
          </div>
        </a-col>
      </a-row>
    </div>
    <!-- 第五部分 -->
    <a-row type="flex" justify="center">
      <a-col :lg="16" :xs="22">
        <div class="title-h2__black">{{ $t("product.share") }}</div>
        <div
          class="home-back-second-content"
          v-html="$t('product.change')"
        ></div>
        <div
          class="home-back-second-content"
          v-html="$t('product.change1')"
        ></div>
        <div
          class="home-back-second-content"
          :style="isMobile ? paddingMobile1 : paddingComputer1"
          v-html="$t('product.change2')"
        ></div>
        <div
          class="product-img product-fourth-white computer"
          :style="isMobile ? paddingMobile : paddingComputer"
        >
          <img :src="backComputer" alt="product-7" />
        </div>
      </a-col>
    </a-row>
    <div class="mobile">
      <div class="product-img">
        <img :src="backMobile" alt="product-7-1" />
      </div>
    </div>
    <!-- 第六部分 -->
    <a-row type="flex" justify="space-around">
      <a-col :lg="16" :xs="22">
        <div class="title-h2__black">{{ $t("product.info") }}</div>
        <a-row type="flex" justify="space-between">
          <a-col :lg="5" :xs="11">
            <div class="product-third">
              <img
                src="../assets/image/product-9.png"
                alt="product-1"
                class="product-third-img"
              />
              <h4 class="home-three-title-samll">
                {{ $t("product.one") }}
              </h4>
              <div class="product-third-text">{{ $t("product.build") }}</div>
            </div>
          </a-col>
          <a-col :lg="5" :xs="11">
            <div class="product-third">
              <img
                src="../assets/image/product-10.png"
                alt="product-2"
                class="product-third-img"
              />
              <h4 class="home-three-title-samll">
                {{ $t("product.n") }}
              </h4>
              <div>{{ $t("product.fen") }}</div>
            </div>
          </a-col>
          <a-col :lg="5" :xs="11">
            <div class="product-third">
              <img
                src="../assets/image/product-11.png"
                alt="product-3"
                class="product-third-img"
              />
              <h4 class="home-three-title-samll">
                {{ $t("product.five") }}
              </h4>
              <div>{{ $t("product.catalog") }}</div>
            </div>
          </a-col>
          <a-col :lg="5" :xs="11">
            <div class="product-third">
              <img
                src="../assets/image/product-12.png"
                alt="product-12"
                class="product-third-img"
              />
              <h4 class="home-three-title-samll">
                {{ $t("product.two") }}
              </h4>
              <div>{{ $t("product.system") }}</div>
            </div>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
    <div class="product-sixth">
      <a-row type="flex" justify="space-around">
        <a-col :lg="16" :xs="24">
          <div
            class="product-fourth-white"
            :style="isMobile ? paddingMobile : paddingComputer"
          >
            <div
              class="title-h3__black title-h__center"
              style="padding-bottom: 25px"
            >
              <img
                src="../assets/image/third-4.png"
                alt="third-4"
                class="third-4"
              />
              <span style="padding: 0 10px">{{ $t("product.mou") }}</span>
              <img
                src="../assets/image/third-5.png"
                alt="third-4"
                class="third-4"
              />
            </div>
            <div class="product-sixth-img">
              <img src="../assets/image/product-8.png" alt="product-8" />
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="product-seventh">
      <!-- 第七部分 -->
      <a-row type="flex" justify="center">
        <a-col :lg="14" :xs="22">
          <div class="title-h2__black">{{ $t("product.develop") }}</div>
          <div class="product-text" v-html="$t('product.we')"></div>
          <div class="product-text" v-html="$t('product.we1')"></div>
          <div
            class="product-img"
            style="text-align: center; margin-bottom: 30px"
          >
            <img
              src="../assets/image/product-13.png"
              alt="product-13"
              :style="isMobile ? widthMobile : widthComputer"
            />
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
const backMobile = require("../assets/image/product-7-1.png");
const backComputer = require("../assets/image/product-7.png");
export default {
  props: {},
  data() {
    return {
      backMobile,
      backComputer,
      pictures: [
        { src: require("../assets/image/third-1.png") },
        { src: require("../assets/image/third-2.png") },
        { src: require("../assets/image/third-3.png") }
      ],
      paddMob: {
        paddingBottom: "20px"
      },
      paddCom: {
        paddingBottom: "40px"
      },
      paddingMobile: { padding: "0 20px 20px 20px" },
      paddingComputer: { padding: "20px 50px 35px 35px" },
      paddingMobile1: { paddingBottom: "0" },
      paddingComputer1: { paddingBottom: "60px" },
      widthMobile: { width: "100%" },
      widthComputer: { width: "80%" },
      alignMobile: {
        alignItems: "center",
        paddingBottom: "20px",
        height: "auto"
      },
      alignComputer: {
        alignItems: "flex-start",
        paddingBottom: 0,
        height: "100%"
      }
    };
  },
  head() {
    return {
      title: "产品介绍，区块链开发，链改方案",
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content:
            "区块链平台系统开发,区块链技术应用领域,区块链技术开发公司,区块链平台搭建,区块链应用场景,智乾科技,智慧政府,电子政务,大数据,云计算,政务微信,政务微博,政务云,政府信息化,信息化方案,智慧政府规划,企业征信,企业风险监测,企业画像,政务链,企业评分,智慧政务系统,智慧政务解决方案,智慧政务,区块链,电子存证,共享交换,数据孤岛,gachian"
        },
        {
          hid: "description",
          name: "description",
          content:
            "政务链在技术上是一个嵌入式平台，同时也是一个基于区块链的操作系统平台，具有创建和执行智能合约和智能法律的机制。 因此，该平台也可以成功应用于各种金融、供应链、智慧医疗、智慧交通、传统实体商业和文化版权保护等其他社会应用，如政府服务中心、公安部门、交通管理局、证券交易所、商业银行、保险和信贷机构、各个领域的会计和管理系统、医药保健、房地产买卖登记、商业供应链等， 以及对社会提供BaaS服务"
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "政务链在技术上是一个嵌入式平台，同时也是一个基于区块链的操作系统平台，具有创建和执行智能合约和智能法律的机制。 因此，该平台也可以成功应用于各种金融、供应链、智慧医疗、智慧交通、传统实体商业和文化版权保护等其他社会应用，如政府服务中心、公安部门、交通管理局、证券交易所、商业银行、保险和信贷机构、各个领域的会计和管理系统、医药保健、房地产买卖登记、商业供应链等， 以及对社会提供BaaS服务"
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    console.log(this.isMobile);
  },
  methods: {}
};
</script>
