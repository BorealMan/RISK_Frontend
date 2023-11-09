<script setup>
import Modal from '../../modal/Modal.vue';

const { player, playerColor, show, newTroops } = defineProps(['player', 'playerColor', 'show', 'newTroops']);

</script>

<template>
    <Modal>
        <div class="get-card-container">
            <div class="bonusmessage">
                <p>Territory Card Bonus!</p>
            </div>
            <div class="card">
                <div class="cardtype">
                    <p>Card Type</p>
                </div>
                <div class="territory">
                    <p>Territory</p>
                </div>
            </div>
            <div class="numofcards">
                <p>+1</p>
            </div>
        </div>
    </Modal>
</template>

<style scoped>
    .bonusmessage{
        position: absolute;
        color: white;
        left: 50%;
        top: 10%;
        font-size: 35px;
        transform: translate(-50%, -50%);
    }
    .card{
        position: absolute;
        background-color: #FFFECB;
        width: 200px;
        height: 250px;
        border-radius: 25px 25px 25px 25px;
        left: 50%;
        top: max(40%, 300px);
        transform: translate(-50%, -50%);
        user-select:none;
    }
    .cardtype{
        position: absolute;
        left: 50%;
        top: 20%;
        transform: translate(-50%, -50%);
    }
    .territory{
        position: absolute;
        left: 50%;
        top: 75%;
        transform: translate(-50%, -50%);
    }
    .numofcards{
        position: absolute;
        left: 50%;
        top: 80%;
        color: white;
        font-size: 35px;
        transform: translate(-50%, -50%);
    }
</style>
