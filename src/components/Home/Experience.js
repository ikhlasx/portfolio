import React from 'react';

const experienceData = [
  {
    title: 'AI Engineer Trainee',
    company: 'Elkitch Pvt Ltd',
    location: 'Mysore, India',
    period: 'Aug 2024 - Feb 2025',
    responsibilities: [
      'Developed full-stack web applications using Python frameworks (Django, Flask)',
      'Implemented REST APIs for front-end and back-end integration',
      'Built automated testing suites that reduced bug detection time by 40%',
      'Engineered product detection system using YOLO with 94% accuracy'
    ],
    icon: 'robot'
  },
  {
    title: 'Data Science Intern',
    company: 'Dataspark',
    location: 'Calicut, India',
    period: 'Sep 2023 - Oct 2023',
    responsibilities: [
      'Developed ETL pipelines for efficient data processing using Python',
      'Created RESTful APIs to integrate ML models with web applications',
      'Contributed to codebase improvements through code reviews',
      'Streamlined data processing workflows, improving efficiency by 60%'
    ],
    icon: 'database'
  },
  {
    title: 'Web Development Intern',
    company: 'STEM Robotics',
    location: 'Kochi, India',
    period: 'May 2023',
    responsibilities: [
      'Developed ETL pipelines for data processing',
      'Created RESTful APIs for ML model integration',
      'Contributed to codebase improvements through code reviews',
      'Performed unit testing and integration testing for applications'
    ],
    icon: 'globe'
  }
];

const educationData = {
  degree: 'Bachelor of Technology in Computer Science',
  institution: 'APJ Abdul Kalam Technological University',
  period: 'Jun 2020 - Jun 2024',
  gpa: '6.9',
  coursework: [
    'Data Structures',
    'Algorithms',
    'Object-Oriented Programming',
    'Database Management Systems',
    'Software Engineering',
    'Operating Systems'
  ]
};

const certifications = [
  'IBM AI Engineering Professional Certificate',
  'Career Essentials in Generative AI by Microsoft and LinkedIn',
  'Python for Data Science by IIT Madras (NPTEL)',
  'IBM Python for Data Science, AI & Development',
  'AI Engineering Specialization by Scrimba'
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-neon-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">PROFESSIONAL EXPERIENCE</h2>
          <div className="w-24 h-1 bg-neon-cyan mx-auto"></div>
          <p className="mt-4 text-gray-300">My journey in the tech industry</p>
        </div>

        <div className="space-y-12">
          {experienceData.map((job, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index < experienceData.length - 1 && (
                <div className="absolute top-8 left-8 -ml-px h-full w-0.5 bg-neon-cyan bg-opacity-20"></div>
              )}

              <div className="relative flex items-start">
                <div className="h-16 w-16 flex items-center justify-center bg-neon-dark border border-neon-cyan rounded-full shadow-md flex-shrink-0 z-10">
                  {job.icon === 'robot' && (
                    <svg className="h-7 w-7 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  )}
                  {job.icon === 'database' && (
                    <svg className="h-7 w-7 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  )}
                  {job.icon === 'globe' && (
                    <svg className="h-7 w-7 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>

                <div className="min-w-0 flex-1 ml-6 neon-card p-6">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">{job.title}</h3>
                      <p className="text-sm text-neon-cyan bg-neon-dark px-3 py-1 rounded-full">{job.period}</p>
                    </div>
                    <p className="mt-1 text-lg text-neon-cyan">
                      {job.company} <span className="text-gray-400">• {job.location}</span>
                    </p>
                  </div>

                  <div className="mt-4">
                    <ul className="space-y-2">
                      {job.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start">
                          <svg className="h-5 w-5 text-neon-cyan mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-300">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="neon-card p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <svg className="h-6 w-6 text-neon-cyan mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              Education
            </h3>
            <div>
              <h4 className="text-lg font-semibold text-white">{educationData.degree}</h4>
              <p className="text-neon-cyan">{educationData.institution}</p>
              <p className="text-gray-400">{educationData.period}</p>
              <p className="text-gray-400">CGPA: {educationData.gpa}</p>
              <div className="mt-3">
                <h5 className="font-medium text-neon-cyan">Coursework:</h5>
                <div className="mt-2 flex flex-wrap gap-2">
                  {educationData.coursework.map((course, index) => (
                    <span key={index} className="px-3 py-1 bg-neon-dark text-gray-300 text-sm rounded-full">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="neon-card p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <svg className="h-6 w-6 text-neon-cyan mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Certifications
            </h3>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-neon-cyan mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;