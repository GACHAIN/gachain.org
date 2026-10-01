<script setup lang="ts">
import { RightOutlined } from '@ant-design/icons-vue'
import type { ApiResponse, NewsItem, PagedList } from '~/types/api'
import about2 from '~/assets/image/about-2.png'
import about4 from '~/assets/image/about-4.png'
import about5 from '~/assets/image/about-5.png'
import about6 from '~/assets/image/about-6.png'
import team1 from '~/assets/image/team-1.png'
import team2 from '~/assets/image/team-2.png'
import team3 from '~/assets/image/team-3.png'
import team4 from '~/assets/image/team-4.png'
import team5 from '~/assets/image/team-5.png'
import team6 from '~/assets/image/team-6.png'
import team7 from '~/assets/image/team-7.png'
import copyrightImage from '~/assets/image/3800.png'
import bulletTitle from '~/assets/image/buttom-1.png'
import bulletItem from '~/assets/image/buttom-2.png'
import patentImage from '~/assets/image/buttom-3.png'

// 关于智乾：公司介绍、新闻动态、发展历程、资质荣誉与软著专利
const { $api } = useNuxtApp()
const localePath = useLocalePath()
const isMobile = useIsMobile()

const honors = [team1, team2, team3, team4, team5, team6, team7]
// 软著与专利各 8 条，语言包 key 为 about.way / about.way1..7、about.system / about.system1..7
const listSuffixes = ['', '1', '2', '3', '4', '5', '6', '7']
const listItemStyle = computed(() => ({ marginLeft: isMobile.value ? '0' : '40px', fontSize: '13px' }))

function findNews(body: Record<string, unknown>) {
  return $api<ApiResponse<PagedList<NewsItem>>>('/newsfind', { method: 'POST', body })
}

// 左侧：首页展示的最新一条
const { data: featuredNews } = await useAsyncData(
  'about-featured-news',
  () => findNews({ where: { homeenable: 1 }, order: 'homeindex desc', page: 1, limit: 1 }),
  { transform: (res) => (res.code === 0 ? res.data.rets : []), default: () => [] },
)

// 右侧：全部新闻分页
const NEWS_PAGE_SIZE = 3
const newsPage = ref(1)
const { data: newsList } = await useAsyncData(
  'about-news',
  () => findNews({ where: {}, order: 'homeindex desc', page: newsPage.value, limit: NEWS_PAGE_SIZE }),
  {
    watch: [newsPage],
    transform: (res) =>
      res.code === 0 ? { total: res.data.total, rets: res.data.rets } : { total: 0, rets: [] },
    default: () => ({ total: 0, rets: [] as NewsItem[] }),
  },
)

const description =
  '深圳智乾区块链科技有限公司成立于2017年9月，是深圳链合科技投资有限公司的全资子公司。公司位于深圳市南山区前海。专业从事区块链研究、开发和应用落地的新兴公司。'
useSeoMeta({
  title: '关于智乾，智乾的新闻动态，区块链技术发展，区块链行业内容，智乾公司活动',
  keywords:
    '政务链,智乾科技,智乾区块链,gachain,链改,链改方案,电子政务,智慧城市,智慧政务,区块链生态,gachian',
  description,
  ogDescription: description,
})
</script>

<template>
  <div class="about">
    <!-- eslint-disable vue/no-v-html -- 本页 v-html 渲染语言包富文本与后台录入的新闻封面 -->
    <!-- 第一部分 -->
    <div class="about-first computer">
      <a-row type="flex" justify="center">
        <a-col :lg="16" :xs="22">
          <div class="title-h1__white">{{ $t('about.title') }}</div>
          <div class="home-back-text" v-html="$t('about.text')" />
          <div class="about-first-one product-fourth-white" style="margin-top: 30px">
            <h4 class="service-title">{{ $t('about.enterprise') }}</h4>
            <a-row type="flex" justify="space-around" align="middle">
              <a-col :lg="11" :xs="22">
                <img :src="about2" alt="about-2">
              </a-col>
              <a-col :lg="11" :xs="22">
                <div class="about-first-text">{{ $t('about.team1') }}</div>
                <div class="about-first-text">{{ $t('about.team2') }}</div>
                <div class="about-first-text">{{ $t('about.team3') }}</div>
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
            <div class="title-h1__white">{{ $t('about.title') }}</div>
            <div class="home-back-text" v-html="$t('about.text')" />
          </a-col>
        </a-row>
      </div>
      <div class="mobile-about-first-box">
        <div class="title-h2__black">{{ $t('about.enterprise') }}</div>
        <div class="about-first-text">{{ $t('about.team1') }}</div>
        <div class="about-first-text">{{ $t('about.team2') }}</div>
        <div class="about-first-text">{{ $t('about.team3') }}</div>
        <img :src="about2" alt="about-2" style="margin-top: 30px">
      </div>
    </div>
    <!-- 新闻动态 -->
    <a-row type="flex" justify="space-around">
      <a-col :lg="16" :xs="22">
        <div class="about-first-one">
          <h2 class="home-three-title">{{ $t('home.new') }}</h2>
          <a-row type="flex" justify="space-around">
            <a-col :lg="8" :xs="22" class="product-fourth-white" style="margin-bottom: 15px">
              <NuxtLink v-for="item in featuredNews" :key="item.id" :to="localePath(`/news/${item.id}`)">
                <div v-html="item.icon" />
                <h4 class="about-first-one-title" style="padding: 0 20px" :title="item.title">
                  {{ item.title }}
                </h4>
                <div class="about-first-one-content" style="padding: 0 20px">
                  {{ item.introduction }}
                </div>
                <div class="about-first-one-date">
                  <span>{{ item.date }}</span>
                  <RightOutlined />
                </div>
              </NuxtLink>
            </a-col>
            <a-col :lg="12" :xs="22">
              <NuxtLink
                v-for="item in newsList.rets"
                :key="item.id"
                :to="localePath(`/news/${item.id}`)"
                class="about-first-one-right product-fourth-white"
              >
                <div v-html="item.icon" />
                <div class="about-first-one-right-box">
                  <h4 class="about-first-one-title about-first-one-clamp1" :title="item.title">
                    {{ item.title }}
                  </h4>
                  <div class="about-first-one-content about-first-one-clamp2">
                    {{ item.introduction }}
                  </div>
                </div>
              </NuxtLink>
              <div class="about-first-one-pagination">
                <a-pagination
                  v-model:current="newsPage"
                  :total="newsList.total"
                  :page-size="NEWS_PAGE_SIZE"
                  :show-size-changer="false"
                />
              </div>
            </a-col>
          </a-row>
        </div>
      </a-col>
    </a-row>
    <!-- 发展历程 -->
    <div class="home-fifth" style="overflow-x: auto">
      <h2 class="home-three-title">{{ $t('home.zhi') }}</h2>
      <div class="about-three-appear">{{ $t('home.one') }}</div>
      <div :class="isMobile ? 'mobile' : 'computer'">
        <PublicTime />
      </div>
    </div>
    <!-- 区块链专利 -->
    <div class="about-second">
      <a-row type="flex" justify="center">
        <a-col :lg="16" :xs="22">
          <div class="title-h2__white">{{ $t('about.block') }}</div>
          <div class="about-second-box">
            <div class="about-second-box-item">
              <img :src="about4" alt="about-4">
              <div class="about-second-box-item-text">{{ $t('about.twenty') }}</div>
              <div class="about-second-box-item-content">{{ $t('about.patent') }}</div>
            </div>
            <div class="about-second-box-item-border" />
            <div class="about-second-box-item">
              <img :src="about5" alt="about-5">
              <div class="about-second-box-item-text">{{ $t('about.twenty') }}</div>
              <div class="about-second-box-item-content">{{ $t('about.right') }}</div>
            </div>
            <div class="about-second-box-item-border" />
            <div class="about-second-box-item">
              <img :src="about6" alt="about-6">
              <div class="about-second-box-item-text">{{ $t('about.seven') }}</div>
              <div class="about-second-box-item-content">{{ $t('about.sed') }}</div>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
    <!-- 资质荣誉 -->
    <div class="about-fourth">
      <h2 class="home-three-title">{{ $t('about.honor') }}</h2>
      <a-row type="flex" justify="center">
        <a-col :lg="16" :xs="22">
          <ImageCarousel :source="honors" />
        </a-col>
      </a-row>
    </div>
    <!-- 软著与专利 -->
    <div class="about-sixth">
      <h2 class="home-three-title">{{ $t('about.soft') }}</h2>
      <a-row type="flex" justify="center">
        <a-col :lg="16" :xs="23">
          <a-row type="flex" justify="space-around" style="margin-bottom: 40px">
            <a-col :lg="10" :xs="23" :order="isMobile ? 1 : 0">
              <img :src="copyrightImage" alt="3800" style="width: 100%">
            </a-col>
            <a-col :lg="12" :xs="23">
              <div class="about-buttom">
                <img :src="bulletTitle" alt="buttom-1" class="about-buttom-first">
                <span class="title-h3__black">{{ $t('about.chain') }}</span>
                <span class="about-buttom-right">{{ $t('about.part') }}</span>
              </div>
              <div v-for="suffix in listSuffixes" :key="suffix" class="about-buttom-box" :style="listItemStyle">
                <img :src="bulletItem" alt="buttom-2" class="about-buttom-second">
                <span>{{ $t(`about.way${suffix}`) }}</span>
              </div>
            </a-col>
          </a-row>
          <a-row type="flex" justify="space-around">
            <a-col :lg="12" :xs="23">
              <div class="about-buttom">
                <img :src="bulletTitle" alt="buttom-1" class="about-buttom-first">
                <span class="title-h3__black">{{ $t('about.ten') }}</span>
                <span class="about-buttom-right">{{ $t('about.zhu') }}</span>
              </div>
              <div v-for="suffix in listSuffixes" :key="suffix" class="about-buttom-box" :style="listItemStyle">
                <img :src="bulletItem" alt="buttom-2" class="about-buttom-second">
                <span>{{ $t(`about.system${suffix}`) }}</span>
              </div>
            </a-col>
            <a-col :lg="10" :xs="23">
              <img :src="patentImage" alt="buttom-3" style="width: 100%">
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
