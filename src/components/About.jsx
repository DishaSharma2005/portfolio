import React from "react";
import { motion } from "framer-motion";
// Importing all necessary Lucide icons for the thematic approach
import { Code, Shield, Zap, Database, Sun, Feather, Heart, TrendingUp, Lightbulb } from 'lucide-react';

// === Skill Data (Tech Badges) ===
const skills = [
  // Core Foundation (Like Fighting/Ground Type - Strong Foundation)
  { name: "Java", icon: <Code className="w-5 h-5 text-red-400" />, color: "bg-red-900/40", hoverColor: "shadow-red-500/80" },
  { name: "DSA", icon: <Shield className="w-5 h-5 text-indigo-400" />, color: "bg-indigo-900/40", hoverColor: "shadow-indigo-500/80" },
  
  // Web Combat (Like Electric/Psychic Type - Dynamic Building)
  { name: "React", icon: <Zap className="w-5 h-5 text-cyan-400" />, color: "bg-cyan-900/40", hoverColor: "shadow-cyan-500/80" },
  { name: "Node.js", icon: <Database className="w-5 h-5 text-green-400" />, color: "bg-green-900/40", hoverColor: "shadow-green-500/80" },
  { name: "MongoDB", icon: <Sun className="w-5 h-5 text-yellow-400" />, color: "bg-yellow-900/40", hoverColor: "shadow-yellow-500/80" },
  
  // Styling & Tools (Like Flying/Ghost Type - Aesthetics & Utility)
  { name: "Tailwind CSS", icon: <Feather className="w-5 h-5 text-blue-400" />, color: "bg-blue-900/40", hoverColor: "shadow-blue-500/80" },
];

// === Timeline Data (Trainer's Log) ===
const timelineData = [
    { 
        title: "Level 1: Core Training Initiated (B.Tech)", 
        desc: "Began the journey! Dedicated to mastering foundational abilities: Data Structures and Algorithms (DSA) and Java. Currently engaging in training on LeetCode/Codeforces." 
    },
    { 
        title: "Evolved Skill Set: Web Combat", 
        desc: "Dived into the MERN Stack to understand how the web is built, moving from theoretical knowledge to tangible, full-stack projects (See Projects for battle records!)" 
    },
    { 
        title: "Current Mission: Impact & Growth", 
        desc: "Actively seeking opportunities to collaborate, build, and apply skills, striving to become a thoughtful and impactful developer." 
    }
];

// === Main Component ===
export default function About() {
    return (
        <section id="about" className="bg-[#0e0e0e] py-20 px-6 md:px-12 text-gray-100 relative">
            
            {/* Background Glows (Enhanced for depth) */}
            <div className="absolute top-1/4 left-1/4 h-64 w-64 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 h-48 w-48 bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start relative z-10">

                {/* Left Side: Profile & Trainer's Log (Timeline) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1"
                >
                    {/* Profile Card / Trainer Image with Rotating Frame */}
                    <div className="relative mb-10">
                       
                        {/* Image Container */}
                        <div className="relative rounded-3xl p-5 shadow-2xl transition-transform duration-500 bg-[#1a1a1a] z-10">
                            <img 
                                src="https://placehold.co/400x400/374151/8a2be2?text=D+I+S+H+A" 
                                alt="Disha Profile" 
                                className="rounded-2xl w-72 h-72 md:w-80 md:h-80 object-cover border-4 border-yellow-400/50" 
                            />
                        </div>
                    </div>

                    {/* Timeline: Trainer's Log */}
                    <h3 id="journey" className="text-3xl font-bold mb-8 text-center md:text-left text-yellow-300 flex items-center gap-3 border-b border-yellow-300/30 pb-2 w-full justify-center md:justify-start">
                        <TrendingUp className="w-7 h-7" /> Trainer's Log
                    </h3>
                    <div className="relative pl-6 sm:pl-10 pb-6 before:absolute before:top-0 before:left-3 sm:before:left-5 before:h-full before:w-1 before:bg-yellow-500/50">
                        {timelineData.map((item, index) => (
                            <div key={index} className="timeline-item mb-10 relative last:mb-0">
                                {/* Timeline Dot (Pokéball style) */}
                                <span className="absolute left-0 top-0 w-6 h-6 sm:w-8 sm:h-8 bg-purple-600 rounded-full flex items-center justify-center -translate-x-1/2 shadow-lg z-10 border-2 border-yellow-300 animate-pulse-slow"></span>
                                <motion.div 
                                    whileHover={{ translateY: -5, boxShadow: "0 10px 20px rgba(138, 58, 255, 0.3)" }}
                                    className="ml-8 sm:ml-10 p-4 bg-gray-800/40 backdrop-blur-sm rounded-lg transition-all duration-300 border border-gray-700/50 cursor-default"
                                > 
                                    <h4 className="font-semibold text-xl text-purple-400">{item.title}</h4>
                                    <p className="text-gray-400 mt-1 text-base">{item.desc}</p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Side: About Content - Trainer ID & Mission */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1 }}
                    className="text-center md:text-left order-1 md:order-2"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 pb-3 border-b-2 border-yellow-300/50">
                        <span className="text-yellow-300">Trainer ID</span> & Mission
                    </h2>
                    
                    {/* Narrative Text - Dialogue Box Style */}
                    <div className="space-y-6">
                        <p className="text-gray-300 text-lg leading-relaxed border-l-4 border-purple-500 pl-4 bg-gray-900/40 p-4 rounded-lg shadow-md">
                            I’m Disha Sharma , a second-year B.Tech CSE student . 
                            For me, development isn't just about syntax; it's about channeling Curiosity (my strongest ability!) into innovative, real-world solutions. 
                            <p>I learn by building —that's how I evolve my skills from one project to the next.</p>
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            My current focus involves mastering Core Abilities like Java and DSA for strong foundations, and exploring the MERN Stack to bring full-stack web worlds to life.
                        </p>
                    </div>

                    {/* Stylized Separator */}
                    <hr className="my-10 border-t border-purple-600 w-1/2 mx-auto md:mx-0 animate-fade-in" />


                    {/* Skills: My Current Abilities (Tech Badges) */}
                    <h3 className="text-2xl font-bold mt-8 mb-6 flex items-center justify-center md:justify-start gap-3 text-cyan-400">
                        <Zap className="w-6 h-6" /> My Current Abilities
                    </h3>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        {skills.map((skill, idx) => (
                            <motion.span
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                whileHover={{ scale: 1.05, boxShadow: `0 0 15px ${skill.hoverColor.replace('shadow-', '').replace('/80', '')}` }}
                                transition={{ type: "spring", stiffness: 300, damping: 20, delay: idx * 0.1 }}
                                className={`px-5 py-2 ${skill.color} text-gray-200 rounded-full font-semibold shadow-lg flex items-center space-x-2 transition-transform border border-gray-700 cursor-pointer`}
                            >
                                {skill.icon}
                                <span className="text-sm font-medium">{skill.name}</span>
                            </motion.span>
                        ))}
                    </div>

                    {/* Fun Fact/Personality Box - Thematic Side Quest */}
                    <div className="mt-12 p-5 rounded-xl bg-gray-800/70 border border-yellow-500/50 shadow-inner hover:border-yellow-300 transition-colors duration-300">
                        <h4 className="font-semibold text-xl text-yellow-400 flex items-center gap-3 mb-2">
                            <Lightbulb className="h-5 w-5 text-yellow-300" /> Trainer Personality (Side Quest)
                        </h4>
                        <p className="text-gray-300 italic">"Known for being jolly and energetic—I thrive on challenges and take pride in turning pure curiosity into meaningful, beautiful work."</p>
                    </div>
                </motion.div>
            </div>
            
            {/* Keyframes for animations */}
            {/* Removed 'jsx' and 'global' attributes to fix the React warning */}
            <style>
                {`
                    @keyframes spin-slow {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                    .animate-spin-slow {
                        animation: spin-slow 15s linear infinite;
                    }
                    .animate-pulse-slow {
                        animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                    }
                `}
            </style>
        </section>
    );
}
