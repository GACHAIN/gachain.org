<script setup lang="ts">
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

// 移动端“合作伙伴”轮播（替代旧 swiperFirend）：每屏一组 logo，前 6 个一组、其余一组
const groups = [partnerLogos.slice(0, 6), partnerLogos.slice(6)]

const container = useTemplateRef<HTMLElement>('container')
const pagination = useTemplateRef<HTMLElement>('pagination')
const prevButton = useTemplateRef<HTMLElement>('prevButton')
const nextButton = useTemplateRef<HTMLElement>('nextButton')
let swiper: Swiper | null = null

onMounted(() => {
  if (!container.value) return
  // 仅两屏，用 rewind 实现首尾循环（loop 模式需要更多幻灯片）
  swiper = new Swiper(container.value, {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    rewind: true,
    pagination: { el: pagination.value, clickable: true },
    navigation: { prevEl: prevButton.value, nextEl: nextButton.value },
  })
})
onBeforeUnmount(() => swiper?.destroy(true, true))
</script>

<template>
  <div ref="container" class="swiper">
    <div class="swiper-wrapper">
      <div v-for="(logos, index) in groups" :key="index" class="swiper-slide">
        <div v-for="src in logos" :key="src" class="home-sixth-box-item">
          <img :src="src" alt="partner">
        </div>
      </div>
    </div>
    <div ref="pagination" class="swiper-pagination" />
    <div ref="prevButton" class="swiper-button-prev" />
    <div ref="nextButton" class="swiper-button-next" />
  </div>
</template>

<style lang="less" scoped>
@import '~/assets/less/variable.less';

.swiper {
  z-index: 0;
  width: 100%;
}
.swiper-slide {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 30px;
}
.swiper-pagination {
  bottom: 0;
  z-index: 100;
  :deep(.swiper-pagination-bullet) {
    width: 25px;
    height: 10px;
    border-radius: 5px;
  }
  :deep(.swiper-pagination-bullet-active) {
    background: @primary-color;
  }
}
.swiper-button-prev,
.swiper-button-next {
  top: 110px;
  width: 10px;
  height: 20px;
  background: no-repeat center / 100% 100%;
  &::after {
    content: none;
  }
  :deep(.swiper-navigation-icon) {
    display: none;
  }
}
.swiper-button-prev {
  left: 0;
  background-image: url('~/assets/image/pre.png');
}
.swiper-button-next {
  right: 0;
  background-image: url('~/assets/image/next.png');
}
</style>
