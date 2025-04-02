import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const places = [
  {
    city: "Bhubaneswar",
    places: [
      {
        name: "Lingaraj Temple",
        images: [
          "/assets/Lingaraj-1.jpg",
          "/assets/Lingaraj-2.jpg",
          "/assets/Lingaraj-3.jpg",
        ],
      },
      {
        name: "Udayagiri & Khandagiri Caves",
        images: [
          "/assets/khandagiri-1.jpg",
          "/assets/khandagiri-2.jpg",
        ],
      },
    ],
  },
  {
    city: "Cuttack",
    places: [
      {
        name: "Barabati Fort",
        images: [
          "/assets/barabati-1.jpg",
          "/assets/barabati-2.jpg",
        ],
      },
      {
        name: "Dhabaleswar Temple",
        images: [
          "/assets/dhabaleswar-1.jpg",
          "/assets/dhabaleswar-2.jpg",
        ],
      },
    ],
  },
  {
    city: "Puri",
    places: [
      {
        name: "Jagannath Temple",
        images: [
          "/assets/jagannath-1.jpg",
          "/assets/jagannath-2.jpg",
          "/assets/jagannath-3.jpg",
        ],
      },
      {
        name: "Puri Beach",
        images: [
          "/assets/puribeach-1.jpg",
          "/assets/puribeach-2.jpg",
        ],
      },
    ],
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
};

const Blog = () => {
  return (
    <div className="w-full mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-indigo-800">
        Popular Places in Odisha
      </h1>

      <div className="max-w-6xl mx-auto">
      {places.map((location, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-3xl font-semibold text-teal-700 mb-6 border-b pb-2">
            {location.city}
          </h2>

          {location.places.map((place, idx) => (
            <div key={idx} className="mb-10 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-rose-800 mb-4">
                {place.name}
              </h3>

              <Slider {...sliderSettings} className="rounded-lg overflow-hidden">
                {place.images.map((img, imgIndex) => (
                  <div key={imgIndex}>
                    <img
                      src={img}
                      alt={place.name}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          ))}
        </div>
      ))}
      </div>
    </div>
  );
};

export default Blog;
