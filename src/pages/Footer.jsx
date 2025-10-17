import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Headphones, Clock } from "lucide-react"; // import at the tops
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaSun, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <FaSun className="text-2xl text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">NewRa Grids</h3>
                <p className="text-green-300 text-sm font-medium">Solar Energy Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of sustainable solar energy solutions. Powering homes and businesses with clean, renewable energy for a greener future.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <FaFacebook className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors duration-300">
                <FaTwitter className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <FaInstagram className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <FaLinkedin className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-green-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Solar Calculator
                </Link>
              </li>
              <li>
                <Link to="/solarmap" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Solar Map
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-green-400">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Solar Panel Installation
              </li>
              <li className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Energy Monitoring
              </li>
              <li className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Maintenance & Support
              </li>
              <li className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Residential Solutions
              </li>
              <li className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Commercial Projects
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-green-400">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Office Address</p>
                  <p className="text-gray-400 text-sm">Auric city Chhatrapati Sambhajinagar</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <FaPhone className="text-green-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Phone Number</p>
                  <p className="text-gray-400 text-sm">+91 7219452831</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-green-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Email Address</p>
                  <p className="text-gray-400 text-sm">info@newragrids.com</p>
                </div>
              </div>

              {/* WhatsApp Quick Action */}
              <a 
                href="https://wa.me/9999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 mt-4"
              >
                <FaWhatsapp className="text-lg" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 NewRa Grids. All rights reserved.
            </div>
            
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-green-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-green-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-green-400 transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
      <div className="flex flex-wrap justify-center items-center gap-10 mt-10 pt-8 border-t border-gray-700">
  {/* ISO Certified */}
  <div className="text-center flex flex-col items-center">
    <div className="flex items-center gap-2 mb-1">
      <CheckCircle className="text-green-400 w-5 h-5" />
      <span className="text-green-400 text-sm font-semibold">ISO 9001:2015</span>
    </div>
    <div className="text-gray-400 text-xs">Quality Certified</div>
  </div>

  {/* 24/7 Support */}
  <div className="text-center flex flex-col items-center">
    <div className="flex items-center gap-2 mb-1">
      <Headphones className="text-green-400 w-5 h-5" />
      <span className="text-green-400 text-sm font-semibold">24/7 Support</span>
    </div>
    <div className="text-gray-400 text-xs">Always Available</div>
  </div>

  {/* Experience */}
  <div className="text-center flex flex-col items-center">
    <div className="flex items-center gap-2 mb-1">
      <Clock className="text-green-400 w-5 h-5" />
      <span className="text-green-400 text-sm font-semibold">5+ Years</span>
    </div>
    <div className="text-gray-400 text-xs">Experience</div>
  </div>
</div>
      </div>
    </footer>
  );
};

export default Footer;