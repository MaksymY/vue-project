<template>
  <div class="competence">
    <h1>Quelque une de mes Compétences</h1>
    <ul>
      <li v-for="(data, index) in myJson" :key="index">
        <img :src="data.image" alt="">
        <p>{{data.description}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import Competence from '../competence.json'

export default {
  name: 'Competence',
  data(){
    return{
      myJson:Competence 
    }
  }, 
}
</script>

<style lang="scss" scoped>
  .competence{
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 40px;
    width: 90%;

    h1{
      font-size: 20px;
      font-weight: normal;
    }
    
    ul{
      margin-top: 20px;
      display: flex;

      li{
        width: 30%;
        display: flex;
        flex-direction: column;

        img{
          width: 70%;
        }
      }
    }
  }
</style>
