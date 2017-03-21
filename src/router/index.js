import Vue from 'vue'
import Router from 'vue-router'
import Blogs from 'components/Blogs'

Vue.use(Router)

const routes = [
  {
    path: '/blogs',
    name: 'blogs',
    component: Blogs
  }
]

export default new Router({
  routes
})
