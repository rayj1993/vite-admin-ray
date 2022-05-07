import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/sys/login/index.vue'
import HelloWorld from '../components/HelloWorld.vue'
const routes = [
  { path: '/', component: HelloWorld },
  { path: '/login', component: Login },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
