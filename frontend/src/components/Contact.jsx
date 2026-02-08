import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_xgtl531",
      "template_lzs4shq",
      formRef.current,
      "yABYDI74hgGKfGNMn"
    )
    .then(() => {
      alert("Message transmitted successfully 🚀");
      formRef.current.reset();
    })
    .catch(() => {
      alert("Transmission failed ❌ Try again.");
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

              <button type="submit" className="btn-primary btn-submit">
                Transmit Message
              </button>

            </form>

          </div>
        </div>
      </div>
    </section>
  );
}
