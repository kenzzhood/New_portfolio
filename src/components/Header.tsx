import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#111111]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl font-bold tracking-tight hover:text-white transition-all duration-300"
        >
          GOUTHAM SRINATH
        </button>

        <nav className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="hidden md:block text-sm font-medium hover:text-white transition-all duration-300"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="hidden md:block text-sm font-medium hover:text-white transition-all duration-300"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block text-sm font-medium hover:text-white transition-all duration-300"
          >
            Contact
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-white text-[#111111] font-semibold text-sm rounded-md hover:bg-gray-200 transition-all duration-300"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
