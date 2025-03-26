// import React from "react";

// const Blog = () => {
//   const places = [
//     {
//       city: "Bhubaneswar",
//       places: [
//         {
//           name: "Lingaraj Temple",
//           image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Lingaraja_Temple_Bhubaneshwar.jpg/800px-Lingaraja_Temple_Bhubaneshwar.jpg",
//         },
//         {
//           name: "Nandankanan Zoological Park",
//           image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Nandankanan_Zoological_Park_entrance.jpg/800px-Nandankanan_Zoological_Park_entrance.jpg",
//         },
//       ],
//     },
//     {
//       city: "Cuttack",
//       places: [
//         {
//           name: "Barabati Fort",
//           image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Barabati_fort.jpg/800px-Barabati_fort.jpg",
//         },
//         {
//           name: "Dhabaleswar Temple",
//           image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Dhabaleswar_Temple.jpg/800px-Dhabaleswar_Temple.jpg",
//         },
//       ],
//     },
//     {
//       city: "Puri",
//       places: [
//         {
//           name: "Jagannath Temple",
//           image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Jagannath_Temple%2C_Puri.jpg/800px-Jagannath_Temple%2C_Puri.jpg",
//         },
//         {
//           name: "Puri Beach",
//           image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Puri_Beach.jpg/800px-Puri_Beach.jpg",
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="max-w-5xl mx-auto p-6">
//       <h1 className="text-3xl font-bold text-center mb-6">Popular Places in Odisha</h1>
//       {places.map((city, index) => (
//         <div key={index} className="mb-8">
//           <h2 className="text-2xl font-semibold mb-4 text-blue-700">{city.city}</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {city.places.map((place, idx) => (
//               <div key={idx} className="border p-4 rounded-lg shadow-md">
//                 <img src={place.image} alt={place.name} className="w-full h-48 object-cover rounded-lg" />
//                 <h3 className="text-lg font-semibold mt-2">{place.name}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Blog;

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
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-indigo-800">
        Popular Places in Odisha
      </h1>

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
  );
};

export default Blog;
