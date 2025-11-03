import React from 'react';
import Spline from '@splinetool/react-spline';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-slate-100">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for depth that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/30 to-slate-950"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl items-center px-6">
        <div className="max-w-2xl rounded-xl bg-slate-900/50 p-6 backdrop-blur-md ring-1 ring-white/10">
          <p className="text-sm uppercase tracking-widest text-indigo-300/90">Portfolio · CV</p>
          <h1 className="mt-2 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-cyan-300 to-emerald-300">Your Name</span>
          </h1>
          <p className="mt-4 text-lg text-slate-200/90">
            Full‑stack developer focused on building delightful, performant products. I turn complex ideas into elegant, scalable experiences.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2 font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-800/80 px-4 py-2 font-medium text-slate-100 ring-1 ring-white/10 backdrop-blur hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
            >
              <Mail className="h-4 w-4" /> Contact
            </a>
            <a
              href="#resume"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-800/80 px-4 py-2 font-medium text-slate-100 ring-1 ring-white/10 backdrop-blur hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-800/80 px-3 py-2 text-slate-100 ring-1 ring-white/10 hover:bg-slate-800"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-800/80 px-3 py-2 text-slate-100 ring-1 ring-white/10 hover:bg-slate-800"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
