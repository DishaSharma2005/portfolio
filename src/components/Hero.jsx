// src/components/Hero.jsx
import { Github, Linkedin, Mail } from "lucide-react";
import pickachulogo from "../assets/pickachu-logos-multiple-unscreen.gif";
import Typewriter from "./Typewriter";

const heroData = {
  name: "Disha Sharma",
  tagline: "Curious Programmer & Lifelong Learner",
  description: [
    "I build full-stack apps, explore new tech, and turn ideas into working software.",
    "Curious programmer and lifelong learner — always picking up something new.",
    "I care about clean code, smooth experiences, and shipping things that actually work.",
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
      id="hero"
      className="relative flex min-h-[72vh] sm:min-h-[78vh] items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-10 sm:pb-14"
      style={{
        background: "linear-gradient(135deg, hsl(0, 0%, 5.5%) 0%, hsl(270, 91%, 25%) 50%, hsl(0, 0%, 5.5%) 100%)",
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -left-20 top-1/3 h-72 w-72 rounded-full blur-[100px] opacity-60"
          style={{ backgroundColor: "rgba(138, 58, 255, 0.35)", animation: "aurora 8s ease-in-out infinite" }}
        />
        <div
          className="absolute -right-16 bottom-1/4 h-80 w-80 rounded-full blur-[100px] opacity-50"
          style={{ backgroundColor: "rgba(255, 234, 0, 0.2)", animation: "aurora 10s ease-in-out 2s infinite reverse" }}
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[min(90vw,36rem)] w-[min(90vw,36rem)] rounded-full border border-white/[0.04]"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div
          className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-black/20 backdrop-blur-md px-6 py-10 sm:px-10 sm:py-12 shadow-[0_0_60px_rgba(138,58,255,0.15)]"
          style={{ animation: "slide-up 0.7s ease forwards" }}
        >
          <div className="space-y-6 sm:space-y-8 text-center">
            <div className="space-y-4 sm:space-y-5">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white break-words">
                Hi, I&apos;m{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, hsl(270, 91%, 65%), hsl(270, 91%, 45%))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {heroData.name}
                </span>
              </h1>

              <h2 className="text-base sm:text-xl md:text-2xl text-gray-300 font-semibold">
                <Typewriter words={["Curious Programmer", "Developer", "Builder", "Learner"]} />
              </h2>

              <p className="text-sm sm:text-base md:text-lg mx-auto max-w-xl leading-relaxed text-[#ccc] break-words">
                {heroData.description.join(" ")}
              </p>
            </div>

            {/* this div has not to be delted */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 min-h-[44px] text-sm sm:text-base text-white transition hover:-translate-y-1 hover:border-yellow-400/60 hover:bg-white/10"
                >
                  <link.icon className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 shrink-0" />
                  <span className="font-medium">{link.label}</span>
                </a>
              ))}
            </div>

            <a href={heroData.cta[0].href} className="inline-flex justify-center pt-2">
              <img
                src={pickachulogo}
                alt="Explore More"
                className="w-full max-w-[10rem] sm:max-w-[12rem] h-auto cursor-pointer transition-transform duration-300 hover:scale-105"
              />
            </a>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes aurora {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(20px, -15px) scale(1.08); }
          }
          @keyframes slide-up {
            0% { opacity: 0; transform: translateY(24px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
