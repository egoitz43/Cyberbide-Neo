import { createClient } from '@base44/sdk';
import { appParams } from '@/lib/app-params';

const { appId, token, functionsVersion, appBaseUrl } = appParams;

// En Base44 la app se sirve desde el mismo origen que su API (serverUrl: '').
// En Cloudflare el frontend vive en otro dominio, así que hay que apuntar el SDK
// al servidor de Base44 (por defecto https://base44.app). Es una variable PÚBLICA.
const serverUrl = import.meta.env.VITE_BASE44_SERVER_URL || 'https://base44.app';

export const base44 = createClient({
  appId,
  token,
  functionsVersion,
  serverUrl,
  requiresAuth: false,
  appBaseUrl,
});
