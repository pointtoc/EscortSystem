import {createRouter, createWebHashHistory} from 'vue-router'

import Layout from '../views/Main.vue'
import Login from '../views/login/index.vue'
import Dashboard from '../views/dashboard/index.vue'
import Admin from '../views/auth/admin/index.vue'
import Group from '../views/auth/group/index.vue'
import Order from '../views/vppz/order/index.vue'
import Staff from '../views/vppz/staff/index.vue'

const routes = [
    { 
        path: '/',
        component: Layout,
        name: 'main',
        children: [
            {
                path: 'dashboard',
                meta: { id: '1', name: '控制台', icon: 'Platform', path: '/dashboard', describe: '用于展示当前系统中的统计数据、统计报表及重要实时数据' },
                component: Dashboard
            },
            {
                path: 'auth',
                meta: { id: '2' ,name: '权限管理', icon: 'Grid' },
                children: [
                    {
                    path: '',
                    /**
                     * 在这段前端路由代码中，alias 是一个用于定义路由别名的属性。
                     * alias 属性允许你为某个路由（在这个例子中是/auth下的group路由）提供一个或多个别名，使得访问这些别名时会解析到该路由。
                     * 让用户可以通过不同的 URL 来访问同一组件。
                     * path: '' 表示 /auth 的根路径下（即 /auth/）会渲染 admin 组件。
                     */
                    alias: ['admin'],
                    meta: { id: '1', name: '账号管理', icon: 'Avatar', path: '/auth/admin', describe: '管理员可以进行编辑，权限修改后需要登出才会生效' },
                    component: Admin
                    },
                    {
                    path: 'group',
                    meta: { id: '2', name: '菜单管理', icon: 'Menu', path: '/auth/group', describe: '菜单规则通常对应一个控制器的方法,同时菜单栏数据也从规则中获取' },
                    component: Group
                    }
                ]
            },
            {
                path: 'vppz',
                meta: { id: '3', name: 'DIDI陪诊', icon: 'BellFilled' },
                children: [
                    {
                    path: '',
                    alias: ['staff'],
                    meta: { id: '1', name: '陪护管理', icon: 'Checked', path: '/vppz/staff', describe: '陪护师可以进行创建和修改，设置对应生效状态控制C端选择' },
                    component: Staff
                    },
                    {
                    path: 'order',
                    meta: { id: '2', name: '订单管理', icon: 'List', path: '/vppz/order', describe: 'C端下单后可以查看所有订单状态，已支付的订单可以完成陪护状态修改' },
                    component: Order
                    }
                ]
            }
        ]
        },
        {
            path: '/login',
            component: Login
        },
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