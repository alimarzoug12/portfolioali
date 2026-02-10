import React from 'react';

const About1 = () => {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
          <p>Data Science engineering student at <strong>ESPRIT</strong> with
                practical experience in full-stack development, machine learning
                workflows, and AI-powered applications.</p>
          <p>
                Passionate about building solutions that balance usability,
                intelligence, and performance. Recognized for a collaborative
                mindset, adaptability, and a strong interest in applying AI to
                solve real-world challenges.
          </p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src="assets/img/my-profile-img.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 content">
            <h2>Data Science Engineering Student.</h2>
            <p className="fst-italic py-4" style={{ fontSize: '0.9rem' }}>
              Motivated by constant learning and growth — I love picking up new skills, exploring fresh ideas, and challenging myself through every project I work on. Seeing real progress and becoming better with each step keeps me driven every day.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>25 July 2000</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+216 20 190 055</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Douz, Tunisia</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>25</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Engineer</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>ali.marzoug15@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p className="fst-italic py-3" style={{ fontSize: '0.9rem' }}>
              I truly cherish spending quality time with my family and friends — sharing laughs, creating memories, and enjoying those simple, meaningful moments together. I also love football — playing, watching, or just feeling the energy of the game — and travelling to discover new places, cultures, and experiences that always leave me inspired and refreshed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About1;