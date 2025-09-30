import React from "react";

const AboutPage = () => {
  return (
    <div className="about-wrapper">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">YOU Hire</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about" className="active">About</a></li>
          <li><a href="/testimonials">Testimonials</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="about-hero">
        <h1>About YOU Discovery</h1>
        <p>
          YOU Discovery is an EdTech platform helping individuals learn 
          valuable skills at their own pace or through structured cohorts.  
          Our mission is to empower learners and connect them with real job opportunities.
        </p>
      </section>

      {/* Mission & Approach */}
      <section className="about-section">
        <div className="about-card">
          <h2>🎯 Our Mission</h2>
          <p>
            We aim to democratize education by making world-class courses 
            accessible, affordable, and practical for learners everywhere.
          </p>
        </div>
        <div className="about-card">
          <h2>👩‍🏫 How We Work</h2>
          <p>
            Students can learn <strong>individually</strong> at their own pace, 
            or join <strong>cohort-based programs</strong> with live mentorship, 
            accountability, and peer collaboration.
          </p>
        </div>
      </section>

      {/* Records / Impact */}
      <section className="records">
        <h2>Our Impact</h2>
        <div className="record-cards">
          <div className="record-card">
            <h3>400+</h3>
            <p>Learners trained</p>
          </div>
          <div className="record-card">
            <h3>50+</h3>
            <p>Courses offered</p>
          </div>
          <div className="record-card">
            <h3>500+</h3>
            <p>Students hired</p>
          </div>
          <div className="record-card">
            <h3>10+</h3>
            <p>Partner companies</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} YOU Discovery. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
