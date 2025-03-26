import React from "react";

export default function Vision() {
    return (
      <div className="max-w-6xl mx-auto p-6 bg-gray-100 text-gray-900 mt-6">
        <h1 className="text-4xl font-bold mb-6">Vision</h1>
  
        <div className="grid md:grid-cols-2 gap-8 items-center">
         
          <div className="relative">
            <img
              src="/assets/vision.jpg"
              alt="Vision"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
  
         
          <div className="space-y-4">
            <p className="text-lg font-light">
              "To create communities where people love to live, work, and thrive by offering world-class real estate solutions."
            </p>
            <p className="text-lg font-light">
              "To redefine the future of real estate by delivering exceptional experiences through innovation, sustainability, and unparalleled customer service."
            </p>
            <p className="text-lg font-light">
              "To be the leading real estate brand recognized for quality, trust, and transforming urban landscapes."
            </p>
            <p className="text-lg font-light">
              "To revolutionize the real estate industry by integrating technology and sustainability in every project we develop."
            </p>
            <p className="text-lg font-light">
              "To deliver homes and spaces that inspire lifestyles, foster growth, and build legacies."
            </p>
          </div>
        </div>
  
      
      </div>
    );
  }
  