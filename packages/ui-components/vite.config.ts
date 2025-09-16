import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/index.ts', // Cambia esto por el archivo de entrada principal de tus componentes
      name: 'UiComponents',
      fileName: 'ui-components',
      formats: ['es', 'cjs', 'umd'], // Opcional: formatos de salida
    },
    rollupOptions: {
      // Externaliza dependencias que no quieras empaquetar
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});