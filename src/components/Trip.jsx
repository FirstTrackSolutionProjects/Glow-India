import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination"; 
import { Autoplay, Pagination } from "swiper/modules"; 

const trips = [
  { image: "/assets/trip-1.jpg" },
  { image: "/assets/trip-2.jpg" },
  { image: "/assets/trip-3.jpg" },
  { image: "/assets/trip-4.jpg" },
  { image: "/assets/trip-5.jpg" },
  { image: "/assets/trip-6.jpg" },
  
  { image: "/assets/trip-8.jpg" },
  { image: "/assets/trip-9.jpg" },
  { image: "/assets/trip-10.jpg" },
];

const Trip = () => {
  return (
    <div className="bg-gray-100 py-10 mt-5 mx-4">
      <h2 className="text-center text-2xl font-extrabold text-gray-800 mb-6">
        Glow India Trips
      </h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }} 
        modules={[Autoplay, Pagination]} 
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          500: { slidesPerView: 1 },
        }}
        className="max-w-6xl mx-auto px-2"
      >
        {trips.map((trip, index) => (
          <SwiperSlide key={index}>
            <img
              src={trip.image}
              alt={`Trip ${index + 1}`}
              className="w-full h-90 object-cover rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <style>
        {`
          .swiper-pagination-bullet {
            background-color: black; 
            opacity: 0.;6 
          }

          .swiper-pagination-bullet-active {
            background-color: black; 
            opacity: 1; 
          }
        `}
      </style>
    </div>
  );
};

export default Trip;
