// En: apps/profile-remote/vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import federation from '@originjs/vite-plugin-federation';
export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
        federation({
            name: 'profile_remote', // <-- Nombre único para el remoto
            filename: 'remoteEntry.js',
            exposes: {
                // Asegúrate de que la ruta a tu componente sea correcta
                './ProfilePage': './src/pages/ProfilePage.vue',
            },
            shared: ['vue', 'pinia'],
        }),
    ],
    server: {
        port: 5002, // <-- Puerto único para este microfrontend
    },
    // ... tu otra configuración
});
