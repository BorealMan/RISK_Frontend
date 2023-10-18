<script setup>

const { messages, players, theme } = defineProps(['messages', 'players', 'theme']);

const playerColors = {
    'Red': 'rgba(255, 0, 0, 0.7)',
    'Blue': 'rgba(0, 0, 255, 0.7)',
    'Green': 'rgba(0, 255, 0, 0.7)',
    'Yellow': 'rgba(255, 255, 0, 0.7)',
    'Purple': 'rgba(128, 0, 128, 0.7)',
    'Orange': 'rgba(255, 165, 0, 0.7)',
};

const systemColor = 'white';

</script>

<template>
    <div class="chat-content">
        <p class="message" :class="theme" v-for="(msg, index) in messages" :key="index">
            <b v-if="msg.playerid < 0" 
                :style="{ 'color': systemColor }" 
                id="username"> System:  
            </b>
            <b v-else
                :style="{ 'color': playerColors[players[msg.playerid].color] }" 
                id="username">{{ players[msg.playerid].username }}: 
            </b>
            <span class="message-input" :class="theme">{{ msg.message }}</span>
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

.message-input {
    color: whitesmoke;
}

/* Dark Theme */
.message.dark {
    padding: 0.2em;
    background-color: rgba(0, 0, 0, 0.5);
}

.message.dark:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.1);
}

/* Light Theme */
.message.light {
    padding: 0.2em;
    background-color: rgba(200, 200, 200, 0.9);
}

.message.light:nth-child(even) {
    background-color: rgba(200, 200, 200, 0.7);
}

</style>
