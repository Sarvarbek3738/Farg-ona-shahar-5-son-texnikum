@echo off
title Farg'ona 5-son Politexnika Texnikumi - GitHub-ga yuklash
cd /d "%~dp0"
echo ============================================================
echo   Loyiha GitHub-ga yuklanmoqda...
echo   Repozitoriy: Farg-ona-shahar-5-son-texnikum
echo ============================================================
echo.
git push -u origin main
echo.
if %ERRORLEVEL% equ 0 (
    echo [MUVAFFAQIYAT] Loyiha GitHub-ga muvaffaqiyatli yuklandi!
    echo Havola: https://github.com/Sarvarbek3738/Farg-ona-shahar-5-son-texnikum
) else (
    echo [XATOLIK] Yuklashda xatolik yuz berdi.
    echo Agar brauzerda GitHub oynasi ochilsa, 'Sign in with your browser' tugmasini bosing.
)
echo.
pause
