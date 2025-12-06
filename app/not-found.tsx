'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#0b0b0f] text-white px-6 text-center">
      <div className="max-w-xl w-full space-y-4">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-black/50">
          <Image
            src="/hero-3.jpg"
            alt="Wnętrze Vandals Barbershop"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-lg font-semibold">
            Krzesło wolne, ale strona zajęta.
          </div>
        </div>

        <div className="text-sm text-white/80">
          Strona, której szukasz, nie istnieje. Wróć do głównej albo umów się na wizytę.
        </div>

        <div className="flex justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center rounded-full px-4 py-2 bg-white text-black font-semibold"
          >
            Wróć na stronę główną
          </Link>
          <a
            href="https://booksy.com/pl-pl/225696_vandals-barbershop_barber-shop_3_warszawa"
            className="inline-flex items-center rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10"
            target="_blank"
            rel="noopener"
          >
            Booksy ↗
          </a>
        </div>
      </div>
    </main>
  );
}
