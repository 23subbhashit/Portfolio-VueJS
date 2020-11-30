import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'mdbootstrap/css/mdb.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import 'popper.js/dist/umd/popper.min.js'
import 'aos/dist/aos.css'
import '@appnest/masonry-layout/umd/masonry-layout.min.js'
import 'jquery/dist/jquery.min.js'
import { routes } from './route.js'
import AOS from 'aos'
Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode : 'history'
})
new Vue({

  created () {
    AOS.init()
  },
  render: h => h(App),
  router,
}).$mount('#app')
