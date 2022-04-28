import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/user',
    component: () => import('../views/user/UserBoard.vue'),
    children: [
      {
        path: 'list',
        component: () => import('../views/user/ShoppingList.vue'),
      },
      {
        path: 'product/:productId',
        component: () => import('../views/user/ProductPage.vue'),
      },
      {
        path: 'login',
        component: () => import('../views/user/LogInView.vue'),
      },
      {
        path: 'signup',
        component: () => import('../views/user/SignUpView.vue'),
      },
      {
        path: 'paymentQuestion',
        component: () => import('../views/user/PaymentQuestionView.vue'),
      },
      {
        path: 'transportQuestion',
        component: () => import('../views/user/TransportQuestionView.vue'),
      },
      {
        path: 'returnsQuestion',
        component: () => import('../views/user/ReturnsQuestionView.vue'),
      },
    ],
  },
  {
    path: '/dashboard',
    component: () => import('../views/dashboard/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/dashboard/ProductsView.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/dashboard/OrdersView.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/dashboard/CouponsView.vue'),
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
