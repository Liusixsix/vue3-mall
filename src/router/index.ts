import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'



const routes: Array<RouteRecordRaw> = [
    {
        path: '/home',
        component: () => import('@/views/Home/index.vue')
    },

];

const router = createRouter({
    history: createWebHashHistory(),  // hash路由模式
    routes
});


export default router;

