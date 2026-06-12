import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

const CookieModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 animate-slide-in-bottom">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-2xl max-w-[1230px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Cookie Icon and Text */}
          <div className="flex items-start gap-4 flex-1">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-600">
              <Cookie className="w-6 h-6 text-gray-300" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                This website uses cookies.
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                We use cookies to analyze website traffic and optimize your website experience. 
                By accepting our use of cookies, your data will be aggregated with all other user data.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={handleDecline}
              className="px-6 py-2 text-gray-300 hover:text-white font-medium transition-colors duration-200"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 border border-cyan-500"
            >
              Accept
            </button>
            <button
              onClick={handleClose}
              className="p-2 text-gray-400 hover:text-gray-200 transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieModal;
