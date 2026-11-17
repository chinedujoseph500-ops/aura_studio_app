import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* soft "aura" glows */}
      <div className="animate-float pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#f4c7b8] opacity-60 blur-3xl sm:h-96 sm:w-96" />
      <div className="animate-float-slow pointer-events-none absolute -right-16 bottom-16 h-72 w-72 rounded-full bg-[#c9d6f2] opacity-70 blur-3xl sm:h-[28rem] sm:w-[28rem]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-20 lg:grid-cols-2">
        <div>
          <p className="fade-up mb-6 inline-block rounded-full border border-black/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-neutral-600">
            Creative agency · London
          </p>
          <h1 className="fade-up delay-1 font-[family-name:var(--font-serif)] text-6xl leading-[1.02] sm:text-7xl lg:text-8xl">
            Aura <span className="italic text-neutral-500">Studio</span>
          </h1>
          <p className="fade-up delay-2 mt-6 text-2xl text-neutral-800 sm:text-3xl">Bringing Ideas to Life</p>
          <p className="fade-up delay-2 mt-4 max-w-md text-neutral-600">
            Modern, minimalist design that helps brands stand out with purpose, simplicity and elegance.
          </p>
          <div className="fade-up delay-3 mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="rounded-full bg-black px-8 py-3.5 text-center text-white transition hover:bg-neutral-700">
              Start a project
            </a>
            <a href="#services" className="rounded-full border border-black/20 px-8 py-3.5 text-center transition hover:border-black">
              Our services
            </a>
          </div>
        </div>

        {/* decorative artwork from /public */}
        <div className="hidden justify-center lg:flex">
          <Image src="/aura-orb.svg" alt="" width={460} height={460} priority />
        </div>
      </div>
    </section>
  );
}