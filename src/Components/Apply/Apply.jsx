import React, { useState } from "react";
import { Link } from "react-router-dom";

function ApplyForm() {
  // State to store form values
  const [formData, setFormData] = useState({
    candidateName: "",
    email: "",
    contact: "",
    experience: "",
    cv: ""
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

    // Proceed with form submission logic
    alert(`Thank you for submitting!`);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-800 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-white">Apply</h1>

      {/* Apply Form */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-white">
            Name<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="candidateName"
            value={formData.candidateName}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter Full name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-white">
            Email<span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter Email"
            required
          />
        </div>

        {/* Common Fields */}
        <div className="mb-4">
          <label className="block mb-2 text-white">
            Contact No.<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter Contact No."
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-white">
            Experience (If no experience, type "Fresher")<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter Your Experience"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-white">
            Upload CV<span className="text-red-600">*</span>
          </label>
          <input
            type="file"
            name="cv"
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded text-white"
            placeholder="Select Your CV"
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
          Apply
        </button>
      </form>
    </div>
  );
}

export default ApplyForm;
