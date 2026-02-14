import ServiceCard from "../Cards/ServiceCard"; 
import { motion } from 'framer-motion'; 
import { Link } from 'react-router-dom';


function Service() {
  const services = [
    {
      title: "Frontend Development",
      desc: "Building modern, responsive, and interactive user interfaces using React, Tailwind CSS, JavaScript, and best UI/UX practices. Pixel-perfect designs that work flawlessly on mobile, tablet, and desktop.",
      icon: "🎨",
    },
    {
      title: "Backend Development",
      desc: "Creating secure, scalable, and high-performance server-side applications with Laravel, PHP, database design (MySQL/PostgreSQL), authentication, and business logic implementation.",
      icon: "⚙️",
    },
    {
      title: "Full-Stack Solutions",
      desc: "End-to-end web application development — combining beautiful frontends with robust, efficient backends, including deployment, CI/CD pipelines, and cloud integration (Vercel, Railway, AWS).",
      icon: "🌐",
    },
    {
      title: "Performance & SEO Optimization",
      desc: "Improving Core Web Vitals, reducing load times, implementing lazy loading, image optimization, semantic HTML, meta tags, structured data, and search engine-friendly architecture.",
      icon: "⚡",
    },
    {
      title: "Responsive & Mobile-First Design",
      desc: "Creating fluid layouts and experiences that adapt perfectly to every screen size using Tailwind CSS, CSS Grid/Flexbox, and mobile-first development principles.",
      icon: "📱",
    },
    {
      title: "Accessibility (a11y)",
      desc: "Ensuring your website is usable by everyone — WCAG compliance, keyboard navigation, screen reader support, proper ARIA attributes, color contrast, and semantic markup.",
      icon: "♿",
    },
  ];

  return (
    <section id="service" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-center">
            <span className="text-indigo-600 dark:text-indigo-400">        
             My Services
            </span>{' '}

          </h1>
          <div className="mt-4 h-1 w-24 bg-indigo-600 dark:bg-indigo-500 mx-auto rounded-full" />
          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Delivering high-quality web development solutions with focus on modern frontend and reliable backend
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                title={service.title}
                desc={service.desc}
                icon={service.icon}
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/pricing">
          <a
            href="#contact-me"
            className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold rounded-full shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            <span>Start Your Project</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Service;