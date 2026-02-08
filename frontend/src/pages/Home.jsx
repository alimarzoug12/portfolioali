import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import About from "../components/About";
import Experiences from "../components/Experiences";
import Education from "../components/Education";
import Certifs from "../components/Certifs";
import Skills from "../components/Skills";
import ScrollTop from "../components/ScrollTop";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />      
      <Hero />
      <About />
      <Experiences />
      <Education />
      <Certifs />
      <Skills /> 
      <ScrollTop />     
      <Contact />
      <Footer />
    </>
  );
}
