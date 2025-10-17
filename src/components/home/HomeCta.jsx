import React from 'react'
import { motion } from "framer-motion";
import { FaArrowRight, FaCalculator, FaLeaf, FaMapMarkerAlt, FaSolarPanel, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ctaImage from "../../assets/radytoswitch.png";

const HomeCta = () => {
  return <>
  
  
  
    {/* Final CTA Section */}
<section className="py-20 bg-gradient-to-br from-gray-50 to-white w-full relative overflow-hidden">
  {/* Background Decorations */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-40"></div>
  
  <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">

      {/* Left: Enhanced Image Container */}
      <motion.div 
        className="flex justify-center relative"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="relative">
          <img
            src={ctaImage}
            alt="Solar Energy Solutions"
            className="w-full max-w-md lg:max-w-xl rounded-3xl shadow-2xl object-cover transform hover:shadow-3xl transition-all duration-500"
          />
          {/* Floating Badge */}
          <div className="absolute -top-4 -right-4 bg-yellow-400 text-green-900 px-6 py-3 rounded-2xl shadow-xl transform rotate-6">
            <div className="flex items-center gap-2 font-bold">
              <FaSun className="text-lg" />
              <span>Eco Friendly</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right: Enhanced Text Content */}
      <div className="text-center lg:text-left space-y-8">
        <div>
          <motion.span 
            className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            🎯 Limited Time Offer
          </motion.span>
          
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Ready to <span className="text-green-600">Switch</span> to Solar?
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Join <span className="font-semibold text-green-600">5,000+</span> satisfied customers who are saving money and helping the planet with NewRa Grids.
          </p>
        </div>

        {/* Features List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="flex items-center gap-3 text-gray-700">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <FaSun className="text-green-600 text-sm" />
            </div>
            <span className="font-medium">Save up to 90% on bills</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <FaLeaf className="text-green-600 text-sm" />
            </div>
            <span className="font-medium">Zero carbon emission</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <FaSolarPanel className="text-green-600 text-sm" />
            </div>
            <span className="font-medium">25 years warranty</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <FaMapMarkerAlt className="text-green-600 text-sm" />
            </div>
            <span className="font-medium">Free site survey</span>
          </div>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-8 py-5 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3 justify-center text-lg min-w-[200px]"
            >
              <FaArrowRight className="text-sm" />
              Get Free Consultation
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/calculator"
              className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold px-8 py-5 rounded-2xl transition-all duration-300 flex items-center gap-3 justify-center text-lg min-w-[200px] hover:shadow-xl"
            >
              <FaCalculator className="text-sm" />
              Calculate Savings
            </Link>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-green-200 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-green-300 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
            <span>5000+ Happy Customers</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold">★</span>
            </div>
            <span>4.9/5 Rating</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

  
  
  </>
}

export default HomeCta