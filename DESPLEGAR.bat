@echo off
chcp 65001 >nul
echo ==== CYBERBIDE: despliegue en Cloudflare ====
if not exist .env.production (
  copy .env.example .env.production >nul
  echo Creado .env.production a partir de .env.example
)
call npm install || goto :error
call npm run build || goto :error
call npx wrangler login || goto :error
call npx wrangler deploy || goto :error
echo.
echo LISTO. Arriba tienes la direccion https://cyberbide.TU-CUENTA.workers.dev
pause
exit /b 0
:error
echo.
echo Algo ha fallado. Copia el mensaje de error de arriba y pasaselo a Claude.
pause
exit /b 1
