import React, { useEffect, useState } from 'react';
import About1 from '../components/About1';
import Stats1 from '../components/Stats1';
import Skills1 from '../components/Skills1';
import Resume1 from '../components/Resume1';
import Contact1 from '../components/Contact1';
import Hero1 from '../components/Hero1';
import Header1 from '../components/Header1';
import Footer1 from '../components/Footer1';
import ScrollTop1 from '../components/ScrollTop1';

const Home1 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.className = 'index-page';
    return () => { document.body.className = ''; };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <Header1 isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
      <main className="main">
        <Hero1 toggleMobileMenu={toggleMobileMenu} />
        <About1 />        
        <Skills1 />
        <Resume1 />
        <Contact1 />
        <ScrollTop1 />
      </main>
      <Footer1 />
    </>
  );
};

export default Home1;