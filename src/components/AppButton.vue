<template>
  <v-row class="home-about__button">
    <v-col>
      <v-btn
        large
        color="error"
        min-width="300"
        :to="url"
      >
        ＞＞{{buttonText}}
      </v-btn>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
}
</script>
