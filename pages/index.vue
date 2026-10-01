<script setup lang="ts">
import three from '~/assets/image/three.png'
import three1 from '~/assets/image/three-1.png'
import three2 from '~/assets/image/three-2.png'
import three3 from '~/assets/image/three-3.png'
import three4 from '~/assets/image/three-4.png'
import three5 from '~/assets/image/three-5.png'
import three6 from '~/assets/image/three-6.png'
import third1 from '~/assets/image/third-1.png'
import third2 from '~/assets/image/third-2.png'
import third3 from '~/assets/image/third-3.png'
import third4 from '~/assets/image/third-4.png'
import third5 from '~/assets/image/third-5.png'
import thirdDesktop from '~/assets/image/third.png'
import thirdMobile from '~/assets/image/960.png'
import caseJingdong from '~/assets/image/jingdong.png'
import caseWangyi from '~/assets/image/wangyi.png'
import casePhotos from '~/assets/image/photos.png'
import openSourceBackground from '~/assets/image/four.png'
import openSourceBackgroundMobile from '~/assets/image/four_mobile.png'

// 首页：介绍视频、BaaS/SaaS/PaaS 服务、开源、南沙案例、新闻、发展历程与合作伙伴
const isMobile = useIsMobile()
const localePath = useLocalePath()
const introVideo = useTemplateRef<{ play: () => void }>('introVideo')

const pictures = [third1, third2, third3]
const cases = [caseJingdong, caseWangyi, casePhotos]
const baasItems = [
  { key: 1, src: three1, label: 'home.node' },
  { key: 2, src: three2, label: 'home.check' },
  { key: 3, src: three3, label: 'home.time' },
  { key: 4, src: three4, label: 'home.contact' },
]

const openSourceStyle = computed(() =>
  isMobile.value
    ? { padding: '20px 0', backgroundImage: `url(${openSourceBackgroundMobile})` }
    : { padding: '6vh 0 8vh 0', backgroundImage: `url(${openSourceBackground})` },
)

const description =
  '智乾区块链科技专业从事区块链研究、开发和应用落地的新兴公司。 公司核心集八年区块链技术积累，研发的“区块链即政务 -- 政务链（GACHAIN）”是国际上首个可创建主权分层级管理的公有区块链项目，达到业务办理去中心化的同时，拥有主权管理权限。于2018年被中国工信部收录于中国区块链产业白皮书，列为典型应用案例'
useSeoMeta({
  title: '智乾区块链 | 政务链 | 全行业高效自主区块链底层架构',
  keywords:
    '智慧政府,电子政务,大数据,云计算,政务微信,政务微博,政务云,政府信息化,信息化方案,智慧政府规划,企业征信,企业风险监测,企业画像,企业评分,智慧政务系统,智慧政务解决方案,智慧政务,区块链,电子存证,共享交换,数据孤岛,智乾科技,政务链,政务区块链,数字货币,链改,区块链开发,区块链平台,区块链应用,gachian,5G,物联网,互联网+',
  description,
  ogDescription: description,
})
</script>

<template>
  <div class="home">
    <!-- eslint-disable vue/no-v-html -- 本页 v-html 均渲染语言包内置的富文本 -->
    <!-- 第一部分：介绍视频 -->
    <div v-if="!isMobile" class="home-back">
      <a-row type="flex" justify="center">
        <a-col :lg="16" :xs="22">
          <a-row type="flex" justify="space-between" align="middle">
            <a-col :lg="10" :xs="22" class="computer">
              <div class="title-h1__white">{{ $t('home.gochain') }}</div>
              <div class="home-back-text">{{ $t('home.introduce') }}</div>
              <div class="home-back-btn">
                <button type="button" class="link-a" @click="introVideo?.play()">
                  {{ $t('home.player') }}
                </button>
              </div>
            </a-col>
            <a-col :lg="12" :xs="22">
              <IntroVideo ref="introVideo" src="/video/gacvideo.mp4" poster="/video/poster.png" />
            </a-col>
          </a-row>
          <HomeSecond />
        </a-col>
      </a-row>
    </div>
    <div v-else class="mobile">
      <IntroVideo src="/video/gacvideo.mp4" poster="/video/poster.png" />
      <div class="mobile-box">
        <div class="title-h1__black">{{ $t('home.gochain') }}</div>
        <div class="home-back-text">{{ $t('home.introduce') }}</div>
      </div>
      <HomeSecond />
    </div>
    <!-- BaaS / SaaS / PaaS -->
    <a-row type="flex" justify="center">
      <a-col :lg="16" :xs="22">
        <div class="title-h2__black">{{ $t('home.me') }}</div>
        <p :class="{ 'home-three-appear': !isMobile }">{{ $t('home.appear') }}</p>
        <a-row type="flex" justify="space-around">
          <a-col :lg="11" :xs="24" :order="isMobile ? 1 : 0">
            <h4 class="home-three-title-samll" style="padding-left: 10px">
              {{ $t('home.baas') }}
            </h4>
            <p class="home-back-second-content">{{ $t('home-base') }}</p>
            <div class="home-three-box">
              <div v-for="item in baasItems" :key="item.key" :class="`home-three-box-${item.key}`">
                <img :src="item.src" :alt="`three-${item.key}`">
                <span>{{ $t(item.label) }}</span>
              </div>
            </div>
          </a-col>
          <a-col :lg="11" :xs="24">
            <div class="home-three-img">
              <img :src="three" alt="three">
            </div>
          </a-col>
        </a-row>
        <a-row type="flex" justify="space-around">
          <a-col :lg="11" :xs="24">
            <div class="home-three-last">
              <img :src="three5" alt="three-5">
              <div class="home-three-last-content">
                <h4 class="home-three-title-samll">{{ $t('home.saas') }}</h4>
                <div>{{ $t('home.trade') }}</div>
              </div>
            </div>
          </a-col>
          <a-col :lg="11" :xs="24">
            <div class="home-three-last">
              <img :src="three6" alt="three-6">
              <div class="home-three-last-content">
                <h4 class="home-three-title-samll">{{ $t('home.paas') }}</h4>
                <div>{{ $t('home.open') }}</div>
              </div>
            </div>
          </a-col>
        </a-row>
        <div
          class="home-back-btn home-back-btn-center"
          :style="isMobile ? { paddingTop: '10px', paddingBottom: '25px' } : { paddingTop: '3vh', paddingBottom: '7vh' }"
        >
          <NuxtLink :to="localePath('/service')" class="link-a">{{ $t('home.more') }}&nbsp;&gt;</NuxtLink>
        </div>
      </a-col>
    </a-row>
    <!-- 第二部分：开源 -->
    <div class="home-second" :style="openSourceStyle">
      <a-row type="flex" justify="center">
        <a-col :lg="11" :xs="22">
          <div class="title-h2__white">{{ $t('home.here') }}</div>
          <p
            class="home-back-second-content"
            :style="isMobile ? { lineHeight: '1.5em', marginBottom: '30px' } : { lineHeight: '2em', marginBottom: '7vh' }"
          >
            {{ $t('home.go') }}
          </p>
          <div class="home-back-btn-center" style="padding: 0">
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/GACHAIN"
              class="link-a-none"
              :style="{ color: '#c4171d', fontWeight: isMobile ? 400 : 'bold' }"
            >{{ $t('home.see') }}</a>
          </div>
        </a-col>
      </a-row>
    </div>
    <!-- 第三部分：南沙案例 -->
    <div class="home-third">
      <a-row type="flex" justify="center">
        <a-col :lg="16" :xs="22">
          <div class="title-h2__black">{{ $t('home.based') }}</div>
          <div class="title-h3__black title-h__center" style="padding-bottom: 30px">
            <img :src="third4" alt="third-4">
            <span style="padding: 0 10px">{{ $t('home.nan') }}</span>
            <img :src="third5" alt="third-5">
          </div>
          <p class="home-back-second-content" v-html="$t('home.sha')" />
          <p class="home-back-second-content" style="padding-bottom: 30px" v-html="$t('home.sha1')" />
          <div class="home-third-img">
            <img
              :src="isMobile ? thirdMobile : thirdDesktop"
              alt="third"
              :style="{ width: isMobile ? '100%' : '80%' }"
            >
          </div>
          <div class="home-carousel">
            <ImageCarousel :source="pictures" wide />
          </div>
          <p class="home-three-title-samll">
            <img :src="third4" alt="third-4">
            <span>{{ $t('home.jingdong') }}</span>
            <img :src="third5" alt="third-5">
          </p>
          <p class="home-back-second-content">{{ $t('home.wangyi') }}</p>
          <p class="home-back-second-content">{{ $t('home.info') }}</p>
          <div v-if="!isMobile" class="home-third-back">
            <div class="home-third-back-back">
              <div class="home-third-back-back-back" />
            </div>
          </div>
          <div v-else class="home-carousel-box">
            <ImageCarousel :source="cases" />
          </div>
          <div class="home-back-btn home-back-btn-center" :style="{ paddingBottom: isMobile ? '40px' : '80px' }">
            <NuxtLink :to="localePath('/solution')" class="link-a">{{ $t('home.case') }}&nbsp;&gt;</NuxtLink>
          </div>
        </a-col>
      </a-row>
    </div>
    <!-- 第四部分：新闻动态 -->
    <div class="home-fourth">
      <a-row type="flex" justify="center">
        <a-col :lg="16" :xs="22">
          <h2 class="home-three-title">{{ $t('home.new') }}</h2>
          <NewsList />
          <div class="home-back-btn home-back-btn-center">
            <NuxtLink :to="localePath({ path: '/about', query: { scroll: 600 } })" class="link-a">
              {{ $t('home.dong') }}&nbsp;&gt;
            </NuxtLink>
          </div>
        </a-col>
      </a-row>
    </div>
    <!-- 第五部分：发展历程 -->
    <div class="home-fifth">
      <h2 class="home-three-title">{{ $t('home.zhi') }}</h2>
      <div class="about-three-appear">{{ $t('home.one') }}</div>
      <div :class="isMobile ? 'mobile' : 'computer'">
        <PublicTime />
      </div>
    </div>
    <!-- 第六部分：合作伙伴 -->
    <div class="home-sixth">
      <h2 class="home-three-title">{{ $t('home.firend') }}</h2>
      <a-row type="flex" justify="center">
        <a-col :lg="16" :xs="22">
          <div v-if="isMobile" class="mobile">
            <PartnerSwiper />
          </div>
          <PartnerGrid v-else />
        </a-col>
      </a-row>
    </div>
  </div>
</template>
