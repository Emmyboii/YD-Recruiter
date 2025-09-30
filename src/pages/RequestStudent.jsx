import React, { useState } from "react";


export default function RequestStudent() {
  const [request, setRequest] = useState({
    course: "",
    quantity: 1,
    requirements: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRequest({ ...request, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Student request submitted:", request);
    alert("✅ Request sent successfully!");
  };

  return (
    <div className="request-student">
      <h1>🧑‍🎓 Request Students</h1>
      <form onSubmit={handleSubmit} className="request-form">
        <label>Course</label>
        <select
          name="course"
          value={request.course}
          onChange={handleChange}
          required
        >
          <option value="">-- Select a Course --</option>
          <option value="Frontend Development">Frontend Development</option>
          <option value="Backend Development">Backend Development</option>
          <option value="Data Science">Data Science</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="Cybersecurity">Cybersecurity</option>
        </select>

        <label>Number of Students</label>
        <input
          type="number"
          name="quantity"
          min="1"
          value={request.quantity}
          onChange={handleChange}
        />

        <label>Extra Requirements</label>
        <textarea
          name="requirements"
          placeholder="E.g., must know React, 6 months experience..."
          value={request.requirements}
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="submit-btn">
          🚀 Send Request
        </button>
      </form>
    </div>
  );
}
