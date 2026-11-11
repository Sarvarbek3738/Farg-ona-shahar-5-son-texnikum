@echo off
title Farg'ona 5-son Politexnika Texnikumi - GitHub va Netlify-ga yuklash
cd /d "%~dp0"
echo ============================================================
echo   1. Asosiy repozitoriyga yuklanmoqda (Backend + Frontend + Admin)...
echo ============================================================
echo.
git push -u origin main
if %ERRORLEVEL% equ 0 (
    echo [OK] Asosiy repozitoriy muvaffaqiyatli yuklandi: Farg-ona-shahar-5-son-texnikum
) else (
    echo [XATOLIK] Asosiy repozitoriyga yuklashda xatolik yuz berdi.
)

echo.
echo ============================================================
echo   2. Netlify repozitoriyasiga yuklanmoqda (Frontend / Texnikum)...
echo ============================================================
echo.
git subtree split --prefix=litsey -b __deploy_temp >nul 2>&1
git push texnikum-frontend __deploy_temp:master --force
git push texnikum-frontend __deploy_temp:main --force
git branch -D __deploy_temp >nul 2>&1

if %ERRORLEVEL% equ 0 (
    echo [OK] Netlify repozitoriyasi muvaffaqiyatli yuklandi: Sarvarbek3738/Texnikum (master va main)
    echo      Netlify avtomatik yangilanishni boshladi!
) else (
    echo [XATOLIK] Netlify repozitoriyasiga yuklashda xatolik yuz berdi.
)

echo.
echo ============================================================
echo   Barcha yangilanishlar yakunlandi!
echo ============================================================
pause
