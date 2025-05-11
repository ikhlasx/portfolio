import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center">
          <div className="mb-6 inline-block">
            <div className="text-sm uppercase tracking-widest text-neon-cyan mb-2">NEURAL SYSTEM ACTIVATED</div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 neon-gradient-text">
            IKHLAS PV
          </h1>

          <h2 className="text-3xl md:text-4xl text-white mb-8">
            AI Engineer & Full-Stack Developer
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Welcome to my interactive portfolio. As a software engineer with expertise in
            artificial intelligence, I build intelligent systems that combine cutting-edge AI models with
            intuitive user experiences.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-4xl mx-auto mb-16">
            <SkillPill icon="🤖" text="AI" />
            <SkillPill icon="🧠" text="ML" />
            <SkillPill icon="💻" text="Dev" />
            <SkillPill icon="✨" text="UX" />
            <SkillPill icon="📊" text="Data" />
            <SkillPill icon="☁️" text="Cloud" />
          </div>

          <div className="mb-16">
            <div className="text-neon-cyan font-medium mb-8 px-6 py-3 inline-block border border-neon-cyan rounded-md">
              Currently seeking Summer 2025 internship opportunities in AI & Data Engineering
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/resume.pdf" className="neon-button">
              Download CV
            </Link>
            <Link href="/#contact" className="neon-button">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillPill = ({ icon, text }) => {
  return (
    <div className="neon-card p-4 flex flex-col items-center justify-center aspect-square">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-white font-medium">{text}</div>
    </div>
  );
};

export default Hero;