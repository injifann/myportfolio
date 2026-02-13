export default function SkillCard({ skill, percent }) {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl hover:shadow-indigo-500/20 dark:hover:shadow-indigo-900/30 border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300">
      {/* Skill name + percentage */}
      <div className="flex items-center justify-between px-5 py-4 bg-gray-50 dark:bg-gray-900/60">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {skill}
        </h3>
        <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
          {percent}%
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-3.5 bg-gray-200 dark:bg-gray-700">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 rounded-r transition-all duration-1500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}