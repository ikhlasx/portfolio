import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout/Layout';

// Import project data (in a real app, you might fetch this from an API)
import { projectsData } from '../../components/Projects/projectsData';

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Find the project by ID
  const project = projectsData.find(p => p.id === id);

  // If project is not found or page is still loading
  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Loading project details...</h1>
            <p>If nothing loads, the project may not exist.</p>
            <Link href="/projects" className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-md">
              Back to Projects
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>{project.title} | Ikhlas PV Portfolio</title>
        <meta name="description" content={project.description} />
      </Head>

      <div className="pt-24 pb-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
              </li>
              <li>
                <span className="text-gray-500 mx-2">/</span>
                <Link href="/#projects" className="text-gray-500 hover:text-gray-700">Projects</Link>
              </li>
              <li>
                <span className="text-gray-500 mx-2">/</span>
                <span className="text-gray-900 font-medium">{project.title}</span>
              </li>
            </ol>
          </nav>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="h-64 md:h-96 bg-gray-200 relative">
              <img
                src={project.image || "/project-placeholder.jpg"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8">
              <div className="flex flex-wrap justify-between items-start mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h1>
                  <p className="text-gray-600">{project.timeline}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-gray-700 mb-6">{project.description}</p>

                <h2 className="text-2xl font-bold mb-4">Details</h2>
                <p className="text-gray-700 mb-6">{project.fullDescription}</p>

                <div className="mt-8 flex flex-wrap gap-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                      View Live Demo
                    </a>
                  )}

                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-300 inline-flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      View Source Code
                    </a>
                  )}

                  <Link
                    href="/#projects"
                    className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-300 inline-flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Back to Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}