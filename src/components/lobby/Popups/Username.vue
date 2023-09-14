<script setup>
    import Modal from '../../modal/Modal.vue'
    import { ref } from 'vue'

    const username = ref ("");
    const temp = ref("")

    function EnterName() {
        username = temp.toString()
    }
</script>

<template>
    <Modal v-if="username.length==0">
        <div class="userprompt">
            <h1>Please Enter a Username</h1>
            <input type="text" required placeholder="Username" v-model="temp">
            <p>{{ username }}</p>
            <div>
                <button @click="EnterName">Enter Name</button>
            </div>
        </div>
    </Modal>
</template>

<style scoped>
    .userprompt {
        background-color: blue;
        text-align: center;
        font-size: 25px;
    }
    .button {
        padding: 2rem;
        border-radius:10px;
        background: lightgrey;
        margin-bottom:1rem;
        text-align: center;
        font-size: 1.5rem;
        font-weight:700;
        transition: all 600ms ease;
    }
    input{
        padding: 10px;
    }
</style>
