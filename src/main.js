import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import { rutas } from "./router/router";
Vue.use(VueRouter)

const router = new VueRouter({
   routes:rutas,
   mode:'history'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router,
}).$mount('#app')
