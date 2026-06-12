import React from 'react';
import { Youtube, Linkedin } from 'lucide-react';

const PagsealLogo = () => (
  <div className="flex items-center">
    <img src="/image.png" alt="Pagseal Logo" className="h-8 w-auto" />
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <PagsealLogo />
            <p className="mt-4 text-gray-600 max-w-md leading-relaxed">
              Independent Trust Mark for AI Privacy and Governance. 
              Pagseal certifies that AI applications meet privacy and governance readiness standards.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <div className="space-y-2 text-gray-600">
              <p>info@pagseal.com</p>
              <p>Pilot Program Available</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal</h3>
            <div className="space-y-2">
              <a 
                href="https://policies.google.com/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a 
                href="https://policies.google.com/terms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2026 Pagseal. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200">
                Independent Trust Mark
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
