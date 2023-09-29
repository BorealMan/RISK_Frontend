<script setup>
import ChatWindow from './ChatWindow.vue';
import ChatInput from './ChatInput.vue';
import { ref } from 'vue';

const { players } = defineProps(['players']);

import GameStore from '../../store/game.js'
import { storeToRefs } from 'pinia';

const gamestore = GameStore()
const { Game, PlayerID } = storeToRefs(gamestore)

const messages = ref([]);

function addMessage(message) {
    gamestore.SendMessage(message);
}

gamestore.socket.on('message', (res) => {
    messages.value.push(res)
})

</script>

<template>
    <div class="game-chat">
        <ChatWindow :messages="messages" :players="players" />
        <ChatInput @send-message="addMessage" />
    </div>
</template>

<style scoped>
.game-chat {
    width: 400px;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-size: 1em;
    border: 2px solid black;
    border-radius: 0.2em;
    background-color: rgba(0, 0, 0, 0.5);
}
</style>
