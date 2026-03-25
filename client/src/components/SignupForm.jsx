import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signup(form);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center gap-8 text-xl font-medium"
    >
      <div className="w-full">
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={handleChange}
          className="h-10 rounded-md w-full font-normal pl-4 mt-2 border border-gray-500 bg-gray-100"
        />
      </div>

      <div className="w-full">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
          className="h-10 rounded-md w-full font-normal pl-4 mt-2 border border-gray-500 bg-gray-100"
        />
      </div>

      <div className="w-full">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="********"
          onChange={handleChange}
          className="h-10 rounded-md w-full pl-4 mt-2 border border-gray-500 bg-gray-100"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-xl text-white rounded-sm py-1"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
