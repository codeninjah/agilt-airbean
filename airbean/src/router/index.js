import Vue from 'vue'
import VueRouter from 'vue-router'
import Nav from '../views/Nav.vue'
import Menu from '../views/Menu'
import About from '../views/About'
import Profile from '../views/Profile'
import Status from '../views/Status'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Nav',
    component: Nav
  },

  {
    path: '/Menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/Status',
    name: 'Status',
    component: Status
  },


]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
