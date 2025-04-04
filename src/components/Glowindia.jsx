import React from "react";

const Glowindia = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300 p-4 m-4">
      <h1 className="text-4xl font-bold text-rose-800 mb-6">Glow India Parivar</h1>
      <img 
        src="/assets/trip-3.jpg" 
        alt="Glow India" 
        className="w-full max-w-3xl rounded-lg shadow-lg border-4"
      />
    </div>
  );
};

export default Glowindia;
