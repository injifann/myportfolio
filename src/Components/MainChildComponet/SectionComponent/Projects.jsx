import ProjectCard from "../Cards/ProjectCard";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import p1 from '../../../assets/Images/surveyform.png';
import p2 from '../../../assets/Images/tribulatepage.png';
import p3 from '../../../assets/Images/productlanding.png';
import p4 from '../../../assets/Images/js_documantation.png';

function Projects() {
  const projects = [
    { title: "Survey Form", image: p1, name: "Survey form project" },
    { title: "Tribulate Page", image: p2, name: "Tribulate landing page" },
    { title: "Product Landing Page", image: p3, name: "Product showcase" },
    { title: "JS Documentation", image: p4, name: "JavaScript documentation page" },
  ];

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/injifann/repos');
        if (!response.ok) throw new Error('Failed to fetch repositories');
        const data = await response.json();
        // Optional: show only the most recent 6 repos
        setRepos(data.slice(0, 6));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-center"
            
          >
              <span className="text-indigo-600 dark:text-indigo-400"> Projects  
            </span>{' '}
          </motion.h1>
           <div className="mt-4 h-1 w-24 bg-indigo-600 dark:bg-indigo-500 mx-auto rounded-full" />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            A selection of my recent work — from simple landing pages to interactive applications
          </motion.p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group"
            >
              <ProjectCard
                title={project.title}
                image={project.image}
                projectName={project.name}
              />
            </motion.div>
          ))}
        </div>

        {/* Recent GitHub Repositories */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden"
        >
          <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-3">
              <span>Recent GitHub Repositories</span>
              <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM4.5 9.5a.5.5 0 011 0v3a.5.5 0 01-1 0v-3zm5 0a.5.5 0 011 0v3a.5.5 0 01-1 0v-3z" clipRule="evenodd" />
              </svg>
            </h2>
          </div>

          <div className="p-6">
            {loading && (
              <div className="text-center py-10">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-600 mx-auto"></div>
                <p className="mt-4 text-gray-600 dark:text-gray-400">Loading repositories...</p>
              </div>
            )}

            {error && (
              <div className="text-center py-10 text-red-600 dark:text-red-400">
                <p>Error: {error}</p>
                <p className="mt-2 text-sm">Please check your GitHub username or internet connection.</p>
              </div>
            )}

            {!loading && !error && repos.length === 0 && (
              <p className="text-center text-gray-500 dark:text-gray-400 py-10">
                No public repositories found.
              </p>
            )}

            {!loading && !error && repos.length > 0 && (
              <ul className="space-y-4">
                {repos.map((repo) => (
                  <motion.li
                    key={repo.id}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M7.5 2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5zM2 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zM7.5 18a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 1 0v1a.5.5 0 0 1-.5.5zM18 7.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5zM4.5 4.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zM15.5 15.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5zM4.5 15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5zM15.5 4.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5z" />
                        </svg>
                        <div>
                          <span className="font-medium text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {repo.name}
                          </span>
                          {repo.description && (
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-1">
                              {repo.description}
                            </p>
                          )}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {repo.stargazers_count > 0 && `★ ${repo.stargazers_count}`}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;