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
//     <div className="min-h-screen bg-gray-100 py-10 px-4">
//       <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
//         <table className="w-full">
//           {/* Header */}
//           <thead className="bg-indigo-900 text-white">
//             <tr>
//               <th className="px-6 py-4 text-left uppercase">Pairs</th>
//               <th className="px-6 py-4 text-left uppercase">Reward / Gift</th>
//               <th className="px-6 py-4 text-right uppercase">Cash Value</th>
//             </tr>
//           </thead>

//           {/* Body */}
//           <tbody>
//             {rewards.map((item, index) => (
//               <tr
//                 key={index}
//                 className={`border-b hover:bg-gray-50 transition ${
//                   item.pairs === "12 Pairs" || item.pairs === "220 Pairs"
//                     ? "bg-yellow-50"
//                     : ""
//                 }`}
//               >
//                 <td className="px-6 py-5 text-red-600 font-bold text-xl">
//                   {item.pairs}
//                 </td>

//                 <td className="px-6 py-5 text-blue-900 font-semibold text-xl">
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
    <div className="min-h-screen bg-gray-100 py-16 px-4">

      {/* Heading */}
      <div className="text-center mb-12">
        <p className="uppercase tracking-[5px] text-yellow-600 font-bold text-sm">
          Pair Achievement Rewards
        </p>

        <h1 className="mt-3 text-5xl font-extrabold">
          <span className="text-indigo-900">Rewards &amp; </span>
          <span className="text-yellow-500">Gifts</span>
        </h1>

        <p className="mt-4 text-gray-600 text-xl">
          Achieve pairs and unlock exciting gifts — or take the cash value instead
        </p>
      </div>

      {/* Table */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <table className="w-full">
          {/* Table Header */}
          <thead className="bg-indigo-900 text-white">
            <tr>
              <th className="px-6 py-5 text-left text-lg uppercase">
                Pairs
              </th>
              <th className="px-6 py-5 text-left text-lg uppercase">
                Reward / Gift
              </th>
              <th className="px-6 py-5 text-right text-lg uppercase">
                Cash Value
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {rewards.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50 transition duration-300"
              >
                <td className="px-6 py-5 text-red-600 font-bold text-xl">
                  {item.pairs}
                </td>

                <td className="px-6 py-5 text-indigo-900 font-semibold text-xl">
                  {item.reward}
                </td>

                <td className="px-6 py-5 text-right text-xl font-medium text-gray-900">
                  {item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Rewards;