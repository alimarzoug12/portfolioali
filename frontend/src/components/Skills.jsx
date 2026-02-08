const skills = [
  {
    icon: "🧠",
    title: "Languages & Frameworks",
    desc: "Python, Java, C, JavaScript, PHP, HTML/CSS, React.js, Node.js, Symfony, SQL, PL/SQL"
  },
  {
    icon: "🛠️",
    title: "Platforms & Tools",
    desc: "GitHub, FastAPI, PostgreSQL, MongoDB, Neo4j, NoSQL, Bootstrap, Tailwind CSS, Linux, Power BI, Apache Kafka, Docker"
  },
  {
    icon: "📊",
    title: "AI Domains",
    desc: "Multimodal AI, Recommendation Systems, Natural Language Processing (NLP), Time Series Forecasting, Sentiment Analysis"
  },
  {
    icon: "🎨",
    title: "Design & AI",
    desc: "Adobe Photoshop, Adobe Illustrator, UI/UX Design, SDXL + LoRA, BERT, TunBERT"
  }
];

export default function Skills() {
  return (
    <section className="features" id="features">
      <div className="features-container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          {/* <p className="section-subtitle">
            Advanced modules designed for maximum efficiency
          </p> */}
        </div>

        <div className="features-grid">
          {skills.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
