// src/sections/Skills.jsx
import { motion } from "framer-motion";
import { FaJava, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFastapi } from "react-icons/si";

export default function Skills() {
  const skills = [
    { icon: <FaJava />, name: "Java" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiFastapi />, name: "FastAPI" },
  ];

  // Duplicate array for smooth infinite scroll
  const repeatedSkills = [...skills, ...skills, ...skills];

  return (
    <section
      id="skills"
      className="h-screen w-full flex flex-col items-center justify-center relative bg-black text-white overflow-hidden"
    >
      {/* Neon glow background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1CD8D2] opacity-20 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] opacity-20 blur-[120px] animate-pulse delay-500"></div>
      </div>

      <motion.h2
        className="text-4xl sm:text-5xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h2>

      {/* Infinite scroll container */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-10 text-6xl text-[#1CD8D2]"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20, // speed of scroll
          }}
          style={{ whiteSpace: "nowrap" }}
        >
          {repeatedSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 min-w-[120px]"
            >
              <span className="hover:scale-125 transition-transform duration-300">
                {skill.icon}
              </span>
              <p className="text-sm">{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
