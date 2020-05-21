<template>
  <section class="home-blog">
    <div class="section__title">
      <div class="section__title-text">04. My Blog</div>
    </div>
    <v-container>
      <v-row class="home-blog__contents">
        <v-col md="8">
          <v-card
            v-for="(postItem, index) in postItems"
            :key="index"
          >
            <p class="home-blog__contents-text">{{ postItem.title }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import { sampleApi } from '../api/axios'

export default {
  data () {
    return {
      postItems: []
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    async fetch () {
      const params = {
        userId: 1
      }
      await sampleApi.get('/posts', { params })
        .then((result) => {
          console.log(result.data)
          this.postItems = result.data
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
}
</script>
<style  lang="scss" scoped>
.home-blog__contents {
  margin-top: 20px;
  justify-content: center;
}

.home-blog__contents-text {
  padding: 10px;
}
</style>
