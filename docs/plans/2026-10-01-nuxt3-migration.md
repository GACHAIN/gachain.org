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
- 轮播：**`swiper` v11 核心 API + 自有 Vue 组件**，替代 `vue-awesome-swiper` v3（swiper 11 发布包已不含 `swiper/vue`）。
- 视频：**原生 `<video>` 组件 `components/IntroVideo.vue`，不引入 video.js**。阶段 4 核实：旧首页的 `v-video-player` 用法已整段注释，现网实际播放的是原生 `<video>` + 封面层，`vue-video-player`/`video.js` 为死依赖；原“video.js 8 + 自有组件”方案随之撤销。
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
| `vue-video-player@5` + `video.js` + `plugins/video.js` | 无（原生 `<video>`，`IntroVideo.vue`） | 删除 |
| `vuescroll@4` + `plugins/vuescroll.js` | `overlayscrollbars-vue` 或原生滚动 | 替换 |
| `vue-awesome-swiper@3` + `plugins/swiper.js` | `swiper@^11`（核心 API，自有组件） | 替换 |
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
5. **轮播**：`components/swiperCarousel.vue`、`swiperFirend.vue`、`PublicCarousel.vue` 及 `pages/index.vue`、`product.vue`、`about.vue` 的 swiper 用法改为自有组件 `ImageCarousel.vue`（层叠轮播，`wide` 属性区分 60%/30% 版式，移动端自动 80%）与 `PartnerSwiper.vue`（移动端合作伙伴），内部直接 `new Swiper()`，删除 `plugins/swiper.js`。
6. **视频**：`pages/index.vue` 的原生 `<video>` + 封面层抽成 `IntroVideo.vue`（暴露 `play()` 供“播放介绍视频”按钮调用，16:9 用 CSS `aspect-ratio`），删除 `plugins/video.js`、`lang/video-zh-cn.json` 与 `home.less` 中的 `.vjs-*` 样式。
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
- `lang/`：`en-us.json`、`zh-cn.json`、`zh-tw.json` 移至 `i18n/locales/` 交给 `@nuxtjs/i18n`；`video-zh-cn.json` 无引用，删除。
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
   - 已完成：`ImageCarousel`（合并旧 `PublicCarousel` 与 `swiperCarousel`）、`PartnerSwiper`（旧 `swiperFirend`，两屏用 `rewind`）、`IntroVideo`；合作伙伴 logo 列表见 `utils/partners.ts`；swiper 样式在 `nuxt.config.ts` 的 `css` 中全局引入。
   - swiper 11 的 loop 不再自动复制幻灯片，`ImageCarousel` 在图片不足 9 张时重复渲染，分页圆点改为组件自绘，仍按原图数量显示。
   - 移除 `video.js` 依赖。
5. **阶段 5 — 页面**：六个页面逐页迁移（`useAsyncData`、`useHead`、`$t`、ant 组件核对）。
   - 已完成：`index`、`product`、`solution`、`service`、`about`、`news/[id]`；各页 `head()` 改为 `useSeoMeta`，文案与旧站一致。
   - `news/[id]`：`definePageMeta.validate` 校验数字 id；正文与上一条/下一条（`/newspre`、`/newsnext` 取首条）在同一 `useAsyncData` 内获取，新闻不存在（`code !== 0` 或 `data` 为空）时抛 404。
   - `about` 新闻分页改为 `useAsyncData` + `watch` 页码，`a-pagination` 不再包 `ClientOnly`，首屏即服务端渲染。
   - 旧 `pages/news/index.vue` 为空页面，不再保留，`/news` 返回 404。
   - 首页桌面端合作伙伴分页网格抽为 `PartnerGrid`（按容器宽度每 200px 一个 logo，翻页按钮禁用态按总页数计算）；`IntroVideo` 增加 `src`/`poster` 属性，服务页复用以播放 `show.MP4`。
   - 移动端与桌面端仅顺序不同的区块改用 `a-col` 的 `order`，不再重复渲染两份。
   - 页面内 `javascript:;` 空链接改为 `span`/`button`，对应样式选择器同步调整。
6. **阶段 6 — 清理与构建**：删除废弃 plugins/store/middleware/content，重写 `package.json`、`Dockerfile`、`.dockerignore`。
   - 修复：后端地址原放在 `runtimeConfig`，其默认值在构建时求值，且运行时只认 `NUXT_API_TARGET`，compose 注入的 `API_TARGET` 不生效（容器内会代理到自身 localhost）。改为 `server/utils/backend.ts` 运行时读取 `process.env.API_TARGET`，compose 契约不变。
   - 移除未使用的 `@nuxt/image`（同时去掉随产物打包的平台相关 sharp 二进制，`.output` 由 27.8 MB 降至 7.38 MB）。
   - `shenma-site-verification.txt` 移入 `public/`，原先在仓库根目录无法被访问。
   - `Dockerfile` 运行阶段以 `node` 用户运行并增加 `HEALTHCHECK`；`README.md` 重写为 Nuxt 3 说明。
   - 删除（经确认）：`_legacy_vue2/` 旧源码、无对应依赖的 `commitlint`/`stylelint`/`prettier` 配置、Nuxt 2 模板 README、未引用的图片资源；代码与锁文件中已无 axios/vuex/vuescroll/vue-awesome-swiper/vue-video-player/video.js/babel-plugin-import 残留。
7. **阶段 7 — 验证**：全站回归 + `npm audit` + 容器构建 + compose 联调。
   - `swiper` 升级至 14.3.0，修复 critical 公告 GHSA-hmx5-qpq5-p643；首页宽轮播（导航、循环、分页点）、移动端合作伙伴轮播、案例轮播回归通过。
   - `nuxt` 移入 devDependencies（运行时只依赖自包含的 `.output`），`npm audit --omit=dev` 为 0，`.output/server/package.json` 审计为 0。
   - `@nuxtjs/i18n` 升级至 10.6.0（vue-i18n 11），移除 v10 已不支持的 `bundle.optimizeTranslationDirective`；扁平 key 解析、`v-html` 富文本文案、三语路由与 `<html lang>`、ant-design-vue 语言包切换回归通过，控制台无报错。
   - 全量 `npm audit` 余 7 个 high，均来自 `node-forge`（GHSA-86w9-cpqp-85rv，上游无修复版本），路径为 nuxt → @nuxt/cli / nitropack → listhen（仅开发服务器 HTTPS 证书），不进入 `.output` 与镜像。
   - `en-us.json` 沿用旧站，只含导航 5 个 key，其余文案回退中文，与现网一致；补全英文文案属内容工作，不在本次迁移范围。
   - 本机 `docker build` 成功（arm64，352 MB，`node` 用户，含 HEALTHCHECK）；容器运行与 compose 联调在服务器（amd64）上进行。

## 8. 验收标准

- [x] `node:22` 容器内 `nuxt build` 成功，产出 `.output/`。
- [ ] （服务器执行）`docker compose up -d --build website` 后容器 healthy，`http://localhost:8081` 200。
- [x] 六页 + 新闻详情逐页视觉/功能与现网一致：轮播、视频、滚动动画、响应式（移动端）、中英繁三语切换、新闻列表与详情（`/newsfind`、`/newspre`、`/newsnext`、`/events`）、图片（`/uploads`）。
- [x] `npm audit --omit=dev` 的 critical / high = **0**。
- [x] 代码中无 `@nuxtjs/axios`、`vuex`、`vuescroll`、`vue-awesome-swiper`、`vue-video-player`、`vue-i18n@8`、`babel-plugin-import` 等残留。
- [x] 后端 API、`docker-compose.yml`、nginx 配置未改动。

## 风险与回滚

- **ant-design-vue 1→4 是最大工作量/风险点**（组件 prop、事件、样式变更）；逐组件对照官方迁移指南，必要时用 `a-config-provider` 统一主题。
- **vuescroll 无替代等价品**：若 `overlayscrollbars` 视觉差异明显，退而用原生滚动 + 自定义滚动条样式。
- **回滚**：迁移在独立分支进行，`main` 保持现 Nuxt 2 可用；部署前不合并。Docker 镜像保留上一个可用 tag，compose 可随时切回。
