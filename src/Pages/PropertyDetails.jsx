import { useParams } from "react-router-dom";

const propertyDetails = {
  apartment: [
    {
      name: "Luxury Apartment 1",
      description: "Spacious 2BHK apartment with a great view.",
      images: [
        "/assets/apartment-1.jpg",
        "/assets/apartment-2.jpg",
        "/assets/apartment-3.jpg",
        "/assets/apartment-4.jpg",
      ],
    },
    {
      name: "Luxury Apartment 2",
      description: "Modern 3BHK apartment with premium amenities.",
      images: [
        "/assets/apartment-5.jpg",
        "/assets/apartment-6.jpg",
        "/assets/apartment-7.jpg",
        "/assets/apartment-8.jpg",
      ],
    },
  ],
  bungalow: [
    {
      name: "Bungalow 1",
      description: "Elegant bungalow with a large garden.",
      images: [
        "/assets/bungalow-1.jpg",
        "/assets/bungalow-2.jpg",
        "/assets/bungalow-3.jpg",
        "/assets/bungalow-4.jpg",
      ],
    },
    {
      name: "Bungalow 2",
      description: "Luxury bungalow with a swimming pool.",
      images: [
        "/assets/bungalow-5.jpg",
        "/assets/bungalow-6.jpg",
        "/assets/bungalow-7.jpg",
        "/assets/bungalow-8.jpg",
      ],
    },
  ],
  simplex: [
    {
      name: "Simplex 1",
      description: "Affordable 2BHK simplex house.",
      images: [
        "/assets/simplex-1.jpg",
        "/assets/simplex-2.jpg",
        "/assets/simplex-3.jpg",
        "/assets/simplex-4.jpg",
      ],
    },
    {
      name: "Simplex 2",
      description: "Comfortable 3BHK simplex house.",
      images: [
        "/assets/simplex-5.jpg",
        "/assets/simplex-6.jpg",
        "/assets/simplex-7.jpg",
        "/assets/simplex-8.jpg",
      ],
    },
  ],
  duplex: [
    {
      name: "Duplex 1",
      description: "Stylish duplex home with modern interiors.",
      images: [
        "/assets/duplex-1.jpg",
        "/assets/duplex-2.jpg",
        "/assets/duplex-3.jpg",
        "/assets/duplex-4.jpg",
      ],
    },
    {
      name: "Duplex 2",
      description: "Spacious 4BHK duplex with a terrace.",
      images: [
        "/assets/duplex-5.jpg",
        "/assets/duplex-6.jpg",
        "/assets/duplex-7.jpg",
        "/assets/duplex-8.jpg",
      ],
    },
  ],
  land: [
    {
      name: "Residential Plot",
      description: "Prime land available for residential purposes.",
      images: [
        "/assets/land-1.jpg",
        "/assets/land-1.jpg",
        "/assets/land-1.jpg",
        "/assets/land-1.jpg",
      ],
    },
    {
      name: "Commercial Plot",
      description: "Strategically located commercial land for sale.",
      images: [
        "/assets/land-1.jpg",
        "/assets/land-1.jpg",
        "/assets/land-1.jpg",
        "/assets/land-1.jpg",
      ],
    },
  ],
};

export default function PropertyDetail() {
  const { id } = useParams();
  const properties = propertyDetails[id];

  if (!properties) {
    return <h2 className="text-center text-red-500 text-2xl mt-10">Property Not Found</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center capitalize">{id}</h1>

      {properties.map((property, index) => (
        <div key={index} className="mt-8 p-4 border rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">{property.name}</h2>
          <p className="text-lg mt-2">{property.description}</p>

          <div className="grid grid-cols-2 gap-4 mt-4">
            {property.images.map((image, imgIndex) => (
              <img
                key={imgIndex}
                src={image}
                alt={`Property ${index + 1} - Image ${imgIndex + 1}`}
                className="w-full h-40 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
