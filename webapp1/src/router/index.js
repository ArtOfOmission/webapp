import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/Home'
import Hello from '../components/pages/Hello.vue'
import Posts from '../components/pages/Posts.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path:'/Hello',
      name:'Hello', 
      component:Hello
    },
    {
      path:'/Posts',
      name:'Posts',
      component:Posts
    }
  ]
})