<!--
 * @Author: abc
 * @Date: 2020-12-31 11:36:48
 * @LastEditors: abc
 * @LastEditTime: 2021-02-03 11:16:47
 * @Description: 首页
-->
<template>
  <div class="home">
    <!--  computer-->
    <div v-if="!isMobile" class="home-back">
      <a-row type="flex" justify="center">
        <a-col :lg="16" :xs="22">
          <a-row type="flex" justify="space-between" align="middle">
            <a-col :lg="10" :xs="22" class="computer">
              <div class="title-h1__white">
                {{ $t("home.gochain") }}
              </div>
              <div class="home-back-text">
                {{ $t("home.introduce") }}
              </div>
              <div class="home-back-btn">
                <a href="javascript:;" class="link-a" @click="handlePlayer">{{
                  $t("home.player")
                }}</a>
              </div>
            </a-col>
            <a-col :lg="12" :xs="22">
              <div ref="videoBox" class="video">
                <video
                  id="video"
                  ref="video"
                  src="/video/gacvideo.mp4"
                  webkit-playsinline="true"
                  x5-playsinline="true"
                  controls
                  muted
                  playsinline="true"
                  poster="/video/poster.png"
                  class="video-content"
                >
                  您的浏览器不支持 video 标签。
                </video>
                <div ref="play" class="video-poster" @click="handleVideo">
                  <img src="../assets/image/612.png" alt="612" />
                </div>
              </div>
              <!--  <no-ssr>
                <div
                  ref="videoPlayer"
                  v-video-player:myVideoPlayer="playerOptions"
                  class="vjs-custom-skin"
                  :playsinline="playsinline"
                  @ready="playerReadied"
                  @statechanged="playerStateChanged($event)"
                ></div>
              </no-ssr> -->
            </a-col>
          </a-row>
          <!-- 第一部分 第二段 -->
          <home-second></home-second>
          <!-- 第一部分 第三段 -->
        </a-col>
      </a-row>
    </div>
    <!--  mobile-->
    <div v-if="isMobile" class="mobile">
      <div ref="videoBox" class="video">
        <video
          ref="video"
          src="/video/gacvideo.mp4"
          playsinline="true"
          x5-playsinline="true"
          x5-video-player-type="h5"
          x5-video-player-fullscreen="true"
          x5-video-orientation="portraint"
          webkit-playsinline="true"
          x-webkit-airplay="allow"
          controls="controls"
          controlslist="nodownload noremoteplayback"
          muted
          poster="/video/poster.png"
          class="video-content"
        >
          您的浏览器不支持 video 标签。
        </video>
        <div ref="play" class="video-poster" @click="handleVideo">
          <img src="../assets/image/612.png" alt="612" />
        </div>
      </div>
      <!--   <no-ssr>
        <div
          ref="videoPlayer"
          v-video-player:myVideoPlayer="playerOptions"
          class="vjs-custom-skin"
          :playsinline="playsinline"
          @ready="playerReadied"
          @statechanged="playerStateChanged($event)"
        ></div>
      </no-ssr> -->
      <div class="mobile-box">
        <div class="title-h1__black">
          {{ $t("home.gochain") }}
        </div>
        <div class="home-back-text">
          {{ $t("home.introduce") }}
        </div>
      </div>
      <!-- 第一部分 第二段 -->
      <home-second></home-second>
    </div>
    <a-row type="flex" justify="center">
      <a-col :lg="16" :xs="22">
        <div class="title-h2__black">{{ $t("home.me") }}</div>
        <p v-if="isMobile">{{ $t("home.appear") }}</p>
        <p v-else class="home-three-appear">{{ $t("home.appear") }}</p>
        <a-row v-if="isMobile" type="flex" justify="center">
          <a-col :lg="11" :xs="24">
            <div class="home-three-img">
              <img src="../assets/image/three.png" alt="three" />
            </div>
          </a-col>
        </a-row>
        <a-row type="flex" justify="space-around">
          <a-col :lg="11" :xs="24">
            <h4 class="home-three-title-samll" style="padding-left: 10px">
              {{ $t("home.baas") }}
            </h4>
            <p class="home-back-second-content">{{ $t("home-base") }}</p>
            <div class="home-three-box">
              <div class="home-three-box-1">
                <img src="../assets/image/three-1.png" alt="three-1" />
                <span>{{ $t("home.node") }}</span>
              </div>
              <div class="home-three-box-2">
                <img src="../assets/image/three-2.png" alt="three-1" />
                <span>{{ $t("home.check") }}</span>
              </div>
              <div class="home-three-box-3">
                <img src="../assets/image/three-3.png" alt="three-1" />
                <span>{{ $t("home.time") }}</span>
              </div>
              <div class="home-three-box-4">
                <img src="../assets/image/three-4.png" alt="three-1" />
                <span>{{ $t("home.contact") }}</span>
              </div>
            </div>
          </a-col>
          <a-col v-if="!isMobile" :lg="11" :xs="24">
            <div class="home-three-img">
              <img src="../assets/image/three.png" alt="three" />
            </div>
          </a-col>
        </a-row>
        <a-row type="flex" justify="space-around">
          <a-col :lg="11" :xs="24">
            <div class="home-three-last">
              <img src="../assets/image/three-5.png" alt="three-5" />
              <div class="home-three-last-content">
                <h4 class="home-three-title-samll">
                  {{ $t("home.saas") }}
                </h4>
                <div>{{ $t("home.trade") }}</div>
              </div>
            </div>
          </a-col>
          <a-col :lg="11" :xs="24">
            <div class="home-three-last">
              <img src="../assets/image/three-6.png" alt="three-6" />
              <div class="home-three-last-content">
                <h4 class="home-three-title-samll">
                  {{ $t("home.paas") }}
                </h4>
                <div>{{ $t("home.open") }}</div>
              </div>
            </div>
          </a-col>
        </a-row>
        <div
          class="home-back-btn home-back-btn-center"
          :style="isMobile ? btnMob : btnCom"
        >
          <nuxt-link :to="{ name: 'service' }" class="link-a"
            >{{ $t("home.more") }}&nbsp;></nuxt-link
          >
        </div>
      </a-col>
    </a-row>
    <!-- 第二部分 -->
    <div class="home-second" :style="isMobile ? backMobile : backComputer">
      <a-row type="flex" justify="center">
        <a-col :lg="11" :xs="22">
          <div class="title-h2__white">{{ $t("home.here") }}</div>
          <p
            class="home-back-second-content"
            :style="isMobile ? contentMobile : contentComputer"
          >
            {{ $t("home.go") }}
          </p>
          <div class="home-back-btn-center" style="padding: 0">
            <a
              target="_blank"
              href="https://github.com/GACHAIN"
              class="link-a-none"
              :style="isMobile ? btnMob1 : btnCom1"
              >{{ $t("home.see") }}</a
            >
          </div>
        </a-col>
      </a-row>
    </div>
    <!-- 第三部分 -->
    <div class="home-third">
      <a-row type="flex" justify="center">
        <a-col :lg="16" :xs="22">
          <div class="title-h2__black">{{ $t("home.based") }}</div>
          <div
            class="title-h3__black title-h__center"
            style="padding-bottom: 30px"
          >
            <img src="../assets/image/third-4.png" alt="third-4" />
            <span style="padding: 0 10px">{{ $t("home.nan") }}</span>
            <img src="../assets/image/third-5.png" alt="third-5" />
          </div>
          <p class="home-back-second-content" v-html="$t('home.sha')"></p>
          <p
            class="home-back-second-content"
            style="padding-bottom: 30px"
            v-html="$t('home.sha1')"
          ></p>
          <div class="home-third-img">
            <img
              :src="isMobile ? thirdMob : thirdCom"
              alt="third"
              :style="isMobile ? widthMobile : widthComputer"
            />
          </div>
          <!-- 走马灯效果 -->
          <div v-if="!isMobile" class="home-carousel">
            <public-carousel :source="pictures"></public-carousel>
          </div>
          <!-- 走马灯效果 -->
          <div v-else class="home-carousel">
            <swiper-carousel :source="pictures"></swiper-carousel>
          </div>
          <p class="home-three-title-samll">
            <img src="../assets/image/third-4.png" alt="third-4" />
            <span>{{ $t("home.jingdong") }}</span>
            <img src="../assets/image/third-5.png" alt="third-4" />
          </p>
          <p class="home-back-second-content">{{ $t("home.wangyi") }}</p>
          <p class="home-back-second-content">{{ $t("home.info") }}</p>
          <div v-if="!isMobile" class="home-third-back">
            <div class="home-third-back-back">
              <div class="home-third-back-back-back"></div>
            </div>
          </div>
          <div v-if="isMobile" class="home-carousel-box">
            <swiper-carousel :source="arrCase"></swiper-carousel>
          </div>
          <div
            class="home-back-btn home-back-btn-center"
            :style="isMobile ? imgMobile : imgComputer"
          >
            <nuxt-link :to="{ name: 'solution' }" class="link-a"
              >{{ $t("home.case") }}&nbsp;></nuxt-link
            >
          </div>
        </a-col>
      </a-row>
    </div>
    <!-- 第四部分 -->
    <div class="home-fourth">
      <a-row type="flex" justify="center">
        <a-col :lg="16" :xs="22">
          <h2 class="home-three-title">{{ $t("home.new") }}</h2>
          <new-list></new-list>
          <div class="home-back-btn home-back-btn-center">
            <nuxt-link
              :to="{ name: 'about', query: { scroll: 600 } }"
              class="link-a"
              >{{ $t("home.dong") }}&nbsp;></nuxt-link
            >
          </div>
        </a-col>
      </a-row>
    </div>
    <!-- 第五部分 -->
    <div class="home-fifth">
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
    <!-- 第六部分 -->
    <div class="home-sixth">
      <h2 class="home-three-title">{{ $t("home.firend") }}</h2>
      <a-row type="flex" justify="center">
        <a-col :lg="16" :xs="22">
          <div v-if="isMobile" class="mobile">
            <swiper-firend></swiper-firend>
          </div>
          <template v-else>
            <div ref="drag" class="home-sixth-box">
              <a-icon
                v-if="icon"
                type="left"
                class="home-sixth-box-left"
                :class="{ disabled: isDisableLeft }"
                @click="handleLeft"
              />
              <a-icon
                v-if="icon"
                type="right"
                class="home-sixth-box-right"
                :class="{ disabled: isDisableRight }"
                @click="handleRight"
              />
              <a
                v-for="item in arrShow"
                :key="item.key"
                href="javascript:;"
                class="home-sixth-box-item"
              >
                <img :src="item.src" alt="item.key" />
              </a>
            </div>
          </template>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
const four = require("../assets/image/four.png");
const fourMobile = require("../assets/image/four_mobile.png");
export default {
  data() {
    return {
      pictures: [
        { src: require("../assets/image/third-1.png") },
        { src: require("../assets/image/third-2.png") },
        { src: require("../assets/image/third-3.png") }
      ],
      arrCase: [
        { src: require("../assets/image/jingdong.png") },
        { src: require("../assets/image/wangyi.png") },
        { src: require("../assets/image/photos.png") }
      ],
      playsinline: true,
      num: 1,
      icon: false,
      page: 1,
      isDisableRight: false,
      isDisableLeft: true,
      thirdMob: require("../assets/image/960.png"),
      thirdCom: require("../assets/image/third.png"),
      widthMobile: { width: "100%" },
      btnMob1: {
        color: "#c4171d",
        fontWeight: 400
      },
      btnCom1: {
        color: "#c4171d",
        fontWeight: "bold"
      },
      widthComputer: {
        width: "80%"
      },
      btnCom: {
        paddingTop: "3vh",
        paddingBottom: "7vh"
      },
      btnMob: {
        paddingTop: "10px",
        paddingBottom: "25px"
      },
      imgMobile: {
        paddingBottom: "40px"
      },
      imgComputer: {
        paddingBottom: "80px"
      },
      contentMobile: {
        lineHeight: "1.5em",
        marginBottom: "30px"
      },
      contentComputer: {
        lineHeight: "2em",
        marginBottom: "7vh"
      },
      align: {
        alignItems: "center"
      },
      backComputer: {
        padding: "6vh 0 8vh 0",
        backgroundImage: `url(${four})`
      },
      backMobile: {
        padding: "20px 0",
        backgroundImage: `url(${fourMobile})`
      },
      arrFirend: [
        { key: 1, href: "javascript:;", src: require("../assets/image/1.png") },
        { key: 2, href: "javascript:;", src: require("../assets/image/2.png") },
        { key: 3, href: "javascript:;", src: require("../assets/image/3.png") },
        { key: 4, href: "javascript:;", src: require("../assets/image/4.png") },
        { key: 5, href: "javascript:;", src: require("../assets/image/5.png") },
        { key: 6, href: "javascript:;", src: require("../assets/image/6.png") },
        { key: 7, href: "javascript:;", src: require("../assets/image/7.png") },
        { key: 8, href: "javascript:;", src: require("../assets/image/8.png") },
        { key: 9, href: "javascript:;", src: require("../assets/image/9.png") },
        {
          key: 10,
          href: "javascript:;",
          src: require("../assets/image/10.png")
        }
      ],
      arrShow: [],
      player: {},
      playerOptions: {
        controls: false,
        playbackRates: [], // [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
        autoplay: false, // 如果为true,浏览器准备好时开始回放。
        muted: true, // 默认情况下将会消除任何音频。
        loop: true, // 是否视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        // 设置视频播放器的显示宽度（以像素为单位）
        width: "100%",
        // 设置视频播放器的显示高度（以像素为单位）
        height: "400px",
        sources: [
          {
            type: "video/mp4", // 类型
            src: "/video/gacvideo.mp4" // url地址
          }
        ],
        poster: require("../assets/image/poster.png"), // 封面地址
        notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          volumeControl: false,
          volumePanel: {
            inline: false // 音量调节是否水平
          },
          timeDivider: true, // 当前时间和持续时间的分隔符
          durationDisplay: true, // 显示持续时间
          remainingTimeDisplay: false, // 是否显示剩余时间功能
          fullscreenToggle: true // 是否显示全屏按钮
        }
      }
    };
  },
  head() {
    return {
      title: "智乾区块链 | 政务链 | 全行业高效自主区块链底层架构",
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content:
            "智慧政府,电子政务,大数据,云计算,政务微信,政务微博,政务云,政府信息化,信息化方案,智慧政府规划,企业征信,企业风险监测,企业画像,企业评分,智慧政务系统,智慧政务解决方案,智慧政务,区块链,电子存证,共享交换,数据孤岛,智乾科技,政务链,政务区块链,数字货币,链改,区块链开发,区块链平台,区块链应用,gachian,5G,物联网,互联网+"
        },
        {
          hid: "description",
          name: "description",
          content:
            "智乾区块链科技专业从事区块链研究、开发和应用落地的新兴公司。 公司核心集八年区块链技术积累，研发的“区块链即政务 -- 政务链（GACHAIN）”是国际上首个可创建主权分层级管理的公有区块链项目，达到业务办理去中心化的同时，拥有主权管理权限。于2018年被中国工信部收录于中国区块链产业白皮书，列为典型应用案例"
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "智乾区块链科技专业从事区块链研究、开发和应用落地的新兴公司。 公司核心集八年区块链技术积累，研发的“区块链即政务 -- 政务链（GACHAIN）”是国际上首个可创建主权分层级管理的公有区块链项目，达到业务办理去中心化的同时，拥有主权管理权限。于2018年被中国工信部收录于中国区块链产业白皮书，列为典型应用案例"
        }
      ]
    };
  },
  mounted() {
    if (this.isMobile) {
      this.$nextTick(() => {
        const videoBox = this.$refs.videoBox.clientWidth;
        console.log(this.$refs.videoBox);
        console.log(videoBox);
        this.$refs.videoBox.style.height = (videoBox * 9) / 16 + "px";
        this.initMobile();
      });
    } else {
      this.$nextTick(() => {
        const videoBox = this.$refs.videoBox.clientWidth;
        console.log(this.$refs.videoBox);
        console.log(videoBox);
        this.$refs.videoBox.style.height = (videoBox * 9) / 16 + "px";
        this.initComputer();
      });
    }
  },
  methods: {
    handleVideo() {
      this.$refs.play.style.display = "none";
      this.$refs.video.play();
    },
    playerStateChanged(playerCurrentState) {
      console.log("player current update state", playerCurrentState);
    },
    // player is ready
    playerReadied(player) {
      this.player = player;
      console.log("example 01: the player is readied", player);
    },
    initMobile() {
      this.num = 6;
      console.log(this.num);
      if (this.arrFirend.length <= this.num) {
        this.icon = false;
      } else {
        this.icon = true;
      }
      this.arrShow = this.handleChangePage(this.arrFirend, this.num);
    },
    initComputer() {
      console.log(this.$refs.drag);
      this.num = parseInt(this.$refs.drag.offsetWidth / 200);
      console.log(this.num);
      if (this.arrFirend.length <= this.num) {
        this.icon = false;
      } else {
        this.icon = true;
      }
      this.arrShow = this.handleChangePage(this.arrFirend, this.num);
    },
    handleLeft() {
      this.isDisableRight = false;
      if (this.page === 1) {
        this.isDisableLeft = true;
        return false;
      }
      this.page -= 1;
      this.isDisableLeft = true;
      this.arrShow = this.handleChangePage(this.arrFirend, this.num, this.page);
    },
    handleRight() {
      this.isDisableLeft = false;
      if (this.page * this.num >= this.arrFirend.length) {
        this.isDisableRight = true;
        return false;
      }
      this.page += 1;
      this.isDisableRight = true;
      this.arrShow = this.handleChangePage(this.arrFirend, this.num, this.page);
    },
    handleChangePage(data, num, page = 1) {
      const pageSize = parseInt(num);
      //  const page = Math.ceil(data.length / pageSize);
      const long = data.length;
      const min = num * (page - 1);
      const max = num * page;
      const arr = [];
      if (long <= page * pageSize) {
        for (let i = min; i < long; i++) {
          arr.push(data[i]);
        }
        return arr;
      } else {
        for (let i = min; i < max; i++) {
          arr.push(data[i]);
        }
        return arr;
      }
    },
    handlePlayer() {
      // console.log(window.videojs());
      // window.videojs.player.play();
      /* console.log(this.player);
      this.player.play(); */
      this.$refs.play.style.display = "none";
      this.$refs.video.play();
    },
    onPanelChange(value, mode) {
      console.log(value, mode);
    }
  }
};
</script>
