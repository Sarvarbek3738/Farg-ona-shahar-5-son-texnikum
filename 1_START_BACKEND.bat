@echo off
title Farg'ona shahar 5-son texnikumi - Backend
cd /d "%~dp0akademiklitsey-backend"
echo [INFO] Backend ishga tushirilmoqda: http://localhost:8000
echo [INFO] Swagger API hujjatlari: http://localhost:8000/
echo [INFO] Django Admin: http://localhost:8000/admin/
echo [INFO] Login: admin , Parol: admin123
echo.
call ".\venv\Scripts\activate.bat"
".\venv\Scripts\python.exe" manage.py runserver 8000
pause
