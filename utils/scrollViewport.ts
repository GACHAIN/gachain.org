// 全站滚动发生在布局的 OverlayScrollbars 视口内而非 window；
// 布局初始化时给视口加上此类名，路由滚动、WOW 动画、返回顶部均以它为目标
export const SCROLL_VIEWPORT_CLASS = 'global-viewport'

export function getScrollViewport(): HTMLElement | null {
  return import.meta.client ? document.querySelector<HTMLElement>(`.${SCROLL_VIEWPORT_CLASS}`) : null
}
