import { message } from 'ant-design-vue'

// 替代旧 plugins/http.js（axios 拦截器）：JSON 请求、直接返回响应体、失败时客户端提示
// 服务端渲染时 '/api' 由 Nitro 内部直达 server/routes/api 代理，不经网络回环
export default defineNuxtPlugin(() => {
  const api = $fetch.create({
    baseURL: '/api',
    headers: { Accept: 'application/json' },
    onResponseError() {
      if (import.meta.client) message.error('请求失败，请稍后重试')
    },
  })

  return { provide: { api } }
})
