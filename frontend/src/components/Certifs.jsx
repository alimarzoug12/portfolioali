import { useState } from "react";

const certifs = [
  {
    title: "CONVOLUTIONAL NEURAL NETWORKS (CNN)",
    desc: "Deep learning techniques for image recognition, feature extraction, and computer vision systems.",
    provider: "DeepLearning.AI – Coursera",
    image: "/assets/img/cnn.png",
    link: "https://coursera.org/share/b13875cbef2eed6de390f45b0d561027"
  },
  {
    title: "TRANSFORMER-BASED NATURAL LANGUAGE PROCESSING",
    desc: "Implementation of transformer architectures for text understanding, language modeling, and NLP applications.",
    provider: "NVIDIA",
    image: "/assets/img/building-nvidia.png",
    link: "https://learn.nvidia.com/certificates?id=mmgFaQsMQnW_i_Xeqoiwfg#"
  },
  {
    title: "HASHGRAPH DEVELOPER COURSE",
    desc: "Development of decentralized applications using Hashgraph consensus and Hedera network infrastructure.",
    provider: "The Hashgraph Association / Hedera",
    image: "/assets/img/hashgraph.png",
    link: "https://hedera.com"
  },
  {
    title: "FUNDAMENTALS OF DEEP LEARNING",
    desc: "Core deep learning concepts including neural networks, backpropagation, and model optimization using modern frameworks.",
    provider: "NVIDIA",
    image: "/assets/img/fundamentals-nvidia.png",
    link: "https://learn.nvidia.com/certificates?id=q0OY-MHGS420B0f5_D9cGA#"
  },
  {
    title: "AI FOR ANOMALY DETECTION",
    desc: "Design and deployment of AI models to identify abnormal patterns in data for predictive monitoring and risk detection.",
    provider: "NVIDIA",
    image: "/assets/img/applications-nvidia.png",
    link: "https://learn.nvidia.com/certificates?id=7Q7DvqmHT4ucc-aNuKIdmQ"
  },
  {
    title: "ADOBE PHOTOSHOP",
    desc: "Advanced image editing, photo manipulation, and visual composition for digital and creative projects.",
    provider: "Adobe",
    image: "/assets/img/cnn.png",
    link: "https://adobe.com"
  },
  {
    title: "ADOBE ILLUSTRATOR",
    desc: "Vector-based graphic design for logos, branding systems, icons, and scalable illustrations.",
    provider: "Adobe",
    image: "/assets/img/cnn.png",
    link: "https://adobe.com"
  }
];

export default function Certifs() {
  const [activeCertif, setActiveCertif] = useState(null);

  return (
    <>
      <section className="features" id="certifs">
        <div className="features-container">
          <div className="section-header">
            <h2 className="section-title">Certifications</h2>
          </div>

          <div className="features-grid">
            {certifs.map((f, i) => (
              <div
                className="feature-card"
                key={i}
                onClick={() => setActiveCertif(f)}
                style={{ cursor: "pointer" }}
              >
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <p style={{ color: "#fff", fontSize: "0.85rem", opacity: 0.9 }}>
                  {f.provider}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeCertif && (
        <div style={overlayStyle} onClick={() => setActiveCertif(null)}>
          <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
            <h3>{activeCertif.title}</h3>

            <img
              src={activeCertif.image}
              alt={activeCertif.title}
              style={imageStyle}
            />

            <div style={{ marginTop: "1rem" }}>
              <button
                style={buttonStyle}
                onClick={() => window.open(activeCertif.link, "_blank")}
              >
                View Certificate
              </button>

              <button
                style={closeStyle}
                onClick={() => setActiveCertif(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const overlayStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.8)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000
};

const modalStyle = {
  background: "#0b0f1a",
  padding: "2rem",
  borderRadius: "12px",
  maxWidth: "600px",
  width: "90%",
  textAlign: "center"
};

const imageStyle = {
  width: "100%",
  borderRadius: "8px",
  margin: "1rem 0"
};

const buttonStyle = {
  background: "#00ffff",
  color: "#000",
  padding: "0.6rem 1.2rem",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  marginRight: "0.5rem"
};

const closeStyle = {
  background: "transparent",
  color: "#fff",
  border: "1px solid #555",
  padding: "0.6rem 1.2rem",
  borderRadius: "6px",
  cursor: "pointer"
};
