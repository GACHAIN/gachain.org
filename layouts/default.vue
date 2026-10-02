<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue'
import type { OverlayScrollbars, PartialOptions } from 'overlayscrollbars'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import zhTW from 'ant-design-vue/es/locale/zh_TW'
import enGB from 'ant-design-vue/es/locale/en_GB'
// wowjs 为旧式全局脚本（顶层 this.WOW = ...），打包成 ESM 后 this 为 undefined，故以经典 <script> 加载
import wowScriptUrl from 'wowjs/dist/wow.min.js?url'

// <html lang> 跟随当前语言（zh-CN / en-US / zh-TW）；放在布局中以便错误页同样生效
const localeHead = useLocaleHead()
useHead(() => ({ htmlAttrs: { lang: localeHead.value.htmlAttrs.lang } }))

// ant-design-vue 组件文案随站点语言切换
const antLocales = { zh: zhCN, en: enGB, tw: zhTW }
const { locale } = useI18n()
const antLocale = computed(() => antLocales[locale.value as keyof typeof antLocales] ?? zhCN)
// antd 4 会给 a-row / a-col / a-layout 等逐个写入 font-family，须在主题里统一为旧站字体
const antTheme = {
  token: { colorPrimary: '#c4171d', fontFamily: "'Noto Sans SC', 'Microsoft YaHei', sans-serif, serif" },
}

// 全站滚动容器：滚动条仅在滚动时显示（沿用旧 vuescroll 配置）
const scrollOptions: PartialOptions = {
  overflow: { x: 'hidden' },
  scrollbars: { autoHide: 'scroll', theme: 'os-theme-dark' },
}

const viewport = shallowRef<HTMLElement | null>(null)
const header = useTemplateRef<ComponentPublicInstance>('header')
const isFixed = ref(false)
const isInUp = ref(false)

// 页面滚过头部后头部吸顶并下滑入场，回到顶部时上滑复位
function onScroll() {
  const headerEl = header.value?.$el as HTMLElement | undefined
  if (!viewport.value || !headerEl) return
  const { scrollTop } = viewport.value
  isFixed.value = scrollTop > headerEl.offsetTop
  isInUp.value = scrollTop === headerEl.offsetTop
}

async function onInitialized(instance: OverlayScrollbars) {
  const el = instance.elements().viewport
  el.classList.add(SCROLL_VIEWPORT_CLASS)
  viewport.value = el

  // WOW 滚动入场动画，需监听滚动视口；live 模式使后续路由渲染的元素同样生效
  await loadScript(wowScriptUrl)
  new window.WOW!({
    boxClass: 'wow',
    animateClass: 'animated',
    scrollContainer: `.${SCROLL_VIEWPORT_CLASS}`,
    offset: 0,
    mobile: true,
    live: true,
  }).init()
}

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = () => resolve()
    script.onerror = reject
    document.head.appendChild(script)
  })
}

const scrollEvents = { initialized: onInitialized, scroll: onScroll }
const getScrollTarget = () => viewport.value ?? window
</script>

<template>
  <OverlayScrollbarsComponent class="global" :options="scrollOptions" :events="scrollEvents" style="height: 100vh">
    <a-config-provider :locale="antLocale" :theme="antTheme">
      <a-layout>
        <a-layout-header
          ref="header"
          class="animated"
          :class="{ 'global-fixed': isFixed, slideInDown: isFixed, slideInUp: isInUp }"
        >
          <a-row type="flex" justify="center">
            <a-col :lg="16" :xs="24">
              <PublicHeader />
            </a-col>
          </a-row>
        </a-layout-header>
        <a-layout-content>
          <slot />
        </a-layout-content>
        <a-layout-footer>
          <PublicFooter />
        </a-layout-footer>
      </a-layout>
      <a-back-top v-if="viewport" :target="getScrollTarget" :visibility-height="10" />
    </a-config-provider>
  </OverlayScrollbarsComponent>
</template>
