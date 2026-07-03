// import React from "react";
// import { FaCheckCircle } from "react-icons/fa";

// const plans = [
//   {
//     title: "Plan A",
//     price: "₹1,656",
//     subtitle: "Joining Fees · Glow India Watch",
//     features: [
//       "Direct / Spill Bonus: ₹300",
//       "Hyper Matching: ₹300",
//       "Remuneration / Month",
//       "Gents / Ladies / Wall Watch",
//     ],
//   },
//   {
//     title: "Plan B",
//     price: "₹50,000",
//     subtitle: "Joining Fees · Insurance + Tour",
//     badge: "POPULAR",
//     features: [
//       "Direct / Spill Bonus: ₹2,000",
//       "Hyper Matching: ₹2,000",
//       "Remuneration / Month",
//       "Travel (National / International)",
//       "Health & Life Insurance",
//     ],
//   },
//   {
//     title: "Plan C · Part Payment",
//     price: "EMI Model",
//     subtitle: "Farm Project · Part Payment",
//     features: [
//       "Direct / Spill Bonus: ₹25,000",
//       "Hyper Matching: ₹25,000",
//       "Remuneration / Month",
//       "Flexible EMI Plans",
//     ],
//   },
//   {
//     title: "Plan C · Full Payment",
//     price: "Full Pay",
//     subtitle: "Farm Project · Full Payment",
//     features: [
//       "Direct / Spill Bonus: ₹50,000",
//       "Hyper Matching: ₹50,000",
//       "Remuneration / Month",
//       "Maximum Farm Benefits",
//     ],
//   },
// ];

// const BusinessPlans = () => {
//   return (
//     <section className="bg-gray-100 py-16 px-4">
//       <div className="max-w-7xl mx-auto text-center">

//         <p className="text-yellow-600 font-semibold uppercase tracking-widest">
//           Income Plans
//         </p>

//         <h2 className="text-4xl font-bold mt-2">
//           <span className="text-blue-900">Our Business</span>{" "}
//           <span className="text-yellow-600">Plans</span>
//         </h2>

//         <p className="text-gray-600 mt-4 mb-12">
//           Every plan earns 3 incomes — Direct / Spill Bonus, Hyper Matching &
//           Remuneration.
//         </p>

//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {plans.map((plan, index) => (
//             <div
//               key={index}
//               className={`relative bg-white rounded-3xl p-7 shadow hover:shadow-xl transition ${
//                 plan.badge ? "border-2 border-yellow-500" : ""
//               }`}
//             >
//               {plan.badge && (
//                 <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-white text-xs px-4 py-1 rounded-full font-bold">
//                   {plan.badge}
//                 </span>
//               )}

//               <h3 className="text-2xl font-bold text-blue-900">
//                 {plan.title}
//               </h3>

//               <h4 className="text-4xl font-bold text-yellow-600 mt-4">
//                 {plan.price}
//               </h4>

//               <p className="text-gray-500 mt-2">{plan.subtitle}</p>

//               <ul className="mt-6 space-y-3 text-left">
//                 {plan.features.map((item, i) => (
//                   <li key={i} className="flex items-start gap-2">
//                     <FaCheckCircle className="text-green-600 mt-1" />
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>

//               <button className="mt-8 w-full bg-blue-900 text-white py-3 rounded-xl hover:bg-blue-700 transition">
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
      </div>
    </section>
  );
};

export default BusinessPlans;