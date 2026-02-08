const features = [
  { icon: "⚡", title: "Quantum Processing", desc: "Lightning-fast data processing with quantum-inspired algorithms." },
  { icon: "🔮", title: "Neural Networks", desc: "AI-powered real-time collaboration optimization." },
  { icon: "🌐", title: "Holographic Interface", desc: "Immersive 3D shared workspaces." },
  { icon: "🛡️", title: "Quantum Encryption", desc: "Military-grade quantum security." },
  { icon: "🚀", title: "Hyperdrive Sync", desc: "Zero-latency cross-platform sync." },
  { icon: "🎯", title: "Mind Reading Analytics", desc: "Predictive analytics beyond expectations." }
];

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="features-container">
        <div className="section-header">
          <h2 className="section-title">Core Systems</h2>
          <p className="section-subtitle">
            Advanced modules designed for maximum efficiency
          </p>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
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
