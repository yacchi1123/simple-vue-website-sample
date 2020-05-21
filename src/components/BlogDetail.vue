<template>
  <section class="blog-detail">
    <AppBackgroundHolder :title="title"/>
    <h2>{{blogTitleText}}</h2>
    <p>{{blogBodyText}}</p>
  </section>
</template>
<script>
import AppBackgroundHolder from './AppBackgroundHolder.vue'

export default {
  data () {
    return {
      title: 'Blog Detail',
      blogTitleText: '',
      blogBodyText: ''
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
        userId: '1',
        id: this.$route.query.id
      }
      this.$store.dispatch('getPostItemsAction', params)
        .then((result) => {
          this.$store.commit('setPostItems', result)
          const postItem = this.$store.getters.getPostItems[0]
          this.blogTitleText = postItem.title
          this.blogBodyText = postItem.body
        })
    }
  }
}
</script>
