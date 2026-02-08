export default function Background() {
  return (
    <>
      <div className="cyber-bg">
        <div className="cyber-gradient"></div>
        <div className="matrix-rain" id="matrixRain"></div>
      </div>
        
      <div className="particles" id="particlesContainer"></div>
      <div className="data-streams" id="dataStreams"></div>

      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>

      <div className="grid-overlay">
        <div className="grid-lines"></div>
        <div className="grid-glow"></div>
      </div>

      <div className="scanlines"></div>
      <div className="noise-overlay"></div>
    </>
  );
}
