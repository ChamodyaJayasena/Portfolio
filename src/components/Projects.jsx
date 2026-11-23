import { useState } from 'react';
import {
  ExternalLink,
  FolderGit2,
  CheckCircle2,
  Star,
  Sparkles,
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Mobile', 'Full Stack', 'Backend', 'Security & Web'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => {
          if (selectedCategory === 'Security & Web') {
            return p.category.includes('Security');
          }
          return p.category.toLowerCase().includes(selectedCategory.toLowerCase());
        });

  return (
    <section id="projects" className="py-20 lg:py-28 relative bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full badge-navy text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-cyan">Engineering Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4 mb-4"></div>
          <p className="text-base sm:text-lg text-slate-300">
            Real-world applications spanning native mobile development, modern full-stack web platforms, Spring Boot backend systems, and web security.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-navy-glow border border-blue-400/40'
                  : 'bg-navy-850 text-slate-300 hover:text-white hover:bg-navy-800 border border-navy-700/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl border border-navy-700/60 flex flex-col justify-between overflow-hidden relative group"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-[11px] font-bold text-white shadow-sm">
                    <Star className="w-3 h-3 fill-current" />
                    <span>Featured</span>
                  </span>
                </div>
              )}

              <div className="p-6 sm:p-7">
                {/* Category Pill */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-md border border-cyan-500/20">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs font-medium text-slate-400 mt-1.5 mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-300/90 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Engineering Highlights */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Key Engineering Highlights</span>
                  </h4>
                  <ul className="space-y-1.5">
                    {project.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Tech Tags & Links Footer */}
              <div className="p-6 pt-0 mt-auto">
                <div className="pt-4 border-t border-navy-800">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-navy-900 text-slate-300 border border-navy-700/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center justify-between gap-3">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-navy-900 hover:bg-navy-800 px-3 py-1.5 rounded-lg border border-navy-700/60 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-300 hover:text-white transition-colors"
                    >
                      <span>Inquire Details</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
