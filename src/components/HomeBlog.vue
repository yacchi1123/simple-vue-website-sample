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
            :to="{ name: 'blog-detail', query: {id: postItem.id} }"
          >
            <p class="home-blog__contents-text">{{ postItem.title }}</p>
          </v-card>
        </v-col>
      </v-row>
      <AppButton :button-text="buttonText" :url="url"/>
    </v-container>
  </section>
</template>
<script>
import AppButton from './AppButton.vue'

export default {
  data () {
    return {
      postItems: [],
      buttonText: '詳しくみる',
      url: '/blog'
    }
  },
  components: {
    AppButton
  },
  mounted () {
    this.fetch()
  },
  methods: {
    fetch () {
      const params = {
        userId: '1'
      }
      this.$store.dispatch('getPostItemsAction', params)
        .then((result) => {
          this.$store.commit('setPostItems', result)
          const tmpPostItems = this.$store.getters.getPostItems
          this.postItems = tmpPostItems.filter((val, index) => index < 5)
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
  font-weight: bold;
}
</style>
