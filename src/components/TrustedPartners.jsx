export default function TrustedPartners() {
    const partners = [
      {
        name: "Elite Realty",
        logo: "https://source.unsplash.com/100x100/?realestate",
        description: "Top-rated real estate agency specializing in luxury properties.",
        website: "https://eliterealty.com",
        contact: "contact@eliterealty.com",
      },
      {
        name: "Secure Mortgage",
        logo: "https://source.unsplash.com/100x100/?mortgage",
        description: "Helping you find the best home financing options.",
        website: "https://securemortgage.com",
        contact: "support@securemortgage.com",
      },
      {
        name: "Legal Home Advisors",
        logo: "https://source.unsplash.com/100x100/?law",
        description: "Providing legal assistance for property transactions.",
        website: "https://legalhomeadvisors.com",
        contact: "info@legalhomeadvisors.com",
      },
      {
        name: "Green Builders",
        logo: "https://source.unsplash.com/100x100/?construction",
        description: "Sustainable and eco-friendly home construction services.",
        website: "https://greenbuilders.com",
        contact: "hello@greenbuilders.com",
      },
    ];
  
    return (
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Our Trusted Partners</h1>
  
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-lg text-center">
              <img src={partner.logo} alt={partner.name} className="mx-auto mb-4 w-20 h-20 rounded-full" />
              <h2 className="text-xl font-semibold">{partner.name}</h2>
              <p className="text-gray-600 mt-2">{partner.description}</p>
              <div className="mt-4">
                <a href={partner.website} target="_blank" className="text-blue-500 hover:underline">
                  Visit Website
                </a>
                <p className="text-gray-500 text-sm mt-1">{partner.contact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  