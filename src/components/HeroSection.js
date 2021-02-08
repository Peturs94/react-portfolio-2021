import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container' id="home">
      <video src='/videos/glitch.mp4' autoPlay loop muted />
      <h1>ÞÓR PÉTURSSON</h1>
      <p>Visual Artist and Web Developer</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          href="mailto:someone@example.com"
        >
          Get In Touch
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
