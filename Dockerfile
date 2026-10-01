# GAChain 官网（Nuxt 3 / Nitro）生产镜像。多阶段构建，产物为 .output
# 构建阶段：Node 22
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# 运行阶段：仅携带 Nitro 自包含产物 .output，以非 root 用户运行
FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
# 监听端口与宿主 compose 映射一致（127.0.0.1:8081）
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=8081
# 后端地址运行时读取，compose 注入 API_TARGET=http://backend:9033/
COPY --from=build --chown=node:node /app/.output ./.output
USER node
EXPOSE 8081
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:8081/ || exit 1
CMD ["node", ".output/server/index.mjs"]
