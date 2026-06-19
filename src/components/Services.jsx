import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { config } from "../config";

export default function Services() {
  const services = config.services;

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-dark-bg/50">
      {/* Background glow blob */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] glow-bg-cyan blur-[120px] opacity-30 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest text-secondary font-bold mb-3"
          >
            What I Do
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl font-extrabold text-white"
          >
            My Freelance <span className="text-gradient-purple-pink">Services</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-20 bg-gradient-to-r from-secondary via-pink-500 to-rose-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            // Dynamically resolve lucide icons
            const IconComponent = Icons[service.iconName] || Icons.HelpCircle;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 rounded-3xl border border-white/5 glow-card flex flex-col items-start h-full"
              >
                {/* Glowing Icon Frame */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-primary mb-6 flex items-center justify-center transition-colors group-hover:bg-primary/10">
                  <IconComponent className="h-6 w-6 text-gradient-cyan-purple text-cyan-400" />
                </div>

                <h3 className="font-heading text-lg font-bold text-white mb-3 tracking-wide">
                  {service.title}
                </h3>
                
                <p className="font-sans text-sm text-dark-muted leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Micro line indicator at the bottom */}
                <div className="w-full h-0.5 bg-white/5 mt-6 rounded-full overflow-hidden">
                  <div className="w-0 group-hover:w-full h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
