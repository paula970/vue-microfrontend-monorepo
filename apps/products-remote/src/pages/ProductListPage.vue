<template>
  <Card :title="product.name">
    <p>Un teclado excelente para programar y jugar.</p>
    <p><strong>Precio:</strong> ${{ product.price }}</p>

    <template #footer>
      <button>Ver Detalles</button>
      <button>Añadir al Carrito</button>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { Card } from '@vue-mfe/ui-components';
const product = { name: 'Teclado Mecánico', price: 99.99 };
</script>
