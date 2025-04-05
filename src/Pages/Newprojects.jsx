// import { useState } from "react";
// import { Card, CardContent } from "../components/ui/Card";
// import { Input } from "../components/ui/Input";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination, Autoplay } from "swiper/modules";

// const properties = [
//   {
//     id: 1,
//     type: "Residential Plot",
//     location: "Mira Mandap Near WaterPark Nakhara, Cuttack, Odisha",
//     images: ["/plot 1.jpg","/plot 2.jpg"],
//   },
//   {
//     id: 2,
//     type: "Cottage",
//     location: "Uromauza, Back side of Toshali Sand, Maltipatapur Bus Stand, Puri, Odisha",
//    images: ["/assets/np-1.jpg", "/assets/duplex-2.jpg", "/assets/duplex-3.jpg"],
//   },
//   {
//     id: 3,
//     type: " Residential Plot",
//     location: "Uromauza, Back side of Toshali Sand, Maltipatapur Bus Stand, Puri, Odisha",
//     images: ["/assets/puri plot.jpg"],
//   },
//   {
//     id: 4,
//     type: "Residential Plot",
//     location: "Metro Enclave 1 - Tarota Manguli, Cuttack, Odisha",
//     images: ["/plot 3.jpg", "/plot 4.jpg", "/plot 5.jpg", "/plot 6.jpg", "/plot 7.jpg", "/plot 8.jpg", "/plot 9.jpg"],
//   },
//   {
//     id: 5,
//     type: "Duplex",
//     location: "Uromauza, Back side of Toshali Sand, Maltipatapur Bus Stand, Puri, Odisha",
//     images: ["/assets/np duplex-1.jpg", "/assets/np duplex-2.jpg", "/assets/np duplex-3.jpg"],
//   },
//   {
//     id: 6,
//     type: "Simplex",
//     location: "Metro Enclave 1 - Tarota Manguli, Cuttack, Odisha",
//     images: ["/assets/simplex-1.jpg", "/assets/simplex-3.jpg", "/assets/simplex-8.jpg"],
//   },
//   {
//     id: 6,
//     type: "Duplex",
//     location: "Metro Enclave 1 - Tarota Manguli, Cuttack, Odisha",
//     images: ["/assets/duplex-8.jpg", "/assets/duplex-4.jpg", "/assets/duplex-2.jpg"],
//   },
//   {
//     id: 7,
//     type: "Residential Plot",
//     status: "SOLD OUT",
//     location: " Near Mandarabasta, 12km from Collector, Khurda, Odisha.",
//     images: ["/plot 2.jpg", "/plot 8.jpg"],
//   },

  
// ];

// export default function NewProjects() {
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("All");

//   const filteredProperties = properties.filter(
//     (property) =>
//       (filter === "All" || property.type === filter) &&
//       property.location.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="p-4 md:p-6 max-w-6xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4 text-center">New Projects</h1>

//       {/* Search and Filter Section */}
//       <div className="flex flex-col md:flex-row gap-4 mb-6">
//         <Input
//           className="w-full md:w-1/2 p-2 border rounded"
//           placeholder="Search by location..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <select
//           className="w-full md:w-1/4 p-2 border rounded"
//           value={filter}
//           onChange={(e) => setFilter(e.target.value)}
//         >
//           <option value="All">All</option>
//           <option value="Plot">Plot</option>
//           <option value="Duplex">Duplex</option>
//           <option value="Simplex">Simplex</option>
//           <option value="Cottage">Cottage</option>
//         </select>
//       </div>

//       {/* Property Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredProperties.map((property) => (
//           <Card key={property.id} className="w-full">
//             <Swiper
//               modules={[Pagination]}
//               pagination={{ clickable: true }}
//               autoplay={{ delay: 3000, disableOnInteraction: false }}
//               className="rounded-lg"
//             >
//               {property.images.map((image, index) => (
//                 <SwiperSlide key={index}>
//                   <img
//                     src={image}
//                     alt={`${property.type} ${index + 1}`}
//                     className="w-80 h-50 object-cover rounded-lg"
//                   />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//             <CardContent>
//               <h2 className="text-xl font-semibold mt-2">{property.type}</h2>
//               <p className="text-gray-600">{property.location}</p>
             
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { Card, CardContent } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const properties = [
  {
    id: 1,
    type: "Residential Plot",
    location: "Mira Mandap Near WaterPark Nakhara, Cuttack, Odisha",
    images: ["/plot 1.jpg", "/plot 2.jpg"],
  },
  {
    id: 2,
    type: "Cottage",
    location:
      "Uromauza, Back side of Toshali Sand, Maltipatapur Bus Stand, Puri, Odisha",
    images: ["/assets/np-1.jpg", "/assets/duplex-2.jpg", "/assets/duplex-3.jpg"],
  },
  {
    id: 3,
    type: "Residential Plot",
    location:
      "Uromauza, Back side of Toshali Sand, Maltipatapur Bus Stand, Puri, Odisha",
    images: ["/assets/puri plot.jpg"],
  },
  {
    id: 4,
    type: "Residential Plot",
    location: "Metro Enclave 1 - Tarota Manguli, Cuttack, Odisha",
    images: [
      "/plot 3.jpg",
      "/plot 4.jpg",
      "/plot 5.jpg",
      "/plot 6.jpg",
      "/plot 7.jpg",
      "/plot 8.jpg",
      "/plot 9.jpg",
    ],
  },
  {
    id: 5,
    type: "Duplex",
    location:
      "Uromauza, Back side of Toshali Sand, Maltipatapur Bus Stand, Puri, Odisha",
    images: [
      "/assets/np duplex-1.jpg",
      "/assets/np duplex-2.jpg",
      "/assets/np duplex-3.jpg",
    ],
  },
  {
    id: 6,
    type: "Simplex",
    location: "Metro Enclave 1 - Tarota Manguli, Cuttack, Odisha",
    images: [
      "/assets/simplex-1.jpg",
      "/assets/simplex-3.jpg",
      "/assets/simplex-8.jpg",
    ],
  },
  {
    id: 7,
    type: "Duplex",
    location: "Metro Enclave 1 - Tarota Manguli, Cuttack, Odisha",
    images: [
      "/assets/duplex-8.jpg",
      "/assets/duplex-4.jpg",
      "/assets/duplex-2.jpg",
    ],
  },
  {
    id: 8,
    type: "Residential Plot",
   
    location: "Near Mandarabasta, 12km from Collector, Khurda, Odisha.",
    images: ["/plot 2.jpg", "/plot 8.jpg"],
  },
];

export default function NewProjects() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const getFilterMatch = (propertyType) => {
    if (filter === "All") return true;
    if (filter === "Plot") return propertyType.toLowerCase().includes("plot");
    return propertyType.toLowerCase() === filter.toLowerCase();
  };

  const filteredProperties = properties.filter(
    (property) =>
      getFilterMatch(property.type) &&
      property.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">New Projects</h1>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <Input
          className="w-full md:w-1/2 p-2 border rounded"
          placeholder="Search by location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="w-full md:w-1/4 p-2 border rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Plot">Plot</option>
          <option value="Duplex">Duplex</option>
          <option value="Simplex">Simplex</option>
          <option value="Cottage">Cottage</option>
        </select>
      </div>

      {/* Property Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <Card key={property.id} className="w-full">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="rounded-lg"
            >
              {property.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`${property.type} ${index + 1}`}
                    loading="lazy"
                    className="w-80 h-50 object-cover rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <CardContent>
              <h2 className="text-xl font-semibold mt-2">{property.type}</h2>
              <p className="text-gray-600">{property.location}</p>
            
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

