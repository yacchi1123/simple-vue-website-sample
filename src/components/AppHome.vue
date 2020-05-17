<template>
  <section v-scroll="onScroll">
    <AppHomeHero class="js-scroll-spy"/>
    <AppHomeAbout class="js-scroll-spy"/>
    <AppHomeWork class="js-scroll-spy"/>
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
  },
  methods: {
    onScroll (e) {
      const els = document.querySelectorAll('.js-scroll-spy')
      els.forEach((el, index) => {
        const elTop = el.getBoundingClientRect().top
        const elBottom = el.getBoundingClientRect().bottom
        if (elTop <= 0 && elBottom >= 0) {
          document.getElementById(`tab-${index}`).click()
        }
      })
    }
  }
}
</script>
