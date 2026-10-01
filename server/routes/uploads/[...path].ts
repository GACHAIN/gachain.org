// 同源代理：/uploads/** → 后端（保留 /uploads 前缀），等价旧 @nuxtjs/proxy 的 /uploads 规则
export default defineEventHandler((event) =>
  proxyToBackend(event, `uploads/${getRouterParam(event, 'path') ?? ''}`),
)
