import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext.jsx';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    // Function to find the most visible section
    const updateActiveSection = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section.getAttribute('id');
        }
      });

      setActiveSection(current || 'home');
    };

    // Run once on mount (important for initial load)
    updateActiveSection();

    // Observe scroll
    window.addEventListener('scroll', updateActiveSection);
    window.addEventListener('resize', updateActiveSection);

    // Optional: IntersectionObserver fallback/enhancement
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute('id') || 'home');
          }
        });
      },
      {
        rootMargin: '-100px 0px -70% 0px', // trigger earlier
        threshold: [0.1, 0.5],
      }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
      observer.disconnect();
    };
  }, []);

  const isActive = (path) => {
    const section = path === '/' ? 'home' : path.replace('/', '');
    return activeSection === section;
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        bg-white/80 dark:bg-gray-900/80
        backdrop-blur-md border-b border-gray-200 dark:border-gray-800
        shadow-sm transition-colors duration-300
      `}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className={`text-2xl font-bold transition-colors ${
                isActive('/') 
                  ? 'text-indigo-600 dark:text-indigo-400 underline underline-offset-4 decoration-indigo-600 dark:decoration-indigo-400'
                  : 'text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400'
              }`}
            >
              Kabe
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {[
              { to: '/projects', label: 'Projects' },
              { to: '/service', label: 'Service' },
              { to: '/skills', label: 'Skills' },
              { to: '/testimonials', label: 'Testimonials' },
              { to: '/about-me', label: 'About Me' },
              { to: '/contact-me', label: 'Contact' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`
                  relative font-medium transition-all duration-300 pb-1
                  ${isActive(to)
                    ? 'text-indigo-600 dark:text-indigo-400 underline underline-offset-4 decoration-2 decoration-indigo-600 dark:decoration-indigo-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }
                `}
              >
                {label}
              </Link>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2.5 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="mr-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-label="Toggle main menu"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-4 space-y-1 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-lg">
            {[
              { to: '/projects', label: 'Projects' },
              { to: '/service', label: 'Service' },
              { to: '/skills', label: 'Skills' },
              { to: '/testimonials', label: 'Testimonials' },
              { to: '/about-me', label: 'About Me' },
              { to: '/contact-me', label: 'Contact Me' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`
                  block px-4 py-3 rounded-md text-base font-medium transition-colors
                  ${isActive(to)
                    ? 'text-indigo-600 dark:text-indigo-400 underline underline-offset-4 decoration-2 decoration-indigo-600 dark:decoration-indigo-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }
                `}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;