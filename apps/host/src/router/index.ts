import { createRouter, createWebHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue';
import HomeView from '../views/HomeView.vue';

// 1. Importar los componentes de carga y error
import LoadingSpinner from '../components/LoadingSpinner.vue';
import LoadingError from '../components/LoadingError.vue';

// 2. Definir los componentes remotos con opciones avanzadas
const ProductListPage = defineAsyncComponent({
  loader: () => import('products_remote/ProductListPage'), // Función de carga
  loadingComponent: LoadingSpinner,                       // Componente de carga
  errorComponent: LoadingError,                           // Componente de error
  delay: 200,                                             // Espera 200ms antes de mostrar el spinner
});

const ProfilePage = defineAsyncComponent({
  loader: () => import('profile_remote/ProfilePage'), // Asumiendo que existe un MFE de perfil
  loadingComponent: LoadingSpinner,
  errorComponent: LoadingError,
  delay: 200,
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/products',
      name: 'products',
      component: ProductListPage, // 3. Usar el componente asíncrono
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfilePage,     // 3. Usar el componente asíncrono
    },
  ],
});

export default router;