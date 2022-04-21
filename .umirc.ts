import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: '天津風 - 雫',
  routes: [
    {
      path: '/',
      component: '@/index',
      routes: [
        { path: '/', component: 'Home' },
        { path: '/playground', component: 'Playground' },
        { path: '/editor', component: 'Editor' },
        { path: '/about', component: 'About' },
        { path: '/gallery', component: 'Gallery' },
        { path: '/story', component: 'Story' },
        { path: '/feedback', component: 'Feedback' },
        { path: '/help', component: 'Help' },
      ],
    },
  ],
});
