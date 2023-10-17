<script setup>

const { players } = defineProps(['players']);

const playerColors = {
    'Red': 'rgb(255, 0, 0)',
    'Blue': 'rgb(0, 0, 255)',
    'Green': 'rgb(0, 255, 0)',
    'Yellow': 'rgb(255, 255, 0)',
    'Purple': 'rgb(128, 0, 128)',
    'Orange': 'rgb(255, 165, 0)'
};

</script>

<template>
    <div class="container">
        <div class="player-container" v-for="(player, index) in players" :key="index">
            <div class="avatar" :style="{ 'background-color': playerColors[player.color] }">
                <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 448 512">
                    <path
                        d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>
            </div>
            <div class="player-details" :style="{ 'background-color': playerColors[player.color] }">
                <h3>{{ player.username }}</h3>
                <!-- Todo: stat tracking -->
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: .5em;
    width: fit-content;
    height: fit-content;
}

.player-container {
    display: flex;
    border-left: none;
    justify-content: center;
    align-items: center;
}

.avatar {
    position: relative;
    z-index: 1;
    border: 3px solid black;
    border-radius: 100%;
    height: 90px;
    width: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: -45px;
}

.player-details {
    border: 3px solid black;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-left: none;
    width: 250px;
    height: 80px;
    padding: 10px 50px;
}

svg {
    fill: black
}

.stats {
    margin-left: 2px;
    display: flex;
    gap: 30px;
}
</style>
