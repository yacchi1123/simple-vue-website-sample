<template>
<section id="home-about" class="home-about">
  <div class="section__title">
    <div class="section__title-text">01. About Me</div>
  </div>
  <v-container>
    <v-row class="home-about__contents wrap">
      <v-col md="5">
        <img src="https://yacchi-engineer.com/wp-content/uploads/2020/04/category_freelance.jpg" alt="" class="img-fluid">
      </v-col>
      <v-col md="5" class="home-about__contents-text">
        <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
        <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
        <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
      </v-col>
    </v-row>
  </v-container>
</section>
</template>
<script>
</script>
<style  lang="scss" scoped>
.section__title {
  padding-top: 120px;
  text-align: center;

  &-text {
    font-weight: 700;
    font-size: 40px;
    color: #e65f78;
  }
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.home-about__contents {
  margin-top: 20px;
  justify-content: center;
}

.home-about__contents-text {
  word-wrap: break-word;
}

</style>
