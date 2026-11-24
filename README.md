# CYBERBIDE · La aventura digital — despliegue en Cloudflare Workers

Arquitectura: **Cloudflare Workers** (alojamiento del frontend compilado) + **Base44** (backend, login, usuarios, datos) + **React + Vite**.

## Estado actual

El ZIP original era una exportación incompleta de Base44. Ya se han incorporado los dos archivos que faltaban (`src/data/worlds.js` y `src/components/mission/SortStep.jsx`), pegados tal cual desde el editor, y todas las importaciones del proyecto resuelven.

Pendiente de revisar:

- **Imágenes:** los retratos, islas e imagen principal están en `worlds.js` como enlaces a `media.base44.com`. Se cargarán desde ahí; si algún día Base44 retira esos archivos, habría que descargarlos y guardarlos en `public/`.
- **`manifest.json`:** `index.html` lo referencia y no está en el ZIP. Si la app original lo tenía, hay que traerlo a `public/`.

## Qué se ha corregido (sin tocar diseño ni funciones)

- `src/api/base44Client.js` era un **simulacro** (datos vacíos). Se ha restaurado el cliente real con `createClient` del SDK oficial de Base44.
- En 8 archivos (login, registro, MFA, recuperación de contraseña, 404…) una línea inyectada creaba un `db` falso; se ha eliminado y se usa el cliente real `base44`. También estaba al principio de `index.html`, que lo rompía.
- `src/lib/app-params.js` usaba `getAccessToken` sin importarlo; se ha añadido el import desde el SDK.
- `vite.config.js` usaba el plugin de Base44 sin importarlo. Ahora solo se carga en desarrollo; el build de Cloudflare no lo necesita.
- En Cloudflare el frontend no comparte origen con la API de Base44, así que el SDK apunta a `https://base44.app` (variable `VITE_BASE44_SERVER_URL`).
- El exportador de Base44 también había cambiado `media.base44.com` por `media.db.com` en `src/components/ui/image-helpers.js`; restaurado.
- `index.html`: favicon restaurado y metas de iOS que sí tiene la web publicada.
- Añadidos `wrangler.jsonc` (con fallback de rutas para React Router), `.env.example`, `wrangler` en `package.json` y scripts `cf:dev` / `cf:deploy`.

## Variables de entorno

Copia `.env.example` a `.env.production`. Todas las `VITE_*` son **públicas** (acaban en el navegador). No hay ningún secreto en el frontend. Si despliegas con Cloudflare Workers Builds (desde Git), define las mismas variables en el panel de la build, porque Vite las incrusta al compilar.

## Despliegue de un clic

- **Windows:** doble clic en `DESPLEGAR.bat` (necesita [Node.js](https://nodejs.org) instalado, versión LTS).
- **Mac/Linux:** `./DESPLEGAR.sh`

Hace `npm install`, `npm run build`, el login de Cloudflare (se abre el navegador) y `npx wrangler deploy`.

## Comandos

```bash
npm install
npm run build
npx wrangler login      # solo la primera vez
npx wrangler deploy
```

Probar en local con el entorno de Cloudflare: `npm run build && npx wrangler dev`.

## Sin verificar todavía

No se ha podido ejecutar `npm install`, la compilación, `wrangler dev` ni el despliegue (el entorno de trabajo no tenía acceso a internet). Solo se ha comprobado que los 123 archivos JS/JSX tienen sintaxis válida y que todas las importaciones locales existen. Hay que confirmar, una vez completo:

1. Que `npm run build` termina sin errores.
2. Que `@base44/sdk/utils/auth-utils` y el export por defecto de `@base44/vite-plugin` existen en las versiones instaladas.
3. **Login y registro**: Base44 puede exigir permitir el dominio de Cloudflare (`*.workers.dev` o el tuyo) como origen/redirección. Pruébalo y, si falla, revisa los ajustes de la app en Base44.
4. Que el progreso, ranking y diploma se comportan igual. En el código recibido se guardan en `localStorage` del navegador (`cyberland.progress.v1`), no en entidades de Base44; no se ha cambiado.
