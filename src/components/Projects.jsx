import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Zap } from "lucide-react";

// If needed, update this to your actual GitHub username
const GITHUB_BASE_URL = "https://github.com/DishaSharma2005/";

const techColorMap = {
  "MERN Stack": { bg: "bg-purple-700/40", text: "text-purple-300", border: "border-purple-500/50" },
  "MongoDB": { bg: "bg-green-700/40", text: "text-green-300", border: "border-green-500/50" },
  "Express.js": { bg: "bg-gray-700/40", text: "text-gray-300", border: "border-gray-500/50" },
  "EJS": { bg: "bg-yellow-700/40", text: "text-yellow-300", border: "border-yellow-500/50" },
  "Node.js": { bg: "bg-lime-700/40", text: "text-lime-300", border: "border-lime-500/50" },
   "Blockchain Hashing": { bg: "bg-red-700/40", text: "text-red-300", border: "border-red-500/50" },
  // Added for your new projects
  "React.js": { bg: "bg-cyan-700/40", text: "text-cyan-300", border: "border-cyan-500/50" },
  "Spring Boot": { bg: "bg-green-700/40", text: "text-green-300", border: "border-green-500/50" },
  "PostgreSQL": { bg: "bg-blue-700/40", text: "text-blue-300", border: "border-blue-500/50" },
  "WebSockets": { bg: "bg-purple-700/40", text: "text-purple-300", border: "border-purple-500/50" },
  "JWT": { bg: "bg-amber-700/40", text: "text-amber-300", border: "border-amber-500/50" },
  "AI Toolkit": { bg: "bg-pink-700/40", text: "text-pink-300", border: "border-pink-500/50" },
  "REST APIs": { bg: "bg-gray-700/40", text: "text-gray-300", border: "border-gray-500/50" },

  "default": { bg: "bg-gray-700/40", text: "text-gray-300", border: "border-gray-500/50" }
};


// =========================================================================
// PROJECT DATA (Grouped into sections)
// =========================================================================

const projectSections = [
  {
    name: "Major Projects",
    projects: [
      {
        id: 1,
        title: "WanderLust: Mini-Airbnb",
        desc: [
          "A MERN-based lodging platform with full-cycle listing management, secure auth, and user dashboards.",
          "Includes dynamic listing creation, filters, and wishlists that simulate a real booking flow.",
        ],
        tech: ["MERN Stack", "MongoDB", "Express.js", "EJS", "Node.js"],
        category: "Full Stack",
        img: "https://placehold.co/600x400/8a2be2/ffffff?text=WanderLust+Mini-Airbnb",
        demo: "https://wanderlust-mini-airbnb.onrender.com/",
        github: GITHUB_BASE_URL + "WanderLust-Mini-Airbnb",
        featured: true,
      },
      {
        id: 2,
        title: "Urban-X",
        desc: [
          "Citizen grievance reporting platform to streamline complaints for roads, electricity, and waste management.",
          "Location-aware issue tracking with Leaflet maps, media uploads, and blockchain-style hashes for transparent logs.",
        ],
        tech: [
          "Node.js",
          "Express.js",
          "Leaflet.js",
          "MongoDB",
          "Bootstrap",
          "Blockchain Hashing",
        ],
        category: "Civic Tech",
        img: "https://placehold.co/600x400/ffea00/000000?text=Urban-X:+Grievance+Reporting&font-size=24",
        demo: "https://urban-x-rdhu.onrender.com/",
        github: GITHUB_BASE_URL + "urban-X",
        featured: false,
      },
     {
  id: 3,
  title: "SmartQueue [On Going]",
  desc: [
    "A real-time digital queue and appointment orchestration system designed to streamline customer flow in banks, hospitals, and service centers.",
    "Users can join queues online, track live token updates, and view estimated wait times while admins manage counters and analytics through a dedicated dashboard."
  ],
  tech: ["React.js", "Spring Boot", "PostgreSQL", "WebSockets", "JWT"],
  category: "Product Builds",
  img: "https://placehold.co/600x400/1e40af/ffffff?text=SmartQueue",
  demo: "#",
  github: "#",
  featured: false,
},
{
  id: 4,
  title: "Zentra Trade [On Going]",
  desc: [
    "A hybrid Zerodha + ChatGPT style platform blending trading dashboards with AI-assisted insights for smarter analysis and decision-making.",
    "Built for seamless watchlists, trade flows, and natural-language market queries. Detailed modules and stack highlights will be updated after the first milestone release."
  ],
  tech: ["React.js", "Node.js", "AI Toolkit", "REST APIs"],
  category: "Product Builds",
  img: "https://placehold.co/600x400/312e81/ffffff?text=Zentra+Trade",
  demo: "#",
  github: GITHUB_BASE_URL + "Zentra-Trade",
  featured: false,
},

    ],
  },
  {
    name: "Mini Projects",
    projects: [
      {
        id: 5,
        title: "JARVIS AI Assistant",
        desc: [
          "Python-based voice + text assistant that can handle commands and basic queries.",
          "Uses APIs and simple ML logic to automate small tasks and demonstrate AI utility patterns.",
        ],
        tech: ["Python", "AI/ML", "API Integration", "Utility"],
        category: "Automation",
        img: "https://placehold.co/600x400/AA00FF/ffffff?text=JARVIS+AI+Assistant",
        demo: "#",
        github: GITHUB_BASE_URL + "JARVIS-Ai-Assistant",
        featured: false,
      },
      {
        id: 6,
        title: "Cipher Crypt: Encryption Utility",
        desc: [
          "Command-line and UI helpers for encrypting and decrypting messages and files.",
          "Built to explore core cryptographic ideas and safe handling of sensitive data.",
        ],
        tech: ["Cryptography", "Python", "Utility", "Backend"],
        category: "Security",
        img: "https://placehold.co/600x400/FF00AA/ffffff?text=Cipher+Crypt",
        demo: "#",
        github: GITHUB_BASE_URL + "Cipher_Crypt",
        featured: false,
      },
     {
        id: 7,
        title: "Circuit Designing System",
        desc: [
            "Interactive tool for designing and analyzing resistor circuits in both series and parallel configurations.",
            "Calculates total resistance, current flow, and voltage drops while providing a clean visualization of the final circuit layout."
        ],
        tech: ["EDA", "Simulation", "Frontend"],
        category: "Engineering",
        img: "https://placehold.co/600x400/0f172a/ffffff?text=Circuit+Designing+System",
        demo: "#",
        github: GITHUB_BASE_URL + "Circuit-Desiging-System",
        featured: false,
        },

      {
            id: 8,
            title: "Sudoku Solver",
            desc: [
                "A clean Java-based Sudoku solver powered by optimized backtracking to solve puzzles efficiently.",
                "Demonstrates recursion, constraint checking, and algorithmic reasoning with optional step-wise visualization."
            ],
            tech: ["Java", "Algorithms", "Backtracking", "Visualization"],
            category: "Problem Solving",
            img: "https://placehold.co/600x400/15803d/ffffff?text=Sudoku+Solver",
            demo: "#",
            github: GITHUB_BASE_URL + "Sudoku",
            featured: false,
            },

    ],
  },
];

// Get filters for current section
const getFiltersForSection = (sectionName) => {
  const section = projectSections.find((s) => s.name === sectionName);
  if (!section) return ["All"];
  const categories = section.projects.map((p) => p.category);
  return ["All", ...new Set(categories)];
};

// Reusable button
const ProjectButton = ({ children, href, icon: Icon, primary = false, onClick }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    onClick={onClick}
    className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.05] shadow-md
      ${
        primary
          ? "bg-yellow-500 text-gray-900 shadow-yellow-400/50 hover:bg-yellow-300"
          : "bg-gray-700 text-gray-200 hover:bg-gray-600 shadow-gray-700/50"
      }`}
  >
    {Icon && <Icon className="h-4 w-4" />}
    {children}
  </a>
);

export default function Projects() {
  const [activeSection, setActiveSection] = useState(projectSections[0].name);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = getFiltersForSection(activeSection);
  const currentSection =
    projectSections.find((section) => section.name === activeSection) ||
    projectSections[0];

  const filteredProjects =
    activeFilter === "All"
      ? currentSection.projects
      : currentSection.projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section
      id="projects"
      className="bg-[#0f0f0f] py-24 px-6 flex flex-col items-center min-h-screen font-inter"
    >
      {/* Divider */}
      <div className="w-full max-w-6xl h-0.5 bg-gradient-to-r from-transparent via-purple-600 to-transparent mb-16" />

      {/* Heading  */}
      
      <motion.h2
            className="text-3xl sm:text-5xl font-black mb-8 text-center tracking-wider leading-tight"
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
            {/* FIRST LINE: Icon + Text */}
            <span className="flex items-center justify-center gap-2">
                <Zap className="h-6 w-6 animate-pulse" />
                <span>BATTLE ARENA:</span>
            </span>

            {/* SECOND LINE (never breaks between PROJECT & RECORDS) */}
            <span className="block whitespace-nowrap">
                PROJECT RECORDS
            </span>
      </motion.h2>


      {/* Section Tabs */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {projectSections.map((section) => (
          <button
            key={section.name}
            onClick={() => {
              setActiveSection(section.name);
              setActiveFilter("All");
            }}
            className={`px-5 py-2 rounded-full font-semibold text-sm transition-all shadow-md border
              ${
                activeSection === section.name
                  ? "bg-yellow-400 text-gray-900 shadow-yellow-400/50 border-yellow-300"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 border-gray-700"
              }`}
          >
            {section.name}
          </button>
        ))}
      </motion.div>

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
              ${
                activeFilter === filter
                  ? "bg-purple-600 text-white shadow-purple-600/50 border border-purple-400"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 border border-gray-700"
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
              className={`rounded-xl overflow-hidden shadow-2xl transition group relative border-2 border-gray-800/80 bg-gray-900/50 backdrop-blur-sm 
                ${isFeatured ? "lg:col-span-1" : "lg:col-span-1"}`}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(138, 58, 255, 0.5)",
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay,
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48 bg-gray-800 flex items-center justify-center">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60"
                />

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

                <div className="text-gray-400 text-sm mb-4 min-h-[80px] space-y-2">
                  {project.desc.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech && project.tech.length > 0 ? (
                    project.tech.map((tech, i) => {
                      const color = techColorMap[tech] || techColorMap.default;
                      return (
                        <span
                          key={i}
                          className={`px-3 py-1 text-xs rounded-full border ${color.bg} ${color.text} ${color.border}`}
                        >
                          {tech}
                        </span>
                      );
                    })
                  ) : (
                    <span className="text-xs text-gray-500 italic">
                      Stack details coming soon
                    </span>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  {project.demo && project.demo !== "#" && (
                    <ProjectButton
                      href={project.demo}
                      icon={ExternalLink}
                      primary
                    >
                      Live Demo
                    </ProjectButton>
                  )}

                  {project.github && project.github !== "#" && (
                    <ProjectButton
                      href={project.github}
                      icon={Github}
                      primary={project.demo === "#" || !project.demo}
                    >
                      Code Base
                    </ProjectButton>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Final CTA */}
      <motion.div
        className="mt-16 text-center max-w-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-gray-300 mb-4">
          These are some of the battles I’ve fought so far. I keep experimenting,
          shipping small things, and refining how I build.
        </p>
        <a
          href="https://github.com/DishaSharma2005"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-400 text-gray-900 font-semibold shadow-lg hover:bg-yellow-300 transition-all"
        >
          <Github className="w-4 h-4" />
          View More on GitHub
        </a>
      </motion.div>
    </section>
  );
}
