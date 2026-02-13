import pic from '../../../assets/Images/homepicture.jpg';

function AboutMe() {
  return (
    <section id="about-me" className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-center">
            <span className="text-indigo-600 dark:text-indigo-400">        
             About Me
            </span>{' '}

          </h1>
          <div className="mt-4 h-1 w-20 bg-indigo-600 dark:bg-indigo-500 mx-auto rounded-full" />
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate full-stack developer focused on creating fast, beautiful, and user-centered web experiences
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">
          {/* Left - Profile Image */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-start">
            <div className="relative group max-w-xs lg:max-w-sm">
              <div className="rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl shadow-indigo-500/20 dark:shadow-indigo-900/30 transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-indigo-500/40 dark:group-hover:shadow-indigo-900/50">
                <img
                  src={pic}
                  alt="Kabe Gutema"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Decorative border/pulse */}
              <div className="absolute inset-3 rounded-2xl border-2 border-indigo-500/30 dark:border-indigo-400/30 animate-pulse-slow pointer-events-none" />
            </div>
          </div>

          {/* Right - Personal Info + Intro */}
          <div className="w-full lg:w-7/12 space-y-10">
            {/* Short Bio */}
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                I'm Kabe Gutema, a full-stack developer with a strong passion for building modern, responsive, and performant web applications. 
                With a Bachelor's degree in Computer Science and over 3 years of hands-on experience, I specialize in frontend development using 
                React, Tailwind CSS, and modern JavaScript ecosystems, while also being comfortable with Laravel, PHP, and backend integrations.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-6">
                I enjoy turning complex problems into clean, intuitive user interfaces and love learning new technologies to deliver better solutions.
              </p>
            </div>

            {/* Personal Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-8">
              {[
                { label: "Name", value: "Kabe Gutema" },
                { label: "Education", value: "Bachelor's Degree in Computer Science" },
                { label: "Email", value: "kabegutema36@gmail.com", isLink: true },
                { label: "Location", value: "6 Kilo, Addis Ababa, Ethiopia" },
                { label: "Specialization", value: "Frontend Development with React" },
                { label: "Experience", value: "3+ Years" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    {item.label}
                  </span>
                  {item.isLink ? (
                    <a
                      href={`mailto:${item.value}`}
                      className="mt-1 text-lg font-medium text-indigo-600 dark:text-indigo-400 hover:underline transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="mt-1 text-lg font-medium text-gray-900 dark:text-white">
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>

    
            <div className="pt-6">
              <a
                href="#contact-me"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium rounded-full shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>Let's Work Together</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;