import React, { useEffect, useState } from "react";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Tech Galaxy",
    duration: "2022 - Present",
    description:
      "Led teams to build high-performance apps, integrated AI features, and improved engagement by 60%.",
  },
  {
    role: "Frontend Developer",
    company: "Neon Works",
    duration: "2020 - 2022",
    description:
      "Built animated, interactive websites using React, GSAP, and Three.js.",
  },
  {
    role: "Junior Developer",
    company: "Code Sparks",
    duration: "2018 - 2020",
    description:
      "Implemented UI features, fixed bugs, and contributed to scalable codebases.",
  },
];

const Experience = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="experience"
      className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-8 py-20 overflow-hidden"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-16">Experience</h2>

      {/* Timeline Container */}
      <div className="relative w-full max-w-6xl flex items-center justify-center">
        {/* Expanding Line */}
        <div
          className={`absolute h-[4px] bg-white transition-all duration-1000 ease-out ${
            animate ? "w-full" : "w-0"
          }`}
        ></div>

        {/* Experience Points */}
        <div className="flex justify-between w-full relative">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center opacity-0 translate-y-10 transition-all duration-700 delay-${
                idx + 2
              }00 ${animate ? "opacity-100 translate-y-0" : ""}`}
            >
              {/* Circle Marker */}
              <div className="w-5 h-5 rounded-full bg-white mb-4"></div>
              {/* Card */}
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 max-w-xs">
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <p className="text-sm text-gray-400 mb-2">
                  {exp.company} | {exp.duration}
                </p>
                <p className="text-sm text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
