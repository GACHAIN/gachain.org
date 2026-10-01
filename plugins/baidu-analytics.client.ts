// 百度统计：首屏 PV 由 hm.js 自动上报，此处只补报客户端路由切换（替代旧 plugins/baidu.js）
declare global {
  interface Window {
    _hmt?: unknown[]
  }
}

export default defineNuxtPlugin(() => {
  useRouter().afterEach((to, from) => {
    if (!from.matched.length) return
    window._hmt = window._hmt || []
    window._hmt.push(['_trackPageview', to.fullPath])
  })
})
