# Farg'ona shahar 5-sonli Politexnika Texnikumi

Farg'ona shahar 5-sonli Politexnika Texnikumining to'liq veb-platformasi (Backend, Asosiy Sayt va Admin Panel).

---

## 📁 Loyiha tuzilmasi

- **`akademiklitsey-backend/`** — Django REST Framework (Python) orqali yaratilgan backend API va ma'lumotlar bazasi
- **`litsey/`** — React + TypeScript + Vite orqali yaratilgan texnikumning asosiy rasmiy veb-sayti (Frontend)
- **`litsey-admin/`** — React + TypeScript + Vite orqali yaratilgan boshqaruv paneli (Admin Panel)

---

## 🚀 Ishga tushirish (Tezkor)

Loyiha ildiz papkasidagi tayyor `.bat` fayllar orqali barcha qismlarni bir zumda ishga tushirishingiz mumkin:

1. **`1_START_BACKEND.bat`** — Backend API serverini ishga tushiradi: `http://localhost:8000`
2. **`2_START_FRONTEND.bat`** — Asosiy veb-saytni ishga tushiradi: `http://localhost:3000`
3. **`3_START_ADMIN.bat`** — Admin panelni ishga tushiradi: `http://localhost:3001`

---

## 🔐 Standart Admin hisobi
- **Manzil:** `http://localhost:3001`
- **Login:** `admin`
- **Parol:** `admin123`

---

## 🛠 Texnologiyalar
- **Backend:** Python 3.13, Django 5, Django REST Framework, SQLite/PostgreSQL
- **Frontend & Admin:** React 18, Vite, TypeScript, Tailwind CSS, Lucide Icons
