# GAChain 官网（Nuxt 3 / Nitro）生产镜像。多阶段构建，产物为 .output
# 构建阶段：Node 22（替代旧 Nuxt 2 的 node:16）
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# 运行阶段：仅携带 Nitro 自包含产物 .output
FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
# 监听端口与宿主 compose 映射一致（127.0.0.1:8081）
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=8081
COPY --from=build /app/.output ./.output
EXPOSE 8081
CMD ["node", ".output/server/index.mjs"]
