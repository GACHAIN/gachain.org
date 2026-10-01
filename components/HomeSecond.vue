<script setup lang="ts">
import second1 from '~/assets/image/second-1.png'
import second2 from '~/assets/image/second-2.png'
import second3 from '~/assets/image/second-3.png'
import second4 from '~/assets/image/second-4.png'
import second5 from '~/assets/image/second-5.png'
import second6 from '~/assets/image/second-6.png'
import second7 from '~/assets/image/second-7.png'
import second8 from '~/assets/image/second-8.png'

// 首页第一部分第二段：八项核心能力
const items = [
  { id: 1, img: second1, title: 'home.manage', contents: ['home.idea', 'home.idea1'] },
  { id: 2, img: second2, title: 'home.manage2', contents: ['home.idea2', 'home.idea21'] },
  { id: 3, img: second3, title: 'home.manage3', contents: ['home.idea3', 'home.idea31', 'home.idea32'] },
  { id: 4, img: second4, title: 'home.manage4', contents: ['home.idea4', 'home.idea41', 'home.idea42'] },
  { id: 5, img: second5, title: 'home.manage5', contents: ['home.idea5', 'home.idea51'] },
  { id: 6, img: second6, title: 'home.manage6', contents: ['home.idea6', 'home.idea61'] },
  { id: 7, img: second7, title: 'home.manage7', contents: ['home.idea7', 'home.idea71'] },
  { id: 8, img: second8, title: 'home.manage8', contents: ['home.idea8', 'home.idea81'] },
]
</script>

<template>
  <a-row type="flex" justify="space-around">
    <a-col v-for="item in items" :key="item.id" :lg="5" :xs="22" class="home-back-second-item">
      <div class="home-back-second-img">
        <img :src="item.img" :alt="`second-${item.id}`" >
      </div>
      <div class="title-h3__black" style="text-align: left; padding-top: 15px">
        {{ $t(item.title) }}
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -- 文案含 <br/>，来自本地语言包 -->
      <div v-for="key in item.contents" :key="key" class="home-back-second-content" v-html="$t(key)" />
    </a-col>
  </a-row>
</template>
