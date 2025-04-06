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
      location: "At Near Mandarabasta 12km from, Collector, Office Khurda, Odisha",
      images: [
        { src: "/cottage 2nd room.jpg", alt: "Cottage Front View" },
      ]
    },
    {
      name: "Residential Plot",
      location: "Near Mira Mandap and Water Park, 7 km from Nakhara, Cuttack, Odisha",
      images: [
        { src: "/plot 1.jpg", alt: "Green Valley Entrance" },
      ]
    },
    {
      name: "Residential Plot",
      location: "Metro Enclave 2, Birupa Bridge, Jagatpur, Cuttack, Odisha",
      images: [
        { src: "/plot 10.jpg", alt: "Green Valley Entrance" },
      ]
    },
    {
      name: "Duplex",
      location: "Near Balianta, Hanspal, Bhubaneswar, Odisha",
      images: [
        { src: "/plot 11.jpg", alt: "Green Valley Entrance" },
      ]
    }
  ];

  return (
    <div className="bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Our Current Projects</h1>
        <p className="text-lg text-gray-600 mt-2">Real Estate Projects – Residential Land</p>
      </div>

      <div className="space-y-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-md relative">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              {project.name}
              {project.status && (
                <span className="bg-red-600 text-white text-sm font-bold px-2 py-1 rounded absolute top-6 right-6">
                  {project.status}
                </span>
              )}
            </h2>
            <p className="text-gray-700 text-base mb-4">{project.location}</p>

            <div className={`grid ${project.images.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-6`}>
              {project.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover rounded-xl shadow-sm transition-transform duration-300 hover:scale-105"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
