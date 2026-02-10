import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header1 = ({ isMobileMenuOpen, toggleMobileMenu }) => {
  const [active, setActive] = useState("hero");
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 992;
      setIsMobile(mobile);
      
      if (!mobile && isMobileMenuOpen) {
        toggleMobileMenu();
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [isMobileMenuOpen, toggleMobileMenu]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        let currentActive = active;
        
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentActive = entry.target.id;
          }
        });
        
        if (currentActive === active) {
          sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 200 && rect.bottom >= 100) {
              currentActive = section.id;
            }
          });
        }
        
        if (currentActive !== active) {
          setActive(currentActive);
        }
      },
      {
        threshold: [0.1, 0.3, 0.5],
        rootMargin: "-150px 0px -40% 0px"
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [active]);

  const handleNavClick = () => {
    if (isMobile) {
      toggleMobileMenu();
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <header id="header" className="header dark-background d-flex flex-column">
        <Link to="/" className="profile-img-link">
          <div className="profile-img">
            <img
              src="assets/img/my-profile-img.jpg"
              alt="Ali Marzoug"
              className="img-fluid rounded-circle"
              style={{ width: "120px", height: "120px", objectFit: "cover" }}
            />
          </div>
        </Link>

        <Link to="/" className="logo d-flex align-items-center justify-content-center">
          <h1 className="sitename">Ali Marzoug</h1>
        </Link>
        <div className="social-links text-center">
          <a href="https://x.com/AliMarzoug12" className="twitter"><i className="bi bi-twitter-x"></i></a>
          <a href="https://www.facebook.com/ali.marzoug.14" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/ali__marzoug/" className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="https://github.com/alimarzoug12" className="github"><i className="bi bi-github"></i></a>
          <a href="https://www.linkedin.com/in/ali-marzoug-b7a022209/" className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <HashLink smooth to="#hero" className={active === "hero" ? "active" : ""} onClick={handleNavClick}>
                <i className="bi bi-house navicon"></i> Home
              </HashLink>
            </li>

            <li>
              <HashLink smooth to="#about" className={active === "about" ? "active" : ""} onClick={handleNavClick}>
                <i className="bi bi-person navicon"></i> About
              </HashLink>
            </li>

            <li>
              <HashLink smooth to="#skills" className={active === "skills" ? "active" : ""} onClick={handleNavClick}>
                <i className="bi bi-tools navicon"></i> Skills
              </HashLink>
            </li>

            <li>
              <HashLink smooth to="#resume" className={active === "resume" ? "active" : ""} onClick={handleNavClick}>
                <i className="bi bi-mortarboard-fill navicon"></i> Education & Experience
              </HashLink>
            </li>

            <li>
              <HashLink smooth to="#contact" className={active === "contact" ? "active" : ""} onClick={handleNavClick}>
                <i className="bi bi-geo-alt-fill navicon"></i> Address
              </HashLink>
            </li>
          </ul>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobile && isMobileMenuOpen && (
        <div className="mobile-nav-overlay" onClick={toggleMobileMenu}>
          <div className="mobile-nav-sidebar" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="mobile-close-btn" onClick={toggleMobileMenu}>
              ✕
            </button>
            
            {/* Profile */}
            <div className="mobile-profile">
              <Link to="/" className="profile-img-link">
          <div className="profile-img">
            <img
              src="assets/img/my-profile-img.jpg"
              alt="Ali Marzoug"
              className="mobile-profile-img"
              style={{ width: "120px", height: "120px", objectFit: "cover" }}
            />
          </div>
        </Link>
              <h3 className="mobile-name">Ali Marzoug</h3>
            </div>
            
            {/* Navigation */}
            <nav className="mobile-nav">
              <ul>
                <li>
                  <HashLink 
                    smooth to="#hero" 
                    className={`mobile-nav-link ${active === "hero" ? "active" : ""}`} 
                    onClick={handleNavClick}
                  >
                    <i className="bi bi-house"></i> Home
                  </HashLink>
                </li>

                <li>
                  <HashLink 
                    smooth to="#about" 
                    className={`mobile-nav-link ${active === "about" ? "active" : ""}`} 
                    onClick={handleNavClick}
                  >
                    <i className="bi bi-person"></i> About
                  </HashLink>
                </li>

                <li>
                  <HashLink 
                    smooth to="#skills" 
                    className={`mobile-nav-link ${active === "skills" ? "active" : ""}`} 
                    onClick={handleNavClick}
                  >
                    <i className="bi bi-tools"></i> Skills
                  </HashLink>
                </li>

                <li>
                  <HashLink 
                    smooth to="#resume" 
                    className={`mobile-nav-link ${active === "resume" ? "active" : ""}`} 
                    onClick={handleNavClick}
                  >
                    <i className="bi bi-mortarboard-fill"></i> Education & Experience
                  </HashLink>
                </li>

                <li>
                  <HashLink 
                    smooth to="#contact" 
                    className={`mobile-nav-link ${active === "contact" ? "active" : ""}`} 
                    onClick={handleNavClick}
                  >
                    <i className="bi bi-geo-alt-fill"></i> Address
                  </HashLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header1;