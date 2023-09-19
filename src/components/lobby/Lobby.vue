<script setup>
import { ref } from 'vue'

// State Imports
import GameStore from '../../store/game.js'
import { storeToRefs } from 'pinia';

const gamestore = GameStore()
const { Game } = storeToRefs(gamestore)


</script>

<template>

    <div>{{ JSON.stringify(Game) }}</div>
    <!-- Display Chat & Players -->


</template>

<style scoped>

</style>
