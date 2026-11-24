import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(async ({ command }) => {
  const plugins = [react()]

  // El plugin de Base44 solo sirve dentro del editor / desarrollo local
  // (proxy de /api, edición visual, notificaciones de navegación).
  // En el build de producción para Cloudflare no se incluye.
  if (command === 'serve') {
    const { default: base44 } = await import('@base44/vite-plugin')
    plugins.unshift(
      base44({
        legacySDKImports: process.env.BASE44_LEGACY_SDK_IMPORTS === 'true',
        hmrNotifier: true,
        navigationNotifier: true,
        analyticsTracker: true,
        visualEditAgent: true,
      }),
    )
  }

  return { plugins }
})
