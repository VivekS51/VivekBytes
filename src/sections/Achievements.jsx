import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaMedal } from "react-icons/fa";

const achievements = [
    {
        title: "Hackathon web 2.0",
        date: "Jan 2025",
        description: "Secured 16th place out of 32 teams by developing an innovative web-based solution under time constraints.",
        icon: FaTrophy,
        color: "text-yellow-400"
    },
    {
        title: "Code-A-Thone",
        date: "Sep 2024",
        description: "Achieved 7th place out of 50 teams by demonstrating strong problem solving and teamwork in a competitive Coding environment.",
        icon: FaMedal,
        color: "text-gray-300" // Silver/Platinum look
    }
];

export default function Achievements() {
    return (
        <section id="achievements" className="w-full py-20 bg-black text-white relative overflow-hidden">

            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[30%] right-[5%] w-[400px] h-[400px] bg-yellow-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600"
                >
                    Achievements
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-zinc-900/50 border border-white/10 p-8 rounded-2xl relative group overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="flex items-start gap-4">
                                <div className={`p-4 rounded-full bg-white/5 ${item.color} text-3xl`}>
                                    <item.icon />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors">
                                        {item.title}
                                    </h3>
                                    <span className="text-sm font-mono text-gray-400 block mb-4">
                                        {item.date}
                                    </span>
                                    <p className="text-gray-300 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
