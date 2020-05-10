<template>
  <section id="home">
    <AppHomeHero/>
    <AppHomeAbout/>
    <AppHomeWork/>
  </section>
</template>
<script>
import AppHomeHero from './AppHomeHero.vue'
import AppHomeAbout from './AppHomeAbout.vue'
import AppHomeWork from './AppHomeWork.vue'

export default {
  name: 'AppHome',
  components: {
    AppHomeHero,
    AppHomeAbout,
    AppHomeWork
  }
}
</script>
