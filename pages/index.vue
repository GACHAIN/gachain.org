<script setup lang="ts">
// 迁移期占位首页，用于验证脚手架、i18n 与数据层；阶段 5 替换为迁移后的真实首页
const { $api } = useNuxtApp()
const { data: news } = await useAsyncData('home-news-probe', () =>
  $api<{ data: { total: number } }>('/newsfind', {
    method: 'POST',
    body: { where: { homeenable: 1 }, order: 'homeindex desc', page: 1, limit: 3 },
  }),
)
</script>

<template>
  <main style="padding: 40px">
    <h1 data-probe="i18n">{{ $t('home') + ' / ' + $t('home.gochain') }}</h1>
    <p data-probe="news">news total: {{ news?.data.total ?? 'n/a' }}</p>
  </main>
</template>
