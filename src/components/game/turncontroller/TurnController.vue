<script setup>

const { playerColor } = defineProps(['playerColor']);

// Socket Functionalities To Send Events
/*
    Phases: 
        Game Starting:
            - Place Pieces
        Game Started: 
            - Draft
            - Attack
            - Reinforce
*/


</script>

<template>
    <div class="controller">
        <div class="icon-container player" :style="{ backgroundColor: playerColor }">
            <!-- Image here -->
        </div>
        <div class="turn-container" :style="{ borderColor: playerColor }">
            <p class="turn-status">Draft</p>
            <div class="phases">
                <!-- Add active phase check -->
                <div class="phase-pill active-phase" :style="{ borderColor: playerColor }"></div>
                <div class="phase-pill"></div>
                <div class="phase-pill"></div>
            </div>
            <div class="turn-button" :style="{ backgroundColor: playerColor }">
                <!-- Check if player's turn -->
                Next Phase
            </div>
        </div>
        <div class="icon-container dice" :style="{ backgroundColor: playerColor }">
            <!-- Image here -->
        </div>
    </div>
</template>

<style scoped>
.controller {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    margin-bottom: 1em;
}

.icon-container {
    height: 80px;
    width: 80px;
    border: 2px solid rgba(0, 0, 0);
    border-radius: 100%;
}

.player {
    margin-right: -45px;
    z-index: 1;
}

.dice {
    margin-left: -45px;
    z-index: 1;
}

.turn-container {
    background-color: rgba(0, 0, 0, 0.5);
    border: 3px solid red;
    height: 70px;
    width: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.turn-status {
    font-size: 1.3em;
    transform: translateY(-50%);
    color: white;
    font-weight: 900;
    text-transform: uppercase;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: black;
}

.phases {
    display: flex;
    gap: 0.5em;
    transform: translateY(-50%);
    align-items: center;
}

.phase-pill {
    height: 10px;
    width: 45px;
    background-color: gray;
    border: 1px solid black;
    border-radius: 50px;
}

.active-phase {
    background-color: white;
    border: 2px solid red;
}

.turn-button {
    font-size: 1.2em;
    padding: 0.4em 0;
    width: 180px;
    background-color: gray;
    transform: translateY(20%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    font-weight: 900;
    color: white;
    cursor: pointer;
    border: 2px solid rgba(0, 0, 0, 0.8);

    -webkit-text-stroke-width: 1.3px;
    -webkit-text-stroke-color: black;
}
</style>