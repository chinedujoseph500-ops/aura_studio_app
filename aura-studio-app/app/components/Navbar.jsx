'use client';
import { useState } from 'react';
import Image from 'next/image';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[#f7f5f2]/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image src="/logo.svg" alt="" width={28} height={28} />
          <span className="text-lg font-semibold tracking-tight">Aura Studio</span>
        </a>

        {/* tablet + desktop menu */}
        <ul className="hidden items-center gap-8 text-sm md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-neutral-600 transition hover:text-black">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="rounded-full bg-black px-5 py-2 text-white transition hover:bg-neutral-700">
              Start a project
            </a>
          </li>
        </ul>

        {/* phone menu button */}
        <button
          className="flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="border-t border-black/5 bg-[#f7f5f2] px-6 pb-6 pt-2 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-lg text-neutral-800">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}