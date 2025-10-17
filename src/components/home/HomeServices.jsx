import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";



import solarInstallation from '../../assets/hero1.webp';
import energyMonitoring from '../../assets/hero3.webp';
import maintenance from '../../assets/hero1.webp'; // Different image for maintenance
import { FaArrowRight, FaLeaf, FaSolarPanel, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const HomeServices = () => {
  const [loaded, setLoaded] = useState(false);


  useEffect(() => {
  const img = new Image();
  img.src = solarInstallation;
  img.onload = () => setLoaded(true);
}, []);


  return <>
  
  
  
   {/* Services Section with Images */}
 <section className="py-20 bg-gradient-to-b from-white to-gray-50 w-full relative overflow-hidden">
  {/* Background Elements */}
  <div className="absolute top-10 left-10 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
  <div className="absolute bottom-20 right-16 w-16 h-16 bg-yellow-200 rounded-full opacity-30 animate-bounce"></div>
  <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-blue-200 rounded-full opacity-25 animate-ping"></div>
  
  <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
    {/* Enhanced Header */}
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
          🔆 Our Premium Services
        </span>
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-6">
          Complete <span className="text-green-600">Solar Solutions</span>
        </h2>
        <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          End-to-end solar energy services designed to maximize your savings and minimize your carbon footprint
        </p>
      </motion.div>
    </div>

    {/* Enhanced Services Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
      {/* Service 1 - Solar Installation */}
      <motion.div 
        className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
        whileHover={{ y: -8, scale: 1.02 }}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative overflow-hidden">
          <div 
            className="h-52 bg-cover bg-center w-full transform group-hover:scale-110 transition-transform duration-700"
            style={{ backgroundImage: `url(${solarInstallation})` }}
          ></div>
          <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            Popular
          </div>
        </div>
        
        <div className="p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <FaSolarPanel className="text-2xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Solar Installation</h3>
          </div>
          
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Professional installation of high-efficiency solar panels tailored to your energy needs and roof specifications.
          </p>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3 text-gray-700">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <span>Residential & Commercial</span>
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <span>Grid-tied & Off-grid Systems</span>
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <span>25 Years Performance Warranty</span>
            </li>
          </ul>
          
          <Link 
            to="/contact" 
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 group/btn"
          >
            Get Free Quote
            <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </motion.div>

      {/* Service 2 - Energy Monitoring */}
      <motion.div 
        className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
        whileHover={{ y: -8, scale: 1.02 }}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="relative overflow-hidden">
          <div 
            className="h-52 bg-cover bg-center w-full transform group-hover:scale-110 transition-transform duration-700"
            style={{ backgroundImage: `url(${energyMonitoring})` }}
          ></div>
          <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            Smart Tech
          </div>
        </div>
        
        <div className="p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <FaSun className="text-2xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Energy Monitoring</h3>
          </div>
          
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Real-time monitoring and analytics to optimize your solar system performance and energy consumption.
          </p>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3 text-gray-700">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 text-sm">✓</span>
              </div>
              <span>Live Performance Tracking</span>
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 text-sm">✓</span>
              </div>
              <span>Mobile App Dashboard</span>
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 text-sm">✓</span>
              </div>
              <span>Energy Usage Analytics</span>
            </li>
          </ul>
          
          <Link 
            to="/contact" 
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 group/btn"
          >
            View Demo
            <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </motion.div>

      {/* Service 3 - Maintenance */}
      <motion.div 
        className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 lg:col-span-2 xl:col-span-1"
        whileHover={{ y: -8, scale: 1.02 }}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative overflow-hidden">
          <div 
            className="h-52 bg-cover bg-center w-full transform group-hover:scale-110 transition-transform duration-700"
            style={{ backgroundImage: `url(${maintenance})` }}
          ></div>
          <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            24/7 Support
          </div>
        </div>
        
        <div className="p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <FaLeaf className="text-2xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Maintenance & Support</h3>
          </div>
          
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Comprehensive maintenance and round-the-clock support to ensure your solar system operates at peak efficiency.
          </p>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3 text-gray-700">
              <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-orange-600 text-sm">✓</span>
              </div>
              <span>Regular Maintenance Checks</span>
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-orange-600 text-sm">✓</span>
              </div>
              <span>24/7 Technical Support</span>
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-orange-600 text-sm">✓</span>
              </div>
              <span>Extended Warranty Coverage</span>
            </li>
          </ul>
          
          <Link 
            to="/contact" 
            className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 group/btn"
          >
            Contact Support
            <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </motion.div>
    </div>

    {/* Bottom CTA */}
    <motion.div 
      className="text-center mt-16 pt-8 border-t border-gray-200"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-gray-600 text-lg mb-6">
        Not sure which service you need? Let our experts guide you.
      </p>
      <Link 
        to="/contact" 
        className="inline-flex items-center gap-3 bg-gray-800 hover:bg-gray-900 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        <FaArrowRight className="text-sm" />
        Get Professional Advice
      </Link>
    </motion.div>
  </div>
</section>
  
  </>
}

export default HomeServices