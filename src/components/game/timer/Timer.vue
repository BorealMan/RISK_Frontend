<script setup>
    import { ref } from 'vue'

    const { playerColor } = defineProps(['playerColor']);

    const time = ref(80);

    function TimeCalc(){
        time = (100/90)*time;
        let result = time.toString();

        result = result.append('%');

        return result;
    }
</script>

<template>
    <div class="timer" @click="TimeCalc" :style="{ width: TimeCalc() }">
        <div class="timeleft" :style="{ backgroundColor: playerColor }">
        </div>
    </div>
</template>

<style scoped>
    .timer{
        float: left;
        position: absolute;
        top: 0;
        background-color: gray;
    }
    .timeleft{
        padding: 5px 5px 5px 0px;
    }
</style>