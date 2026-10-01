import type { MessageResolver, PathValue } from 'vue-i18n'

// 语言包沿用旧站的扁平 key（如 "home.gochain"，且与 "home" 并存），
// 先按完整 key 取值，取不到再按点路径解析
const flatKeyResolver: MessageResolver = (obj, path) => {
  if (!obj || typeof obj !== 'object') return null
  const record = obj as Record<string, unknown>
  if (path in record) return record[path] as PathValue
  let current: unknown = record
  for (const key of path.split('.')) {
    if (!current || typeof current !== 'object') return null
    current = (current as Record<string, unknown>)[key]
  }
  return (current ?? null) as PathValue
}

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: 'zh',
  messageResolver: flatKeyResolver,
  missingWarn: false,
  fallbackWarn: false,
}))
