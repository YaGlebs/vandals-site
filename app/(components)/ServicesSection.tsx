'use client';
import { services } from '../services';

const BOOKSY_PROFILE_URL =
  'https://booksy.com/pl-pl/225696_vandals-barbershop_barber-shop_3_warszawa';

export default function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold">Usługi</h2>
      <p className="mt-2 text-sm text-muted">
        Kliknij na usługę, aby otworzyć Booksy.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <button
            key={s.title}
            onClick={() => window.open(BOOKSY_PROFILE_URL, '_blank', 'noopener,noreferrer')}
            className="text-left group rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm p-5 
                       shadow-[0_1px_0_0_rgba(255,255,255,0.05)] transition 
                       hover:border-accent/40 hover:bg-white/5 focus:outline-none 
                       focus:ring-2 focus:ring-accent/40"
          >
            <h3 className="font-semibold tracking-wide">{s.title}</h3>
            <p className="mt-2 text-sm text-muted">{s.desc}</p>
            <div className="mt-4 flex items-center gap-2 text-sm text-accent/80 opacity-0 transition group-hover:opacity-100">
              <span>Otwórz Booksy</span>
              <span aria-hidden>↗</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
