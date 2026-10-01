# gachain.org 官网 Nuxt 3 / Vue 3 迁移方案

日期：2026-10-01

## 背景

当前官网是 2021 年的 **Nuxt `2.14.12` + Vue 2** 项目，整条依赖树停滞在 2021：

- Nuxt 2 已于 **2024-06-30 EOL**，不再有任何安全更新。
- `npm audit`（基于现有 `package-lock.json`）报 **272 个漏洞**（24 critical / 93 high / 144 moderate / 11 low），绝大多数集中在 webpack 4 / babel / eslint / jest 等构建链。
- 必须用 **Node 16** 才能构建（webpack 4 + 原生模块），与现代工具链脱节。

`npm audit fix` 在该生态里无效且危险——真正的修复都要 major 升级，会打断 webpack 4 构建。唯一可持续的终态是迁移到受支持的 Nuxt 3 / Vue 3。

## 目标（终态，量化）

| 指标 | 终态目标 |
| --- | --- |
| 框架 | Nuxt 3.x（最新稳定）+ Vue 3.x + Vite，彻底移除 Nuxt 2 / webpack 4 |
| 构建 Node 版本 | Node 22 LTS（不再需要 Node 16 与原生编译链） |
| 生产依赖 `npm audit` 的 critical / high | **0** |
| 已废弃 / Vue2-only 依赖残留 | **0**（逐项替换，见映射表） |
| Vuex | **0**（locale 状态并入 `@nuxtjs/i18n`，删除 `store/`） |
| `@nuxtjs/axios` / `@nuxtjs/proxy` | **0**（改用内置 `$fetch` + nitro `routeRules`/`devProxy`） |
| 功能与视觉 | 与现网一致（见 [验收标准](#8-验收标准)），现有后端 API 与 nginx 配置 **0 改动** |

> 后端 `gachain.org-backend` 的公开 API、`docker-compose.yml` 的服务拓扑、宿主机 nginx 配置均**不随本迁移改变**；官网容器对外端口仍为 `8081`，SSR 仍通过 `API_TARGET` 访问后端。

## 终态技术栈

- **Nuxt 3.x**（Nitro 服务端 + Vite 构建），TypeScript 配置文件 `nuxt.config.ts`。
- **Vue 3**（`<script setup>` + Composition API）。
- 数据获取：内置 **`$fetch` / `useAsyncData` / `useFetch`**（底层 ofetch），不再用 axios。
- i18n：**`@nuxtjs/i18n` v9**（内含 vue-i18n v10），接管 locale 状态与路由。
- UI 组件：**`ant-design-vue` v4**（Vue 3），按需加载用 `unplugin-vue-components` + `AntDesignVueResolver`，替代 `babel-plugin-import`。
- 轮播：**`swiper` v11**（`swiper/vue` 的 `Swiper` / `SwiperSlide`），替代 `vue-awesome-swiper` v3。
- 视频：**`video.js` v8 + 自有 client-only 组件 `components/VideoPlayer.client.vue`**，替代 `vue-video-player` v5（`@videojs-player/vue` 仅支持 video.js 7.x 且已停止维护，不采用）。**【已定】**
- 滚动容器：移除 `vuescroll`（无 Vue 3 稳定版），改用 **`overlayscrollbars-vue`**（保留自定义滚动条外观）。**【已定】**
- 滚动动画：**保留 `wowjs`，仅在 client 端初始化**（framework-agnostic，视觉零回归）。**【已定】**
- PWA：**删除**（展示站无需可安装/离线能力，移除 `@nuxtjs/pwa`，不引入 `@vite-pwa/nuxt`）。**【已定】**
- 图片优化：**`@nuxt/image`**，替代 `@aceforth/nuxt-optimized-images` + `image-webpack-loader`。
- 响应式工具：**`@vueuse/core`**（`useWindowSize` 实现 `isMobile`），替代全局 `Vue.mixin`。
- 样式：`less`（Vite 内置支持，仅需装 `less`），保留 `modifyVars` 主题色 `#c4171d`。
- 代码质量：**`@nuxt/eslint`**（ESLint 9 flat config）+ `prettier`；测试改 **`vitest`** + `@vue/test-utils` v2（现无实际用例，低优先）。
- **移除**：`@nuxt/content`（`content/` 仅剩默认 `hello.md`，项目未使用）、`core-js`、`babel-*`、`qs`（`$fetch` 自带查询序列化）。

## 依赖映射表

| 现状（Vue2 / Nuxt2） | 终态（Vue3 / Nuxt3） | 处置 |
| --- | --- | --- |
| `nuxt@2.14` | `nuxt@^3` | 替换核心 |
| `@nuxtjs/axios` + `plugins/http.js` | 内置 `$fetch` + `plugins/api.ts`（拦截器/解包） | 重写数据层 |
| `@nuxtjs/proxy` + `proxy` 配置 | nitro `routeRules` + `$development` `devProxy` | 配置迁移 |
| `@nuxt/content@1` | — | 删除（未使用） |
| `@nuxtjs/pwa` | `@vite-pwa/nuxt` | 替换（如确需 PWA；否则删除） |
| `ant-design-vue@1.7` | `ant-design-vue@^4` | 大改：组件 API 变化 |
| `babel-plugin-import` | `unplugin-vue-components` + `AntDesignVueResolver` | 按需加载 |
| `vue-i18n@8` + `plugins/i18n.js` + `middleware/i18n.js` | `@nuxtjs/i18n@^9`（vue-i18n 10） | 由模块接管 |
| `vue-video-player@5` + `video.js` + `plugins/video.js` | `video.js@^8` + 自有组件 `VideoPlayer.client.vue` | 替换，client-only |
| `vuescroll@4` + `plugins/vuescroll.js` | `overlayscrollbars-vue` 或原生滚动 | 替换 |
| `vue-awesome-swiper@3` + `plugins/swiper.js` | `swiper@^11`（`swiper/vue`） | 替换 |
| `wowjs` | `wowjs`（client-only）或 `@vueuse/motion` | 保留/可选替换 |
| `vuex`（`store/index.js`） | `@nuxtjs/i18n` 管理 locale | 删除 store |
| `plugins/mixins.js`（全局 mixin） | `composables/useIsMobile.ts`（`@vueuse/core`） | 重写为 composable |
| `@aceforth/nuxt-optimized-images` + `image-webpack-loader` | `@nuxt/image` | 替换 |
| `plugins/baidu.js` / `plugins/gtag.js` | `plugins/*.client.ts` 或 `useHead` 注入脚本 | 迁移 |
| `plugins/icons.js`（ant 图标别名 hack） | ant-design-vue 4 按需图标，删除 hack | 删除 |
| `core-js` / `babel-core` / `babel-*` | — | 删除 |
| `eslint@7` + `@nuxtjs/eslint-config` | `@nuxt/eslint`（ESLint 9） | 替换 |
| `jest` + `vue-jest` | `vitest` + `@vue/test-utils@2` | 替换（低优先） |

## 代码改造要点（按机制）

1. **数据获取**：`plugins/http.js`（`$axios` 拦截器、`return response.data`）改为 `plugins/api.ts`，导出 `$api`（基于 `$fetch.create`，`baseURL: '/api'`，`onResponse` 返回 body，`onResponseError` 用 ant message 提示）。页面里 `asyncData` + `this.$axios.$post(...)` → `const { data } = await useAsyncData(() => $api('/newsfind', { method: 'POST', body }))`。涉及：`pages/about.vue`、`pages/news/_id.vue`、`components/newList.vue`、`components/PublicTime.vue`。
   - 注意后端响应体是 `{code, data, message}`，且 `about.vue` 与其它页面的解包方式不同（`newsfind.data.rets` vs `newsfind.rets`），迁移时统一在 `$api` 层处理。
2. **i18n**：删除 `plugins/i18n.js`、`middleware/i18n.js`、`store` 的 locale 逻辑，改用 `@nuxtjs/i18n` 配置 `locales`（zh/en/tw）+ `lang/*.json`。模板里 `$t(...)` 保持可用（模块注入）。
3. **状态**：`store/index.js` 仅存 locale → 删除整个 `store/`，locale 由 i18n 的 `useI18n().locale` 管理。`PublicHeader.vue`、`layouts/default.vue` 的 `$store` 调用改 `useI18n`。
4. **组件库**：`plugins/antd-ui.js` 全量引入改为 `unplugin-vue-components` 自动按需；模板中 `<a-xxx>` 组件逐个核对 v1→v4 的 prop/事件变更（重点：`a-carousel`、`a-menu`、`a-drawer`、`message`、图标 `@ant-design/icons-vue`）。
5. **轮播**：`components/swiperCarousel.vue`、`swiperFirend.vue`、`PublicCarousel.vue` 及 `pages/index.vue`、`product.vue`、`about.vue` 的 swiper 用法改为 `swiper/vue` 的 `<Swiper>`/`<SwiperSlide>` + modules（`Autoplay`/`Pagination`/`Navigation`），删除 `plugins/swiper.js`。
6. **视频**：`pages/index.vue` + `plugins/video.js` 改用自有组件 `VideoPlayer.client.vue`（直接调用 video.js 8 API），CSS 引入 `video.js/dist/video-js.css`。
7. **滚动**：`layouts/default.vue` 的 vuescroll 容器改为 `overlayscrollbars-vue` 或原生；`middleware/router.js`（路由后置顶）改用 Nuxt3 `app.pageTransition` + 内置 `scrollBehavior`（`app/router.options.ts`）。
8. **响应式 `isMobile`**：`plugins/mixins.js` 的全局 mixin → `composables/useIsMobile.ts`（`const { width } = useWindowSize(); const isMobile = computed(() => width.value <= 992)`）。各组件 `this.isMobile` → `const { isMobile } = useIsMobile()`。
9. **head / SEO**：各页面 `head()` → `useHead(...)` / `useSeoMeta(...)`；全局 head（`nuxt.config.ts` 的 `app.head`）保留 meta、favicon、`font.css`、`animate.min.css`、百度统计脚本、神马站长验证 meta。
10. **代理**：nitro `routeRules`（生产：`/api/**`、`/uploads/**` 代理到 `API_TARGET`，`/api` 前缀剥离）+ `$development.devProxy`，等价替换现 `@nuxtjs/proxy` 行为。
11. **第三方脚本**：`baidu.js`、`gtag.js` 改 `plugins/*.client.ts` 或 `useHead().script`。

## 文件级迁移清单

- `nuxt.config.js` → `nuxt.config.ts`（modules、i18n、image、app.head、routeRules、vite.css.preprocessorOptions.less.modifyVars）。
- `package.json`：按映射表重写 deps/devDeps，scripts 改 Nuxt3（`nuxt dev/build/preview/generate`），删除 husky/lint-staged（如保留则升级到现版本）。
- `pages/`：`index`、`about`、`product`、`service`、`solution`、`news/_id` 六个 `<script setup>` 化；`news/index.vue` 保持空占位（原站即空）。
- `components/`：`homeSecond`、`newList`、`PublicCarousel`、`PublicFooter`、`PublicHeader`、`PublicTime`、`swiperCarousel`、`swiperFirend` 八个迁移（自动导入保留）。
- `layouts/`：`default`、`error` 迁移（vuescroll、wow、`$store`→`useI18n`）。
- `plugins/`：新增 `api.ts`、`baidu-analytics.client.ts`（旧 `gtag.js` 全文已注释、GA 已停用，不迁移）；删除 `antd-ui.js`、`i18n.js`、`http.js`、`mixins.js`、`swiper.js`、`video.js`、`vuescroll.js`、`icons.js`。
- `composables/`：新增 `useIsMobile.ts`、`useApi.ts`。
- `middleware/`：删除 `i18n.js`、`router.js`（能力由 i18n 模块 / router.options 承接）。
- `store/`：整目录删除。
- `lang/`：`en-us.json`、`zh-cn.json`、`zh-tw.json` 交给 `@nuxtjs/i18n`；`video-zh-cn.json` 按引用处理。
- `content/`：删除（含 `hello.md`）。
- `assets/`、`static/`：`static/` → `public/`；`assets/less/index.less` 保留。

## 构建与部署变更

- **`Dockerfile`**：builder 从 `node:16-bookworm` → `node:22-bookworm-slim`（Vite 无需 `autoconf/nasm/libpng` 等原生编译依赖，全部删除）；运行阶段 `node:22-alpine`，复制 `.output/` 而非 `.nuxt/`，启动命令 `node .output/server/index.mjs`。环境变量 `NITRO_PORT=8081`、`NITRO_HOST=0.0.0.0`、`API_TARGET` 保留。
- **`docker-compose.yml`**（在 `gachain.org-deploy`）：`website` 服务无需改动（仍 `context: ../gachain.org`、端口 `8081`、`API_TARGET`）。
- **nginx**：不变。
- **`.dockerignore`**：补充 `.output`、`.nuxt`、`node_modules`、`.git`。

## 分阶段执行计划

> 在前端仓库开 `feat/nuxt3-migration` 分支进行，逐阶段提交，全程以现网视觉为基线对照。

1. **阶段 1 — 脚手架与配置**：新建 Nuxt 3 骨架、`nuxt.config.ts`、模块接入（i18n/image/eslint）、`routeRules` 代理、全局 `app.head`、less 主题色。产出可启动的空壳。
2. **阶段 2 — 数据层与全局**：`plugins/api.ts`、`composables/`、`layouts/default|error`、第三方脚本插件。
3. **阶段 3 — 基础组件**：`Public*`、`homeSecond`、`newList`（含 `$fetch` 改造）。
   - 已完成：`layouts/default.vue`（OverlayScrollbars 滚动视口、头部吸顶动画、`a-back-top`、ConfigProvider 语言与主题色、`useLocaleHead` 设置 `<html lang>`）；根目录 `error.vue`（套用默认布局）；`app/router.options.ts`（`linkActiveClass`、在滚动视口内回顶与 `?scroll=` 定位）；开启 `pageTransition` 淡入淡出。
   - 组件：`PublicHeader`、`PublicFooter`、`PublicTime`，`homeSecond` → `HomeSecond`，`newList` → `NewsList`；接口类型见 `types/api.ts`。
   - wowjs 为顶层 `this.WOW` 的旧式脚本，打包为 ESM 后不可用，改以 `?url` + 经典 `<script>` 在客户端加载，`live: true` 使路由切换后的新元素同样生效。
   - 旧 `PublicHeader` 中 `display:none` 的语言下拉与 localStorage 记忆为不可见死代码，删除；语言完全由 URL 前缀决定。
4. **阶段 4 — 轮播与视频组件**：swiper 三件套 + video 组件。
5. **阶段 5 — 页面**：六个页面逐页迁移（`useAsyncData`、`useHead`、`$t`、ant 组件核对）。
6. **阶段 6 — 清理与构建**：删除废弃 plugins/store/middleware/content，重写 `package.json`、`Dockerfile`、`.dockerignore`。
7. **阶段 7 — 验证**：全站回归 + `npm audit` + 容器构建 + compose 联调。

## 8. 验收标准

- [ ] `node:22` 容器内 `nuxt build` 成功，产出 `.output/`。
- [ ] `docker compose up -d --build website` 后容器 healthy，`http://localhost:8081` 200。
- [ ] 六页 + 新闻详情逐页视觉/功能与现网一致：轮播、视频、滚动动画、响应式（移动端）、中英繁三语切换、新闻列表与详情（`/newsfind`、`/newspre`、`/newsnext`、`/events`）、图片（`/uploads`）。
- [ ] `npm audit --omit=dev` 的 critical / high = **0**。
- [ ] 代码中无 `@nuxtjs/axios`、`vuex`、`vuescroll`、`vue-awesome-swiper`、`vue-video-player`、`vue-i18n@8`、`babel-plugin-import` 等残留。
- [ ] 后端 API、`docker-compose.yml`、nginx 配置未改动。

## 风险与回滚

- **ant-design-vue 1→4 是最大工作量/风险点**（组件 prop、事件、样式变更）；逐组件对照官方迁移指南，必要时用 `a-config-provider` 统一主题。
- **vuescroll 无替代等价品**：若 `overlayscrollbars` 视觉差异明显，退而用原生滚动 + 自定义滚动条样式。
- **回滚**：迁移在独立分支进行，`main` 保持现 Nuxt 2 可用；部署前不合并。Docker 镜像保留上一个可用 tag，compose 可随时切回。
