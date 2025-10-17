import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaSolarPanel,
  FaSun,
  FaLeaf,
  FaCalculator,
  FaMapMarkerAlt,
  FaArrowRight,
  FaChevronLeft, 
  FaChevronRight
} from "react-icons/fa";

import heroImage1 from "../assets/hero1.webp";
import heroImage2 from "../assets/hero2.webp";
import heroImage3 from "../assets/hero3.webp";
import HomeAbout from "../components/home/HomeAbout";
import HomeServices from "../components/home/HomeServices";
import HomeCta from "../components/home/HomeCta";

const Home = () => {
  const images = [heroImage1, heroImage2, heroImage3];
  const [currentImage, setCurrentImage]   = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section with Background Image */}
<section className="relative min-h-[100vh] flex items-center justify-center text-white w-full overflow-hidden">
  {/* Background Images with smooth fade */}
  <div className="absolute inset-0 w-full h-full">
    {images.map((img, index) => (
      <motion.div
        key={index}
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.9)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: currentImage === index ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-emerald-800/70"></div>
      </motion.div>
    ))}
  </div>

  {/* Hero Content */}
  <div className="relative w-full px-4 sm:px-6 lg:px-8 text-center z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full"
    >
      <FaSun className="mx-auto text-6xl lg:text-7xl mb-6 text-yellow-300" />
      <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
        Power Your Life with{" "}
        <span className="text-yellow-300">Solar Energy</span>
      </h1>
      <p className="text-xl lg:text-2xl xl:text-3xl mb-8 max-w-4xl mx-auto text-green-100">
        Clean, sustainable, and affordable solar solutions by NewRa Grids
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link
          to="/contact"
          className="bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold px-8 py-4 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 text-lg flex items-center gap-2"
        >
          Get Free Consultation
          <FaArrowRight className="text-sm" />
        </Link>
        <Link
          to="/calculator"
          className="border-2 border-white hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 text-lg flex items-center gap-2"
        >
          Calculate Savings
          <FaCalculator className="text-sm" />
        </Link>
      </div>
    </motion.div>
  </div>

  {/* Image Slider Indicators */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
    <div className="flex space-x-3">
      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentImage(index)}
          className="relative group"
          aria-label={`Go to slide ${index + 1}`}
        >
          {/* Outer circle */}
          <div className={`w-4 h-4 rounded-full border-2 border-white transition-all duration-300 ${
            currentImage === index ? 'bg-white/30' : 'bg-transparent'
          } group-hover:bg-white/20`} />
          
          {/* Active indicator animation */}
          {currentImage === index && (
            <motion.div
              className="absolute inset-0 border-2 border-yellow-300 rounded-full"
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: 1.4, opacity: 0 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </button>
      ))}
    </div>
  </div>

  {/* Navigation Arrows */}
  <button
    onClick={() => setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 border border-white/30 hover:border-white/50 transition-all duration-300 flex items-center justify-center group"
    aria-label="Previous image"
  >
    <FaChevronLeft className="text-white group-hover:text-yellow-300 transition-colors duration-300" />
  </button>

  <button
    onClick={() => setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 border border-white/30 hover:border-white/50 transition-all duration-300 flex items-center justify-center group"
    aria-label="Next image"
  >
    <FaChevronRight className="text-white group-hover:text-yellow-300 transition-colors duration-300" />
  </button>

  {/* Auto-play indicator */}
  <div className="absolute top-8 right-8 z-20 flex items-center space-x-2">
    <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
    <span className="text-sm text-white/80 font-medium">Auto Play</span>
  </div>
</section>
      {/* Quick Features */}
      <section className="py-28 bg-gradient-to-br from-slate-50 via-white to-emerald-50 w-full relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-200 rounded-full opacity-10 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-orange-200 rounded-full opacity-15 animate-ping"></div>

        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
          {/* Premium Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-2xl text-xl font-bold mb-6 shadow-2xl">
              ⚡ Powerful Tools
            </span>
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Explore Our <span className="text-transparent bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text">Solar Solutions</span>
            </h2>
            <p className="text-2xl lg:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Advanced tools to help you make the best solar energy decisions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12 max-w-7xl mx-auto">

            {/* Card 1 - Premium Calculator */}
            <motion.div
              className="group relative bg-white/90 backdrop-blur-sm text-center p-12 rounded-3xl shadow-2xl hover:shadow-3xl border border-white/80 transition-all duration-500 overflow-hidden"
              whileHover={{ y: -15, scale: 1.02 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg group-hover:blur-xl"></div>
              <div className="absolute inset-[3px] rounded-3xl bg-white"></div>

              <div className="relative z-10">
                {/* Animated Icon */}
                <motion.div
                  className="flex justify-center mb-8"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl">
                      <FaCalculator className="text-5xl text-white" />
                    </div>
                    {/* Floating Element */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 group-hover:text-green-700 transition-colors duration-300">
                  Solar Calculator
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed mb-8 group-hover:text-gray-700 transition-colors duration-300">
                  Get precise estimates of your electricity cost savings and return on investment with our advanced AI-powered calculator.
                </p>

                {/* Enhanced CTA */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/solarmap"
                    className="inline-flex items-center justify-center gap-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-5 px-10 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group/btn text-lg min-w-[200px]"
                  >
                    Calculate Now
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <FaArrowRight className="text-base group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Card 2 - Premium Solar Map */}
            <motion.div
              className="group relative bg-white/90 backdrop-blur-sm text-center p-12 rounded-3xl shadow-2xl hover:shadow-3xl border border-white/80 transition-all duration-500 overflow-hidden"
              whileHover={{ y: -15, scale: 1.02 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg group-hover:blur-xl"></div>
              <div className="absolute inset-[3px] rounded-3xl bg-white"></div>

              <div className="relative z-10">
                {/* Animated Icon */}
                <motion.div
                  className="flex justify-center mb-8"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl">
                      <FaMapMarkerAlt className="text-5xl text-white" />
                    </div>
                    {/* Floating Element */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full animate-bounce"></div>
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 group-hover:text-blue-700 transition-colors duration-300">
                  Solar Map
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed mb-8 group-hover:text-gray-700 transition-colors duration-300">
                  Explore real-time solar irradiance data and optimal panel placement with our interactive 3D mapping technology.
                </p>

                {/* Enhanced CTA */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/map"
                    className="inline-flex items-center justify-center gap-4 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold py-5 px-10 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group/btn text-lg min-w-[200px]"
                  >
                    Explore Map
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      <FaArrowRight className="text-base group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Card 3 - Premium Eco Solutions */}
            <motion.div
              className="group relative bg-white/90 backdrop-blur-sm text-center p-12 rounded-3xl shadow-2xl hover:shadow-3xl border border-white/80 transition-all duration-500 overflow-hidden"
              whileHover={{ y: -15, scale: 1.02 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-400 via-amber-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg group-hover:blur-xl"></div>
              <div className="absolute inset-[3px] rounded-3xl bg-white"></div>

              <div className="relative z-10">
                {/* Animated Icon */}
                <motion.div
                  className="flex justify-center mb-8"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-amber-600 rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl">
                      <FaLeaf className="text-5xl text-white" />
                    </div>
                    {/* Floating Element */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-400 rounded-full animate-pulse"></div>
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 group-hover:text-orange-700 transition-colors duration-300">
                  Eco Impact
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed mb-8 group-hover:text-gray-700 transition-colors duration-300">
                  Track your carbon footprint reduction and environmental impact with detailed analytics and reporting.
                </p>

                {/* Enhanced CTA */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/about"
                    className="inline-flex items-center justify-center gap-4 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold py-5 px-10 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group/btn text-lg min-w-[200px]"
                  >
                    Learn More
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    >
                      <FaArrowRight className="text-base group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Decoration */}
          <motion.div
            className="text-center mt-16 pt-12 border-t border-gray-200/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="text-2xl text-gray-600 mb-8">
              Trusted by <span className="font-bold text-green-600">5,000+</span> customers nationwide
            </p>
            <div className="flex justify-center items-center gap-8 text-gray-400">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-orange-400 rounded-full animate-bounce"></div>
            </div>
          </motion.div>
        </div>
      </section>
      <HomeAbout />
      <HomeServices />
      <HomeCta />



    </div>
  );
};

export default Home;