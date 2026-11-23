import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600/30 selection:text-white relative">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-700/10 blur-[130px] rounded-full" />
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-cyan-600/5 blur-[120px] rounded-full" />
        <div className="absolute top-2/3 -right-40 w-[600px] h-[600px] bg-indigo-700/5 blur-[140px] rounded-full" />
      </div>

      {/* Main navigation */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow z-10 relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
