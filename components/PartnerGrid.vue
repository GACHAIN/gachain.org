<script setup lang="ts">
import { LeftOutlined, RightOutlined } from '@ant-design/icons-vue'

// 桌面端“合作伙伴”分页网格：按容器宽度每 200px 放一个 logo，放不下时左右箭头翻页
const ITEM_WIDTH = 200

const container = useTemplateRef<HTMLElement>('container')
const { width } = useElementSize(container)

const pageSize = computed(() => Math.max(1, Math.floor(width.value / ITEM_WIDTH)))
const pageCount = computed(() => Math.ceil(partnerLogos.length / pageSize.value))
const page = ref(1)
const visibleLogos = computed(() =>
  partnerLogos.slice((page.value - 1) * pageSize.value, page.value * pageSize.value),
)

// 容器变宽导致总页数减少时，把当前页收回到最后一页
watch(pageCount, (count) => {
  if (page.value > count) page.value = count
})

function goPrev() {
  if (page.value > 1) page.value -= 1
}

function goNext() {
  if (page.value < pageCount.value) page.value += 1
}
</script>

<template>
  <div ref="container" class="home-sixth-box">
    <template v-if="pageCount > 1">
      <LeftOutlined class="home-sixth-box-left" :class="{ disabled: page === 1 }" @click="goPrev" />
      <RightOutlined
        class="home-sixth-box-right"
        :class="{ disabled: page === pageCount }"
        @click="goNext"
      />
    </template>
    <div v-for="logo in visibleLogos" :key="logo" class="home-sixth-box-item">
      <img :src="logo" alt="partner">
    </div>
  </div>
</template>
