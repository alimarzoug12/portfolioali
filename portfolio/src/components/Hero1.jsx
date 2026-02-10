import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

const Hero1 = ({ toggleMobileMenu }) => {
  const typedRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 992);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Data Science Engineer', 'ML Engineer', 'AI Engineer'],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="hero" className="hero section dark-background">
      <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" className="" />
      
      {/* Three Lines Button - Only on mobile */}
      {isMobile && (
        <button 
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      )}
      
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2>Ali Marzoug</h2>
        <p>I'm <span className="typed" ref={typedRef}></span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
      </div>
    </section>
  );
};

export default Hero1;