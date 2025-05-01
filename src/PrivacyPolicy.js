import React from 'react';

function PrivacyPolicy({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-white text-gray-800 p-8 max-w-2xl max-h-[80vh] overflow-y-auto rounded">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-light">Privacy Policy</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4 text-sm">
          <p>Last Updated: April 16, 2025</p>

          <h3 className="text-lg font-medium mt-4">
            1. Information We Collect
          </h3>
          <p>
            When you submit an inquiry through our form, we collect the
            following information:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Company name (if provided)</li>
            <li>Message content</li>
          </ul>

          <h3 className="text-lg font-medium mt-4">
            2. How We Use Your Information
          </h3>
          <p>
            The information you provide is used solely for the purpose of
            responding to your inquiry about the acquisition of
            BuiltEnvirons.com. We do not use this information for marketing
            purposes or share it with third parties except as necessary to
            process your inquiry.
          </p>

          <h3 className="text-lg font-medium mt-4">
            3. Data Storage and Security
          </h3>
          <p>
            Your inquiry data is transmitted securely using encryption and
            stored securely. We retain your information only as long as
            necessary to respond to your inquiry and complete any subsequent
            transactions.
          </p>

          <h3 className="text-lg font-medium mt-4">4. Your Rights</h3>
          <p>
            You have the right to request access to, correction of, or deletion
            of your personal information. To exercise these rights, please
            contact us at builtenvirons.com@proton.me.
          </p>

          <h3 className="text-lg font-medium mt-4">5. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at builtenvirons.com@proton.me.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
