<template>
  <div class="profile-card">
    <h2>👤 Perfil de Usuario (Desde el Remoto)</h2>

    <div v-if="user" class="profile-content">
      <img :src="user.avatarUrl" alt="Avatar del usuario" class="avatar" />
      <div class="user-details">
        <h3>{{ user.name }}</h3>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Miembro desde:</strong> {{ formattedDate }}</p>
        <button @click="handleLogout">Cerrar Sesión</button>
      </div>
    </div>
    
    <div v-else>
      <p>Cargando información del usuario...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';

// En un caso real, estos datos vendrían de una llamada a una API
// Para este ejemplo, usamos datos de prueba (mock data)
const user = reactive({
  id: 101,
  name: 'Valentina Restrepo',
  email: 'valentina.r@example.com',
  avatarUrl: 'https://i.pravatar.cc/150?u=valentina',
  memberSince: new Date('2023-05-15T10:00:00Z'),
});

// Una propiedad computada para formatear la fecha
// Esto es una buena práctica para no poner lógica en el template
const formattedDate = computed(() => {
  return user.memberSince.toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
});

// Un método simple para demostrar interactividad
function handleLogout() {
  alert(`Cerrando sesión de ${user.name}...`);
  // Aquí iría la lógica para limpiar el token, etc.
}
</script>

<style scoped>
.profile-card {
  font-family: sans-serif;
  background-color: #f9f9f9;
  padding: 24px;
  border-radius: 12px;
  border: 1px dashed #6c5ce7;
  max-width: 400px;
  margin: auto;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.profile-content {
  display: flex;
  align-items: center;
  gap: 20px;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #6c5ce7;
}

.user-details h3 {
  margin: 0 0 10px;
  color: #333;
}

.user-details p {
  margin: 4px 0;
  color: #666;
}

button {
  margin-top: 15px;
  padding: 10px 15px;
  border: none;
  background-color: #6c5ce7;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #4834d4;
}
</style>