import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  CodeXml,
  Shield,
  Zap,
  Database,
  Sun,
  Feather,
  Compass,
  Target,
  Layers,
  BarChart3,
} from "lucide-react";

// === Skill Data (Tech Badges) ===
const skills = [
  { name: "Java", icon: <Code className="w-5 h-5 text-red-400" />, color: "bg-red-900/40", hoverColor: "shadow-red-500/80" },
  { name: "DSA", icon: <Shield className="w-5 h-5 text-indigo-400" />, color: "bg-indigo-900/40", hoverColor: "shadow-indigo-500/80" },
    {
    name: "SQL Databases",
    icon: <Database className="w-5 h-5 text-cyan-300" />,
    color: "bg-cyan-900/40",
    hoverColor: "shadow-cyan-500/80",
  },
  { name: "React", icon: <Zap className="w-5 h-5 text-cyan-400" />, color: "bg-cyan-900/40", hoverColor: "shadow-cyan-500/80" },
  { name: "Python", icon: <Code className="w-5 h-5 text-blue-400" />, color: "bg-blue-900/40", hoverColor: "shadow-blue-500/80" },
  { name: "FastAPI", icon: <Zap className="w-5 h-5 text-emerald-400" />, color: "bg-emerald-900/40", hoverColor: "shadow-emerald-500/80" },
  { name: "PostgreSQL", icon: <Database className="w-5 h-5 text-sky-400" />, color: "bg-sky-900/40", hoverColor: "shadow-sky-500/80" },
  { name: "Node.js", icon: <Database className="w-5 h-5 text-green-400" />, color: "bg-green-900/40", hoverColor: "shadow-green-500/80" },
  { name: "MongoDB", icon: <Sun className="w-5 h-5 text-yellow-400" />, color: "bg-yellow-900/40", hoverColor: "shadow-yellow-500/80" },
   {
    name: "Supabase",
    icon: <Database className="w-5 h-5 text-teal-300" />,
    color: "bg-teal-900/40",
    hoverColor: "shadow-teal-500/80",
  },
  {
    name: "Express.js",
    icon: <CodeXml className="w-5 h-5 text-lime-300" />,
    color: "bg-lime-900/40",
    hoverColor: "shadow-lime-500/80",
  },
  {
    name: "REST APIs",
    icon: <Zap className="w-5 h-5 text-yellow-300" />,
    color: "bg-yellow-900/40",
    hoverColor: "shadow-yellow-500/80",
  },
  {
    name: "JWT Authentication",
    icon: <Shield className="w-5 h-5 text-purple-300" />,
    color: "bg-purple-900/40",
    hoverColor: "shadow-purple-500/80",
  },
  { name: "Tailwind CSS", icon: <Feather className="w-5 h-5 text-blue-400" />, color: "bg-blue-900/40", hoverColor: "shadow-blue-500/80" },
];

// === Areas I'm Drawn To ===
const drawnToAreas = [
  {
    title: "Product Thinking",
    desc: "Real problems, clean solutions built to be used.",
    icon: <Target className="w-6 h-6 text-yellow-300" />,
  },
  {
    title: "Full-Stack Craft",
    desc: "Database to UI, one product built end to end.",
    icon: <Layers className="w-6 h-6 text-purple-300" />,
  },
  {
    title: "Data With Purpose",
    desc: "Raw data turned into something people can use.",
    icon: <BarChart3 className="w-6 h-6 text-cyan-300" />,
  },
];

// === Quick Snapshot (Year · CGPA · Focus · Looking For) ===
// ⚠️ Update CGPA value below to your actual one or change the text.
const quickStats = [
  { label: "Year", value: "2nd Year · B.Tech CSE" },
{
  label: "CGPA",
  value: (
    <span>
      <span className="text-sm text-gray-400">(current)</span>{" "}
      <br></br>
      <span className="font-medium">CGPA - 8+</span>
    </span>
  ),
},


  { 
    label: "Coding Profiles", 
    value: (
      <span className="flex flex-col gap-1.5">
        <a 
          href="https://leetcode.com/u/Sharma_Disha25/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-yellow-300 underline hover:text-yellow-400 transition"
        >
          LeetCode (145+ · Rating 1509)
        </a>
        <a 
          href="https://github.com/DishaSharma2005" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-yellow-300 underline hover:text-yellow-400 transition"
        >
          GitHub
        </a>
      </span>
    )
  },
  {
    label: "The Big Code",
    value: "Top 1,500 · Round 2 · Google 2026",
  },
  {
    label: "Hacktoberfest",
    value: "Super Contributor · DigitalOcean 2025",
  },
  {
    label: "Open To",
    value: "Internships · Collaborations",
  },
];


// === Main Component ===
export default function About({ profileImg }) {
  const fallbackProfile =
    "https://placehold.co/400x400/374151/8a2be2?text=Disha+Sharma&font=roboto";
  const profileSrc = profileImg || fallbackProfile;

  return (
    <section
      id="about"
      className="bg-[#0e0e0e] py-16 sm:py-20 px-4 sm:px-6 md:px-12 text-gray-100 relative"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 h-64 w-64 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-48 w-48 bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 sm:gap-16 items-start relative z-10">
        {/* Left Side: Profile & Focus Areas */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center md:items-center text-center md:text-left order-2 md:order-1 w-full max-w-full"
        >
          {/* Profile Card */}
          <div className="relative mb-8 sm:mb-10">
            <div className="relative rounded-3xl p-3 sm:p-5 shadow-2xl transition-transform duration-500 bg-[#1a1a1a] z-10">
              <img
                src={profileSrc}
                alt="Profile portrait"
                className="rounded-2xl w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 object-cover border-4 border-yellow-400/50"
              />
            </div>
          </div>

          {/* Focus Cards */}
          <h3
            id="interests"
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-center md:text-left text-yellow-300 flex flex-wrap items-center gap-2 sm:gap-3 border-b border-yellow-300/30 pb-2 w-full justify-center md:justify-start"
          >
            <Compass className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" /> Areas I'm Drawn To
          </h3>

          <div className="grid gap-4 sm:gap-6 w-full max-w-full">
            {drawnToAreas.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  translateY: -6,
                  scale: 1.01,
                  boxShadow: "0 15px 30px rgba(138, 58, 255, 0.25)",
                }}
                className="p-4 sm:p-5 bg-gray-800/40 backdrop-blur-sm rounded-xl transition-all duration-300 border border-gray-700/50 flex items-start gap-3 sm:gap-4 w-full"
              >
                <div className="p-2.5 sm:p-3 rounded-full bg-gray-900/70 border border-yellow-300/40 shadow-inner shrink-0">
                  {item.icon}
                </div>
                <div className="min-w-0 flex-1 text-left">
                  <h4 className="font-semibold text-base sm:text-lg md:text-xl text-purple-300 break-words">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 mt-1 text-sm sm:text-base leading-relaxed break-words">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: About Content & Snapshot */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left order-1 md:order-2 w-full max-w-full"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-6 sm:mb-8 pb-3 border-b-2 border-yellow-300/50 break-words">
            <span className="text-yellow-300">About Me</span> & Mission
          </h2>

          {/* Narrative Text */}
          <div className="space-y-4 sm:space-y-6">
                <div className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed border-l-4 border-purple-500 pl-3 sm:pl-4 bg-gray-900/40 p-3 sm:p-4 rounded-lg shadow-md text-left">
                    <p>
                    I’m <span className="font-semibold">Disha Sharma</span>, a
                    B.Tech CSE student. I enjoy turning
                        ideas into working code and improving things through iteration. My
                        approach is simple - build, learn, refine, repeat.
                    </p>
                </div>
             </div>


          {/* Quick Snapshot */}
          <div className="mt-8 sm:mt-10">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-yellow-300 flex items-center gap-2 justify-center md:justify-start">
              <HeartIcon /> Quick Snapshot
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 text-sm">
              {quickStats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ 
                    translateY: -6,
                    boxShadow: "0 12px 24px rgba(168, 85, 247, 0.25)"
                  }}
                  className="rounded-lg bg-gradient-to-br from-purple-900/30 to-gray-900/50 backdrop-blur-sm border border-purple-500/40 hover:border-purple-400/70 px-4 sm:px-6 py-4 sm:py-5 flex flex-col gap-2 items-center md:items-start transition-all duration-300 shadow-md hover:shadow-lg min-h-[88px] w-full"
                >
                  <span className="text-[0.65rem] uppercase tracking-[0.2em] text-purple-300 font-bold">
                    {stat.label}
                  </span>
                  <span className="font-bold text-white text-xs sm:text-sm leading-tight break-words text-center md:text-left">
                    {stat.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Separator */}
          <hr className="my-8 sm:my-10 border-t border-purple-600 w-3/4 sm:w-1/2 mx-auto md:mx-0 animate-fade-in" />

          {/* What Drives Me */}
          <div className="mt-4 p-4 sm:p-5 rounded-xl bg-gray-800/70 border border-yellow-500/50 shadow-inner hover:border-yellow-300 transition-colors duration-300 text-left">
            <h4 className="font-semibold text-lg sm:text-xl text-yellow-400 flex items-center gap-2 sm:gap-3 mb-2">
                🌸My Little Ways
            </h4>
            <p className="text-gray-300 italic text-sm sm:text-base">
              "Bright, calm and always improving - I enjoy turning tiny ideas into tiny wins."
            </p>
          </div>
        </motion.div>
      </div>

      {/* Skills: My Current Abilities (Tech Badges) */}
      <div className="max-w-6xl mx-auto mt-12 sm:mt-16 relative z-10 px-1 sm:px-2">
        <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center justify-center md:justify-start gap-2 text-cyan-400">
          <Zap className="w-5 h-5 sm:w-6 sm:h-6" /> My Current Abilities
        </h3>

        <div
          className="
            grid grid-cols-2 
            sm:flex sm:flex-wrap 
            gap-3 sm:gap-4 
            justify-center md:justify-start
          "
        >
          {skills.map((skill, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 0 12px ${skill.hoverColor
                  .replace("shadow-", "")
                  .replace("/80", "")}`,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: idx * 0.1,
              }}
              className={`
                px-3 sm:px-5 py-2 
                ${skill.color} 
                text-gray-200 rounded-full font-semibold shadow-lg 
                flex items-center space-x-2 
                transition-transform border border-gray-700 cursor-pointer
                text-xs sm:text-sm
              `}
            >
              <span className="scale-90 sm:scale-100">{skill.icon}</span>
              <span className="font-medium">{skill.name}</span>
            </motion.span>
          ))}
        </div>
      </div>


      {/* Keyframes */}
      <style>
        {`
          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 15s linear infinite;
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.03); }
          }
          .animate-pulse-slow {
            animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}
      </style>
    </section>
  );
}

// Small heart icon using Lucide's style, but custom so we don't over-import
function HeartIcon() {
  return (
    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pink-500/20 border border-pink-400/60 text-pink-300 text-xs">
      ♥
    </span>
  );
}
