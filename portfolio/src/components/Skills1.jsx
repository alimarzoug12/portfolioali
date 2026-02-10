import React from 'react';

const Skills1 = () => {
  return (
    <section id="skills" className="skills section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>Core competencies across programming, tools, design, and advanced AI domains</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content skills-animation">
          {/* Column 1: Languages & Frameworks */}
          <div className="col-lg-4">
            <h5 className="mb-3">Languages & Frameworks</h5>

            <div className="progress mb-3">
              <span className="skill"><span>Python</span> <i className="val">95%</i></span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '95%' }} // explicit width for safety
                ></div>
              </div>
            </div>

            <div className="progress mb-3">
              <span className="skill"><span>JavaScript / React.js / Node.js</span> <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '90%' }}
                ></div>
              </div>
            </div>

            <div className="progress mb-3">
              <span className="skill"><span>Java / C</span> <i className="val">85%</i></span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '85%' }}
                ></div>
              </div>
            </div>

            <div className="progress mb-3">
              <span className="skill"><span>PHP / Symfony</span> <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '80%' }}
                ></div>
              </div>
            </div>

            <div className="progress mb-3">
              <span className="skill"><span>HTML / CSS / Bootstrap / Tailwind</span> <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '90%' }}
                ></div>
              </div>
            </div>

            <div className="progress mb-3">
              <span className="skill"><span>SQL / PL/SQL</span> <i className="val">85%</i></span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '85%' }}
                ></div>
              </div>
            </div>
          </div>

          {/* Column 2: Platforms & Tools */}
          <div className="col-lg-4">
            <h5 className="mb-3">Platforms & Tools</h5>

            <div className="progress mb-3">
              <span className="skill"><span>Git / GitHub</span> <i className="val">95%</i></span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '95%' }}
                ></div>
              </div>
            </div>

            <div className="progress mb-3">
              <span className="skill"><span>FastAPI</span> <i className="val">85%</i></span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '85%' }}
                ></div>
              </div>
            </div>

            <div className="progress mb-3">
              <span className="skill"><span>PostgreSQL / MongoDB / Neo4j</span> <i className="val">85%</i></span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '85%' }}
                ></div>
              </div>
            </div>

            <div className="progress mb-3">
              <span className="skill"><span>Docker / Linux</span> <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '80%' }}
                ></div>
              </div>
            </div>

            <div className="progress mb-3">
              <span className="skill"><span>Power BI</span> <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '80%' }}
                ></div>
              </div>
            </div>

            <div className="progress mb-3">
              <span className="skill"><span>Kafka</span> <i className="val">70%</i></span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '70%' }}
                ></div>
              </div>
            </div>
          </div>

          {/* Column 3: Design & AI / AI Domains */}
          <div className="col-lg-4">
            <h5 className="mb-3">Design & AI / AI Domains</h5>

            <div className="progress mb-3">
              <span className="skill"><span>UI/UX Design</span> <i className="val">85%</i></span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '85%' }}
                ></div>
              </div>
            </div>

            <div className="progress mb-3">
              <span className="skill"><span>Adobe Photoshop / Illustrator</span> <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '80%' }}
                ></div>
              </div>
            </div>

            <div className="progress mb-3">
              <span className="skill"><span>Multimodal AI / SDXL + LoRA</span> <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '80%' }}
                ></div>
              </div>
            </div>

            <div className="progress mb-3">
              <span className="skill"><span>NLP / BERT / TunBERT / Sentiment Analysis</span> <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '80%' }}
                ></div>
              </div>
            </div>

            <div className="progress mb-3">
              <span className="skill"><span>Recommendation Systems</span> <i className="val">75%</i></span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '75%' }}
                ></div>
              </div>
            </div>

            <div className="progress mb-3">
              <span className="skill"><span>Time Series Forecasting</span> <i className="val">85%</i></span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '85%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills1;