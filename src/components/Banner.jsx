import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-rose-400 text-white text-center p-6">
      <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
       <span className="text-yellow-300">14th Anniversary</span> of <span className="text-white">Glow India</span> 
      </h1>
      <img
        src="/assets/hotel-1.jpg"
        alt="Glow India 14th Anniversary"
        className="w-full max-w-4xl rounded-2xl shadow-lg border-4 border-white"
      />
      <p className="text-lg mt-4">
        Celebrating 14 years of excellence and innovation! Thank you for being a part of our journey.
      </p>
    </div>
  );
};

export default Banner;
