import React from "react";

const TestimonialsPage = () => {
  const students = [
    { name: "Chidera Okafor", course: "Frontend Development", country: "Nigeria 🇳🇬", feedback: "YOU Discovery gave me the skills and confidence to land my first remote job." },
    { name: "Tolu Adebayo", course: "Data Science", country: "Nigeria 🇳🇬", feedback: "The cohort learning model made complex concepts easier with collaboration." },
    { name: "Amaka Eze", course: "UI/UX Design", country: "Nigeria 🇳🇬", feedback: "I loved the mentorship and real-world projects that built my portfolio." },
    { name: "Femi Johnson", course: "Cybersecurity", country: "Nigeria 🇳🇬", feedback: "Hands-on labs prepared me for real-world cybersecurity challenges." },
    { name: "Ngozi Umeh", course: "Digital Marketing", country: "Nigeria 🇳🇬", feedback: "I quickly transitioned into marketing at a startup thanks to YOU Discovery." },
    { name: "Kelechi Nwosu", course: "Backend Development", country: "Nigeria 🇳🇬", feedback: "The curriculum was industry-standard and helped me land an internship." },
    { name: "Fatima Bello", course: "AI & Machine Learning", country: "Nigeria 🇳🇬", feedback: "YOU Discovery made AI learning engaging and practical." },
    { name: "Moses Chukwu", course: "Product Management", country: "Nigeria 🇳🇬", feedback: "The cohort accountability structure helped me stay consistent." },
    { name: "Grace Adeyemi", course: "Business Analysis", country: "Nigeria 🇳🇬", feedback: "I secured a BA role immediately after completing the program." },
    { name: "Sipho Dlamini", course: "Cloud Engineering", country: "South Africa 🇿🇦", feedback: "The global exposure from YOU Discovery was outstanding, it gave me an edge." }
  ];

  const companies = [
    { name: "TechNova Inc.", feedback: "We hired 3 YOU Discovery graduates. Their problem-solving and teamwork blew us away." },
    { name: "FinEdge Ltd.", feedback: "The Data Science alumni we recruited are driving our analytics department forward." },
    { name: "InnoSoft Africa", feedback: "Reliable, job-ready candidates. YOU Discovery is our go-to partner for tech talent." },
  ];

  return (
    <div>
      {/* Header */}
      <section className="testimonials-header">
        <h1>What Our Students & Partners Say</h1>
        <p>Discover how YOU Discovery has transformed learners into professionals across Africa.</p>
      </section>

      {/* Student Testimonials */}
      <section className="testimonials-grid">
        {students.map((student, index) => (
          <div className="testimonial-card" key={index}>
            <h3>{student.name}</h3>
            <span>{student.course} · {student.country}</span>
            <p>"{student.feedback}"</p>
          </div>
        ))}
      </section>

      {/* Company Recommendations */}
      <section className="company-recs">
        <h2>Trusted by Employers</h2>
        <div className="company-logos">
          {companies.map((company, idx) => (
            <div className="company-card" key={idx}>
              <h4>{company.name}</h4>
              <p>"{company.feedback}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 YOU Discovery. All Rights Reserved.</p>
        <div className="socials">
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
          <a href="#">YouTube</a>
        </div>
      </footer>
    </div>
  );
};

export default TestimonialsPage;
