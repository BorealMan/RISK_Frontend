<script setup>
    import { ref } from 'vue'

    const props = defineProps(['setUsername'])

    const username = ref ("");
    const err = ref("");

    function EnterName() {
        // Validate This -> Go To The Server 
        if (username.value === "") {
            err.value = "Username Required"
            return;
        }
        // If Successful
        props.setUsername();
    }
</script>

<template>
    <div class="container">
        <div class="userprompt">
            <h1>Please Enter a Username</h1>
            <input class="text" type="text" placeholder="Username" v-model="username">
            <p class="error">{{ err }}</p>
            <button @click="EnterName">Enter Name</button>
        </div>
    </div>
</template>

<style scoped>
    .userprompt {
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
