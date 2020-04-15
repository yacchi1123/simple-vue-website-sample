<template>
  <v-app>
    <AppHeader/>
    <v-content>
      <AppHome/>
    </v-content>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppHome from './components/AppHome.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppHome
  }
}
</script>
