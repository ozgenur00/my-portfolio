import React from 'react';
import '../styles/ProjectCard.css';

function ProjectCard({ imageSrc, title, description, repository, website, imageOnRight }) {
  return (
    <div className={`project-card ${imageOnRight ? 'right' : 'left'}`}>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-links">
          <a href={repository} className="learn-more">
            GitHub
          </a>
          <a href={website} className="learn-more">
            Explore
          </a>
        </div>
      </div>
      <div className="project-image">
        <img src={imageSrc} alt={title} />
      </div>
    </div>
  );
}

export default ProjectCard;
