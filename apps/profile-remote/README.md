# Profile Remote

Microfrontend que expone la página de perfil para ser consumida por el host.

## Scripts

```sh
pnpm dev      # Desarrollo en puerto 5002
pnpm build    # Compila para producción
pnpm preview  # Sirve la build en local
pnpm start-mf # Compila y sirve para producción federada
```

## Exposición

- El componente principal se expone vía Vite Federation en `vite.config.ts`.
- Accesible desde el host en la ruta configurada.

## Dependencias

- `vue`, `pinia`
- `@vue-mfe/ui-components` (si usas componentes compartidos)

## Recomendaciones

- Mantén el código enfocado en la funcionalidad de perfil y expón solo lo necesario al host.