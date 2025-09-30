import React, { useState } from "react";

export default function PostJob() {
  const [job, setJob] = useState({
    title: "",
    category: "",
    location: "",
    salary: "",
    description: "",
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Job posted successfully!");
    console.log(job);
    // Later: Send to backend API
  };

  return (
    <div className="post-job-container">
      <h1>Post a New Job</h1>
      <form onSubmit={handleSubmit} className="post-job-form">
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={job.title}
          onChange={handleChange}
          required
        />
        <select
          name="category"
          value={job.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Job Category</option>
          <option>Web Development</option>
          <option>Data Science</option>
          <option>UI/UX Design</option>
          <option>Digital Marketing</option>
          <option>Cybersecurity</option>
        </select>
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={job.location}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="salary"
          placeholder="Salary Range"
          value={job.salary}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Job Description"
          value={job.description}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="cta">Post Job</button>
      </form>
    </div>
  );
}
