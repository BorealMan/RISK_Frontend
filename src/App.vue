<script setup>
import { GameStore } from './store/game';
import Homepage from './components/Homepage.vue';
import Lobby from './components/lobby/Lobby.vue'
import Players from './components/players/Players.vue';

import { storeToRefs } from 'pinia'
// Init State
const gamestore = GameStore()
const { Game } = storeToRefs(gamestore)

</script>

<template>
  <!-- <Lobby v-if="Game !== undefined" /> -->
  <!-- <Homepage v-else /> -->
  <!-- <Players /> -->
  <Lobby />
</template>

<style scoped></style>
