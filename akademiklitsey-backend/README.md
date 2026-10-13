# Akademik Texnikum — Backend API

Django REST Framework asosida qurilgan Akademik Texnikum maktabi uchun backend API.

## Texnologiyalar

- Python / Django 6.0
- Django REST Framework
- PostgreSQL
- JWT autentifikatsiya
- Gunicorn + WhiteNoise

---

## Local ishga tushirish

```bash
# 1. Virtual environment
python -m venv venv
venv\Scripts\activate        # Windows
# source venv/bin/activate   # Linux/Mac

# 2. Paketlarni o'rnatish
pip install -r requirements.txt

# 3. .env faylini sozlash
copy .env.example .env
# .env faylini tahrirlang

# 4. Migratsiyalar
python manage.py migrate

# 5. Superuser yaratish
python manage.py createsuperuser

# 6. Ishga tushirish
python manage.py runserver
```

---

## Digital Ocean ga Deploy

### 1. Server tayyorlash (Ubuntu 22.04)

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install python3-pip python3-venv postgresql postgresql-contrib nginx -y
```

### 2. PostgreSQL sozlash

```bash
sudo -u postgres psql
CREATE DATABASE academik_texnikum;
CREATE USER academik_user WITH PASSWORD 'kuchli_parol';
GRANT ALL PRIVILEGES ON DATABASE academik_texnikum TO academik_user;
\q
```

### 3. Loyihani serverga yuklash

```bash
git clone https://github.com/username/AcademikLItsey.git
cd AcademikLItsey
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### 4. Production .env sozlash

```bash
cp .env.example .env
nano .env
```

`.env` ichida:
```
DEBUG=False
SECRET_KEY=yangi-kuchli-secret-key
ALLOWED_HOSTS=server-ip,your-domain.com
DATABASE_URL=postgresql://academik_user:kuchli_parol@localhost:5432/academik_texnikum
CORS_ALLOW_ALL_ORIGINS=False
CORS_ALLOWED_ORIGINS=https://your-frontend.com
```

### 5. Static fayllar va migratsiya

```bash
python manage.py migrate
python manage.py collectstatic --noinput
python manage.py createsuperuser
```

### 6. Gunicorn bilan ishga tushirish

```bash
gunicorn core.wsgi:application --bind 0.0.0.0:8000 --workers 3
```

### 7. Systemd service (avtomatik ishga tushirish)

`/etc/systemd/system/academik.service`:
```ini
[Unit]
Description=Akademik Texnikum Gunicorn
After=network.target

[Service]
User=www-data
WorkingDirectory=/path/to/AcademikLItsey
ExecStart=/path/to/venv/bin/gunicorn core.wsgi:application --bind 0.0.0.0:8000 --workers 3
Restart=always

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl enable academik
sudo systemctl start academik
```

### 8. Nginx konfiguratsiya

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location /media/ {
        alias /path/to/AcademikLItsey/media/;
    }

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

---

## Secret key generatsiya qilish

```python
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```
