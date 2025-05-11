import React from 'react';
import Layout from '../../components/Layout/Layout';
import { projectsData } from '../../components/Projects/projectsData';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <Layout>
      <div className="pt-24 min-h-screen bg-neon-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Projects</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <div key={project.id} className="neon-card overflow-hidden">
                <div className="h-48 bg-gray-800 relative overflow-hidden">
                  <img
                    src={project.image || "/images/project-placeholder.jpg"}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-70"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                  <Link href={`/projects/${project.id}`} className="neon-button">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}