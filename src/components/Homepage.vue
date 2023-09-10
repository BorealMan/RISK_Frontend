<script setup>

function StartNewGame() {
    console.log(`Clicked Start Game`)
}

function JoinAGame() {
    console.log(`Clicked Join Game`)
}

// Init State
// const gamestore = GameStore()

</script>

<template>
    <div class="container"> 

        <div class="banner-bg">
            <div class="overlay"></div>
            <img src="/src/assets/fighter-jet.jpg" />
        </div>
        
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
        left:0;
        right:0;
        top:0;
        bottom:0;
        background:rgb(48, 48, 48, .1);
    }

</style>
