<script setup>
// Global Styles
import './assets/styles/style.css';
// Components
import Homepage from './components/Homepage.vue';
import Lobby from './components/lobby/Lobby.vue'
import Game from './components/game/Game.vue'
// State Imports
import GameStore from './store/game.js'
import { storeToRefs } from 'pinia';
// Util
import { GAMESTATE } from './util/enums';

const gamestore = GameStore()
const { GAME } = storeToRefs(gamestore)

</script>

<template>
  <!-- <Game v-if="GAME.game_state === GAMESTATE.STARTING_GAME" /> -->
  <Game />
  <!-- <Lobby v-if="GAME.game_state === GAMESTATE.FILLING_LOBBY"/> -->
  <!-- <Homepage v-else/> -->
</template>

