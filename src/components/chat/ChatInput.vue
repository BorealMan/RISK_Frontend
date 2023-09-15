<script setup>
import { ref } from 'vue';

const message = ref('')

const emit = defineEmits();

function sendMessage() {
    if (message.value === "") return;
    emit('send-message', message.value);
    message.value = "";
}

</script>

<template>
    <div class="input-container">
        <input type="text" v-model="message" @keydown.enter="sendMessage" placeholder="Type your message....">
    </div>
</template>

<style scoped>
input {
    padding: 0.2em;
    height: 2em;
    width: 100%;
    border: none;
}

input:focus {
    outline: none;
    border-top: 1px solid black;
    background-color: rgba(0, 0, 0, 0.1);
}
</style>
