<script setup>
    import Modal from '../../modal/Modal.vue'
    import { ref } from 'vue'

    const username = ref ("");

</script>

<template>
    <h1>I'm Lobby</h1>
    <Modal>
        <div class="userprompt">
            <h1>Please Enter a Username</h1>
            <input type="text" v-model="username">
            <!-- <p>{{ username }}</p> -->
        </div>
    </Modal>
</template>

<style scoped>
    .userprompt {
        background-color: blue;
        text-align: center;
        font-size: 25px;
    }
    input{
        padding: 10px;
    }
</style>
