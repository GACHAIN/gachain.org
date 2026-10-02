<script setup lang="ts">
import { CloseOutlined, DownOutlined, GlobalOutlined } from '@ant-design/icons-vue'
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

// 语言切换：链接到当前页面的其他语言版本（保留路径与查询参数），语言名称用各自的书写形式
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const languages = [
  { code: 'zh', hreflang: 'zh-CN', label: '简体' },
  { code: 'tw', hreflang: 'zh-TW', label: '繁體' },
  { code: 'en', hreflang: 'en-US', label: 'English' },
] as const
const currentLanguage = computed(() => languages.find((item) => item.code === locale.value) ?? languages[0])

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
      <div class="header-right">
        <nav class="header-nav">
          <NuxtLink v-for="item in links" :key="item.path" :to="localePath(item.path)">
            {{ $t(item.label) }}
          </NuxtLink>
        </nav>
        <!-- 纯 CSS 下拉（悬停 / 获得焦点时展开），各语言链接始终在 HTML 中，便于搜索引擎抓取 -->
        <div class="header-lang" tabindex="0">
          <GlobalOutlined />
          <span class="header-lang-current">{{ currentLanguage.label }}</span>
          <DownOutlined class="header-lang-arrow" />
          <div class="header-lang-menu">
            <NuxtLink
              v-for="item in languages"
              :key="item.code"
              :to="switchLocalePath(item.code)"
              :class="{ active: item.code === locale }"
              :hreflang="item.hreflang"
            >
              {{ item.label }}
            </NuxtLink>
          </div>
        </div>
      </div>
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
          <div class="header-aside-lang">
            <NuxtLink
              v-for="item in languages"
              :key="item.code"
              :to="switchLocalePath(item.code)"
              :class="{ active: item.code === locale }"
              :hreflang="item.hreflang"
            >
              {{ item.label }}
            </NuxtLink>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>
