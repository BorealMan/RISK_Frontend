<script setup>
    import Modal from '../../modal/Modal.vue'
    import { ref } from 'vue'

    const username = ref ("");
    const temp = ref("")

    function EnterName() {
        username.value = temp.value;
    }
</script>

<template>
    <Modal class="modal" v-if="username.length==0">
        <div class="userprompt">
            <h1>Please Enter a Username</h1>
            <input type="text" required placeholder="Username" v-model="temp">
            <div>
                <button @click="EnterName">Enter Name</button>
            </div>
        </div>
    </Modal>
    
</template>

<style scoped>
    .userprompt {
        text-align: center;
        font-size: 1rem;
        color: white;
        padding: 1rem;
        background-color: darkslateblue;
    }
    .modal{
        top:35%;
        left: 25%;
        width: 50%;
    }
    button {
        padding: .25rem;
        border-radius: 10px;
        background: lightgrey;
        margin-top: 1rem;
        text-align: center;
        font-size: 1rem;
        font-weight:700;
    }
    input{
        margin-top: 1rem;
        padding: .1rem;
        font-size: 1rem;
    }
</style>
