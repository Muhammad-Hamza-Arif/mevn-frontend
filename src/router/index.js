import { createRouter, createWebHistory } from 'vue-router'
import CreateTask from "../components/CreateTask.vue"
import ReadTaskView from "../views/ReadTaskView.vue"

const routes = [
  {
    path: '/',
    name: 'create',
    component: CreateTask
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/readtaskview',
    name: 'readtask',
    component: ReadTaskView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
