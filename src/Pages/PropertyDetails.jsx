import { useParams } from "react-router-dom";

const propertyDetails = {
  apartment: { name: "Apartment", description: "Luxury apartments available in 2BHK, 3BHK, and 4BHK." },
  bungalow: { name: "Bungalow", description: "Spacious bungalows with beautiful gardens and terraces." },
  duplex: { name: "Duplex", description: "Stylish duplex homes with modern interiors." },
  simplex: { name: "Simplex", description: "Affordable simplex houses for comfortable living." },
  land: { name: "Land/Plot", description: "Available residential and commercial plots for sale." },
};

export default function PropertyDetail() {
  const { id } = useParams();
  const property = propertyDetails[id];

  if (!property) {
    return <h2 className="text-center text-red-500 text-2xl mt-10">Property Not Found</h2>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{property.name}</h1>
      <p className="mt-4 text-lg">{property.description}</p>
    </div>
  );
}
