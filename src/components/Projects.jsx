import { motion } from "framer-motion";
import { ExternalLink, Github, Zap } from 'lucide-react';
import React, { useState } from 'react';

// Base GitHub URL for project links
const GITHUB_BASE_URL = "https://github.com/DishaSharma2005/";

// Tech to Color Map for visual hierarchy (Pokémon "Type" colors)
const techColorMap = {
    // Frontend Tech
    "React.js": { bg: "bg-cyan-700/40", text: "text-cyan-300", border: "border-cyan-500/50" },
    "Tailwind CSS": { bg: "bg-blue-700/40", text: "text-blue-300", border: "border-blue-500/50" },
    "MERN Stack": { bg: "bg-teal-700/40", text: "text-teal-300", border: "border-teal-500/50" },
    "Express.js": { bg: "bg-yellow-700/40", text: "text-yellow-300", border: "border-yellow-500/50" },
    
  
  "EJS": {
    "Type": "Templating Engine (Node.js)",
    "bg": "bg-blue-700/40",
    "text": "text-blue-300",
    "border": "border-blue-500/50"
  },
  "Bootstrap": {
    "Type": "CSS Framework",
    "bg": "bg-purple-700/40",
    "text": "text-purple-300",
    "border": "border-purple-500/50"
  },
  "Leaflet.js": {
    "Type": "JavaScript Map Library",
    "bg": "bg-sky-700/40",
    "text": "text-sky-300",
    "border": "border-sky-500/50"
  },
  "Blockchain Hashing": {
    "Type": "Cryptographic Mechanism (Security)",
    "bg": "bg-red-700/40",
    "text": "text-red-300",
    "border": "border-red-500/50"
  },

    // Backend/DB Tech
    "MongoDB": { bg: "bg-green-700/40", text: "text-green-300", border: "border-green-500/50" },
    "Node.js": { bg: "bg-red-700/40", text: "text-red-300", border: "border-red-500/50" },
    "Python": { bg: "bg-amber-700/40", text: "text-amber-300", border: "border-amber-500/50" },
    
    // Utility/Other Tech
    "AI/ML": { bg: "bg-purple-700/40", text: "text-purple-300", border: "border-purple-500/50" },
    "Cryptography": { bg: "bg-pink-700/40", text: "text-pink-300", border: "border-pink-500/50" },
    "default": { bg: "bg-gray-700/40", text: "text-gray-300", border: "border-gray-500/50" },
};

// =========================================================================
// UPDATED PROJECT DATA
// =========================================================================
const allProjects = [
    {
        id: 1,
        title: "WanderLust: Mini-Airbnb ",
        desc: "A robust MERN Stack application for full-cycle lodging management. Implemented secure Auth/Authorization, dynamic listing creation, advanced geographical filtering, and a user-specific wishlist system, demonstrating strong full-stack proficiency.",
        tech: ["MERN Stack", "MongoDB", "Express.js", "EJS", "Node.js"],
        category: "Full Stack",
        img: "https://placehold.co/600x400/8a2be2/ffffff?text=WanderLust+Mini-Airbnb",
        demo: "#", // Placeholder for live demo
        github: GITHUB_BASE_URL + "WanderLust-Mini-Airbnb",
        featured: true, // Highest Priority
    },
    {
        id: 2,
        title: "Urban-X ",
        desc: "Designed and built a citizen grievance reporting platform to streamline issue reporting for urban infrastructure, electricity, and waste management. Implemented features like location-based issue tracking (Leaflet maps), photo uploads, and real-time status monitoring. Integrated admin dashboards for report verification and blockchain-inspired hashing to ensure tamper-proof audit logs.",
        tech: ["Node.js", "Express.js", "Leaflet.js","MongoDB" ,"Bootstrap", "Blockchain Hashing"],
        category: "Full Stack",
    
img: "https://placehold.co/600x400/ffea00/000000?text=Urban-X:+Grievance+Reporting&font-size=24",
        demo: "#", // Placeholder for live demo
        github: GITHUB_BASE_URL + "urban-X",
        featured: false,
    },
    {
        id: 3,
        title: "JARVIS AI Assistant",
        desc: "A conversational AI assistant built primarily with Python. This project focuses on natural language processing and integration with APIs to perform tasks, showcasing skills in building functional, intelligent utility applications.",
        tech: ["Python", "AI/ML", "API Integration", "Utility"],
        category: "AI/Utility",
        img: "https://placehold.co/600x400/AA00FF/ffffff?text=JARVIS+AI+Assistant",
        demo: "#", // Placeholder for live demo
        github: GITHUB_BASE_URL + "JARVIS-Ai-Assistant",
        featured: false,
    },
    {
        id: 4,
        title: "Cipher Crypt: Encryption Utility",
        desc: "An application focused on data security and privacy. Implemented custom encryption and decryption algorithms, demonstrating a deep understanding of core cryptographic principles and secure application development.",
        tech: ["Cryptography", "Python", "Utility", "Backend"],
        category: "Backend",
        img: "https://placehold.co/600x400/FF00AA/ffffff?text=Cipher+Crypt",
        demo: "#", // Placeholder for live demo
        github: GITHUB_BASE_URL + "Cipher_Crypt",
        featured: false,
    },
];

// Combine all unique categories for the filters
const allCategories = allProjects.map(p => p.category);
const filters = ["All", ...new Set(allCategories)];

// Custom button component (defined internally to avoid import errors)
const ProjectButton = ({ children, href, icon: Icon, primary = false, onClick }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        onClick={onClick}
        className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.05] shadow-md
            ${primary 
                ? 'bg-yellow-500 text-gray-900 shadow-yellow-400/50 hover:bg-yellow-300' 
                : 'bg-gray-700 text-gray-200 hover:bg-gray-600 shadow-gray-700/50'
            }`}
    >
        {Icon && <Icon className="h-4 w-4" />}
        {children}
    </a>
);


export default function Projects() {
    // Removed the hardcoded filters array and now use the generated one
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects = activeFilter === "All"
        ? allProjects
        : allProjects.filter(project => project.category === activeFilter);
        
    return (
        <section
            id="projects"
            className="bg-[#0f0f0f] py-24 px-6 flex flex-col items-center min-h-screen font-inter"
        >
            {/* Section Divider */}
            <div className="w-full max-w-6xl h-0.5 bg-gradient-to-r from-transparent via-purple-600 to-transparent mb-16"></div>

            {/* Heading - Made concise and thematic */}
            <motion.h2
                className="text-4xl font-black mb-8 text-center tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                    background: "linear-gradient(90deg, #AA00FF 0%, #FFEA00 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 2px 5px rgba(255, 234, 0, 0.4))",
                }}
            >
                <Zap className="inline h-6 w-6 mr-3 animate-pulse" />
                BATTLE ARENA: PROJECT RECORDS
            </motion.h2>

            {/* Filter Buttons */}
            <motion.div
                className="flex flex-wrap justify-center gap-3 mb-12"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-4 py-2 rounded-full font-semibold text-sm transition-all shadow-md 
                            ${activeFilter === filter 
                                ? 'bg-purple-600 text-white shadow-purple-600/50 border border-purple-400'
                                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 border border-gray-700'
                            }`}
                    >
                        {filter}
                    </button>
                ))}
            </motion.div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl w-full">
                {filteredProjects.map((project, index) => {
                    const isFeatured = project.featured;
                    const delay = index * 0.15;
                    return (
                        <motion.div
                            key={project.id}
                            // Apply Featured Grid Span on large screens
                            className={`rounded-xl overflow-hidden shadow-2xl transition group relative border-2 border-gray-800/80 bg-gray-900/50 backdrop-blur-sm 
                                ${isFeatured ? 'lg:col-span-1' : 'lg:col-span-1'} `}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            whileHover={{ 
                                scale: 1.02, 
                                boxShadow: "0 10px 30px rgba(138, 58, 255, 0.5)" // Thematic glow on hover
                            }}
                            transition={{ type: "spring", stiffness: 100, damping: 10, delay: delay }}
                        >
                            {/* Project Image Placeholder */}
                            <div className="relative overflow-hidden h-48 bg-gray-800 flex items-center justify-center">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60"
                                />
                                {/* Featured Badge */}
                                {isFeatured && (
                                    <span className="absolute top-4 right-4 px-3 py-1 text-xs font-bold bg-yellow-400 text-gray-900 rounded-full shadow-lg">
                                        Featured Quest
                                    </span>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-yellow-400 mb-2 group-hover:text-purple-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 min-h-[60px]">{project.desc}</p>
                                
                                {/* Tech Stack Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, i) => {
                                        const color = techColorMap[tech] || techColorMap["default"];
                                        return (
                                            <span 
                                                key={i} 
                                                className={`px-3 py-1 text-xs rounded-full border ${color.bg} ${color.text} ${color.border}`}
                                            >
                                                {tech}
                                            </span>
                                        );
                                    })}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-4">
                                    {/* Only show 'Live Demo' if a valid link exists, otherwise GitHub is sufficient */}
                                    {project.demo !== "#" && (
                                        <ProjectButton href={project.demo} icon={ExternalLink} primary>
                                            Live Demo
                                        </ProjectButton>
                                    )}
                                    <ProjectButton href={project.github} icon={Github} primary={project.demo === "#"}>
                                        Code Base
                                    </ProjectButton>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
            
            {/* Final Call to Action */}
            <motion.div
                className="mt-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <ProjectButton href={GITHUB_BASE_URL} icon={Github} primary className="px-8 py-3 text-lg">
                    View All Battle Records on GitHub
                </ProjectButton>
            </motion.div>
        </section>
    );
}