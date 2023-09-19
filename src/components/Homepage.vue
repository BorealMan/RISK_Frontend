<script setup>
import { ref } from 'vue'
// Components
import Modal from "./modal/Modal.vue"
import Username from './popups/Username.vue'
import JoinGame from './popups/JoinGame.vue';
// State Imports
import GameStore from '../store/game.js'
import { storeToRefs } from 'pinia';

// Init State
const gamestore = GameStore()
// const { Game } = storeToRefs(gamestore)

const isUsernameSet = ref(false);
const setUsername = () => {
    isUsernameSet.value = true;
}

const isLobbySet = ref(false);
const setLobby = () => {
    isLobbySet.value = true;
}

function StartNewGame() {
    console.log(`Clicked Start Game`)
    // Collect Username
    gamestore.NewGame()
}

function JoinAGame() {
    console.log(`Clicked Join Game`)
    gamestore.JoinGame()
}

gamestore.socket.on('newgame', (res) => {
    console.log(res)
})

gamestore.socket.on('joingame', (res) => {
    console.log(res)
})


</script>

<template>
    <div class="container"> 

        <div class="banner-bg">
            <div class="overlay"></div>
            <img src="/src/assets/images/fighter-jet.jpg" />
        </div>
        
        <div class="buttons">
            <div class="button" @click="StartNewGame">Start A New Game</div>
            <div class="button" @click="JoinAGame">Join A Game</div>
        </div>

        <Modal v-show="!isUsernameSet">
            <Username :setUsername="setUsername" />
        </Modal>

        <Modal v-show="isUsernameSet && !isLobbySet">
            <JoinGame :setLobby="setLobby" />
        </Modal>
        
    </div>
</template>

<style scoped>
    .buttons {
        padding: 3rem;
        border-radius: 10px;
        width: max(400px, 20%);
        position:absolute;
        z-index: 20;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
        background:rgb(48, 48, 48, .9);
    }

    .button {
        padding: 2rem;
        border-radius:10px;
        background: lightgrey;
        margin-bottom:1rem;
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

    .banner-bg {
        display:block;
        width:100%;
        height:100%;
    }

    .banner-bg img {
        display:block;
        height:100%;
        width:100%;
        object-fit: cover;
    }

    .banner-bg .overlay {
        position:absolute;
        z-index: 10;
        left:0;
        right:0;
        top:0;
        bottom:0;
        background:rgb(48, 48, 48, .1);
    }

</style>
