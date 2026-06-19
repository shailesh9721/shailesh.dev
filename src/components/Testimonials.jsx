import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { config } from "../config";

export default function Testimonials() {
  const testimonials = config.testimonials;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-dark-bg/50">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] glow-bg-purple blur-[100px] opacity-30 -z-10 pointer-events-none" />

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
            Client Reviews
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl font-extrabold text-white"
          >
            What My Clients <span className="text-gradient-purple-pink">Say</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-20 bg-gradient-to-r from-secondary via-pink-500 to-rose-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Carousel Slider Component */}
        <div className="max-w-4xl mx-auto relative px-4 md:px-12">
          {/* Main Card View */}
          <div className="relative min-h-[320px] sm:min-h-[260px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="glass-card p-8 sm:p-12 rounded-3xl border border-white/5 relative glow-card w-full flex flex-col md:flex-row gap-8 items-center md:items-start"
              >
                {/* Quote Icon Background */}
                <Quote className="absolute top-6 right-8 h-24 w-24 text-white/5 pointer-events-none -scale-x-100" />

                {/* Client Avatar Frame */}
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-primary/40 p-1 bg-dark-bg">
                    <img
                      src={testimonials[activeIndex].avatar}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white border border-dark-bg">
                    <Star className="h-3.5 w-3.5 fill-current" />
                  </div>
                </div>

                {/* Text Review */}
                <div className="flex-grow text-center md:text-left flex flex-col justify-between">
                  <div>
                    {/* Star Rating Display */}
                    <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <p className="font-sans text-base sm:text-lg text-slate-200 italic leading-relaxed">
                      "{testimonials[activeIndex].feedback}"
                    </p>
                  </div>

                  <div className="mt-6 border-t border-white/5 pt-4">
                    <h4 className="font-heading text-base font-bold text-white tracking-wide">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="font-sans text-xs text-dark-muted font-medium mt-0.5">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 w-full">
            {/* Left Nav Button */}
            <button
              onClick={handlePrev}
              className="p-3.5 rounded-full glass-card border border-white/5 hover:bg-white/5 text-dark-muted hover:text-white transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Slider Dot Indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index 
                      ? "w-8 bg-gradient-to-r from-primary to-secondary" 
                      : "w-2 bg-white/10"
                  }`}
                />
              ))}
            </div>

            {/* Right Nav Button */}
            <button
              onClick={handleNext}
              className="p-3.5 rounded-full glass-card border border-white/5 hover:bg-white/5 text-dark-muted hover:text-white transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
