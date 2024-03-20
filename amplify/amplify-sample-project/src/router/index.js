import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'

import store from '../store/index.js'

// Amplify読み込み
import { Hub } from "@aws-amplify/core"
import Auth from "@aws-amplify/auth"

Vue.use(Router)

let user;

// ユーザー管理
getUser().then((user) => {
    if (user) {
        router.push({path: '/'});
    }
});

function getUser() {
    return Auth.currentAuthenticatedUser().then((data) => {
        if (data && data.signInUserSession) {
            store.commit('setUser', data);
            return data;
        }
    }).catch(() => {
        store.commit('setUser', null);
        return null;
    });
}

// ログイン状態管理
Hub.listen("auth", async (data) => {
    if (data.payload.event === 'signOut'){
        user = null;
        store.commit('setUser', null);
        router.push({path: '/login'});
    } else if (data.payload.event === 'signIn') {
        user = await getUser();
        router.push({path: '/'});
    }
});

// ルーティング設定
const router = new Router({
    mode: 'history',
    routes: [
        {
            // ログインページ
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            // トップページ
            path: '/',
            name: 'home',
            component: Home,
            meta: { requiresAuth: true}
        }
    ]
});

// リダイレクト設定
router.beforeResolve(async (to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        user = await getUser();
        if (!user) {
            return next({
                path: '/login'
            });
        }
        return next()
    }
    return next()
});

export default router
