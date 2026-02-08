import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => (
  <section id="portfolio" className="portfolio section">
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>Portfolio</h2>
        <p>My Recent Work</p>
      </div>
      <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
        <div className="col-lg-4 col-md-6 portfolio-item">
          <img src="/assets/img/portfolio/app-1.jpg" className="img-fluid" alt="" />
          <div className="portfolio-info">
            <h4>App 1</h4>
            <p>App</p>
            <Link to="/portfolio-details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item">
          <img src="/assets/img/portfolio/web-1.jpg" className="img-fluid" alt="" />
          <div className="portfolio-info">
            <h4>Web 1</h4>
            <p>Web</p>
            <Link to="/portfolio-details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item">
          <img src="/assets/img/portfolio/branding-1.jpg" className="img-fluid" alt="" />
          <div className="portfolio-info">
            <h4>Branding 1</h4>
            <p>Branding</p>
            <Link to="/portfolio-details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
