
import React from "react";
import { motion } from "framer-motion";
import { SiOracle } from "react-icons/si";

// Framer Motion variants for card animations
const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: "easeOut",
        },
    }),
};

const certifications = [
    {
        title: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional",
        issuer: "Oracle",
        date: "Sep 2025",
        link: "/certificates/Oracle_DevOps.pdf",
        color: "from-red-500 to-orange-600",
    },
    {
        title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
        issuer: "Oracle",
        date: "Sep 2025",
        link: "/certificates/Oracle_GenAI.pdf",
        color: "from-blue-500 to-cyan-500",
    },
    {
        title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
        issuer: "Oracle",
        date: "Sep 2025",
        link: "/certificates/Oracle_AI_Foundations.pdf",
        color: "from-purple-500 to-pink-500",
    },
    {
        title: "MySQL HeatWave Implementation Certified Associate Rel 1",
        issuer: "Oracle",
        date: "Sep 2025",
        link: "/certificates/MySQL_HeatWave.pdf",
        color: "from-yellow-400 to-orange-500",
    },
];

export default function Certifications() {
    return (
        <section
            id="certifications"
            className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden"
        >
            {/* Background Effect */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]" />
            </div>

            <motion.h2
                className="text-4xl sm:text-5xl font-bold mb-16 z-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Certifications
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full z-10">
                {certifications.map((cert, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className="relative group bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm overflow-hidden"
                    >
                        <div
                            className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${cert.color} opacity-10 rounded-bl-full transition-opacity group-hover:opacity-20`}
                        />

                        <div className="flex items-start justify-between mb-4">
                            <SiOracle className="text-4xl text-red-500" />
                            <span className="text-sm font-mono text-gray-400 border border-white/10 px-2 py-1 rounded-full">
                                {cert.date}
                            </span>
                        </div>

                        <h3 className="text-xl font-bold mb-2 pr-8">{cert.title}</h3>
                        <p className="text-gray-400 mb-6">Issued by {cert.issuer}</p>

                        <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-red-400 transition-colors"
                        >
                            View Certificate
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
