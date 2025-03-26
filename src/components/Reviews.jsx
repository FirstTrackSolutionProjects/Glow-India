import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const testimonials = [
  {
    property: "Luxury 3BHK Apartment - Bhubaneswar",
    review:
      "The apartment is spacious, well-designed, and located in a prime area. The quality of construction is outstanding, and the amenities are top-notch!",
    name: "Rahul Sharma",
    avatar: "/avatars/rahul.jpg",
    rating: 5,
  },
  {
    property: "Premium Villa - Cuttack",
    review:
      "Glow India made my dream of owning a villa come true! The locality is amazing, and the greenery around adds to the charm. A great investment!",
    name: "Sneha Verma",
    avatar: "/avatars/sneha.jpg",
    rating: 4.5,
  },
  {
    property: "Affordable 2BHK Flat - Puri",
    review:
      "I purchased a 2BHK flat from Glow India, and I must say the process was seamless. The team was very supportive, and the property value is already appreciating!",
    name: "Amit Das",
    avatar: "/avatars/amit.jpg",
    rating: 4,
  },
  {
    property: "Commercial Space - Bhubaneswar",
    review:
      "Perfect location for my office! The building is modern, well-equipped, and has excellent connectivity. Highly recommend Glow India for commercial investments!",
    name: "Priyanka Sinha",
    avatar: "/avatars/priyanka.jpg",
    rating: 5,
  },
  {
    property: "Luxury Duplex - Puri",
    review:
      "I moved into my new duplex, and I am extremely satisfied with the construction quality and the peaceful environment. A great decision!",
    name: "Vikram Rao",
    avatar: "/avatars/vikram.jpg",
    rating: 4.5,
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex text-yellow-500">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} />
      ))}
      {halfStar && <FaStarHalfAlt />}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={index} />
      ))}
    </div>
  );
};

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-12 px-6 bg-gray-100">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">Client Reviews</h2>
      
      <div className="max-w-5xl mx-auto overflow-hidden relative">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="min-w-full p-8 bg-white shadow-lg rounded-lg">
              <FaQuoteLeft className="text-3xl text-gray-400 mb-4" />
              <p className="font-semibold">
                <strong>Property: {testimonial.property}</strong>
              </p>
              <StarRating rating={testimonial.rating} />
              <p className="text-gray-700 mt-2">{testimonial.review}</p>
              <div className="flex items-center mt-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border border-gray-300 shadow"
                />
                <h4 className="text-lg font-bold ml-4">{testimonial.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
