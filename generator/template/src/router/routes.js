// 路由配置文件
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ './../pages/Home.vue'),
    meta: {
      title: 'home',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ './../pages/About.vue'),
    meta: {
      title: 'About',
    },
  },
]

export default routes
