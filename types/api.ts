// 后端接口响应结构（gachain.org-backend）
export interface ApiResponse<T> {
  code: number
  data: T
  message: string
}

export interface PagedList<T> {
  total: number
  page: number
  limit: number
  rets: T[]
}

export interface NewsItem {
  id: number
  homeindex: number
  homeenable: number
  title: string
  source: string
  source_url: string
  /** 富文本 HTML，模板以 v-html 渲染 */
  icon: string
  introduction: string
  keywords: string
  date: string
  content?: string
}

export interface EventItem {
  id: number
  info: string
  date: string
}
