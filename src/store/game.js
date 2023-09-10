import { defineStore } from 'pinia'

export const GameStore = defineStore("GameStore", {
    state: () => ({
        Game: undefined,
        Player: undefined,
    }),
    getters: {
        getGameKey() {
            return this.GameKey;
        }
    },
    actions: {
        newGame() {
            fetch('http://localhost:5000/game/newgame')
            .then(res => res.json())
            .then(res => {
                console.log(res)
            })
        },
        syncGame() {

        }
    }
})