import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const HomeAbout = () => {
  return <>
  
  
   {/* About Us Preview */}
<section className="py-20 bg-gradient-to-br from-green-600 via-emerald-700 to-green-800 text-white w-full">
  <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
    <div className="text-center max-w-6xl mx-auto">
      {/* Heading */}
      <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">
        About NewRa Grids
      </h2>

      {/* Description */}
      <p className="text-lg sm:text-xl lg:text-2xl mb-10 leading-relaxed text-green-100">
        We are dedicated to providing eco-friendly solar solutions that help reduce carbon footprints 
        and energy costs. Our mission is to make solar energy accessible and affordable for everyone.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl py-8 px-4 hover:bg-white/20 transition-all duration-300">
          <div className="text-4xl lg:text-5xl font-bold text-yellow-300 mb-3">500+</div>
          <div className="text-green-100 text-lg font-medium">Solar Installations</div>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-2xl py-8 px-4 hover:bg-white/20 transition-all duration-300">
          <div className="text-4xl lg:text-5xl font-bold text-yellow-300 mb-3">10+</div>
          <div className="text-green-100 text-lg font-medium">Years Experience</div>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-2xl py-8 px-4 hover:bg-white/20 transition-all duration-300">
          <div className="text-4xl lg:text-5xl font-bold text-yellow-300 mb-3">24/7</div>
          <div className="text-green-100 text-lg font-medium">Customer Support</div>
        </div>
      </div>

      {/* CTA Button */}
      <Link
        to="/about"
        className="inline-flex items-center justify-center gap-2 mt-12 bg-white text-green-700 hover:bg-green-50 font-bold px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
      >
        Learn More About Us
        <FaArrowRight className="text-base" />
      </Link>
    </div>
  </div>
</section>
  
  
  
  </>
}

export default HomeAbout