
/* Keep features, footer, and socials as before */
import React from "react";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">YOU Hire</div>
        <ul className="nav-links">
          <li>Products</li>
          <li>Testimonials</li>
          <li>Our Records</li>
        </ul>
        <button className="cta-button">Request Demo</button>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-text">
          <h1>Hire Top Students Effortlessly</h1>
          <p>
            Connecting recruiters with talented graduates across multiple fields.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">Request Students</button>
            <button className="secondary-btn">Post a Job</button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <h3>🎯 Organized brilliance</h3>
          <p>
            Manage job postings and student requests with ease using categories
            and filters.
          </p>
        </div>
        <div className="feature-card">
          <h3>💡 24/7 Recruiter Support</h3>
          <p>
            We’re dedicated to ensuring a seamless experience for all recruiters.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-section">
          <h2 className="logo">YOU Hire</h2>
          <p>📍 Lagos, Nigeria</p>
          <p>📞 +234 800 123 4567</p>
          <p>✉️ support@youhire.com</p>
        </div>
        <div className="footer-section">
          <h4>Use Cases</h4>
          <p>Recruiters</p>
          <p>Employers</p>
          <p>Students</p>
        </div>
        <div className="footer-section">
          <h4>Products</h4>
          <p>Student Database</p>
          <p>Job Postings</p>
          <p>Hiring Dashboard</p>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <p>About</p>
          <p>Contact Us</p>
          <p>Legal</p>
        </div>
      </footer>

      {/* Socials */}
      <div className="socials">
        <p>
          🌐 LinkedIn — YOU Hire | 📺 YouTube — @YOUHire | 🐦 Twitter — @YOUHire
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
