import { useState, useEffect } from "react";
import { ArrowRight, MessageSquare, Code2, Globe, Database, Terminal, Figma } from "lucide-react";
import { motion } from "framer-motion";
import { config } from "../config";

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typedText, setTypedText] = useState("");

  const roles = [
    "Full-Stack Web Developer",
    "React Specialist",
    "MERN Stack Expert",
    "UI/UX Enthusiast"
  ];

  const typingSpeed = isDeleting ? 40 : 100;
  const delayBetweenWords = 1800;

  useEffect(() => {
    let timer;
    const currentWord = roles[textIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentWord.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentWord.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }, typingSpeed);
    }

    // Handle word deletion trigger
    if (!isDeleting && charIndex === currentWord.length) {
      timer = setTimeout(() => setIsDeleting(true), delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex(prev => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  // Tech floating icons config
  const floatingTech = [
    { icon: Code2, label: "React", color: "text-cyan-400", bg: "bg-cyan-950/40", border: "border-cyan-500/20", animation: "animate-float-slow", top: "15%", left: "10%" },
    { icon: Terminal, label: "JavaScript", color: "text-yellow-400", bg: "bg-yellow-950/40", border: "border-yellow-500/20", animation: "animate-float-medium", top: "20%", right: "12%" },
    { icon: Database, label: "MongoDB", color: "text-emerald-400", bg: "bg-emerald-950/40", border: "border-emerald-500/20", animation: "animate-float-fast", bottom: "25%", left: "15%" },
    { icon: Globe, label: "Node.js", color: "text-green-400", bg: "bg-green-950/40", border: "border-green-500/20", animation: "animate-float-slow", bottom: "18%", right: "20%" },
    { icon: Figma, label: "Figma", color: "text-purple-400", bg: "bg-purple-950/40", border: "border-purple-500/20", animation: "animate-float-medium", top: "50%", left: "75%" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full glow-bg-cyan blur-[80px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full glow-bg-purple blur-[80px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Copywriting */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/5 text-primary text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            Available for Freelance Projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none text-white"
          >
            Hi, I'm <span className="text-gradient-cyan-purple">{config.personal.name}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-xl sm:text-2xl md:text-3xl font-medium mt-4 h-12 text-slate-300"
          >
            I am a <span className="cursor-blink text-primary font-semibold">{typedText}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans text-base sm:text-lg text-dark-muted max-w-xl mt-6 leading-relaxed"
          >
            {config.personal.tagline}. I build standard, highly interactive, and pixel-perfect websites designed to boost your brand value.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-gradient-to-r from-primary to-secondary text-white hover:from-primary-hover hover:to-secondary-hover shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              View My Work
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm glass-card border border-white/10 text-white hover:bg-white/5 hover:-translate-y-0.5 transition-all duration-300"
            >
              Let's Talk
              <MessageSquare className="h-4 w-4 text-secondary" />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Interactive Visual Visualizer */}
        <div className="lg:col-span-5 h-[350px] sm:h-[450px] relative w-full flex items-center justify-center">
          {/* Main glowing central ring */}
          <motion.div
            animate={{
              scale: [0.95, 1.05, 0.95],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
            className="absolute w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] rounded-full border border-dashed border-cyan-500/20 flex items-center justify-center"
          >
            <div className="w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] rounded-full border border-double border-purple-500/20" />
          </motion.div>

          {/* Central Logo Aura */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(6, 182, 212, 0.2)",
                "0 0 40px rgba(139, 92, 246, 0.4)",
                "0 0 20px rgba(6, 182, 212, 0.2)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl glass-card flex items-center justify-center z-10 border border-white/10"
          >
            <Code2 className="h-10 w-10 sm:h-14 sm:w-14 text-gradient-cyan-purple text-cyan-400" />
          </motion.div>

          {/* Floating tech cards */}
          {floatingTech.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={i}
                style={{
                  position: "absolute",
                  top: tech.top,
                  left: tech.left,
                  right: tech.right,
                  bottom: tech.bottom,
                }}
                className={`glow-card ${tech.bg} ${tech.border} border p-3.5 sm:p-4 rounded-2xl flex items-center gap-2 shadow-2xl backdrop-blur-md z-20 ${tech.animation}`}
              >
                <Icon className={`h-5 w-5 ${tech.color}`} />
                <span className="font-heading text-xs sm:text-sm font-semibold text-white/95">
                  {tech.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
