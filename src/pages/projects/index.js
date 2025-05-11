import React from 'react';
import Layout from '../../components/Layout/Layout';
import { projectsData } from '../../components/Projects/Projects'; // Make sure this path is correct

export default function ProjectsPage() {
  return (
    <Layout>
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div key={project.id} className="neon-card p-6">
              <h2 className="text-xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a href={`/projects/${project.id}`} className="neon-button">View Details</a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}