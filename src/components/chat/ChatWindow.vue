<script setup>

const { messages } = defineProps(['messages']);
const user = "test_user";

</script>

<template>
    <div class="chat-content">
        <p class="message" v-for="(msg, index) in messages" :key="index">
            <b id="username">{{ user }}: </b>
            <span class="message-input">{{ msg }}</span>
        </p>
    </div>
</template>

<style scoped>
.chat-content {
    overflow-y: auto;
    border-bottom: 1px solid black;
    flex: 1 1 auto;
}

.message {
    padding: 0.2em;
    background-color: white;
}

.message:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.1);
}
</style>
