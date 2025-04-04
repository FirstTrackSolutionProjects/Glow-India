import React, { useState } from "react";

const JoinUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    postAppliedFor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Application submitted successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md md:max-w-3xl">
        <h2 className="text-2xl font-bold text-gray-800 text-center m-6">
          Join Us
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <input
            type="text"
            name="firstName"
            placeholder="First Name *"
            required
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name *"
            required
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            required
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone *"
            required
            pattern="[0-9]{10}"
            maxLength="10"
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
          <input
            type="text"
            name="streetAddress"
            placeholder="Street Address *"
            required
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md w-full col-span-1 md:col-span-2"
          />
          <input
            type="text"
            name="city"
            placeholder="City *"
            required
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
          <input
            type="text"
            name="state"
            placeholder="State *"
            required
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code *"
            required
            pattern="[0-9]{6}"
            maxLength="6"
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
          
          <textarea
            name="postAppliedFor"
            placeholder="Post Applied For"
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md w-full col-span-1 md:col-span-2"
          />

          <button
            type="submit"
            className="w-full bg-teal-600 text-white font-semibold py-3 px-6 rounded-md col-span-1 md:col-span-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinUs;
