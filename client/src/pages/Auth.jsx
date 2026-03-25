import { Compass } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import { useAuth } from "../context/AuthContext";

const Auth = () => {
  const { pageType: paramPageType } = useParams();
  const navigate = useNavigate();

  // const { user } = useAuth();
  // if (user) {
  //   return <Navigate to="/dashboard" />;
  // }

  const [pageType, setPageType] = useState(paramPageType || "login");

  useEffect(() => {
    if (paramPageType) {
      setPageType(paramPageType);
    }
  }, [paramPageType]);

  const changeToLogin = () => {
    setPageType("login");
    navigate("/auth/login");
  };

  const changeToSignup = () => {
    setPageType("signup");
    navigate("/auth/signup");
  };

  return (
    <main className="h-screen w-screen bg-gray-100 flex flex-col items-center justify-center gap-4">
      <span className="bg-blue-600 p-4 rounded-xl">
        <Compass size={50} color="white" />
      </span>

      <span className="text-3xl font-bold">Welcome to Vision Go</span>
      <span className="text-[1.1rem] text-gray-600 font-medium">
        Your journey starts here.
      </span>

      <div className="flex flex-col min-h-[400px] max-h-[600px] shadow-sm p-8 rounded-2xl bg-white">
        <div className="flex h-14 w-[500px] bg-gray-200 rounded-xl p-1 mb-8">
          <button
            onClick={changeToLogin}
            className={`h-full w-1/2 font-semibold rounded-lg ${
              pageType === "login" ? "bg-gray-100" : "text-gray-500"
            }`}
          >
            Login
          </button>

          <button
            onClick={changeToSignup}
            className={`h-full w-1/2 font-semibold rounded-lg ${
              pageType === "signup" ? "bg-gray-100" : "text-gray-500"
            }`}
          >
            Register
          </button>
        </div>

        {pageType === "login" ? <LoginForm /> : <SignupForm />}
      </div>
    </main>
  );
};

export default Auth;
