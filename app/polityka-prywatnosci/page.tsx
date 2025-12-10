'use client';

import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-white/10 bg-[#0B0B0F]/90 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex flex-col leading-tight select-none">
            <span className="font-brand text-[20px] tracking-[0.14em] text-white">VANDALS</span>
            <span className="font-brand text-[11px] tracking-[0.32em] text-white/80">BARBERSHOP</span>
          </Link>
          <Link
            href="/"
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10 transition"
          >
            Wróć na stronę główną
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 md:px-6 py-12 space-y-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Polityka prywatności</h1>
          <p className="mt-2 text-sm text-muted">
            Wersja: 01.2025 • Ten dokument opisuje zasady przetwarzania danych osobowych w Vandals Barbershop.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Administrator danych</h2>
          <p className="text-sm text-white/80">
            Administratorem danych jest Vandals Barbershop, JRR Tolkiena 1/4, 02-676, Warszawa (Mokotów). Kontakt: tema.lucenko1743@gmail.com, tel. +48 571 848 348.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Zakres i cel przetwarzania</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm text-white/80">
            <li>Dane kontaktowe (imię, telefon, e-mail) — obsługa rezerwacji i komunikacja.</li>
            <li>Dane transakcyjne i historie wizyt — realizacja usług, rozliczenia, obsługa reklamacji.</li>
            <li>Dane techniczne (adres IP, identyfikatory urządzeń, cookies) — bezpieczeństwo, statystyki, dostosowanie strony.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Podstawy prawne</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm text-white/80">
            <li>Art. 6 ust. 1 lit. b RODO — wykonanie umowy (rezerwacja i realizacja usług).</li>
            <li>Art. 6 ust. 1 lit. c RODO — obowiązki prawne (księgowość, rachunkowość).</li>
            <li>Art. 6 ust. 1 lit. f RODO — prawnie uzasadniony interes (bezpieczeństwo, analiza statystyczna, komunikacja).</li>
            <li>Art. 6 ust. 1 lit. a RODO — zgoda (marketing, newsletter, pliki cookies, jeśli wymagane).</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Odbiorcy danych</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm text-white/80">
            <li>Booksy (system rezerwacji online) — w celu obsługi wizyt.</li>
            <li>Dostawcy hostingu i usług IT (utrzymanie serwisu, analityka).</li>
            <li>Dostawcy płatności (jeśli używasz szybkich płatności w Booksy).</li>
            <li>Podmioty wspierające marketing (np. Instagram) — tylko w zakresie wymaganym do publikacji treści.</li>
            <li>Organy państwowe, jeśli wymagają tego przepisy prawa.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Okres przechowywania</h2>
          <p className="text-sm text-white/80">
            Dane przechowujemy przez czas świadczenia usług, a następnie przez okres wynikający z przepisów (np. 5 lat dla dokumentacji księgowej) lub do wycofania zgody w przypadku działań marketingowych.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Twoje prawa</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm text-white/80">
            <li>Dostęp do danych, ich sprostowanie, usunięcie lub ograniczenie przetwarzania.</li>
            <li>Przenoszenie danych.</li>
            <li>Sprzeciw wobec przetwarzania opartego na uzasadnionym interesie.</li>
            <li>Wycofanie zgody w dowolnym momencie (nie wpływa na zgodność z prawem przetwarzania przed wycofaniem).</li>
            <li>Skarga do Prezesa UODO.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Cookies i analityka</h2>
          <p className="text-sm text-white/80">
            Serwis może korzystać z plików cookies w celach funkcjonalnych, bezpieczeństwa oraz statystycznych. Możesz zarządzać cookies w ustawieniach przeglądarki. Zewnętrzne usługi (np. Booksy, Instagram, mapy Google) mogą stosować własne pliki cookies zgodnie z ich politykami.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Kontakt</h2>
          <p className="text-sm text-white/80">
            W sprawach dotyczących danych osobowych skontaktuj się: tema.lucenko1743@gmail.com lub telefonicznie +48 571 848 348.
          </p>
        </section>
      </div>
    </main>
  );
}
