import React, { useState } from "react";

const Career = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    city: "",
    state: "",
    zip: "",
    position: "",
    gender: "",
    dob: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-3xl w-full mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-extrabold text-gray-800 text-center mb-6">Apply Now</h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Name & Last Name */}
        <input
          type="text"
          name="firstName"
          placeholder="First Name *"
          value={formData.firstName}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-md w-full"
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name *"
          value={formData.lastName}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-md w-full"
          required
        />

        {/* Email & Contact No */}
        <input
          type="email"
          name="email"
          placeholder="Email Address *"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-md w-full col-span-1 md:col-span-2"
          required
        />
        <input
          type="text"
          name="contactNo"
          placeholder="Contact No *"
          value={formData.contactNo}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-md w-full col-span-1 md:col-span-2"
          required
        />

        {/* Gender Selection */}
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-md w-full"
          required
        >
          <option value="">Select Gender *</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
         
        </select>

        {/* Date of Birth */}
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-md w-full"
          required
        />

        {/* Job Position Selection */}
        <select
          name="position"
          value={formData.position}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-md w-full col-span-1 md:col-span-2"
          required
        >
          <option value="">Select Position *</option>
          <option value="Client Relationship Officer">Client Relationship Officer</option>
          <option value="Relationship Manager">Relationship Manager</option>
          <option value="HR Executive">HR Executive</option>
          <option value="Telecaller">Telecaller</option>
        </select>

        {/* City Selection */}
        <select
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-md w-full"
          required
        >
          <option value="">Select City *</option>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Chicago">Chicago</option>
          <option value="Houston">Houston</option>
          <option value="Miami">Miami</option>
          <option value="Other">Other</option>
        </select>

          {/* If "Other" is selected, show input field */}
          {formData.city === "Other" && (
          <input
            type="text"
            name="otherCity"
            placeholder="Enter Your City *"
            value={formData.otherCity}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-md w-full"
            required
          />
        )}


        {/* ZIP Code */}
        <input
          type="text"
          name="zip"
          placeholder="ZIP / Postal Code"
          value={formData.zip}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-md w-full"
        />

        {/* Submit Button */}
        <button className="w-full md:w-auto bg-emerald-800 hover:bg-rose-900 text-white font-semibold py-3 px-6 rounded-md col-span-1 md:col-span-2">
          APPLY NOW
        </button>
      </form>
    </div>
  );
};

export default Career;
