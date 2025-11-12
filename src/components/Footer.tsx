import { Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-gray-400 text-sm">© 2025 Goutham Srinath</p>

        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/goutham-srinath"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/goutham-srinath"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
