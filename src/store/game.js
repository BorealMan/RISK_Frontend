import { defineStore } from 'pinia'
import socket from './socket.js'

export const GameStore = defineStore("GameStore", {
    state: () => ({
        Game: {},
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
        JoinGame(gameid, username) {
            this.socket.emit('joingame', gameid, username)
        },
        // gameid, playerid
        LeaveGame() {
            this.socket.emit('leavegame', Game.game_id, PlayerID);
        },
        // gameid, playerid, message
        SendMessage() {
            this.socket.emit('message', Game.game_id, PlayerID, message)
        },
    }
})

export default GameStore