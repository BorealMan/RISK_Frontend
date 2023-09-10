<script setup>
import { gameStore } from '../store/game';


function StartNewGame() {
    console.log(`Clicked Start Game`)
}

function JoinAGame() {
    console.log(`Clicked Join Game`)
}

</script>

<template>
    <div class="container"> 
        <div class="buttons">
            <div class="button" @click="StartNewGame">Start A New Game</div>
            <div class="button" @click="JoinAGame">Join A Game</div>
        </div>
    </div>
</template>

<style scoped>
    .container {
        height:100vh;
        display:block;
    }

    .buttons {
        padding: 3rem;
        border: 1px solid black;
        border-radius: 10px;
        width: max(400px, 20%);
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
    }

    .button {
        padding: 2rem;
        border-radius:10px;
        background: lightgrey;
        margin-bottom:1rem;
        text-align: center;
        font-size: 1.5rem;
        font-weight:700;
    }

    .button:hover {
        background: grey;
        cursor: pointer;
    }

</style>
