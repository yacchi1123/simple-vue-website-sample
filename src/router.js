import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Work from './components/Work.vue'
import Service from './components/Service.vue'
import Blog from './components/Blog.vue'
import BlogDetail from './components/BlogDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '/service',
      name: 'service',
      component: Service
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/blog-detail',
      name: 'blog-detail',
      component: BlogDetail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // ハッシュがある時にはその地点へとスクロールする
    return to.hash ? { selector: to.hash, offset: { x: 0, y: 64 } } : { x: 0, y: 0 }
    // console.log(to.hash)
    // const offset = { x: 0, y: 10 }
    // return to.hash ? offset : { x: 0, y: 0 }
  }
})
