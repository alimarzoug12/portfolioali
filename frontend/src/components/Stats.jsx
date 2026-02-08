export default function Stats() {
  return (
    <section className="stats" id="stats">
      <div className="stats-container">
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">50K+</span>
            <span className="stat-label">Active Users</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">99.9%</span>
            <span className="stat-label">Uptime</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">500M+</span>
            <span className="stat-label">Tasks Processed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">180+</span>
            <span className="stat-label">Countries</span>
          </div>
        </div>
      </div>
    </section>
  );
}
