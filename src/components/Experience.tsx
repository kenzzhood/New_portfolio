interface ExperienceItem {
  role: string;
  company: string;
  description: string;
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      role: 'Founder & CEO',
      company: 'InnoXR Labs',
      description:
        "Founded and lead a MarTech startup focused on immersive customer engagement. Driving the vision and product development for flagship solutions like 'HoloInteract', a glasses-free 3D holographic display. Secured and managing a key technology validation partnership with Titan Company Ltd. (Eternal Sparkles).",
    },
    {
      role: 'Internship',
      company: 'Acmegrade',
      description:
        "Built a LLM based chatbot that can curate response according to the user's emotion.",
    },
    {
      role: 'Chair of Technology Hub',
      company: 'SIST',
      description: 'Conducted classes on AR & VR and mentored students in various domains.',
    },
    {
      role: 'Tamil Nadu State Design Lead',
      company: 'YUCI',
      description: 'Led a specialized core group driving major initiatives across Tamil Nadu.',
    },
    {
      role: 'Technical Member',
      company: 'GDSC SIST, Hack SIST & Innovation Club SIST',
      description:
        'Contributed to projects, organized hackathons, and worked on innovative solutions.',
    },
    {
      role: 'Management Member',
      company: 'ACM SIST & OWASP SIST',
      description:
        'Managed events promoted computational learning and cybersecurity awareness. Conducted two 24-hour hackathons (one national level and one intra-college).',
    },
  ];

  return (
    <section className="py-24 px-6 bg-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Experience</h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-12 border-l-2 border-white/20 last:pb-0 hover:border-white/40 transition-all duration-300"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-white rounded-full"></div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold">{exp.role}</h3>
                <p className="text-lg text-gray-400">{exp.company}</p>
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
