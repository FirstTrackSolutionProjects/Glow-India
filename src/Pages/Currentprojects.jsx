// import React from "react";

// export default function CurrentProjects() {
//   const projects = [
//     {
//       name: "Shree Vihar",
//       location: "Near Maltipatpur Bus Stop, Puri, Odisha",
//       images: [
//         { src: "/shreevihar-1.jpg", alt: "Shree Vihar Entrance" },
//         { src: "/shreevihar-2.jpg", alt: "Shree Vihar Land" }
//       ]
//     },
//     {
//       name: "Cottage",
//       location: "At Near Mandarabasa 12km from, Collector, Office Khurda, Odisha",
//       images: [
//         { src: "/cottage 2nd room.jpg", alt: "Sunrise Residency Front View" },
        
//       ]
//     },
//     {
//       name: "Residential Plot",
//       location: " Near Mira Mandap and Water Park,7 km from Nakhara, Cuttack, Odisha",
//       images: [
//         { src: "/plot-1.jpg", alt: "Green Valley Entrance" },
       
//       ]
//     }
//   ];

//   return (
//     <div className="bg-gray-200 min-h-screen p-6">
//       <div className="max-w-4xl mx-auto text-center">
//         <h1 className="text-4xl font-bold text-brown-800">Our Current Projects</h1>
//         <p className="text-lg text-gray-700 mt-2">Real Estate Projects -- Residential Land</p>
//       </div>

//       {projects.map((project, index) => (
//         <div key={index} className="max-w-4xl mx-auto mt-6 bg-white p-4 rounded-lg shadow-lg">
//           <h2 className="text-xl font-semibold text-gray-800">{project.name}</h2>
//           <p className="text-gray-600">{project.location}</p>
          
//           <div className="mt-4 grid grid-cols-2 gap-4">
//             {project.images.map((image, imgIndex) => (
//               <img
//                 key={imgIndex}
//                 src={image.src}
//                 alt={image.alt}
//                 className="rounded-lg shadow"
//               />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

import React from "react";

export default function CurrentProjects() {
  const projects = [
    {
      name: "Shree Vihar",
      status: "SOLD OUT",
      location: "Near Maltipatpur Bus Stop, Puri, Odisha",
      images: [
        { src: "/shreevihar-1.jpg", alt: "Shree Vihar Entrance" },
        { src: "/shreevihar-2.jpg", alt: "Shree Vihar Land" }
      ]
    },
    {
      name: "Cottage",
      location: "At Near Mandarabasa 12km from, Collector, Office Khurda, Odisha",
      images: [
        { src: "/cottage 2nd room.jpg", alt: "Sunrise Residency Front View" },
      ]
    },
    {
      name: "Residential Plot",
      location: " Near Mira Mandap and Water Park,7 km from Nakhara, Cuttack, Odisha",
      images: [
        { src: "/plot-1.jpg", alt: "Green Valley Entrance" },
      ]
    }
  ];

  return (
    <div className="bg-gray-200 min-h-screen p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-brown-800">Our Current Projects</h1>
        <p className="text-lg text-gray-700 mt-2">Real Estate Projects -- Residential Land</p>
      </div>

      {projects.map((project, index) => (
        <div key={index} className="max-w-4xl mx-auto mt-6 bg-white p-4 rounded-lg shadow-lg relative">
          <h2 className="text-xl font-semibold text-gray-800">
            {project.name}
            {project.status && (
              <span className="bg-red-600 text-white text-sm font-bold px-2 py-1 rounded absolute top-4 right-4">
                {project.status}
              </span>
            )}
          </h2>
          <p className="text-gray-600">{project.location}</p>
          
          <div className="mt-4 grid grid-cols-2 gap-4">
            {project.images.map((image, imgIndex) => (
              <img
                key={imgIndex}
                src={image.src}
                alt={image.alt}
                className="rounded-lg shadow"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
