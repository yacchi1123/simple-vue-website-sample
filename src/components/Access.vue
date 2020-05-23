<template>
  <section class="access">
    <AppBackgroundHolder :title="title"/>
    <h2>アクセス</h2>
  </section>
</template>
<script>
import AppBackgroundHolder from './AppBackgroundHolder.vue'

export default {
  data () {
    return {
      title: 'Access'
    }
  },
  components: {
    AppBackgroundHolder
  }
}
</script>
