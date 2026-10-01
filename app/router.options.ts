import type { RouterConfig } from '@nuxt/schema'
import { START_LOCATION } from 'vue-router'

// 页面在布局的滚动视口内滚动，需自行处理导航滚动：
// 切换页面后回到顶部（替代旧 middleware/router.js）；带 ?scroll=<y> 时平滑滚动到该位置（替代旧布局的 $route 监听）
export default <RouterConfig>{
  linkActiveClass: 'nav-active-link',
  scrollBehavior(to, from) {
    if (from === START_LOCATION) return false
    const top = Number(to.query.scroll) || 0
    const scroll = () => getScrollViewport()?.scrollTo({ top, behavior: top ? 'smooth' : 'auto' })
    if (to.path === from.path) {
      scroll()
      return false
    }
    // 等新页面渲染完成（out-in 过渡下旧页已离场）再滚动
    const nuxtApp = useNuxtApp()
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce('page:finish', () => {
        requestAnimationFrame(() => {
          scroll()
          resolve(false)
        })
      })
    })
  },
}
