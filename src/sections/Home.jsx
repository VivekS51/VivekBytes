// src/sections/Home.jsx
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-black"
    >
      {/* Neon gradient background blur */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1CD8D2] opacity-30 blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] opacity-30 blur-[150px] animate-pulse delay-500"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Hi, I'm <span className="text-white">Gaurav Gupta</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          A passionate Full Stack Developer with 5+ years of experience
          crafting modern, scalable, and performant applications using{" "}
          <span className="text-[#1CD8D2] font-semibold">
            Java, React, Next.js, TypeScript, Tailwind CSS, and FastAPI
          </span>
          .
        </motion.p>

        {/* Call-to-action buttons */}
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full text-lg font-medium text-white bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] shadow-lg shadow-cyan-500/50 hover:scale-105 transform transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full text-lg font-medium text-black bg-white hover:bg-gray-200 shadow-lg hover:scale-105 transform transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Subtle floating glowing particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-70"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 1.5,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
}
