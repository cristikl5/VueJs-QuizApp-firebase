import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from "firebase/app";
import before from "vue-resource/src/http/interceptor/before";

Vue.use(VueRouter)

const router =  new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: () => import('./views/Login'),
        },
        {
            path: '/register',
            name: 'Register',
            component: () => import('./views/Register')

        },
        {
            path: '/welcome',
            name: 'Welcome',
            meta: {layout: "main", auth: true},
            component: () => import('./components/Welcome'),

        },
        {
            path: '/game',
            name: 'Game',
            meta: {layout: "main", auth: true},
            component: () => import('./components/Game'),

        },
        {
            path: '/scoreboard',
            name: 'Scoreboard',
            meta: {layout: "main", auth: true},
            component: () => import('./components/Score'),

        }
    ]
})


export default router


