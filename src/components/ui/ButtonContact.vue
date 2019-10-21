<template>
    <button class="contact" @click="toggleContactModal">
        <img class="phone" src="../../assets/phone.svg" alt="contact">
        Contactez moi
    </button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions([
            "toggleContactModal",
        ]),
    },
}
</script>

<style lang="scss" scoped>
    .contact{
        color: white;
        width: 168px;
        height: 40px;
        background-color: #000000;
        border-radius: 5px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.4s ease 0s;

        &:hover{
            text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
            -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
            -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
            transition: all 0.4s ease 0s;
        }

        .phone{
            width: 27px;
            margin-right: 10px;
        }
    }
</style>