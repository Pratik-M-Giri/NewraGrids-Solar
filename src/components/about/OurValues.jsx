import React from 'react'
import { motion } from 'framer-motion'
import { FaLeaf, FaRocket, FaShieldAlt, FaUsers, FaHeart, FaStar } from 'react-icons/fa'

const OurValues = () => {
  const values = [
    {
      icon: FaLeaf,
      title: "Sustainability",
      description: "Committed to reducing carbon footprint through clean energy solutions and eco-friendly practices.",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50"
    },
    {
      icon: FaShieldAlt,
      title: "Quality Excellence", 
      description: "Premium quality components, certified installations, and industry-best practices.",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: FaUsers,
      title: "Customer First",
      description: "Your satisfaction and energy savings are our ultimate priority with dedicated support.",
      color: "from-orange-500 to-amber-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: FaRocket,
      title: "Innovation",
      description: "Leveraging cutting-edge solar technologies for optimal energy efficiency and savings.",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50"
    }
  ]

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-white to-gray-50 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-3 lg:mb-4">
            Our <span className="text-green-600">Core Values</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            The fundamental principles that guide everything we do
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`${value.bgColor} rounded-2xl p-6 lg:p-8 border border-gray-200 group hover:shadow-xl transition-all duration-300 text-left`}
            >
              <div className={`w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <value.icon className="text-xl lg:text-2xl text-white" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-2 lg:mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 lg:mt-16"
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 lg:p-8 text-white shadow-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-3">
              <FaHeart className="text-2xl lg:text-3xl text-white" />
              <FaStar className="text-2xl lg:text-3xl text-yellow-300" />
              <FaHeart className="text-2xl lg:text-3xl text-white" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-3">
              Built on Trust & Integrity
            </h3>
            <p className="text-green-100 text-sm lg:text-base">
              These core values guide every solar solution we deliver to our customers
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default OurValues