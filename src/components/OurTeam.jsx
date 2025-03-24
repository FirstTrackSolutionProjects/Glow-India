// import React from 'react';

// const teamMembers = [
//   { name: 'John Doe', role: 'Founder & CEO', img: 'https://via.placeholder.com/150', bgColor: 'bg-blue-100' },
//   { name: 'Jane Smith', role: 'Head of Sales', img: 'https://via.placeholder.com/150', bgColor: 'bg-green-100' },
//   { name: 'Michael Lee', role: 'Marketing Director', img: 'https://via.placeholder.com/150', bgColor: 'bg-yellow-100' },
//   { name: 'Sara Wilson', role: 'Customer Support Lead', img: 'https://via.placeholder.com/150', bgColor: 'bg-purple-100' },
// ];

// const OurTeam = () => {
//   return (
//     <div className="py-12 bg-gray-50">
//       <h2 className="text-4xl font-bold text-center mb-8">Meet Our Team</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto max-w-6xl px-4">
//         {teamMembers.map((member, index) => (
//           <div key={index} className={`${member.bgColor} rounded-2xl shadow-md p-6 flex flex-col items-center`}>
//             <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 overflow-hidden">
//               <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
//             </div>
//             <h3 className="text-xl font-semibold">{member.name}</h3>
//             <p className="text-gray-500">{member.role}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurTeam;