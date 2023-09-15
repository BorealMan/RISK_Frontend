<script setup>
import ChatWindow from './ChatWindow.vue';
import ChatInput from './ChatInput.vue';
import { ref } from 'vue';

const messages = ref([]);

function addMessage(message) {
    messages.value.push(message);
}

</script>

<template>
    <div class="game-chat">
        <ChatWindow :messages="messages" />
        <ChatInput @send-message="addMessage" />
    </div>
</template>

<style scoped>
.game-chat {
    width: 400px;
    height: 200px;
    display: flex;
    flex-direction: column;
    font-size: 1em;
    border: 2px solid black;
    border-radius: 0.2em;
}
</style>
