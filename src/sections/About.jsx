// src/sections/About.jsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden"
    >
      {/* Neon background accents */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1CD8D2] opacity-20 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] opacity-20 blur-[100px] animate-pulse delay-500"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Section */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63]">
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            I’m <span className="text-white font-semibold">Gaurav Gupta</span>, a dedicated
            and passionate <span className="text-[#1CD8D2] font-semibold">Full Stack Developer</span> 
            with over <span className="font-semibold">5 years of industry experience</span>.  
            Throughout my career, I’ve crafted scalable, modern, and high-performance applications
            using <span className="text-[#1CD8D2]">Java</span>, <span className="text-[#1CD8D2]">React</span>, <span className="text-[#1CD8D2]">Next.js</span>, <span className="text-[#1CD8D2]">TypeScript</span>, 
            <span className="text-[#1CD8D2]"> Tailwind CSS</span>, and <span className="text-[#1CD8D2]">FastAPI</span>.
          </p>
          <p className="mt-4 text-gray-400 text-lg">
            My mission is to transform ideas into reality by building 
            engaging user experiences and robust backend systems that work seamlessly together.
          </p>
        </motion.div>

        {/* Skills Bubble Cloud */}
        <motion.div
          className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {["Java", "React", "Next.js", "TypeScript", "Tailwind CSS", "FastAPI"].map((skill, i) => (
            <div
              key={i}
              className="p-4 rounded-xl text-center font-medium bg-gradient-to-br from-[#1CD8D2]/20 to-[#302b63]/20 border border-[#1CD8D2]/30 text-[#1CD8D2] hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#1CD8D2]/20"
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
