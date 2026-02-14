import React, { useState } from 'react';
import { motion } from 'framer-motion'; 

function ProjectCard({ image, title, projectName }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => setLikes((prev) => prev + 1);
  const handleDislike = () => setLikes((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-indigo-500/20 dark:hover:shadow-indigo-900/30 transition-all duration-300 border border-gray-200 dark:border-gray-800"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base line-clamp-3">
          {projectName || 
            "A responsive web application built with modern technologies. Features include user authentication, real-time updates, and clean UI/UX design."}
        </p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2">
          {['React', 'JavaScript', 'Tailwind CSS', 'HTML5'].map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons + Like/Dislike */}
        <div className="flex items-center justify-between pt-4">
          {/* Demo & Code buttons */}
          <div className="flex gap-3">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm hover:shadow-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              Live Demo
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 0H4v10h12V5z" clipRule="evenodd" />
                <path d="M6 7h8v2H6V7z" />
              </svg>
              Source Code
            </a>
          </div>

          {/* Like / Dislike */}
          <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
            <button
              onClick={handleLike}
              className="flex items-center gap-1 hover:text-red-500 transition-colors"
              aria-label="Like project"
            >
              <svg className="w-5 h-5" fill={likes > 0 ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {likes}
            </button>

            <button
              onClick={handleDislike}
              className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors disabled:opacity-50"
              disabled={likes <= 0}
              aria-label="Dislike project"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;