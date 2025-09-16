import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import federation from '@originjs/vite-plugin-federation' // 1. Importar el plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    federation({ // 2. Añadir la configuración de federación
      name: 'host_app', // Nombre para la app contenedora
      remotes: {
        // Dónde encontrar los microfrontends remotos
        // Clave (nombre del remoto) : Valor (URL del remoteEntry.js)
        products_remote: process.env.VITE_PRODUCTS_REMOTE_URL || 'http://localhost:5001/dist/assets/remoteEntry.js',
        profile_remote: process.env.VITE_PROFILE_REMOTE_URL || 'http://localhost:5002/dist/assets/remoteEntry.js',
      },
      shared: ['vue', 'pinia', 'vue-router'], // Compartir las mismas dependencias
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 3. (IMPORTANTE) Asignar un puerto para el host
  server: {
    port: 5000,
  },
})