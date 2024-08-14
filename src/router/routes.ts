import { RouteRecordRaw } from 'vue-router';
import { menuList } from '../assets/column/index';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      ...menuList.map((list) => ({
        path: `${list.route}`,
        component: () => import('pages/PostsPage.vue'),
      })),
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
