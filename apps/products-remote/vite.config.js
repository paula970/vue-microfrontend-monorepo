import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import federation from '@originjs/vite-plugin-federation'; // 1. Importar el plugin
// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
        federation({
            name: 'products_remote', // Nombre único para el microfrontend
            filename: 'remoteEntry.js', // Archivo que el host usará para conectarse
            exposes: {
                // La "API pública" de este microfrontend
                // Clave (cómo se importa) : Valor (ruta al archivo)
                './ProductListPage': './src/pages/ProductListPage.vue',
            },
            shared: ['vue', 'pinia'], // Dependencias a compartir para no duplicarlas
        }),
    ],
    // 3. (IMPORTANTE) Asignar un puerto único para el servidor de desarrollo
    server: {
        port: 5001,
    },
});
