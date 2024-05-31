import { GUEST } from '@/Enums/guest.js'
import { routes } from "@/router/routes.js"
import { useAuthStore } from '@/stores/AuthStore.ts';
import { toRaw } from 'vue';

import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(),
    routes,
})
/**
 * 
 * it handles the following scienerios
 * 1. if user is not authenticated and route requires authentication, redirect to login
 * 2. if user is authenticated and email is not verified and requires guest or requires authentication, redirect to verify email
 * 3. if user is authenticated and route requires guest, redirect to app
 * 
 */
async function middleware(to, from, next) {
    const authStore = useAuthStore()
    if(!authStore.guest) { // user is set to authenticated in local storage
        const authUser =  await authStore.loadAuthUser();
        if(!authUser) authStore.setGuest(GUEST.isGuest);
    }
    const requiresAuth = to.meta.requiresAuth;
    const requireGuest = to.meta.requireGuest;
    const user = toRaw(authStore.user)
    if (requiresAuth && !user) next({ name: 'login' })  // route require authentication, and user not authenticated
    else if(to.name !== 'verifyEmail' && user && !user.email_verified_at) next({ name: 'verifyEmail' })
    else if (requireGuest && user) next({ name: 'app' }) // requested route doesn't requre auth,and user is authenticated
    else next()
}
router.beforeEach((to, from, next) => {
    middleware(to, from, next)
})
export default router