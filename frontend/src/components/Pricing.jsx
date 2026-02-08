export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing-container">
        <div className="section-header">
          <h2 className="section-title">Access Levels</h2>
          <p className="section-subtitle">Choose your gateway</p>
        </div>

        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="plan-name">Initiate</div>
            <div className="plan-price">$49</div>
            <div className="plan-period">per neural link</div>
            <a href="#" className="btn-secondary">Enter System</a>
          </div>

          <div className="pricing-card featured">
            <div className="plan-name">Nexus</div>
            <div className="plan-price">$149</div>
            <a href="#" className="btn-primary">Jack In</a>
          </div>

          <div className="pricing-card">
            <div className="plan-name">Transcend</div>
            <div className="plan-price">$399</div>
            <a href="#" className="btn-secondary">Ascend</a>
          </div>
        </div>
      </div>
    </section>
  );
}
