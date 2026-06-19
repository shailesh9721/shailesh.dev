import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-dark-bg text-slate-100 selection:bg-primary/30 selection:text-white antialiased">
      {/* Glow Effects overlaying the page */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] glow-bg-cyan blur-[130px] opacity-25 -z-10 pointer-events-none" />
      <div className="absolute top-[20%] left-0 w-[500px] h-[500px] glow-bg-purple blur-[130px] opacity-20 -z-10 pointer-events-none" />

      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
