import Vue from 'vue'
import VueRouter from 'vue-router'
import Game from "./components/Game";
import Login from "./views/Login";
import Register from "./views/Register";
import Welcome from "./components/Welcome";
import Scoreboard from "./components/Score";
import firebase from "firebase/app";

Vue.use(VueRouter)

const router = new VueRouter({
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
            meta: {layout: 'main', auth: true},
            component: () => import('./components/Game'),

        },
        {
            path: '/scoreboard',
            name: 'Scoreboard',
            meta: {layout: 'main', auth: true},
            component: () => import('./components/Score'),
        }
    ]

})


router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser
    const requiredUser = to.matched.some(record => record.meta.auth)

    if (requiredUser && !currentUser) {
        next('/login')
    } else {
        next()
    }
})

export default router






