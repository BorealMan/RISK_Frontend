<script setup>

const { messages, players } = defineProps(['messages', 'players']);

</script>

<template>
    <div class="chat-content">
        <p class="message" v-for="(msg, index) in messages" :key="index">
            <b id="username">{{ players[msg.playerid-1].username }}: </b>
            <span class="message-input">{{ msg.message }}</span>
        </p>
    </div>
</template>

<style scoped>
.chat-content {
    overflow-y: auto;
    border-bottom: 1px solid black;
    flex: 1 1 auto;
    word-wrap: break-word;
    height:100px;
}

.message {
    padding: 0.2em;
    background-color: rgba(0, 0, 0, 0.5);
}

.message:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.1);
}
</style>
