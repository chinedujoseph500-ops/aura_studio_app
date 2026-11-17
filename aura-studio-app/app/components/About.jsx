export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">About us</p>
          <h2 className="mt-4 font-[family-name:var(--font-serif)] text-4xl leading-tight sm:text-5xl">
            Design with purpose.
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-neutral-700">
          <p>
            Aura Studio is a London-based creative agency that helps brands express their identity through modern,
            minimalist design. We focus on clean aesthetics, strong visuals and storytelling that gives every idea a
            voice.
          </p>
          <p>
            Our goal is simple: to make every brand we touch stand out with purpose, simplicity and elegance.
          </p>
        </div>
      </div>
    </section>
  );
}