import React from "react";

const upcomingEvents = [
  {
    title: "28th Training Program Trip GANGTOK ",
    // date: "15th May to 20th May 2025",
    image: "/ue-1.jpg",
    location:"MG Marg, Gangtok, West Bengal"
  },
  {
    title: " 28th Training Program Trip DARJEELING",
    // date: "15th May to 20th May 2025",
    image: "/ue-2.jpg",
    location: "Mall Road, Darjeeling, West Bengal"
  },
  {
    title: "29th Training Program Trip KRAZZY TASHKENT",
    // date: "15th May to 20th May 2025",
    image: "/ue-3.jpg",
     location: "KRAZZY TASHKENT"
  }
 
];

const UpcomingEventsPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mt-12 mb-6">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {upcomingEvents.map((event, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img src={event.image} alt={event.title} className="w-full h-70 object-cover rounded-lg" />
            <h2 className="text-xl font-semibold mt-4">{event.title}</h2>
            {/* <p className="text-gray-600">{event.date}</p> */}
            <p className="mt-2 text-gray-700">{event.location}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEventsPage ;
