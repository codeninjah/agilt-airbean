import Vue from 'vue'
import VueRouter from 'vue-router'
import Nav from '../views/Nav.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Nav',
    component: Nav
  },
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
