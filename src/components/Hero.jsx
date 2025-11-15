import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm <span className="highlight">Your Name</span></h1>
        <p className="hero-subtitle">Full Stack Developer | React Enthusiast | Problem Solver</p>
        <p className="hero-description">
          I create elegant solutions to complex problems through code.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => {
            const element = document.getElementById('projects');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}>
            View My Work
          </button>
          <button className="btn btn-secondary" onClick={() => {
            const element = document.getElementById('contact');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}>
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
