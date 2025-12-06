// app/services.ts

export type ServiceItem = {
  title: string;
  desc: string;
  price: string;
  duration: string;
};

// Krótka lista do sekcji komponentowej; ceny i czasy zgodne ze screenem Booksy.
export const services: ServiceItem[] = [
  { title: 'Strzyżenie męskie', desc: 'Konsultacja + stylizacja', price: '99,00 zł', duration: '1g' },
  { title: 'Vandals Strzyżenie (combo)', desc: 'Senior Barber, full look', price: '144,00 zł', duration: '1g 30min' },
  { title: 'Strzyżenie boków (Fade Only)', desc: 'Czysty fade bez góry', price: '80,00 zł', duration: '45min' },
  { title: 'Dekoloryzacja + farbowanie', desc: 'Pełne rozjaśnienie + kolor', price: '450,00 zł', duration: '2g 30min' },
  { title: 'Strzyżenie damskie', desc: 'Strzyżenie + stylizacja', price: '123,50 zł', duration: '1g' },
  { title: 'Strzyżenie męskie — włosy długie', desc: 'Nożyczki, włosy 5cm+', price: '108,00 zł', duration: '1g' },
  { title: 'Strzyżenie brody', desc: 'Maszynka/brzytwa + kontur', price: '76,00 zł', duration: '45min' },
  { title: 'Vandals Strzyżenie (combo+SPA)', desc: 'Strzyżenie + broda + SPA', price: '153,00 zł', duration: '1g 30min' },
  { title: 'Strzyżenie dziecięce (6–10 lat)', desc: 'Przyjazne dzieciom', price: '81,00 zł', duration: '50min' },
  { title: 'Strzyżenie męskie (ojciec+syn)', desc: 'Dwa cięcia w jednej wizycie', price: '171,00 zł', duration: '2g' },
  { title: 'Depilacja woskiem (1 Zona)', desc: 'Szybki zabieg w wybranej strefie', price: '22,50 zł', duration: '5min' },
  { title: 'Stylizacja fryzury', desc: 'Dobór i wykonanie fryzury', price: '20,00 zł', duration: '15min' },
  { title: 'SPA (peeling twarzy)', desc: 'Peeling + masaż/parownica', price: '40,00 zł', duration: '20min' },
  { title: 'Farbowanie brody', desc: 'Tonowanie lub pełne farbowanie', price: '60,00 zł', duration: '20min' },
  { title: 'Farbowanie głowy', desc: 'Koloryzacja włosów', price: '70,00 zł', duration: '20min' },
  { title: 'Strzyżenie maszynką na jedną długość', desc: 'Proste cięcie jedną długością', price: '50,00 zł', duration: '10min' },
];
