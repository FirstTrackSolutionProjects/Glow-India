import { useState } from "react";
import { Card, CardContent } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const properties = [
  {
    id: 1,
    type: "Plot",
    location: "Cuttack",
    images: ["/plot 1.jpg", "/plot 2.jpg", "/plot 2.jpg"],
  },
  {
    id: 2,
    type: "Duplex",
    location: "Bhubaneswar",
    images: ["/assets/duplex-1.jpg", "/assets/duplex-2.jpg", "/assets/duplex-3.jpg"],
  },
  {
    id: 3,
    type: "Plot",
    location: "Cuttack",
    images: ["/plot 2.jpg", "/plot 1.jpg", "/plot 3.jpg"],
  },
  {
    id: 4,
    type: "Duplex",
    location: "Puri",
    images: ["/assets/duplex-2.jpg", "/assets/duplex-2.jpg", "/assets/duplex-3.jpg"],
  },
  {
    id: 5,
    type: "Plot",
    location: "Cuttack",
    images: ["/plot 2.jpg", "/plot 1.jpg", "/plot 3.jpg"],
  },
  {
    id: 6,
    type: "Duplex",
    location: "Bhubaneswar",
    images: ["/assets/duplex-6.jpg", "/assets/duplex-7.jpg", "/assets/duplex-8.jpg"],
  },
  {
    id: 7,
    type: "Plot",
    location: "Cuttack",
    images: ["/plot 2.jpg", "/plot 2.jpg", "/plot 3.jpg"],
  },
  {
    id: 8,
    type: "Duplex",
    location: "Puri",
    images: ["/assets/duplex-4.jpg", "/assets/duplex-5.jpg", "/assets/duplex-6.jpg"],
  },
];

export default function NewProjects() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredProperties = properties.filter(
    (property) =>
      (filter === "All" || property.type === filter) &&
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
        </select>
      </div>

      {/* Property Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <Card key={property.id} className="w-full">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              className="rounded-lg"
            >
              {property.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`${property.type} ${index + 1}`}
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
