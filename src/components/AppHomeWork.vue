<template>
<section id="home-work" class="home-work">
  <div class="section__title">
    <div class="section__title-text">02. My Work</div>
  </div>
  <v-container>
    <v-row class="home-work__contents">
      <v-col sm="8" class="home-work__contents-img">
        <v-carousel
          hide-delimiters
        >
        <a
          v-for="(workItem, index) in workItems"
          :key="index"
          :href="workItem.url"
          target="_blank"
        >
          <v-carousel-item
            :src="workItem.src"
            class="img-fluid"
          >
          </v-carousel-item>
        </a>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</section>
</template>
<script>
import constants from '../common/constants'

export default {
  data () {
    return {
      workItems: constants.workItems
    }
  }
}
</script>
<style  lang="scss" scoped>
.home-work__contents {
  margin-top: 20px;
  justify-content: center;
}

.home-work__contents-img {
  text-align: center;
  height: 300px;
}

.home-about__contents-text {
  word-wrap: break-word;
}

.v-window {
  height: 300px !important;

  @include display_pc {
    height: 500px !important;
  }
}
</style>
