import { createApp } from 'vue'
import App from './App.vue'
import router from './Router/index.js'

import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import store from './store'

import VueLazyload from 'vue-lazyload'

import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/preview.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'

import Prism from 'prismjs'

VMdPreview.use(vuepressTheme, {
  Prism,
})

createApp(App)
  .use(router)
  .use(store)
  .use($)
  .use(VMdPreview)
  .use(VueLazyload, {
    error: require('@/static/error.jpg'),
    loading: require('@/static/load.jpg'),
    lazyComponent: true,
    throttleWait: 500,
    preLoad: 0,
  })
  .mount('#app')
