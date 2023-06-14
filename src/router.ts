import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// 导入组件
import HelloWorld from './views/HelloWorld/HelloWorld.vue';
import Gadget from './views/Gadget.vue';
import Tools from './views/Tools/Tools.vue';

// 定义路由记录
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/gadget',
    name: 'Gadget',
    component: Gadget
  },
  {
    path: '/tools',
    name: 'Tools',
    component: Tools
  }
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;