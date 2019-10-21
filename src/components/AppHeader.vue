<template>
    <div class="content">
        <div class="content__header">
            <div class="content__header--left">
                <h1>QUI JE SUIS ?</h1>
                <p>Bonjoue, je m’appelle Andriy Yankivskyy et je suis plombier je suis à votre disposition 24h/24 
                    pour vous dépanner ou même pour réliser des travaux d’envergure ! 
                </p>
                <p>N’hezitez pas à me contacter si vous avez des question ou si vous avez besoin de réliser un devis!</p>
                <div class="selection">
                    <ButtonContact/>
                    <button class="travaux">Voir mes travaux</button>
                </div>
            </div>
            <div class="content__header--right">
                <img src="../assets/plombierPro2.png" alt="Plombier">
            </div>
        </div>
    </div>
</template>

<script>
import ButtonContact from './ui/ButtonContact.vue'
export default {
    components:{
        ButtonContact,
    },
}
</script>

<style lang="scss" scoped>
    .content{
        display: flex;
        justify-content: center;

        &__header{
            width: 90%;
            height: 400px;
            background-color: #FBE1DD;
            border-radius: 10px;
            margin-top: 20px;
            display: flex;
            flex-direction: row;

            &--left{
                width:75%;
                padding: 20px 0px 0px 40px;

                h1{
                    margin: 10px 0px 10px 0px;
                    font-size: 60px;
                    font-weight: normal;
                }
                p{
                    margin-top: 30px;
                }
                .selection{
                    display: flex;
                    margin-top: 55px;

                    .travaux{
                        color: black;
                        width: 168px;
                        height: 40px;
                        background-color: transparent;
                        border-radius: 5px;
                        border: 1px solid black;
                        margin-left: 30px;
                        transition: all 0.4s ease 0s;
                        
                        &:hover{
                            background-color: black;
                            color: white;
                            border: 1px solid black;
                            text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
                            -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
                            -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
                            transition: all 0.4s ease 0s;
                            border: 1px solid;
                        }
                    }
                }
            }

            &--right{
                img{
                    width: 612px;
                    transform: translate(0px, -75px);
                }
            }
        }
    }
</style>