// import React from "react";

// const upcomingEvents = [
//   // {
//   //   title: "28th Training Program Trip GANGTOK ",
//   //   // date: "15th May to 20th May 2025",
//   //   image: "/ue-1.jpg",
//   //   location:"MG Marg, Gangtok, West Bengal"
//   // },
//   // {
//   //   title: " 28th Training Program Trip DARJEELING",
//   //   // date: "15th May to 20th May 2025",
//   //   image: "/ue-2.jpg",
//   //   location: "Mall Road, Darjeeling, West Bengal"
//   // },
//   {
//     title: "Our Next 29th Training Program - Thailand On 12th May 2025 - Trip 4 Nights 4 Days",
//     // date: "15th May to 20th May 2025",
//     image: "/ue-3.jpg",
//      location: "Thailand"
//   }
 
// ];

// const UpcomingEventsPage = () => {
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-center text-gray-800 mt-12 mb-6">Upcoming Events</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {upcomingEvents.map((event, index) => (
//           <div key={index} className="bg-white p-4 rounded-lg shadow-md">
//             <img src={event.image} alt={event.title} className="w-full h-70 object-cover rounded-lg" />
//             <h2 className="text-xl font-semibold mt-4">{event.title}</h2>
//             {/* <p className="text-gray-600">{event.date}</p> */}
//             <p className="mt-2 text-gray-700">{event.location}</p>
            
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UpcomingEventsPage ;




import React from "react";

const upcomingEvents = [
  {
    title: "29th Training Program - Thailand",
    date: "12 May 2025",
    image: "/ue-3.jpg",
    location: "Thailand",
    description:
      "Join our 4 Nights & 4 Days international training program with business sessions, sightseeing and networking opportunities.",
  },
];

const UpcomingEventsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">

      {/* Heading */}
      <div className="text-center mb-10 mt-10">
        <h1 className="text-4xl font-bold text-blue-900">
          Upcoming Events
        </h1>
        <p className="text-gray-600 mt-2">
          Join our upcoming training programs and tours.
        </p>
      </div>

      {/* Event Card */}
      <div className="max-w-4xl mx-auto">
        {upcomingEvents.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            {/* Image */}
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-72 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                Upcoming
              </span>

              <h2 className="text-2xl font-bold mt-4">
                {event.title}
              </h2>

              <p className="text-gray-600 mt-2">
                📅 {event.date}
              </p>

              <p className="text-gray-600 mt-2">
                📍 {event.location}
              </p>

              <p className="text-gray-700 mt-4">
                {event.description}
              </p>

              <p className="text-red-600 font-semibold mt-4">
                ⏳ Limited Seats Available
              </p>

              <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition">
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default UpcomingEventsPage;