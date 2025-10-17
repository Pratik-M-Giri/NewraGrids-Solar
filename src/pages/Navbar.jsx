import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX, HiPhone } from 'react-icons/hi';
import { FaMapMarkerAlt, FaWhatsapp, FaSun } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  // Auto-close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Disable scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Main navigation links (Admin removed)
  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Calculator', to: '/calculator' },
    { label: 'Solar Map', to: '/solarmap' },
    { label: 'About Us', to: '/about' },
    { label: 'Contact', to: '/contact' }
  ];

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white sticky top-0 z-50 border-b border-gray-200 shadow-lg"
      >
        <div className="w-full flex items-center justify-between mx-auto px-6 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl shadow-md">
              <FaSun className="text-white text-xl" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">NewRa Grids</h1>
              <p className="text-xs text-green-600 font-medium">Solar Energy Solutions</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Navigation Links */}
            <ul className="flex items-center space-x-1 font-medium">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.to}
                    className={`relative py-3 px-5 text-sm font-semibold transition-all duration-300 rounded-xl group ${
                      currentPath === link.to
                        ? 'text-green-600 bg-green-50 shadow-inner'
                        : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                    <span 
                      className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-green-500 transition-all duration-300 ${
                        currentPath === link.to ? 'w-6' : 'w-0 group-hover:w-6'
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right-side Buttons */}
            <div className="flex items-center space-x-3">
              {/* Location Button */}
              <button 
                onClick={() => window.open('https://maps.app.goo.gl/your-location-link', '_blank')}
                className="flex items-center space-x-2 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 text-gray-700 font-semibold py-2.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-200"
              >
                <FaMapMarkerAlt className="w-4 h-4 text-green-600" />
                <span className="text-sm">Locate Us</span>
              </button>
              
              {/* Call Now Button */}
              <a
                href="tel:+911234567890"
                className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-2.5 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <HiPhone size={16} />
                <span className="text-sm">Call Now</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Location Button - Mobile */}
            <button 
              onClick={() => window.open('https://maps.app.goo.gl/your-location-link', '_blank')}
              className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 text-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-200"
            >
              <FaMapMarkerAlt className="w-4 h-4 text-green-600" />
            </button>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center justify-center w-10 h-10 bg-white text-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200"
            >
              <HiMenu size={20} />
            </button>
          </div>
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/+911234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed z-50 flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 bottom-6 right-6"
        >
          <FaWhatsapp size={24} />
        </a>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 right-0 w-80 h-full bg-gradient-to-b from-white to-gray-50 z-50 shadow-2xl p-6 lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 100, damping: 30 }}
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-md">
                    <FaSun className="text-white text-lg" />
                  </div>
                  <div>
                    <h1 className="text-lg font-bold text-gray-800">NewRa Grids</h1>
                    <p className="text-xs text-green-600 font-medium">Solar Energy</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-200"
                >
                  <HiX size={18} className="text-gray-600" />
                </button>
              </div>

              {/* Navigation Links */}
              <ul className="flex flex-col space-y-2 mb-8">
                {navLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.to}
                      onClick={() => setIsMenuOpen(false)}
                      className={`w-full flex items-center py-3 px-4 rounded-xl text-base font-semibold transition-all duration-300 ${
                        currentPath === link.to
                          ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg'
                          : 'text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 hover:text-green-600'
                      }`}
                    >
                      {link.label}
                      {currentPath === link.to && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="ml-auto w-2 h-2 bg-white rounded-full"
                        />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="space-y-3 p-4 bg-white rounded-xl shadow-lg border border-gray-100">
                <button 
                  onClick={() => {
                    window.open('https://maps.app.goo.gl/your-location-link', '_blank');
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-200"
                >
                  <FaMapMarkerAlt className="w-4 h-4 text-green-600" />
                  <span>Locate Us</span>
                </button>

                <a
                  href="tel:+911234567890"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <HiPhone size={16} />
                  <span>Call Now</span>
                </a>
              </div>

           
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;