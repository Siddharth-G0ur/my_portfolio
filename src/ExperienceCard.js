import React from 'react';

const ExperienceCard = () => (
  <div className="card" id="experience">
    <h3>Work Experience</h3>
    <div className="experience-item">
      <h4>Business Analyst, CodersBrain</h4>
      <p>Jan 2024 - Present</p>
      <ul>
        <li>Optimized customer acquisition process, resulting in a 10% decrease in turn-around time.</li>
        <li>Conducted A/B testing, enhancing user experience and increasing site engagement by 20%.</li>
        <li>Formulated strategies for market segmentation, contributing to a 15% revenue increase within 4 months.</li>
      </ul>
    </div>
    <div className="experience-item">
      <h4>Data Analyst, Wyse</h4>
      <p>Jun 2023 - Oct 2023</p>
      <ul>
        <li>Leveraged Google Analytics to perform user journey analysis, achieving a 15% decrease in churn rate.</li>
        <li>Transformed internship matching process, yielding a 30% surge in user satisfaction.</li>
        <li>Engineered custom analytics frameworks, driving a 25% boost in user engagement.</li>
      </ul>
    </div>
  </div>
);

export default ExperienceCard;