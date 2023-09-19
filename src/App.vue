<script setup>
// Global Styles
import './assets/styles/style.css';
// Components
import Homepage from './components/Homepage.vue';
import Lobby from './components/lobby/Lobby.vue'
// State Imports
import GameStore from './store/game.js'
import { storeToRefs } from 'pinia';

const gamestore = GameStore()
const { Game } = storeToRefs(gamestore)

</script>

<template>
  <!-- <Lobby v-if="Game !== undefined" /> -->
  <!-- <Homepage /> -->
  <!-- <Players /> -->
  <!-- <Chat /> -->
  <!-- <Lobby /> -->
  <!-- <SIO /> -->
  <Lobby v-if="Game.game_state === 0"/>
  <Homepage v-else/>
</template>

