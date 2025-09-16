# Host App

La aplicación principal ("host") orquesta y consume los microfrontends remotos usando Vite Federation.

## Scripts

```sh
pnpm dev      # Desarrollo en puerto 5000
pnpm build    # Compila para producción
pnpm preview  # Sirve la build en local
pnpm start-mf # Compila y sirve para producción federada
```

## Configuración de Federation

- Remotos configurados en `vite.config.ts`.
- Dependencias compartidas: `vue`, `pinia`, `vue-router`.

## Navegación

El host expone rutas que cargan los microfrontends remotos dinámicamente.

## Recomendaciones

- Usa VSCode + Volar para mejor experiencia con Vue y TypeScript.