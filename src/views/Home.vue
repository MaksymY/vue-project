<template>
  <div class="home">
    <AppNav/>
    <AppHeader/>
    <AppCompetence/>
  </div>
</template>

<script>
import AppNav from '@/components/AppNav.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppCompetence from  '@/components/AppCompetence.vue'

export default {
  name: 'home',
  components: {
    AppNav,
    AppHeader,
    AppCompetence
  }
}
</script>
