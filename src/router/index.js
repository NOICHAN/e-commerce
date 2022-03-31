import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    component: () => import('../views/LogInView.vue'),
  },
  {
    path: '/signup',
    component: () => import('../views/SignUpView.vue'),
  },
  {
    path: '/paymentQuestion',
    component: () => import('../views/PaymentQuestionView.vue'),
  },
  {
    path: '/transportQuestion',
    component: () => import('../views/TransportQuestionView.vue'),
  },
  {
    path: '/returnsQuestion',
    component: () => import('../views/ReturnsQuestionView.vue'),
  },
  {
    path: '/dashboard',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/ProductsView.vue'),
      },
    ],
  },
  // 404 頁面
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFoundView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
});

export default router;
