import React from "react";

const Career = () => {
  return (
    <div className="max-w-3xl w-full mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Apply Now</h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
       
        <input
          type="text"
          placeholder="First Name *"
          className="border border-gray-300 p-3 rounded-md w-full"
        />
        <input
          type="text"
          placeholder="Last Name *"
          className="border border-gray-300 p-3 rounded-md w-full"
        />

       
        <input
          type="email"
          placeholder="Email Address *"
          className="border border-gray-300 p-3 rounded-md w-full col-span-1 md:col-span-2"
        />
        <input
          type="text"
          placeholder="Contact No"
          className="border border-gray-300 p-3 rounded-md w-full col-span-1 md:col-span-2"
        />

        
        <input
          type="text"
          placeholder="City"
          className="border border-gray-300 p-3 rounded-md w-full"
        />
        <input
          type="text"
          placeholder="State/Province"
          className="border border-gray-300 p-3 rounded-md w-full"
        />

       
        <input
          type="text"
          placeholder="ZIP / Postal Code"
          className="border border-gray-300 p-3 rounded-md w-full col-span-1 md:col-span-2"
        />

       
        {/* <select className="border border-gray-300 p-3 rounded-md w-full col-span-1 md:col-span-2">
          <option>Highest Qualification</option>
          <option>Bachelor's Degree</option>
          <option>Master's Degree</option>
          <option>PhD</option>
        </select> */}

       
        {/* <div className="border-2 border-dashed border-gray-400 p-4 rounded-md text-center col-span-1 md:col-span-2">
          <p className="text-gray-500">Drag and Drop (or) <span className="text-blue-600 cursor-pointer">Choose Files</span></p>
        </div> */}

        
        <button className="w-full md:w-auto bg-emerald-800 hover:bg-rose-900 text-white font-semibold py-3 px-6 rounded-md col-span-1 md:col-span-2">
          APPLY NOW
        </button>
      </form>
    </div>
  );
};

export default Career;
