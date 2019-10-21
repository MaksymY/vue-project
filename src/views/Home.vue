<template>
  <div class="home">
    <ModalContact v-show="contactModal"/>
    <AppNav/>
    <AppHeader/>
    <AppCompetence/>
  </div>
</template>

<script>
import AppNav from '@/components/AppNav.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppCompetence from '@/components/AppCompetence.vue'
import ModalContact from '@/components/modal/ModalContact.vue'

import {mapState} from 'vuex'

export default {
  name: 'home',
  components: {
    AppNav,
    AppHeader,
    AppCompetence,
    ModalContact
  },
  computed:{
    ...mapState([
      "contactModal"
    ]),
  }
}
</script>
<style lang="scss" scoped>
  .home{
    display: flex;
    flex-direction: column;
  }
</style>
