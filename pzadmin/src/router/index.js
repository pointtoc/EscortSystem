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
        component:Layout,
        name:'主页',
        children:[
            {
                path:'dashboard',
                meta:{ id:'1', name:'控制台', icon:'Platfrom', path:'/dashboard', describe:'控制台展示数据'},
                component:Dashboard
            },
            {
                path:'auth',
                meta:{ id:'2', name:'权限控制', icon:'Grid'},
                children:[
                    {
                        path:'',
                        ailas:['admin'],
                        meta:{ id:'1', name:'账号管理', icon:'Avatar', path:'/auth/admin', describe:'管理员更改数据'},
                        component:Admin
                    },
                    {
                        path:'',
                        ailas:['group'],
                        meta:{ id:'2', name:'菜单管理', icon:'Menu', path:'/auth/group', describe:'菜单规则'},
                        component:Group
                    }
                ]
            },
            {
                path:'vppz',
                meta:{ id:'3', name:'DIDI陪诊', icon:'Grid'},
                children:[
                    {
                        path:'',
                        ailas:['staff'],
                        meta:{ id:'1', name:'陪护管理', icon:'Checked', path:'/vppz/staff', describe:'培护士更改数据'},
                        component:Staff
                    },
                    {
                        path:'',
                        ailas:['order'],
                        meta:{ id:'2', name:'订单管理', icon:'List', path:'/vppz/order', describe:'订单详情与编辑'},
                        component:Order
                    }
                ]
            },
        ]
    },
    {
        path:'/login',
        name:'登录',
        component:Login,
        descripe: '未登录跳转到登录页面'
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