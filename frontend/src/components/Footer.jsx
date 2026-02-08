export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Social Links at the top */}
        <div className="social-links text-center">
          <a href="https://x.com/AliMarzoug12" className="twitter" aria-label="Twitter">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="https://www.facebook.com/ali.marzoug.14" className="facebook" aria-label="Facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://www.instagram.com/ali__marzoug/" className="instagram" aria-label="Instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://github.com/alimarzoug12" className="github" aria-label="GitHub">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/ali-marzoug-b7a022209/" className="linkedin" aria-label="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

        <div className="footer-links">
          <p className="footer-bottom">Privacy Policy •</p> 
          <p className="footer-bottom">Terms •</p> 
          <p className="footer-bottom">Docs •</p>
          <p className="footer-bottom">Support</p>
        </div>

        <div className="footer-bottom">
          <p>© 2026 AliMarzoug Systems</p>
        </div>
      </div>
    </footer>
  );
}