import type { H3Event } from 'h3'

// 后端地址在运行时读取（compose 注入 API_TARGET=http://backend:9033/），本地开发默认 localhost:9033。
// 不放入 runtimeConfig：其默认值在构建时求值，且运行时只认 NUXT_ 前缀变量
function backendBase() {
  return (process.env.API_TARGET || 'http://localhost:9033').replace(/\/$/, '')
}

// 把当前请求原样（含查询串）代理到后端 path
export function proxyToBackend(event: H3Event, path: string) {
  const { search } = getRequestURL(event)
  return proxyRequest(event, `${backendBase()}/${path}${search}`)
}
