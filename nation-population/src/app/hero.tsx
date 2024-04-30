
'use client'
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Heromainpage = () => {
  useEffect(() => {
    gsap.fromTo(
      '.hero-text',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: { trigger: '.hero', start: 'top 80%' },
      }
    );
  }, []);

  return (
    <div className="hero relative h-screen">
      <div
        className="hero-bg bg-cover bg-center h-full"
        style={{
          backgroundImage: `url('https://source.unsplash.com/random/1600x900')`,
        }}
      />
      <div className="hero-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="hero-text font-bold text-4xl mb-4">
          Welcome to this website
        </h1>
        <p className="hero-text font-medium text-xl fade-in">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};

export default Heromainpage;
