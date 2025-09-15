<template>
  <div class="card">
    <header v-if="title || $slots.header" class="card-header">
      <slot name="header"></slot>
      <h3 v-if="title">{{ title }}</h3>
    </header>

    <div class="card-body">
      <slot></slot>
    </div>

    <footer v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Definimos una prop para el título. Es opcional, ya que se puede usar el slot.
defineProps<{
  title?: string;
}>();
</script>

<style scoped>
.card {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.card-header {
  padding: 1rem;
  border-bottom: 1px solid #e2e8f0;
}

.card-header h3 {
  margin: 0;
  font-size: 1.25rem;
}

.card-body {
  padding: 1rem;
  flex-grow: 1; /* El cuerpo crece para llenar el espacio */
}

.card-footer {
  padding: 1rem;
  background-color: #f7fafc;
  border-top: 1px solid #e2e8f0;
  display: flex;
  justify-content: flex-end; /* Alinea los botones a la derecha */
  gap: 0.5rem;
}
</style>