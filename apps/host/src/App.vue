<template>
  <header>
    <h1>Aplicación Principal (Host)</h1>
    <nav>
      <RouterLink to="/">Home (Local)</RouterLink> |
      <RouterLink to="/products">Productos (Microfrontend)</RouterLink>
      <RouterLink to="/profile">Productos (Microfrontend)</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView /> 
  </main>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>