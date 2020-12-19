import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: '天津風 - 雫',
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      routes: [
        { path: '/main', component: 'Main' },
        { path: '/editor', component: 'Editor'},
        { path: '/about', component: 'About'},
      ]
    },
  ],
});
