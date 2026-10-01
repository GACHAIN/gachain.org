<script setup lang="ts">
import { CloseOutlined } from '@ant-design/icons-vue'
import logoText from '~/assets/image/logo-text.png'
import navIcon from '~/assets/image/nav.png'

// 站点语言由 URL 前缀决定（/、/en、/tw），导航链接保持当前语言
const localePath = useLocalePath()
const links = [
  { path: '/', label: 'home' },
  { path: '/product', label: 'product' },
  { path: '/solution', label: 'solution' },
  { path: '/service', label: 'service' },
  { path: '/about', label: 'about' },
]

const isAside = ref(false)
function toggleAside() {
  isAside.value = !isAside.value
}
</script>

<template>
  <div class="header">
    <NuxtLink class="header-logo" :to="localePath('/')">
      <img :src="logoText" alt="logo-text" >
    </NuxtLink>
    <!-- computer -->
    <div class="computer">
      <nav class="header-nav computer">
        <NuxtLink v-for="item in links" :key="item.path" :to="localePath(item.path)">
          {{ $t(item.label) }}
        </NuxtLink>
      </nav>
    </div>
    <!-- mobile -->
    <div class="mobile">
      <div class="header-slide" @click.stop="toggleAside">
        <img :src="navIcon" alt="nav" >
      </div>
      <aside class="header-aside" :class="{ 'header-width': isAside }" @click.stop="toggleAside">
        <div v-show="isAside" class="header-aside-content">
          <div class="header-aside-top">
            <CloseOutlined @click.stop="toggleAside" />
          </div>
          <div class="header-aside-link">
            <NuxtLink v-for="item in links" :key="item.path" :to="localePath(item.path)">
              {{ $t(item.label) }}
            </NuxtLink>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>
