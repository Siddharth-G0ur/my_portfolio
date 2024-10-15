import React from 'react';
import { SiMicrosoftexcel, SiGoogleanalytics, SiLooker, SiStreamlit, SiGooglebigquery, SiPython, SiPandas } from 'react-icons/si';
import { FaDatabase, FaChartBar, FaCode } from 'react-icons/fa';
import { HiUserGroup } from "react-icons/hi";
import { IoIosStats } from "react-icons/io";
import { PiChartScatterBold, PiNetworkX } from "react-icons/pi";
import { MdOutlineCategory, MdOutlineScience } from "react-icons/md";

const skillIcons = {
  'Microsoft Excel': SiMicrosoftexcel,
  'Google Analytics': SiGoogleanalytics,
  'Looker': SiLooker,
  'Streamlit': SiStreamlit,
  'BigQuery': SiGooglebigquery,
  'Pandas': SiPandas,
  'Python': SiPython,
  'SQL': FaDatabase,
  'Cohort Analysis': HiUserGroup,
  'Statistical analysis': IoIosStats,
  'Data visualization': PiChartScatterBold,
  'A/B Testing': PiNetworkX,
  'EDA': FaChartBar,
  'Analytical Thinking': FaCode,
  'Hypothesis Testing': MdOutlineScience,
  'Customer Segmentation Analysis': MdOutlineCategory

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
        {['Python', 'SQL','Microsoft Excel', 'Google Analytics', 'Looker', 'Streamlit', 'BigQuery', 'Pandas'].map(skill => (
          <SkillItem key={skill} skill={skill} />
        ))}
      </div>
    </div>
    <div className="skills-section">
      <h4>Techniques:</h4>
      <div className="skills-grid">
        {[ 'Data visualization', 'A/B Testing', 'Cohort Analysis', 'EDA', 'Hypothesis Testing', 'Customer Segmentation Analysis'].map(skill => (
          <SkillItem key={skill} skill={skill} />
        ))}
      </div>
    </div>
  </div>
);

export default SkillsCard;