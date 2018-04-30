import './bootstrap'

import Vue from 'vue'
import 'normalize.css/normalize.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'

import router from './core/router'

import './core/auth.guard'
import i18n from './core/language'
import './core/vee.validator'

Vue.use(Element)
const app = new Vue({
    i18n,
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});