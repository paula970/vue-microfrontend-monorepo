// Declara el módulo para el microfrontend de productos
declare module 'products_remote/ProductListPage' {
  import type { Component } from 'vue';
  const component: Component;
  export default component;
}

// Declara el módulo para el microfrontend de perfil
declare module 'profile_remote/ProfilePage' {
  import type { Component } from 'vue';
  const component: Component;
  export default component;
}

// Añade aquí cualquier otro componente que expongas desde tus remotos