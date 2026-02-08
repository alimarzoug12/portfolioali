import React from "react";
import { Link } from "react-router-dom";

const Services = () => (
  <section id="services" className="services section">
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>Services</h2>
        <p>What I Offer</p>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
          <div className="icon-box">
            <i className="bi bi-code-slash"></i>
            <h4><Link to="/service-details">Web Design</Link></h4>
            <p>Modern and responsive web designs that look great on any device.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
          <div className="icon-box">
            <i className="bi bi-phone"></i>
            <h4><Link to="/service-details">Software Development</Link></h4>
            <p>Custom software solutions for web and desktop applications.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
          <div className="icon-box">
            <i className="bi bi-graph-up"></i>
            <h4><Link to="/service-details">Product Management</Link></h4>
            <p>Efficient project planning and management to deliver quality products.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
