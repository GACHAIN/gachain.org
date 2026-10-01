// 替代旧全局 mixin 的 isMobile：页面宽度 ≤ 992px 视为移动端
// 服务端与首次水合阶段一律按移动端渲染（与旧实现一致），挂载后按实际宽度更新，避免水合不一致
export function useIsMobile() {
  const { width } = useWindowSize({ includeScrollbar: false })
  const mounted = useMounted()
  return computed(() => !mounted.value || width.value <= 992)
}
