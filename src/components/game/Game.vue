<script setup>

import { ref } from 'vue'
import GameStore from '../../store/game.js'
import { storeToRefs } from 'pinia';
import Board from './board/Board.vue'
import Players from '../players/Players.vue';
import Chat from '../chat/Chat.vue';


const gamestore = GameStore()
const { Game } = storeToRefs(gamestore)

const players = ref(Game.value.players);


</script>

<template>
    <div class="game-wrapper">
        <Board />
        <div class="game-content">
            <Players :players="players" />
            <Chat :players="players" />
        </div>
    </div>
</template>

<style scoped>
.game-wrapper {
    display: grid;
    grid-template-columns: 1fr 400px;
    background: linear-gradient(180deg, rgba(171, 168, 213, 1) 0%, rgba(61, 59, 186, 0.852000175070028) 50%, rgba(171, 168, 213, 1) 100%);
}

.game-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 2em;
}

.message-input {
    color: white;
}
</style>
