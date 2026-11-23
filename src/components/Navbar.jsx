import { useState, useEffect } from 'react';
import { Menu, X, Download, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav py-3.5 shadow-navy-card'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Chamodya Jayasena Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-navy-800 border border-blue-400/30 flex items-center justify-center font-bold text-white shadow-navy-glow group-hover:border-cyan-400 transition-all duration-300">
              <span className="text-sm tracking-wider font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300">
                CJ
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white tracking-tight text-base group-hover:text-cyan-300 transition-colors">
                Chamodya Jayasena
              </span>
              <span className="text-xs text-slate-400 font-medium">
                IT Undergraduate & Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeSection === link.id
                    ? 'text-cyan-300 bg-navy-800/80 border border-blue-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-navy-900/60'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={personalInfo.cvUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-navy-850 hover:bg-navy-800 border border-blue-700/40 hover:border-cyan-400/50 rounded-lg transition-all duration-200 hover:shadow-navy-glow"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 rounded-lg shadow-sm hover:shadow-navy-glow transition-all duration-200"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href={personalInfo.cvUrl}
              download
              className="p-2 text-slate-300 hover:text-white bg-navy-850 border border-blue-900/50 rounded-lg text-xs flex items-center gap-1.5"
              aria-label="Download CV"
            >
              <Download className="w-4 h-4 text-cyan-400" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-navy-850 rounded-lg focus:outline-none border border-navy-700/60"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden glass-nav border-t border-navy-700/50 px-4 pt-3 pb-5 mt-3 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? 'text-cyan-300 bg-navy-800 border border-blue-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-navy-850'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-navy-800/80 flex flex-col gap-2">
            <a
              href={personalInfo.cvUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-slate-200 bg-navy-850 border border-blue-700/50 rounded-lg"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download CV (PDF)</span>
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg"
            >
              <Send className="w-4 h-4" />
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
