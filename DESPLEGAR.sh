#!/usr/bin/env bash
set -e
echo "==== CYBERBIDE: despliegue en Cloudflare ===="
[ -f .env.production ] || { cp .env.example .env.production; echo "Creado .env.production"; }
npm install
npm run build
npx wrangler login
npx wrangler deploy
