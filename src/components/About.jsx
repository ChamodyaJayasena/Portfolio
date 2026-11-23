import {
  Code,
  Smartphone,
  Shield,
  Database,
  ArrowRight,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  const pillars = [
    {
      title: 'Full-Stack Development',
      description:
        'Building responsive, modular web applications using React.js, Tailwind CSS on the frontend and Node.js, Express, and Spring Boot for scalable backend services.',
      icon: Code,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20',
    },
    {
      title: 'Native Android Apps',
      description:
        'Designing intuitive mobile experiences in Kotlin and Android Studio with MVVM architecture, SQLite Room ORM persistence, and background service notifications.',
      icon: Smartphone,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
    },
    {
      title: 'Enterprise REST APIs & Security',
      description:
        'Architecting secure RESTful endpoints, JWT session token management, Role-Based Access Control (RBAC), and AES-256-GCM encryption standards.',
      icon: Shield,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/20',
    },
    {
      title: 'Database Architecture',
      description:
        'Modeling structured schemas and performance queries across MongoDB NoSQL, MySQL relational systems, and lightweight SQLite local databases.',
      icon: Database,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full badge-navy text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>About Chamodya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bridging software engineering <br />
            with <span className="text-gradient-cyan">clean architecture & security</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4 mb-4"></div>
          <p className="text-base sm:text-lg text-slate-300">
            A look into my academic background, technical focus, and passion for creating software that solves real problems.
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Narrative Column */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 border border-navy-700/60 shadow-navy-card">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-navy-800">
              <div className="p-2.5 rounded-xl bg-blue-600/20 border border-blue-500/30 text-cyan-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Undergraduate Journey</h3>
                <p className="text-xs text-slate-400">SLIIT • Information Technology</p>
              </div>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              {personalInfo.aboutMe.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-navy-800 flex items-center justify-between">
              <div className="text-xs text-slate-400">
                Seeking:{' '}
                <span className="text-white font-medium">Software Engineering / IT Internship</span>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 hover:text-white transition-colors"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={index}
                  className="glass-card glass-card-hover rounded-2xl p-6 border border-navy-700/50 flex flex-col justify-between"
                >
                  <div>
                    <div
                      className={`w-12 h-12 rounded-xl ${pillar.bgColor} ${pillar.borderColor} border flex items-center justify-center mb-5`}
                    >
                      <IconComponent className={`w-6 h-6 ${pillar.color}`} />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{pillar.title}</h4>
                    <p className="text-sm text-slate-300/80 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
