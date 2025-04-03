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
    resume: null, // State for resume file
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  return (
    <div className="max-w-3xl w-full mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-extrabold text-gray-800 text-center mb-6">
        Apply Now
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-md w-full"
          required
        />

        <select
          name="position"
          value={formData.position}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-md w-full col-span-1 md:col-span-2"
          required
        >
          <option value="">Select Position *</option>
          <option value="Client Relationship Officer">
            Client Relationship Officer
          </option>
          <option value="Relationship Manager">Relationship Manager</option>
          <option value="HR Executive">HR Executive</option>
          <option value="Telecaller">Telecaller</option>
        </select>

        <select
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-md w-full"
          required
        >
          <option value="">Select City *</option>
          <option value="Bhubaneswar">Bhubaneswar</option>
          <option value="Puri">Puri</option>
          <option value="Cuttack">Cuttack</option>
          <option value="Rourkela">Rourkela</option>
          <option value="Keonjhar">Keonjhar</option>
          <option value="Balasore">Balasore</option>
          <option value="Other">Other</option>
        </select>

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

        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-md w-full"
          required
        >
          <option value="">Select State *</option>
          <option value="Odisha">Odisha</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Other">Other</option>
        </select>

        {formData.state === "Other" && (
          <input
            type="text"
            name="otherState"
            placeholder="Enter Your State *"
            value={formData.otherState}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-md w-full"
            required
          />
        )}

        <input
          type="text"
          name="zip"
          placeholder="ZIP / Postal Code"
          value={formData.zip}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-md w-full"
        />

        {/*Resume Upload Field */}
         <div className="col-span-1 md:col-span-2">
          <label className="block text-gray-700 font-medium mb-1">
            Upload Resume *
          </label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="border border-gray-300 p-3 rounded-md w-full"
            required
          />
          {formData.resume && (
            <p className="text-sm text-gray-600 mt-2">
              Selected file: {formData.resume.name}
            </p>
          )}
        </div>
        
     

        <button className="w-full md:w-auto bg-emerald-800 hover:bg-rose-900 text-white font-semibold py-3 px-6 rounded-md col-span-1 md:col-span-2">
          APPLY NOW
        </button>
      </form>
    </div>
  );
};

export default Career;
