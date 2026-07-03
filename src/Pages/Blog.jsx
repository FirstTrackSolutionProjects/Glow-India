// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const places = [
//   {
//     city: "Bhubaneswar",
//     places: [
//       {
//         name: "Lingaraj Temple",
//         images: [
//           "/assets/Lingaraj-1.jpg",
//           "/assets/Lingaraj-2.jpg",
//           "/assets/Lingaraj-3.jpg",
//         ],
//       },
//       {
//         name: "Udayagiri & Khandagiri Caves",
//         images: [
//           "/assets/khandagiri-1.jpg",
//           "/assets/khandagiri-2.jpg",
//         ],
//       },
//     ],
//   },
//   {
//     city: "Cuttack",
//     places: [
//       {
//         name: "Barabati Stadium",
//         images: [
//           "/assets/barabati-1.jpg",
//           "/assets/barabati-2.jpg",
//         ],
//       },
//       {
//         name: "Dhabaleswar Temple",
//         images: [
//           "/assets/dhabaleswar-1.jpg",
//           "/assets/dhabaleswar-2.jpg",
//         ],
//       },
//     ],
//   },
//   {
//     city: "Puri",
//     places: [
//       {
//         name: "Jagannath Temple",
//         images: [
//           "/assets/jagannath-1.jpg",
//           "/assets/jagannath-2.jpg",
//           "/assets/jagannath-3.jpg",
//         ],
//       },
//       {
//         name: "Puri Beach",
//         images: [
//           "/assets/puribeach-1.jpg",
//           "/assets/puribeach-2.jpg",
//         ],
//       },
//     ],
//   },
// ];

// const sliderSettings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 1500,
// };

// const Blog = () => {
//   return (
//     <div className="w-full mx-auto p-8">
//       <h1 className="text-4xl font-bold text-center mb-8 text-indigo-800">
//         Popular Places in Odisha
//       </h1>

//       <div className="max-w-6xl mx-auto">
//       {places.map((location, index) => (
//         <div key={index} className="mb-12">
//           <h2 className="text-3xl font-semibold text-teal-700 mb-6 border-b pb-2">
//             {location.city}
//           </h2>

//           {location.places.map((place, idx) => (
//             <div key={idx} className="mb-10 bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-2xl font-semibold text-rose-800 mb-4">
//                 {place.name}
//               </h3>

//               <Slider {...sliderSettings} className="rounded-lg overflow-hidden">
//                 {place.images.map((img, imgIndex) => (
//                   <div key={imgIndex}>
//                     <img
//                       src={img}
//                       alt={place.name}
//                       className="w-full h-64 object-cover rounded-lg"
//                     />
//                   </div>
//                 ))}
//               </Slider>
//             </div>
//           ))}
//         </div>
//       ))}
//       </div>
//     </div>
//   );
// };

// export default Blog;






import React from "react";
import Slider from "react-slick";
import {
  MapPinIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const places = [
  {
    city: "Bhubaneswar",
    place: "Lingaraj Temple",
    images: [
      "/assets/Lingaraj-1.jpg",
      "/assets/Lingaraj-2.jpg",
      "/assets/Lingaraj-3.jpg",
    ],
  },
  {
    city: "Cuttack",
    place: "Barabati Stadium",
    images: [
      "/assets/barabati-1.jpg",
      "/assets/barabati-2.jpg",
    ],
  },
  {
    city: "Puri",
    place: "Jagannath Temple",
    images: [
      "/assets/jagannath-1.jpg",
      "/assets/jagannath-2.jpg",
      "/assets/jagannath-3.jpg",
    ],
  },
];

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2500,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Blog = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-emerald-50 min-h-screen py-12">

      {/* Hero */}
      <div className="text-center mb-14 px-5">
        <h1 className="text-5xl font-bold text-gray-800">
          Explore Odisha
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Discover the most beautiful tourist destinations across Odisha.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">

        {places.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300"
          >

            <Slider {...settings}>
              {item.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={item.place}
                  className="w-full h-64 object-cover"
                />
              ))}
            </Slider>

            <div className="p-6">

              <div className="flex items-center text-emerald-600 mb-2">
                <MapPinIcon className="w-5 h-5 mr-2" />
                <span className="font-semibold">{item.city}</span>
              </div>

              <h2 className="text-2xl font-bold text-gray-800">
                {item.place}
              </h2>

              <p className="text-gray-500 mt-3 leading-7">
                One of the most famous tourist attractions in Odisha,
                attracting thousands of visitors every year for its
                history, culture and scenic beauty.
              </p>

              <button className="mt-6 flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full transition">
                Explore More
                <ArrowRightIcon className="w-5 h-5" />
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Blog;