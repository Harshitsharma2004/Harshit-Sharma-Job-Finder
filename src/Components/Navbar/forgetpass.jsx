import React, { useState } from "react";

function PassChangeForm() {
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
    <div className="max-w-md mx-auto p-4 bg-gray-800 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-white">Forget Password</h1>
    <form>
        {/* Common Fields */}
        <div className="mb-4">
          <label className="block mb-2 text-white">New Password<span className="text-red-600">*</span></label>
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
          <label className="block mb-2 text-white">Confirm New Password<span className="text-red-600">*</span></label>
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

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded my-3">
          Change Password
        </button>
      </form>
    </div>
  );
}

export default PassChangeForm;
