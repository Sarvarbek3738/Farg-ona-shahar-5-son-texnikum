from django.core.management.base import BaseCommand
from django.utils import timezone
from datetime import date, timedelta
import os
import secrets
from accounts.models import User
from settings_app.models import SiteSettings, Slider
from main.models import Statistic
from structure.models import Department, Management
from admission.models import AdmissionInfo, AdmissionSubject, AdmissionDocument, FAQ, DarsJadvali
from content.models import News, Announcement


class Command(BaseCommand):
    help = "Dastlabki ma'lumotlar va administrator profilini yaratadi."

    def handle(self, *args, **options):
        self.stdout.write("Boshlang'ich ma'lumotlarni yaratish boshlandi...")

        # 1. Admin foydalanuvchi
        admin_username = os.environ.get("ADMIN_USERNAME", "admin")
        admin_email = os.environ.get("ADMIN_EMAIL", "admin@litsey.uz")
        admin_password = os.environ.get("ADMIN_PASSWORD") or secrets.token_urlsafe(18)
        admin_user, created = User.objects.get_or_create(
            username=admin_username,
            defaults={
                "email": admin_email,
                "first_name": "Admin",
                "last_name": "Boshqaruvchi",
                "role": User.ROLE_ADMIN,
                "is_staff": True,
                "is_superuser": True,
            }
        )
        if created:
            admin_user.set_password(admin_password)
            admin_user.save()
            self.stdout.write(self.style.SUCCESS(
                f"Admin yaratildi: login: {admin_username}, vaqtinchalik parol: {admin_password}"
            ))
            if "ADMIN_PASSWORD" not in os.environ:
                self.stdout.write(self.style.WARNING(
                    "Parol avtomatik yaratildi. Uni hozir xavfsiz joyga saqlang va birinchi kirishda almashtiring."
                ))
        else:
            self.stdout.write("Admin foydalanuvchi allaqachon mavjud.")

        # 2. Sayt sozlamalari
        if not SiteSettings.objects.exists():
            SiteSettings.objects.create(
                short_name_uz="5-son Politexnika Texnikumi",
                short_name_ru="Политехнический техникум №5",
                short_name_en="Polytechnic Technical College No. 5",
                full_name_uz="Farg'ona viloyati 5-sonli politexnika texnikumi",
                full_name_ru="Политехнический техникум №5 Ферганской области",
                full_name_en="Fergana Regional Polytechnic Technical College No. 5",
                address_uz="Farg'ona viloyati, Farg'ona shahri, Sanoat ko'chasi, 5-uy",
                address_ru="Ферганская область, город Фергана, улица Саноат, дом 5",
                address_en="5, Sanoat street, Fergana city, Fergana region",
                phone="+998 73 244 05 05",
                email="info@5texnikum.uz",
                website="https://5texnikum.uz",
                established_year=1998,
                telegram="https://t.me/texnikum5_uz",
                instagram="https://www.instagram.com/texnikum5_uz",
                facebook=None,
                youtube="https://youtube.com",
            )
            self.stdout.write(self.style.SUCCESS("Sayt sozlamalari yaratildi."))

        # 3. Statistikalar
        stats_data = [
            {"key": "students", "value": 550, "label_uz": "O'quvchilar soni", "label_ru": "Количество учащихся", "label_en": "Number of students", "icon": "users", "sort_order": 1},
            {"key": "teachers", "value": 45, "label_uz": "Malakali o'qituvchilar", "label_ru": "Квалифицированные педагоги", "label_en": "Qualified teachers", "icon": "graduation-cap", "sort_order": 2},
            {"key": "clubs", "value": 25, "label_uz": "Fan va kasbiy to'garaklar", "label_ru": "Кружки и секции", "label_en": "Clubs and sections", "icon": "trophy", "sort_order": 3},
            {"key": "rooms", "value": 18, "label_uz": "Zamonaviy ustaxona va laboratoriyalar", "label_ru": "Современные лаборатории", "label_en": "Modern laboratories", "icon": "school", "sort_order": 4},
        ]
        for s in stats_data:
            Statistic.objects.get_or_create(key=s["key"], defaults=s)
        self.stdout.write(self.style.SUCCESS("Statistikalar tayyorlandi."))

        # 4. Kafedralar
        depts = [
            {
                "name_uz": "Axborot texnologiyalari va raqamli tizimlar",
                "name_ru": "Информационные технологии и цифровые системы",
                "name_en": "Information Technologies and Digital Systems",
                "description_uz": "Dasturlash, kompyuter tarmoqlari, kiberxavfsizlik va axborot tizimlari o'qitiladi.",
                "sort_order": 1,
            },
            {
                "name_uz": "Muhandislik va mexanika",
                "name_ru": "Инженерия и механика",
                "name_en": "Engineering and Mechanics",
                "description_uz": "Elektrotexnika, mexatronika, avtomatika va transport vositalari texnologiyalari.",
                "sort_order": 2,
            },
            {
                "name_uz": "Xorijiy tillar kafedrasi",
                "name_ru": "Кафедра иностранных языков",
                "name_en": "Department of Foreign Languages",
                "description_uz": "Kasbiy ingliz, nemis va rus tillari xalqaro standartlar asosida o'qitiladi.",
                "sort_order": 3,
            },
            {
                "name_uz": "Ijtimoiy-iqtisodiy va umumta'lim fanlar",
                "name_ru": "Социально-экономические и общеобразовательные дисциплины",
                "name_en": "Socio-economic and General Education Disciplines",
                "description_uz": "Iqtisodiyot asoslari, moliya, huquq va umumta'lim fanlari.",
                "sort_order": 4,
            },
        ]
        for d in depts:
            Department.objects.get_or_create(name_uz=d["name_uz"], defaults=d)
        self.stdout.write(self.style.SUCCESS("Kafedralar yaratildi."))

        # 5. Rahbariyat
        if not Management.objects.exists():
            Management.objects.create(
                full_name="Boltaboyev Iqboljon Tursunaliyevich",
                position_uz="5-sonli politexnika texnikumi direktori",
                position_ru="Директор политехнического техникума №5",
                position_en="Director of Polytechnic Technical College No. 5",
                phone="+998 73 244 05 01",
                email="director@5texnikum.uz",
                photo="management_photos/boltaboyev_iqboljon.png",
                reception_hours_uz="Dushanba - Chorshanba: 14:00 - 17:00",
                reception_hours_ru="Понедельник - Среда: 14:00 - 17:00",
                sort_order=1,
            )
            Management.objects.create(
                full_name="Turg'unov Mirjalol Rayimovich",
                position_uz="O'quv ishlari bo'yicha direktor o'rinbosari (O'IBDO')",
                position_ru="Заместитель директора по учебной работе",
                position_en="Deputy Director for Academic Affairs",
                phone="+998 73 244 05 02",
                email="academic@5texnikum.uz",
                photo="management_photos/turgunov_mirjalol.jpeg",
                reception_hours_uz="Seshanba - Payshanba: 10:00 - 13:00",
                reception_hours_ru="Вторник - Четверг: 10:00 - 13:00",
                sort_order=2,
            )
            Management.objects.create(
                full_name="Mirzayeva Sohibaxon Akramovna",
                position_uz="Ma'naviy-ma'rifiy ishlar bo'yicha direktor o'rinbosari (MMIBDO')",
                position_ru="Заместитель директора по духовно-просветительской работе",
                position_en="Deputy Director for Spiritual and Educational Affairs",
                phone="+998 73 244 05 03",
                email="youth@5texnikum.uz",
                photo="management_photos/mirzayeva_sohibaxon.png",
                reception_hours_uz="Dushanba - Juma: 14:00 - 16:00",
                reception_hours_ru="Понедельник - Пятница: 14:00 - 16:00",
                sort_order=3,
            )
            self.stdout.write(self.style.SUCCESS("Rahbariyat ma'lumotlari yaratildi."))

        # 6. Qabul ma'lumotlari
        current_year = timezone.now().year
        academic_year_str = f"{current_year}-{current_year + 1}"
        if not AdmissionInfo.objects.filter(is_active=True).exists():
            AdmissionInfo.objects.create(
                academic_year=academic_year_str,
                total_quota=200,
                grant_quota=50,
                contract_quota=150,
                application_start=date.today(),
                application_end=date.today() + timedelta(days=90),
                exam_date=date.today() + timedelta(days=100),
                results_date=date.today() + timedelta(days=110),
                is_active=True,
            )
            self.stdout.write(self.style.SUCCESS("Faol qabul ma'lumoti yaratildi."))

        # 7. Qabul hujjatlari
        docs = [
            {"document_name_uz": "Shaxsni tasdiqlovchi hujjat (Tug'ilganlik guvohnomasi yoki pasport/ID karta nusxasi)", "is_required": True, "sort_order": 1},
            {"document_name_uz": "9-sinf yoki 11-sinfni bitirganlik to'g'risidagi shahodatnoma/attestat", "is_required": True, "sort_order": 2},
            {"document_name_uz": "086-U shaklidagi tibbiy ma'lumotnoma", "is_required": True, "sort_order": 3},
            {"document_name_uz": "3.5x4.5 o'lchamdagi 6 dona rangli fotosurat", "is_required": True, "sort_order": 4},
        ]
        for doc in docs:
            AdmissionDocument.objects.get_or_create(document_name_uz=doc["document_name_uz"], defaults=doc)

        # 8. FAQ
        faqs = [
            {
                "question_uz": "Politexnika texnikumiga hujjat topshirish tartibi qanday?",
                "answer_uz": "Hujjatlar texnikum qabul komissiyasi yoki my.edu.uz portali orqali onlayn topshiriladi.",
                "category": FAQ.Category.ADMISSION,
                "is_featured": True,
                "sort_order": 1,
            },
            {
                "question_uz": "Texnikumda o'qish muddati necha yil?",
                "answer_uz": "Politexnika texnikumida ta'lim muddati tanlangan mutaxassislikka qarab 2 yildan 3 yilgacha davom etadi.",
                "category": FAQ.Category.EDUCATION,
                "is_featured": True,
                "sort_order": 2,
            },
            {
                "question_uz": "Yotoqxona bilan ta'minlanadimi?",
                "answer_uz": "Ha, uzoq tumanlardan kelgan o'quvchilar uchun shinam yotoqxona mavjud.",
                "category": FAQ.Category.GENERAL,
                "is_featured": True,
                "sort_order": 3,
            },
        ]
        for f in faqs:
            FAQ.objects.get_or_create(question_uz=f["question_uz"], defaults=f)

        # 9. Yangiliklar va E'lonlar
        if not News.objects.exists():
            News.objects.create(
                title_uz="Yangi o'quv yiliga tayyorgarlik ishlari yakunlandi",
                short_description_uz="5-sonli politexnika texnikumida yangi o'quv yiliga to'liq tayyorgarlik ko'rildi va zamonaviy ustaxonalar jihozlandi.",
                content_uz="Farg'ona viloyati 5-sonli politexnika texnikumida yangi o'quv laboratoriyalari, kompyuter sinflari va amaliy ustaxonalar to'liq zamonaviylashtirildi.",
                status=News.Status.PUBLISHED,
                is_featured=True,
                published_at=timezone.now(),
                created_by=admin_user,
            )
            News.objects.create(
                title_uz="Yosh muhandislar ko'rik-tanlovi g'oliblari aniqlandi",
                short_description_uz="Texnikumimiz o'quvchilari texnika va axborot texnologiyalari ko'rik-tanlovlarida faxrli o'rinlarni egallashdi.",
                content_uz="Iqtidorli yoshlarimiz va ularning ustozlari texnikum rahbariyati tomonidan esdalik sovg'alari va diplomlar bilan taqdirlandi.",
                status=News.Status.PUBLISHED,
                is_featured=True,
                published_at=timezone.now(),
                created_by=admin_user,
            )

        if not Announcement.objects.exists():
            Announcement.objects.create(
                title_uz="Ochiq eshiklar kuni e'lon qilinadi",
                short_description_uz="Barcha 9- va 11-sinf bitiruvchilari hamda ota-onalarni texnikumimiz bilan tanishishga taklif etamiz.",
                content_uz="Ochiq eshiklar kuni davomida dars jarayonlari, kasbiy amaliyot ustaxonalari, to'garaklar va yotoqxona sharoitlari namoyish etiladi.",
                status=Announcement.Status.PUBLISHED,
                is_important=True,
                published_at=timezone.now(),
                created_by=admin_user,
            )

        self.stdout.write(self.style.SUCCESS("Barcha boshlang'ich ma'lumotlar muvaffaqiyatli saqlandi!"))
