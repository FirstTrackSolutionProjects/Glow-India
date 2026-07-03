// import React from "react";
// import { FaCheckCircle } from "react-icons/fa";

// const plans = [
//   {
//     title: "Plan A",
//     price: "₹1,656",
//     subtitle: "Joining Fees · Glow India Watch",
//     features: [
//       "Direct / Spill Bonus ₹300",
//       "Hyper Matching ₹300",
//       "Remuneration (12 Months)",
//       "Gift Watch",
//     ],
//   },
//   {
//     title: "Plan B",
//     price: "₹50,000",
//     subtitle: "Insurance + Tour",
//     badge: "POPULAR",
//     features: [
//       "Direct / Spill Bonus ₹2,000",
//       "Hyper Matching ₹2,000",
//       "Travel Benefits",
//       "Health Insurance",
//     ],
//   },
//   {
//     title: "Plan C (EMI)",
//     price: "₹25,000",
//     subtitle: "Part Payment",
//     features: [
//       "Direct Bonus ₹25,000",
//       "Hyper Matching ₹25,000",
//       "12 Month Income",
//       "Flexible EMI",
//     ],
//   },
//   {
//     title: "Plan C (Full)",
//     price: "₹50,000",
//     subtitle: "Full Payment",
//     features: [
//       "Direct Bonus ₹50,000",
//       "Hyper Matching ₹50,000",
//       "12 Month Income",
//       "Farm Benefits",
//     ],
//   },
// ];

// const BusinessPlans = () => {
//   return (
//     <section className="bg-gray-100 py-14">
//       <div className="max-w-7xl mx-auto px-5">

//         <h2 className="text-4xl font-bold text-center mb-2">
//           <span className="text-blue-900">Our Business</span>{" "}
//           <span className="text-yellow-500">Plans</span>
//         </h2>

//         <p className="text-center text-gray-600 mb-10">
//           Every plan earns Direct Bonus, Hyper Matching & Monthly Income.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

//           {plans.map((plan, index) => (
//             <div
//               key={index}
//               className={`group relative bg-white rounded-2xl p-6 border shadow-lg transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl ${
//                 plan.badge
//                   ? "border-2 border-yellow-500"
//                   : "border-gray-200 hover:border-yellow-500"
//               }`}
//             >
//               {plan.badge && (
//                 <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow">
//                   {plan.badge}
//                 </span>
//               )}

//               <h3 className="text-2xl font-bold text-blue-900 group-hover:text-yellow-500 transition duration-300">
//                 {plan.title}
//               </h3>

//               <h4 className="text-4xl font-bold text-yellow-500 my-3">
//                 {plan.price}
//               </h4>

//               <p className="text-gray-500 mb-5">
//                 {plan.subtitle}
//               </p>

//               <ul className="space-y-3">
//                 {plan.features.map((item, i) => (
//                   <li key={i} className="flex items-center gap-2">
//                     <FaCheckCircle className="text-green-600 group-hover:text-yellow-500 transition duration-300" />
//                     <span className="text-gray-700">{item}</span>
//                   </li>
//                 ))}
//               </ul>

//               <button className="w-full mt-6 bg-blue-900 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-yellow-500 hover:text-black">
//                 Choose Plan
//               </button>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default BusinessPlans;






import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const plans = [
  {
    title: "Plan A",
    price: "₹1,656",
    subtitle: "Joining Fees · Glow India Watch",
    features: [
      "Direct / Spill Bonus ₹300",
      "Hyper Matching ₹300",
      "Remuneration (12 Months)",
      "Gift Watch",
    ],
  },
  {
    title: "Plan B",
    price: "₹50,000",
    subtitle: "Insurance + Tour",
    badge: "POPULAR",
    features: [
      "Direct / Spill Bonus ₹2,000",
      "Hyper Matching ₹2,000",
      "Travel Benefits",
      "Health Insurance",
    ],
  },
  {
    title: "Plan C (EMI)",
    price: "₹25,000",
    subtitle: "Part Payment",
    features: [
      "Direct Bonus ₹25,000",
      "Hyper Matching ₹25,000",
      "12 Month Income",
      "Flexible EMI",
    ],
  },
  {
    title: "Plan C (Full)",
    price: "₹50,000",
    subtitle: "Full Payment",
    features: [
      "Direct Bonus ₹50,000",
      "Hyper Matching ₹50,000",
      "12 Month Income",
      "Farm Benefits",
    ],
  },
];

const BusinessPlans = () => {
  return (
    <section className="bg-gray-100 py-14">
      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-4xl font-bold text-center mb-2">
          <span className="text-blue-900">Our Business</span>{" "}
          <span className="text-yellow-500">Plans</span>
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Every plan earns Direct Bonus, Hyper Matching & Monthly Income.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-6 border shadow-lg transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl ${
                plan.badge
                  ? "border-2 border-yellow-500"
                  : "border-gray-200 hover:border-yellow-500"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow">
                  {plan.badge}
                </span>
              )}

              <h3 className="text-2xl font-bold text-blue-900 group-hover:text-yellow-500 transition duration-300">
                {plan.title}
              </h3>

              <h4 className="text-4xl font-bold text-yellow-500 my-3">
                {plan.price}
              </h4>

              <p className="text-gray-500 mb-5">
                {plan.subtitle}
              </p>

              <ul className="space-y-3">
                {plan.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-600 group-hover:text-yellow-500 transition duration-300" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full mt-6 bg-blue-900 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-yellow-500 hover:text-black">
                Choose Plan
              </button>
            </div>
          ))}

        </div>

        {/* Three Powerful Incomes */}

        <div className="mt-16 bg-[#18276D] rounded-3xl overflow-hidden shadow-2xl">

          <div className="grid lg:grid-cols-4">

            {/* Left */}
            <div className="bg-yellow-500 p-8 flex flex-col justify-center">
              <p className="uppercase text-sm font-bold tracking-widest text-blue-900">
                Glow India
              </p>

              <h2 className="text-4xl font-bold text-blue-900 mt-3">
                Three Powerful Incomes
              </h2>

              <p className="mt-4 text-blue-900">
                Earn three different income streams from every successful business activity.
              </p>
            </div>

            {/* Direct Income */}
            <div className="p-8 border-l border-white/20">
              <h3 className="text-2xl font-bold text-yellow-400">
                Direct / Spill Bonus
              </h3>

              <p className="text-gray-300 mt-4">
                Get instant bonus when you sponsor members directly or receive spill members.
              </p>
            </div>

            {/* Hyper Matching */}
            <div className="p-8 border-l border-white/20">
              <h3 className="text-2xl font-bold text-yellow-400">
                Hyper Matching
              </h3>

              <p className="text-gray-300 mt-4">
                Earn daily matching income based on binary pairing.
              </p>
            </div>

            {/* Remuneration */}
            <div className="p-8 border-l border-white/20">
              <h3 className="text-2xl font-bold text-yellow-400">
                Monthly Remuneration
              </h3>

              <p className="text-gray-300 mt-4">
                Receive fixed monthly remuneration for up to 12 months.
              </p>
            </div>

          </div>
          {/* Bottom Section */}
          <div className="bg-white px-8 py-10">

            <h3 className="text-3xl font-bold text-center text-blue-900">
              Matching Income Example
            </h3>

            <p className="text-center text-gray-600 mt-2 mb-8">
              Example of Binary Matching Income Calculation
            </p>

            <div className="grid md:grid-cols-3 gap-6">

              {/* Card 1 */}
              <div className="bg-blue-50 rounded-2xl p-6 shadow hover:shadow-xl transition duration-300">
                <h4 className="text-2xl font-bold text-blue-900">
                  ₹3,000 Income
                </h4>

                <ul className="mt-5 space-y-3 text-gray-700">
                  <li>✅ Direct Joining : 100</li>
                  <li>✅ Binary Pair : 70</li>
                  <li>✅ Matching Bonus</li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="bg-yellow-50 rounded-2xl p-6 shadow hover:shadow-xl transition duration-300">
                <h4 className="text-2xl font-bold text-yellow-600">
                  ₹6,000 Income
                </h4>

                <ul className="mt-5 space-y-3 text-gray-700">
                  <li>✅ Direct Joining : 120</li>
                  <li>✅ Binary Pair : 90</li>
                  <li>✅ Matching Bonus</li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="bg-green-50 rounded-2xl p-6 shadow hover:shadow-xl transition duration-300">
                <h4 className="text-2xl font-bold text-green-600">
                  ₹10,000 Income
                </h4>

                <ul className="mt-5 space-y-3 text-gray-700">
                  <li>✅ Direct Joining : 150</li>
                  <li>✅ Binary Pair : 120</li>
                  <li>✅ Matching Bonus</li>
                </ul>
              </div>

            </div>

            {/* Note */}
            <div className="mt-10 bg-blue-900 text-white rounded-2xl p-6">
              <h4 className="text-xl font-bold text-yellow-400 mb-3">
                Important Note
              </h4>

              <p className="leading-7 text-gray-200">
                Income shown above is for demonstration purposes only.
                Actual earnings depend on your business performance,
                binary matching, direct referrals, and company policies.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default BusinessPlans;