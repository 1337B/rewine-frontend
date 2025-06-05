import { createRouter, createWebHistory } from 'vue-router'

// Importar vistas (por ahora creás los archivos vacíos)
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Wines from '../views/Wines.vue'
import ProfileSettings from '../views/ProfileSettings.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/wines', name: 'Wines', component: Wines },
  { path: '/profile/settings', name: 'ProfileSettings', component: ProfileSettings },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
