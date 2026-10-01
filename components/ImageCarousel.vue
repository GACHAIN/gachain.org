<script setup lang="ts">
import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

// 层叠式图片轮播（替代旧 PublicCarousel / swiperCarousel）：
// 居中的当前图最大，两侧图按距离缩小、错位叠放。
// wide：桌面端每张占 60%、错位更大（首页、产品页）；否则桌面端 30%（关于页）。移动端统一 80%
const props = defineProps<{
  source: string[]
  wide?: boolean
}>()

const isMobile = useIsMobile()
const layout = computed(() => {
  if (isMobile.value) return { slideWidth: '80%', offset: 90 }
  return props.wide ? { slideWidth: '60%', offset: 200 } : { slideWidth: '30%', offset: 90 }
})

// Swiper 11 的 loop 不再自动复制幻灯片，图片少时两侧会留空；
// 重复渲染至不少于 MIN_SLIDES 张，分页圆点仍按原图数量显示
const MIN_SLIDES = 9
const slides = computed(() => {
  const count = props.source.length
  if (!count) return []
  const copies = Math.ceil(MIN_SLIDES / count)
  return Array.from({ length: count * copies }, (_, index) => props.source[index % count]!)
})
const activeIndex = ref(0)

const container = useTemplateRef<HTMLElement>('container')
const prevButton = useTemplateRef<HTMLElement>('prevButton')
const nextButton = useTemplateRef<HTMLElement>('nextButton')
let swiper: Swiper | null = null

// 按每张图相对居中位置的 progress 计算位移、缩放与层级
function applyStack(instance: Swiper) {
  const { offset } = layout.value
  for (const slide of instance.slides as (HTMLElement & { progress: number })[]) {
    const progress = slide.progress
    const distance = Math.abs(progress)
    const modify = distance > 1 ? (distance - 1) * 0.3 + 1 : 1
    slide.style.transform = `translateX(${progress * modify * offset}px) scale(${1 - distance / 5})`
    slide.style.zIndex = String(999 - Math.abs(Math.round(10 * progress)))
    slide.style.opacity = distance > 3 ? '0' : '1'
  }
}

function init() {
  swiper?.destroy(true, true)
  if (!container.value) return
  swiper = new Swiper(container.value, {
    modules: [Navigation],
    watchSlidesProgress: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    navigation: { prevEl: prevButton.value, nextEl: nextButton.value },
    on: {
      progress: applyStack,
      realIndexChange(instance) {
        activeIndex.value = instance.realIndex % props.source.length
      },
      setTransition(instance, duration) {
        for (const slide of instance.slides) slide.style.transitionDuration = `${duration}ms`
      },
    },
  })
}

// 跳到与圆点对应、离当前位置最近的那一份副本
function goTo(index: number) {
  if (!swiper) return
  const count = props.source.length
  const base = swiper.realIndex - (swiper.realIndex % count)
  swiper.slideToLoop(base + index)
}

onMounted(init)
// 跨越移动端断点或图片变化时重建，使位移参数与幻灯片生效
watch([layout, slides], () => nextTick(init))
onBeforeUnmount(() => swiper?.destroy(true, true))
</script>

<template>
  <div class="image-carousel" :style="{ '--slide-width': layout.slideWidth }">
    <div ref="container" class="swiper">
      <div class="swiper-wrapper">
        <div v-for="(src, index) in slides" :key="index" class="swiper-slide">
          <img class="swiper-img" :src="src" alt="">
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal">
        <span
          v-for="(_, index) in source"
          :key="index"
          class="swiper-pagination-bullet swiper-pagination-bullet-clickable"
          :class="{ 'swiper-pagination-bullet-active': index === activeIndex }"
          @click="goTo(index)"
        />
      </div>
      <div ref="prevButton" class="swiper-button-prev" />
      <div ref="nextButton" class="swiper-button-next" />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '~/assets/less/variable.less';

.image-carousel {
  width: 100%;
}
.swiper {
  z-index: 0;
  width: 100%;
  padding-bottom: 30px;
}
.swiper-wrapper {
  align-items: center;
}
.swiper-slide {
  width: var(--slide-width);
  transition: 300ms;
  transform: scale(0.8);
  opacity: 0.8;
}
.swiper-img {
  width: 100%;
}
.swiper-pagination {
  bottom: 0;
  z-index: 100;
  .swiper-pagination-bullet {
    width: 25px;
    height: 10px;
    border-radius: 5px;
  }
  .swiper-pagination-bullet-active {
    background: @primary-color;
  }
}
.swiper-button-prev,
.swiper-button-next {
  width: 20px;
  height: 30px;
  margin-top: -15px;
  background: no-repeat center / 100% 100%;
  &::after {
    content: none;
  }
  :deep(.swiper-navigation-icon) {
    display: none;
  }
}
.swiper-button-prev {
  left: 10px;
  background-image: url('~/assets/image/pre.png');
}
.swiper-button-next {
  right: 10px;
  background-image: url('~/assets/image/next.png');
}
</style>
