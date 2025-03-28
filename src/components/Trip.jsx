import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const trips = [
  {
    image: "/assets/mumbai.jpg", // ✅ Update with actual image paths
    date: "March 15, 2025",
    location: "Mumbai, India",
  },
  {
    image: "/assets/delhi.jpg",
    date: "April 10, 2025",
    location: "Delhi, India",
  },
  {
    image: "/assets/bangalore.jpg",
    date: "May 5, 2025",
    location: "Bangalore, India",
  },
  {
    image: "/assets/kolkata.jpg",
    date: "June 1, 2025",
    location: "Kolkata, India",
  },
];

const Trip = () => {
  return (
    <div className="bg-gray-100 py-10 mt-5">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
        Glow India Trips
      </h2>

      {/* ✅ Swiper Auto-Scrolling + Dots */}
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }} // ✅ Dots for manual scrolling
        modules={[Autoplay, Pagination]}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          500: { slidesPerView: 1 },
        }}
        className="max-w-6xl mx-auto"
      >
        {trips.map((trip, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <img
                src={trip.image}
                alt={`Trip to ${trip.location}`}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="mt-4">
                <p className="text-gray-600 text-sm">{trip.date}</p>
                <p className="text-gray-800 font-semibold">{trip.location}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Trip;
