import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';

const isAuthenticated = () => {
  const token = store.state.token;
  if (!token) {
    const decodedToken = parseJwt(token);

    if (decodedToken && decodedToken.exp * 1000 > Date.now()) {
      return true;
    }
  }

  return false;
};

const parseJwt = (token: string) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/login' },
    {
      path: '/',
      component: () => import('../layouts/default.vue'),
      children: [
        {
          path: 'dashboard',
          component: () => import('../pages/dashboard.vue'),
          //meta: { requiresAuth: true },
        },
        {
          path: 'account-settings',
          component: () => import('../pages/account-settings.vue'),
          //meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: '/',
      component: () => import('../layouts/blank.vue'),
      children: [
        {
          path: 'login',
          component: () => import('../pages/login.vue'),
        },
        {
          path: 'register',
          component: () => import('../pages/register.vue'),
        },
        {
          path: '/:pathMatch(.*)*',
          component: () => import('../pages/[...all].vue'),
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    isAuthenticated() ? next() : next('/login');
  } else {
    next();
  }
});
export default router
