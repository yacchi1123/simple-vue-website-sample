import Vue from 'vue'
import Vuex from 'vuex'
import { sampleApi } from './api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    postItems: []
  },
  getters: {
    getPostItems (state) {
      return state.postItems
    }
  },
  mutations: {
    setPostItems (state, postItems) {
      state.postItems = postItems
    }
  },
  actions: {
    async getPostItemsAction (context, params) {
      let postItems = []
      await sampleApi.get('/posts', { params })
        .then((result) => {
          postItems = result.data
        })
        .catch((e) => {
          console.log(e)
        })
      return postItems
    }
  }
})
