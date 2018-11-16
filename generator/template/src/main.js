import Vue from 'vue'
import 'lib-flexible'
import Toasted from 'vue-toasted'

import App from './App.vue'
import store from './store/index'
import router from './router/index'

Vue.config.productionTip = false

Vue.use(Toasted)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
