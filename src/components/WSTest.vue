<script setup>
import {ref} from 'vue'

const conn = new WebSocket('ws://localhost:5000');

const messages = ref([])
const msg = ref("")

conn.onmessage = (e) => {
    console.log(`New Message: ${e.data}`)
    messages.value.push(e.data)
}

conn.onopen = (e) => {
    console.log("Opened WebSocket")
}

conn.onclose = (e) => {
    console.log("Closed WebSocket")
}

conn.onerror = (e) => {
    console.log("Error In WebSocket")
}


function sendMessage() {
    conn.send(msg.value);
    msg.value = ""
}

function resetMessages() {
    messages.value = [];
}

</script>


<template>
    <h1>WS Test</h1>
    <div>{{ messages }}</div>


    <div class="chat">
        <input type="text" v-model="msg" @keydown.enter="sendMessage" />
        <button @click="sendMessage()">Send</button>
        <button @click="resetMessages">Clear</button>
    </div>

</template>


<style>

</style>