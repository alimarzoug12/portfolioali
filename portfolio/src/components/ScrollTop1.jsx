import React, { useEffect } from 'react';
import { Waypoint } from 'react-waypoint'; // For scroll detection

const ScrollTop1 = () => {
  useEffect(() => {
    // Initialize waypoint or handle scroll logic here if needed
    const scrollTop = document.getElementById('scroll-top');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        scrollTop.classList.add('active');
      } else {
        scrollTop.classList.remove('active');
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Waypoint onEnter={() => {}} onLeave={() => {}}>
      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center" onClick={scrollToTop}>
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </Waypoint>
  );
};

export default ScrollTop1;