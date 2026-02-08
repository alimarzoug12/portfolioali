import React from "react";

const Resume = () => (
  <section id="resume" className="resume section">
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>Resume</h2>
        <p>Check My Resume</p>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <h3 className="resume-title">Education</h3>
          <div className="resume-item">
            <h4>Bachelor in Data Science</h4>
            <h5>2022 - Present</h5>
            <p><em>Esprit Ariana, Tunisia</em></p>
            <p>Currently pursuing Data Science Engineering with focus on ML, AI, and Web Development.</p>
          </div>
          <div className="resume-item">
            <h4>High School</h4>
            <h5>2020</h5>
            <p><em>Baccalaureate - Experimental Sciences</em></p>
            <p>Graduated with an average of 12.92/20.</p>
          </div>
        </div>

        <div className="col-lg-6">
          <h3 className="resume-title">Professional Experience</h3>
          <div className="resume-item">
            <h4>Summer Internship</h4>
            <h5>Aug 2024</h5>
            <p><em>E-commerce Website Project</em></p>
            <p>Worked on session management, authentication, adding items to cart, and security features using React.js and Node.js.</p>
          </div>
          <div className="resume-item">
            <h4>Internship</h4>
            <h5>Jul 2023</h5>
            <p><em>React & Node.js Project</em></p>
            <p>Focused on understanding authentication, CRUD operations, and GitHub collaboration.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Resume;
