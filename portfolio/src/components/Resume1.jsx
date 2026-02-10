import React from 'react';

const Resume1 = () => {
  return (
    <section id="resume" className="resume section">
      <div className="container">
        <div className="row">
          {/* Left Column: Education + Certificates + Languages */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Education</h3>

            <div className="resume-item">
              <h4>Engineering Degree in Data Science (in progress)</h4>
              <h5>September 2023 – Present</h5>
              <p><em>ESPRIT – Higher School of Digital Engineering, Ariana, Tunisia</em></p>
              <p>
                Focused on data science, machine learning, AI applications, full-stack development, 
                and UI/UX design. Actively developing projects in multimodal AI, recommendation systems, 
                NLP, time series forecasting, and modern web technologies.
              </p>
            </div>

            <div className="resume-item">
              <h4>Preparatory Classes (MPI)</h4>
              <h5>September 2020 – May 2023</h5>
              <p><em>Higher Institute of Computer Science and Multimedia, Sfax, Tunisia</em></p>
            </div>

            <div className="resume-item">
              <h4>High School Diploma – Experimental Sciences</h4>
              <h5>2020</h5>
              <p><em>Douz High School, Douz, Tunisia</em></p>
              <p>Final Average: 12.92 / 20</p>
            </div>

            {/* Certificates - same title style as Education */}
            <div className="resume-item mt-5">
              <h3 className="resume-title">Certificates</h3>
              <ul className="list-unstyled mb-0">
                <li>• Adobe Photoshop</li>
                <li>• Adobe Illustrator</li>
                <li>• NVIDIA - Fundamentals of Deep Learning</li>
                <li>• NVIDIA - Applications of AI for Anomaly Detection</li>
                <li>• Coursera DeepLearning.AI - Convolutional Neural Networks</li>
                <li>• Hashgraph Developer Course – The Hashgraph Association / Hedera</li>
              </ul>
            </div>

            {/* Languages - same title style as Education */}
            <div className="resume-item mt-5">
              <h3 className="resume-title">Languages</h3>
              <ul className="list-unstyled mb-0">
                <li>• Arabic: Native</li>
                <li>• French: Conversational</li>
                <li>• English: Conversational</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Professional Experience & Selected Projects */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Professional Experience & Selected Projects</h3>

            <div className="resume-item">
              <h4>Data Science Intern – Graph Algorithms</h4>
              <h5>July 2025 – August 2025</h5>
              <ul>
                <li>Developed and compared graph-based ranking algorithms (PageRank, HITS, Baseline model)</li>
                <li>Implemented evaluation metrics: nDCG, Spearman correlation, Kendall Tau, runtime analysis, overlap measures</li>
                <li>Built React + FastAPI web interface for results display and comparison tables</li>
                <li>Used Neo4j for graph visualization and data export</li>
                <li>Processed structured JSON data for interoperability across tools</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>MarketMind – AI Marketing Assistant for SMEs</h4>
              <h5>January 2025 – May 2025</h5>
              <p><em>Academic Project – Selected for Bal of Projects 2025 at ESPRIT</em></p>
              <ul>
                <li>Built full-stack AI solution for automated marketing content generation</li>
                <li>Developed Multimodal Agentic RAG system (text/image/audio output)</li>
                <li>Fine-tuned SDXL with LoRA for brand-aligned visual content</li>
                <li>Implemented multilingual sentiment analysis (BERT / TunBERT / SBERT)</li>
                <li>Created Power BI dashboards for campaign performance tracking</li>
                <li>Integrated FastAPI + React with secure authentication</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>E-Commerce Platform – Online Food Store</h4>
              <h5>July 2024 – August 2024</h5>
              <p><em>Web Development Internship / Project</em></p>
              <ul>
                <li>Developed complete online food store with cart, session, and order logic</li>
                <li>Built secure backend with Express.js / Node.js and PostgreSQL</li>
                <li>Implemented authentication and responsive UI with Bootstrap</li>
                <li>Improved checkout flow and usability</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Taskify Clone – Todo App with Authentication</h4>
              <h5>August 2022</h5>
              <ul>
                <li>Built task management app using React.js, Node.js, and PostgreSQL</li>
                <li>Implemented secure CRUD and user login/logout</li>
                <li>Designed responsive UI with GitHub collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume1;