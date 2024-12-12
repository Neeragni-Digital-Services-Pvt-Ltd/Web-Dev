// src/Home.js
import React from 'react';
import './Home.css'; // Importing the CSS file for this component

function Home() {
  return (
    <div className="home">
      <header className="header">
        <div className="logo">Neeragni</div>
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#team">Our Team</a></li>
            <li><a href="#callback">Get a Call Back</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Neeragni Digital Services Private Limited</h1>
          <p>Your one-stop solution for Advertisement, Marketing, Public Relations, Social Media Management, Technical Consulting and much more...</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="service-card">
          <h3>Build Portfolio</h3>
          <p>Build your portfolio using top notch print and degital platforms</p>
        </div>
        <div className="service-card">
          <h3>Promote your product</h3>
          <p>Promote your movie or any product to reach out to millions</p>
        </div>
        <div className="service-card">
          <h3>Buzzify your Social Handle</h3>
          <p>Grow and Connect you audiences over various Social Media Platforms</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Neeragni Digital Solutions Private Limited | All rights reserved.</p>
        <div className="socials">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default Home;