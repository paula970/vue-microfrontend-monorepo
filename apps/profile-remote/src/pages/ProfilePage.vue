<template>
  <Card :title="user.name">
    <template #header>
      <img :src="user.avatar" alt="Avatar" style="width: 50px; border-radius: 50%;" />
    </template>
    
    <p><strong>Email:</strong> {{ user.email }}</p>

    <template #footer>
      <button>Editar Perfil</button>
    </template>
  </Card>
</template>
<script setup lang="ts">
import { Card } from '@vue-mfe/ui-components';
const user = { name: 'Ana Suárez', email: 'ana@example.com', avatar: 'https://i.pravatar.cc/150?u=valentina' };
</script>
