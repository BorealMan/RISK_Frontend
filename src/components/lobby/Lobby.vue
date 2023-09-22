<script setup>
import { ref } from 'vue'

// State Imports
import GameStore from '../../store/game.js'
import { storeToRefs } from 'pinia';
import PlayersLobby from '../players/PlayersLobby.vue';
import Chat from "../chat/Chat.vue"

const gamestore = GameStore()
const { Game } = storeToRefs(gamestore)

const players = ref(Game.value.players);

gamestore.socket.on('playerjoined', (res) => {
    console.log(`Lobby - ${JSON.stringify(res.game.players)}`);
    gamestore.Game = res.game;
    players.value = res.game.players
})

const MAX_PLAYERS = 6;

</script>

<template>
    <div class="lobby-wrapper">
        <div class="logo">
            <h1>RISK ONLINE</h1>
            <h1>{{ gamestore.Game.game_id }}</h1>
        </div>
        <div class="lobby-content">
            <PlayersLobby :players="players" :emptyslots="MAX_PLAYERS-players.length" />
            <Chat :players="players"/>
        </div>
    </div>
</template>

<style scoped>
.lobby-wrapper {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../../assets/images/lobby-background.jpg);
    background-size: cover;
    background-position: center;
    display: grid;
    height: 100vh;
    grid-template-rows: 100px 1fr 200px;
    grid-template-columns: 100px 1fr 100px;
    grid-template-areas: "logo logo logo"
        ". lobby-content ."
        ". . .";
    color: #F5F5F5;
}

.logo {
    grid-area: logo;
    font-size: 1em;
    text-align: center;
}

.lobby-content {
    grid-area: lobby-content;
    display: grid;
    grid-template-columns: 1fr 400px;
    grid-template-rows: 1fr;
    max-height: 100%;
}

.hidden {
    display: none;
}
</style>
