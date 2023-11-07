<script setup>

const { player, playerColor } = defineProps(['player', 'playerColor']);


</script>

<template>
    <div class="namedisplay" :style="{ backgroundColor: playerColor }">
        <div class="whosturn">
            <p>It is {{ player }}'s Turn</p>
        </div>
    </div>

    <div class="trooprecieved" :style="{ backgroundColor: playerColor }">
        <p>Recieved Troops</p>
    </div>
    <div class="holder">
        <div class="troopnumholder" :style="{ borderColor: playerColor }"></div>
        <div class="troopamount">
            <h1>3</h1>
        </div>
        <div class="trooptotaltext">
            <p>Troop Total</p>
        </div>
        <div class="numofterritories">
            <p>Troops Awarded for occupying x territories</p>
        </div>
    </div>
</template>

<style scoped>
    .namedisplay{
        position: absolute;
        padding: 2em 14em 2em 14em;
        color: white;
        transform: translate(-50%, -50%);
        top: 5%;
        left: 50%;
        border-radius: 0px 0px 25px 25px;
        user-select:none;
    }
    .whosturn{
        position: absolute;
        font-size: 21px;
        transform: translate(-50%, -50%);
        user-select:none;
    }
    .trooprecieved{
        position: absolute;
        padding: 1em 10em 1em 10em;
        color: white;
        border-radius: 25px 25px 0px 0px;
        font-size: 20px;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 30%;
        user-select:none;
    }
    .holder{
        position: absolute;
        background-color: grey;
        color: white;
        opacity: 0.9;
        padding: 10em 17.1em 10em 17.1em;
        border-radius: 0px 0px 25px 25px;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 59.7%;
        user-select:none;
    }
    .troopamount{
        position: absolute;
        font-size: 20px;
        top: 25%;
        transform: translate(-50%, -50%);
        user-select:none;
    }
    .trooptotaltext{
        position: absolute;
        font-size: 20px;
        top: 50%;
        transform: translate(-50%, -50%);
        user-select:none;
    }
    .troopnumholder{
        position: absolute;
        top: 25%;
        left: 50%;
        border-radius: 100px;
        border-width: 5px;
        border-style: solid;
        padding: 3em;
        transform: translate(-50%, -50%);
    }
    .numofterritories{
        position: absolute;
        font-size: 20px;
        text-align: center;
        top: 70%;
        transform: translate(-50%, -50%);
        user-select:none;
    }
</style>
