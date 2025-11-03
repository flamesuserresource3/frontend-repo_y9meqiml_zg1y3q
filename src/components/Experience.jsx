import React from 'react';

const timeline = [
  {
    role: 'Senior Software Engineer',
    company: 'Acme Corp',
    period: '2022 — Present',
    points: [
      'Led the rebuild of a design system used across 10+ products',
      'Reduced API latency by 45% through targeted performance work',
      'Mentored a team of 5 engineers and introduced CI quality gates',
    ],
  },
  {
    role: 'Full‑stack Engineer',
    company: 'Pixel Labs',
    period: '2019 — 2022',
    points: [
      'Built real‑time dashboards and collaborative features',
      'Scaled services to support 1M+ monthly active users',
      'Co‑designed product roadmap with PM and Design',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Studio One',
    period: '2017 — 2019',
    points: [
      'Launched marketing sites and interactive experiences',
      'Pioneered a11y standards adoption across the team',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative w-full bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-3xl font-bold">Experience</h2>
        <div className="mt-8 grid gap-6">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-slate-900/60 p-6 ring-1 ring-white/10"
            >
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <h3 className="text-xl font-semibold">{item.role}</h3>
                <p className="text-sm text-slate-300">{item.period}</p>
              </div>
              <p className="mt-1 text-indigo-300/90">{item.company}</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
                {item.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
