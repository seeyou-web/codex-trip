import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import SpotListPage from '../pages/SpotListPage.vue'
import SpotDetailPage from '../pages/SpotDetailPage.vue'
import RoutePage from '../pages/RoutePage.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: { tab: 'home' }
    },
    {
      path: '/spots',
      name: 'spots',
      component: SpotListPage,
      meta: { tab: 'spots' }
    },
    {
      path: '/spots/:id',
      name: 'spot-detail',
      component: SpotDetailPage
    },
    {
      path: '/routes',
      name: 'routes',
      component: RoutePage,
      meta: { tab: 'routes' }
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
