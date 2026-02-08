import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-container">
        <h1 className="hero-title">
          <span className="hero-nexus">ALI</span>
          <span className="hero-flow">MARZOUG</span>
        </h1>

        <p className="hero-subtitle">
          Data Science Engineering Student in Esprit
        </p>

        <div className="hero-buttons">
          <a href="#" className="btn-primary">Initialize System</a>
          {/* <Link to="/documentation" className="btn-secondary">
            View Documentation
          </Link> */}
          <a 
            href="http://localhost:3001" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}