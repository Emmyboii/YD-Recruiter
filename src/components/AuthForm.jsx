// src/components/AuthForm.jsx
import { useState } from 'react';

export default function AuthForm({ type, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow-md w-full max-w-md"
    >
      <h2 className="text-3xl font-bold text-neonPurple mb-6 text-center">
        {type === 'login' ? 'Recruiter Sign In' : 'Recruiter Register'}
      </h2>

      {type === 'register' && (
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
          className="w-full mb-3 px-4 py-2 border border-neonPurple rounded focus:outline-none focus:ring-2 focus:ring-neonPurple"
        />
      )}

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
        className="w-full mb-3 px-4 py-2 border border-neonPurple rounded focus:outline-none focus:ring-2 focus:ring-neonPurple"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required
        className="w-full mb-5 px-4 py-2 border border-neonPurple rounded focus:outline-none focus:ring-2 focus:ring-neonPurple"
      />

      <button
        type="submit"
        className="w-full bg-neonPurple hover:bg-neonPurpleHover text-white py-2 rounded font-semibold"
      >
        {type === 'login' ? 'Sign In' : 'Register'}
      </button>
    </form>
  );
}
