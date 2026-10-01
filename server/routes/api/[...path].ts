// 同源代理：/api/** → 后端，去掉 /api 前缀（等价旧 @nuxtjs/proxy 的 pathRewrite）
export default defineEventHandler((event) => proxyToBackend(event, getRouterParam(event, 'path') ?? ''))
