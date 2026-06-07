import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Shield, Star, Calendar } from 'lucide-react';
import pdf from "../assets/certificate-Disha.pdf";

const experienceData = [
    {
        icon: <Shield className="w-5 h-5 text-red-400" />,
        date: "Jun 2026 – Present | Remote",
        title: "Software Developer Trainee",
        company: "DRDO (Defence Research and Development Organisation)",
        description: [
            "Currently serving as a Software Developer Trainee. Detailed responsibilities and project contributions will be updated soon.",
        ],
        skills: ["Software Development", "Trainee"],
    },
    {
        icon: <Code className="w-5 h-5 text-cyan-400" />,
        date: "Apr 2026 – Present | Remote",
        title: "Software Developer Intern",
        company: "CareEase Homecare Private Limited",
        description: [
            "Built backend APIs using Python, FastAPI, PostgreSQL, and Supabase for a digital healthcare platform.",
            "Developed end-to-end features including API integration, validation, authentication, and role-based access control.",
            "Enhanced application reliability through Swagger/OpenAPI documentation, SQL migrations, automated testing, and debugging across backend and frontend systems.",
        ],
        skills: ["Python", "FastAPI", "PostgreSQL", "Supabase", "REST APIs"],
    },
    {
        icon: <Briefcase className="w-5 h-5 text-yellow-400" />,
        date: "Aug 2025 – Oct 2025 | Remote",
        title: "Full Stack Developer Intern",
        company: "National Innovation Foundation – India (DST, Govt. of India)",
        description: [
            "Developed and deployed a full-stack Patent Management System (MIS Portal) for innovator profiles and patent records using Node.js, Express.js, MongoDB, and EJS.",
            "Designed and tested REST APIs with validation, structured error handling, and scalable database operations.",
            "Built PWA capabilities for offline access and collaborated remotely in a cross-functional team following clean coding practices.",
        ],
        skills: ["Node.js", "Express.js", "MongoDB", "EJS", "REST APIs", "PWA"],
        certificate: pdf,
    },
];

const Experience = () => {
    return (
        <section
            id="experience"
            className="bg-[#0f0f0f] py-16 sm:py-24 px-4 sm:px-6 md:px-12 text-white overflow-hidden"
        >
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    className="text-3xl sm:text-4xl font-black mb-4 text-center tracking-wider relative z-10"
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
                <p className="text-gray-400 max-w-xl text-center mb-12 sm:mb-16 mx-auto relative z-10 text-sm sm:text-base px-2">
                    My professional milestones and key projects completed during my developer journey.
                </p>

                <div className="relative flex flex-col items-center">
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 sm:w-1 h-[calc(100%-2.5rem)] bg-yellow-400/30 hidden sm:block" />

                    {experienceData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="relative mb-10 sm:mb-14 last:mb-8 w-full flex justify-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className="absolute left-1/2 -translate-x-1/2 top-1 w-8 h-8 hidden sm:flex items-center justify-center rounded-full bg-gray-800 border-4 border-[#0f0f0f] z-10 shadow-lg">
                                {item.icon}
                            </div>

                            <div className="w-full md:w-3/4 p-2 sm:p-4 text-left">
                                <div
                                    className="mt-0 sm:mt-8 p-4 sm:p-6 rounded-xl border border-purple-500/50 shadow-xl transition-transform hover:scale-[1.01] hover:shadow-yellow-400/20"
                                    style={{ background: 'rgba(20, 20, 30, 0.7)', backdropFilter: 'blur(10px)' }}
                                >
                                    <div className="flex items-center gap-2 mb-3 sm:hidden">
                                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 border-2 border-yellow-400/40 shrink-0">
                                            {item.icon}
                                        </div>
                                        <div className="flex items-center text-gray-400 text-xs">
                                            <Calendar className="w-3 h-3 mr-1 shrink-0" />
                                            {item.date}
                                        </div>
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold mb-1 text-yellow-400 break-words">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm font-semibold text-purple-400 mb-2 break-words">
                                        {item.company}
                                    </p>

                                    <div className="hidden sm:flex items-center text-gray-400 text-xs mb-4">
                                        <Calendar className="w-3 h-3 mr-1 shrink-0" />
                                        {item.date}
                                    </div>

                                    <ul className="text-gray-300 text-sm sm:text-base space-y-2 list-disc pl-5">
                                        {item.description.map((line, i) => (
                                            <li key={i} className="break-words leading-relaxed">{line}</li>
                                        ))}
                                    </ul>

                                    <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                                        {item.skills.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="text-[0.65rem] sm:text-xs font-medium px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/50"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    {item.certificate && (
                                        <div className="mt-4">
                                            <a
                                                href={item.certificate}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center w-full sm:w-auto min-h-[44px] px-5 py-2.5 text-sm font-semibold rounded-full text-gray-900 bg-yellow-400 shadow-[0_0_20px_rgba(255,255,0,0.5)] hover:bg-yellow-300 hover:shadow-[0_0_30px_rgba(255,255,0,0.9)] transition-all duration-300"
                                            >
                                                View Internship Certificate
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400 border-4 border-[#0f0f0f] z-20 shadow-2xl">
                        <Star className="w-5 h-5 text-gray-900" fill="currentColor" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
