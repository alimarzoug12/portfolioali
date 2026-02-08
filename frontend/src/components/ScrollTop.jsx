import React, { useState, useEffect } from "react";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button 
      id="scroll-top" 
      className={`scroll-top d-flex align-items-center justify-content-center ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <i className="bi bi-arrow-up-short"></i>
    </button>
  );
};

export default ScrollTop;