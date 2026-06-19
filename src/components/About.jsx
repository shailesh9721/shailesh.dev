import { motion } from "framer-motion";
import { Award, ShieldCheck, UserCheck, Briefcase } from "lucide-react";
import { config } from "../config";

export default function About() {
  const { stats, about } = config.personal;
  const skills = config.skills;

  // Group skills by category
  const frontendSkills = skills.filter(s => s.category === "frontend");
  const backendSkills = skills.filter(s => s.category === "backend");
  const toolSkills = skills.filter(s => s.category === "tools");

  const cardIcons = [Award, ShieldCheck, UserCheck, Briefcase];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dark-bg">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] rounded-full glow-bg-purple blur-[100px] opacity-40 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest text-primary font-bold mb-3"
          >
            About Me
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl font-extrabold text-white"
          >
            Who Is <span className="text-gradient-cyan-purple">Shailesh Yadav</span>?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Story & Stats */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-6">
                Redefining the web, one component at a time.
              </h3>
              <p className="font-sans text-dark-muted leading-relaxed text-base">
                {about}
              </p>
              <p className="font-sans text-dark-muted leading-relaxed text-base mt-4">
                My workflow is focused on optimization, responsive layouts, and user interactions. I believe code should not only be clean and functional but also tell a story through premium visuals.
              </p>
            </motion.div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {stats.map((stat, index) => {
                const Icon = cardIcons[index % cardIcons.length];
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card p-5 rounded-2xl flex flex-col items-start border border-white/5 glow-card"
                  >
                    <Icon className="h-5 w-5 text-primary mb-3" />
                    <span className="font-heading text-2xl font-extrabold text-white">
                      {stat.value}
                    </span>
                    <span className="font-sans text-xs text-dark-muted mt-1 uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Skills Matrix */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 md:p-8 rounded-3xl border border-white/5"
            >
              <h3 className="font-heading text-xl font-bold text-white mb-8 border-b border-white/5 pb-4">
                Technical Expertise & Skills
              </h3>

              {/* Frontend Section */}
              <div className="mb-8">
                <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary mb-5">
                  Frontend Development
                </h4>
                <div className="space-y-4">
                  {frontendSkills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </div>

              {/* Backend Section */}
              <div className="mb-8">
                <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary mb-5">
                  Backend & Database
                </h4>
                <div className="space-y-4">
                  {backendSkills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </div>

              {/* Tools & Workflow */}
              <div>
                <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-pink-400 mb-5">
                  Tools, Design & Systems
                </h4>
                <div className="flex flex-wrap gap-3">
                  {toolSkills.map((skill, i) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-200 border border-white/5 transition-colors cursor-default"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Inner SkillBar Helper Component
function SkillBar({ name, level }) {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-sans text-sm font-medium text-slate-300">{name}</span>
        <span className="font-sans text-xs font-semibold text-primary">{level}%</span>
      </div>
      <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
        />
      </div>
    </div>
  );
}
