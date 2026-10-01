<script setup lang="ts">
// 迁移期占位首页，用于验证布局与基础组件；阶段 5 替换为迁移后的真实首页
</script>

<template>
  <main style="padding: 40px 0">
    <h1 data-probe="i18n" class="wow fadeInUp">{{ $t('home') + ' / ' + $t('home.gochain') }}</h1>
    <HomeSecond />
    <NewsList />
    <PublicTime />
    <div style="height: 1500px" />
  </main>
</template>
