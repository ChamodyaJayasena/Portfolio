import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';
import { educationHistory, certifications } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-20 lg:py-28 relative bg-navy-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full badge-navy text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient-cyan">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4 mb-4"></div>
          <p className="text-base sm:text-lg text-slate-300">
            Formal academic foundation in Information Technology and specialized professional training in full-stack engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Academic Degrees */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-blue-600/20 text-cyan-400 border border-blue-500/30">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Academic Qualifications</h3>
            </div>

            {educationHistory.map((edu, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 sm:p-7 border border-navy-700/60 shadow-navy-card hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white">{edu.institution}</h4>
                    <p className="text-sm font-semibold text-cyan-300 mt-0.5">{edu.degree}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-300 bg-blue-900/30 border border-blue-700/40 px-2.5 py-1 rounded-lg">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{edu.location}</span>
                  </div>
                  <span>•</span>
                  <span className="text-slate-300 font-medium">{edu.status}</span>
                </div>

                <p className="text-sm text-slate-300/90 leading-relaxed mb-4">
                  {edu.description}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-navy-800">
                  {edu.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Certifications & Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-cyan-600/20 text-cyan-400 border border-cyan-500/30">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Professional Training</h3>
            </div>

            {certifications.map((cert, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 sm:p-7 border border-navy-700/60 shadow-navy-card hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white">{cert.title}</h4>
                    <p className="text-xs sm:text-sm font-semibold text-cyan-300 mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    {cert.year}
                  </span>
                </div>

                <p className="text-sm text-slate-300/90 leading-relaxed mb-4">
                  {cert.description}
                </p>

                <div className="pt-3 border-t border-navy-800">
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Core Focus Topics:
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-navy-900 text-slate-200 border border-navy-700/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Summary Box */}
            <div className="rounded-2xl p-6 bg-gradient-to-br from-navy-850 to-navy-900 border border-blue-500/30">
              <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Internship Readiness</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Currently in the 3rd year of undergraduate studies at SLIIT, actively preparing to transition academic and project achievements into an industry software engineering or full-stack web/mobile development internship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
