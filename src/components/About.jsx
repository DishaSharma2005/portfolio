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
  TrendingUp,
  Lightbulb,
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
  {
    name: "CI/CD Concepts",
    icon: <Code className="w-5 h-5 text-blue-300" />,
    color: "bg-blue-900/40",
    hoverColor: "shadow-blue-500/80",
  },
  { name: "Tailwind CSS", icon: <Feather className="w-5 h-5 text-blue-400" />, color: "bg-blue-900/40", hoverColor: "shadow-blue-500/80" },
];

// === Focus Areas (What I'm Building) ===
const focusAreas = [
  {
    title: "Ship Fast, Ship Clean",
    desc: "Designing small, production-ready features clean APIs, responsive UIs, and flows that don’t break easily.",
    icon: <Zap className="w-6 h-6 text-yellow-300" />,
  },
  {
    title: "Data-Driven Thinking",
   desc: "Figuring out how to turn raw data into something useful whether it's powering a feature, an API, or a dashboard.",

    icon: <Database className="w-6 h-6 text-cyan-300" />,
  },
  {
    title: "Strong Foundations",
    desc: "Right now I’m focused on getting comfortable with Java and DSA by solving problems regularly and understanding core CS concepts properly.",
    icon: <Lightbulb className="w-6 h-6 text-purple-300" />,
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
      <span className="font-medium">CGPA - 8+</span>
    </span>
  ),
},


  { label: "Looking For", value: "Remote Full-Stack Internship" },
  { 
    label: "Coding Profiles", 
    value: (
      <a 
        href="https://leetcode.com/u/Sharma_Disha25/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-yellow-300 underline hover:text-yellow-400 transition"
      >
        LeetCode
      </a>
    )
  },
];


// === Main Component ===
export default function About({ profileImg }) {
  const fallbackProfile =
    "https://placehold.co/400x400/374151/8a2be2?text=Your+Photo";
  const profileSrc = profileImg || fallbackProfile;

  return (
    <section
      id="about"
      className="bg-[#0e0e0e] py-20 px-6 md:px-12 text-gray-100 relative"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 h-64 w-64 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-48 w-48 bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start relative z-10">
        {/* Left Side: Profile & Focus Areas */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center md:items-center text-center md:text-left order-2 md:order-1"
        >
          {/* Profile Card */}
          <div className="relative mb-10">
            <div className="relative rounded-3xl p-5 shadow-2xl transition-transform duration-500 bg-[#1a1a1a] z-10">
              <img
                src={profileSrc}
                alt="Profile portrait"
                className="rounded-2xl w-60 h-60 md:w-68 md:h-68 object-cover border-4 border-yellow-400/50 " 
              />
            </div>
          </div>

          {/* Focus Cards */}
          <h3
            id="focus"
            className="text-3xl font-bold mb-8 text-center md:text-left text-yellow-300 flex items-center gap-3 border-b border-yellow-300/30 pb-2 w-full justify-center md:justify-start"
          >
            <TrendingUp className="w-7 h-7" /> What I'm Building Now
          </h3>

          <div className="grid gap-6 w-full">
            {focusAreas.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  translateY: -6,
                  scale: 1.01,
                  boxShadow: "0 15px 30px rgba(138, 58, 255, 0.25)",
                }}
                className="p-5 bg-gray-800/40 backdrop-blur-sm rounded-xl transition-all duration-300 border border-gray-700/50 flex items-start gap-4"
              >
                <div className="p-3 rounded-full bg-gray-900/70 border border-yellow-300/40 shadow-inner">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-xl text-purple-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 mt-1 text-base leading-relaxed">
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
          className="text-center md:text-left order-1 md:order-2"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 pb-3 border-b-2 border-yellow-300/50">
            <span className="text-yellow-300">About Me</span> & Mission
          </h2>

          {/* Narrative Text */}
          <div className="space-y-6">
                <div className="text-gray-300 text-lg leading-relaxed border-l-4 border-purple-500 pl-4 bg-gray-900/40 p-4 rounded-lg shadow-md">
                    <p>
                    I’m <span className="font-semibold">Disha Sharma</span>, a
                    B.Tech CSE student. I enjoy turning
                        ideas into working code and improving things through iteration. My
                        approach is simple - build, learn, refine, repeat.
                    </p>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                    These days, I’m polishing my fundamentals in{" "}
                    <span className="font-semibold">Competitive Programming</span> and{" "}
                    <span className="font-semibold">DSA</span>, while exploring the{" "}
                    <span className="font-semibold">MERN stack</span> to build full-stack
                    projects that feel smooth and enjoyable to use.
                </p>
               
             </div>


          {/* Quick Snapshot */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-300 flex items-center gap-2 justify-center md:justify-start">
              <HeartIcon /> Quick Snapshot
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              {quickStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-gray-900/40 border border-gray-700/70 px-4 py-3 flex flex-col gap-1 items-center md:items-start"
                >
                  <span className="text-[0.7rem] uppercase tracking-[0.18em] text-gray-400">
                    {stat.label}
                  </span>
                  <span className="font-semibold text-gray-100 text-sm">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Separator */}
          <hr className="my-10 border-t border-purple-600 w-1/2 mx-auto md:mx-0 animate-fade-in" />

          {/* What Drives Me */}
          <div className="mt-4 p-5 rounded-xl bg-gray-800/70 border border-yellow-500/50 shadow-inner hover:border-yellow-300 transition-colors duration-300">
            <h4 className="font-semibold text-xl text-yellow-400 flex items-center gap-3 mb-2">
              <Lightbulb className="h-5 w-5 text-yellow-300" /> What Drives Me
            </h4>
            <p className="text-gray-300 italic">
              "Known for being jolly and energetic—I thrive on challenges and
              take pride in turning curiosity into work that solves real
              problems."
            </p>
          </div>
        </motion.div>
      </div>

      {/* Skills: My Current Abilities (Tech Badges) */}
      <div className="max-w-6xl mx-auto mt-16 relative z-10">
        <h3 className="text-2xl font-bold mb-6 flex items-center justify-center md:justify-start gap-3 text-cyan-400">
          <Zap className="w-6 h-6" /> My Current Abilities
        </h3>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {skills.map((skill, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 0 15px ${skill.hoverColor
                  .replace("shadow-", "")
                  .replace("/80", "")}`,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: idx * 0.1,
              }}
              className={`px-5 py-2 ${skill.color} text-gray-200 rounded-full font-semibold shadow-lg flex items-center space-x-2 transition-transform border border-gray-700 cursor-pointer`}
            >
              {skill.icon}
              <span className="text-sm font-medium">{skill.name}</span>
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
