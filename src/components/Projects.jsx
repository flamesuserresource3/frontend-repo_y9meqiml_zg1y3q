import React from 'react';

const projects = [
  {
    title: 'Realtime Collaboration Suite',
    desc: 'A web app enabling live co‑editing, presence, and comments with WebSockets.',
    tags: ['React', 'WebSockets', 'Redis'],
    link: '#',
  },
  {
    title: 'E‑commerce Platform',
    desc: 'Headless storefront with search, payments, and analytics.',
    tags: ['Next.js', 'Stripe', 'Elastic'],
    link: '#',
  },
  {
    title: 'Design System',
    desc: 'Token‑driven UI kit with theming and accessibility baked‑in.',
    tags: ['TypeScript', 'Storybook', 'Radix'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <a
              key={idx}
              href={p.link}
              className="group block rounded-xl bg-slate-900/60 p-6 ring-1 ring-white/10 transition hover:translate-y-[-2px] hover:ring-indigo-400/40"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <span className="text-sm text-indigo-300/90 opacity-0 transition-opacity group-hover:opacity-100">View →</span>
              </div>
              <p className="mt-2 text-slate-300">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-slate-800/60 px-2 py-0.5 text-xs text-slate-200">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
