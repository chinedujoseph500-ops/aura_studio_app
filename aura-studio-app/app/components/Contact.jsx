'use client';
import { useState } from 'react';

const field =
  'w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-neutral-500 outline-none transition focus:border-white/60';

export default function Contact() {
  const [sent, setSent] = useState(false);

    // Later, send form data to API / email service inside this function.
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    console.log('Contact form:', data);
    setSent(true);
    form.reset();
  }

  return (
    <section id="contact" className="bg-black py-24 text-white sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:gap-16">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">Contact us</p>
          <h2 className="mt-4 font-[family-name:var(--font-serif)] text-4xl leading-tight sm:text-5xl">
            Let&apos;s create something remarkable.
          </h2>
          <p className="mt-6 max-w-md text-neutral-400">
            Tell us about your project and we&apos;ll get back to you soon. Based in London, working with brands
            everywhere.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-neutral-300">Name</label>
            <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={field} />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-neutral-300">Email</label>
            <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={field} />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm text-neutral-300">Message</label>
            <textarea id="message" name="message" rows={5} required placeholder="Tell us about your project..." className={field} />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-white px-8 py-3.5 font-medium text-black transition hover:bg-neutral-300 sm:w-auto"
          >
            Send message
          </button>
          {sent && (
            <p role="status" className="text-sm text-emerald-400">
              Thank you! Your message has been received. We&apos;ll be in touch soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}