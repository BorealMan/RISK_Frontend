import { defineStore } from 'pinia'
import socket from './socket.js'

export const GameStore = defineStore("GameStore", {
    state: () => ({
        Game: undefined,
        Player: undefined,
        socket: socket,
    }),
    getters: {
        getGameKey() {
            return this.GameKey;
        }
    },
    actions: {
        NewGame() {
            this.socket.emit('newgame', '')
        },
        SendMessage(message) {
            this.socket.emit('message', message)
        },
    }
})