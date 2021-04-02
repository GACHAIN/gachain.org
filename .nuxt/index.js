import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_71f37caf from 'nuxt_plugin_plugin_71f37caf' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_pluginclient_b64e2436 from 'nuxt_plugin_pluginclient_b64e2436' // Source: .\\content\\plugin.client.js (mode: 'client')
import nuxt_plugin_pluginserver_0a925f6d from 'nuxt_plugin_pluginserver_0a925f6d' // Source: .\\content\\plugin.server.js (mode: 'server')
import nuxt_plugin_workbox_8a19b024 from 'nuxt_plugin_workbox_8a19b024' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_2d336324 from 'nuxt_plugin_metaplugin_2d336324' // Source: .\\pwa\\meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_23e4183c from 'nuxt_plugin_iconplugin_23e4183c' // Source: .\\pwa\\icon.plugin.js (mode: 'all')
import nuxt_plugin_axios_7d15815c from 'nuxt_plugin_axios_7d15815c' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_antdui_2b2dca90 from 'nuxt_plugin_antdui_2b2dca90' // Source: ..\\plugins\\antd-ui (mode: 'all')
import nuxt_plugin_vuescroll_1abdb05f from 'nuxt_plugin_vuescroll_1abdb05f' // Source: ..\\plugins\\vuescroll (mode: 'all')
import nuxt_plugin_i18n_66ff12a5 from 'nuxt_plugin_i18n_66ff12a5' // Source: ..\\plugins\\i18n.js (mode: 'all')
import nuxt_plugin_http_b088180a from 'nuxt_plugin_http_b088180a' // Source: ..\\plugins\\http.js (mode: 'all')
import nuxt_plugin_mixins_3b2fbd9e from 'nuxt_plugin_mixins_3b2fbd9e' // Source: ..\\plugins\\mixins.js (mode: 'all')
import nuxt_plugin_baidu_3fd3d820 from 'nuxt_plugin_baidu_3fd3d820' // Source: ..\\plugins\\baidu.js (mode: 'all')
import nuxt_plugin_video_c73adce0 from 'nuxt_plugin_video_c73adce0' // Source: ..\\plugins\\video.js (mode: 'client')
import nuxt_plugin_swiper_076f49ea from 'nuxt_plugin_swiper_076f49ea' // Source: ..\\plugins\\swiper.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    return this.$root.$options.$nuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","beforeEnter":function(el) {
      // console.log("Before enter...");
    },"appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule
const baseStoreOptions = { preserveState: process.client }

function registerModule (path, rawModule, options = {}) {
  return originalRegisterModule.call(this, path, rawModule, { ...baseStoreOptions, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"智乾区块链 | 政务链 | 全行业高效自主区块链底层架构","meta":[{"charset":"utf-8"},{"hid":"Expires","http-equiv":"Expires","content":"0"},{"hid":"Pragma","http-equiv":"Pragma","content":"no-cache"},{"hid":"Cache-Control","http-equiv":"Cache-Control","content":"no-cache"},{"hid":"ie","http-equiv":"X-UA-Compatible","content":"IE=11; IE=10; IE=9; IE=8; IE=EDGE"},{"hid":"edge","http-equiv":"X-UA-Compatible","content":"IE=edge,chrome=1"},{"name":"viewport","content":"width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0"},{"hid":"description","name":"description","content":"GAchain是政务服务区块链平台，可将大多数类型的政府部门机构、事业单位、社会活动等的业务转移到区块链中，所有业务由智能法律和智能合约驱动。"},{"hid":"keywords","name":"keywords","content":"区块链,智乾区块链,政务链,GACHAIN,区块链即政务,政务区块链,电子政务,区块链政务,区块链,blockchain,自主区块链"},{"hid":"og:description","name":"og:description","content":"GAchain是政务服务区块链平台，可将大多数类型的政府部门机构、事业单位、社会活动等的业务转移到区块链中，所有业务由智能法律和智能合约驱动。"},{"hid":"og:title","name":"og:title","content":"智乾区块链 | 政务链 | 全行业高效自主区块链底层架构"},{"hid":"og:site_name","name":"og:site_name","content":"智乾区块链 | 政务链 | 全行业高效自主区块链底层架构"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"智乾区块链 | 政务链 | 全行业高效自主区块链底层架构"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"智乾区块链 | 政务链 | 全行业高效自主区块链底层架构"},{"hid":"og:url","name":"og:url","content":"http:\u002F\u002Fgachain.org"},{"hid":"url","name":"url","content":"http:\u002F\u002Fgachain.org"},{"hid":"shenma-site-verification","name":"shenma-site-verification","content":"402ffef735e5fdc4d7f8d87c8571b7c9_1617362421"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002Fanimate\u002Fanimate.min.css"},{"rel":"stylesheet","href":"\u002Fcss\u002Ffont.css"}],"script":[{"src":"https:\u002F\u002Fhm.baidu.com\u002Fhm.js?d28e5324af5934973a469bbfa5501c42"}],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_71f37caf === 'function') {
    await nuxt_plugin_plugin_71f37caf(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pluginclient_b64e2436 === 'function') {
    await nuxt_plugin_pluginclient_b64e2436(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_pluginserver_0a925f6d === 'function') {
    await nuxt_plugin_pluginserver_0a925f6d(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_8a19b024 === 'function') {
    await nuxt_plugin_workbox_8a19b024(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_2d336324 === 'function') {
    await nuxt_plugin_metaplugin_2d336324(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_23e4183c === 'function') {
    await nuxt_plugin_iconplugin_23e4183c(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_7d15815c === 'function') {
    await nuxt_plugin_axios_7d15815c(app.context, inject)
  }

  if (typeof nuxt_plugin_antdui_2b2dca90 === 'function') {
    await nuxt_plugin_antdui_2b2dca90(app.context, inject)
  }

  if (typeof nuxt_plugin_vuescroll_1abdb05f === 'function') {
    await nuxt_plugin_vuescroll_1abdb05f(app.context, inject)
  }

  if (typeof nuxt_plugin_i18n_66ff12a5 === 'function') {
    await nuxt_plugin_i18n_66ff12a5(app.context, inject)
  }

  if (typeof nuxt_plugin_http_b088180a === 'function') {
    await nuxt_plugin_http_b088180a(app.context, inject)
  }

  if (typeof nuxt_plugin_mixins_3b2fbd9e === 'function') {
    await nuxt_plugin_mixins_3b2fbd9e(app.context, inject)
  }

  if (typeof nuxt_plugin_baidu_3fd3d820 === 'function') {
    await nuxt_plugin_baidu_3fd3d820(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_video_c73adce0 === 'function') {
    await nuxt_plugin_video_c73adce0(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_swiper_076f49ea === 'function') {
    await nuxt_plugin_swiper_076f49ea(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, (err) => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err)
        if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
