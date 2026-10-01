<!--
 * @Author: abc
 * @Date: 2020-12-31 18:26:49
 * @LastEditors: abc
 * @LastEditTime: 2021-02-03 10:37:50
 * @Description: 
-->
<template>
  <div class="service">
    <!-- 第一部分 -->
    <div class="service-first">
      <a-row type="flex" justify="center">
        <a-col :lg="16" :xs="22">
          <a-row type="flex" :justify="isMobile ? 'center' : 'space-between'">
            <a-col :lg="10" :xs="22" :style="isMobile ? textCenter : ''">
              <div class="title-h1__white">
                {{ $t("service.title") }}
              </div>
              <div class="home-back-text" style="text-align: left">
                {{ $t("service.text") }}
              </div>
              <div class="computer">
                <div class="service-btn">
                  <a href="https://gachain.readthedocs.io" target="_blank">{{
                    $t("service.manual")
                  }}</a>
                  <a href="https://github.com/gachain" target="_blank">{{
                    $t("service.forum")
                  }}</a>
                </div>
              </div>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
    <div class="mobile mobile-first">
      <div class="service-btn service-btn1">
        <a href="https://gachain.readthedocs.io" target="_blank">{{
          $t("service.manual")
        }}</a>
        <a href="https://github.com/gachain" target="_blank">{{
          $t("service.forum")
        }}</a>
      </div>
    </div>
    <!-- 第二部分 -->
    <div class="service-second">
      <a-row type="flex" justify="center">
        <a-col :lg="16" :xs="22">
          <div class="title-h2__black">{{ $t("service.trait") }}</div>
          <div
            class="product-text mobile-product-text"
            :style="isMobile ? textAlign : textCenter"
            style="margin-bottom: 25px"
          >
            {{ $t("service.gachain") }}
          </div>
          <a-row type="flex" justify="space-between">
            <a-col :lg="16" :xs="24" :style="isMobile ? borderLeft : ''">
              <div class="service-second-left">
                <div class="title-h2__black">{{ $t("service.node") }}</div>
                <a-row type="flex" justify="space-around">
                  <a-col :lg="7" :xs="7">
                    <div class="product-third">
                      <img
                        src="../assets/image/service-1.png"
                        alt="product-1"
                        class="product-third-img"
                      />
                      <div class="title-h3__black">
                        {{ $t("service.super") }}
                      </div>
                      <div class="product-text">
                        {{ $t("service.save") }}
                      </div>
                    </div>
                  </a-col>
                  <a-col :lg="7" :xs="7">
                    <div class="product-third">
                      <img
                        src="../assets/image/service-2.png"
                        alt="product-1"
                        class="product-third-img"
                      />
                      <div class="title-h3__black">
                        {{ $t("service.common") }}
                      </div>
                      <div
                        class="product-text"
                        v-html="$t('service.source')"
                      ></div>
                      <div
                        class="product-text"
                        v-html="$t('service.source1')"
                      ></div>
                    </div>
                  </a-col>
                  <a-col :lg="7" :xs="7">
                    <div class="product-third">
                      <img
                        src="../assets/image/service-3.png"
                        alt="product-1"
                        class="product-third-img"
                      />
                      <div class="title-h3__black">
                        {{ $t("service.child") }}
                      </div>
                      <div
                        class="product-text"
                        v-html="$t('service.first')"
                      ></div>
                      <div
                        class="product-text"
                        v-html="$t('service.first1')"
                      ></div>
                    </div>
                  </a-col>
                </a-row>
              </div>
              <div class="service-second-left">
                <h4 class="service-title">{{ $t("service.merger") }}</h4>
                <a-row type="flex" justify="space-around">
                  <a-col :lg="7" :xs="7">
                    <div class="product-third">
                      <img
                        src="../assets/image/service-4.png"
                        alt="product-4"
                        class="product-third-img"
                      />
                      <div class="title-h3__black">
                        {{ $t("service.poa") }}
                      </div>
                      <div
                        class="product-text"
                        v-html="$t('service.move')"
                      ></div>
                      <div
                        class="product-text"
                        v-html="$t('service.move1')"
                      ></div>
                    </div>
                  </a-col>
                  <a-col :lg="7" :xs="7">
                    <div class="product-third">
                      <img
                        src="../assets/image/service-5.png"
                        alt="product-5"
                        class="product-third-img"
                      />
                      <div class="title-h3__black">
                        {{ $t("service.poc") }}
                      </div>
                      <div
                        class="product-text"
                        v-html="$t('service.careful')"
                      ></div>
                      <div
                        class="product-text"
                        v-html="$t('service.careful1')"
                      ></div>
                    </div>
                  </a-col>
                  <a-col :lg="7" :xs="7">
                    <div class="product-third">
                      <img
                        src="../assets/image/service-6.png"
                        alt="product-6"
                        class="product-third-img"
                      />
                      <div class="title-h3__black">
                        {{ $t("service.pos") }}
                      </div>
                      <div class="product-text">
                        {{ $t("service.on") }}
                      </div>
                    </div>
                  </a-col>
                </a-row>
              </div>
            </a-col>
            <a-col v-if="!isMobile" :lg="7" :xs="24">
              <div class="service-second-right">
                <div class="product-third">
                  <img
                    src="../assets/image/service-7.png"
                    alt="product-6"
                    class="product-third-img"
                  />
                  <div class="title-h3__black">
                    {{ $t("service.high") }}
                  </div>
                  <div class="product-text" v-html="$t('service.second')"></div>
                  <div
                    class="product-text"
                    v-html="$t('service.second1')"
                  ></div>
                </div>
              </div>
              <div class="service-second-right">
                <div class="product-third">
                  <img
                    src="../assets/image/service-8.png"
                    alt="product-6"
                    class="product-third-img"
                  />
                  <div class="title-h3__black">
                    {{ $t("service.saves") }}
                  </div>
                  <div class="product-text" v-html="$t('service.data')"></div>
                  <div class="product-text" v-html="$t('service.data1')"></div>
                  <div class="product-text" v-html="$t('service.data2')"></div>
                </div>
              </div>
            </a-col>
          </a-row>
          <a-row v-if="isMobile" type="flex" justify="space-around">
            <a-col :xs="11">
              <div class="product-third">
                <img
                  src="../assets/image/service-7.png"
                  alt="product-6"
                  class="product-third-img"
                />
                <div class="title-h3__black">
                  {{ $t("service.high") }}
                </div>
                <div class="product-text" v-html="$t('service.second')"></div>
                <div class="product-text" v-html="$t('service.second1')"></div>
              </div>
            </a-col>
            <a-col :xs="11">
              <div class="product-third">
                <img
                  src="../assets/image/service-8.png"
                  alt="product-6"
                  class="product-third-img"
                />
                <div class="title-h3__black">
                  {{ $t("service.saves") }}
                </div>
                <div class="product-text" v-html="$t('service.data')"></div>
                <div class="product-text" v-html="$t('service.data1')"></div>
                <div class="product-text" v-html="$t('service.data2')"></div>
              </div>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
    <!-- 第三部分 -->
    <a-row type="flex" justify="center">
      <a-col :lg="12" :xs="22">
        <div class="title-h2__black">{{ $t("gavic") }}</div>
        <div
          class="product-text"
          :style="isMobile ? textAlign : textCenter"
          v-html="$t('service.gavic')"
        ></div>
        <div class="product-video">
          <div ref="videoBox" class="video">
            <video
              ref="video"
              src="/video/show.MP4"
              webkit-playsinline="true"
              x5-playsinline="true"
              controls
              muted
              playsinline="true"
              class="video-content"
            >
              您的浏览器不支持 video 标签。
            </video>
            <div ref="play" class="video-poster" @click="handleVideo">
              <img src="../assets/image/612.png" alt="612" />
            </div>
          </div>
        </div>
      </a-col>
    </a-row>
    <!-- 第四部分 -->
    <div class="service-fourth">
      <a-row type="flex" justify="center">
        <a-col :lg="16" :xs="22">
          <div class="title-h2__black">{{ $t("service.virtual") }}</div>
          <div
            class="product-text"
            :style="isMobile ? textAlign : ''"
            v-html="$t('service.cross')"
          ></div>
          <div v-if="isMobile" class="product-img">
            <img src="../assets/image/service-9.png" alt="service-9" />
          </div>
          <a-row
            type="flex"
            :justify="isMobile ? 'center' : 'space-between'"
            align="middle"
            style="margin-bottom: 30px"
          >
            <a-col :lg="10" :xs="22">
              <div class="service-fourth-box">
                <div class="product-text" v-html="$t('service.oracle')"></div>
                <div class="product-text" v-html="$t('service.oracle1')"></div>
                <div class="product-text" v-html="$t('service.oracle2')"></div>
              </div>
            </a-col>
            <a-col v-if="!isMobile" :lg="12" :xs="22">
              <div class="product-img">
                <img src="../assets/image/service-9.png" alt="service-9" />
              </div>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
    <!-- 第五部分 -->
    <div class="service-fifth">
      <a-row type="flex" justify="center">
        <a-col :lg="16" :xs="22">
          <div class="product-text" style="margin-bottom: 30px">
            {{ $t("service.github") }}
          </div>
          <div class="service-fifth-btn">
            <a
              href="https://github.com/GACHAIN"
              target="_blank"
              class="service-fifth-github"
            >
              <img src="../assets/image/github.png" alt="github" />
              {{ $t("service.go") }}
            </a>
          </div>
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
      borderLeft: {
        borderBottom: "1px solid #dfdfdf",
        marginBottom: "2em"
      },
      textAlign: {
        textAlign: "left"
      },
      textCenter: {
        textAlign: "center"
      }
    };
  },
  head() {
    return {
      title:
        "技术开源，区块链加密机制，区块链底层语言，智能合约开发，链改，政务应用解决方案",
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content:
            "政务链,gachain,智语言,乾语言,跨链,共享交换,去中心化,自主开发,智乾科技,智乾区块链,智慧园区,智慧城市,智慧政务,共享交换"
        },
        {
          hid: "description",
          name: "description",
          content:
            "智乾政务链采用公链，用户可自定义上链的数据，并且支持第三方系统对接如跨链数据、其他中心化系统数据等。自主开发相关语言与集成开发环境图灵完备的智能合约语言-智语言(G Language)用户界面开发模板语言-乾语言(Chain Language)集成开发环境Molis客户端，开发者不需要丰富的区块链知识即可创建应用。"
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "智乾政务链采用公链，用户可自定义上链的数据，并且支持第三方系统对接如跨链数据、其他中心化系统数据等。自主开发相关语言与集成开发环境图灵完备的智能合约语言-智语言(G Language)用户界面开发模板语言-乾语言(Chain Language)集成开发环境Molis客户端，开发者不需要丰富的区块链知识即可创建应用。"
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      const videoBox = this.$refs.videoBox.offsetWidth;
      this.$refs.videoBox.style.height = (videoBox * 9) / 16 + "px";
      console.log(videoBox);
    });
  },
  methods: {
    handleVideo() {
      this.$refs.play.style.display = "none";
      this.$refs.video.play();
    }
  }
};
</script>
