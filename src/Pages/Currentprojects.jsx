// import React from "react";

// export default function CurrentProjects() {
//   const projects = [
//     {
//       name: "Shree Vihar",
//       status: "SOLD OUT",
//       location: "Near Maltipatpur Bus Stop, Puri, Odisha",
//       images: [
//         { src: "/shreevihar-1.jpg", alt: "Shree Vihar Entrance" },
//         { src: "/shreevihar-2.jpg", alt: "Shree Vihar Land" }
//       ]
//     },
//     {
//       name: "Cottage",
//       location: "At Near Mandarabasta 12km from, Collector, Office Khurda, Odisha",
//       images: [
//         { src: "/cottage 2nd room.jpg", alt: "Cottage Front View" },
//       ]
//     },
//     {
//       name: "Residential Plot",
//       location: "Near Mira Mandap and Water Park, 7 km from Nakhara, Cuttack, Odisha",
//       images: [
//         { src: "/plot 1.jpg", alt: "Green Valley Entrance" },
//       ]
//     },
//     {
//       name: "Residential Plot",
//       location: "Metro Enclave 2, Birupa Bridge, Jagatpur, Cuttack, Odisha",
//       images: [
//         { src: "/plot 10.jpg", alt: "Green Valley Entrance" },
//       ]
//     },
//     {
//       name: "Duplex",
//       location: "Near Balianta, Hanspal, Bhubaneswar, Odisha",
//       images: [
//         { src: "/plot 11.jpg", alt: "Green Valley Entrance" },
//       ]
//     }
//   ];

//   return (
//     <div className="bg-gray-100 py-10 px-4">
//       <div className="max-w-6xl mx-auto text-center mb-10">
//         <h1 className="text-4xl font-bold text-gray-800">Our Current Projects</h1>
//         <p className="text-lg text-gray-600 mt-2">Real Estate Projects – Residential Land</p>
//       </div>

//       <div className="space-y-10 max-w-6xl mx-auto">
//         {projects.map((project, index) => (
//           <div key={index} className="bg-white p-6 rounded-2xl shadow-md relative">
//             <h2 className="text-2xl font-semibold text-gray-900 mb-2">
//               {project.name}
//               {project.status && (
//                 <span className="bg-red-600 text-white text-sm font-bold px-2 py-1 rounded absolute top-6 right-6">
//                   {project.status}
//                 </span>
//               )}
//             </h2>
//             <p className="text-gray-700 text-base mb-4">{project.location}</p>

//             <div className={`grid ${project.images.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-6`}>
//               {project.images.map((image, imgIndex) => (
//                 <img
//                   key={imgIndex}
//                   src={image.src}
//                   alt={image.alt}
//                   className="w-full h-64 object-cover rounded-xl shadow-sm transition-transform duration-300 hover:scale-105"
//                 />
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




import React from "react";

export default function CurrentProjects() {
  const projects = [
    {
      name: "Chilika (Cottage)",
      // status: "SOLD OUT",
      price: "₹75,00,000",
      details: "2 Units • Lake View Cottage",
      image: "/Chilika (Cottage).jpg",
    },
    {
      name: "Tarota",
      price: "₹1,350 / Sq ft",
      details: "1 Unit = 1200 Sq ft",
      image: "/Tarotas.jpg",
    },
    {
      name: "Bhola (Chandaka) — Farm House",
      // status: "SOLD OUT",
      price: "₹1,800 / Sq ft",
      details: "1 Unit = 1200 Sq ft",
      image: "/Tarotas.jpg",
    },
    {
      name: "Duplex",
      price: "₹55,00,000",
      details: "Modern Duplex House",
      image: "/Malatipatapur.jpg",
    },
    {
      name: "Residential Plot",
      // status: "SOLD OUT",
      price: "₹1,450 / Sq ft",
      details: "Near Nakhara, Cuttack",
      image: "/Mandarabasta.jpg",
    },
    {
      name: "Shree Vihar",
      price: "₹2,100 / Sq ft",
      details: "Near Maltipatpur Bus Stop, Puri",
      image: "/Mandarabasta.jpg",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
  
        <div className="text-center mb-12">
          <p className="uppercase tracking-[5px] text-yellow-600 font-semibold">
            Our Current Projects
          </p>
  
          <h2 className="text-5xl font-extrabold mt-2">
            <span className="text-blue-900">Premium </span>
            <span className="text-yellow-500">Real Estate</span>
            <span className="text-blue-900"> Projects</span>
          </h2>
  
          <p className="text-gray-600 mt-4 text-lg">
            Hand-picked locations across Odisha with transparent pricing.
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  
          {projects.map((project, index) => (
        <div
        key={index}
        className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-64 object-cover"
          />
      
          {/* SOLD OUT Button */}
          {project.status && (
            <span className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              {project.status}
            </span>
          )}
        </div>
      
        <div className="p-6">
          <h3 className="text-3xl font-bold text-blue-900 mb-3">
            {project.name}
          </h3>
      
          <p className="text-2xl font-bold text-red-600">
            {project.price}
          </p>
      
          <p className="text-gray-600 mt-2">
            📍 {project.details}
          </p>
        </div>
      </div>
          ))}
  
        </div>
  
      </div>
    </section>
  );
}
