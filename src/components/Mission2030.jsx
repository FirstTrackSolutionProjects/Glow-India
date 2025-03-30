import React from "react";

export default function Mission2030() {
    return (
      <div className="max-w-6xl w-full mx-auto p-6 bg-gray-100 text-gray-900 mt-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Mission 2030</h1>
  
        <div className="grid md:grid-cols-2 gap-8">
         
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src="/assets/mission 1.jpg"
              alt="Building"
              className="w-full h-64 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-4">Cottage</h2>
            <p className="text-gray-600 mt-2">
              At Near Mandarabasta, 12km from Collector, Office Khurda, Odisha.
            </p>
          </div>
  
          
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="relative">
                      <img
              src="/assets/mission 2.jpg"
              alt="3BHK Apartment"
              className="w-full h-64 object-cover rounded"
                  />
            {/* SOLD OUT Tag */}
            <span className="absolute bottom-2 right-2 bg-red-600 text-white px-3 py-1 text-sm font-bold rounded">
              SOLD OUT
           </span>
          </div>
  
      <h2 className="text-xl font-semibold mt-4">2BHK, 3BHK, 4BHK Apartment</h2>
      <p className="text-gray-600 mt-2">
        Near Jammu Koli, Sundarpada, Bhubaneswar, Odisha.
      </p>
        </div>
        </div>
      </div>
    );
  }
  