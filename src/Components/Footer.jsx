import React from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-10 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm md:text-base">
              © {currentYear} Kabe Gutema. All rights reserved.
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Built with passion using React, Tailwind CSS & Laravel
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/oliikee.gutema.7" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 transform hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebook className="w-6 h-6" />
            </a>

            <a
              href="https://t.me/kabe_g" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition-colors duration-300 transform hover:scale-110"
              aria-label="Telegram"
            >
              <FaTelegram className="w-6 h-6" />
            </a>

            <a
              href="https://github.com/injifann" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/yourprofile" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>Made in Addis Ababa, Ethiopia • Designed & Developed by Kabe</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;