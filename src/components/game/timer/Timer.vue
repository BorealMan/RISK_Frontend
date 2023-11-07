<script setup>
    const { playerColor, percentFilled } = defineProps(['playerColor', 'percentFilled']);


    // function TimeCalc() {
    //     // const percentFilled = (100/max_time)*60;
    //     const percentFilled = (seconds/max_seconds)*60;
    //     // const percentFilled = (seconds/max_seconds)*60;
    //     let result = `${percentFilled}%`;

    //     console.log(result)
    //     return result;
    // }
</script>

<template>
    <div class="timer" >
        <div class="timeleft" :style="{ width:percentFilled, backgroundColor: playerColor }"></div>
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