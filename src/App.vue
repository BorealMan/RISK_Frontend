<script setup>
import { GameStore } from './store/game';
import Homepage from './components/Homepage.vue';
import Lobby from './components/Lobby.vue'
import Players from './components/players/Players.vue';
import { storeToRefs } from 'pinia'

// Init State
const gamestore = GameStore()

const { GameKey } = storeToRefs(gamestore)

</script>

<template>
  <!-- <ClickerExample /> -->
  <Lobby v-if="Game !== undefined" />
  <Homepage v-else />
  <!-- <Players /> -->
</template>

<style scoped></style>
