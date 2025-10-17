import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaSun, FaAward, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      experience: "12+ years in Solar Industry",
      description: "Pioneering solar solutions with a vision for sustainable energy future.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop&crop=face",
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Priya Sharma",
      role: "Technical Director",
      experience: "Solar Engineering Expert",
      description: "Leading technical innovation and system optimization for maximum efficiency.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=500&h=600&fit=crop&crop=face",
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Amit Patel",
      role: "Operations Head",
      experience: "Project Management Specialist",
      description: "Ensuring seamless project execution and timely delivery across India.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face",
      color: "from-orange-500 to-amber-600"
    },
    {
      name: "Sneha Reddy",
      role: "Customer Success",
      experience: "8+ years Client Relations",
      description: "Dedicated to providing exceptional customer experience and support.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=600&fit=crop&crop=face",
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "Vikram Singh",
      role: "Solar Engineer",
      experience: "Renewable Energy Specialist",
      description: "Designing efficient solar systems tailored to client needs.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=600&fit=crop&crop=face",
      color: "from-indigo-500 to-purple-600"
    },
    {
      name: "Anjali Mehta",
      role: "Sales Director",
      experience: "Energy Solutions Expert",
      description: "Helping clients transition to solar with customized energy plans.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&h=600&fit=crop&crop=face",
      color: "from-red-500 to-pink-600"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const visibleMembers = [
    teamMembers[currentIndex],
    teamMembers[(currentIndex + 1) % teamMembers.length],
    teamMembers[(currentIndex + 2) % teamMembers.length],
    teamMembers[(currentIndex + 3) % teamMembers.length]
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-white to-gray-50 w-full overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <FaSun className="text-3xl text-white" />
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Meet Our <span className="text-green-600">Expert Team</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            The passionate professionals driving India's solar energy revolution
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative max-w-7xl mx-auto">
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute left-4 lg:-left-12 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300 group"
          >
            <FaChevronLeft className="text-xl group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute right-4 lg:-right-12 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300 group"
          >
            <FaChevronRight className="text-xl group-hover:scale-110 transition-transform" />
          </button>

          {/* Slider */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
              >
                {visibleMembers.map((member, index) => (
                  <motion.div
                    key={`${member.name}-${currentIndex}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative group"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Main Card - Only Photo Visible by Default */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden group-hover:shadow-2xl transition-all duration-500 h-96 lg:h-[450px]">
                      
                      {/* Image Container */}
                      <div className="relative h-full overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Gradient Overlay - Only on Hover */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-500 ${
                          hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                        }`} />

                        {/* Content - Only Shows on Hover */}
                        <div className={`absolute inset-0 p-6 lg:p-8 flex flex-col justify-end transition-all duration-500 ${
                          hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}>
                          
                          {/* Name & Role */}
                          <motion.h3 
                            className="text-2xl lg:text-3xl font-bold text-white mb-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: hoveredIndex === index ? 1 : 0, y: hoveredIndex === index ? 0 : 20 }}
                          >
                            {member.name}
                          </motion.h3>
                          
                          <motion.p 
                            className={`text-lg lg:text-xl font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-3`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: hoveredIndex === index ? 1 : 0, y: hoveredIndex === index ? 0 : 20 }}
                            transition={{ delay: 0.1 }}
                          >
                            {member.role}
                          </motion.p>

                          {/* Experience */}
                          <motion.div 
                            className="flex items-center gap-2 text-gray-200 mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: hoveredIndex === index ? 1 : 0, y: hoveredIndex === index ? 0 : 20 }}
                            transition={{ delay: 0.2 }}
                          >
                            <FaAward className="text-yellow-400" />
                            <span className="text-sm lg:text-base">{member.experience}</span>
                          </motion.div>

                          {/* Description */}
                          <motion.p 
                            className="text-gray-200 text-sm lg:text-base leading-relaxed mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: hoveredIndex === index ? 1 : 0, y: hoveredIndex === index ? 0 : 20 }}
                            transition={{ delay: 0.3 }}
                          >
                            {member.description}
                          </motion.p>

                          {/* Social Icons */}
                          <motion.div 
                            className="flex gap-3"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: hoveredIndex === index ? 1 : 0, y: hoveredIndex === index ? 0 : 20 }}
                            transition={{ delay: 0.4 }}
                          >
                            <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors shadow-lg">
                              <FaLinkedin className="text-sm" />
                            </button>
                            <button className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white hover:bg-cyan-600 transition-colors shadow-lg">
                              <FaTwitter className="text-sm" />
                            </button>
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Element */}
                    <motion.div 
                      className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r ${member.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      animate={{ 
                        scale: [1, 1.5, 1],
                        rotate: [0, 180, 360]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8 lg:mt-12">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-green-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl p-8 lg:p-12 text-white shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Powering India's Solar Future
            </h3>
            <p className="text-green-100 text-lg">
              5000+ satisfied customers • 25MW+ installed capacity • 98% satisfaction rate
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurTeam;