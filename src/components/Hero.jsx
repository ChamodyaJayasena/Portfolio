import { useState } from 'react';
import {
  ArrowRight,
  Download,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Code2,
  Terminal,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden bg-radial-navy"
    >
      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-700/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text / Introduction Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-navy-850/90 border border-blue-500/30 text-xs font-medium text-slate-300 mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-white tracking-wide">
                {personalInfo.availability}
              </span>
              <span className="text-slate-500">|</span>
              <span className="text-cyan-300">SLIIT 3rd Year</span>
            </div>

            {/* Greeting & Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Building scalable <br />
              <span className="text-gradient-cyan">full-stack web</span> & <br />
              <span className="text-white">mobile solutions.</span>
            </h1>

            {/* Sub-headline */}
            <h2 className="mt-4 text-lg sm:text-xl font-medium text-slate-300">
              Hi, I'm <span className="text-white font-bold">{personalInfo.name}</span> —{' '}
              <span className="text-cyan-300 font-semibold">{personalInfo.tagline}</span>
            </h2>

            {/* Bio summary */}
            <p className="mt-4 text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl font-normal">
              {personalInfo.summary}
            </p>

            {/* Location & Quick Meta */}
            <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-blue-400" />
                <span>Java, Python, MERN & Kotlin</span>
              </div>
            </div>

            {/* Call To Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 rounded-xl shadow-navy-glow transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.cvUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-navy-850 hover:bg-navy-800 border border-blue-600/40 hover:border-cyan-400 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-navy-900/60 rounded-xl transition-all"
              >
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="mt-8 flex items-center gap-4 pt-6 border-t border-navy-800/80 w-full">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-navy-850 text-slate-300 hover:text-white hover:bg-navy-800 border border-navy-700/60 hover:border-blue-500 transition-all duration-200"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-navy-850 text-slate-300 hover:text-white hover:bg-navy-800 border border-navy-700/60 hover:border-blue-500 transition-all duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-lg bg-navy-850 text-slate-300 hover:text-white hover:bg-navy-800 border border-navy-700/60 hover:border-blue-500 transition-all duration-200"
                  aria-label="Email Address"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="p-2.5 rounded-lg bg-navy-850 text-slate-300 hover:text-white hover:bg-navy-800 border border-navy-700/60 hover:border-blue-500 transition-all duration-200"
                  aria-label="Phone Number"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Visual / Tech Card Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Decorative Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 rounded-3xl blur-md opacity-40 animate-pulse-slow"></div>

              {/* Main Profile Card Container */}
              <div className="relative rounded-2xl glass-card p-6 sm:p-8 border border-blue-500/30 shadow-navy-elevated">
                {/* Header of Profile Card */}
                <div className="flex items-center gap-4 pb-6 border-b border-navy-800/80">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-navy-900 border-2 border-blue-400/40 flex items-center justify-center shadow-md">
                    {!imageError ? (
                      <img
                        src={profileImg}
                        alt={personalInfo.name}
                        className="w-full h-full object-cover"
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-700 via-navy-800 to-navy-950 flex flex-col items-center justify-center text-white">
                        <span className="text-xl font-black text-cyan-300 tracking-wider">CJ</span>
                        <Code2 className="w-4 h-4 text-slate-300 mt-1" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      {personalInfo.name}
                    </h3>
                    <p className="text-xs font-semibold text-cyan-300 tracking-wide">
                      SLIIT • B.Sc. (Hons) IT
                    </p>
                    <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-medium text-emerald-300">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>Ready for Work</span>
                    </div>
                  </div>
                </div>

                {/* Key Skills & Tech Highlights Grid */}
                <div className="mt-6 space-y-3.5">
                  <div className="p-3 rounded-xl bg-navy-900/80 border border-blue-900/40 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400 mt-0.5">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white">Full-Stack Web Engineering</h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        React.js, Node.js, Express, Spring Boot & REST APIs
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-navy-900/80 border border-blue-900/40 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-cyan-600/20 text-cyan-400 mt-0.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white">Mobile Development</h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Kotlin, Android Studio, Room ORM, SQLite & MVVM
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-navy-900/80 border border-blue-900/40 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-indigo-600/20 text-indigo-400 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white">Security & Architecture</h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        AES-256-GCM, JWT Authentication, RBAC & Jakarta Validation
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Quick Metrics */}
                <div className="mt-6 pt-5 border-t border-navy-800/80 grid grid-cols-2 gap-3 text-center">
                  <div className="p-2.5 rounded-lg bg-navy-900/60 border border-navy-700/50">
                    <div className="text-lg font-bold text-white">3rd Year</div>
                    <div className="text-[11px] text-slate-400">SLIIT IT Student</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-navy-900/60 border border-navy-700/50">
                    <div className="text-lg font-bold text-cyan-300">5+ Projects</div>
                    <div className="text-[11px] text-slate-400">Web, Mobile & APIs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Banner */}
        <div className="mt-16 pt-8 border-t border-navy-800/60 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl glass-card border border-navy-700/50 hover:border-blue-500/30 transition-all duration-200"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-cyan-300 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
