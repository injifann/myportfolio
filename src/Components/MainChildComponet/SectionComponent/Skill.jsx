// Skill.jsx
import { motion } from 'framer-motion';
import SkillCard from '../Cards/SkillCard'

export default function Skill() {
  const skills = [
    { skill: "React", percent: 90 },
    { skill: "Laravel", percent: 85 },
    { skill: "JavaScript", percent: 88 },
    { skill: "Tailwind CSS", percent: 95 },
    { skill: "PHP", percent: 80 },
    { skill: "MySQL", percent: 82 },
    { skill: "Git & GitHub", percent: 90 },
    { skill: "HTML & CSS", percent: 95 },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-center"
          >
             <span className="text-indigo-600 dark:text-indigo-400"> My Skills
            </span>{' '}

          </motion.h2>
          <div className="mt-4 h-1 w-24 bg-indigo-600 dark:bg-indigo-500 mx-auto rounded-full" />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Technologies and tools I work with daily to build modern web applications
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SkillCard skill={item.skill} percent={item.percent} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}