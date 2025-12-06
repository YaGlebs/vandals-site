'use client';
import { useEffect, useState } from 'react';

export default function BooksyModal({
  open,
  onClose,
  url,
}: {
  open: boolean;
  onClose: () => void;
  url: string;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[60] ${
        open ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      aria-hidden={!open}
    >
      {/* W */}
      <div
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* W */}
      <div
        className={`absolute left-1/2 top-1/2 w-[95vw] max-w-4xl -translate-x-1/2 -translate-y-1/2
          rounded-2xl border border-white/10 bg-black/70 backdrop-blur-lg
          shadow-2xl overflow-hidden transition-all duration-200
          ${open ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <div className="font-semibold">Rezerwacja — Booksy</div>
          <button
            onClick={onClose}
            className="rounded-md px-3 py-1 text-sm text-muted hover:text-white hover:bg-white/10"
          >
            Zamknij ✕
          </button>
        </div>

        <iframe
          src={url}
          className="h-[70vh] w-full bg-white"
          loading="lazy"
        />
      </div>
    </div>
  );
}
