import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
    {
        school: "Lovely Professional University - Punjab, India",
        degree: "Bachelor of Technology - Computer Science and Engineering",
        duration: "Nov 2023 - 2027",
        details: "Top 10% of class", // Placeholder or from CV if available (CV says CGPA 6.2)
        score: "CGPA: 6.2",
    },
    {
        school: "Upgraded High School - Jharkhand, India",
        degree: "Intermediate",
        duration: "Apr 2021 – Mar 2023",
        // details: "Science Stream",
        score: "Percentage: 68%",
    },
    {
        school: "BNS DAV Public School - Jharkhand, India",
        degree: "Matriculation",
        duration: "Apr 2020 - Mar 2021",
        // details: "Standard 10th",
        score: "Percentage: 66%",
    }
];

export default function Education() {
    return (
        <section id="education" className="min-h-screen w-full py-20 bg-black text-white relative overflow-hidden flex flex-col items-center">

            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] bg-purple-900/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-[20%] right-[10%] w-[30vw] h-[30vw] bg-blue-900/20 rounded-full blur-[100px] animate-pulse delay-700" />
            </div>

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl font-bold mb-20 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 z-10"
            >
                Education
            </motion.h2>

            <div className="relative max-w-4xl w-full px-6 z-10">
                {/* Vertical Line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 rounded-full transform -translate-x-1/2" />

                {educationData.map((edu, index) => (
                    <EducationCard key={index} data={edu} index={index} />
                ))}
            </div>
        </section>
    );
}

function EducationCard({ data, index }) {
    const isEven = index % 2 === 0;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`relative flex flex-col md:flex-row items-center mb-16 ${isEven ? "md:flex-row-reverse" : ""
                }`}
        >
            {/* Timeline Dot */}
            <div className="absolute left-6 md:left-1/2 w-8 h-8 bg-black border-4 border-blue-500 rounded-full z-20 transform -translate-x-1/2 flex items-center justify-center">
                <div className="w-3 h-3 bg-blue-300 rounded-full animate-pulse" />
            </div>

            {/* Content Spacer */}
            <div className="hidden md:block w-1/2" />

            {/* Content Card */}
            <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? "md:pr-12 lg:pr-16" : "md:pl-12 lg:pl-16"}`}>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm group hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.3)]">
                    <div className="flex items-center gap-3 mb-3">
                        <FaGraduationCap className="text-3xl text-blue-400 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-mono text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                            {data.duration}
                        </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{data.school}</h3>
                    <p className="text-gray-300 font-medium mb-3">{data.degree}</p>

                    <div className="flex items-center justify-between border-t border-white/10 pt-3 mt-2">
                        <span className="text-gray-400 text-sm">{data.location}</span>
                        <span className="text-green-400 font-bold bg-green-500/10 px-3 py-1 rounded-lg">
                            {data.score}
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
