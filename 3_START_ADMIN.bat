@echo off
title 5-sonli Politexnika Texnikumi - Admin Panel
cd /d "%~dp0litsey-admin"
echo [INFO] Admin panel ishga tushirilmoqda: http://localhost:3001
echo [INFO] Login: admin
echo [INFO] Parol: admin123
echo.
npm run dev
pause
