// src/sections/Projects.jsx
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Gym Membership Website",
      description:
        "A modern gym management platform with membership plans, progress tracking, and online payment integration.",
      tech: ["React", "Tailwind CSS", "FastAPI"],
    },
    {
      title: "Legal Document Simplifier",
      description:
        "A web app that uses AI to simplify and summarize complex legal documents for better understanding.",
      tech: ["Next.js", "TypeScript", "OpenAI API"],
    },
    {
      title: "Personal Finance Tracker",
      description:
        "A tool to track expenses, generate reports, and set budgeting goals with real-time insights.",
      tech: ["React", "Tailwind CSS", "Node.js"],
    },
  ];

  return (
    <section
      id="projects"
      className="h-screen w-full flex flex-col items-center justify-center relative bg-black text-white px-6 overflow-hidden"
    >
      {/* Neon background glows */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-[250px] h-[250px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1CD8D2] opacity-20 blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-0 w-[250px] h-[250px] rounded-full bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] opacity-20 blur-[120px]"></div>
      </div>

      {/* Section Title */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#111] p-6 rounded-xl shadow-lg hover:shadow-[#1CD8D2]/50 transition-all duration-300 border border-transparent hover:border-[#1CD8D2] flex flex-col justify-between"
            whileHover={{ y: -8 }}
          >
            {/* Placeholder for Image */}
            <div className="bg-gradient-to-br from-[#302b63] via-[#00bf8f] to-[#1CD8D2] h-40 rounded-lg mb-4 flex items-center justify-center text-black font-bold">
              Image Here
            </div>

            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm flex-grow">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 bg-[#1CD8D2]/20 text-[#1CD8D2] rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
