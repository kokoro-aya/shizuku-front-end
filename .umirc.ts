import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
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
