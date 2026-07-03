// import React, { useState } from "react";

// const Career = () => {
 
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     contactNo: "",
//     city: "",
//     state: "",
//     zip: "",
//     position: "",
//     gender: "",
//     dob: "",
//     resume: null,
//     otherCity: "",
//     otherState: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "dob") {
     
//       const formattedDate = value.split("-").reverse().join("-");
//       setFormData({ ...formData, dob: formattedDate });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, resume: e.target.files[0] });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     alert("Application submitted successfully!");
//   };

//   return (
//     <div className="max-w-3xl w-full mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-extrabold text-gray-800 text-center mb-6">
//         Apply Now
//       </h2>

//       <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* First Name */}
//         <label className="block text-gray-700 font-medium">First Name *</label>
//         <input
//           type="text"
//           name="firstName"
//           placeholder="First Name *"
//           value={formData.firstName}
//           onChange={handleChange}
//           className="border border-gray-300 p-3 rounded-md w-full"
//           required
//         />

//         {/* Last Name */}
//         <label className="block text-gray-700 font-medium">Last Name *</label>
//         <input
//           type="text"
//           name="lastName"
//           placeholder="Last Name *"
//           value={formData.lastName}
//           onChange={handleChange}
//           className="border border-gray-300 p-3 rounded-md w-full"
//           required
//         />

//         {/* Email */}
//         <label className="block text-gray-700 font-medium">Email *</label>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address *"
//           value={formData.email}
//           onChange={handleChange}
//           className="border border-gray-300 p-3 rounded-md w-full"
//           required
//         />

//         {/* Contact No */}
//         <label className="block text-gray-700 font-medium">Contact No. *</label>
//         <input
//           type="text"
//           name="contactNo"
//           placeholder="Contact No *"
//           value={formData.contactNo}
//           onChange={handleChange}
//           className="border border-gray-300 p-3 rounded-md w-full"
//           required
//         />

//         {/* Gender */}
//         <label className="block text-gray-700 font-medium">Gender *</label>
//         <select
//           name="gender"
//           value={formData.gender}
//           onChange={handleChange}
//           className="border border-gray-300 p-3 rounded-md w-full"
//           required
//         >
//           <option value="">Select Gender *</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//         </select>

//         {/* Date of Birth */}
//         <div className="col-span-1 md:col-span-2">
//           <label className="block text-gray-700 font-medium">Date of Birth *</label>
//           <input
//             type="date"
//             name="dob"
//             value={formData.dob.split("-").reverse().join("-")}
//             onChange={handleChange}
//             className="border border-gray-300 p-3 rounded-md w-full"
//             required
//           />
//         </div>

//         {/* Position */}
//         <label className="block text-gray-700 font-medium">Position *</label>
//         <select
//           name="position"
//           value={formData.position}
//           onChange={handleChange}
//           className="border border-gray-300 p-3 rounded-md w-full"
//           required
//         >
//           <option value="">Select Position *</option>
//           <option value="Client Relationship Officer">Client Relationship Officer</option>
//           <option value="Relationship Manager">Relationship Manager</option>
//           <option value="HR Executive">HR Executive</option>
//           <option value="Telecaller">Telecaller</option>
//         </select>

//         {/* City */}
//         <label className="block text-gray-700 font-medium">City *</label>
//         <select
//           name="city"
//           value={formData.city}
//           onChange={handleChange}
//           className="border border-gray-300 p-3 rounded-md w-full"
//           required
//         >
//           <option value="">Select City *</option>
//           <option value="Bhubaneswar">Bhubaneswar</option>
//           <option value="Puri">Puri</option>
//           <option value="Cuttack">Cuttack</option>
//           <option value="Rourkela">Rourkela</option>
//           <option value="Keonjhar">Keonjhar</option>
//           <option value="Balasore">Balasore</option>
//           <option value="Other">Other</option>
//         </select>

//         {formData.city === "Other" && (
//           <input
//             type="text"
//             name="otherCity"
//             placeholder="Enter Your City *"
//             value={formData.otherCity}
//             onChange={handleChange}
//             className="border border-gray-300 p-3 rounded-md w-full"
//             required
//           />
//         )}

//         {/* State */}
//         <label className="block text-gray-700 font-medium">State *</label>
//         <select
//           name="state"
//           value={formData.state}
//           onChange={handleChange}
//           className="border border-gray-300 p-3 rounded-md w-full"
//           required
//         >
//           <option value="">Select State *</option>
//           <option value="Odisha">Odisha</option>
//           <option value="Gujarat">Gujarat</option>
//           <option value="Tamil Nadu">Tamil Nadu</option>
//           <option value="Uttar Pradesh">Uttar Pradesh</option>
//           <option value="Rajasthan">Rajasthan</option>
//           <option value="Other">Other</option>
//         </select>

//         {formData.state === "Other" && (
//           <input
//             type="text"
//             name="otherState"
//             placeholder="Enter Your State *"
//             value={formData.otherState}
//             onChange={handleChange}
//             className="border border-gray-300 p-3 rounded-md w-full"
//             required
//           />
//         )}

//         {/* Resume Upload */}
//         <label className="block text-gray-700 font-medium">Upload Resume *</label>
//         <input
//           type="file"
//           name="resume"
//           accept=".pdf,.doc,.docx"
//           onChange={handleFileChange}
//           className="border border-gray-300 p-3 rounded-md w-full"
//           required
//         />

//         {/* Submit Button */}
//         <button type="submit" className="w-full bg-emerald-800 hover:bg-rose-900 text-white font-semibold py-3 px-6 rounded-md col-span-1 md:col-span-2">
//           APPLY NOW
//         </button>
//       </form>
       
//     </div>
//   );
// };

// export default Career;







import React, { useState } from "react";
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  BriefcaseIcon,
  CalendarDaysIcon,
  CloudArrowUpIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

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
    resume: null,
    otherCity: "",
    otherState: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "dob") {
      const formattedDate = value.split("-").reverse().join("-");
      setFormData({
        ...formData,
        dob: formattedDate,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Application Submitted Successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-100 py-16 px-5">

      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">

        <div className="grid lg:grid-cols-2">

          {/* LEFT SIDE */}

          <div className="bg-gradient-to-br from-emerald-700 via-emerald-800 to-green-900 text-white p-12 flex flex-col justify-center">

            <h1 className="text-5xl font-extrabold leading-tight">
              Join Our
              <br />
              Amazing Team
            </h1>

            <p className="mt-6 text-green-100 text-lg leading-8">
              We are always looking for passionate people who love
              innovation and want to build something meaningful.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-4">
                <CheckCircleIcon className="w-7 h-7 text-green-300" />
                <span className="text-lg">
                  Career Growth Opportunities
                </span>
              </div>

              <div className="flex items-center gap-4">
                <CheckCircleIcon className="w-7 h-7 text-green-300" />
                <span className="text-lg">
                  Friendly Working Environment
                </span>
              </div>

              <div className="flex items-center gap-4">
                <CheckCircleIcon className="w-7 h-7 text-green-300" />
                <span className="text-lg">
                  Flexible Work Culture
                </span>
              </div>

              <div className="flex items-center gap-4">
                <CheckCircleIcon className="w-7 h-7 text-green-300" />
                <span className="text-lg">
                  Learning & Development
                </span>
              </div>

            </div>

            <div className="mt-16 bg-white/10 backdrop-blur-md rounded-2xl p-6">

              <h3 className="text-2xl font-bold">
                Why Work With Us?
              </h3>

              <p className="mt-4 text-green-100 leading-7">
                Our company believes in empowering employees through
                continuous learning, teamwork, innovation, and career
                development. Join us and build your future.
              </p>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="p-10 md:p-14">

            <h2 className="text-4xl font-bold text-gray-800">
              Apply Now
            </h2>

            <p className="text-gray-500 mt-2">
              Fill in your details and start your journey with us.
            </p>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"
            >

              {/* PERSONAL INFORMATION */}

              <div className="md:col-span-2">
                <h3 className="text-xl font-bold text-emerald-700 border-b pb-2">
                  Personal Information
                </h3>
              </div>

              {/* FIRST NAME */}

              <div>

                <label className="font-semibold text-gray-700">
                  First Name
                </label>

                <div className="relative mt-2">

                  <UserIcon className="absolute w-5 h-5 left-4 top-4 text-gray-400" />

                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                  />

                </div>

              </div>

              {/* LAST NAME */}

              <div>

                <label className="font-semibold text-gray-700">
                  Last Name
                </label>

                <div className="relative mt-2">

                  <UserIcon className="absolute w-5 h-5 left-4 top-4 text-gray-400" />

                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                  />

                </div>

              </div>

              {/* EMAIL */}

              <div>

                <label className="font-semibold text-gray-700">
                  Email Address
                </label>

                <div className="relative mt-2">

                  <EnvelopeIcon className="absolute w-5 h-5 left-4 top-4 text-gray-400" />

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                  />

                </div>

              </div>

              {/* CONTACT */}

              <div>

                <label className="font-semibold text-gray-700">
                  Contact Number
                </label>

                <div className="relative mt-2">

                  <PhoneIcon className="absolute w-5 h-5 left-4 top-4 text-gray-400" />

                  <input
                    type="text"
                    name="contactNo"
                    placeholder="Enter Mobile Number"
                    value={formData.contactNo}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                  />

                </div>

              </div>

              {/* GENDER */}

              <div>

                <label className="font-semibold text-gray-700">
                  Gender
                </label>

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 py-3 px-4 border rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>

              </div>

              {/* DATE OF BIRTH */}

              <div>

                <label className="font-semibold text-gray-700">
                  Date of Birth
                </label>

                <div className="relative mt-2">

                  <CalendarDaysIcon className="absolute w-5 h-5 left-4 top-4 text-gray-400" />

                  <input
                    type="date"
                    name="dob"
                    value={formData.dob.split("-").reverse().join("-")}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                  />

                </div>

              </div>

                            {/* ================= JOB INFORMATION ================= */}

              <div className="md:col-span-2 mt-4">
                <h3 className="text-xl font-bold text-emerald-700 border-b pb-2">
                  Job Information
                </h3>
              </div>

              {/* POSITION */}

              <div className="md:col-span-2">

                <label className="font-semibold text-gray-700">
                  Position Applying For
                </label>

                <div className="relative mt-2">

                  <BriefcaseIcon className="absolute w-5 h-5 left-4 top-4 text-gray-400" />

                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                  >
                    <option value="">Select Position</option>
                    <option value="Client Relationship Officer">
                      Client Relationship Officer
                    </option>
                    <option value="Relationship Manager">
                      Relationship Manager
                    </option>
                    <option value="HR Executive">
                      HR Executive
                    </option>
                    <option value="Telecaller">
                      Telecaller
                    </option>
                  </select>

                </div>

              </div>

              {/* ================= ADDRESS ================= */}

              <div className="md:col-span-2 mt-4">
                <h3 className="text-xl font-bold text-emerald-700 border-b pb-2">
                  Address Details
                </h3>
              </div>

              {/* CITY */}

              <div>

                <label className="font-semibold text-gray-700">
                  City
                </label>

                <div className="relative mt-2">

                  <MapPinIcon className="absolute w-5 h-5 left-4 top-4 text-gray-400" />

                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                  >
                    <option value="">Select City</option>
                    <option>Bhubaneswar</option>
                    <option>Puri</option>
                    <option>Cuttack</option>
                    <option>Rourkela</option>
                    <option>Keonjhar</option>
                    <option>Balasore</option>
                    <option>Other</option>
                  </select>

                </div>

              </div>

              {/* STATE */}

              <div>

                <label className="font-semibold text-gray-700">
                  State
                </label>

                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 py-3 px-4 border rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                >
                  <option value="">Select State</option>
                  <option>Odisha</option>
                  <option>Gujarat</option>
                  <option>Tamil Nadu</option>
                  <option>Rajasthan</option>
                  <option>Uttar Pradesh</option>
                  <option>Other</option>
                </select>

              </div>

              {/* OTHER CITY */}

              {formData.city === "Other" && (

                <div>

                  <label className="font-semibold text-gray-700">
                    Enter Your City
                  </label>

                  <input
                    type="text"
                    name="otherCity"
                    value={formData.otherCity}
                    onChange={handleChange}
                    required
                    className="w-full mt-2 py-3 px-4 border rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                  />

                </div>

              )}

              {/* OTHER STATE */}

              {formData.state === "Other" && (

                <div>

                  <label className="font-semibold text-gray-700">
                    Enter Your State
                  </label>

                  <input
                    type="text"
                    name="otherState"
                    value={formData.otherState}
                    onChange={handleChange}
                    required
                    className="w-full mt-2 py-3 px-4 border rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                  />

                </div>

              )}

              {/* ZIP */}

              <div>

                <label className="font-semibold text-gray-700">
                  ZIP Code
                </label>

                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  placeholder="Enter ZIP Code"
                  className="w-full mt-2 py-3 px-4 border rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                />

              </div>

              {/* ================= RESUME ================= */}

              <div className="md:col-span-2 mt-4">

                <label className="font-semibold text-gray-700">
                  Upload Resume
                </label>

                <div className="mt-3 border-2 border-dashed border-emerald-400 rounded-2xl p-8 bg-emerald-50 hover:bg-emerald-100 transition duration-300">

                  <div className="flex flex-col items-center">

                    <CloudArrowUpIcon className="w-16 h-16 text-emerald-600" />

                    <h3 className="text-lg font-bold mt-3">
                      Upload Your Resume
                    </h3>

                    <p className="text-gray-500 text-center mt-2">
                      PDF, DOC or DOCX (Maximum 5MB)
                    </p>

                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                      className="mt-5"
                    />

                    {formData.resume && (

                      <p className="mt-4 text-emerald-700 font-semibold">
                        {formData.resume.name}
                      </p>

                    )}

                  </div>

                </div>

              </div>

              {/* SUBMIT BUTTON */}

              <div className="md:col-span-2 mt-6">

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-green-700 text-white font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                >
                  Apply Now →
                </button>

              </div>

            </form>

          </div>

        </div>

      </div>

    </div>

  );
};

export default Career;