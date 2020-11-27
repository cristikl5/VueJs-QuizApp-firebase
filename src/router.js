import Vue from 'vue'
import VueRouter from 'vue-router'
import Game from "./components/Game";
import Login from "./views/Login";
import Register from "./views/Register";
import Welcome from "./components/Welcome";
import Scoreboard from "./components/Score";
import store from "./store/store";
import firebase from "firebase/app";

Vue.use(VueRouter)

const routes = [
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
        component: () => import('./components/Welcome'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/game',
        name: 'Game',
        component: () => import('./components/Game'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/scoreboard',
        name: 'Scoreboard',
        component: () => import('./components/Score'),
        meta: {
            requiresAuth: true
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser
    const requireAuth =to.matched.some(record=>record.meta.auth)

    if (requireAuth && !currentUser) {
        next('/login')
    } else {
        next()
    }
})

export default router

