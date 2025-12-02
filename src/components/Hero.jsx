// src/components/Hero.jsx
import { Github, Linkedin, Mail } from "lucide-react";
import pickachulogo from "../assets/pickachu-logos-multiple-unscreen.gif";
import Typewriter from "./Typewriter";
import scrollIcon from "../assets/purpleball.gif";

const heroData = {
  name: "Disha Sharma",
  tagline: "Curious Programmer & Lifelong Learner",
  description: [
    "Turning curiosity into projects with passion and determination.",
    "I believe in learning by building, exploring everything from full-stack apps to new technologies that spark my interest.",
    "For me, code isn't just about syntax — it’s about experimenting, creating, and growing with every line I write.",
  ],
  cta: [
    { text: "Explore More", href: "#about" },
  ],
};

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/DishaSharma2005" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/disha-sharma-25072005d" },
  { icon: Mail, label: "Mail", href: "mailto:sharmadisha25july@gmail.com" },
];

const Hero = () => {
  return (
    <section
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(0, 0%, 5.5%) 0%, hsl(270, 91%, 25%) 50%, hsl(0, 0%, 5.5%) 100%)",
      }}
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(138, 58, 255, 0.1)", animation: "float 3s ease-in-out infinite" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(255, 234, 0, 0.1)", animation: "float 3s ease-in-out 1s infinite" }}
        ></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <div className="space-y-6">
            <h1
              className="text-4xl font-bold leading-tight md:text-6xl"
              style={{
                animation: "slide-up 0.6s ease forwards",
                color: "#ffffff",
                fontSize: "2.5rem",
                fontWeight: "700",
                lineHeight: "1.2",
              }}
            >
              Hi, I’m{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, hsl(270, 91%, 65%), hsl(270, 91%, 45%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {heroData.name}
              </span>{" "}
            </h1>

            <h2
              className="text-xl text-gray-300 md:text-2xl"
              style={{ animation: "slide-up 0.6s ease 0.2s forwards", fontWeight: "600" }}
            >
              <Typewriter words={["Curious Programmer", "Creative Problem Solver", "Lifelong Learner"]} />
            </h2>

            <div
              className="space-y-4 text-lg md:text-xl"
              style={{ color: "#ccc", animation: "slide-up 0.6s ease 0.4s forwards", fontWeight: "400" }}
            >
              {heroData.description.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>

          <div
            className="flex flex-wrap items-center justify-center gap-4"
            style={{ animation: "slide-up 0.6s ease 0.6s forwards" }}
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white transition hover:-translate-y-1 hover:border-yellow-400/60 hover:bg-white/10"
              >
                <link.icon className="h-5 w-5 text-yellow-400" />
                <span className="font-medium">{link.label}</span>
              </a>
            ))}
          </div>

          <div
            className="flex flex-col items-center gap-4"
            style={{ animation: "slide-up 0.6s ease 0.8s forwards" }}
          >
            <a href={heroData.cta[0].href} className="flex justify-center">
              <img
                src={pickachulogo}
                alt="Explore More"
                className="w-full max-w-[12rem]"
                style={{
                  height: "auto",
                  cursor: "pointer",
                  transition: "transform 0.3s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </a>
            <p className="text-sm text-gray-300">(Pichu squad says hi!)</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 cursor-pointer p-3 rounded-full hover:bg-white/10 transition-colors"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          {/* Pokéball Icon */}
          <div
            className="w-8 h-8 rounded-full border-2 border-black relative flex items-center justify-center animate-bounce-fast overflow-hidden shadow-xl"
            style={{
              background: "linear-gradient(to bottom, #EE1515 50%, #FFFFFF 50%)",
              borderColor: "rgba(0,0,0,0.5)",
            }}
          >
            {/* Black Divider */}
            <div className="absolute inset-x-0 h-1 bg-black top-1/2 transform -translate-y-1/2"></div>
            {/* White Button */}
            <div className="w-4 h-4 bg-white rounded-full absolute border-2 border-black shadow-inner"></div>
          </div>

          <span className="text-yellow-400 font-bold text-lg hover:underline transition-all">
            Explore More 
          </span>
        </div>
      </div>

      {/* Keyframes */}
      <style>
        {`
          @keyframes float {
            0%,100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes bounce-subtle {
            0%,100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
          }
          @keyframes pulse-glow {
            0%,100% { box-shadow: 0 0 20px rgba(138, 58, 255, 0.3); }
            50% { box-shadow: 0 0 40px rgba(138, 58, 255, 0.6); }
          }
          @keyframes slide-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes scale-in {
            0% { opacity: 0; transform: scale(0.8); }
            100% { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;