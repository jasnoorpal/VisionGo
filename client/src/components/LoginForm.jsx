import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await login(form);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col items-center justify-center gap-8 text-xl font-medium"
    >
      <div className="w-full">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Enter your email"
          className="h-10 rounded-md w-full font-normal pl-4 mt-2 border border-gray-500 bg-gray-100"
        />
      </div>

      <div className="w-full">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="********"
          className="h-10 rounded-md w-full pl-4 mt-2 border border-gray-500 bg-gray-100"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-xl text-white rounded-sm py-1"
      >
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
