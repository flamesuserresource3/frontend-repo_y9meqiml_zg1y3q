import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="font-semibold tracking-wide text-slate-100">
            <span className="text-indigo-300">&lt;/&gt;</span> Your Name
          </a>
          <nav className="hidden gap-6 text-sm sm:flex">
            <a href="#about" className="text-slate-300 hover:text-white">About</a>
            <a href="#experience" className="text-slate-300 hover:text-white">Experience</a>
            <a href="#projects" className="text-slate-300 hover:text-white">Projects</a>
            <a href="#contact" className="text-slate-300 hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main className="pt-14">
        <Hero />
        <About />
        <Experience />
        <Projects />

        {/* Resume anchor (for download buttons to target) */}
        <div id="resume" className="sr-only" />

        {/* Contact */}
        <section id="contact" className="w-full bg-slate-950 py-20">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="rounded-2xl bg-slate-900/60 p-8 ring-1 ring-white/10">
              <h2 className="text-3xl font-bold">Get in touch</h2>
              <p className="mt-2 max-w-2xl text-slate-300">
                Interested in collaborating or have an opportunity in mind? Drop me a line and I’ll respond promptly.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:you@example.com?subject=Hello%20from%20your%20portfolio"
                  className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2 font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
                >
                  <Mail className="h-4 w-4" /> Email me
                </a>
                <a
                  href="#home"
                  className="rounded-lg border border-white/10 px-4 py-2 text-slate-100 hover:bg-slate-800/70"
                >
                  Back to top
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950 py-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
