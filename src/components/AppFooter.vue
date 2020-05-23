<template>
  <v-footer
    dark
  >
    <div class="footer">
      Copyright test 2020. All right reserved
    </div>
  </v-footer>
</template>

<script>
import constants from '../common/constants'

export default {
  data () {
    return {
      drawer: false,
      tab: false,
      menuItems: constants.menuItems
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  margin: auto;
}
</style>
