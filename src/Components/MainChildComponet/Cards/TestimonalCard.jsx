// TestimonalCard.jsx
export default function TestimonalCard({ image, clientname, testimonal }) {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 dark:hover:shadow-indigo-900/30 border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300">
      {/* Quote icon at top */}
      <div className="absolute top-6 left-6 text-5xl text-indigo-200 dark:text-indigo-900/40 opacity-50 pointer-events-none">
        “
      </div>

      <div className="p-8 md:p-10">
        {/* Client image + name */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-indigo-500/30 dark:border-indigo-400/30 flex-shrink-0">
            <img
              src={image}
              alt={clientname}
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {clientname}
          </h4>
        </div>

        {/* Testimonial text */}
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg italic">
          {testimonal}
        </p>
      </div>

      {/* Bottom accent line */}
      <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600" />
    </div>
  );
}