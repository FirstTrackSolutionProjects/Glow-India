import React from "react";

const Career = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 shadow-lg rounded-lg flex max-w-4xl w-full">
        {/* Form Section */}
        <div className="w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Apply Now</h2>
          <form className="space-y-4">
            <div className="flex space-x-2">
              <input type="text" placeholder="First Name *" className="w-1/2 p-2 border rounded" />
              <input type="text" placeholder="Last Name *" className="w-1/2 p-2 border rounded" />
            </div>
            <input type="email" placeholder="Email Address *" className="w-full p-2 border rounded" />
            <input type="text" placeholder="Contact No" className="w-full p-2 border rounded" />
            <div className="flex space-x-2">
              <input type="text" placeholder="City" className="w-1/2 p-2 border rounded" />
              <input type="text" placeholder="State/Province" className="w-1/2 p-2 border rounded" />
            </div>
            <input type="text" placeholder="ZIP / Postal Code" className="w-full p-2 border rounded" />
            <select className="w-full p-2 border rounded">
              <option>Highest Qualification</option>
              <option>10th</option>
              <option>12th</option>
              <option>Graduate</option>
              <option>Post Graduate</option>
            </select>
            <div className="border-dashed border-2 border-gray-400 p-4 rounded text-center">
              <p>Drag and Drop (or) <span className="text-blue-500 cursor-pointer">Choose Files</span></p>
            </div>
            <button className="bg-green-500 text-white py-2 px-4 rounded">APPLY NOW</button>
          </form>
        </div>

        {/* Image Section */}
       
      </div>
    </div>
  );
};

export default Career;
