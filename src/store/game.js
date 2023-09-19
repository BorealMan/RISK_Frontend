import { defineStore } from 'pinia'
import socket from './socket.js'

export const GameStore = defineStore("GameStore", {
    state: () => ({
        Game: undefined,
        PlayerID: undefined,
        socket: socket,
    }),
    getters: {
        getGameKey() {
            return this.GameKey;
        }
    },
    actions: {
        NewGame(username) {
            this.socket.emit('newgame', username)
        },
        JoinGame(username, gameid) {
            this.socket.emit('joingame', gameid, username)
        },
        LeaveGame() {
            this.socket.emit('leavegame', Game.game_id, PlayerID);
        },
        SendMessage(message) {
            this.socket.emit('message', Game.game_id, PlayerID, message)
        },
    }
})

export default GameStore