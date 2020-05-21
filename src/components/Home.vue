<template>
  <section>
    <HomeHero/>
    <HomeAbout/>
    <HomeWork/>
    <HomeService/>
    <HomeBlog/>
  </section>
</template>
<script>
import HomeHero from './HomeHero.vue'
import HomeAbout from './HomeAbout.vue'
import HomeWork from './HomeWork.vue'
import HomeService from './HomeService.vue'
import HomeBlog from './HomeBlog.vue'

export default {
  components: {
    HomeHero,
    HomeAbout,
    HomeWork,
    HomeService,
    HomeBlog
  }
}
</script>
