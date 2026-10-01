# 构建阶段：Nuxt 2 + webpack 4 需在 Node 16 及以下构建
FROM node:16-bookworm AS builder

# image-webpack-loader（mozjpeg / gifsicle / optipng / pngquant）无预编译包时需要本地编译
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        autoconf automake libtool nasm pkg-config build-essential libpng-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /src

ENV HUSKY_SKIP_INSTALL=1

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build && npm prune --production

# 运行阶段：生产依赖均为纯 JS，可运行在新版 Node 与多架构上
FROM node:24-alpine

WORKDIR /app

COPY --from=builder --chown=node:node /src/package.json /src/nuxt.config.js ./
COPY --from=builder --chown=node:node /src/.nuxt ./.nuxt
COPY --from=builder --chown=node:node /src/node_modules ./node_modules
COPY --from=builder --chown=node:node /src/static ./static
COPY --from=builder --chown=node:node /src/content ./content

ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=8081 \
    API_TARGET=http://backend:9033/

USER node

EXPOSE 8081

HEALTHCHECK --interval=30s --timeout=5s --start-period=30s --retries=3 \
    CMD wget -q -O /dev/null http://127.0.0.1:8081/ || exit 1

CMD ["node", "node_modules/nuxt/bin/nuxt.js", "start"]
