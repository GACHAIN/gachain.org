import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8585db46 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _2d026aef = () => interopDefault(import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages/news/index" */))
const _09666cbf = () => interopDefault(import('..\\pages\\product.vue' /* webpackChunkName: "pages/product" */))
const _2143d8f6 = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _47de35d9 = () => interopDefault(import('..\\pages\\solution.vue' /* webpackChunkName: "pages/solution" */))
const _8a8745d2 = () => interopDefault(import('..\\pages\\news\\_id.vue' /* webpackChunkName: "pages/news/_id" */))
const _461625bc = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nav-active-link',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _8585db46,
    name: "about"
  }, {
    path: "/news",
    component: _2d026aef,
    name: "news"
  }, {
    path: "/product",
    component: _09666cbf,
    name: "product"
  }, {
    path: "/service",
    component: _2143d8f6,
    name: "service"
  }, {
    path: "/solution",
    component: _47de35d9,
    name: "solution"
  }, {
    path: "/news/:id",
    component: _8a8745d2,
    name: "news-id"
  }, {
    path: "/",
    component: _461625bc,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
