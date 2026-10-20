import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from django.db import transaction
from structure.models import Teacher, Department

TEACHERS_LIST = [
    "Madmarova Shaxzoda Sayitalimovna",
    "Maqsudova Gulhayo Mirzahamdamovna",
    "Mamadjonova Nigoraxon Muxamedjanovna",
    "Madoripova Dilzoda O'ktamjonovna",
    "Xojiakbarova Gavxaroy Akramjon qizi",
    "Mo'ydinova Marjona Qaxxorjon qizi",
    "Djuraeva Moxlaroyim Dilmurod qizi",
    "Xamidova Zoxida Ashurali qizi",
    "Xamdamov Karimberdi Ibroximovich",
    "Solijonova Moxinur Asrorjon qizi",
    "Turdaliyev Muxammadjon Baxtiyor o'g'li",
    "Abdulxakimov Islom Farxodjon o'g'li",
    "Rasulov Odiljon",
    "Qobilov Baxtiyor Rasuljon o'g'li",
    "Soliyeva Shamshinur Fahriddin qizi",
    "Abduraxmonova Nigoraxon Nimatullaevna",
    "Yulbarsova Maftuna Adxamjon qizi",
    "To'lanova Maftuna Nurmamatovna",
    "Yuldasheva Madinabonu Axror qizi",
    "Abdukarimova Begoyim Dilmurod qizi",
    "Sirojiddinova Oygul Adiljon qizi",
    "Xasanova Sharofat Akmaljon qizi",
    "Isroilova Shoxidaxon Dexqonovna",
    "Axmadjonov Diyorbek Ikromjon o'g'li",
    "Karimov Ubaydullo Mutalib o'g'li",
    "Odilxo'jayev Sarvarbek Ermamat o'g'li",
    "Jo'raboyeva Gulhayoxon Farhodjon qizi",
    "Mamatvaliyev Dilshodbek Xalimjon o'g'li",
    "Yigitaliyev Ro'zimatjon Nodirjon o'g'li",
    "Abduhalilov Yunusali"
]

@transaction.atomic
def run():
    print("Starting teacher import...")

    # Fix existing "Sarvarbek Odilxo'jayev Ermamat o'g'li" if found
    existing_sarvarbek = Teacher.objects.filter(full_name__icontains="Sarvarbek Odilxo'jayev").first()
    if existing_sarvarbek:
        existing_sarvarbek.full_name = "Odilxo'jayev Sarvarbek Ermamat o'g'li"
        existing_sarvarbek.save()
        print(f"Updated existing teacher: {existing_sarvarbek.full_name}")

    created_count = 0
    updated_count = 0

    for idx, name in enumerate(TEACHERS_LIST, start=1):
        clean_name = name.strip()
        teacher = Teacher.objects.filter(full_name__iexact=clean_name).first()
        
        if not teacher:
            # Check without apostrophe variations
            simple_name = clean_name.replace("'", "").replace("’", "").replace("`", "")
            for t in Teacher.objects.all():
                t_simple = t.full_name.replace("'", "").replace("’", "").replace("`", "")
                if t_simple.lower() == simple_name.lower():
                    teacher = t
                    break

        if teacher:
            teacher.sort_order = idx
            if not teacher.position_uz:
                teacher.position_uz = "O'qituvchi"
                teacher.position_ru = "Преподаватель"
                teacher.position_en = "Teacher"
            teacher.save()
            updated_count += 1
            print(f"[{idx}/30] Updated: {teacher.full_name} (ID: {teacher.id})")
        else:
            teacher = Teacher(
                full_name=clean_name,
                position_uz="O'qituvchi",
                position_ru="Преподаватель",
                position_en="Teacher",
                category=Teacher.Category.NONE,
                is_active=True,
                sort_order=idx
            )
            teacher.save()
            created_count += 1
            print(f"[{idx}/30] Created: {teacher.full_name} (ID: {teacher.id})")

    total = Teacher.objects.count()
    print(f"\nDone! Created: {created_count}, Updated: {updated_count}, Total teachers in DB: {total}")

if __name__ == '__main__':
    run()
