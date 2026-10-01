<script setup lang="ts">
// 迁移期占位首页，用于验证布局与基础组件；阶段 5 替换为迁移后的真实首页
import third1 from '~/assets/image/third-1.png'
import third2 from '~/assets/image/third-2.png'
import third3 from '~/assets/image/third-3.png'

const pictures = [third1, third2, third3]
const introVideo = useTemplateRef<{ play: () => void }>('introVideo')
</script>

<template>
  <main style="padding: 40px 0">
    <h1 data-probe="i18n" class="wow fadeInUp">{{ $t('home') + ' / ' + $t('home.gochain') }}</h1>
    <button data-probe="play" @click="introVideo?.play()">{{ $t('home.player') }}</button>
    <div style="width: 600px; max-width: 100%"><IntroVideo ref="introVideo" /></div>
    <div data-probe="wide" class="home-carousel"><ImageCarousel :source="pictures" wide /></div>
    <div data-probe="compact"><ImageCarousel :source="pictures" /></div>
    <div data-probe="partner" class="home-sixth mobile"><PartnerSwiper /></div>
    <HomeSecond />
    <NewsList />
    <PublicTime />
  </main>
</template>
