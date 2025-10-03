// src/components/Hero.jsx
import { ArrowDown, Mail } from "lucide-react";
import Button from "../components/ui/Button"; 
import pikachuHero from "../assets/pikachu-hero-unscreen.gif";
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
    { text: "Let’s Connect", href: "mailto:your-email@example.com" },
  ],
};

const Hero = () => {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
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

      <div className="container relative z-10 mx-auto px-4 py-16">
        <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 text-center lg:flex-row lg:gap-16 lg:text-left">
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <h1
              className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
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
              className="text-xl text-gray-300 md:text-2xl lg:text-3xl"
              style={{ animation: "slide-up 0.6s ease 0.2s forwards" , fontWeight:"600" }}
            >
              <Typewriter words={["Curious Programmer", "Creative Problem Solver", "Lifelong Learner"]} />
            </h2>

            <div
              className="space-y-4 text-lg md:text-xl"
              style={{ color: "#ccc", animation: "slide-up 0.6s ease 0.4s forwards", fontWeight:"400" }}
            >
              {heroData.description.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>

            {/* CTA Buttons - Using a simple link for the GIF */}
            <div
              className="flex flex-col sm:flex-row sm:justify-center lg:justify-start"
              style={{
                animation: "slide-up 0.6s ease 0.6s forwards",
                display: "flex",
              }}
            >
              <a href={heroData.cta[0].href} className="flex justify-center lg:justify-start">
                <img
                  src={pickachulogo}
                  alt="Explore More"
                  // RESPONSIVENESS CHANGE: Use w-full and max-height for sizing
                  className="w-full max-w-[10rem] sm:max-w-[12rem] mx-auto lg:mx-0"
                  style={{
                    height: "auto", // Removed fixed height
                    maxWidth: "12rem", // Keep the max size reasonable
                    cursor: "pointer",
                    transition: "transform 0.3s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                  onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </a>
            </div>
          </div>

          {/* Pikachu Character */}
          {/* RESPONSIVENESS CHANGE: Added classes to limit max width on smaller screens and center on mobile */}
          <div 
            className="flex justify-center lg:justify-end w-full lg:w-auto" // Center on small screens, push right on large
            style={{ animation: "scale-in 0.6s ease 1s forwards" }}
          >
            <div className="relative **max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg**"> {/* Limits container size */}
              <div
                className="absolute inset-0 rounded-full blur-2xl"
                style={{ backgroundColor: "rgba(255, 234, 0, 0.2)", animation: "pulse-glow 2s ease-in-out infinite" }}
              ></div>
              <img
                src={pikachuHero}
                alt="Pikachu waving"
                // RESPONSIVENESS CHANGE: Use w-full and h-auto to scale within the container
                className="**w-full h-auto**" 
                style={{
                  objectFit: "contain",
                  animation: "float 3s ease-in-out infinite",
                  transition: "transform 0.3s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>
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
            Catch the Adventure
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