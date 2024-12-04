import {createRouter, createWebHashHistory} from 'vue-router'

import Layout from '../views/Main.vue'
import Login from '../views/login/index.vue'
const routes = [
    {
    path: '/',
    component:Layout
    },
    {
        path:'/login',
        component:Login
    }
]
const router = createRouter({
    // 路由数据
    routes,
    // 路由匹配模式
    /** hash模式：开发模式用，不刷新直接更新当前路由。
     * Memory模式：服务端用。
     * HTML5模式：上线用，路径不会有 # ，要刷新，所以需要在服务器上添加回退路由。
    */
    history: createWebHashHistory() // 调用hash模式方法
})

export default router // 对外导出