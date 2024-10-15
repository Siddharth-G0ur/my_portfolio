import React from 'react';
import { SiMicrosoftexcel, SiGoogleanalytics, SiLooker, SiStreamlit, SiGooglebigquery, SiPython, SiPandas, SiMatplotlib } from 'react-icons/si';
import { FaDatabase, FaChartBar, FaCode } from 'react-icons/fa';
import { BsGraphUp, BsBarChartLine } from 'react-icons/bs';

const skillIcons = {
  'Microsoft Excel': SiMicrosoftexcel,
  'Google Analytics': SiGoogleanalytics,
  'Looker': SiLooker,
  'Streamlit': SiStreamlit,
  'BigQuery': SiGooglebigquery,
  'Beautiful Soup': FaCode,
  'Pandas': SiPandas,
  // 'Matplotlib': SiMatplotlib,
  'Python': SiPython,
  'SQL': FaDatabase,
  'Statistical analysis': BsGraphUp,
  'Data visualization': FaChartBar,
  'A/B Testing': BsBarChartLine,
  'Cohort Analysis': BsGraphUp,
  'EDA': FaChartBar,
  'Analytical Thinking': FaCode,
  'Hypothesis Testing': BsGraphUp,
  'Customer Segmentation Analysis': BsBarChartLine
};

const SkillItem = ({ skill }) => {
  const Icon = skillIcons[skill] || FaCode;
  return (
    <div className="skill-item">
      <Icon className="skill-icon" />
      <span className="skill-name">{skill}</span>
    </div>
  );
};

const SkillsCard = () => (
  <div className="card" id="skills">
    <h3>Skills</h3>
    <div className="skills-section">
      <h4>Tools:</h4>
      <div className="skills-grid">
        {['Microsoft Excel', 'Google Analytics', 'Looker', 'Streamlit', 'BigQuery', 'Beautiful Soup', 'Pandas', 'Matplotlib', 'Python', 'SQL'].map(skill => (
          <SkillItem key={skill} skill={skill} />
        ))}
      </div>
    </div>
    <div className="skills-section">
      <h4>Techniques:</h4>
      <div className="skills-grid">
        {['Statistical analysis', 'Data visualization', 'A/B Testing', 'Cohort Analysis', 'EDA', 'Analytical Thinking', 'Hypothesis Testing', 'Customer Segmentation Analysis'].map(skill => (
          <SkillItem key={skill} skill={skill} />
        ))}
      </div>
    </div>
  </div>
);

export default SkillsCard;