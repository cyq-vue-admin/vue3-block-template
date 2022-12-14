import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
    state: () => {
        return {
            count: 0
        }
    },
    persist: true, // ζδΉε
    actions: {
        addCount() {
            this.count++
        }
    }
})
