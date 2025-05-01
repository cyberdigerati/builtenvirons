import React, { useState } from 'react';
import InquiryForm from './InquiryForm';
import PrivacyPolicy from './PrivacyPolicy';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-serif">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-y-auto">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-green-900 via-gray-800 to-gray-900 animate-gradient-x"></div>
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center pb-32">
          {' '}
          {/* Increased padding */}
          <div className="mb-8">
            <img
              src="/logo.png"
              alt="BuiltEnvirons"
              className="mx-auto w-40 h-auto mb-4"
            />
            <h2 className="text-2xl md:text-3xl text-gray-200 font-light tracking-wide">
              BUILTENVIRONS.COM
            </h2>
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
            The Nexus Between Built & Natural Environments
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-6 max-w-3xl mx-auto font-light">
            This is not just a domain. it is a digital foundation for the next
            era of sustainable design, smart cities, and regenerative
            infrastructure.
          </p>
          <p className="text-2xl md:text-3xl text-green-300 mb-10 font-light">
            Available Exclusively by Private Negotiation - Inquiries Accepted
            from Verified Entities by Private Invitation
          </p>
          {showInquiryForm ? (
            <div className="w-full max-w-xl mx-auto px-4">
              <InquiryForm />
            </div>
          ) : (
            <button
              onClick={() => setShowInquiryForm(true)}
              className="border border-white hover:bg-white hover:text-green-900 text-white px-8 py-3 rounded-none transition duration-300 text-lg tracking-wide"
            >
              Inquire for Private Acquisition
            </button>
          )}
        </div>
      </section>
      {/* Vision Carousel Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-gray-800 text-center mb-16 font-light">
            The Vision
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: 'Smart Cities',
                description: 'Designing the future, one system at a time.',
              },
              {
                title: 'Regenerative Architecture',
                description: 'Buildings that heal the earth.',
              },
              {
                title: 'Built Innovation',
                description:
                  'Where construction meets cutting-edge technology.',
              },
              {
                title: 'Infrastructure Intelligence',
                description:
                  'Elevating physical systems with digital innovation.',
              },
              {
                title: 'Urban Analytics',
                description: "Data-driven solutions for tomorrow's cities.",
              },
              {
                title: 'Spatial Design',
                description:
                  'Creating environments that enhance human experience.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 border border-gray-100 hover:shadow-lg transition duration-300"
              >
                <h3 className="text-2xl text-green-800 mb-4 font-normal">
                  {item.title}
                </h3>
                <p className="text-gray-600 italic">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-gray-800 text-center mb-16 font-light">
            Why BuiltEnvirons.com?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="p-6">
              <h3 className="text-xl text-green-800 mb-3">The Domain</h3>
              <p className="text-gray-700">
                100% premium, dictionary-grade, instantly memorable
              </p>
            </div>

            <div className="p-6">
              <h3 className="text-xl text-green-800 mb-3">The Opportunity</h3>
              <p className="text-gray-700">
                Define the future of built spaces, lead the industry
                transformation
              </p>
            </div>

            <div className="p-6">
              <h3 className="text-xl text-green-800 mb-3">The Audience</h3>
              <p className="text-gray-700">
                From architects and developers to tech innovators and smart city
                planners
              </p>
            </div>

            <div className="p-6">
              <h3 className="text-xl text-green-800 mb-3">The Future</h3>
              <p className="text-gray-700">
                The digital headquarters for the built environment revolution
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">
            This is a privately held digital asset. All rights reserved.
          </p>
          <p className="mb-8">
            Not affiliated with any third-party company or platform.
          </p>
          <p className="text-gray-300">
            Now accepting inquiries for strategic acquisition.
          </p>

          <div className="mt-12 text-sm">
            <p>© 2025 BuiltEnvirons.com</p>
            <div className="mt-6 text-xs">
              <button
                onClick={() => setShowPrivacyPolicy(true)}
                className="text-gray-500 hover:text-gray-300 underline"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </footer>
      {/* Privacy Policy Modal */}
      {showPrivacyPolicy && (
        <PrivacyPolicy onClose={() => setShowPrivacyPolicy(false)} />
      )}
      <Analytics />
    </div>
  );
}

export default App;
