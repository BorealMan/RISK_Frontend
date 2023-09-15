<script setup>

const names = ["Alen", "Ben", "Ryan", "Caleb", "Mike", "Bob"];

const players = names.map((name, i) => ({
    id: i + 1,
    name: name
}));

</script>

<template>
    <div class="container">
        <div class="player-container" v-for="player in players" :key="player.id">
            <div class="avatar">
                <!-- FontAwesome SVG -->
                <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 448 512">
                    <path
                        d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>
            </div>
            <div class="player-details">
                <h3 :id="'username_' + player.id">{{ player.name }}</h3>
                <!-- Troop and country tracker? -->
                <!-- <div class="stats">
                    <span id="">T</span> 
                    <span id="">C</span>
                </div> -->
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0.5em;
    gap: .5em;
    max-width: fit-content;
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
    background-color: white;
}

.player-details {
    border: 3px solid black;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-left: none;
    width: 200px;
    height: 80px;
    padding: 10px 50px;
}

svg {
    fill: #000000
}

.stats {
    margin-left: 2px;
    display: flex;
    gap: 30px;
}
</style>
