import React from 'react';

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Python',
  'FastAPI',
  'Tailwind CSS',
  'MongoDB',
  'AWS',
  'CI/CD',
];

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold">About</h2>
            <p className="mt-4 text-slate-300">
              I'm a product‑minded engineer with a passion for crafting polished user experiences and shipping robust backends. I enjoy working across the stack, from design systems and animations to APIs and databases.
            </p>
            <p className="mt-3 text-slate-300">
              Beyond code, I mentor developers, write, and continuously explore new ways to make software feel effortless.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xl font-semibold">Core skills</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-sm text-slate-200"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-slate-900/60 p-4 ring-1 ring-white/10">
                <p className="text-sm uppercase tracking-wide text-indigo-300/80">Strengths</p>
                <ul className="mt-2 list-disc pl-5 text-slate-300">
                  <li>End‑to‑end product thinking</li>
                  <li>Clean, accessible interfaces</li>
                  <li>Performance and DX</li>
                </ul>
              </div>
              <div className="rounded-lg bg-slate-900/60 p-4 ring-1 ring-white/10">
                <p className="text-sm uppercase tracking-wide text-indigo-300/80">Interests</p>
                <ul className="mt-2 list-disc pl-5 text-slate-300">
                  <li>3D & creative coding</li>
                  <li>Design systems</li>
                  <li>AI‑augmented interfaces</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
