import homepic from '../../../assets/Images/homepicture.jpg';

export default function Home() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Subtle background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.12),transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-16 py-16 md:py-20 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Image column */}
        <div className="w-full md:w-2/5 lg:w-5/12 flex justify-center md:justify-end order-2 md:order-1">
          <div className="relative group">
            <div className="w-60 h-60 sm:w-72 sm:h-72 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white/80 dark:border-gray-800 shadow-2xl shadow-indigo-500/20 dark:shadow-indigo-900/30 transition-all duration-500 group-hover:scale-105 group-hover:shadow-indigo-500/40 dark:group-hover:shadow-indigo-900/60">
              <img
                src={homepic}
                alt="Kabe Gutema - Full Stack Developer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Decorative pulse ring */}
            <div className="absolute inset-0 rounded-full border-2 border-indigo-500/30 dark:border-indigo-400/30 animate-pulse-slow pointer-events-none" />
          </div>
        </div>

        {/* Text column */}
        <div className="w-full md:w-3/5 lg:w-7/12 text-center md:text-left space-y-5 md:pl-8 lg:pl-12 order-1 md:order-2">
          <span className="inline-block text-indigo-600 dark:text-indigo-400 font-medium tracking-wider uppercase text-base sm:text-lg">
            Hi, I am
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Kabe Gutema
          </h1>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent inline-block">
            Full Stack Developer
          </h2>

          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto md:mx-0 pt-3 leading-relaxed">
            Building modern web applications with Laravel, React, Tailwind CSS & more.<br />
            Turning ideas into clean, performant, and user-friendly experiences.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-6">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold rounded-full shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 transform hover:-translate-y-1 text-base"
            >
              View My Projects
            </a>
            <a
              href="#contact-me"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-transparent border-2 border-gray-700 dark:border-gray-300 text-gray-800 dark:text-gray-200 font-semibold rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-lg text-base"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}