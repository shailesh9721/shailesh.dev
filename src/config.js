// Central portfolio data configuration to make it easy to update contents.
export const config = {
  personal: {
    name: "Shailesh Yadav",
    title: "Freelance Web Developer & UI Designer",
    tagline: "Crafting High-Performance, User-Friendly & Premium Web Experiences",
    about: "I am a professional freelance web developer with a passion for designing and building fast, modern, and visually stunning web applications. Combining clean, robust code with cutting-edge UI/UX design, I help businesses and entrepreneurs build a strong digital presence that drives results.",
    resumeUrl: "#", // Add resume link if available
    avatarUrl: "", // Optional profile image path
    stats: [
      { label: "Projects Completed", value: "25+" },
      { label: "Happy Clients", value: "15+" },
      { label: "Years Experience", value: "3+" },
      { label: "Availability", value: "Freelance / Remote" }
    ]
  },
  skills: [
    { name: "React.js", category: "frontend", level: 90 },
    { name: "Tailwind CSS", category: "frontend", level: 95 },
    { name: "JavaScript (ES6+)", category: "frontend", level: 90 },
    { name: "HTML5 & CSS3", category: "frontend", level: 95 },
    { name: "Framer Motion", category: "frontend", level: 80 },
    { name: "Node.js", category: "backend", level: 80 },
    { name: "Express.js", category: "backend", level: 85 },
    { name: "MongoDB", category: "backend", level: 75 },
    { name: "REST APIs", category: "backend", level: 85 },
    { name: "Git & GitHub", category: "tools", level: 90 },
    { name: "Figma (UI/UX)", category: "tools", level: 85 },
    { name: "SEO Optimization", category: "tools", level: 80 }
  ],
  services: [
    {
      id: "web-dev",
      title: "Web Development",
      description: "Building fast, secure, and modern web applications using React, Node.js, and Express. Fully custom architectures tailormade for your business requirements.",
      iconName: "Code2"
    },
    {
      id: "ui-ux",
      title: "UI/UX & Prototyping",
      description: "Designing premium, standard, and highly interactive user interfaces in Figma. Translating them into responsive pixel-perfect web pages with smooth animations.",
      iconName: "Palette"
    },
    {
      id: "api-integration",
      title: "API & Backend Integrations",
      description: "Connecting third-party services, payment gateways (Stripe, Razorpay), databases, and building robust RESTful APIs to power your business processes.",
      iconName: "Cpu"
    },
    {
      id: "seo-performance",
      title: "SEO & Speed Optimization",
      description: "Optimizing website performance for Google Lighthouse, implementing SEO best practices, meta tags, and structured data to rank higher and load faster.",
      iconName: "TrendingUp"
    }
  ],
  projects: [
    {
      id: "e-shop",
      title: "Apex E-Commerce Platform",
      category: "web-apps",
      description: "A premium, fully-featured online store with a custom shopping cart, dashboard, payment gateway integration, and real-time order tracking.",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Stripe"],
      imageName: "apex_ecommerce.png", // Will generate or mock this
      liveUrl: "https://apex-ecommerce.example.com",
      githubUrl: "https://github.com/shaileshyadav/apex-ecommerce"
    },
    {
      id: "saas-landing",
      title: "Nova Analytics SaaS Landing",
      category: "landing-pages",
      description: "A high-conversion landing page for an AI analytics platform featuring dynamic pricing, glassmorphic dashboards, and smooth scroll animations.",
      tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      imageName: "nova_analytics.png",
      liveUrl: "https://nova-analytics.example.com",
      githubUrl: "https://github.com/shaileshyadav/nova-analytics"
    },
    {
      id: "fintech-dashboard",
      title: "Vertex Wealth Dashboard",
      category: "web-apps",
      description: "A financial tracking dashboard displaying asset allocation, transaction logs, live stock charts, and monthly budgeting recommendations.",
      tags: ["React", "ChartJS", "Tailwind CSS", "Express", "REST API"],
      imageName: "vertex_dashboard.png",
      liveUrl: "https://vertex-wealth.example.com",
      githubUrl: "https://github.com/shaileshyadav/vertex-wealth"
    },
    {
      id: "creative-portfolio",
      title: "Vivid UI/UX Portfolio Concept",
      category: "ui-ux",
      description: "An interactive Figma design prototype translated to React, showcasing premium micro-interactions, dark/light toggle, and WebGL elements.",
      tags: ["React", "Figma", "Tailwind CSS", "Framer Motion"],
      imageName: "creative_portfolio.png",
      liveUrl: "https://vivid-portfolio.example.com",
      githubUrl: "https://github.com/shaileshyadav/vivid-portfolio"
    }
  ],
  testimonials: [
    {
      name: "Sarah Jenkins",
      role: "CEO, TechLaunch Inc.",
      feedback: "Shailesh exceeded our expectations. He redesigned our SaaS landing page, making it incredibly fast and beautiful. Our conversion rate increased by 25% within the first month. An absolute professional!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Rajesh Malhotra",
      role: "Founder, FoodieExpress",
      feedback: "Working with Shailesh was a breeze. He developed a responsive web app for our delivery partners. His knowledge of React and clean styling with Tailwind CSS is top-notch. Highly recommended for freelance web projects!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Emma Watson",
      role: "Marketing Director, Bloom Retail",
      feedback: "Highly skilled developer with an eye for detail. Shailesh optimized our e-commerce platform speed and SEO structure. Our Google Lighthouse score jumped to 98! Excellent communicator and deliverer.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80"
    }
  ],
  contact: {
    email: "shaileshyadav.dev@gmail.com", // Updated standard Gmail address
    phone: "+91 98765 43210", // Placeholder contact number
    location: "Mumbai, India (Available Worldwide)",
    socials: {
      github: "https://github.com/shaileshyadav-dev",
      linkedin: "https://linkedin.com/in/shaileshyadav-dev",
      twitter: "https://twitter.com/shailesh_dev",
      instagram: "https://instagram.com/shailesh_dev"
    }
  }
};
