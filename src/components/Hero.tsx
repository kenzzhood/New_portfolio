export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 animated-gradient">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fadeIn">
          GOUTHAM SRINATH
        </h1>

        <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-gray-300">
          Founder & CEO, InnoXR Labs
        </h2>

        <p className="text-lg md:text-xl text-gray-400 mb-12">
          AI&ML Developer | AR&VR Developer
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('portfolio')}
            className="px-8 py-4 bg-white text-[#111111] font-semibold rounded-md hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-[#111111] transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
