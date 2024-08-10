import React, { useState, useEffect } from 'react';

const Landing = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Kayma hızını azaltmak için çarpanları düşürdüm
  const leftMove = {
    transform: `translateX(${-scrollY * 0.15}px)`, // Hız düşürüldü
  };

  const rightMove = {
    transform: `translateX(${scrollY * 0.15}px)`, // Hız düşürüldü
  };

  return (
    <section id="about" className="bg-secondary flex items-center justify-center h-screen p-4 md:p-8">
      <div className="text-center text-6xl md:text-9xl font-bold flex flex-col md:flex-row items-center justify-center relative -translate-y-24">
        <div className="text-primary mb-4 md:mb-0">
          <p className="mb-2 ml-15" style={leftMove}>DESIGNER</p>
          <p className="mb-2 flex items-center" style={rightMove}>
            CREATIVE
            <span className="text-primary ml-4 text-sm md:text-2xl font-normal text-start leading-normal">
              Hello, I am John Doe, an Art Director and Digital Designer currently<br />
              available to work as freelancer or full-time.<br />
              on creative direction and user experience.
            </span>
          </p>            
          <p className="ml-60" style={leftMove}>DIRECTOR</p>
        </div>
      </div>
    </section>
  );
};

export default Landing;
