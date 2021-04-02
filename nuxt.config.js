/*
 * @Author: abc
 * @Date: 2020-12-31 11:36:48
 * @LastEditors: abc
 * @LastEditTime: 2021-04-02 19:22:21
 * @Description:nuxt config
 */
// eslint-disable-next-line nuxt/no-cjs-in-config
const path = require("path");
let pattern = false;
const plugins = [
  [
    "import",
    {
      libraryName: "ant-design-vue",
      libraryDirectory: "es",
      style: true
    }
  ]
];
// console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV !== "production") {
  pattern = true;
} else {
  plugins.push("transform-remove-console");
  pattern = false;
}
console.log(pattern);
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "智乾区块链 | 政务链 | 全行业高效自主区块链底层架构",
    meta: [
      { charset: "utf-8" },
      // 设置过期时间设置0为直接过期并清除缓存
      {
        hid: "Expires",
        "http-equiv": "Expires",
        content: "0"
      },
      // 设置不缓存页面
      {
        hid: "Pragma",
        "http-equiv": "Pragma",
        content: "no-cache"
      },
      // 设置不修改消息存储
      {
        hid: "Cache-Control",
        "http-equiv": "Cache-Control",
        // content: "no-cache, no-store, must-revalidate"
        content: "no-cache"
      },
      {
        hid: "ie",
        "http-equiv": "X-UA-Compatible",
        content: "IE=11; IE=10; IE=9; IE=8; IE=EDGE"
      },
      {
        hid: "edge",
        "http-equiv": "X-UA-Compatible",
        content: "IE=edge,chrome=1"
      },
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0"
      },
      {
        hid: "description",
        name: "description",
        content:
          "GAchain是政务服务区块链平台，可将大多数类型的政府部门机构、事业单位、社会活动等的业务转移到区块链中，所有业务由智能法律和智能合约驱动。"
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "区块链,智乾区块链,政务链,GACHAIN,区块链即政务,政务区块链,电子政务,区块链政务,区块链,blockchain,自主区块链"
      },
      {
        hid: "og:description",
        name: "og:description",
        content:
          "GAchain是政务服务区块链平台，可将大多数类型的政府部门机构、事业单位、社会活动等的业务转移到区块链中，所有业务由智能法律和智能合约驱动。"
      },
      /*  {
        hid: "og:type",
        name: "og:type",
        content: ""
      }, */
      {
        hid: "og:title",
        name: "og:title",
        content: "智乾区块链 | 政务链 | 全行业高效自主区块链底层架构"
      },
      {
        hid: "og:site_name",
        name: "og:site_name",
        content: "智乾区块链 | 政务链 | 全行业高效自主区块链底层架构"
      },
      {
        hid: "apple-mobile-web-app-title",
        name: "apple-mobile-web-app-title",
        content: "智乾区块链 | 政务链 | 全行业高效自主区块链底层架构"
      },
      {
        hid: "mobile-web-app-capable",
        name: "mobile-web-app-capable",
        content: "智乾区块链 | 政务链 | 全行业高效自主区块链底层架构"
      },
      {
        hid: "og:url",
        name: "og:url",
        content: "http://gachain.org"
      },
      {
        hid: "url",
        name: "url",
        content: "http://gachain.org"
      },
      {
        hid: "shenma-site-verification",
        name: "shenma-site-verification",
        content: "402ffef735e5fdc4d7f8d87c8571b7c9_1617362421"
      }
      /* {
        hid: "twitter:description",
        name: "twitter:description",
        content: "A Decentralized Blockchain Infrastructural Network"
      },
      {
        hid: "twitter:site",
        name: "twitter:site",
        content: ""
      },
      {
        hid: "twitter:creator",
        name: "twitter:creator",
        content: ""
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: ""
      } */
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", type: "text/css", href: "/animate/animate.min.css" },
      {
        rel: "stylesheet",
        href: "/css/font.css"
      }
    ],
    script: [
      { src: "https://hm.baidu.com/hm.js?d28e5324af5934973a469bbfa5501c42" }
    ]
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "@/assets/less/index.less",
    "video.js/dist/video-js.css",
    "vue-video-player/src/custom-theme.css",
    "vue-video-player/node_modules/video.js/dist/video-js.css"
  ],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "@/plugins/antd-ui",
    "@/plugins/vuescroll",
    "@/plugins/i18n.js",
    "@/plugins/http.js",
    "@/plugins/mixins.js",
    "@/plugins/baidu.js",
    { src: "@/plugins/video.js", ssr: false },
    { src: "@/plugins/swiper.js", ssr: false }
    // { src: "@/plugins/analytics.js", ssr: false }
  ],
  dev: pattern,
  router: {
    middleware: ["i18n", "router"],
    linkActiveClass: "nav-active-link"
    /* scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 };
    } */
  },
  pageTransition: {
    name: "page",
    mode: "out-in",
    beforeEnter(el) {
      // console.log("Before enter...");
    }
  },
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  loading: {
    color: "#c4171d",
    height: "2px"
  },
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/stylelint
    "@nuxtjs/stylelint-module",
    "@aceforth/nuxt-optimized-images"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "@nuxtjs/proxy",
    // https://go.nuxtjs.dev/content
    "@nuxt/content"
  ],
  optimizedImages: {
    optimizeImages: true
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true, // 表示开启代理
    prefix: "/api", // 表示给请求url加个前缀 /api
    retry: { retries: 3 },
    credentials: true // 表示跨域时是否需要凭证
  },
  proxy: {
    "/api": {
      // 这个网站是开源的可以请求到数据的
      target: "http://129.226.141.90:9033/", // 开发环境
      changeOrigin: true, // 是否跨域
      pathRewrite: {
        "^/api/*": "" // 把/api替换成///这里理解成用‘/api’代替target里面的地址，组件中我们调接口时直接用/api代替
        // 比如我要调用'http://0.0:300/user/add'，直接写‘/api/user/add’即可 代理后地址栏显示/
      }
    }
  },
  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},
  vendor: ["image-webpack-loader"],
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // 开启打包分析
    /*  analyze: true,
    assetFilter(assetFilename) {
      return assetFilename.endsWith(".js");
    }, */
    cssSourceMap: pattern,
    // cache: false,
    loaders: {
      less: {
        lessOptions: {
          modifyVars: {
            "primary-color": "#c4171d"
          },
          javascriptEnabled: true
        }
      }
    },
    transpile: [/ant-design-vue/],
    extractCSS: !pattern, // { allChunks: !pattern },
    quiet: false,
    hotMiddleware: {
      quiet: true,
      client: {
        // overlay: false
        noInfo: true
      }
    },
    babel: {
      plugins
    },
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000
      }
    },
    //
    filenames: {
      app: ({ isDev }) => (isDev ? "[name].js" : "[chunkhash].js"),
      chunk: ({ isDev }) => (isDev ? "[name].js" : "[id].[name].js"),
      img: ({ isDev }) => (isDev ? "[path][name].[ext]" : "img/[hash:7].[ext]"),
      font: ({ isDev }) =>
        isDev ? "[path][name].[ext]" : "fonts/[hash:7].[ext]",
      video: ({ isDev }) =>
        isDev ? "[path][name].[ext]" : "videos/[hash:7].[ext]"
    },
    extend(config, ctx) {
      //
      if (ctx.isClient) {
        config.devtool = pattern ? "eval-source-map" : "none";
      }
      //
      if (ctx.isServer) {
        config.devtool = pattern ? "eval-source-map" : "none";
      }
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
        config.resolve.alias["@ant-design/icons/lib/dist$"] = path.resolve(
          __dirname,
          "./plugins/icons.js"
        );
      }
    }
  }
};
