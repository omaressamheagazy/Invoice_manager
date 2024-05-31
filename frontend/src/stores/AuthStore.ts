import { defineStore } from 'pinia'
import { GUEST } from "@/Enums/guest"
import router from "@/router"
import authApi from "@/services/API/auth.api.ts"

export const useAuthStore = defineStore("authStore", {
    state: () => ({
        user: null
    }),
    getters: {
        guest: (): boolean => {
            const storageItem = window.localStorage.getItem("guest");
            if (!storageItem) return false;
            return storageItem == GUEST.isGuest ? true : false;
        },
    },
    actions: {
        async loadAuthUser()  {
            try {
                const response = await authApi.getAuthUser();
                this.user = response.data;
                return response.data;
            } catch (error) {
                this.user = null;
            }
        },
        async logout(): Promise<void> {
            try {
                await authApi.logout();
                this.setGuest(GUEST.isGuest)
                router.replace({ name: 'login' })
            } catch (error) {
                alert('error during logout')
            }
        },

        setGuest(value:string):  void {
            window.localStorage.setItem('guest', value)
        },



    }

});