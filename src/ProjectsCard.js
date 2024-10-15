import React from 'react';

const ProjectsCard = () => (
  <div className="card" id="projects">
    <h3>Projects</h3>
    <div className="project-item">
      <h4>LinkedIn Job Search Helper</h4>
      <ul>
        <li>Scraped and processed 1,000+ job listings using Python, Beautiful Soup, and Pandas.</li>
        <li>Created a vector database with Pinecone and OpenAI Embeddings, reducing search time by 80%.</li>
        <li>Developed Streamlit web app enabling natural language job searches.</li>
      </ul>
    </div>
    <div className="project-item">
      <h4>SQL Query Generation Using Vanna AI</h4>
      <ul>
        <li>Trained Vanna AI on a complex database schema with 20+ tables, optimizing SQL query generation.</li>
        <li>Designed a prototype tool for converting natural language inputs to SQL queries.</li>
        <li>Applied secure query execution and result visualization using Streamlit.</li>
      </ul>
    </div>
  </div>
);

export default ProjectsCard;