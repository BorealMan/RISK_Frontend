<script setup>

const { players, emptyslots } = defineProps(['players', 'emptyslots']);

// const playerColors = [
//     'rgba(255, 0, 0, 0.7)',
//     'rgba(0, 0, 255, 0.7)',
//     'rgba(0, 255, 0, 0.7)',
//     'rgba(255, 255, 0, 0.7)',
//     'rgba(128, 0, 128, 0.7)',
//     'rgba(255, 165, 0, 0.7)'
// ];

</script>

<template>
    <div class="lobby-players">
        <div class="player" v-for="(player, index) in players" :key="index">
            <div class="player-avatar">
                <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 448 512">
                    <path
                        d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>
            </div>
            <div class="player-details">
                <span class="username">{{ player.username }}</span>
            </div>
        </div>

        <div class="player empty-slot" v-for="n in emptyslots" :key="n">
            <div class="player-avatar">
                <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 448 512">
                    <path
                        d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>
            </div>
            <div class="player-details">
                <span class="username">Waiting for player...</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.lobby-players {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0em 2em;
    gap: 10%;
}

.player {
    display: flex;
    border: 3px solid black;
    padding: 0.5em 1em;
    flex: 1 0 40%;
    align-items: center;
    border-radius: 20px;
    gap: 0.5em;
    background-color: rgba(255, 0, 0, 0.7);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.player-details {
    width: 100%;
}

.empty-slot {
    background-color: rgba(200, 200, 200, 0.6);
}

.username {
    font-size: 1.5em;
}

svg {
    fill: #F5F5F5;
}
</style>
