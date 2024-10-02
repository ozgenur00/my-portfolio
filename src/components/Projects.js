import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard';
import 'aos/dist/aos.css';
import AOS from 'aos';

import dailyArtExplorerImage from '../images/daily-art-explorer.png';
import financeManagerImage from '../images/finance-maanager.png';

function Projects() {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
        AOS.refresh();
    }, []);

  return (
    <section id="projects" data-aos="fade-up" className="projects-section">
      <h2 className="project-title">What I've been Up To</h2>
      <ProjectCard
        imageSrc={dailyArtExplorerImage}
        title="Daily Art Explorer"
        description="Daily Art Explorer is your ticket to an art-filled adventure! This interactive web app lets you discover, like, save, and share amazing random artworks straight from the Metropolitan Museum of Art’s collection. Powered by cutting-edge web tech like React, Redux, Node.js, and PostgreSQL, it’s designed to give art lovers a smooth and exciting way to explore their favorite pieces. Dive into the world of art, one masterpiece at a time!"
        repository="https://github.com/ozgenur00/daily-art-explorer-main"
        website="https://daily-art-explorer-frontend.onrender.com/"
        imageOnRight={true}
      />
      <ProjectCard
        imageSrc={financeManagerImage}
        title="Wealth Watcher - Personal Finance Manager"
        description="Wealth Watcher is like your personal financial sidekick, here to help you master your money! With a super-friendly interface, it makes tracking your budgets, expenses, accounts, and goals a breeze. Built using Python and Flask for the brains, SQLAlchemy for smooth database management, and Plotly for those eye-catching visualizations, it turns your financial data into easy-to-digest insights. Basically, it's your money manager wrapped up in a cool web app – and it’s my very first project!"
        repository="https://github.com/ozgenur00/financemanager-main"
        website="https://financemanager-main.onrender.com/"
        imageOnRight={false}
      />
    </section>
  );
}

export default Projects;
