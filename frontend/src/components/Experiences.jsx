export default function Experiences() {
  return (
    <section className="contact experience-section" id="experiences">
      <div className="contact-container experience-container">
        <div className="contact-wrapper experience-wrapper">
          {/* <div className="contact-card experience-card"> */}

            <div className="section-header">
              <h2 className="section-title">Professional Experience</h2>
            </div>

            {/* Timeline */}
            <div className="timeline">

              {/* Experience 1 */}
              <div className="timeline-item">
                <span className="timeline-dot"></span>

                <div className="experience-form experience-content">
                  <div className="timeline-header">
                    <h3>Data Science Intern – Graph Algorithms</h3>
                    <span className="timeline-date">Jul 2025 – Aug 2025</span>
                  </div>

                  <p>
                    Developed and compared graph-based ranking algorithms to
                    prioritize prerequisite nodes in academic course graphs.
                  </p>

                  <ul>
                    <li>Implemented PageRank, HITS, and Baseline models</li>
                    <li>Evaluated using nDCG, Spearman, Kendall Tau, runtime</li>
                    <li>Built React + FastAPI web interface</li>
                    <li>Visualized graphs using Neo4j</li>
                  </ul>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="timeline-item">
                <span className="timeline-dot"></span>

                <div className="experience-form experience-content">
                  <div className="timeline-header">
                    <h3>MarketMind – AI Marketing Assistant</h3>
                    <span className="timeline-date">Jan 2025 – May 2025</span>
                  </div>

                  <p>
                    Selected among the top Data Science projects at ESPRIT (Bal of Projects 2025).
                  </p>

                  <ul>
                    <li>Built a multimodal agentic RAG system</li>
                    <li>Fine-tuned SDXL with LoRA</li>
                    <li>Implemented sentiment analysis with BERT & SBERT</li>
                    <li>Created Power BI dashboards</li>
                  </ul>
                </div>
              </div>

              {/* Experience 3 */}
              <div className="timeline-item">
                <span className="timeline-dot"></span>

                <div className="experience-form experience-content">
                  <div className="timeline-header">
                    <h3>E-Commerce Platform – Online Food Store</h3>
                    <span className="timeline-date">Jul 2024 – Aug 2024</span>
                  </div>

                  <ul>
                    <li>Developed cart and order processing logic</li>
                    <li>Enhanced checkout flow with Express.js</li>
                    <li>Applied session-based authentication</li>
                  </ul>
                </div>
              </div>

              {/* Experience 4 */}
              <div className="timeline-item">
                <span className="timeline-dot"></span>

                <div className="experience-form experience-content">
                  <div className="timeline-header">
                    <h3>Web Development Intern</h3>
                    <span className="timeline-date">Jul 2023</span>
                  </div>

                  <ul>
                    <li>Built a full online food store</li>
                    <li>Node.js + PostgreSQL backend</li>
                    <li>Responsive UI with Bootstrap</li>
                  </ul>
                </div>
              </div>

              {/* Experience 4 */}
            <div className="timeline-item">
            <span className="timeline-dot"></span>

            <div className="experience-form experience-content">
                <div className="timeline-header">
                <h3>Taskify Clone – Todo App with User Authentication</h3>
                <span className="timeline-date">Aug 2022</span>
                </div>

                <ul>
                <li>Built a task management system using React.js, Node.js, and PostgreSQL</li>
                <li>Implemented secure CRUD operations with user login/logout</li>
                <li>Applied modern, responsive UI design</li>
                <li>Used GitHub for collaboration and version control</li>
                </ul>
            </div>
            </div>


            </div>

          </div>
        </div>      
    </section>
  );
}
