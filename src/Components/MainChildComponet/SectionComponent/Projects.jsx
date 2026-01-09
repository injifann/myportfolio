import ProjectCard from "../Cards/ProjectCard";
import '../../../assets/Style/project.css';
import React from 'react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import p1 from '../../../assets/Images/surveyform.png'
import p2 from '../../../assets/Images/tribulatepage.png'
import p3 from '../../../assets/Images/productlanding.png'
import p4 from '../../../assets/Images/js_documantation.png'


function Projects() {

  const projects=[{title:"Survey form",image:p1,name :"my mobile phone delivery app"},{title:"tribulate page",image:p2,name :"my mobile phone delivery app"},{title:"product landing page",image:p3,name :"my mobile phone delivery app"},{title:"js documentation",image:p4,name :"my mobile phone delivery app"}]

  const [repos, setRepos] = useState([]);

  const [loading, setLoading] = useState(true);
  
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/injifann/repos');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="project-section" className="project">
      <h1 className="section-title">Projects</h1>
       {
        projects.map((project)=> <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <ProjectCard title={project.title} image={project.image} projectName={project.name} />
      </motion.div>)
       }
     


      <div className="recent-repos">
        <h2>Recent Repositories</h2>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <ul>
          {repos.map(repo => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;

