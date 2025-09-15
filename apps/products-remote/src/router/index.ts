import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Ejemplo de ruta
    // { path: '/', component: HomePage }
  ],
})

export default router