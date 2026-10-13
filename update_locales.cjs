const fs = require('fs');
const path = require('path');

const uzPath = path.join(__dirname, 'litsey', 'src', 'app', 'i18n', 'locales', 'uz.json');
const ruPath = path.join(__dirname, 'litsey', 'src', 'app', 'i18n', 'locales', 'ru.json');

let uz = JSON.parse(fs.readFileSync(uzPath, 'utf8'));
let ru = JSON.parse(fs.readFileSync(ruPath, 'utf8'));

// Update UZ
uz.seo.defaultTitle = "Farg'ona shahar 5-son texnikumi";
uz.seo.titleTemplate = "%s | Farg'ona shahar 5-son texnikumi";
uz.seo.defaultDescription = "Farg'ona shahar 5-son texnikumi — 9-sinf bitiruvchilari uchun kunduzgi va dual ta'lim shaklidagi zamonaviy kasb-hunar ta'lim muassasasi.";
uz.seo.keywords = "5-son texnikum, Farg'ona 5-son texnikumi, ta'lim, kasb-hunar, qabul 2026, dual ta'lim, texnikum";

uz.footer.about = "Farg'ona shahar 5-son texnikumi — zamonaviy IT, elektrotexnika, qayta tiklanuvchi energiya va servis yo'nalishlarida sifatli ta'lim beruvchi davlat kasb-hunar ta'lim muassasasi.";
uz.footer.address = "Farg'ona shahar, Farg'ona ko'chasi 170-uy (eski Neft va gaz sanoati kolleji)";

uz.home.heroTitle = "FARG'ONA SHAHAR 5-SON TEXNIKUMI";
uz.home.heroBadge = "9-sinf bitiruvchilari uchun";
uz.home.heroSubtitle = "Yangi 2026-2027 o'quv yili uchun o'qishga taklif etadi!";
uz.home.heroDesc = "Siz bu yerda kunduzgi va dual ta'lim shakllarida zamonaviy IT, elektrotexnika, elektromobillar servisi va qayta tiklanuvchi energiya sohalarida nufuzli kasb egasi bo'lishingiz mumkin.";
uz.home.admissionBtn = "Qabul 2026-2027";
uz.home.moreBtn = "Batafsil ma'lumot";
uz.home.aboutTitle = "TEXNIKUM HAQIDA";
uz.home.aboutSubtitle = "Farg'ona shahar 5-son texnikumi";
uz.home.decreeTitle = "Faoliyat asosi:";
uz.home.decreeText = "Farg'ona shahar 5-son texnikumi O'zbekiston Respublikasining professional ta'lim tizimini rivojlantirish to'g'risidagi davlat dasturi va qarorlari doirasida faoliyat olib boradi.";
uz.home.aboutDesc = "Texnikumimiz zamonaviy talablarga mos ravishda raqamli axborotlar, kompyuter tarmoqlari, elektromontyorlik, elektromobillar servisi hamda qayta tiklanuvchi energiya manbalariga xizmat ko'rsatish bo'yicha yuqori malakali mutaxassislar tayyorlaydi. O'quvchilarimiz nazariy bilimlarni ilg'or ustaxona va amaliyot bazalarida mustahkamlaydilar.";

uz.faq.item3.question = "Texnikumda qaysi yo'nalishlar bo'yicha ta'lim beriladi?";
uz.faq.item3.answer = "Kunduzgi ta'limda: Raqamli axborotlarni qayta ishlash ustasi, Kompyuter tarmoqlari va IT-servisi, Moda va tikuv, Elektromontyor, Kimyoviy tolalar, Elektrobus va elektromobillar servisi, Turar joy infratuzilmasi, Sartarosh (modeler). Dual ta'limda: Moda va tikuv, Elektromontyor, Elektromobillar servisi, Qayta tiklanuvchi energiya manbaalariga xizmat ko'rsatish.";
uz.faq.item6.answer = "Texnikumimiz Farg'ona shahar, Farg'ona ko'chasi 170-uyda (eski Neft va gaz sanoati kolleji binosi) joylashgan. Transport qatnovi juda qulay.";

uz.leadership.pageSubtitle = "Farg'ona shahar 5-son texnikumining rahbar xodimlari";

uz.about.pageSubtitle = "Farg'ona shahar 5-son texnikumi — zamonaviy kasb-hunar va texnik ta'lim beruvchi yetakchi muassasa.";
uz.about.address = "Farg'ona shahar, Farg'ona ko'chasi 170-uy (eski Neft va gaz sanoati kolleji)";
uz.about.historyP1 = "Farg'ona shahar 5-son texnikumi hududdagi 9-sinf bitiruvchilari va yoshlarga zamonaviy texnik, muhandislik va servis sohalarida kasbiy ta'lim berish maqsadida tashkil etilgan. Muassasa yillar davomida minglab malakali mutaxassislarni tarbiyalab chiqardi.";
uz.about.adv1 = "Farg'ona shahridagi eng zamonaviy kasb-hunar texnikumi";

uz.admission.pageSubtitle = "Farg'ona shahar 5-son texnikumiga qabul tartibi, yo'nalishlar va talablar";
uz.admission.importantDesc = "Texnikumga qabul my.edu.uz portali orqali va texnikum qabul komissiyasida amalga oshiriladi.";
uz.admission.step1Desc = "my.edu.uz portaliga o'tib Farg'ona shahar 5-son texnikumiga ariza topshiring";
uz.admission.testLocation = "Sinovlar Farg'ona shahar 5-son texnikumi binosidagi maxsus tayyorlangan auditoriyalarda o'tkaziladi.";

uz.teachers.pageSubtitle = "Farg'ona shahar 5-son texnikumining malakali pedagog va ustozlar jamoasi";
uz.programs.pageSubtitle = "Farg'ona shahar 5-son texnikumining kunduzgi va dual ta'lim dasturlari";
uz.photos.pageSubtitle = "Texnikumimiz hayotidan lavhalar va muhim tadbirlar";

// Update RU
ru.seo.defaultTitle = "Техникум №5 города Ферганы";
ru.seo.titleTemplate = "%s | Техникум №5 города Ферганы";
ru.seo.defaultDescription = "Техникум №5 города Ферганы — современное профессиональное образовательное учреждение для выпускников 9-х классов (дневная и дуальная форма обучения).";
ru.seo.keywords = "Техникум №5, Фергана, профессиональное образование, поступление 2026, дуальное обучение";

ru.footer.about = "Техникум №5 города Ферганы — государственное профессионально-техническое образовательное учреждение, готовящее специалистов в сфере IT, энергетики и сервиса.";
ru.footer.address = "г. Фергана, ул. Ферганская, 170 (бывш. колледж Нефти и газа)";

ru.home.heroTitle = "ТЕХНИКУМ №5 ГОРОДА ФЕРГАНЫ";
ru.home.heroBadge = "Для выпускников 9-х классов";
ru.home.heroSubtitle = "Приглашает на обучение на новый 2026-2027 учебный год!";
ru.home.heroDesc = "Здесь вы можете получить востребованные специальности в сфере IT, электротехники, обслуживания электромобилей и возобновляемой энергетики на дневном и дуальном отделении.";
ru.home.admissionBtn = "Прием 2026-2027";
ru.home.moreBtn = "Подробнее";
ru.home.aboutTitle = "О ТЕХНИКУМЕ";
ru.home.aboutSubtitle = "Техникум №5 города Ферганы";
ru.home.decreeTitle = "Основа деятельности:";
ru.home.decreeText = "Техникум №5 города Ферганы осуществляет деятельность в рамках государственных программ развития системы профессионального образования Республики Узбекистан.";
ru.home.aboutDesc = "Наш техникум готовит высококвалифицированных специалистов по цифровой обработке информации, компьютерным сетям, электромонтажу, сервису электромобилей и обслуживанию источников возобновляемой энергии.";

ru.leadership.pageSubtitle = "Руководящий состав Техникума №5 города Ферганы";
ru.about.pageSubtitle = "Техникум №5 города Ферганы — ведущее профессионально-техническое учебное заведение.";
ru.about.address = "г. Фергана, ул. Ферганская, 170 (бывш. колледж Нефти и газа)";
ru.admission.pageSubtitle = "Порядок приема, направления и требования в Техникум №5 города Ферганы";
ru.teachers.pageSubtitle = "Преподавательский состав Техникума №5 города Ферганы";
ru.programs.pageSubtitle = "Программы дневного и дуального обучения Техникума №5 города Ферганы";
ru.photos.pageSubtitle = "Кадры из жизни и мероприятий нашего техникума";

fs.writeFileSync(uzPath, JSON.stringify(uz, null, 2), 'utf8');
fs.writeFileSync(ruPath, JSON.stringify(ru, null, 2), 'utf8');
console.log('Locales updated successfully!');
