<script setup>
import { ref } from 'vue'
// Global Styles
import './assets/styles/style.css';
// Components
import Homepage from './components/Homepage.vue';
import Lobby from './components/lobby/Lobby.vue'
// State Imports
import GameStore from './store/game.js'
import { storeToRefs } from 'pinia';

const gamestore = GameStore()
const game = storeToRefs(gamestore)

// setInterval(() => console.log(game.value), 5000)

</script>

<template>
  <!-- <Lobby v-if="Game !== undefined" /> -->
  <!-- <Homepage /> -->
  <!-- <Players /> -->
  <!-- <Chat /> -->
  <!-- <Lobby /> -->
  <!-- <SIO /> -->
  <Lobby v-if="game.game_state == 0"/>
  <Homepage v-else/>
</template>

