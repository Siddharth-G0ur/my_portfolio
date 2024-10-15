import React, { useState, useEffect } from 'react';
import ParticleEffect from './ParticleEffect';
import './App.css';

const Navbar = () => (
  <nav>
    <ul>
      <li>Home</li>
      <li>Experience</li>
      <li>Skills</li>
      <li>Education</li>
      <li>Projects</li>
    </ul>
  </nav>
);

const Card = ({ title, children }) => (
  <div className="card">
    <h3>{title}</h3>
    {children}
  </div>
);

const App = () => {
  const [isFullPage, setIsFullPage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos >= window.innerHeight / 2) {
        setIsFullPage(true);
      } else {
        setIsFullPage(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="particle-container" style={{ opacity: isFullPage ? 0 : 1 }}>
        <ParticleEffect />
      </div>
      <div className="name-overlay" style={{ opacity: isFullPage ? 0 : 1 }}>
        <h1>Siddharth Singh Gour</h1>
        <h2>Data Analyst | Business Analyst</h2>
        <div className="contact-info">
          <p>goursiddharth01@gmail.com | +91 93408 83094</p>
          <p><a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a> | <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        </div>
      </div>
      <div className="spacer" />
      <div className={`content-section ${isFullPage ? 'full-page' : ''}`}>
        <div className="content-scroll-area">
          <Card title="Work Experience">
            <h4>Business Analyst, CodersBrain</h4>
            <p>Jan 2024 - Present</p>
            <ul>
              <li>Optimized customer acquisition process, resulting in a 10% decrease in turn-around time.</li>
              <li>Conducted A/B testing, enhancing user experience and increasing site engagement by 20%.</li>
              <li>Formulated strategies for market segmentation, contributing to a 15% revenue increase within 4 months.</li>
            </ul>
            <h4>Data Analyst, Wyse</h4>
            <p>Jun 2023 - Oct 2023</p>
            <ul>
              <li>Leveraged Google Analytics to perform user journey analysis, achieving a 15% decrease in churn rate.</li>
              <li>Transformed internship matching process, yielding a 30% surge in user satisfaction.</li>
              <li>Engineered custom analytics frameworks, driving a 25% boost in user engagement.</li>
            </ul>
          </Card>
          <Card title="Skills">
            <h4>Tools:</h4>
            <p>Microsoft Excel, Google Analytics, Looker, Streamlit, BigQuery, Beautiful Soup, Pandas, Matplotlib, Python, SQL</p>
            <h4>Techniques:</h4>
            <p>Statistical analysis, Data visualization, A/B Testing, Cohort Analysis, EDA, Analytical Thinking, Hypothesis Testing, Customer Segmentation Analysis</p>
          </Card>
          <Card title="Education">
            <h4>BE/B.Tech in IT</h4>
            <p>IET DAVV Indore | Jun 2023</p>
            <p>GPA: 8.36</p>
            <h4>Intermediate (12th)</h4>
            <p>Morning Star School, Gwalior</p>
            <p>Percentage: 81%</p>
          </Card>
          <Card title="Projects">
            <h4>LinkedIn Job Search Helper</h4>
            <ul>
              <li>Scraped and processed 1,000+ job listings using Python, Beautiful Soup, and Pandas.</li>
              <li>Created a vector database with Pinecone and OpenAI Embeddings, reducing search time by 80%.</li>
              <li>Developed Streamlit web app enabling natural language job searches.</li>
            </ul>
            <h4>SQL Query Generation Using Vanna AI</h4>
            <ul>
              <li>Trained Vanna AI on a complex database schema with 20+ tables, optimizing SQL query generation.</li>
              <li>Designed a prototype tool for converting natural language inputs to SQL queries.</li>
              <li>Applied secure query execution and result visualization using Streamlit.</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default App;