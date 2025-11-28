// src/components/Hero.jsx
import { ArrowDown, Gamepad2, Mail, Sparkles } from "lucide-react";
import pikachuHero from "../assets/pikachu-hero.gif";
import pikachuLogos from "../assets/pickachu-logos-multiple-unscreen.gif";
import purpleOrb from "../assets/purpleball.gif";
import Typewriter from "./Typewriter";

const heroData = {
  name: "Disha Sharma",
  role: "Playful product sorcerer",
  focus: "I blend animation, bold color, and character energy into web experiences that feel like a game intro.",
  highlights: [
    "Cartoon storytelling",
    "Motion-rich UI",
    "Full-stack curious",
  ],
  cta: {
    primary: { text: "View projects", href: "#projects" },
    secondary: { text: "Email me", href: "mailto:your-email@example.com" },
  },
};

const vibeCards = [
  {
    title: "Electric palette",
    description: "Sunrise orange, amethyst glow, and sky cyan set the upbeat tone.",
  },
  {
    title: "Playable feel",
    description: "Hover spark, soft float, and sticker chips keep it lively without 3D.",
  },
];

const quests = [
  {
    label: "Current quest",
    text: "Designing narrative-rich UI with light, fast stacks (React + Vite)",
  },
  {
    label: "Latest badge",
    text: "Shipped animated hero revamp with zero 3D and max vibe",
  },
];

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden bg-[#0c0b14] text-white"
      style={{
        backgroundImage:
          "radial-gradient(circle at 15% 20%, rgba(255,215,128,0.15), transparent 28%), radial-gradient(circle at 80% 10%, rgba(136,93,255,0.25), transparent 30%), radial-gradient(circle at 75% 75%, rgba(255,86,178,0.2), transparent 32%)",
      }}
    >
      {/* Grid & noise overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 pt-20 lg:flex-row lg:items-center lg:pb-32 lg:pt-28">
        {/* Text column */}
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-yellow-200 ring-1 ring-white/10">
            <Sparkles className="h-4 w-4 text-yellow-300" />
            Cartoon hero, no 3D, maximum vibe
          </div>

          <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            {heroData.name}
            <span className="block bg-gradient-to-r from-[#ffb347] via-[#c084fc] to-[#7dd3fc] bg-clip-text text-transparent">
              {heroData.role}
            </span>
          </h1>

          <p className="text-lg text-gray-200 sm:text-xl">{heroData.focus}</p>

          <div className="text-xl font-semibold text-yellow-200">
            <Typewriter
              words={["Lightning-fast builds", "Playable UI stories", "Pokémon-ready palettes"]}
              speed={90}
            />
          </div>

          <div className="flex flex-wrap gap-3">
            {heroData.highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 shadow-[0_10px_50px_rgba(0,0,0,0.35)]"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={heroData.cta.primary.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ffb347] via-[#c084fc] to-[#7dd3fc] px-6 py-3 text-base font-bold text-black shadow-[0_15px_45px_rgba(192,132,252,0.45)] transition hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(192,132,252,0.55)]"
            >
              {heroData.cta.primary.text}
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href={heroData.cta.secondary.href}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              {heroData.cta.secondary.text}
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {vibeCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_10px_50px_rgba(0,0,0,0.35)] backdrop-blur"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-yellow-200/80">{card.title}</p>
                <p className="mt-1 text-sm text-gray-200/90">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual column */}
        <div className="relative flex-1">
          <div className="absolute -left-6 -top-10 h-32 w-32 rounded-full bg-[#c084fc]/30 blur-3xl" aria-hidden />
          <div className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-[#ffb347]/30 blur-3xl" aria-hidden />

          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur">
            <div className="absolute inset-0 rounded-[36px] border border-white/5" aria-hidden />
            <div className="absolute -inset-[1px] rounded-[36px] bg-gradient-to-r from-[#ffb347]/35 via-[#c084fc]/35 to-[#7dd3fc]/35 blur-xl" aria-hidden />

            <div className="relative z-10 space-y-5">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80">
                <span className="inline-flex items-center gap-2">
                  <Gamepad2 className="h-4 w-4 text-yellow-200" />
                  Adventure screen
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-yellow-200">Live</span>
              </div>

              <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0e0d1d] to-[#1b1631] p-4 shadow-inner">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.06),transparent_35%)]" aria-hidden />
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="absolute -left-10 -top-8 h-24 w-24 rounded-full bg-[#ffb347]/30 blur-2xl" aria-hidden />
                    <div className="absolute -right-8 bottom-0 h-28 w-28 rounded-full bg-[#7dd3fc]/30 blur-2xl" aria-hidden />
                    <div className="absolute left-6 top-6 h-10 w-10 rounded-full border border-white/20 bg-white/5 shadow-inner" aria-hidden>
                      <img src={purpleOrb} alt="Floating orb" className="h-full w-full object-contain" />
                    </div>
                    <img
                      src={pikachuHero}
                      alt="Electric companion"
                      className="relative mx-auto h-[270px] w-auto drop-shadow-[0_15px_35px_rgba(0,0,0,0.45)]"
                    />
                    <div className="absolute left-4 bottom-4 flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/80">
                      <span className="h-2 w-2 rounded-full bg-yellow-300" />
                      Spark charge
                    </div>
                    <div className="absolute right-3 top-3 flex flex-col gap-2">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white/80">
                        Buddy
                        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#ffb347] via-[#c084fc] to-[#7dd3fc]" />
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white/80">
                        No 3D
                        <span className="h-2 w-8 rounded-full bg-white/30" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 rounded-[28px] border border-white/10 bg-white/5 p-4">
                  <div className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-4 shadow-inner">
                    <p className="text-sm font-semibold text-yellow-200/90">Buddies on deck</p>
                    <div className="mt-3 grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2">
                        <div className="h-12 w-12 overflow-hidden rounded-lg bg-white/10">
                          <img src={pikachuLogos} alt="Sticker reel" className="h-full w-full object-cover" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-white/70">Sticker reel</p>
                          <p className="text-sm font-semibold text-white">Pokémon mascots</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2">
                        <div className="h-12 w-12 overflow-hidden rounded-lg bg-white/10">
                          <img src={purpleOrb} alt="Aurora orb" className="h-full w-full object-cover" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-white/70">Aura orb</p>
                          <p className="text-sm font-semibold text-white">Gradient spark</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-4 shadow-inner">
                    {quests.map((quest) => (
                      <div key={quest.label} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                        <div className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-[#ffb347] via-[#c084fc] to-[#7dd3fc]" />
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-white/70">{quest.label}</p>
                          <p className="text-sm text-white/90">{quest.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between text-sm text-white/80">
                  <span className="inline-flex items-center gap-2 font-semibold">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#ffb347] via-[#c084fc] to-[#7dd3fc]" />
                    Charged for a new build
                  </span>
                  <span className="text-xs uppercase tracking-wide text-white/60">Clean CSS, no 3D</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[82%] rounded-full bg-gradient-to-r from-[#ffb347] via-[#c084fc] to-[#7dd3fc] shadow-[0_0_20px_rgba(192,132,252,0.5)]" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3 text-sm text-white/70">
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#ffb347] via-[#c084fc] to-[#7dd3fc]" />
            Cartoon-inspired hero rebuilt with a new buddy panel, sticker reel, and quest log — still light, still 2D.
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes floaty {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          img[alt="Electric companion"] {
            animation: floaty 4s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
