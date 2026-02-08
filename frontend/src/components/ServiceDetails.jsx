import React from "react";

const ServiceDetails = () => (
  <section id="service-details" className="service-details section">
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
          <div className="services-list">
            <a href="#" className="active">Web Design</a>
            <a href="#">Software Development</a>
            <a href="#">Product Management</a>
            <a href="#">Graphic Design</a>
            <a href="#">Marketing</a>
          </div>
          <h4>Enim qui eos rerum in delectus</h4>
          <p>Nam voluptatem quasi numquam quas fugiat ex temporibus quo est...</p>
        </div>
        <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
          <img src="/assets/img/services.jpg" alt="" className="img-fluid services-img" />
          <h3>Temporibus et in vero dicta aut eius...</h3>
          <p>Blanditiis voluptate odit ex error ea sed officiis deserunt...</p>
          <ul>
            <li><i className="bi bi-check-circle"></i> <span>Aut eum totam accusantium voluptatem.</span></li>
            <li><i className="bi bi-check-circle"></i> <span>Assumenda et porro nisi nihil nesciunt voluptatibus.</span></li>
            <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea</span></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ServiceDetails;
