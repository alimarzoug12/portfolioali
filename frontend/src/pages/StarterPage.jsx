import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import Preloader from "../components/Preloader";

const StarterPage = () => (
  <>
    <Header />
    <main className="main">
      <section id="starter-section" className="starter-section section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Starter Section</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>
        <div className="container" data-aos="fade-up">
          <p>Use this page as a starter for your own custom pages.</p>
        </div>
      </section>
    </main>
    <Footer />
    <ScrollTop />
    <Preloader />
  </>
);

export default StarterPage;
