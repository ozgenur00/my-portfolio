import React from 'react';
import '../styles/ScrollingBanner.css'; 


const items = [
  "PostgreSQL", "Node.js", "React", "Express", "Redux", "JavaScript", "HTML", 
  "CSS", "Python", "TypeScript", "SQL", "Flask", "RESTful APIs", "AJAX", 
  "jQuery", "Git/GitHub", "Data Structures", "Algorithms"
];

const ScrollingBanner = () => {
  const duplicatedItems = [...items, ...items];

  return (
    <div className="banner-wrapper">
      <div className="banner">
        {duplicatedItems.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanner;
