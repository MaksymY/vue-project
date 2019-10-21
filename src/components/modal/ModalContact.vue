<template>
    <div class="back" @click.self="toggleContactModal">
        <div class="content">
            <div class="content__close">
                <img src="@/assets/delete.svg" 
                    alt="cross close"
                    @click="toggleContactModal">
            </div>
        </div>   
    </div>
</template>
<script>
import {mapActions} from 'vuex'

export default {
    methods:{
        ...mapActions([
            "toggleContactModal",
        ]),
    }
}
</script>
<style lang="scss" scoped>
    .back{
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color:rgba(0, 0, 0, 0.7);
        z-index: 100;
        .content{
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            background-color: white;
            width: 90%;
            height: 90%;
            &__close{
                display: flex;
                justify-content: flex-end;
                img{
                    width: 20px;
                    margin: 20px 20px 0px 0px;
                }
            }
        }
    }
</style>