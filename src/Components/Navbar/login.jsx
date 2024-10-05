import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  // State to store form values
  const [userType, setUserType] = useState("candidate"); // Default user type is 'candidate'
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    companyName: "",
    candidateName: ""
  });

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
    console.log("Form submitted:", formData);
    alert(`Logged in as ${userType}: ${userType === "candidate" ? formData.candidateName : formData.companyName}`);
    // Perform login logic (e.g., API call)
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-800  shadow-md rounded-lg justify-center items-center">
      <h1 className="text-2xl font-bold mb-4 text-white">Login</h1>

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

      {/* Login Form */}
      <form onSubmit={handleSubmit}>
        {userType === "candidate" ? (
          // Candidate Form
          <div className="mb-4">
            <label className="block mb-2 text-white">Candidate Name<span className="text-red-600">*</span></label>
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
            <label className="block mb-2 text-white">Company Name<span className="text-red-600">*</span></label>
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
          <label className="block mb-2 text-white">Username<span className="text-red-600">*</span></label>
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

        <div className="mb-4">
          <label className="block mb-2 text-white">Password<span className="text-red-600">*</span></label>
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
        <div>
            <h2 className="text-center text-sm text-white">🧑🏻‍💻 New User? <Link to="/register" className="text-blue-600"><u>SignUp</u></Link></h2>
        </div>
        <div>
            <h2 className="text-center text-sm text-white">🔑 Forget Password? <Link to="/forget" className="text-blue-600"><u>Reset Password</u></Link></h2>
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded my-3">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
