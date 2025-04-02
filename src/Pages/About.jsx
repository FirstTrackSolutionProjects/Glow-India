import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 lg:p-12">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">About Us</h1>

      {/* Main About Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Image Section */}
        <div>
          <img 
            src="/assets/about.jpg"  
            alt="Luxury Home Interior"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="text-gray-700 leading-relaxed">
          <p>
            Congratulations to <span className="font-bold text-gray-900">Glow India Parivar</span> on completing over 
            <span className="font-bold text-blue-700"> 14 successful years of excellence</span> since its establishment on 
            <span className="font-bold text-blue-800"> 7th March 2010!</span>
          </p>
          <p className="mt-4">
            With a strong presence in <span className="font-semibold">Bhubaneswar, Odisha</span>, and beyond, the organization 
            has made remarkable strides in real estate, offering over 
            <span className="font-semibold"> 100 residential properties</span>, including <span className="font-semibold">2BHK and 3BHK flats </span> 
            and plots in <span className="font-bold text-gray-900">Bhubaneswar, Cuttack, and Puri.</span>
          </p>
          <p className="mt-4">
            The <span className="font-bold text-blue-900">14 anniversary</span>, held on <span className="font-bold text-blue-900">7th April 2025</span> at the prestigious 
            <span className="font-extrabold text-red-600"> Hotel Saaj – Premium in Bhubaneswar</span>, marks another milestone in 
            <span className="font-bold text-gray-900"> Glow India Parivar’s</span> commitment to empowering its leaders 
            and enriching customer trust.
          </p>
          <p className="mt-4">
            Here’s wishing <span className="font-bold text-gray-900">Glow India Parivar</span> continued success and growth 
            in the years to come!
          </p>
        </div>
      </div>

      {/* Founder & CEO Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Founder & CEO</h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* CEO Image */}
          <div className="w-48 h-48">
            <img 
              src="/assets/ceo1.jpg"  
              alt="Founder & CEO"
              className="rounded-full shadow-lg w-full h-full object-cover"
            />
          </div>

          {/* CEO Details */}
          <div className="text-gray-700 max-w-lg text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-900">Mr.Chandan Nath </h3>
            <p className="text-lg text-gray-600 mt-2">Founder & CEO</p>
            <p className="mt-4">
            As the Managing Director, my focus is on ensuring that 
              every project we undertake reflects our commitment to 
              quality, sustainability, and customer satisfaction. We 
              believe in building not just properties but trust and long
              term relationships. 
              We embrace cutting-edge technology and sustainable 
              practices to stay ahead of the curve while delivering 
              exceptional results for our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
