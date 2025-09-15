<template>
  <div class="product-list">
    <h2>📦 Página de Productos (Desde el Microfrontend)</h2>
    
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const products = ref([
  { id: 1, name: 'Teclado Mecánico' },
  { id: 2, name: 'Mouse Inalámbrico' },
  { id: 3, name: 'Monitor 4K' },
]);
</script>

<style scoped>
.product-list {
  background-color: #f0f8ff;
  padding: 20px;
  border-radius: 8px;
  border: 1px dashed blue;
}
</style>