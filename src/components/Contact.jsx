import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "lucide-react";
import { config } from "../config";

export default function Contact() {
  const { email, phone, location, socials } = config.contact;
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Mock sending logic (timeout)
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  // Maps social networks to their corresponding Lucide icons
  const getSocialIcon = (name) => {
    switch (name) {
      case "github": return Icons.Github;
      case "linkedin": return Icons.Linkedin;
      case "twitter": return Icons.Twitter;
      case "instagram": return Icons.Instagram;
      default: return Icons.Globe;
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-dark-bg">
      {/* Background glow blur */}
      <div className="absolute bottom-1/4 left-1/4 -translate-x-1/2 w-[350px] h-[350px] glow-bg-cyan blur-[100px] opacity-25 -z-10 pointer-events-none" />

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
            Get In Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl font-extrabold text-white"
          >
            Let's Start a <span className="text-gradient-cyan-purple">Conversation</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 sm:p-10 rounded-3xl border border-white/5 h-full flex flex-col justify-between"
            >
              <div>
                <h3 className="font-heading text-xl font-bold text-white mb-4">
                  Contact Information
                </h3>
                <p className="font-sans text-sm text-dark-muted leading-relaxed mb-8">
                  Have an exciting project idea, looking to collaborate, or just want to say hi? Fill out the form or reach out directly using the contacts below.
                </p>

                {/* Direct info list */}
                <div className="space-y-6">
                  {/* Email */}
                  <a href={`mailto:${email}`} className="flex items-center gap-4 group cursor-pointer">
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-primary group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300">
                      <Mail className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <span className="block font-sans text-xs text-dark-muted font-medium uppercase tracking-wider">Email Me</span>
                      <span className="font-sans text-sm font-semibold text-white group-hover:text-primary transition-colors">{email}</span>
                    </div>
                  </a>

                  {/* Phone */}
                  <a href={`tel:${phone}`} className="flex items-center gap-4 group cursor-pointer">
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-secondary group-hover:bg-secondary/10 group-hover:border-secondary/20 transition-all duration-300">
                      <Phone className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <span className="block font-sans text-xs text-dark-muted font-medium uppercase tracking-wider">Call Me</span>
                      <span className="font-sans text-sm font-semibold text-white group-hover:text-secondary transition-colors">{phone}</span>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-pink-400">
                      <MapPin className="h-5 w-5 text-pink-400" />
                    </div>
                    <div>
                      <span className="block font-sans text-xs text-dark-muted font-medium uppercase tracking-wider">Location</span>
                      <span className="font-sans text-sm font-semibold text-white">{location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links Box */}
              <div className="border-t border-white/5 pt-8 mt-12">
                <span className="block font-heading text-xs font-bold uppercase tracking-widest text-white/70 mb-4">
                  Connect With Me
                </span>
                <div className="flex items-center gap-3">
                  {Object.entries(socials).map(([name, url]) => {
                    const SocialIcon = getSocialIcon(name);
                    return (
                      <a
                        key={name}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-dark-muted hover:text-white hover:bg-white/10 hover:border-white/10 transition-all duration-300 scale-100 hover:scale-105"
                      >
                        <SocialIcon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 sm:p-10 rounded-3xl border border-white/5 h-full relative"
            >
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center h-full py-12"
                  >
                    <CheckCircle className="h-16 w-16 text-emerald-400 mb-6 animate-pulse" />
                    <h3 className="font-heading text-2xl font-bold text-white mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="font-sans text-sm text-dark-muted max-w-sm">
                      Thank you for reaching out! I have received your message and will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-8 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 font-semibold text-sm transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="flex flex-col gap-2">
                        <label className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-300">Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          disabled={status === "sending"}
                          className="px-4 py-3.5 rounded-xl bg-slate-900 border border-white/5 focus:border-primary/50 text-white placeholder-slate-500 focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col gap-2">
                        <label className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-300">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="yourname@example.com"
                          disabled={status === "sending"}
                          className="px-4 py-3.5 rounded-xl bg-slate-900 border border-white/5 focus:border-primary/50 text-white placeholder-slate-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Subject input */}
                    <div className="flex flex-col gap-2">
                      <label className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-300">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Inquiry / Job Opportunity"
                        disabled={status === "sending"}
                        className="px-4 py-3.5 rounded-xl bg-slate-900 border border-white/5 focus:border-primary/50 text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Message input */}
                    <div className="flex flex-col gap-2">
                      <label className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-300">Message</label>
                      <textarea
                        name="message"
                        required
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or request..."
                        disabled={status === "sending"}
                        className="px-4 py-3.5 rounded-xl bg-slate-900 border border-white/5 focus:border-primary/50 text-white placeholder-slate-500 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-sm bg-gradient-to-r from-primary to-secondary text-white hover:from-primary-hover hover:to-secondary-hover shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-75 disabled:pointer-events-none"
                    >
                      {status === "sending" ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/20 border-t-white" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4 text-white" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
