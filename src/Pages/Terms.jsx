// import React from "react";

// const Terms = () => {
//   return (
//     <div className="max-w-3xl mx-auto p-6 text-gray-800">
//       <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>

//       <p className="mb-4">
//         Welcome to our website! By accessing or using this website, you agree to
//         comply with and be bound by the following terms and conditions. If you
//         do not agree with these terms, please do not use our services.
//       </p>

//       <h2 className="text-xl font-semibold mb-2">1. Use of Website</h2>
//       <p className="mb-4">
//         You agree to use this website for lawful purposes only. Any use that
//         violates applicable laws or regulations is strictly prohibited.
//       </p>

//       <h2 className="text-xl font-semibold mb-2">2. Intellectual Property</h2>
//       <p className="mb-4">
//         All content on this website, including text, images, and logos, is the
//         property of our company and is protected by copyright laws. You may not
//         reproduce, distribute, or modify any content without permission.
//       </p>

//       <h2 className="text-xl font-semibold mb-2">3. User Accounts</h2>
//       <p className="mb-4">
//         If you create an account, you are responsible for maintaining the
//         confidentiality of your credentials. We are not liable for any
//         unauthorized access to your account.
//       </p>

//       <h2 className="text-xl font-semibold mb-2">4. Limitation of Liability</h2>
//       <p className="mb-4">
//         We are not responsible for any damages resulting from your use of this
//         website. All content is provided on an "as is" basis without warranties.
//       </p>

//       <h2 className="text-xl font-semibold mb-2">5. Changes to Terms</h2>
//       <p className="mb-4">
//         We may update these terms at any time. Your continued use of the website
//         after changes are posted constitutes acceptance of the revised terms.
//       </p>

//       <h2 className="text-xl font-semibold mb-2">6. Contact Us</h2>
//       <p className="mb-4">
//         If you have any questions about these terms, please contact us at
//         info@glowindia.co.in
//       </p>

//       <p className="text-sm text-gray-500">Last updated: March 2025</p>
//     </div>
//   );
// };

// export default Terms;





import React from "react";
import {
  DocumentTextIcon,
  ShieldCheckIcon,
  UserCircleIcon,
  ExclamationTriangleIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const terms = [
  {
    icon: <DocumentTextIcon className="w-8 h-8 text-emerald-600" />,
    title: "Use of Website",
    desc: "You agree to use this website only for lawful purposes and comply with all applicable laws and regulations.",
  },
  {
    icon: <ShieldCheckIcon className="w-8 h-8 text-emerald-600" />,
    title: "Intellectual Property",
    desc: "All website content including text, images and logos belongs to Glow India Parivar and cannot be copied without permission.",
  },
  {
    icon: <UserCircleIcon className="w-8 h-8 text-emerald-600" />,
    title: "User Accounts",
    desc: "You are responsible for maintaining the confidentiality of your account credentials.",
  },
  {
    icon: <ExclamationTriangleIcon className="w-8 h-8 text-emerald-600" />,
    title: "Limitation of Liability",
    desc: "We are not liable for any loss or damage resulting from the use of this website.",
  },
  {
    icon: <DocumentTextIcon className="w-8 h-8 text-emerald-600" />,
    title: "Changes to Terms",
    desc: "These terms may change at any time. Continued use of the website means you accept the updated terms.",
  },
  {
    icon: <EnvelopeIcon className="w-8 h-8 text-emerald-600" />,
    title: "Contact Us",
    desc: "For any questions regarding these terms, contact us at info@glowindia.co.in.",
  },
];

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-700 via-gray-700 to-slate-900 py-16 text-center text-white">
        <h1 className="text-5xl font-bold">Terms & Conditions</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          Please read these Terms & Conditions carefully before using our
          website and services.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-2 gap-8">

          {terms.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6"
            >
              <div className="mb-4">{item.icon}</div>

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
        <div className="mt-12 bg-white rounded-2xl shadow-md p-6 text-center">
          <p className="text-gray-600">
            By using this website, you agree to abide by all Terms &
            Conditions mentioned above.
          </p>

          {/* <p className="mt-4 text-sm text-gray-500">
            Last Updated: March 2025
          </p> */}
        </div>

      </div>
    </div>
  );
};

export default Terms;