# Vue Microfrontends Monorepo

Este monorepo implementa una arquitectura de microfrontends usando **Vue 3**, **Vite** y **TypeScript**.  
Incluye una aplicación principal (**host**) y dos microfrontends remotos (**products-remote** y **profile-remote**).

## Estructura

```
apps/
  host/             # Aplicación principal (Host)
  products-remote/  # Microfrontend de productos
  profile-remote/   # Microfrontend de perfil
packages/
  ui-components/    # Componentes UI compartidos (opcional)
```

## Requisitos

- Node.js >= 20
- pnpm (recomendado)
- VSCode + Volar (para soporte de Vue y TypeScript)

## Instalación

```sh
pnpm install
```

## Desarrollo

En terminales separadas, ejecuta:

```sh
pnpm --filter apps-products-remote dev
pnpm --filter apps-profile-remote dev
pnpm --filter apps-host dev
```

## Producción

```sh
pnpm --filter apps-products-remote start-mf
pnpm --filter apps-profile-remote start-mf
pnpm --filter apps-host start-mf
```

## Recursos

- [Vite Federation Plugin](https://github.com/originjs/vite-plugin-federation)
- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)