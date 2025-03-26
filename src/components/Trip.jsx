import React from "react";

const trips = [
    {
      image: "/path-to-image1.jpg",
      date: "March 15, 2025",
      location: "Mumbai, India"
    },
    {
      image: "/path-to-image2.jpg",
      date: "April 10, 2025",
      location: "Delhi, India"
    },
    {
      image: "/path-to-image3.jpg",
      date: "May 5, 2025",
      location: "Bangalore, India"
    }
  ];
  
  const Trip = () => {
    return (
      <div className="bg-gray-100 py-10 mt-5">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Glow India Trips</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {trips.map((trip, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <img src={trip.image} alt={`Trip to ${trip.location}`} className="w-full h-48 object-cover rounded-md" />
              <div className="mt-4 text-center">
                <p className="text-gray-600 text-sm">{trip.date}</p>
                <p className="text-gray-800 font-semibold">{trip.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Trip;