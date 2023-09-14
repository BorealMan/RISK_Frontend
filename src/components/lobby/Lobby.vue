<script setup>
    import { ref } from 'vue'
    import Username from './Popups/Username.vue'
    import Modal from "../modal/Modal.vue"

    const isUsernameSet = ref(false);
    const setUsername = () => {
        isUsernameSet.value = true;
    }

    const isLobbySet = ref(false);
    const setLobby = () => {
        isLobbySet.value = true;
    }

</script>

<template>
    <Modal v-show="!isUsernameSet">
        <Username :setUsername="setUsername" />
    </Modal>

    <Modal v-show="isUsernameSet && !isLobbySet">

    </Modal>
       
    <h1>I am the lobby</h1>
</template>

<style scoped>

</style>
