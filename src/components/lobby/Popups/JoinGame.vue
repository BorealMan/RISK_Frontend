<script setup>
    import { ref } from 'vue'

    const props = defineProps(['setLobby'])

    const gamekey = ref ("");
    const err = ref("");

    function EnterGame() {
        // Validate This -> Go To The Server 
        if (gamekey.value === "") {
            err.value = "No Game Key Entered"
            return;
        }
        // If Successful
        props.setLobby();
    }
</script>

<template>
    <div class="container">
        <div class="gamekeyprompt">
            <h1>Please Enter The Game Key.</h1>
            <input class="text" type="text" placeholder="Ex: ABC123" v-model="gamekey">
            <p class="error">{{ err }}</p>
            <button @click="EnterGame">Enter Game</button>
        </div>
    </div>
</template>

<style scoped>
    .gamekeyprompt {
        text-align: center;
        font-size: 1rem;
        color: white;
        padding: 1rem;
        background-color: darkslateblue;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
    }
    .text{
        margin-top: 1rem;
        padding: .1rem;
        font-size: 1rem;
        text-align: center;
    }
    .error {
        margin-top:1rem;
        font-size:1.25rem;
        color:orange;
        font-weight:600;
    }
    button {
        display:block;  
        margin:auto;
        padding: .25rem;
        border-radius: 10px;
        background: lightgrey;
        margin-top: 1rem;
        text-align: center;
        font-size: 1rem;
        font-weight:700;
    }
</style>
