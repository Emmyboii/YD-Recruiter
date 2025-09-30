import React from "react";

const ContactPage = () => {
  return (
    <div className="contact-wrapper">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">YOU Hire</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/testimonials">Testimonials</a></li>
          <li><a href="/contact" className="active">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you. Get in touch with our team for support, partnerships, or inquiries.</p>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-details">
          <h2>Our Office</h2>
          <p>📍 Lagos, Nigeria</p>
          <p>📞 +234 800 123 4567</p>
          <p>✉️ support@youhire.com</p>

          <div className="social-links">
            <a href="#">LinkedIn</a>
            <a href="#">YouTube</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} YOU Hire. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;
