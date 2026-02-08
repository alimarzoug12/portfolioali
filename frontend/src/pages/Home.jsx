import Background from "../components/Background";
import Navbar from "../components/Navbar";
// import MobileMenu from "../components/MobileMenu";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import About from "../components/About";
import Experiences from "../components/Experiences";
import Education from "../components/Education";
import Certifs from "../components/Certifs";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      {/* <MobileMenu /> */}
      <Hero />
      <About />
      <Experiences />
      <Education />
      <Certifs />
      <Skills />
      {/* <Stats /> */}
      {/* <Features />
      <Pricing /> */}
      <Contact />
      <Footer />
    </>
  );
}
