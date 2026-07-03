// import React from "react";

// const About = () => {
//   return (
//     <div className="max-w-6xl mx-auto p-6 lg:p-12">
//       {/* Heading */}
//       <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">About Us</h1>

//       {/* Main About Content */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
//         {/* Image Section */}
//         <div>
//           <img 
//             src="/assets/about.jpg"  
//             alt="Luxury Home Interior"
//             className="rounded-lg shadow-lg w-full object-cover"
//           />
//         </div>

//         {/* Text Section */}
//         <div className="text-gray-700 leading-relaxed">
//           <p>
//             Congratulations to <span className="font-bold text-gray-900">Glow India Parivar</span> on completing over 
//             <span className="font-bold text-blue-700"> 14 successful years of excellence</span> since its establishment on 
//             <span className="font-bold text-blue-800"> 7th March 2010!</span>
//           </p>
//           <p className="mt-4">
//             With a strong presence in <span className="font-semibold">Bhubaneswar, Odisha</span>, and beyond, the organization 
//             has made remarkable strides in real estate, offering over 
//             <span className="font-semibold"> 100 residential properties</span>, including <span className="font-semibold">2BHK and 3BHK flats </span> 
//             and plots in <span className="font-bold text-gray-900">Bhubaneswar, Cuttack, and Puri.</span>
//           </p>
//           <p className="mt-4">
//             The <span className="font-bold text-blue-900">14th Anniversary</span>, held on <span className="font-bold text-blue-900">7th April 2025</span> at the prestigious 
//             <span className="font-extrabold text-red-600"> Hotel Saaj – Premium in Bhubaneswar</span>, marks another milestone in 
//             <span className="font-bold text-gray-900"> Glow India Parivar’s</span> commitment to empowering its leaders 
//             and enriching customer trust.
//           </p>
//           <p className="mt-4">
//             Here’s wishing <span className="font-bold text-gray-900">Glow India Parivar</span> continued success and growth 
//             in the years to come!
//           </p>
//         </div>
//       </div>

//       {/* Founder & CEO Section */}
//       <div className="mt-12 text-center">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-6">Founder & CEO</h2>

//         <div className="flex flex-col md:flex-row items-center justify-center gap-8">
//           {/* CEO Image */}
//           <div className="w-48 h-48">
//             <img 
//               src="/assets/ceo1.jpg"  
//               alt="Founder & CEO"
//               className="rounded-full shadow-lg w-full h-full object-cover"
//             />
//           </div>

//           {/* CEO Details */}
//           <div className="text-gray-700 max-w-lg text-center md:text-left">
//             <h3 className="text-2xl font-bold text-gray-900">Mr.Chandan Nath </h3>
//             <p className="text-lg text-gray-600 mt-2">Founder & CEO</p>
//             <p className="mt-4">
//             As the Managing Director, my focus is on ensuring that 
//               every project we undertake reflects our commitment to 
//               quality, sustainability, and customer satisfaction. We 
//               believe in building not just properties but trust and long
//               term relationships. 
//               We embrace cutting-edge technology and sustainable 
//               practices to stay ahead of the curve while delivering 
//               exceptional results for our clients.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;





import React from "react";
import { BuildingOffice2Icon, UsersIcon, TrophyIcon } from "@heroicons/react/24/outline";

const About = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <div
        className="relative h-[350px] bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/about.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold">About Glow India Parivar</h1>
            <p className="mt-4 text-lg max-w-2xl">
              Building Dreams, Delivering Trust & Creating Better Living Spaces
              Since 2026.
            </p>
          </div>
        </div>
      </div>

      {/* About */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <img
            src="/assets/about.jpg"
            alt="About"
            className="rounded-3xl shadow-xl hover:scale-105 duration-300"
          />

          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Who We Are
            </h2>

            <p className="text-gray-600 leading-8">
              Glow India Parivar is one of Odisha's trusted real estate
              companies with over <strong>14+ years</strong> of excellence.
              Since 2026, we have been providing premium residential projects,
              apartments and plots in Bhubaneswar, Cuttack and Puri with
              complete transparency and customer satisfaction.
            </p>

            <p className="text-gray-600 leading-8 mt-4">
              Our goal is to deliver quality homes that combine modern
              lifestyles with affordable pricing while maintaining long-term
              customer trust.
            </p>

            <button className="mt-8 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition">
              Learn More
            </button>
          </div>

        </div>
      </section>

      {/* Statistics */}

      <section className="bg-white py-14 shadow-inner">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center px-6">

          <div className="bg-emerald-50 rounded-2xl p-8 hover:shadow-xl transition">

            <BuildingOffice2Icon className="w-12 h-12 text-emerald-600 mx-auto" />

            <h2 className="text-4xl font-bold mt-4 text-gray-800">14+</h2>

            <p className="text-gray-600 mt-2">
              Years Experience
            </p>

          </div>

          <div className="bg-emerald-50 rounded-2xl p-8 hover:shadow-xl transition">

            <TrophyIcon className="w-12 h-12 text-emerald-600 mx-auto" />

            <h2 className="text-4xl font-bold mt-4 text-gray-800">100+</h2>

            <p className="text-gray-600 mt-2">
              Successful Projects
            </p>

          </div>

          <div className="bg-emerald-50 rounded-2xl p-8 hover:shadow-xl transition">

            <UsersIcon className="w-12 h-12 text-emerald-600 mx-auto" />

            <h2 className="text-4xl font-bold mt-4 text-gray-800">5000+</h2>

            <p className="text-gray-600 mt-2">
              Happy Customers
            </p>

          </div>

        </div>

      </section>

      {/* CEO */}

      <section className="max-w-5xl mx-auto py-16 px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Meet Our Founder
        </h2>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:flex items-center gap-10">

          <img
            src="/assets/ceo1.jpg"
            alt="CEO"
            className="w-60 h-60 rounded-full object-cover border-4 border-emerald-500 mx-auto md:mx-0"
          />

          <div>

            <h3 className="text-3xl font-bold text-gray-800">
              Mr. Chandan Nath
            </h3>

            <p className="text-emerald-600 font-semibold mt-2">
              Founder & CEO
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              "Our vision is to create modern communities by delivering
              high-quality real estate projects built on trust,
              transparency and customer satisfaction. Every project reflects
              our commitment towards excellence."
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-emerald-700 to-green-600 py-16 text-center text-white">

        <h2 className="text-4xl font-bold">
          Let's Build Your Dream Home
        </h2>

        <p className="mt-4 text-lg">
          Your trusted partner for premium residential projects.
        </p>

        <button className="mt-8 bg-white text-emerald-700 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
          Contact Us
        </button>

      </section>

    </div>
  );
};

export default About;