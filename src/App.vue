<script setup>
// Global Styles
import './assets/styles/style.css';
// Components
import Homepage from './components/Homepage.vue';
import Lobby from './components/lobby/Lobby.vue'
import Players from './components/players/Players.vue';
import Chat from './components/chat/Chat.vue';

import SIO from './components/SocketIO.vue';


</script>

<template>
  <!-- <Lobby v-if="Game !== undefined" /> -->
  <!-- <Homepage /> -->
  <!-- <Players /> -->
  <!-- <Chat /> -->
  <!-- <Lobby /> -->
  <SIO />
</template>

