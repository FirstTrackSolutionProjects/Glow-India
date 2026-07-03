// import React from "react";

// export default function PrivacyPolicy() {
//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
      
//       <p className="text-lg mb-4">
//         Welcome to our real estate website. Your privacy is important to us. This Privacy Policy outlines how we
//         collect, use, and protect your personal information.
//       </p>

//       <h2 className="text-2xl font-semibold mt-6">1. Information We Collect</h2>
//       <p className="mt-2">
//         We collect personal information that you provide to us, such as:
//       </p>
//       <ul className="list-disc list-inside mt-2 space-y-1">
//         <li>Name and contact details (email, phone number, address)</li>
//         <li>Property preferences and search history</li>
//         <li>Financial information for mortgage calculations</li>
//         <li>Any other details you provide through forms or inquiries</li>
//       </ul>

//       <h2 className="text-2xl font-semibold mt-6">2. How We Use Your Information</h2>
//       <p className="mt-2">We use your information for the following purposes:</p>
//       <ul className="list-disc list-inside mt-2 space-y-1">
//         <li>To provide real estate listings and recommendations</li>
//         <li>To contact you regarding properties of interest</li>
//         <li>To improve our services and user experience</li>
//         <li>To comply with legal requirements</li>
//       </ul>

//       <h2 className="text-2xl font-semibold mt-6">3. How We Protect Your Data</h2>
//       <p className="mt-2">
//         We take data security seriously and implement industry-standard measures to protect your personal information.
//         However, no method of transmission over the internet is 100% secure.
//       </p>

//       <h2 className="text-2xl font-semibold mt-6">4. Third-Party Sharing</h2>
//       <p className="mt-2">
//         We do not sell or rent your personal information. We may share your details with trusted partners such as:
//       </p>
//       <ul className="list-disc list-inside mt-2 space-y-1">
//         <li>Mortgage lenders and financial institutions</li>
//         <li>Verified real estate agents</li>
//         <li>Legal authorities when required by law</li>
//       </ul>

//       <h2 className="text-2xl font-semibold mt-6">5. Your Rights</h2>
//       <p className="mt-2">
//         You have the right to request access to your personal data, ask for corrections, or request data deletion. To
//         do so, contact us at <span className="text-blue-500">info@glowindia.co.in</span>
//       </p>

//       <h2 className="text-2xl font-semibold mt-6">6. Updates to This Policy</h2>
//       <p className="mt-2">
//         We may update this Privacy Policy from time to time. Please review it periodically for changes.
//       </p>

//       <p className="text-center mt-6 text-gray-600">Last updated: March 2025</p>
//     </div>
//   );
// }





import React from "react";
import {
  ShieldCheckIcon,
  LockClosedIcon,
  UserIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

const policies = [
  {
    icon: <UserIcon className="w-8 h-8 text-emerald-600" />,
    title: "Information We Collect",
    desc: "We collect your name, contact details, property preferences and other information you provide while using our services.",
  },
  {
    icon: <DocumentTextIcon className="w-8 h-8 text-emerald-600" />,
    title: "How We Use Your Information",
    desc: "Your information helps us provide better property recommendations, customer support and improve our services.",
  },
  {
    icon: <LockClosedIcon className="w-8 h-8 text-emerald-600" />,
    title: "Data Protection",
    desc: "We use industry-standard security practices to keep your personal information safe and secure.",
  },
  {
    icon: <ShieldCheckIcon className="w-8 h-8 text-emerald-600" />,
    title: "Third-Party Sharing",
    desc: "We never sell your personal information. Data is only shared with trusted partners when necessary.",
  },
  {
    icon: <CheckBadgeIcon className="w-8 h-8 text-emerald-600" />,
    title: "Your Rights",
    desc: "You can request access, correction or deletion of your personal information at any time.",
  },
  {
    icon: <EnvelopeIcon className="w-8 h-8 text-emerald-600" />,
    title: "Contact Us",
    desc: "For any privacy-related questions, contact us at info@glowindia.co.in.",
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 py-16 text-white text-center">
        <h1 className="text-5xl font-bold">Privacy Policy</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          Your privacy is important to us. We are committed to protecting your
          personal information with complete transparency.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-2 gap-8">

          {policies.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
            >
              <div className="mb-4">
                {item.icon}
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                {item.title}
              </h2>

              <p className="text-gray-600 leading-7">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* Footer */}
        <div className="mt-12 bg-white rounded-2xl shadow-md p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800">
            Your Trust Matters
          </h3>

          <p className="text-gray-600 mt-4 leading-7">
            Glow India Parivar values your trust and is committed to keeping
            your personal information secure while delivering the best real
            estate services.
          </p>

          {/* <p className="mt-6 text-sm text-gray-500">
            Last Updated: March 2025
          </p> */}
        </div>

      </div>
    </div>
  );
}