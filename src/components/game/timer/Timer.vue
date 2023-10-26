<script setup>
    const { playerColor } = defineProps(['playerColor']);

    const max_time = 90;
    const time = 60;

    function TimeCalc(){
        const percentFilled = (100/max_time)*time;
        let result = `${percentFilled}%`;
        return result;
    }
</script>

<template>
    <div class="timer" >
        <div class="timeleft" @click="TimeCalc" :style="{ width: TimeCalc(), backgroundColor: playerColor }"></div>
    </div>
</template>

<style scoped>
    .timer{
        position: absolute;
        top:0;
        left:0;
        right:0;
        background-color: rgb(10, 10, 10, .5);
        padding: 1px 0;
    }
    .timeleft{
        padding: 5px 0;
    }
</style>