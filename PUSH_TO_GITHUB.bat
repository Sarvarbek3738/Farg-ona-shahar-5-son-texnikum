@echo off
title Farg'ona 5-son Politexnika Texnikumi - GitHub-ga yuklash
cd /d "%~dp0"
echo ============================================================
echo   Loyiha GitHub-ga yuklanmoqda...
echo ============================================================
echo.
"C:\Program Files\Git\cmd\git.exe" push -u origin main
echo.
if %ERRORLEVEL% equ 0 (
    echo [MUVAFFAQIYAT] Loyiha GitHub-ga muvaffaqiyatli yuklandi!
) else (
    echo [XATOLIK] Yuklashda xatolik yuz berdi. 
    echo Agar brauzerda GitHub oynasi ochilsa, 'Sign in with your browser' tugmasini bosing.
)
echo.
pause
