import VueRouter from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/box',
    name: 'box',
    component: () => import('@/components/Box.vue')
  },
  {
    path: '/revealing',
    name: 'revealing',
    component: () => import('@/components/Revealing.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
