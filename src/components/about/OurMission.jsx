import React from 'react'
import { motion } from 'framer-motion'
import { FaAward, FaShieldAlt, FaSun, FaUsers, FaRocket, FaHandshake } from 'react-icons/fa'

const OurMission = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-green-50 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Side - Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="flex justify-start mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <FaSun className="text-3xl text-white" />
                </div>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our <span className="text-green-600">Mission</span>
              </h2>
              
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  To make solar energy <span className="text-green-600 font-semibold">accessible, affordable, and reliable</span> for every home and business in India.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We believe in empowering communities with clean energy solutions that significantly reduce costs while making a positive environmental impact.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-700">
              <h3 className="text-3xl font-bold text-white mb-8">
                Why Choose <span className="text-green-400">NewRa Grids?</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaAward className="text-xl text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Certified Excellence</h4>
                    <p className="text-gray-300">ISO certified installations with industry-best practices</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaShieldAlt className="text-xl text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">25-Year Warranty</h4>
                    <p className="text-gray-300">Comprehensive warranty on panels and performance</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaUsers className="text-xl text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">5000+ Customers</h4>
                    <p className="text-gray-300">Trusted by homeowners and businesses nationwide</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaRocket className="text-xl text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Quick Installation</h4>
                    <p className="text-gray-300">Professional installation completed within days</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-700">
                <FaHandshake className="text-green-400" />
                <span className="text-green-400 font-semibold">Trusted Partner Since 2015</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default OurMission