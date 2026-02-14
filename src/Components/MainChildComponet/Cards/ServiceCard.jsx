import React from 'react';

function ServiceCard({ title, desc, icon}) {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-indigo-500/20 dark:hover:shadow-indigo-900/30 border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 transform hover:-translate-y-2">
      {/* Icon / Top accent */}
      <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600" />

      <div className="p-7 pb-9">
        <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 text-2xl font-bold group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/50 transition-colors">
          {icon || '⚡'}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;