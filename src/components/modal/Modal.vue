<script setup>

</script>

<template>
    <div class="overlay">
        <slot></slot>
    </div>
</template>

<style scoped>

    .overlay {
        position:absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        background:rgb(48, 48, 48, .1); 
    }

</style>

