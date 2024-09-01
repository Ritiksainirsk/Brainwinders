import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate()

  // State variables to hold the input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct the payload to send to the backend
    const payload = {
      email,
      password,
    };

    try {
      // Send a POST request to the backend API
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Parse the response
      const data = await response.json();
        // Store data in localStorage (if necessary)
        localStorage.setItem("jwt", data.token);

      if (response.ok) {
        // Handle successful signup (e.g., redirect or show success message)

        navigate('/admin')
        alert("Log in successful!");
      } else {
        // Handle errors (e.g., show error message)
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during signup.");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      // If the user is already authenticated, redirect them to the dashboard
      navigate("/admin");
    }
  }, [navigate]);



  return (
    <div className="flex justify-center py-7">
    <div className="flex flex-col items-center justify-center p-8 bg-white md:shadow-2xl rounded-xl w-full max-w-sm md:border-2">
      <div className="bg-gradient-to-b from-gray-100 to-gray-300 border border-gray-300 shadow-inner rounded-full w-20 h-20 flex items-center justify-center">
        <img
          src="https://www.brainwonders.in/images/fevicon.png"
          alt="Logo"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-2 mt-6">
        <span className="text-sm text-center text-gray-500 max-w-xs leading-snug">
          Log in to your account to continue enjoying our services.
        </span>
      </div>

      <form onSubmit={handleSubmit} className="w-full mt-8 space-y-4">

        <div>
          <label
            className="block text-xs font-semibold text-gray-600"
            htmlFor="email_field"
          >
            Email
          </label>
          <div className="relative mt-1">
            <svg
              className="absolute w-5 h-5 left-3 bottom-2.5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M16 12V8a4 4 0 10-8 0v4M5 12h14M12 15v1m0 4h.01M9.01 20h6M8 17h8"
              />
            </svg>
            <input
              type="email"
              id="email_field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              placeholder="Enter your Email"
            />
          </div>
        </div>

        <div>
          <label
            className="block text-xs font-semibold text-gray-600"
            htmlFor="password_field"
          >
            Password
          </label>
          <div className="relative mt-1">
            <svg
              className="absolute w-5 h-5 left-3 bottom-2.5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 11V17"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M8 17H16V15.5C16 13.0156 14.0981 11 12 11C9.90192 11 8 13.0156 8 15.5V17ZM5.5 7C5.5 5.61929 6.61929 4.5 8 4.5H16C17.3807 4.5 18.5 5.61929 18.5 7V9C18.5 10.3807 17.3807 11.5 16 11.5H8C6.61929 11.5 5.5 10.3807 5.5 9V7Z"
              />
            </svg>
            <input
              type="password"
              id="password_field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              placeholder="Enter your password"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full h-12 mt-6 bg-black hover:bg-[#000000c0] text-white rounded-lg font-semibold shadow-md transition-colors duration-300"
        >
          Log In
        </button>
      </form>

      <div className="w-full mt-4 flex items-center justify-center gap-4 text-gray-500">
        <hr className="flex-grow border-gray-300" />
        <span className="text-sm">or</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      <button className="w-full h-12 mt-4 flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-800 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300">
        <svg
          className="w-5 h-5 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M22.47 10.47a1 1 0 00-.62-.87L14 7.41V5a2 2 0 10-4 0v2.41l-7.85 2.19a1 1 0 00-.63.87v1.02a1 1 0 00.63.87L10 13.59V15a2 2 0 004 0v-1.41l7.85-2.19a1 1 0 00.62-.87v-1.02z"
          />
        </svg>
        Sign in with Google
      </button>

      <button className="w-full h-12 mt-2 flex items-center justify-center gap-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-900 transition-colors duration-300">
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M22.47 10.47a1 1 0 00-.62-.87L14 7.41V5a2 2 0 10-4 0v2.41l-7.85 2.19a1 1 0 00-.63.87v1.02a1 1 0 00.63.87L10 13.59V15a2 2 0 004 0v-1.41l7.85-2.19a1 1 0 00.62-.87v-1.02z"
          />
        </svg>
        Sign in with Apple
      </button>

      <p className="text-sm mt-6 text-gray-500">
        Don't have an account? 
        <Link to="/admin/signup" className="text-blue-600 hover:underline">
           Sign Up
        </Link>
      </p>
    </div>
  </div>
  );
}
