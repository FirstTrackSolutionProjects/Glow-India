import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const stats = [
  {
    value: "5+",
    label: "Live Projects",
  },
  {
    value: "1000+",
    label: "Happy Members",
  },
  {
    value: "26+",
    label: "Achiever Tours",
  },
  {
    value: "100%",
    label: "Trust & Care",
  },
];

const OwnerMessage = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div className="bg-[#1d2575] rounded-3xl overflow-hidden text-center p-8 shadow-xl">

          <img
            src="/manager_Img.png"
            alt="Managing Director"
            className="w-100 mx-auto object-contain"
          />

          <h2 className="text-5xl text-white mt-6 font-light">
            Mr. Chandan Nath
          </h2>

          <p className="text-yellow-400 text-2xl mt-3 font-semibold">
            Managing Director · Real Estate Owner
          </p>

        </div>

        {/* Right Side */}
        <div>

          <p className="uppercase tracking-[6px] text-yellow-600 font-semibold mb-2">
            Meet Our Owner
          </p>

          <h2 className="text-5xl font-extrabold leading-tight">
            <span className="text-[#1d2575]">
              A Message From Our
            </span>{" "}
            <span className="text-yellow-500">
              Managing Director
            </span>
          </h2>

          <FaQuoteLeft className="text-yellow-500 text-4xl mt-10 mb-5" />

          <p className="text-gray-700 text-xl leading-10">
            As the Managing Director, my focus is on ensuring that every
            project we undertake reflects our commitment to quality,
            sustainability, and customer satisfaction.
            We embrace cutting-edge technology and sustainable practices to
            stay ahead of the curve while delivering exceptional results
            for our clients.
          </p>

          <p className="text-gray-700 text-xl leading-10 mt-4">
            We believe in building not just properties but trust and
            long-term relationships.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">

            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-yellow-300 shadow-md py-8 text-center hover:shadow-xl transition"
              >
                <h3 className="text-4xl font-bold text-yellow-500">
                  {item.value}
                </h3>

                <p className="text-gray-700 text-lg mt-2">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default OwnerMessage;