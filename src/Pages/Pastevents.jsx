import React from "react";

const pastEvents = [
    {
      title: "26th Training Meeting - Malaysia",
      date: "24th Oct to 29th Oct 2024",
      image: "/assets/trip-2.jpg",
      description: "A successful training meeting in Malaysia with achievers from across India."
    },
    {
        title: "22nd Achievers Meet - PATTAYA City - Thailand",
        date: " 29th sep to 4th oct 2023",
        image: "/event-1.jpg",
        description: "Total 30 no's Participated."
    },
    {
        title: "Bangkok Trip",
        date: "12th feb 2024",
        image: "/event-2.jpg",
        description: "Total 45 no's Participated."
    },
    {
        title: "Janmmu Kashmir Trip",
        date: "juiy 8th to 14th july 2024",
        image: "/event-3.jpg",
        description: "Total 25 no's Participated."
    }
  ];

  const PastEventsPage = () => {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Past Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pastEvents.map((event, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img src={event.image} alt={event.title} className="w-full h-64 object-cover rounded-lg" />
              <h2 className="text-xl font-semibold mt-4">{event.title}</h2>
              <p className="text-gray-600">{event.date}</p>
              <p className="mt-2 text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  export default PastEventsPage;
  