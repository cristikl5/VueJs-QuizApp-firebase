import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import style from './assets/style.css'
import firebase from "firebase";


Vue.config.productionTip = false
Vue.use(style)


const firebaseConfig = {
    apiKey: "AIzaSyCAjyzf-dhbyR7SyJNZPkOGIQ9dipM5ojo",
    authDomain: "reigncodeexamen.firebaseapp.com",
    databaseURL: "https://reigncodeexamen.firebaseio.com",
    projectId: "reigncodeexamen",
    storageBucket: "reigncodeexamen.appspot.com",
    messagingSenderId: "175297507633",
    appId: "1:175297507633:web:709bc722ec49edb1120010",
    measurementId: "G-6WHTRQYBTG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
