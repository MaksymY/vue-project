<template>
  <div class="content">
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
  .content{
    h1{
      font-size: 24px;
      margin-left: 5%;
      margin-top: 40px;
    }
    ul{
      margin-top: 40px;
      display: flex;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;

      li{
        width: 30%;

        img{
          width: 70%;
        }
      }
    }
  }
</style>
