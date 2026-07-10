// import React from "react";

// const rewards = [
//   { pairs: "3 Pairs", reward: "Tablet", value: "₹16,000" },
//   { pairs: "8 Pairs", reward: "Laptop", value: "₹40,000" },
//   { pairs: "12 Pairs", reward: "Scooty", value: "₹1,00,000" },
//   { pairs: "21 Pairs", reward: "Bike", value: "₹1,50,000" },
//   { pairs: "35 Pairs", reward: "Bullet", value: "₹2,50,000" },
//   { pairs: "65 Pairs", reward: "Maruti Suzuki Alto 800", value: "₹5,00,000" },
//   { pairs: "90 Pairs", reward: "Maruti Suzuki Dzire", value: "₹10,00,000" },
//   { pairs: "120 Pairs", reward: "Maruti Suzuki Brezza", value: "₹15,00,000" },
//   { pairs: "140 Pairs", reward: "Hyundai Creta", value: "₹20,00,000" },
//   { pairs: "180 Pairs", reward: "1 BHK Flat", value: "₹25,00,000" },
//   { pairs: "220 Pairs", reward: "2 BHK Flat", value: "₹50,00,000" },
//   { pairs: "300 Pairs", reward: "Villa", value: "₹75,00,000" },
// ];

// const Rewards = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 py-16 px-4">

//       {/* Heading */}
//       <div className="text-center mb-12">
//         <p className="uppercase tracking-[5px] text-yellow-600 font-bold text-sm">
//           Pair Achievement Rewards
//         </p>

//         <h1 className="mt-3 text-5xl font-extrabold">
//           <span className="text-indigo-900">Rewards &amp; </span>
//           <span className="text-yellow-500">Gifts</span>
//         </h1>

//         <p className="mt-4 text-gray-600 text-xl">
//           Achieve pairs and unlock exciting gifts — or take the cash value instead
//         </p>
//       </div>

//       {/* Table */}
//       <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
//         <table className="w-full">
//           {/* Table Header */}
//           <thead className="bg-indigo-900 text-white">
//             <tr>
//               <th className="px-6 py-5 text-left text-lg uppercase">
//                 Pairs
//               </th>
//               <th className="px-6 py-5 text-left text-lg uppercase">
//                 Reward / Gift
//               </th>
//               <th className="px-6 py-5 text-right text-lg uppercase">
//                 Cash Value
//               </th>
//             </tr>
//           </thead>

//           {/* Table Body */}
//           <tbody>
//             {rewards.map((item, index) => (
//               <tr
//                 key={index}
//                 className="border-b border-gray-200 hover:bg-gray-50 transition duration-300"
//               >
//                 <td className="px-6 py-5 text-red-600 font-bold text-xl">
//                   {item.pairs}
//                 </td>

//                 <td className="px-6 py-5 text-indigo-900 font-semibold text-xl">
//                   {item.reward}
//                 </td>

//                 <td className="px-6 py-5 text-right text-xl font-medium text-gray-900">
//                   {item.value}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//     </div>
//   );
// };

// export default Rewards;






import React from "react";

const rewards = [
  { pairs: "3 Pairs", reward: "Tablet", value: "₹16,000" },
  { pairs: "8 Pairs", reward: "Laptop", value: "₹40,000" },
  { pairs: "12 Pairs", reward: "Scooty", value: "₹1,00,000" },
  { pairs: "21 Pairs", reward: "Bike", value: "₹1,50,000" },
  { pairs: "35 Pairs", reward: "Bullet", value: "₹2,50,000" },
  { pairs: "65 Pairs", reward: "Maruti Suzuki Alto 800", value: "₹5,00,000" },
  { pairs: "90 Pairs", reward: "Maruti Suzuki Dzire", value: "₹10,00,000" },
  { pairs: "120 Pairs", reward: "Maruti Suzuki Brezza", value: "₹15,00,000" },
  { pairs: "140 Pairs", reward: "Hyundai Creta", value: "₹20,00,000" },
  { pairs: "180 Pairs", reward: "1 BHK Flat", value: "₹25,00,000" },
  { pairs: "220 Pairs", reward: "2 BHK Flat", value: "₹50,00,000" },
  { pairs: "300 Pairs", reward: "Villa", value: "₹75,00,000" },
];

const Rewards = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-3 sm:px-6">

  {/* Heading */}
  <div className="text-center mb-8">
    <p className="uppercase tracking-[3px] sm:tracking-[5px] text-yellow-600 font-bold text-xs sm:text-sm">
      Pair Achievement Rewards
    </p>

    <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold">
      <span className="text-indigo-900">Rewards &amp; </span>
      <span className="text-yellow-500">Gifts</span>
    </h1>

    <p className="mt-3 text-gray-600 text-sm sm:text-xl px-2">
      Achieve pairs and unlock exciting gifts — or take the cash value instead
    </p>
  </div>

  {/* Responsive Table */}
  <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
    <div className="overflow-x-auto">
      <table className="min-w-[650px] w-full">
        <thead className="bg-indigo-900 text-white">
          <tr>
            <th className="px-4 sm:px-6 py-4 text-left text-sm sm:text-lg uppercase">
              Pairs
            </th>
            <th className="px-4 sm:px-6 py-4 text-left text-sm sm:text-lg uppercase">
              Reward / Gift
            </th>
            <th className="px-4 sm:px-6 py-4 text-right text-sm sm:text-lg uppercase">
              Cash Value
            </th>
          </tr>
        </thead>

        <tbody>
          {rewards.map((item, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-50 transition"
            >
              <td className="px-4 sm:px-6 py-4 text-red-600 font-bold text-base sm:text-xl whitespace-nowrap">
                {item.pairs}
              </td>

              <td className="px-4 sm:px-6 py-4 text-indigo-900 font-semibold text-base sm:text-xl whitespace-nowrap">
                {item.reward}
              </td>

              <td className="px-4 sm:px-6 py-4 text-right text-base sm:text-xl font-medium text-gray-900 whitespace-nowrap">
                {item.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

</div>
  );
};

export default Rewards;







