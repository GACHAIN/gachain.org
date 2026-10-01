// 同源代理：/api/** → 后端，去掉 /api 前缀（等价旧 @nuxtjs/proxy 的 pathRewrite）
// 后端地址运行时可配（compose 注入 API_TARGET=http://backend:9033/）
export default defineEventHandler((event) => {
  const target = useRuntimeConfig(event).apiTarget.replace(/\/$/, '')
  const path = getRouterParam(event, 'path') ?? ''
  const { search } = getRequestURL(event)
  return proxyRequest(event, `${target}/${path}${search}`)
})
