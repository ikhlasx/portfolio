import React, { useState } from 'react';
import Link from 'next/link';
import { projectsData } from './projectsData';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-neon-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">FEATURED PROJECTS</h2>
          <div className="w-24 h-1 bg-neon-cyan mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="neon-card overflow-hidden transition-all duration-300"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="h-48 bg-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-neon-cyan opacity-10"></div>
                <img
                  src={project.image || "/images/project-placeholder.jpg"}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-70"
                />
                {activeProject === project.id && (
                  <div className="absolute inset-0 bg-neon-darker bg-opacity-70 flex items-center justify-center p-4">
                    <div className="text-center">
                      <div className="mb-4">
                        <div className="flex flex-wrap justify-center gap-2">
                          {project.technologies.map((tech, index) => (
                            <span key={index} className="px-2 py-1 text-xs font-medium bg-neon-dark text-neon-cyan rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-center space-x-3">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm px-3 py-1 neon-button"
                          >
                            Demo
                          </a>
                        )}
                        {project.codeUrl && (
                          <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm px-3 py-1 neon-button"
                          >
                            Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/ikhlasx"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;