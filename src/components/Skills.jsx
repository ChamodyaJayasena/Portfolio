import { useState } from 'react';
import {
  Code2,
  Layout,
  Server,
  Smartphone,
  Database,
  Wrench,
  CheckCircle,
  Terminal,
  Cpu,
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const iconMap = {
  Code2: Code2,
  Layout: Layout,
  Server: Server,
  Smartphone: Smartphone,
  Database: Database,
  Wrench: Wrench,
};

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterOptions = ['All', ...skillCategories.map((c) => c.category)];

  const displayedCategories =
    activeFilter === 'All'
      ? skillCategories
      : skillCategories.filter((c) => c.category === activeFilter);

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-navy-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full badge-navy text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tools, Languages & <span className="text-gradient-cyan">Frameworks</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4 mb-4"></div>
          <p className="text-base sm:text-lg text-slate-300">
            A comprehensive overview of my core engineering toolkit across full-stack web, native Android, and software security.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white shadow-navy-glow border border-blue-400/40'
                  : 'bg-navy-850 text-slate-300 hover:text-white hover:bg-navy-800 border border-navy-700/60'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((cat, index) => {
            const Icon = iconMap[cat.icon] || Terminal;
            return (
              <div
                key={index}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-navy-700/60 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-navy-800">
                    <div className="p-2.5 rounded-xl bg-blue-600/20 text-cyan-400 border border-blue-500/30">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {cat.category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="grid grid-cols-1 gap-2.5">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between px-3 py-2 rounded-lg bg-navy-900/60 border border-navy-800/80 hover:border-blue-500/30 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                          <span className="text-xs sm:text-sm font-medium text-slate-200">
                            {skill.name}
                          </span>
                        </div>
                        <span
                          className={`text-[11px] font-semibold px-2 py-0.5 rounded-md ${
                            skill.level === 'Advanced'
                              ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20'
                              : skill.level === 'Proficient'
                              ? 'bg-blue-500/10 text-blue-300 border border-blue-500/20'
                              : 'bg-slate-700/30 text-slate-300 border border-slate-700/40'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sub-footer inside card */}
                <div className="mt-5 pt-3 border-t border-navy-800/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span>{cat.skills.length} core competencies</span>
                  <span className="text-cyan-400 font-medium">Applied in Projects</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
