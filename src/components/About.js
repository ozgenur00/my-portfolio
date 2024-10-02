import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/About.css';

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className='about-section' data-aos="fade-up">
      <div className='about-container'>
        <div className='about-image-card' data-aos="fade-up">
          <img src="your-image-url.jpg" alt="Ozgenur" className="about-image" />
        </div>
        <div className='about-content'>
          <h2>My Techy Tale</h2>
          <p data-aos="fade-up">
            Hey there! I'm <strong>Ozgenur</strong> – a junior software engineer with a love for solving puzzles and turning big ideas into awesome, working products. I started my journey with a degree in Chinese language and literature (yep, totally unrelated!), worked as a teacher and dabbled in graphic design, until I stumbled upon coding. One bootcamp later, and I was hooked!
          </p>
          <p data-aos="fade-up" data-aos-delay="200">
            Now, I spend my days coding in <strong>React, Node.js, Express, Python, and PostgreSQL</strong>, creating full-stack projects like a personal finance manager and an art discovery app. I’ve also had the chance to dive into startup life, where I get to wear multiple hats—building slick frontends, optimizing backends, and even working directly with clients. 
          </p>
          <p data-aos="fade-up" data-aos-delay="400">
            I’m always up for a challenge, and I live for that “aha!” moment when a tricky problem finally clicks. Whether it's crafting a user-friendly UI or speeding up database queries, I love bringing creative ideas to life through code. Let’s build something amazing!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
