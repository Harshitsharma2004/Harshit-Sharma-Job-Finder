import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegisterForm() {
  // State to store form values
  const [userType, setUserType] = useState("candidate"); // Default user type is 'candidate'
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    candidateName: ""
  });

  // State to store the error message
  const [error, setError] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }

    // Clear error message if passwords match
    setError("");

    // Proceed with form submission logic
    console.log("Form submitted:", formData);
    alert(`Registered as ${userType}: ${userType === "candidate" ? formData.candidateName : formData.companyName}`);
  };

  return (
    <div className="max-w-md mx-auto p-4  bg-gray-800 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-white">Register</h1>

      {/* User Type Selection */}
      <div className="mb-4">
        <label className="mr-4 font-semibold text-white">I am a:</label>
        <label className="mr-4 text-white">
          <input
            type="radio"
            value="candidate"
            checked={userType === "candidate"}
            onChange={() => setUserType("candidate")}
          />
          Candidate
        </label>
        <label className=" text-white">
          <input
            type="radio"
            value="employer"
            checked={userType === "employer"}
            onChange={() => setUserType("employer")}
          />
          Employer
        </label>
      </div>

      {/* Registration Form */}
      <form onSubmit={handleSubmit}>
        {userType === "candidate" ? (
          // Candidate Form
          <div className="mb-4">
            <label className="block mb-2 text-white">
              Candidate Name<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="candidateName"
              value={formData.candidateName}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter candidate name"
              required
            />
          </div>
        ) : (
          // Employer Form
          <div className="mb-4">
            <label className="block mb-2 text-white">
              Company Name<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter company name"
              required
            />
          </div>
        )}

        {/* Common Fields */}
        <div className="mb-4">
          <label className="block mb-2 text-white">
            Username<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter username"
            required
          />
        </div>

        <div className="mb-4 text-white">
          <label className="block mb-2">
            Password<span className="text-red-600">*</span>
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter password"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-white">
            Confirm Password<span className="text-red-600">*</span>
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Confirm your password"
            required
          />
        </div>

        {/* Error Message */}
        {error && <p className="text-red-600 mb-4">{error}</p>}

        <div>
        <h2 className="text-center text-sm text-white">
          🧑🏻‍💻 Already Registered?{" "}
          <Link to="/login" className="text-blue-600">
            <u>Login</u>
          </Link>
        </h2>
      </div>
        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded my-3">
          Register
        </button>
      </form>

      
    </div>
  );
}

export default RegisterForm;
