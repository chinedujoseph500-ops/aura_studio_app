'use client';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <footer className="border-t border-white/10 bg-black text-neutral-500">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm sm:flex-row">
        <p>© {year} Aura Studio. All rights reserved.</p>
        <p>London, United Kingdom</p>
      </div>
    </footer>
  );
}