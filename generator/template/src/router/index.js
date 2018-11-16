import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = new Router({
  routes,
})

router.afterEach((to) => {
  document.title = to.meta.title || 'vue项目'
})

export default router
