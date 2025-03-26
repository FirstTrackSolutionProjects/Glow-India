import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
      
      <p className="text-lg mb-4">
        Welcome to our real estate website. Your privacy is important to us. This Privacy Policy outlines how we
        collect, use, and protect your personal information.
      </p>

      <h2 className="text-2xl font-semibold mt-6">1. Information We Collect</h2>
      <p className="mt-2">
        We collect personal information that you provide to us, such as:
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>Name and contact details (email, phone number, address)</li>
        <li>Property preferences and search history</li>
        <li>Financial information for mortgage calculations</li>
        <li>Any other details you provide through forms or inquiries</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">2. How We Use Your Information</h2>
      <p className="mt-2">We use your information for the following purposes:</p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>To provide real estate listings and recommendations</li>
        <li>To contact you regarding properties of interest</li>
        <li>To improve our services and user experience</li>
        <li>To comply with legal requirements</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">3. How We Protect Your Data</h2>
      <p className="mt-2">
        We take data security seriously and implement industry-standard measures to protect your personal information.
        However, no method of transmission over the internet is 100% secure.
      </p>

      <h2 className="text-2xl font-semibold mt-6">4. Third-Party Sharing</h2>
      <p className="mt-2">
        We do not sell or rent your personal information. We may share your details with trusted partners such as:
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>Mortgage lenders and financial institutions</li>
        <li>Verified real estate agents</li>
        <li>Legal authorities when required by law</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">5. Your Rights</h2>
      <p className="mt-2">
        You have the right to request access to your personal data, ask for corrections, or request data deletion. To
        do so, contact us at <span className="text-blue-500">info@glowindia.co.in</span>
      </p>

      <h2 className="text-2xl font-semibold mt-6">6. Updates to This Policy</h2>
      <p className="mt-2">
        We may update this Privacy Policy from time to time. Please review it periodically for changes.
      </p>

      <p className="text-center mt-6 text-gray-600">Last updated: March 2025</p>
    </div>
  );
}
