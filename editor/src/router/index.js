import Vue from 'vue'
import VueRouter from 'vue-router'
import MyDesktop from '../views/MyDesktop.vue'
import Collect from '../views/Collect.vue'
import RecycleBin from '../views/RecycleBin.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'MyDesktop',
        component: MyDesktop
    },
    // {
    //     path: '/Collect',
    //     name: 'Collect',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import ( /* webpackChunkName: "about" */ '../views/Collect.vue')
    // },
    {
        path: '/Collect',
        name: 'Collect',
        component: Collect
    },
    {
        path: '/RecycleBin',
        name: 'RecycleBin',
        component: RecycleBin
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router