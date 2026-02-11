import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    console.log("Sending email...");
    console.log("Service ID:", "service_xgtl531");
    console.log("Template ID:", "template_lzs4shq");
    console.log("Public Key:", "yABYDI74hgGKfGNMn");

    emailjs
      .sendForm(
        "service_xgtl531",
        "template_lzs4shq",
        formRef.current,
        "yABYDI74hgGKfGNMn"
      )
      .then((result) => {
        console.log("SUCCESS!", result);
        setStatus("sent");
        formRef.current.reset();
        setTimeout(() => setStatus("idle"), 3000);
      })
      .catch((error) => {
        console.error("FAILED...", error);
        console.error("Error details:", {
          message: error.message,
          text: error.text,
          status: error.status,
          response: error.response
        });
        
        setStatus("error");
        
        // Show specific error message
        if (error.text) {
          setErrorMessage(error.text);
        } else if (error.message) {
          setErrorMessage(error.message);
        } else {
          setErrorMessage("Failed to send message. Check console for details.");
        }
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-wrapper">
          <div className="contact-card">

            <div className="section-header">
              <h2 className="section-title">Initialize Contact</h2>
            </div>

            <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
              
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="from_name"
                  className="form-input"
                  placeholder="Enter your designation"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="from_email"
                  className="form-input"
                  placeholder="your.id@gmail.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>Transmission</label>
                <textarea
                  name="message"
                  className="form-textarea"
                  rows="5"
                  placeholder="Compose your message to the network..."
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-primary btn-submit"
                disabled={status === "sending"}
              >
                {status === "idle" && "Transmit Message"}
                {status === "sending" && "Sending…"}
                {status === "sent" && "Message Sent ✓"}
                {status === "error" && "Failed — Try Again"}
              </button>
              
              {status === "error" && errorMessage && (
                <div style={{
                  marginTop: "20px",
                  padding: "15px",
                  background: "rgba(255, 0, 0, 0.1)",
                  border: "1px solid #ff0000",
                  borderRadius: "8px",
                  color: "#ff6b6b",
                  textAlign: "center"
                }}>
                  <strong>Error:</strong> {errorMessage}
                </div>
              )}

            </form>

          </div>
        </div>
      </div>
    </section>
  );
}