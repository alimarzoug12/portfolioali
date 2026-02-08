export default function Education() {
  return (
    <section className="contact education-section" id="education">
      <div className="contact-container education-container">
        <div className="contact-wrapper education-wrapper">

          <div className="education-card">

            <div className="section-header">
              <h2 className="section-title">Education</h2>
            </div>

            {/* Engineering Degree */}
            <div className="timeline-item">
            <div className="experience-form experience-content">
              <div className="timeline-header">
                <h3>Engineering Degree in Data Science (in progress)</h3>
                <span className="timeline-date">Sep 2023 - Present</span>
              </div>
              

              <p><strong>ESPRIT</strong>, Ariana – Tunisia</p>
            </div>
            </div>
            {/* Preparatory Classes */}
            <div className="timeline-item">
            <div className="experience-form experience-content">
              <div className="timeline-header">
                <h3>Preparatory Classes (MPI)</h3>
                <span className="timeline-date">Sep 2020 - Jun 2023</span>
              </div>

              <p>
                <strong>Higher Institute of Computer Science and Multimedia</strong>, Sfax
              </p>
            </div>
            </div>

            {/* High School */}
            <div className="timeline-item">
            <div className="experience-form experience-content">
              <div className="timeline-header">
                <h3>High School Diploma – Experimental Sciences</h3>
                <span className="timeline-date">Jul 2020</span>
              </div>

              <p><strong>Douz High School</strong></p>
              <p>Final Average: <strong>12.92 / 20</strong></p>
            </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
