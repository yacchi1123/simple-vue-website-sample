<template>
  <section class="blog">
    <AppBackgroundHolder :title="title"/>
    <v-container>
      <v-row class="blog__contents">
        <v-col md="8">
          <v-card
            v-for="(postItem, index) in postItems"
            :key="index"
            :to="{ name: 'blog-detail', query: {id: postItem.id} }"
          >
            <p class="blog__contents-text">{{ postItem.title }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import AppBackgroundHolder from './AppBackgroundHolder.vue'

export default {
  data () {
    return {
      title: 'Blog',
      postItems: []
    }
  },
  components: {
    AppBackgroundHolder
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
          this.postItems = this.$store.getters.getPostItems
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.blog__contents {
  margin-top: 20px;
  justify-content: center;
}

.blog__contents-text {
  padding: 10px;
  font-weight: bold;
}
</style>
