<script setup lang="ts">
import type { ApiResponse, NewsItem, PagedList } from '~/types/api'

// 新闻详情：正文 + 上一条/下一条（按 homeindex 排序）+ 右侧最新新闻
definePageMeta({
  validate: (route) => /^\d+$/.test(String(route.params.id)),
})

const route = useRoute()
const { $api } = useNuxtApp()
const localePath = useLocalePath()

const id = computed(() => String(route.params.id))

const { data } = await useAsyncData(
  () => `news-${id.value}`,
  async () => {
    const res = await $api<ApiResponse<NewsItem | null>>(`/news/${id.value}`)
    const news = res.code === 0 ? res.data : null
    if (!news) return null
    const [pre, next] = await Promise.all(
      ['newspre', 'newsnext'].map((endpoint) =>
        $api<ApiResponse<NewsItem[] | null>>(`/${endpoint}/${news.homeindex}/true`),
      ),
    )
    return {
      news,
      pre: pre?.code === 0 ? (pre.data?.[0] ?? null) : null,
      next: next?.code === 0 ? (next.data?.[0] ?? null) : null,
    }
  },
)

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'News Not Found', fatal: true })
}

const { data: latestNews } = await useAsyncData(
  'news-latest',
  () =>
    $api<ApiResponse<PagedList<NewsItem>>>('/newsfind', {
      method: 'POST',
      body: { where: {}, order: 'id desc', page: 1, limit: 5 },
    }),
  { transform: (res) => (res.code === 0 ? res.data.rets : []), default: () => [] },
)

const news = computed(() => data.value?.news)

useSeoMeta({
  title: () => `${news.value?.title ?? ''} - 深圳智乾 | 深圳智乾区块链`,
  keywords: () => news.value?.keywords,
  description: () => news.value?.introduction,
  ogDescription: () => news.value?.introduction,
})
</script>

<template>
  <div v-if="data && news" class="news">
    <a-row type="flex" justify="center">
      <a-col :lg="16" :xs="23">
        <a-row type="flex" justify="space-around">
          <a-col :lg="18" :xs="23">
            <div class="news-box">
              <h2 class="home-three-title">{{ news.title }}</h2>
              <div class="news-box-info">
                <span>{{ $t('about.date') }}：{{ news.date }}</span>
                <a v-if="news.source_url" :href="news.source_url" target="_blank" rel="noopener">
                  {{ $t('about.source') }}：{{ news.source }}
                </a>
                <span v-else>{{ $t('about.source') }}：{{ news.source }}</span>
              </div>
              <!-- eslint-disable-next-line vue/no-v-html -- 后台录入的新闻正文富文本 -->
              <div class="news-content" v-html="news.content" />
              <div v-if="data.pre" class="news-next">
                <div class="news-next-title">{{ $t('about.last') }}</div>
                <NuxtLink
                  :to="localePath(`/news/${data.pre.id}`)"
                  class="about-first-one-title about-first-one-clamp1"
                >
                  {{ data.pre.title }}
                </NuxtLink>
              </div>
            </div>
          </a-col>
          <a-col :lg="5" :xs="23">
            <div class="news-other">
              <div class="news-other-title">{{ $t('about.other') }}</div>
              <NuxtLink v-for="item in latestNews" :key="item.id" :to="localePath(`/news/${item.id}`)">
                <!-- eslint-disable-next-line vue/no-v-html -- 后台录入的新闻封面富文本 -->
                <div v-html="item.icon" />
                <div class="about-first-one-title about-first-one-clamp1" :title="item.title">
                  {{ item.title }}
                </div>
              </NuxtLink>
            </div>
            <div v-if="data.next" class="news-next">
              <div class="news-next-title">{{ $t('about.next') }}</div>
              <NuxtLink
                :to="localePath(`/news/${data.next.id}`)"
                class="about-first-one-title about-first-one-clamp1"
              >
                {{ data.next.title }}
              </NuxtLink>
            </div>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>
