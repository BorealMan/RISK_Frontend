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
const err = ref(undefined);

gamestore.socket.on('playerjoined', (res) => {
    console.log(`Lobby - ${JSON.stringify(res.game.players)}`);
    gamestore.Game = res.game;
    players.value = res.game.players
})

const MAX_PLAYERS = 6;

function BeginGame(){
    if (players.length-1 < 3){
        err.value = "You need at Least 3 Players to start"
    }
    
}

</script>

<template>
    <div class="lobby-wrapper">
        <div class="logo">
            <h1>RISK ONLINE</h1>
            <h1>{{ gamestore.Game.game_id }}</h1>
        </div>
        <div class="lobby-content">
            <PlayersLobby :players="players" :emptyslots="MAX_PLAYERS - players.length" :gameID="gamestore.Game.game_id" />
            <Chat :players="players" />
        </div>
        <div class="buttons">
            <div class="button" @click="BeginGame">Begin Game</div>
        </div>
        <p class="error">{{ err }}</p>
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
        ". buttons .";
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

.buttons {
        padding: 3rem;
        border-radius: 10px;
        width: max(400px, 20%);
        position:absolute;
        z-index: 20;
        top:85%;
        left:50%;
        transform: translate(-50%, -50%);
    }

    .button {
        padding: 2rem;
        border-radius:5px;
        background: darkgrey;
        margin:1rem 0;
        text-align: center;
        font-size: 1.5rem;
        font-weight:700;
        transition: all 600ms ease;
    }

    .button:hover {
        background: grey;
        cursor: pointer;
        color:rgb(25, 241, 25);
    }
</style>
