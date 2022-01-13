import { createRouter, createWebHistory } from 'vue-router'
import store from "../store/index";
import Home from '/src/views/Home.vue'
import Login from '/src/views/Login.vue'
import Register from '/src/views/Register.vue'
import ProductDetail from '/src/views/ProductDetail.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        // meta: { requiredAuth: true }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: { requiredAuth: false }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: { requiredAuth: false }
    },
    {
        path: '/detail-product/:id',
        name: 'ProductDetail',
        component: ProductDetail,
        meta: { requiredAuth: false }
    },
]

const route = createRouter({
    history: createWebHistory(),
    routes: routes,
  });
 
//   route.beforeEach((to,from, next) => {
//     if(to.meta.requiredAuth){
//         const auth = store.getters["auth/isTokenActive"];
//         console.log(auth);
//         if(!auth){
//            return next({path: '/login'});
//         }
//     }
    // console.log(store.getters["auth/getAuthData"]);
    // if(!store.getters["auth/getAuthData"].token){
    //     const access_token = localStorage.getItem("access_token");
    //     const refresh_token = localStorage.getItem("refresh_token");
    //     if(access_token){
    //         const data = {
    //             access_token:access_token,
    //             refresh_token:refresh_token
    //         };
    //         store.commit('auth/saveTokenData',data);
    //     }
    // }
    // const auth = store.getters["auth/isTokenActive"];
 
    // if(to.fullPath == "/"){
    //     return next();
    // }
    // else if(auth && !to.meta.requiredAuth){
    //     return next({path:"/"});
    // }
    // else if(!auth && to.meta.requiredAuth){
    //     return next({path: '/login'});
    // }
 
//     return next();
// });

export default route;