import Vue from 'vue'
import Router from 'vue-router'
import Blogs from 'components/Blogs'
import About from 'components/About'
import Chat from 'components/Chat'

Vue.use(Router)

const routes = [
  {
    path: '/blogs',
    name: 'blogs',
    component: Blogs
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/chat',
    name: 'chat',
    component: Chat
  }
]

export default new Router({
  routes
})
