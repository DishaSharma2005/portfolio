import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Zap, Code, Star, Calendar } from 'lucide-react';

// === Experience Data (Gym Challenges/Milestones) ===
// Only one entry for the specific internship
const experienceData = [
    {
        icon: <Briefcase className="w-6 h-6 text-cyan-400" />,
        date: "Aug 2025 - Sep 2025 (2 mos)",
        title: "Intern - Full Stack Developer",
        company: "National Innovation Foundation - India (Remote)",
        description: [
            "Developed and deployed a full-stack Patent Management System (MIS Portal) for innovators and patents.",
            "Built using Node.js, Express.js, MongoDB, and EJS with Progressive Web App (PWA) capabilities for offline access and mobile-friendly use."
        ],
        skills: ["Node.js","EJS", "Express.js", "PWA"]
    },
];

const Experience = () => {
    return (
        <section
            id="experience"
            className="bg-[#0f0f0f] py-24 px-6 md:px-12 text-white overflow-hidden"
        >
            <div className="max-w-4xl mx-auto">
                {/* Heading */}
                <motion.h2
                    className="text-4xl font-black mb-4 text-center tracking-wider relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        background: "linear-gradient(90deg, #AA00FF 0%, #FFEA00 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        filter: "drop-shadow(0 2px 5px rgba(255, 234, 0, 0.2))",
                    }}
                >
                    EXPERIENCE
                </motion.h2>
                <p className="text-gray-400 max-w-xl text-center mb-16 mx-auto relative z-10">
                    My professional milestones and key projects completed during my developer journey.
                </p>

                {/* Single Timeline Entry - Center Aligned */}
                <div className="relative flex justify-center">
                    {/* Vertical Timeline Line (Only a small segment) */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-400/30 hidden md:block" style={{ height: 'calc(100% - 20px)' }}></div>

                    {experienceData.map((item, index) => (
                        <motion.div
                            key={index}
                            // Forced to center alignment for single entry on desktop
                            className={`flex mb-12 relative w-full justify-center`} 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            {/* Inner Container forced to narrow width for centering effect */}
                            <div className={`w-full md:w-3/4 p-4 text-left`}>
                                
                                {/* Timeline Dot/Icon (Centered) */}
                                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 border-4 border-[#0f0f0f] z-10 shadow-lg"
                                >
                                    {item.icon}
                                </div>

                                {/* Content Card */}
                                <div className="mt-8 p-6 rounded-xl border border-purple-500/50 shadow-xl transition-transform hover:scale-[1.02] hover:shadow-yellow-400/20"
                                     style={{ background: 'rgba(20, 20, 30, 0.7)', backdropFilter: 'blur(10px)' }}
                                >
                                    <h3 className="text-xl font-bold mb-1 text-yellow-400">{item.title}</h3>
                                    <p className="text-sm font-semibold text-purple-400 mb-2">{item.company}</p>
                                    
                                    <div className="flex items-center text-gray-400 text-xs mb-4">
                                        <Calendar className="w-3 h-3 mr-1"/> {item.date}
                                    </div>
                                    
                                    <ul className="text-gray-300 text-base space-y-2 list-disc pl-5">
                                        {item.description.map((line, i) => (
                                            <li key={i}>{line}</li>
                                        ))}
                                    </ul>

                                    {/* Skills Tags */}
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {item.skills.map((skill, i) => (
                                            <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/50">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                    
                    {/* Final Trophy Indicator (Removed unnecessary animation for single point) */}
                    <div className="absolute left-1/2 bottom-[-1rem] transform -translate-x-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400 border-4 border-[#0f0f0f] z-20 shadow-2xl">
                        <Star className="w-5 h-5 text-gray-900" fill="currentColor"/>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
