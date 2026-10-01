// 同源代理：/uploads/** → 后端（保留 /uploads 前缀），等价旧 @nuxtjs/proxy 的 /uploads 规则
export default defineEventHandler((event) => {
  const target = useRuntimeConfig(event).apiTarget.replace(/\/$/, '')
  const path = getRouterParam(event, 'path') ?? ''
  const { search } = getRequestURL(event)
  return proxyRequest(event, `${target}/uploads/${path}${search}`)
})
