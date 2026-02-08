// components/Navbar.js
import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("top");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    
    const handleScroll = () => {
      let current = "top";
      let minDistance = Infinity;
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top);
        
        // Check if section is in viewport (within 150px from top)
        if (rect.top <= 150 && rect.bottom >= 100) {
          if (distance < minDistance) {
            minDistance = distance;
            current = section.id;
          }
        }
      });
      
      setActive(current);
    };
    
    // Debounce for performance
    let debounceTimer;
    const debouncedScroll = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(handleScroll, 50);
    };
    
    window.addEventListener("scroll", debouncedScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener("scroll", debouncedScroll);
      clearTimeout(debounceTimer);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = () => {
    if (window.innerWidth < 992) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav>
      <div className="nav-container">
        <a href="#top" className="logo">AliMarzoug</a>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          <li>
            <a 
              href="#top" 
              className={active === "top" ? "active" : ""}
              onClick={handleNavClick}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={active === "about" ? "active" : ""}
              onClick={handleNavClick}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#experiences" 
              className={active === "experiences" ? "active" : ""}
              onClick={handleNavClick}
            >
              Experiences
            </a>
          </li>
          <li>
            <a 
              href="#education" 
              className={active === "education" ? "active" : ""}
              onClick={handleNavClick}
            >
              Education
            </a>
          </li>
          <li>
            <a 
              href="#features" 
              className={active === "features" ? "active" : ""}
              onClick={handleNavClick}
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={active === "contact" ? "active" : ""}
              onClick={handleNavClick}
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="nav-bottom">
          <a href="/CV Ali.pdf" download className="cyber-button">CV</a>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
        {/* Mobile Menu Sidebar */}
        <div className="mobile-menu-sidebar" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-menu-header">
            {/* <span className="mobile-logo">AliMarzoug</span>
            <button 
              className="mobile-menu-close"
              onClick={toggleMobileMenu}
              aria-label="Close menu"
            >
              ✕
            </button> */}
          </div>

          <ul className="mobile-nav-links">
            <li>
              <a 
                href="#top" 
                className={active === "top" ? "active" : ""}
                onClick={handleNavClick}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={active === "about" ? "active" : ""}
                onClick={handleNavClick}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#experiences" 
                className={active === "experiences" ? "active" : ""}
                onClick={handleNavClick}
              >
                Experiences
              </a>
            </li>
            <li>
              <a 
                href="#education" 
                className={active === "education" ? "active" : ""}
                onClick={handleNavClick}
              >
                Education
              </a>
            </li>
            <li>
              <a 
                href="#features" 
                className={active === "features" ? "active" : ""}
                onClick={handleNavClick}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={active === "contact" ? "active" : ""}
                onClick={handleNavClick}
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="mobile-nav-bottom">
            <a href="/CV Ali.pdf" download className="cyber-button mobile-cv-btn">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}