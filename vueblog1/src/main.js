import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import "./axios"
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import './perimission.js'

Vue.config.productionTip = false
Vue.use(mavonEditor)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
