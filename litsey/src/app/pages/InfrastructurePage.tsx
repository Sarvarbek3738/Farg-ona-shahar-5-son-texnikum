import { Home, ChevronRight, Building2, Cpu, Wrench, Sun, Laptop, BookOpen, Trophy, UtensilsCrossed, CheckCircle2, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { SEO } from '../components/layout/SEO';

export function InfrastructurePage() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'uz';

  const l = (uz: string, ru: string, en: string, kr?: string) => {
    if (lang === 'en') return en;
    if (lang === 'ru') return ru;
    if (lang === 'kr') return kr || uz;
    return uz;
  };

  const facilities = [
    {
      icon: Laptop,
      title: l(
        "Zamonaviy IT va kompyuter laboratoriyalari",
        "Современные IT и компьютерные лаборатории",
        "Modern IT & Computer Laboratories",
        "Замонавий IT ва компьютер лабораториялари"
      ),
      desc: l(
        "Eng so'nggi rusumdagi kompyuterlar, yuqori tezlikdagi optik tolali internet va maxsus dasturlash muhitlari bilan to'liq jihozlangan.",
        "Оснащены новейшими компьютерами, высокоскоростным оптоволоконным интернетом и специализированными средами разработки.",
        "Equipped with modern high-performance computers, high-speed fiber internet, and specialized development tools.",
        "Энг сўнгги русумдаги компьютерлар, юқори тезликдаги оптик толали интернет ва махсус дастурлаш муҳитлари билан жиҳозланган."
      ),
      tags: ["Core i5/i7", "1 Gb/s Internet", "Smart Board"]
    },
    {
      icon: Sun,
      title: l(
        "Qayta tiklanuvchi energiya ustaxonasi",
        "Мастерская возобновляемой энергетики",
        "Renewable Energy Workshop",
        "Қайта тикланувчи энергия устахонаси"
      ),
      desc: l(
        "Quyosh panellari, gelioqurilmalar, zamonaviy invertorlar va akkumulyator tizimlarini o'rnatish hamda xizmat ko'rsatish bo'yicha amaliy mashg'ulotlar bazasi.",
        "Практическая база для монтажа, настройки и обслуживания солнечных панелей, гелиоустановок, инверторов и аккумуляторов.",
        "Hands-on training base for installation and maintenance of solar panels, inverters, and clean energy systems.",
        "Қуёш панеллари, гелиоқурилмалар, замонавий инверторлар ва аккумулятор тизимларини ўрнатиш бўйича амалий база."
      ),
      tags: ["Solar PV", "Inverter Labs", "Green Energy"]
    },
    {
      icon: Cpu,
      title: l(
        "Elektrotexnika va robototexnika xonasi",
        "Кабинет электротехники и робототехники",
        "Electrical Engineering & Robotics Lab",
        "Электротехника ва робототехника хонаси"
      ),
      desc: l(
        "Zamonaviy o'lchov asboblari, mikrokontrollerlar, elektr zanjirlari stendlari va avtomatlashtirilgan boshqaruv modellari.",
        "Современные измерительные приборы, микроконтроллеры, стенды электрических цепей и автоматизированные системы.",
        "Digital measuring tools, microcontrollers, breadboard circuitry, and automated control test benches.",
        "Замонавий ўлчов асбоблари, микроконтроллерлар, электр занжирлари стендлари ва автоматлаштирилган бошқарув моделлари."
      ),
      tags: ["Arduino", "Sensors", "Automation"]
    },
    {
      icon: Wrench,
      title: l(
        "Mexatronika va amaliy mashg'ulot ustaxonalari",
        "Мастерские мехатроники и практики",
        "Mechatronics & Hands-on Workshops",
        "Мехатроника ва амалий машғулот устахоналари"
      ),
      desc: l(
        "Talabalar nazariy bilimlarini bevosita amaliyotda mustahkamlashlari uchun stanoklar, mexanik va montaj asbob-uskunalari.",
        "Станки, механические и монтажные инструменты для отработки практических профессиональных навыков.",
        "Machinery, mechanical tools, and assembly units where students reinforce theoretical knowledge with practical skills.",
        "Талабалар назарий билимларини бевосита амалиётда мустаҳкамлашлари учун дастгоҳлар ва монтаж ускуналари."
      ),
      tags: ["CNC Tools", "Diagnostics", "Practice"]
    },
    {
      icon: BookOpen,
      title: l(
        "Axborot-resurs markazi (ARM)",
        "Информационно-ресурсный центр (ИРЦ)",
        "Information & Resource Center (Library)",
        "Ахборот-ресурс маркази (АРМ)"
      ),
      desc: l(
        "10 000 dan ortiq umumta'lim va maxsus mutaxassislik darsliklari, xorijiy adabiyotlar hamda elektron kutubxona zali.",
        "Более 10 000 учебников и специальной литературы, зарубежные издания и компьютерный зал электронной библиотеки.",
        "Over 10,000 educational and specialized vocational books, foreign literature, and a digital e-library hall.",
        "10 000 дан ортиқ умумтаълим ва махсус мутахассислик дарсликлари, хорижий адабиётлар ҳамда электрон кутубхона зали."
      ),
      tags: ["10,000+ Books", "E-Library", "Study Zone"]
    },
    {
      icon: Trophy,
      title: l(
        "Sport majmuasi va maydonchalari",
        "Спортивный комплекс и площадки",
        "Sports Complex & Playing Fields",
        "Спорт мажмуаси ва майдончалари"
      ),
      desc: l(
        "Yopiq sport zali, sun'iy qoplamali mini-futbol maydoni, voleybol, basketbol maydonchalari hamda trenajyor zali.",
        "Крытый спортзал, поле для мини-футбола с искусственным газоном, волейбольная, баскетбольная площадки и тренажеры.",
        "Indoor sports arena, artificial-turf football pitch, volleyball, basketball courts, and workout training gym.",
        "Ёпиқ спорт зали, сунъий қопламали мини-футбол майдони, волейбол, баскетбол майдончалари ва тренажёр зали."
      ),
      tags: ["Football", "Volleyball", "Fitness Gym"]
    },
    {
      icon: Building2,
      title: l(
        "Yorug' va shinam o'quv auditoriyalari",
        "Светлые и просторные учебные аудитории",
        "Spacious & Well-lit Classrooms",
        "Ёруғ ва шинам ўқув аудиториялари"
      ),
      desc: l(
        "Interaktiv sensorli panellar, zamonaviy ergonomik partalar, shamollatish va iqlim nazorati tizimlari bilan jihozlangan sinfxonalar.",
        "Аудитории оснащены интерактивными сенсорными панелями, эргономичной мебелью и климат-контролем.",
        "All rooms feature interactive touch screens, ergonomic desks, and comprehensive climate control systems.",
        "Интерактив сенсорли панеллар, замонавий эргономик парталар ва иқлим назорати тизимлари билан жиҳозланган."
      ),
      tags: ["Ergonomic", "Projectors", "Climate-controlled"]
    },
    {
      icon: UtensilsCrossed,
      title: l(
        "Talabalar oshxonasi va tibbiyot punkti",
        "Столовая для учащихся и медпункт",
        "Student Cafeteria & Medical Station",
        "Талабалар ошхонаси ва тиббиёт пункти"
      ),
      desc: l(
        "Sanitariya-gigiyena talablariga to'liq javob beruvchi arzon va sifatli issiq ovqatlar oshxonasi hamda birinchi tibbiy yordam ko'rsatish punkti.",
        "Качественная столовая с горячим питанием, соответствующая санитарным нормам, и пункт первой медицинской помощи.",
        "Hygienic, affordable hot-meal dining hall and a fully staffed on-campus first-aid medical station.",
        "Санитария талабларига жавоб берувчи арзон ва сифатли ошхона ҳамда биринчи тиббий ёрдам пункти."
      ),
      tags: ["Hot Meals", "First Aid", "Hygienic"]
    }
  ];

  const stats = [
    { value: "24+", label: l("O'quv auditoriyalari", "Учебных аудиторий", "Classrooms", "Ўқув аудиториялари") },
    { value: "6+", label: l("Maxsus ustaxona va laboratoriyalar", "Мастерских и лабораторий", "Workshops & Labs", "Махсус устахона ва лабораториялар") },
    { value: "100+", label: l("Zamonaviy kompyuterlar", "Современных компьютеров", "Modern Computers", "Замонавий компьютерлар") },
    { value: "1000+", label: l("O'quvchi sig'imi", "Вместимость учащихся", "Student Capacity", "Ўқувчи сиғими") }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <SEO 
        title={t('nav.infrastructure', "Moddiy-texnik baza")} 
        description={l(
          "Farg'ona shahar 5-son politexnika texnikumining zamonaviy moddiy-texnik bazasi, laboratoriyalari, ustaxonalari va sport majmuasi.",
          "Материально-техническая база, лаборатории, мастерские и спортивный комплекс Техникума №5 города Ферганы.",
          "State-of-the-art infrastructure, IT labs, vocational workshops, and sports facilities at Fergana Technicum No. 5."
        )}
      />

      {/* Breadcrumbs */}
      <div className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm font-medium">
            <Link to="/" className="text-gray-500 hover:text-[#0a3674] transition-colors flex items-center gap-1">
              <Home size={16} />
              <span>{t('nav.home')}</span>
            </Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-gray-900 dark:text-white font-bold">{t('nav.infrastructure')}</span>
          </nav>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-[#0a3674] via-[#0d47a1] to-[#1565c0] text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-sm font-semibold mb-6 border border-white/20">
              <ShieldCheck size={16} className="text-yellow-400" />
              {l("Zamonaviy ta'lim sharoitlari", "Современные условия обучения", "Modern Educational Environment", "Замонавий таълим шароитлари")}
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 uppercase tracking-tight leading-tight">
              {t('nav.infrastructure')}
            </h1>
            <p className="text-base md:text-xl text-white/90 font-medium leading-relaxed max-w-2xl mx-auto">
              {l(
                "Texnikumimizda nazariya va amaliyotni uyg'unlashtirish uchun barcha zaruriy texnologik va laboratoriya sharoitlari yaratilgan.",
                "В нашем техникуме созданы все условия для эффективного сочетания теории и практики на базе современных технологий.",
                "Our technicum provides comprehensive, industry-standard equipment to bridge theoretical education with hands-on practice.",
                "Техникумимизда назария ва амалиётни уйғунлаштириш учун барча зарур шароитлар яратилган."
              )}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Key Numbers / Stats */}
      <section className="relative -mt-10 z-20 container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 dark:border-gray-800">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-5xl font-black text-[#0a3674] dark:text-blue-400 mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50 transition-colors">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-4">
              {l("Asosiy moddiy-texnik obyektlar", "Основные объекты базы", "Core Campus Facilities", "Асосий моддий-техник объектлар")}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 font-medium">
              {l(
                "Talabalar kasbiy ko'nikmalarni chuqur o'rganishlari uchun maxsus jihozlangan xonalar va ustaxonalar",
                "Специализированные мастерские и кабинеты для глубокого освоения практических навыков",
                "Purpose-built facilities engineered for hands-on, high-standard professional development",
                "Талабалар касбий кўникмаларни чуқур ўрганишлари учун махсус жиҳозланган хоналар"
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white dark:bg-gray-950 rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-800 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-[#0a3674] dark:text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3 tracking-tight">
                      {facility.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm mb-6">
                      {facility.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-800">
                    {facility.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                      >
                        <CheckCircle2 size={12} className="text-emerald-500" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h3 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-4">
            {l("Texnikum bilan yaqindan tanishing", "Познакомьтесь с техникумом поближе", "Experience Our Campus Firsthand", "Техникум билан яқиндан танишинг")}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 font-medium">
            {l(
              "Qabul jarayoni, mutaxassisliklar va ustaxonalarimizni o'z ko'zingiz bilan ko'rish uchun tashrif buyuring.",
              "Приглашаем лично посетить наши мастерские и познакомиться с учебным процессом.",
              "Visit our campus to explore our advanced facilities and meet our instructional faculty.",
              "Қабул жараёни ва устахоналаримизни кўриш учун ташриф буюринг."
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/admission"
              className="px-8 py-3.5 bg-[#0a3674] hover:bg-[#082a5c] text-white font-bold rounded-xl shadow-lg transition-all"
            >
              {t('nav.admission')}
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-bold rounded-xl transition-all"
            >
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
