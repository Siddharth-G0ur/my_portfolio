import React from 'react';
import { BriefcaseBusiness, Dot } from 'lucide-react';

const ExperienceCard = () => (
  <div className="card" id="experience">
    <h3>Work Experience</h3>
    <div className="experience-timeline">
      <div className="experience-item">
        <div className="experience-icon">
          <BriefcaseBusiness size={24} />
        </div>
        <div className="experience-content">
          <h4>Business Analyst, CodersBrain</h4>
          <p className="experience-date">Jan 2024 - Present</p>
          <ul className="experience-achievements">
            <li>
              <Dot size={16} />
              <span>Optimized customer acquisition process, resulting in a 10% decrease in turn-around time.</span>
            </li>
            <li>
              <Dot size={16} />
              <span>Conducted A/B testing, enhancing user experience and increasing site engagement by 20%.</span>
            </li>
            <li>
              <Dot size={16} />
              <span>Formulated strategies for market segmentation, contributing to a 15% revenue increase within 4 months.</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="experience-item">
        <div className="experience-icon">
          <BriefcaseBusiness size={24} />
        </div>
        <div className="experience-content">
          <h4>Data Analyst, Wyse</h4>
          <p className="experience-date">Jun 2023 - Oct 2023</p>
          <ul className="experience-achievements">
            <li>
              <Dot size={16} />
              <span>Leveraged Google Analytics to perform user journey analysis, achieving a 15% decrease in churn rate.</span>
            </li>
            <li>
              <Dot size={16} />
              <span>Transformed internship matching process, yielding a 30% surge in user satisfaction.</span>
            </li>
            <li>
              <Dot size={16} />
              <span>Engineered custom analytics frameworks, driving a 25% boost in user engagement.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default ExperienceCard;