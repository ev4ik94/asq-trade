import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHistory('https://asq-trade.uz'),
  routes: [
    {
      path: '/:lang(en|ru|uz)', // Поддерживаемые языки
      name: 'Home',
      component: HomeView,

    },
    {
      path: '/',
      redirect: '/ru' // Редирект на русский язык по умолчанию
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/ru' // Редирект для несуществующих маршрутов
    }
  ]
})



export default router
