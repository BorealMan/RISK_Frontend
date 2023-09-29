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
            this.socket.emit('leavegame', this.Game.game_id, this.PlayerID);
        },
        // gameid, playerid, message
        SendMessage(message) {
            this.socket.emit('message', this.Game.game_id, this.PlayerID, message)
        },
        StartGame() {
            this.socket.emit('startgame', this.Game.game_id)
        },
        LeaveGame() {
        
        }
    }
})

export default GameStore