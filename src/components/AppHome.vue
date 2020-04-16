<template>
  <section id="home">
    <AppHomeHero/>
    <AppHomeAbout/>
  </section>
</template>
<script>
import AppHomeHero from './AppHomeHero.vue'
import AppHomeAbout from './AppHomeAbout.vue'

export default {
  name: 'AppHome',
  components: {
    AppHomeHero,
    AppHomeAbout
  }
}
</script>
