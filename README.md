# gachain.org

GAChain 官网前端，Nuxt 3（Vue 3）服务端渲染，中文 / English / 繁體中文三语（`/`、`/en`、`/tw`）。

## 技术栈

- Nuxt 3 + Vue 3 + TypeScript，Node 22
- @nuxtjs/i18n、ant-design-vue 4、swiper 11、overlayscrollbars、wowjs、@vueuse
- 数据来自 [gachain.org-backend](../gachain.org-backend)：浏览器与服务端均请求同源 `/api/**`、`/uploads/**`，由 Nitro 代理到后端

## 本地开发

```bash
npm ci
npm run dev          # http://localhost:3000，后端默认 http://localhost:9033
```

后端地址由环境变量 `API_TARGET` 指定（运行时读取），如：

```bash
API_TARGET=http://127.0.0.1:9033/ npm run dev
```

## 检查与构建

```bash
npx nuxi typecheck
npm run lint
npm run build        # 产物 .output/
node .output/server/index.mjs   # 本地预览，PORT / HOST 可配
```

## 部署

镜像由 [gachain.org-deploy](../gachain.org-deploy) 的 `docker-compose.yml` 构建（`context: ../gachain.org`），
容器监听 8081，compose 注入 `API_TARGET=http://backend:9033/`。镜像内置 `HEALTHCHECK`。

## 目录

| 目录 | 说明 |
| --- | --- |
| `pages/` | 首页、产品、解决方案、技术开源、关于、新闻详情 |
| `components/` | 页头页脚、轮播、视频、新闻列表、时间轴等 |
| `layouts/default.vue` | 全局滚动视口、吸顶头部、回到顶部、antd 语言与主题 |
| `i18n/` | 语言包与 vue-i18n 配置 |
| `server/` | `/api`、`/uploads` 代理 |
| `assets/less/` | 全站样式 |
| `docs/plans/` | 迁移与改造计划 |
