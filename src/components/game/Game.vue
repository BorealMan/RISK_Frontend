<script setup>
import { ref } from 'vue'
import GameController from '../../controllers/game.js';
import GameStore from '../../store/game.js'
import { storeToRefs } from 'pinia';
import Board from './board/Board.vue'
import Players from '../players/Players.vue';
import TurnController from './turncontroller/TurnController.vue';
import Timer from './timer/Timer.vue';
import Chat from '../chat/Chat.vue';
import NextTurn from './nextturn/NextTurn.vue';
import playerColors from '../colors/player_colors.js'
import DraftInput from './popups/DraftInput.vue';


const gamestore = GameStore()
const { Game, PlayerID } = storeToRefs(gamestore)
const players = ref(Game.value.players);

// Chat Controls
const isChatVisible = ref(true);
const toggleChat = () => {
    isChatVisible.value = !isChatVisible.value;
};

// Game Controller - Controls SVG Board
const GC = new GameController()

// Game Controller Call Backs - PUT GAME LOGIC HERE
const Territory_MouseOverCallBack = (index) => {

}

const Territory_MouseOutCallBack = (index) => {

}

const Territory_MouseClickCallBack = (index) => {
    Game.value.territories[index].troops = 10
    GC.TerritoryControllers[index].troops = 10
    GC.TerritoryControllers[index].Update()
}

// Set Call Backs To Top Level From Game Controller
GC.Territory_MouseOverCallBack = Territory_MouseOverCallBack
GC.Territory_MouseOutCallBack = Territory_MouseOutCallBack
GC.Territory_MouseClickCallBack = Territory_MouseClickCallBack
// Must Be Called After Setting Callbacks
GC.SetTerritoryIndexes()

// Run The Game Controller After 80ms Delay
setTimeout(() => {
    GC.Run()
}, 80)

// Listen For Events And Rerender Conditionally
const showNextTurnModal = ref(false);
gamestore.socket.on('increment_turn', (res) => {
    Game.value.current_player_turn = res.current_player_turn;
    showNextTurnModal.value = true;
    setTimeout(() => {
        showNextTurnModal.value = false;
    }, 1500)
})

// Timer Functionality
const percent_filled = ref("0%");
gamestore.socket.on('increment_timer', (res) => {
    const percent = (res.seconds / Game.value.player_turn_max_duration) * 100
    percent_filled.value = `${percent}%`
})

// Logic To Connect GameController With Game Data
gamestore.socket.on('update_territories', (res) => {
    // Update State Values From Response
    Game.value.players = res.players
    players.value = res.players
    Game.value.territories = res.territories
    Game.value.contients = res.contients
    // Update Game Controller - Screen
    GC.TerritoryControllers.forEach((t, i) => {
        const territoryOwner = Game.value.territories[i].player
        const newColor = Game.value.players[territoryOwner].color
        // Assign New Values
        t.color = playerColors[newColor]
        t.troops = Game.value.territories[i].troops
    })
    console.log(Game)
})

// Select Output
function ProcessSelectorOutput(value) {
    // If Current Player Turn State Do Something
}

</script>

<template>
    <div class="game-content">
        <div class="chat-toggler" @click="toggleChat">
            <!-- Message with slash -->
            <svg v-if="isChatVisible" xmlns="http://www.w3.org/2000/svg" height="2em"
                viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L512.9 376.7C552.2 340.2 576 292.3 576 240C576 125.1 461.4 32 320 32c-67.7 0-129.3 21.4-175.1 56.3L38.8 5.1zM64 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c37 0 72.3-6.4 104-17.9L82.9 161.3C70.7 185.6 64 212.2 64 240z" />
            </svg>
            <!-- Message with no slash -->
            <svg v-else xmlns="http://www.w3.org/2000/svg" height="2em"
                viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" />
            </svg>
        </div>
        <div id="troop-icons"></div>
        <Board />
        <Players :players="players" class="players" />
        <Timer :playerColor="playerColors[players[Game.current_player_turn].color]" :percentFilled="percent_filled" />
        <transition name="slide">
            <Chat v-show="isChatVisible" :players="players" class="chat" :theme="'light'" />
        </transition>
        <TurnController :playerColor="playerColors[players[Game.current_player_turn].color]" />
        <!-- <DraftInput :troopCount="10" /> -->

        <NextTurn :player="players[Game.current_player_turn]"
            :playerColor="playerColors[players[Game.current_player_turn].color]" :show="showNextTurnModal" />
    </div>
</template>

<style scoped>
.game-content {
    background: linear-gradient(180deg, rgba(171, 168, 213, 1) 0%, rgba(61, 59, 186, 0.852000175070028) 50%, rgba(171, 168, 213, 1) 100%);
    position: relative;
    min-height: 100vh;
    width: 100vw;
    overflow-y: hidden;
}

.chat {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 300px;
}

.chat-toggler {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 10px;
    left: 5px;
    width: 60px;
    height: 60px;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 50%;
    cursor: pointer;
}

.chat-toggler:hover {
    background-color: rgba(0, 0, 0, 0.4);
}

.chat-toggler>svg {
    fill: #ffffff;
}

.players {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateY(100%);
}

.slide-enter-to,
.slide-leave-from {
    transform: translateY(0);
}
</style>
