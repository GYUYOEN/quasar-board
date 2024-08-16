import { RouteRecordRaw } from 'vue-router';
import { menuList } from '../assets/column/index';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      ...menuList.map((list) => ({
        path: `${list.route}`,
        component: () => import('src/pages/PostsPage.vue'),
      })),
      {
        path: '/posts/:postId',
        name: 'PostDetail',
        component: () => import('pages/PostIdPage.vue'),
        props: true,
      },
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
