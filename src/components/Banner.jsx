import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-stone-300 text-white text-center p-6 m-3">
      <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
        <span className="text-blue-900"> GLOW </span> <span className=" text-black"> INDIA</span> <span className="text-red-600">14th Anniversary</span>
      </h1>
      <img
        src="/assets/hotel-1.jpg"
        alt="Glow India 14th Anniversary"
        className="w-full max-w-4xl rounded-2xl shadow-lg border-4 border-white"
      />
         <p className="mt-4">
             <span className="font-bold text-red-600">The 14 anniversary</span> <span className="text-black font-bold">held on</span> <span className="font-bold text-blue-900">7th April 2025</span> <span className="text-black font-bold">at the prestigious</span> 
            <span className="font-extrabold text-red-600"> Hotel Saaj – Premium in Bhubaneswar</span>     
        </p>
    </div>
    
  );
};

export default Banner;
