<script setup lang="ts">
import { RightOutlined } from '@ant-design/icons-vue'
import type { ApiResponse, NewsItem, PagedList } from '~/types/api'

// 首页重点新闻（后台勾选“首页展示”的前 3 条）
const { $api } = useNuxtApp()
const localePath = useLocalePath()
const isMobile = useIsMobile()

const { data: news } = await useAsyncData(
  'home-featured-news',
  () =>
    $api<ApiResponse<PagedList<NewsItem>>>('/newsfind', {
      method: 'POST',
      body: { where: { homeenable: 1 }, order: 'homeindex desc', page: 1, limit: 3 },
    }),
  { transform: (res) => (res.code === 0 ? res.data.rets : []), default: () => [] },
)
</script>

<template>
  <a-row type="flex" :justify="isMobile ? 'center' : 'space-around'">
    <a-col v-for="item in news" :key="item.id" :lg="7" :xs="23" style="margin-bottom: 2em">
      <NuxtLink :to="localePath(`/news/${item.id}`)" class="home-fourth-box">
        <!-- eslint-disable-next-line vue/no-v-html -- 后台录入的新闻封面富文本 -->
        <div v-html="item.icon" />
        <h4 class="about-first-one-title" :title="item.title" style="padding: 0 20px">
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
  </a-row>
</template>
