export default function About() {
  const techStack = [
    'Unity',
    'Python',
    'React',
    'Flutter',
    'JavaScript',
    'LLMs',
    'Gaussian Splatting',
    'GenAi',
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">About Me</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Hey! I am a Computer Science undergraduate and the Founder & CEO of InnoXR Labs,
              specializing in AI/ML, VR/AR, and generative AI, with extensive experience in product
              development and management. I have a strong track record of building innovative
              solutions across education, healthcare, and entertainment, including VR simulations,
              AI-driven platforms, and multimodal AI applications. Skilled in Unity, Python, and
              LLMs, I thrive on transforming ideas into scalable, impactful products while leading
              multidisciplinary teams to push technological boundaries.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-2 bg-white/10 text-white rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
