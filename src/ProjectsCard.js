/* React component */
import React from 'react';
import linkedInJobImage from './1709530412044.jpeg';
import SqlGenerator from './sql-databases-icon-vector.jpg';
import './App.css';

const ProjectCard = ({ title, description, image, technologies }) => (
  <div className="project-card">
    <div className="project-image">
      <img
        src={image}
        alt={title}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/api/placeholder/400/250";
        }}
      />
    </div>
    <div className="project-content">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="tech-buttons flex flex-wrap">
        {technologies.map((tech, index) => (
          <button key={index} className="tech-button">
            {tech}
          </button>
        ))}
      </div>
    </div>
  </div>
);

const ProjectsCard = () => {
  const projects = [
    {
      title: "LinkedIn Job Search Helper",
      description: "An AI-powered job search tool that leverages natural language processing to help users find relevant job listings from LinkedIn. Features include automated scraping, semantic search, and an intuitive web interface.",
      image: linkedInJobImage,
      technologies: [
        "Python",
        "Beautiful Soup",
        "Pandas",
        "Pinecone",
        "OpenAI",
        "Streamlit"
      ]
    },
    {
      title: "SQL Query Generation Using Vanna AI",
      description: "A natural language to SQL query converter that simplifies database interactions. The tool processes plain English requests and generates optimized SQL queries while ensuring secure execution.",
      image: SqlGenerator,
      technologies: [
        "Vanna AI",
        "SQL",
        "Python",
        "Streamlit",
        "Database Design"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;