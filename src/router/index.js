import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/user',
    component: () => import('../views/UserBoard.vue'),
    children: [
      {
        path: 'list',
        component: () => import('../views/ShoppingList.vue'),
        children: [
          {
            path: 'all',
            component: () => import('../views/ListAll.vue'),
          },
          {
            path: 'feed',
            component: () => import('../views/ListFeed.vue'),
          },
          {
            path: 'canned',
            component: () => import('../views/ListCanned.vue'),
          },
          {
            path: 'toy',
            component: () => import('../views/ListToy.vue'),
          },
          {
            path: 'search',
            component: () => import('../views/ListSearch.vue'),
          },
        ],
      },
      {
        path: 'product:productId',
        component: () => import('../views/UserProduct.vue'),
      },
      {
        path: 'login',
        component: () => import('../views/LogInView.vue'),
      },
      {
        path: 'signup',
        component: () => import('../views/SignUpView.vue'),
      },
      {
        path: 'paymentQuestion',
        component: () => import('../views/PaymentQuestionView.vue'),
      },
      {
        path: 'transportQuestion',
        component: () => import('../views/TransportQuestionView.vue'),
      },
      {
        path: 'returnsQuestion',
        component: () => import('../views/ReturnsQuestionView.vue'),
      },
    ],
  },
  {
    path: '/dashboard',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/ProductsView.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/OrdersView.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/CouponsView.vue'),
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
