import { defineStore } from 'pinia'

export const gameStore = defineStore("GameStore", {
    state: () => ({
        GameKey: "",
        Player: {},
    }),
    getters: () => {

    },
    // actions: () => {
    //     GetGame() {
    //         fetch("http://localhost:5000")
    //         .then(res => res.json())
    //         .then(this.GameKey = key);
    //     },
    // }
})