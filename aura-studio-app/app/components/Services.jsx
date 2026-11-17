const services = [
  {
    title: 'Branding',
    text: 'Logos, identities and visual systems that tell your story and make you instantly recognisable.',
    points: ['Logo & identity', 'Brand guidelines', 'Brand strategy'],
    icon: <path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.3 6.8 19.1l1-5.8L3.5 9.2l5.9-.9L12 3z" />,
  },
  {
    title: 'UI/UX Design',
    text: 'Clear, intuitive interfaces designed around real people and built to feel effortless to use.',
    points: ['User research', 'Wireframes & prototypes', 'Interface design'],
    icon: <path d="M4 5h16v11H4zM9 20h6M12 16v4" />,
  },
  {
    title: 'Web Design',
    text: 'Fast, responsive websites with clean layouts that look beautiful on every screen.',
    points: ['Responsive websites', 'Landing pages', 'Design systems'],
    icon: <path d="M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">What we do</p>
        <h2 className="mt-4 max-w-xl font-[family-name:var(--font-serif)] text-4xl leading-tight sm:text-5xl">
          Our services
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group rounded-3xl border border-black/10 bg-[#f7f5f2] p-8 transition duration-300 hover:-translate-y-2 hover:border-black/30 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition group-hover:scale-110">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {s.icon}
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-neutral-600">{s.text}</p>
              <ul className="mt-6 space-y-2 text-sm text-neutral-700">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-black" /> {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}