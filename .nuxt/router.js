import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b12a8430 = () => interopDefault(import('../pages/article/index.vue' /* webpackChunkName: "pages/article/index" */))
const _2225af45 = () => interopDefault(import('../pages/classificationList.vue' /* webpackChunkName: "pages/classificationList" */))
const _a5d95c50 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _9e99db50 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _9a41cb60 = () => interopDefault(import('../pages/article/_id.vue' /* webpackChunkName: "pages/article/_id" */))
const _3928a27e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/article",
    component: _b12a8430,
    name: "article"
  }, {
    path: "/classificationList",
    component: _2225af45,
    name: "classificationList"
  }, {
    path: "/login",
    component: _a5d95c50,
    name: "login"
  }, {
    path: "/profile",
    component: _9e99db50,
    name: "profile"
  }, {
    path: "/article/:id",
    component: _9a41cb60,
    name: "article-id"
  }, {
    path: "/",
    component: _3928a27e,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
