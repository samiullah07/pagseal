import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PagsealLogo = () => (
  <div className="flex items-center">
    <img src="/image.png" alt="Pagseal Logo" className="h-8 w-auto" />
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white backdrop-blur-md shadow-sm border-b border-gray-100' 
        : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <PagsealLogo />
          </motion.div>

          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-sm">
              Apply Now
            </button>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
