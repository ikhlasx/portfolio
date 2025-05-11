import React, { useState } from 'react';

// Technical skills data with proficiency levels (1-4)
const technicalSkills = [
  {
    name: "Python",
    proficiency: 4,
    description: "Machine learning, data analysis, backend systems",
    category: ["All Skills", "Development", "ML & AI"]
  },
  {
    name: "JavaScript",
    proficiency: 3,
    description: "Frontend frameworks, interactive applications",
    category: ["All Skills", "Development"]
  },
  {
    name: "Java",
    proficiency: 3,
    description: "Enterprise applications, Android development",
    category: ["All Skills", "Development"]
  },
  {
    name: "TensorFlow",
    proficiency: 4,
    description: "Neural networks, deep learning systems",
    category: ["All Skills", "ML & AI"]
  },
  {
    name: "NLP",
    proficiency: 3,
    description: "Text classification, sentiment analysis",
    category: ["All Skills", "ML & AI"]
  },
  {
    name: "Computer Vision",
    proficiency: 3,
    description: "Image recognition, feature extraction",
    category: ["All Skills", "ML & AI"]
  },
  {
    name: "OpenCV",
    proficiency: 3,
    description: "Real-time image processing",
    category: ["All Skills", "ML & AI"]
  },
  {
    name: "Flask",
    proficiency: 3,
    description: "API development, web services",
    category: ["All Skills", "Development"]
  },
  {
    name: "Google Gemini",
    proficiency: 2,
    description: "Large language model utilization",
    category: ["All Skills", "ML & AI"]
  },
  {
    name: "Elasticsearch",
    proficiency: 2,
    description: "Search optimization, data indexing",
    category: ["All Skills", "Development"]
  },
  {
    name: "Figma",
    proficiency: 2,
    description: "UI prototyping, design systems",
    category: ["All Skills", "Design"]
  },
  {
    name: "UX Design",
    proficiency: 2,
    description: "User journey mapping, usability",
    category: ["All Skills", "Design"]
  }
];

// Filter categories
const categories = ["All Skills", "ML & AI", "Development", "Design"];

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState("All Skills");

  // Filter skills based on active category
  const filteredSkills = technicalSkills.filter(skill =>
    skill.category.includes(activeFilter)
  );

  // Convert proficiency level to dots
  const renderProficiencyDots = (level) => {
    const dots = [];
    for (let i = 0; i < 4; i++) {
      dots.push(
        <div
          key={i}
          className={`w-2 h-2 rounded-full ${i < level ? 'bg-neon-cyan' : 'bg-gray-600'}`}
        ></div>
      );
    }
    return (
      <div className="flex space-x-1">
        {dots}
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-neon-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-neon-cyan mb-2 uppercase tracking-wider">TECHNICAL PROFILE</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">SKILL MATRIX</h2>
          <p className="text-gray-300 mt-4 max-w-3xl mx-auto">
            A comprehensive overview of my technical capabilities and expertise across multiple domains
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Technical Proficiencies - Left Column (Takes 2/3 on large screens) */}
          <div className="lg:col-span-2 neon-card p-8">
            <h3 className="text-2xl font-bold text-neon-cyan mb-6">TECHNICAL PROFICIENCIES</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredSkills.map((skill, index) => (
                <div key={index} className="bg-neon-dark bg-opacity-50 p-4 rounded-lg border border-gray-800 hover:border-neon-cyan transition-colors duration-200">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-white font-semibold">{skill.name}</h4>
                    {renderProficiencyDots(skill.proficiency)}
                  </div>
                  <p className="text-gray-400 text-sm">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Visualization - Right Column */}
          <div className="lg:col-span-1">
            <div className="neon-card p-8 mb-8">
              <h3 className="text-2xl font-bold text-neon-cyan mb-6">SKILL VISUALIZATION</h3>
              <div className="relative h-72 w-full flex items-center justify-center">
                {/* Replace with actual visualization */}
                <div className="absolute w-full h-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 border border-neon-cyan rounded-full opacity-20"></div>
                    <div className="w-32 h-32 border border-neon-cyan rounded-full opacity-40 absolute"></div>
                    <div className="w-16 h-16 border border-neon-cyan rounded-full opacity-60 absolute"></div>
                  </div>

                  {/* Skill dots on the radar */}
                  <div className="absolute top-1/4 right-1/3 transform translate-x-1/2 -translate-y-1/2">
                    <div className="h-3 w-3 bg-neon-cyan rounded-full relative">
                      <span className="absolute -top-6 -left-1 text-neon-cyan text-xs">Python</span>
                    </div>
                  </div>
                  <div className="absolute top-1/2 right-1/4">
                    <div className="h-3 w-3 bg-neon-cyan rounded-full relative">
                      <span className="absolute -top-6 -left-8 text-neon-cyan text-xs">TensorFlow</span>
                    </div>
                  </div>
                  <div className="absolute bottom-1/3 right-1/3">
                    <div className="h-3 w-3 bg-neon-cyan rounded-full relative">
                      <span className="absolute -top-6 -left-1 text-neon-cyan text-xs">Figma</span>
                    </div>
                  </div>
                  <div className="absolute bottom-1/4 left-1/3">
                    <div className="h-3 w-3 bg-neon-cyan rounded-full relative">
                      <span className="absolute -top-6 -left-2 text-neon-cyan text-xs">JavaScript</span>
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-1/4">
                    <div className="h-3 w-3 bg-neon-cyan rounded-full relative">
                      <span className="absolute -top-6 -left-1 text-neon-cyan text-xs">Java</span>
                    </div>
                  </div>
                  <div className="absolute top-1/3 left-1/3">
                    <div className="h-3 w-3 bg-neon-cyan rounded-full relative">
                      <span className="absolute -top-6 -left-1 text-neon-cyan text-xs">NLP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="neon-card p-6">
              <h4 className="text-white font-semibold mb-4">Filter by Category</h4>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFilter(category)}
                    className={`py-2 px-4 rounded-md text-sm ${
                      activeFilter === category
                        ? 'bg-neon-cyan text-neon-darker font-medium'
                        : 'bg-neon-dark text-gray-300 border border-gray-700'
                    }`}
                  >
                    {category === "ML & AI" ? (
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                        ML & AI
                      </span>
                    ) : category === "Development" ? (
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        Development
                      </span>
                    ) : category === "Design" ? (
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                        Design
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                        </svg>
                        All Skills
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;