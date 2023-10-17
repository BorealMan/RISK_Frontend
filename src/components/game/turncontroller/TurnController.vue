<script setup>
    const { players } = defineProps(['players']);

</script>

<template>
    <div class="turncontroller">
        <div class="player">
            <p>player</p>
        </div>
        <div class="turnphase">
            <p>I'm the turnphase</p>
        </div>
        <div class="turnicon">
            <p>Turn Icon</p>
        </div>
    </div>
</template>

<style scoped>
    .turncontroller{
        position: absolute;
        top: 93%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 5em 20em 0em 0em;
        background-color: grey;
    }
    .player{
        position: absolute;
        top: 50%;
        left: 15%;
        transform: translate(-50%, -50%);
    }
    .turnphase{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: blue;
    }
    .turnicon{
        position: absolute;
        top: 50%;
        left: 87%;
        transform: translate(-50%, -50%);
    }
</style>