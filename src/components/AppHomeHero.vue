<template>
<section id="home-hero" class="home-hero">
  <v-container fluid fill-height class="home-hero__content">
    <v-row>
      <v-col class="home-hero__content-text">
        <p>Welcome to my website.</p>
        <p>I'm a Engineer.</p>
      </v-col>
    </v-row>
  </v-container>
</section>
</template>
<script>
</script>
<style  lang="scss" scoped>
.home-hero__content {
  background: url("https://yacchi-engineer.com/wp-content/uploads/2020/04/category_freelance.jpg");
  background-size: cover;
  width: 100%;
  height: 50vh;

  @include display_pc {
    height: 100vh;
  }

  &-text {
    color: white;
    text-align: center;
    font-size: 28px;
    font-weight: bold;

    @include display_pc {
      font-size: 40px;
    }
  }
}
</style>
