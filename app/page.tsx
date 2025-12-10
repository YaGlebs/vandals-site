'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState, type SVGProps } from 'react';
import Link from 'next/link';

const BOOKSY_PROFILE_URL =
  'https://booksy.com/pl-pl/225696_vandals-barbershop_barber-shop_3_warszawa';
const IG_URL = 'https://instagram.com/vndls_barbershop';

type Lang = 'pl' | 'en' | 'uk' | 'ru';

const LANG_OPTIONS: { code: Lang; label: string }[] = [
  { code: 'pl', label: 'PL' },
  { code: 'en', label: 'EN' },
  { code: 'uk', label: 'UA' },
  { code: 'ru', label: 'BY' },
];

const TEXT: Record<string, Record<Lang, string>> = {
  navServices: { pl: 'Usługi', en: 'Services', uk: 'Послуги', ru: 'Услуги' },
  navPortfolio: { pl: 'Portfolio', en: 'Portfolio', uk: 'Портфоліо', ru: 'Портфолио' },
  navContact: { pl: 'Kontakt', en: 'Contact', uk: 'Контакти', ru: 'Контакты' },
  navBook: { pl: 'Zarezerwuj', en: 'Book now', uk: 'Записатися', ru: 'Записаться' },
  servicesTitle: { pl: 'Usługi', en: 'Services', uk: 'Послуги', ru: 'Услуги' },
  servicesSub: {
    pl: 'Kliknij — otworzymy Booksy.',
    en: 'Click — we’ll open Booksy.',
    uk: 'Натисни — відкриємо Booksy.',
    ru: 'Нажми — откроем Booksy.',
  },
  openBooksy: { pl: 'Otwórz w Booksy', en: 'Open in Booksy', uk: 'Відкрити в Booksy', ru: 'Открыть в Booksy' },
  showAll: { pl: 'Pokaż wszystkie', en: 'Show all', uk: 'Показати всі', ru: 'Показать все' },
  showLess: { pl: 'Pokaż mniej', en: 'Show less', uk: 'Показати менше', ru: 'Показать меньше' },
  portfolioTitle: { pl: 'Portfolio', en: 'Portfolio', uk: 'Портфоліо', ru: 'Портфолио' },
  contactTitle: { pl: 'Kontakt', en: 'Contact', uk: 'Контакти', ru: 'Контакты' },
  contactPhone: { pl: 'Telefon', en: 'Phone', uk: 'Телефон', ru: 'Телефон' },
  contactEmail: { pl: 'E-mail', en: 'E-mail', uk: 'E-mail', ru: 'E-mail' },
  contactAddress: { pl: 'Adres', en: 'Address', uk: 'Адреса', ru: 'Адрес' },
  bookingCardTitle: { pl: 'REZERWACJA ONLINE', en: 'ONLINE BOOKING', uk: 'ОНЛАЙН-ЗАПИС', ru: 'ОНЛАЙН-ЗАПИСЬ' },
  bookingCardSubtitle: {
    pl: 'Oficjalny profil w Booksy',
    en: 'Official profile on Booksy',
    uk: 'Офіційний профіль у Booksy',
    ru: 'Официальный профиль в Booksy',
  },
  bookingBullet1: { pl: '• Rezerwacja 24/7', en: '• Booking 24/7', uk: '• Запис 24/7', ru: '• Запись 24/7' },
  bookingBullet2: { pl: '• Potwierdzenie SMS', en: '• SMS confirmation', uk: '• SMS-підтвердження', ru: '• SMS-подтверждение' },
  bookingBullet3: { pl: '• Wybór barbera', en: '• Choose your barber', uk: '• Вибір барбера', ru: '• Выбор барбера' },
  bookingBullet4: { pl: '• Szybkie płatności', en: '• Quick payments', uk: '• Швидкі платежі', ru: '• Быстрые платежи' },
  bookingBtn: { pl: 'Otwórz w Booksy', en: 'Open in Booksy', uk: 'Відкрити в Booksy', ru: 'Открыть в Booksy' },
  hoursTitle: { pl: 'GODZINY OTWARCIA', en: 'OPENING HOURS', uk: 'ГОДИНИ РОБОТИ', ru: 'ЧАСЫ РАБОТЫ' },
  hoursWeek: { pl: 'PN–SB', en: 'Mon–Sat', uk: 'Пн–Сб', ru: 'Пн–Сб' },
  hoursSun: { pl: 'ND', en: 'Sun', uk: 'Нд', ru: 'Вс' },
  privacy: { pl: 'Polityka prywatności', en: 'Privacy policy', uk: 'Політика конфіденційності', ru: 'Политика конфиденциальности' },
  modalTitle: { pl: 'Rezerwacja online', en: 'Online booking', uk: 'Онлайн-запис', ru: 'Онлайн-запись' },
  modalBody: {
    pl: 'Booksy otwiera się w nowej karcie. Jeśli okno się nie pojawiło, użyj przycisku poniżej lub skopiuj link.',
    en: 'Booksy opens in a new tab. If it didn’t appear, use the button below or copy the link.',
    uk: 'Booksy відкриється у новій вкладці. Якщо вікно не з’явилося, натисніть кнопку нижче або скопіюйте посилання.',
    ru: 'Booksy откроется в новой вкладке. Если окно не появилось, нажмите кнопку ниже или скопируйте ссылку.',
  },
  modalOpen: { pl: 'Otwórz Booksy', en: 'Open Booksy', uk: 'Відкрити Booksy', ru: 'Открыть Booksy' },
  modalCopy: { pl: 'Kopiuj link', en: 'Copy link', uk: 'Скопіювати посилання', ru: 'Скопировать ссылку' },
  modalCopied: { pl: 'Skopiowano', en: 'Copied', uk: 'Скопійовано', ru: 'Скопировано' },
  modalTab: { pl: 'Otwórz w nowej karcie', en: 'Open in new tab', uk: 'Відкрити у новій вкладці', ru: 'Открыть в новой вкладке' },
};

const HERO_IMAGES = [
  '/hero-1.jpg',
  '/hero-2.jpg',
  '/hero-3.jpg',
  '/hero-4.jpg',
  '/hero-5.jpg',
];

const PORTFOLIO_IMAGES = [
  '/portfolio/portfolio-1.jpg',
  '/portfolio/portfolio-2.jpg',
  '/portfolio/portfolio-3.jpg',
  '/portfolio/portfolio-4.jpg',
  '/portfolio/portfolio-5.jpg',
  '/portfolio/portfolio-6.jpg',
  '/portfolio/portfolio-7.jpg',
  '/portfolio/portfolio-8.jpg',
  '/portfolio/portfolio-9.jpg',
  '/portfolio/portfolio-10.jpg',
];

type Service = {
  title: Record<Lang, string>;
  desc: Record<Lang, string>;
  url: string;
  price: string;
  duration: Record<Lang, string>;
};

type ServiceView = {
  title: string;
  desc: string;
  url: string;
  price: string;
  duration: string;
};

const ALL_SERVICES: Service[] = [
  {
    title: { pl: 'Strzyżenie męskie', en: 'Men’s haircut', uk: 'Чоловіча стрижка', ru: 'Мужская стрижка' },
    desc: { pl: 'Wykonywane przez barbera: konsultacja + stylizacja.', en: 'Barber cut: consult + style.', uk: 'Барбер: консультація + укладка.', ru: 'Барбер: консультация + укладка.' },
    price: '110,00 zł',
    duration: { pl: '1g', en: '1h', uk: '1г', ru: '1ч' },
    url: BOOKSY_PROFILE_URL,
  },
  {
    title: { pl: 'Vandals Strzyżenie (combo)', en: 'Vandals combo', uk: 'Vandals комбо', ru: 'Vandals комбо' },
    desc: { pl: 'Strzyżenie combo wykonywane przez Senior Barbera', en: 'Combo cut by Senior Barber', uk: 'Комбо від сеньйор-барбера', ru: 'Комбо от сеньор-барбера' },
    price: '160,00 zł',
    duration: { pl: '1g 30min', en: '1h 30min', uk: '1г 30хв', ru: '1ч 30мин' },
    url: BOOKSY_PROFILE_URL,
  },
  {
    title: { pl: 'Strzyżenie boków (Fade Only)', en: 'Fade Only', uk: 'Фейд (лише боки)', ru: 'Фейд (только бока)' },
    desc: { pl: 'Czysty fade bez góry.', en: 'Clean fade without top.', uk: 'Чистий фейд без верхівки.', ru: 'Чистый фейд без верха.' },
    price: '80,00 zł',
    duration: { pl: '45min', en: '45min', uk: '45хв', ru: '45мин' },
    url: BOOKSY_PROFILE_URL,
  },
  {
    title: { pl: 'Dekoloryzacja + farbowanie', en: 'Decoloration + coloring', uk: 'Деколоризація + фарбування', ru: 'Деколоризация + окрашивание' },
    desc: { pl: 'Pełne rozjaśnienie + kolor.', en: 'Full bleach + color.', uk: 'Повне освітлення + колір.', ru: 'Полное осветление + цвет.' },
    price: '450,00 zł',
    duration: { pl: '2g 30min', en: '2h 30min', uk: '2г 30хв', ru: '2ч 30мин' },
    url: BOOKSY_PROFILE_URL,
  },
  {
    title: { pl: 'Strzyżenie damskie', en: 'Women’s haircut', uk: 'Жіноча стрижка', ru: 'Женская стрижка' },
    desc: { pl: 'Strzyżenie + stylizacja.', en: 'Cut + styling.', uk: 'Стрижка + укладка.', ru: 'Стрижка + укладка.' },
    price: '130,00 zł',
    duration: { pl: '1g', en: '1h', uk: '1г', ru: '1ч' },
    url: BOOKSY_PROFILE_URL,
  },
  {
    title: { pl: 'Strzyżenie męskie — włosy długie', en: 'Men’s long hair', uk: 'Чоловіча стрижка — довге волосся', ru: 'Мужская стрижка — длинные волосы' },
    desc: { pl: 'Nożyczki, włosy od ok. 5cm w górę.', en: 'Scissor cut, 5cm+ length.', uk: 'Ножиці, довжина від 5см.', ru: 'Ножницы, длина от 5см.' },
    price: '120,00 zł',
    duration: { pl: '1g', en: '1h', uk: '1г', ru: '1ч' },
    url: BOOKSY_PROFILE_URL,
  },
  {
    title: { pl: 'Strzyżenie brody', en: 'Beard trim', uk: 'Стрижка бороди', ru: 'Стрижка бороды' },
    desc: { pl: 'Maszynka/ brzytwa + kontur.', en: 'Clipper/razor + outline.', uk: 'Машинка/бритва + контур.', ru: 'Машинка/бритва + контур.' },
    price: '80,00 zł',
    duration: { pl: '45min', en: '45min', uk: '45хв', ru: '45мин' },
    url: BOOKSY_PROFILE_URL,
  },
  {
    title: { pl: 'Vandals Strzyżenie (combo+SPA)', en: 'Vandals combo + SPA', uk: 'Vandals комбо + SPA', ru: 'Vandals комбо + SPA' },
    desc: { pl: 'Strzyżenie + broda + masaż/parownica.', en: 'Hair + beard + massage/steamer.', uk: 'Волосся + борода + масаж/пар.', ru: 'Волосы + борода + массаж/пар.' },
    price: '170,00 zł',
    duration: { pl: '1g 30min', en: '1h 30min', uk: '1г 30хв', ru: '1ч 30мин' },
    url: BOOKSY_PROFILE_URL,
  },
  {
    title: { pl: 'Strzyżenie dziecięce (od 6 do 10 lat)', en: 'Kids haircut (6-10)', uk: 'Дитяча стрижка (6-10)', ru: 'Детская стрижка (6-10)' },
    desc: { pl: 'Dopasowane do najmłodszych.', en: 'Made for kids.', uk: 'Підлаштовано під дітей.', ru: 'Для детей.' },
    price: '90,00 zł',
    duration: { pl: '50min', en: '50min', uk: '50хв', ru: '50мин' },
    url: BOOKSY_PROFILE_URL,
  },
  {
    title: { pl: 'Strzyżenie męskie (ojciec+syn)', en: 'Men’s cut (father + son)', uk: 'Стрижка (батько+син)', ru: 'Стрижка (отец+сын)' },
    desc: { pl: 'Dwa cięcia w jednym terminie.', en: 'Two cuts in one slot.', uk: 'Дві стрижки в один запис.', ru: 'Две стрижки за раз.' },
    price: '190,00 zł',
    duration: { pl: '2g', en: '2h', uk: '2г', ru: '2ч' },
    url: BOOKSY_PROFILE_URL,
  },
  {
    title: { pl: 'Depilacja woskiem (1 Zona)', en: 'Waxing (1 zone)', uk: 'Воскова депіляція (1 зона)', ru: 'Депиляция воском (1 зона)' },
    desc: { pl: 'Szybki zabieg w wybranej strefie.', en: 'Quick single-zone wax.', uk: 'Швидка депіляція однієї зони.', ru: 'Быстрая депиляция одной зоны.' },
    price: '25,00 zł',
    duration: { pl: '5min', en: '5min', uk: '5хв', ru: '5мин' },
    url: BOOKSY_PROFILE_URL,
  },
  {
    title: { pl: 'Stylizacja fryzury', en: 'Hair styling', uk: 'Стиль укладки', ru: 'Укладка' },
    desc: { pl: 'Dobór i wykonanie fryzury.', en: 'Styling and finish.', uk: 'Укладка і фініш.', ru: 'Стиль и финиш.' },
    price: '20,00 zł',
    duration: { pl: '15min', en: '15min', uk: '15хв', ru: '15мин' },
    url: BOOKSY_PROFILE_URL,
  },
  {
    title: { pl: 'SPA (peeling twarzy)', en: 'Face spa peel', uk: 'SPA пілінг обличчя', ru: 'SPA пилинг лица' },
    desc: { pl: 'Peeling twarzy + masaż/parownica.', en: 'Face peel + massage/steam.', uk: 'Пілінг + масаж/пар.', ru: 'Пилинг + массаж/пар.' },
    price: '40,00 zł',
    duration: { pl: '20min', en: '20min', uk: '20хв', ru: '20мин' },
    url: BOOKSY_PROFILE_URL,
  },
  {
    title: { pl: 'Farbowanie brody', en: 'Beard coloring', uk: 'Фарбування бороди', ru: 'Окрашивание бороды' },
    desc: { pl: 'Tonowanie lub pełne farbowanie.', en: 'Toning or full color.', uk: 'Тонування чи фарбування.', ru: 'Тонирование или окрашивание.' },
    price: '60,00 zł',
    duration: { pl: '20min', en: '20min', uk: '20хв', ru: '20мин' },
    url: BOOKSY_PROFILE_URL,
  },
  {
    title: { pl: 'Farbowanie głowy', en: 'Hair coloring', uk: 'Фарбування голови', ru: 'Окрашивание головы' },
    desc: { pl: 'Koloryzacja włosów.', en: 'Hair color service.', uk: 'Фарбування волосся.', ru: 'Окрашивание волос.' },
    price: '70,00 zł',
    duration: { pl: '20min', en: '20min', uk: '20хв', ru: '20мин' },
    url: BOOKSY_PROFILE_URL,
  },
  {
    title: { pl: 'Strzyżenie maszynką na jedną długość', en: 'Clipper one length', uk: 'Машинка на одну довжину', ru: 'Машинка в одну длину' },
    desc: { pl: 'Proste cięcie jedną długością.', en: 'Single-length clipper cut.', uk: 'В одну довжину машинкою.', ru: 'В одну длину машинкой.' },
    price: '50,00 zł',
    duration: { pl: '10min', en: '10min', uk: '10хв', ru: '10мин' },
    url: BOOKSY_PROFILE_URL,
  },
];

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 256 256"
      width="20"
      height="20"
      aria-hidden
      {...props}
    >
      <defs>
        <linearGradient id="igGrad" x1="20%" y1="10%" x2="80%" y2="90%">
          <stop offset="0%" stopColor="#f58529" />
          <stop offset="25%" stopColor="#feda77" />
          <stop offset="50%" stopColor="#dd2a7b" />
          <stop offset="75%" stopColor="#8134af" />
          <stop offset="100%" stopColor="#515bd4" />
        </linearGradient>
      </defs>
      <rect
        x="14"
        y="14"
        width="228"
        height="228"
        rx="60"
        fill="url(#igGrad)"
      />
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="18"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M96 64h64a32 32 0 0 1 32 32v64a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32Z"
      />
      <circle cx="128" cy="128" r="32" fill="none" stroke="#fff" strokeWidth="18" />
      <circle cx="180" cy="76" r="10" fill="#fff" />
    </svg>
  );
}

export default function Home() {
  const [heroIdx, setHeroIdx] = useState(0);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [portfolioIdx, setPortfolioIdx] = useState(0);
  const [chunkSize, setChunkSize] = useState(2);
  useEffect(() => {
    const id = setInterval(
      () => setHeroIdx((i) => (i + 1) % HERO_IMAGES.length),
      4200
    );
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const updateChunk = () => setChunkSize(mq.matches ? 2 : 1);
    updateChunk();
    mq.addEventListener('change', updateChunk);
    return () => mq.removeEventListener('change', updateChunk);
  }, []);

  const slides = useMemo(() => {
    const result: string[][] = [];
    for (let i = 0; i < PORTFOLIO_IMAGES.length; i += chunkSize) {
      result.push(PORTFOLIO_IMAGES.slice(i, i + chunkSize));
    }
    return result;
  }, [chunkSize]);

  const activeSlide = useMemo(
    () => Math.max(0, Math.min(portfolioIdx, Math.max(slides.length - 1, 0))),
    [portfolioIdx, slides.length]
  );

  const nextPortfolio = () =>
    setPortfolioIdx((i) => (i + 1) % slides.length);
  const prevPortfolio = () =>
    setPortfolioIdx((i) => (i - 1 + slides.length) % slides.length);

  const [lang, setLang] = useState<Lang>('pl');

  const t = (key: keyof typeof TEXT) => TEXT[key][lang] ?? TEXT[key].pl;

  const [showAll, setShowAll] = useState(false);
  const translatedServices = useMemo<ServiceView[]>(
    () =>
      ALL_SERVICES.map((s) => ({
        title: s.title[lang] ?? s.title.pl,
        desc: s.desc[lang] ?? s.desc.pl,
        duration: s.duration[lang] ?? s.duration.pl,
        url: s.url,
        price: s.price,
      })),
    [lang]
  );
  const visibleServices = useMemo(
    () => (showAll ? translatedServices : translatedServices.slice(0, 3)),
    [showAll, translatedServices]
  );
  const restCount = ALL_SERVICES.length - 3;

  const openBooksy = (url?: string) => {
    const target = url && url !== '#' ? url : BOOKSY_PROFILE_URL;
    if (typeof window !== 'undefined') {
      window.open(target, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <main className="min-h-screen pb-24 bg-background text-foreground">
      {/* ======= TOP BAR ======= */}
      <header className="sticky top-0 z-50 bg-[#0B0B0F] border-b border-white/10">
        <div className="mx-auto max-w-7xl h-[76px] px-4 md:px-6 flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] gap-3">
          <Link href="/" aria-label="Vandals Barbershop" className="flex flex-col leading-tight select-none">
            <span className="font-brand text-[22px] tracking-[0.12em] text-white">
              VANDALS
            </span>
            <span className="font-brand text-[12px] tracking-[0.38em] text-white/80">
              BARBERSHOP
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-3 font-medium text-sm">
            <a
              href="#services"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/85 hover:bg-white/10 transition"
            >
              {t('navServices')}
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/85 hover:bg-white/10 transition"
            >
              {t('navPortfolio')}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/85 hover:bg-white/10 transition"
            >
              {t('navContact')}
            </a>
          </nav>

          <div className="hidden md:flex items-center justify-end gap-3">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-1.5 py-1">
              {LANG_OPTIONS.map((option) => (
                <button
                  key={option.code}
                  onClick={() => setLang(option.code)}
                  className={[
                    'px-2 py-1 text-xs font-semibold rounded-full transition transform',
                    lang === option.code
                      ? 'bg-white text-black'
                      : 'text-white/70 hover:text-white hover:scale-[1.05]',
                  ].join(' ')}
                  aria-pressed={lang === option.code}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center rounded-full h-10 w-10 bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <InstagramIcon className="text-white/90" />
            </a>
            <button
              onClick={() => openBooksy()}
              className="inline-flex items-center rounded-full px-4 py-2 text-[15px] font-semibold text-white bg-accent shadow-[0_8px_30px_rgba(124,58,237,0.35)] hover:opacity-90 transition"
            >
              {t('navBook')}
            </button>
          </div>

          {/* mobile actions */}
          <div className="md:hidden flex items-center gap-3 flex-1 justify-end">
            <div className="flex-1 flex justify-center">
              <div className="inline-flex rounded-full border border-white/12 bg-white/5 px-1 py-0.5 shadow-[0_4px_18px_rgba(0,0,0,0.25)]">
                {LANG_OPTIONS.map((option) => (
                  <button
                    key={option.code}
                  onClick={() => setLang(option.code)}
                  className={[
                    'px-2 py-1 text-[11px] font-semibold rounded-full transition transform',
                    lang === option.code
                      ? 'bg-white text-black'
                      : 'text-white/70 hover:text-white hover:scale-[1.05]',
                  ].join(' ')}
                  aria-pressed={lang === option.code}
                >
                  {option.label}
                </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => setMobileNavOpen((v) => !v)}
              aria-label="Menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-white/10 shadow-[0_6px_20px_rgba(0,0,0,0.3)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                className="h-6 w-6 text-white/90"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              >
                <path d="M12 18h40" />
                <path d="M12 32h40" />
                <path d="M12 46h40" />
              </svg>
            </button>
          </div>
        </div>

        {/* mobile drawer */}
        {mobileNavOpen && (
          <div className="md:hidden absolute inset-x-0 top-full bg-[#0B0B0F]/95 border-b border-white/10 shadow-xl">
            <div className="px-4 py-4 space-y-4">
              <nav className="flex flex-col gap-3 text-base font-semibold items-center">
                <a href="#services" className="hover:text-white text-white" onClick={() => setMobileNavOpen(false)}>
                  {t('navServices')}
                </a>
                <a href="#portfolio" className="hover:text-white text-white" onClick={() => setMobileNavOpen(false)}>
                  {t('navPortfolio')}
                </a>
                <a href="#contact" className="hover:text-white text-white" onClick={() => setMobileNavOpen(false)}>
                  {t('navContact')}
                </a>
              </nav>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center rounded-full h-10 w-10 bg-white/5 border border-white/10 hover:bg-white/10"
                >
                  <InstagramIcon className="text-white/90" />
                </a>
                <button
                  onClick={() => { setMobileNavOpen(false); openBooksy(); }}
                  className="flex-1 inline-flex items-center justify-center rounded-full px-4 py-3 text-[14px] font-semibold text-white bg-accent shadow-[0_8px_30px_rgba(124,58,237,0.35)] hover:opacity-90 transition"
                >
                  {t('navBook')}
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ======= HERO ======= */}
      <section className="relative overflow-hidden min-h-[560px] sm:min-h-[600px] lg:h-[80vh] lg:min-h-[640px] lg:max-h-[820px]">
        <div className="absolute inset-0">
          <HeroCarousel images={HERO_IMAGES} activeIdx={heroIdx} />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/55 to-black/60 mix-blend-multiply" />
          <div className="absolute inset-0" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent via-black/20 to-[var(--background)]" />
        </div>
      </section>

      {/* ======= USŁUGИ ======= */}
      <section id="services" className="mx-auto max-w-7xl px-4 md:px-6 py-14">
        <h2 className="section-title text-2xl md:text-3xl font-bold">{t('servicesTitle')}</h2>
        <p className="mt-2 text-sm text-muted">{t('servicesSub')}</p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {visibleServices.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-5 transition hover:border-accent/40"
            >
              <header className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold tracking-wide">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted">{s.desc}</p>
                </div>
                <div className="shrink-0 text-right">
                  <div className="inline-flex items-center rounded-full border border-[#bfa76a]/30 bg-[#bfa76a]/10 px-2.5 py-1 text-[12px] font-semibold text-[#e6d9a3]">
                    {s.price}
                  </div>
                  <div className="mt-1 text-[11px] text-white/60">{s.duration}</div>
                </div>
              </header>

              <button
                onClick={() => openBooksy(s.url)}
                className="mt-4 inline-flex items-center gap-2 text-sm text-accent/80 hover:text-accent"
              >
                <span>{t('openBooksy')}</span>
                <span aria-hidden>↗</span>
              </button>
            </article>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="rounded-full px-5 py-2 border border-white/10 bg-white/5 hover:bg-white/10 text-sm"
          >
            {showAll ? t('showLess') : `${t('showAll')} (${restCount})`}
          </button>
        </div>
      </section>

      {/* ======= PORTFOLIO ======= */}
      <section id="portfolio" className="mx-auto max-w-7xl px-4 md:px-6 py-14">
        <h2 className="section-title text-2xl md:text-3xl font-bold">{t('portfolioTitle')}</h2>

        <div className="mt-6 relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f0f12] via-[#111018] to-[#0b0b0f] shadow-[0_14px_50px_rgba(0,0,0,0.45)]">
          <div className="relative overflow-hidden min-h-[720px]">
            {slides.map((group, idx) => (
              <div
                key={group.join('-')}
                className={[
                  'absolute inset-0 grid gap-4 sm:grid-cols-2 p-4 transition-transform duration-500 ease-out items-center',
                  idx === activeSlide
                    ? 'translate-x-0'
                    : idx < activeSlide
                    ? '-translate-x-full'
                    : 'translate-x-full',
                ].join(' ')}
              >
                {group.map((src, i) => (
                  <div key={src} className="relative w-full h-[680px] md:h-[640px] flex items-center justify-center">
                    <div className="absolute inset-0 rounded-[36px] bg-[conic-gradient(from_120deg_at_50%_50%,#f9b6ff,#7c3aed,#54c7f3,#f9b6ff)] opacity-45 blur-[12px]" />
                    <div className="relative m-[8px] w-[calc(100%-16px)] h-[calc(100%-16px)] overflow-hidden rounded-[32px] bg-black/75 border border-white/10 flex items-center justify-center shadow-[0_14px_40px_rgba(0,0,0,0.45)]">
                      <Image
                        src={src}
                        alt={`Portfolio ${idx * 2 + i + 1}`}
                        fill
                        sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                        className="object-contain transition duration-500 rounded-[32px]"
                        priority={idx === 0 && i === 0}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/hero-1.jpg';
                        }}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-[32px]" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="absolute inset-y-0 left-0 flex items-center px-3">
            <button
              onClick={prevPortfolio}
              className="h-10 w-10 rounded-full bg-black/60 border border-white/20 text-white hover:bg-black/80 transition"
              aria-label="Poprzednie zdjęcie"
            >
              ‹
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center px-3">
            <button
              onClick={nextPortfolio}
              className="h-10 w-10 rounded-full bg-black/60 border border-white/20 text-white hover:bg-black/80 transition"
              aria-label="Następne zdjęcie"
            >
              ›
            </button>
          </div>

          <div className="flex justify-center gap-2 py-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setPortfolioIdx(i)}
                className={[
                  'h-2.5 w-2.5 rounded-full transition',
                  i === activeSlide ? 'bg-white' : 'bg-white/30 hover:bg-white/60',
                ].join(' ')}
                aria-label={`Zdjęcie ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ======= KONTAKT ======= */}
      <section id="contact" className="mx-auto max-w-7xl px-4 md:px-6 py-14">
        <h2 className="section-title text-2xl md:text-3xl font-bold">{t('contactTitle')}</h2>

        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <div className="relative rounded-3xl border border-white/10 bg-black/50 backdrop-blur-sm p-6">
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
              <div className="min-w-0">
                <dt className="text-[#e6d9a3]/90">{t('contactPhone')}</dt>
                <dd className="font-medium mt-0.5 break-words">+48 571 848 348</dd>
              </div>
              <div className="min-w-0">
                <dt className="text-[#e6d9a3]/90">{t('contactEmail')}</dt>
                <dd className="font-medium mt-0.5 break-words">tema.lucenko1743@gmail.com</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-[#e6d9a3]/90">{t('contactAddress')}</dt>
                <dd className="font-medium mt-0.5">
                  JRR Tolkiena 1/4, 02-676, Warszawa
                </dd>
              </div>
            </dl>

            <div className="mt-5 relative overflow-hidden rounded-3xl border border-white/10 shadow-sm h-[240px] sm:h-[280px]">
              <iframe
                title="Mapa Vandals"
                src="https://www.google.com/maps?q=Vandals%20Barbershop%20JRR%20Tolkiena%201/4%2002-676%20Warszawa&hl=pl&z=18&output=embed"
                loading="lazy"
                className="absolute inset-0 h-full w-full"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Rezerwacja online*/}
          <div className="flex justify-center pt-8">
            <div className="relative w-full max-w-[550px]">
              <div className="pointer-events-none absolute -inset-[6px] rounded-[32px] bg-[conic-gradient(from_200deg_at_50%_50%,rgba(191,167,106,.55),rgba(124,58,237,.55),rgba(191,167,106,.55),rgba(124,58,237,.55))] blur-[28px] opacity-80" />
              <div className="relative rounded-[28px] border border-white/10 bg-[radial-gradient(120%_160%_at_10%_0%,rgba(124,58,237,.20),rgba(0,0,0,.65))] backdrop-blur-md p-7 md:p-8">
                <div className="flex flex-col items-start gap-4">
                  <div className="w-full">
                    <div className="text-[12px] tracking-[.18em] text-[#e6d9a3]">
                      {t('bookingCardTitle')}
                    </div>
                    <h3 className="mt-1 font-semibold text-lg">
                      {t('bookingCardSubtitle')}
                    </h3>

                    <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-1 text-sm text-white/85">
                      <li>{t('bookingBullet1')}</li>
                      <li>{t('bookingBullet2')}</li>
                      <li>{t('bookingBullet3')}</li>
                      <li>{t('bookingBullet4')}</li>
                    </ul>

                    <button
                      onClick={() => openBooksy()}
                      className="mt-5 w-full rounded-full px-6 py-3 font-medium text-white bg-[radial-gradient(120%_200%_at_0%_0%,rgba(255,255,255,.15),rgba(124,58,237,.75))] hover:opacity-90 shadow-[0_10px_30px_rgba(124,58,237,.35)]"
                    >
                      {t('bookingBtn')}
                    </button>

                    <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-4">
                      <div className="text-[12px] tracking-[.18em] text-[#e6d9a3] mb-2">
                        {t('hoursTitle')}
                      </div>
                      <HoursRow label={t('hoursWeek')} value="10:00–21:00" />
                      <HoursRow label={t('hoursSun')} value="11:00–19:00" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= FOOTER*/}
      <footer className="mt-24 border-t border-white/10 bg-[#0B0B0F]">
        <div className="w-full px-4 lg:px-10 py-14 text-sm text-muted">
          <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 items-start">
            <div className="flex flex-col gap-2 translate-y-3 items-center md:items-start text-center md:text-left">
              <div className="leading-tight">
                <div className="font-brand text-[36px] tracking-[0.14em] text-white leading-none">
                  VANDALS
                </div>
                <div className="font-brand text-[20px] tracking-[0.38em] text-white/80 leading-tight">
                  BARBERSHOP
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-5 text-center md:col-start-2 md:items-center md:justify-self-center w-full md:w-auto">
              <nav className="flex gap-4 md:gap-6 text-foreground/80 flex-wrap justify-center">
                <a href="#services" className="hover:text-white text-[15px] tracking-wide">
                  {t('navServices')}
                </a>
                <a href="#portfolio" className="hover:text-white text-[15px] tracking-wide">
                  {t('navPortfolio')}
                </a>
                <a href="#contact" className="hover:text-white text-[15px] tracking-wide">
                  {t('navContact')}
                </a>
              </nav>

              <div className="flex items-center justify-center gap-3">
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noopener"
                  aria-label="Instagram"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10"
                >
                  <InstagramIcon className="h-4 w-4 text-white/80" />
                </a>
                <span className="text-foreground/70">
                  © {new Date().getFullYear()} Vandals Barbershop
                </span>
              </div>

              <div className="flex items-center justify-center gap-2 text-sm">
                <a href="/polityka-prywatnosci" className="underline hover:text-white">
                  {t('privacy')}
                </a>
                <span className="text-foreground/70">•</span>
                <span className="text-foreground/80">Design by Glebas</span>
              </div>
              <div className="text-foreground/70 text-xs">Warszawa • Mokotów</div>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}

const positions: Record<number, string> = {
  0: 'object-[50%_60%] md:object-[55%_50%]',
  1: 'object-center',
  2: 'object-[60%_50%]',
  3: 'object-[40%_50%]',
  4: 'object-center',
};

function HeroCarousel({ images, activeIdx }: { images: string[]; activeIdx: number }) {
  return (
    <div className="absolute inset-0">
      {images.map((src, i) => {
        const active = i === activeIdx;
        return (
          <Image
            key={src}
            src={src}
            alt="Wnętrze Vandals Barbershop"
            fill
            sizes="100vw"
            priority={i === 0}
            className={[
              'absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out will-change-opacity',
              'scale-[0.9] sm:scale-[0.94] lg:scale-[0.98]',
              positions[i] ?? 'object-center',
              active ? 'opacity-100' : 'opacity-0',
            ].join(' ')}
          />
        );
      })}
    </div>
  );
}

function HoursRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center text-[14px] py-1">
      <span className="text-white/85">{label}</span>
      <span className="mx-2 flex-1 border-t border-dotted border-white/20 translate-y-[1px]" />
      <span className="font-medium text-white">{value}</span>
    </div>
  );
}
