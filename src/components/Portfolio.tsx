import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
}

export default function Portfolio() {
  const projects: Project[] = [
    {
      title: 'HoloInteract Pro (InnoXR Labs)',
      description:
        'Flagship product for InnoXR Labs. An interactive, glasses-free 3D holographic display with LLM integration for retail. Deployed in partnership with Titan Company Ltd.',
      tags: ['Python', 'Unity', 'C#', 'LLMs', 'Gaussian Splatting'],
      liveLink: 'https://innoxrlabs.com',
      githubLink: 'https://github.com',
    },
    {
      title: 'Moot VR',
      description:
        'A Virtual Reality platform for hosting and attending Mock Trials both in Android and Quest 2.',
      tags: ['Unity', 'C#', 'Photon', 'Cardboard SDK', 'Quest SDK'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      title: 'Wander Lens',
      description:
        'Created AI travel buddy with itinerary planning, AR exploration, and 3D food previews using RAG and Gaussian Splatting.',
      tags: ['Python', 'Fast API', 'Hugging Face', 'LLMs', 'Ollama', 'Immersal XR'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      title: 'Voice Vista',
      description: 'Live Voice to Image Generator.',
      tags: ['Python', 'Fast API', 'GenAi'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      title: 'Health Intellect',
      description: 'A Medical Repository for Doctors and Patients.',
      tags: ['Python', 'React', 'Firebase', 'LLMs'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      title: 'AR Product Visualizer',
      description: 'An AR based Product Visualizer for E-commerce Products.',
      tags: ['Unity', 'Python', 'GenAi', 'C++', 'Vuforia'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
  ];

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">My Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-lg p-6 hover:bg-white/10 hover:transform hover:scale-105 transition-all duration-300 flex flex-col"
            >
              <h3 className="text-xl font-bold mb-3 hover:text-white transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/10 text-xs rounded-full text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors duration-300"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors duration-300"
                    aria-label="GitHub Repository"
                  >
                    <Github size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
